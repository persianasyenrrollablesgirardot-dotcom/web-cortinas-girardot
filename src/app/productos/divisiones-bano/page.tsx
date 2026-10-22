import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowDown, ShieldCheck, Ruler, Droplets } from 'lucide-react'
import { divisiones, proceso, entregables, PENDIENTE } from './divisiones'

export const metadata: Metadata = {
  title: 'Divisiones de baño en vidrio templado en Girardot: fija, corredera, abatible, plegable, frameless | Fábrica de Cortinas Girardot',
  description:
    'Divisiones de baño solo en vidrio templado de seguridad NTC 1578, sin marcos de aluminio: fija walk-in, corredera, abatible, plegable, esquinera y frameless, más mampara para tina. Herrajes en acero inoxidable, sellado antihongos. Girardot, Melgar y la región.',
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

export default function DivisionesBanoPage() {
  const portada = divisiones.find((d) => d.slug === 'frameless')!
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Hero */}
        <div className="hero-section" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '40px', minHeight: '360px', border: '1px solid rgba(201,169,110,0.18)', background: '#0B1526' }}>
          <img src={portada.img} alt={portada.imgAlt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.92) 0%, rgba(8,14,26,0.6) 55%, rgba(8,14,26,0.15) 100%)' }} />
          <div style={{ position: 'relative', padding: 'clamp(28px, 5vw, 56px)', maxWidth: '660px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Divisiones de baño · Solo vidrio templado</span>
            <h1 style={{ fontSize: 'clamp(30px, 4.6vw, 54px)', fontWeight: 300, lineHeight: 1.06, color: '#EEF2FF', marginBottom: '14px' }}>
              Vidrio con norma,<br /><span className="text-gold-gradient" style={{ fontWeight: 500 }}>sellado que no gotea</span>
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(238,242,255,0.7)', lineHeight: 1.65, marginBottom: '22px' }}>
              Fija walk-in, corredera, abatible, plegable, esquinera y frameless, más mampara para tina. Todo en vidrio templado de seguridad NTC 1578, con herrajes en acero inoxidable y sellado antihongos. Sin marco de aluminio perimetral: no fabricamos ese sistema.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="#sistemas" className="btn-primary" style={{ fontSize: '15px', padding: '12px 24px' }}>Ver los 7 sistemas <ArrowRight size={14} /></a>
              <Link href="/cotizar" className="btn-secondary" style={{ fontSize: '15px', padding: '12px 24px' }}>Pedir visita y medición</Link>
            </div>
          </div>
        </div>

        {/* Tres pilares */}
        <div className="pg-grid-3" style={{ marginBottom: '56px' }}>
          {[
            { Icon: ShieldCheck, t: 'Vidrio con norma',        d: 'Templado de seguridad certificado bajo NTC 1578, con sello visible en el vidrio: si se rompe, se desintegra en gránulos redondeados, no en esquirlas.' },
            { Icon: Ruler,       t: 'Medida exacta, cero reprocesos', d: 'El vidrio no se perfora ni se corta después de templado. Se mide en obra terminada, se fabrica a esa medida exacta y se instala sin ajustes.' },
            { Icon: Droplets,    t: 'Sellado que no gotea',    d: 'Silicona neutra antihongos en todo el perímetro, 24 horas de curado antes de bañarse, y prueba de agua antes de la entrega.' },
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
          <Kicker>Siete sistemas</Kicker>
        </div>
        <div className="pg-sistemas" style={{ marginBottom: '72px' }}>
          {divisiones.map((d, i) => {
            const wide = !!d.destacado
            return (
              <a key={d.slug} href={`#${d.slug}`} className={`card-glass pg-sis-card${wide ? ' pg-sis-card--wide' : ''}`} style={{ textDecoration: 'none', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderColor: d.destacado ? 'rgba(201,169,110,0.35)' : undefined }}>
                <div className="img-zoom-wrap" style={{ position: 'relative', aspectRatio: wide ? '16/7' : '4/3', background: 'linear-gradient(135deg,#0D1525,#1A2A4A)' }}>
                  <Imagen src={d.img} alt={d.imgAlt} eager={i < 2} />
                  <span className="tag" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.92)', color: 'var(--gold-dark)', fontWeight: 600, fontSize: '12px' }}>{d.tag}</span>
                  <span style={{ position: 'absolute', bottom: '12px', right: '12px', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', background: 'rgba(0,0,0,0.35)', padding: '3px 8px', borderRadius: '6px' }}>Imagen de referencia</span>
                </div>
                <div style={{ padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <p style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.06em' }}>{d.sub}</p>
                  <h2 style={{ fontSize: wide ? '22px' : '18px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{d.nombre}</h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{d.resumen}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                    {d.usos.map((u) => <span key={u} className="tag" style={{ fontSize: '12px', padding: '4px 10px' }}>{u}</span>)}
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
          {divisiones.map((d, i) => (
            <section key={d.slug} id={d.slug} className="card-glass pg-ficha" style={{ scrollMarginTop: '110px', overflow: 'hidden' }}>
              <div className="pg-ficha-img img-zoom-wrap" style={{ background: 'linear-gradient(135deg,#0D1525,#1A2A4A)' }}>
                <Imagen src={d.img} alt={d.imgAlt} />
              </div>
              <div style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.1em' }}>SISTEMA {String(i + 1).padStart(2, '0')}</span>
                  <span className="tag" style={{ fontSize: '12px' }}>{d.tag}</span>
                  <span className="tag" style={{ fontSize: '12px', color: 'var(--gold-dark)', borderColor: 'rgba(184,145,42,0.3)', background: 'rgba(184,145,42,0.06)' }}>Vidrio templado NTC 1578</span>
                </div>
                <h3 style={{ fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.15, marginBottom: '4px' }}>{d.nombre}</h3>
                <p style={{ fontSize: '13px', color: 'var(--gold)', letterSpacing: '0.06em', marginBottom: '18px' }}>{d.sub}</p>
                <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
                  {d.ficha.map((row, j) => (
                    <div key={row.label} className="pg-ficha-row" style={{ background: j % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent', borderTop: j > 0 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-3)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{row.label}</span>
                      <span style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.5 }}>{row.pendiente ? <Pendiente>{row.value}</Pendiente> : row.value}</span>
                    </div>
                  ))}
                </div>
                {d.notas.map((n) => (
                  <div key={n} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', marginBottom: '6px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '9px' }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.6 }}>{n}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginTop: '18px' }}>
                  <Link href={`/cotizar?sistema=${encodeURIComponent(d.nombre)}`} className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
                    Pedir visita y medición <ArrowRight size={14} />
                  </Link>
                  <a href="#sistemas" style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--text-3)', textDecoration: 'none' }}>↑ volver</a>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Proceso */}
        <Kicker>Cómo se trabaja una división de baño</Kicker>
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
        <Kicker>Lo que recibes con la instalación</Kicker>
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
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Ya tienes el enchape terminado?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Vamos, medimos el vano exacto y te mostramos los sistemas que caben ahí.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>Pedir visita y medición <ArrowRight size={14} /></Link>
            <a href="https://wa.me/573202381865" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '15px', padding: '11px 22px' }}>WhatsApp</a>
          </div>
        </div>

        {/* Enlace a Películas solares */}
        <div style={{ marginTop: '32px' }}>
          <Link href="/productos/peliculas" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 24px', borderRadius: '12px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>¿El vidrio es de una ventana, no de un baño?</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Películas solares y de seguridad →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Control solar, UV y seguridad directamente sobre el vidrio existente.</p>
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
