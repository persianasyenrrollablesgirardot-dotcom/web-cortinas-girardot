import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowDown, FileCheck2, HardHat, Ruler } from 'lucide-react'
import { estructuras, proceso, entregables, PENDIENTE } from './estructuras'

export const metadata: Metadata = {
  title: 'Estructuras metálicas en Girardot: escaleras, mezzanines, cubiertas, ampliaciones, naves | Fábrica de Cortinas Girardot',
  description:
    'Línea de estructura metálica de construcción con diseño firmado: escaleras, mezzanines, domos, cubiertas de locales y bodegas, ampliaciones de segundo piso, fachadas comerciales, pasarelas y naves. Girardot, Melgar y la región.',
}

function Pendiente({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '2px 10px', borderRadius: '999px', background: 'rgba(184,145,42,0.08)', border: '1px solid rgba(184,145,42,0.3)', color: 'var(--gold-dark)', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}>
      {children}
    </span>
  )
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>{children}</p>
}

function Imagen({ src, alt, eager }: { src: string; alt: string; eager?: boolean }) {
  return <img className="img-zoom" src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} />
}

export default function EstructurasPage() {
  const portada = estructuras.find((e) => e.slug === 'naves-porticos')!
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Hero */}
        <div className="hero-section" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '40px', minHeight: '360px', border: '1px solid rgba(201,169,110,0.18)', background: '#0B1526' }}>
          <img src={portada.img} alt={portada.imgAlt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.92) 0%, rgba(8,14,26,0.6) 55%, rgba(8,14,26,0.15) 100%)' }} />
          <div style={{ position: 'relative', padding: 'clamp(28px, 5vw, 56px)', maxWidth: '660px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Estructuras metálicas · Construcción</span>
            <h1 style={{ fontSize: 'clamp(30px, 4.6vw, 54px)', fontWeight: 300, lineHeight: 1.06, color: '#EEF2FF', marginBottom: '14px' }}>
              Acero con cálculo,<br /><span className="text-gold-gradient" style={{ fontWeight: 500 }}>de la escalera a la nave</span>
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(238,242,255,0.7)', lineHeight: 1.65, marginBottom: '22px' }}>
              Escaleras, mezzanines, domos, cubiertas de locales y bodegas, segundos pisos, fachadas comerciales, pasarelas y naves. Diseño firmado por ingeniero, fabricación en taller y montaje. Nada se fabrica sin memoria de cálculo.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="#sistemas" className="btn-primary" style={{ fontSize: '15px', padding: '12px 24px' }}>Ver los 8 sistemas <ArrowRight size={14} /></a>
              <Link href="/cotizar" className="btn-secondary" style={{ fontSize: '15px', padding: '12px 24px' }}>Pedir visita técnica</Link>
            </div>
          </div>
        </div>

        {/* Tres pilares */}
        <div className="pg-grid-3" style={{ marginBottom: '56px' }}>
          {[
            { Icon: Ruler,      t: 'Diseño firmado', d: 'Memoria de cálculo y planos estructurales bajo NSR-10 por ingeniero responsable. Es lo que separa una estructura de una soldadura.' },
            { Icon: HardHat,    t: 'Taller y montaje propios', d: 'Planos de taller, soldadores calificados AWS D1.1, pintura antes de salir y montaje con equipo de alturas.' },
            { Icon: FileCheck2, t: 'Documentos que valen', d: 'Certificados del acero, planos as-built, acta de entrega y garantía escrita. Lo que la curaduría, la aseguradora y el comprador van a pedir.' },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="surface" style={{ padding: '22px 24px' }}>
              <Icon size={18} color="var(--gold)" />
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', margin: '10px 0 6px' }}>{t}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>

        {/* Galería */}
        <div id="sistemas" style={{ scrollMarginTop: '110px' }}>
          <Kicker>Ocho sistemas</Kicker>
        </div>
        <div className="pg-sistemas" style={{ marginBottom: '72px' }}>
          {estructuras.map((e, i) => {
            const wide = !!e.destacado
            return (
              <a key={e.slug} href={`#${e.slug}`} className={`card-glass pg-sis-card${wide ? ' pg-sis-card--wide' : ''}`} style={{ textDecoration: 'none', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderColor: e.destacado ? 'rgba(201,169,110,0.35)' : undefined }}>
                <div className="img-zoom-wrap" style={{ position: 'relative', aspectRatio: wide ? '16/7' : '4/3', background: 'linear-gradient(135deg,#0D1525,#1A2A4A)' }}>
                  <Imagen src={e.img} alt={e.imgAlt} eager={i < 2} />
                  <span className="tag" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.92)', color: 'var(--gold-dark)', fontWeight: 600, fontSize: '12px' }}>{e.tag}</span>
                  <span style={{ position: 'absolute', bottom: '12px', right: '12px', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', background: 'rgba(0,0,0,0.35)', padding: '3px 8px', borderRadius: '6px' }}>Imagen de referencia</span>
                </div>
                <div style={{ padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <p style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.06em' }}>{e.sub}</p>
                  <h2 style={{ fontSize: wide ? '22px' : '18px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{e.nombre}</h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{e.resumen}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                    {e.usos.map((u) => <span key={u} className="tag" style={{ fontSize: '12px', padding: '4px 10px' }}>{u}</span>)}
                  </div>
                  <span style={{ marginTop: 'auto', paddingTop: '10px', fontSize: '13px', color: 'var(--gold)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Ver ficha técnica <ArrowDown size={12} />
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        {/* Fichas */}
        <Kicker>Fichas técnicas</Kicker>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '72px' }}>
          {estructuras.map((e, i) => (
            <section key={e.slug} id={e.slug} className="card-glass pg-ficha" style={{ scrollMarginTop: '110px', overflow: 'hidden' }}>
              <div className="pg-ficha-img img-zoom-wrap" style={{ background: 'linear-gradient(135deg,#0D1525,#1A2A4A)' }}>
                <Imagen src={e.img} alt={e.imgAlt} />
              </div>
              <div style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.1em' }}>ESTRUCTURA {String(i + 1).padStart(2, '0')}</span>
                  <span className="tag" style={{ fontSize: '12px' }}>{e.tag}</span>
                  <span className="tag" style={{ fontSize: '12px', color: 'var(--gold-dark)', borderColor: 'rgba(184,145,42,0.3)', background: 'rgba(184,145,42,0.06)' }}>Diseño firmado</span>
                </div>
                <h3 style={{ fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.15, marginBottom: '4px' }}>{e.nombre}</h3>
                <p style={{ fontSize: '13px', color: 'var(--gold)', letterSpacing: '0.06em', marginBottom: '18px' }}>{e.sub}</p>
                <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
                  {e.ficha.map((row, j) => (
                    <div key={row.label} className="pg-ficha-row" style={{ background: j % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent', borderTop: j > 0 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-3)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{row.label}</span>
                      <span style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.5 }}>{row.pendiente ? <Pendiente>{row.value}</Pendiente> : row.value}</span>
                    </div>
                  ))}
                </div>
                {e.notas.map((n) => (
                  <div key={n} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', marginBottom: '6px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '9px' }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.6 }}>{n}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginTop: '18px' }}>
                  <Link href={`/cotizar?sistema=${encodeURIComponent(e.nombre)}`} className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
                    Pedir visita técnica <ArrowRight size={14} />
                  </Link>
                  <a href="#sistemas" style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--text-3)', textDecoration: 'none' }}>↑ volver</a>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Proceso */}
        <Kicker>Cómo se trabaja una estructura</Kicker>
        <div className="pg-grid-3" style={{ marginBottom: '56px' }}>
          {proceso.map((p) => (
            <div key={p.n} className="surface" style={{ padding: '22px 24px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.1em' }}>{p.n}</span>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', margin: '6px 0 8px' }}>{p.t}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{p.d}</p>
            </div>
          ))}
        </div>

        {/* Entregables */}
        <Kicker>Lo que recibes con la obra</Kicker>
        <div className="grid-cols-2" style={{ marginBottom: '56px' }}>
          {entregables.map((x, i) => (
            <div key={x} className="card-glass" style={{ padding: '14px 20px', display: 'grid', gridTemplateColumns: '28px 1fr', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontSize: '14px', color: 'var(--text-2)' }}>{x}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="grid-cols-cta" style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Tienes planos o solo la idea?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Con cualquiera de las dos empezamos: visita técnica, alcance y presupuesto por etapas.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>Pedir visita técnica <ArrowRight size={14} /></Link>
            <a href="https://wa.me/573202381865" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '15px', padding: '11px 22px' }}>WhatsApp</a>
          </div>
        </div>

        {/* Enlace a Exteriores */}
        <div style={{ marginTop: '32px' }}>
          <Link href="/exteriores" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 24px', borderRadius: '12px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>¿Es sombra o techo liviano para la casa?</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Exteriores · Clima cálido →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Pérgolas, carports, marquesinas, quiebrasoles y deck, sin trámite de licencia.</p>
            </div>
          </Link>
        </div>

      </div>

      <style>{`
        .pg-sistemas { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .pg-sis-card--wide { grid-column: 1 / -1; }
        .pg-sis-card:hover { transform: translateY(-2px); }
        .pg-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .pg-ficha { display: grid; grid-template-columns: 5fr 7fr; align-items: stretch; }
        .pg-ficha-img { min-height: 320px; }
        .pg-ficha-row { display: grid; grid-template-columns: 150px 1fr; gap: 14px; padding: 11px 16px; align-items: start; }
        @media (max-width: 900px) {
          .pg-sistemas { grid-template-columns: 1fr; }
          .pg-grid-3 { grid-template-columns: 1fr; }
          .pg-ficha { grid-template-columns: 1fr; }
          .pg-ficha-img { min-height: 220px; aspect-ratio: 16/9; }
          .pg-ficha-row { grid-template-columns: 1fr; gap: 2px; }
        }
      `}</style>
    </div>
  )
}
