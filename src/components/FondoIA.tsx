'use client'

import { useEffect, useRef } from 'react'

/**
 * Fondo vivo del hero: una red de nodos dorados que derivan y se conectan (el motivo del logo
 * Safri IA) y lamas de luz que cruzan despacio, como una persiana abriéndose.
 * Ligero: canvas sin librerías, se detiene fuera de pantalla y respeta «reducir movimiento».
 */
export default function FondoIA({ densidad = 55 }: { densidad?: number }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2)
    let raf = 0, visible = true, t0 = performance.now()
    const mouse = { x: -9999, y: -9999 }
    type P = { x: number; y: number; vx: number; vy: number; r: number }
    let puntos: P[] = []

    const medir = () => {
      const r = canvas.getBoundingClientRect()
      w = r.width; h = r.height
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.round(densidad * Math.min(1.4, Math.max(0.5, w / 1200)))
      puntos = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: 1 + Math.random() * 1.6,
      }))
    }

    const dibujar = (now: number) => {
      if (!visible) { raf = requestAnimationFrame(dibujar); return }
      const t = (now - t0) / 1000
      ctx.clearRect(0, 0, w, h)

      // Lamas de luz: franjas horizontales suaves que se desplazan (persiana abriéndose)
      const paso = 64
      for (let y = -paso; y < h + paso; y += paso) {
        const fase = (t * 18 + y * 0.6) % (w + 400) - 200
        const g = ctx.createLinearGradient(fase - 220, 0, fase + 220, 0)
        g.addColorStop(0, 'rgba(232,199,106,0)')
        g.addColorStop(0.5, 'rgba(232,199,106,0.055)')
        g.addColorStop(1, 'rgba(232,199,106,0)')
        ctx.fillStyle = g
        ctx.fillRect(0, y, w, 22)
      }

      // Nodos
      for (const p of puntos) {
        p.x += p.vx; p.y += p.vy
        if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10; if (p.y > h + 10) p.y = -10
        // leve atracción al mouse
        const dx = mouse.x - p.x, dy = mouse.y - p.y, d2 = dx * dx + dy * dy
        if (d2 < 160 * 160) { p.x += dx * 0.004; p.y += dy * 0.004 }
      }
      // Conexiones
      ctx.lineWidth = 1
      for (let i = 0; i < puntos.length; i++) {
        for (let j = i + 1; j < puntos.length; j++) {
          const a = puntos[i], b = puntos[j]
          const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy)
          if (d < 130) {
            ctx.strokeStyle = `rgba(232,199,106,${(1 - d / 130) * 0.22})`
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      for (const p of puntos) {
        const pulso = 0.6 + 0.4 * Math.sin(t * 1.6 + p.x * 0.02)
        ctx.fillStyle = `rgba(232,199,106,${0.55 * pulso})`
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = `rgba(232,199,106,${0.12 * pulso})`
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2); ctx.fill()
      }
      raf = requestAnimationFrame(dibujar)
    }

    const onMove = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting })
    io.observe(canvas)
    medir()
    window.addEventListener('resize', medir)
    canvas.parentElement?.addEventListener('mousemove', onMove)
    canvas.parentElement?.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(dibujar)
    return () => {
      cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', medir)
      canvas.parentElement?.removeEventListener('mousemove', onMove)
      canvas.parentElement?.removeEventListener('mouseleave', onLeave)
    }
  }, [densidad])

  return <canvas ref={ref} aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
}
