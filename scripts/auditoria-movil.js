// Uso: chromium --headless=new --remote-debugging-port=9333 about:blank &  y luego
//      NODE_PATH=./node_modules node scripts/auditoria-movil.js http://localhost:3100 ./tmp-audit
// Auditoría móvil por CDP: para cada ruta mide desborde horizontal, grids multicolumna
// y textos diminutos a 390 px, y guarda captura completa.
const WebSocket = require('ws')
const fs = require('fs')
const http = require('http')

const BASE = process.argv[2] || 'http://localhost:3100'
const OUT = process.argv[3] || '/home/jhon/.openclaw/workspace/tmp-capturas/audit'
const rutas = JSON.parse(fs.readFileSync(require('path').join(__dirname, 'auditoria-rutas.json'), 'utf8'))
fs.mkdirSync(OUT, { recursive: true })

function getJSON(url) {
  return new Promise((res, rej) => http.get(url, (r) => { let d = ''; r.on('data', (c) => (d += c)); r.on('end', () => res(JSON.parse(d))) }).on('error', rej))
}

const AUDIT = `(() => {
  const vw = window.innerWidth
  const sw = document.documentElement.scrollWidth
  const bad = []
  const grids = []
  let tiny = 0
  const all = document.querySelectorAll('body *')
  for (const el of all) {
    const r = el.getBoundingClientRect()
    if (r.width === 0) continue
    const cs = getComputedStyle(el)
    if (r.right > vw + 2 && r.width > 40 && cs.position !== 'fixed' && cs.overflowX !== 'hidden' && cs.overflow !== 'hidden') {
      if (bad.length < 12) bad.push({ tag: el.tagName.toLowerCase(), cls: (el.className && el.className.baseVal === undefined ? String(el.className) : '').slice(0, 40), w: Math.round(r.width), right: Math.round(r.right), txt: (el.innerText || '').trim().slice(0, 40).replace(/\\n/g, ' ') })
    }
    if (cs.display === 'grid') {
      const cols = cs.gridTemplateColumns.split(' ').filter(Boolean)
      if (cols.length >= 3 && r.width > 0 && cols.some(c => parseFloat(c) < 140)) {
        if (grids.length < 8) grids.push({ cols: cols.length, colw: cols.map(c => Math.round(parseFloat(c))).join('/'), txt: (el.innerText || '').trim().slice(0, 40).replace(/\\n/g, ' ') })
      }
    }
    if (el.children.length === 0 && (el.innerText || '').trim().length > 3) {
      const fs = parseFloat(cs.fontSize)
      if (fs < 11) tiny++
    }
  }
  const tables = document.querySelectorAll('table').length
  return { vw, sw, overflow: sw - vw, bad, grids, tiny, tables, h: document.documentElement.scrollHeight }
})()`

;(async () => {
  const v = await getJSON('http://localhost:9333/json/version')
  const ws = new WebSocket(v.webSocketDebuggerUrl, { perMessageDeflate: false })
  await new Promise((r) => ws.on('open', r))
  let id = 0
  const pend = new Map()
  const events = []
  ws.on('message', (m) => {
    const j = JSON.parse(m)
    if (j.id && pend.has(j.id)) { pend.get(j.id)(j); pend.delete(j.id) } else events.push(j)
  })
  const send = (method, params = {}, sessionId) => new Promise((res) => { const i = ++id; pend.set(i, res); ws.send(JSON.stringify({ id: i, method, params, sessionId })) })

  const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' })
  const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true })
  await send('Page.enable', {}, sessionId)
  await send('Runtime.enable', {}, sessionId)
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true }, sessionId)
  await send('Emulation.setUserAgentOverride', { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' }, sessionId)

  const informe = []
  for (const ruta of rutas) {
    await send('Page.navigate', { url: BASE + ruta }, sessionId)
    await new Promise((r) => setTimeout(r, 3500))
    // desplazar para disparar animaciones whileInView
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, document.body.scrollHeight)', awaitPromise: true }, sessionId)
    await new Promise((r) => setTimeout(r, 1200))
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' }, sessionId)
    await new Promise((r) => setTimeout(r, 800))
    const ev = await send('Runtime.evaluate', { expression: AUDIT, returnByValue: true }, sessionId)
    const r = ev.result && ev.result.result ? ev.result.result.value : { error: JSON.stringify(ev).slice(0, 200) }
    const name = ruta === '/' ? 'home' : ruta.replace(/^\//, '').replace(/\//g, '_')
    const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 60, captureBeyondViewport: true, clip: { x: 0, y: 0, width: 390, height: Math.min(r.h || 844, 6000), scale: 1 } }, sessionId)
    if (shot.result && shot.result.data) fs.writeFileSync(`${OUT}/${name}.jpg`, Buffer.from(shot.result.data, 'base64'))
    informe.push({ ruta, ...r })
    console.log(ruta.padEnd(42), 'desborde', String(r.overflow).padStart(4), 'grids', (r.grids || []).length, 'tiny', r.tiny, 'alto', r.h)
  }
  fs.writeFileSync(`${OUT}/informe.json`, JSON.stringify(informe, null, 2))
  ws.close()
  process.exit(0)
})().catch((e) => { console.error(e); process.exit(1) })
