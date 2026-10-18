'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import type { DiaGaleria } from '@/lib/galeriaDia'

type Slide = { url: string; fecha: string; formato: string; titulo: string; dato?: { titulo: string; sub: string } }

/** Carrusel de la home: rota las imágenes de los últimos días con su dato técnico. */
export default function GaleriaDiaCarrusel({ dias, intervaloMs = 4500 }: { dias: DiaGaleria[]; intervaloMs?: number }) {
  const slides = useMemo<Slide[]>(() => {
    const out: Slide[] = []
    for (const d of dias.slice(0, 7)) {
      d.imagenes.forEach((im, k) => out.push({ url: im.url, fecha: d.fecha, formato: d.formato, titulo: d.titulo, dato: d.rotulos[k % Math.max(1, d.rotulos.length)] }))
    }
    return out
  }, [dias])
  const [i, setI] = useState(0)
  const [pausa, setPausa] = useState(false)

  useEffect(() => {
    if (slides.length < 2 || pausa) return
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), intervaloMs)
    return () => clearInterval(t)
  }, [slides.length, pausa, intervaloMs])

  if (slides.length === 0) return null
  const s = slides[i]
  const fecha = (() => { const [y, m, d] = s.fecha.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('es-CO', { day: 'numeric', month: 'long' }) })()

  return (
    <section className="section-sm" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div className="container-site">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Galería del día</p>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>Una idea nueva cada día</h2>
          </div>
          <Link href="/galeria-del-dia" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--gold-dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Ver todas <ArrowRight size={14} />
          </Link>
        </div>

        <div className="gdc" onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}>
          {slides.map((sl, k) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={sl.url} src={sl.url} alt={sl.titulo} className="gdc-img" style={{ opacity: k === i ? 1 : 0 }} loading={k < 2 ? 'eager' : 'lazy'} />
          ))}
          <div className="gdc-shade" />
          <div className="gdc-body">
            <span className="gdc-kicker">{s.formato} · {fecha}</span>
            <h3 className="gdc-titulo">{s.titulo}</h3>
            {s.dato && (
              <p className="gdc-dato"><b>{s.dato.titulo}.</b> {s.dato.sub}</p>
            )}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '12px' }}>
              <Link href="/galeria-del-dia" className="btn-primary" style={{ padding: '11px 18px', borderRadius: '12px', fontSize: '14px' }}>Ver la galería <ArrowRight size={13} /></Link>
              <Link href="/cotizar" className="gdc-btn2">Pedir visita</Link>
            </div>
          </div>
          <div className="gdc-dots">
            {slides.map((sl, k) => (
              <button key={sl.url} type="button" aria-label={`Imagen ${k + 1}`} onClick={() => setI(k)} className={`gdc-dot ${k === i ? 'on' : ''}`} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .gdc { position: relative; border-radius: 22px; overflow: hidden; background: #1a1612; aspect-ratio: 21 / 9; box-shadow: 0 12px 34px rgba(0,0,0,0.10); isolation: isolate; }
        .gdc-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: opacity 1.1s ease; }
        .gdc-shade { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,8,6,0.86) 0%, rgba(10,8,6,0.35) 50%, rgba(10,8,6,0) 80%); pointer-events: none; }
        .gdc-body { position: absolute; left: 0; right: 0; bottom: 0; padding: 26px 30px 54px; color: #fff; max-width: 720px; }
        .gdc-kicker { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #E8C76A; margin-bottom: 8px; }
        .gdc-titulo { color: #fff; font-size: clamp(24px, 3vw, 38px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.05; margin-bottom: 8px; text-shadow: 0 2px 12px rgba(0,0,0,.4); }
        .gdc-dato { font-size: 15px; line-height: 1.5; color: rgba(255,255,255,0.9); }
        .gdc-dato b { color: #fff; }
        .gdc-btn2 { display: inline-flex; align-items: center; padding: 11px 18px; border-radius: 12px; font-size: 14px; font-weight: 600; color: #fff; text-decoration: none; background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(8px); }
        .gdc-dots { position: absolute; left: 30px; bottom: 20px; display: flex; gap: 6px; }
        .gdc-dot { width: 8px; height: 8px; border-radius: 50%; border: 0; background: rgba(255,255,255,0.4); cursor: pointer; padding: 0; transition: all .3s; }
        .gdc-dot.on { background: var(--gold); width: 22px; border-radius: 4px; }
        @media (max-width: 768px) {
          .gdc { aspect-ratio: 4 / 5; border-radius: 18px; }
          .gdc-body { padding: 18px 18px 46px; }
          .gdc-dato { font-size: 14px; }
          .gdc-dots { left: 18px; bottom: 16px; }
        }
      `}</style>
    </section>
  )
}
