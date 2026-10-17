import type { Metadata } from 'next'
import Link from 'next/link'
import fs from 'node:fs'
import path from 'node:path'
import { ArrowLeft, ArrowRight, ArrowDown, Flag, ImageIcon } from 'lucide-react'
import { sistemas, familias, PENDIENTE } from './sistemas'

export const metadata: Metadata = {
  title: 'Pérgolas y estructuras metálicas para clima cálido en Girardot | Fábrica de Cortinas Girardot',
  description:
    'Doce sistemas de sombra, techo y fachada para el clima de Girardot: pérgolas adosadas y autoportantes, lamas, bioclimática, marquesinas, corredores, gazebos, carports, quiebrasoles, celosías y deck. Acero estructural, policarbonato o teja.',
}

const proceso = [
  { n: '01', t: 'Visita y medición',        d: 'Piso (placa maciza, losa aligerada o jardín), muros, desagüe y acceso. La pendiente se define desde el primer día.' },
  { n: '02', t: 'Diseño y despiece',        d: 'Render en tu espacio, lista de perfiles con pesos y cotización cerrada. Nada se corta sin tu aprobación.' },
  { n: '03', t: 'Fabricación en taller',    d: 'Corte, armado a escuadra y soldadura por módulos. Tubos tapados. Anticorrosivo el mismo día.' },
  { n: '04', t: 'Anclaje',                  d: 'Perforación, limpieza del hueco y anclaje químico o expansivo según el piso. Sello y reposición de la impermeabilización.' },
  { n: '05', t: 'Montaje y techo',          d: 'Columnas, vigas y correas aplomadas. Policarbonato con la cara UV arriba, holguras de dilatación y cintas de sellado.' },
  { n: '06', t: 'Prueba de agua y entrega', d: 'Manguera sobre techo, canal y encuentro con el muro. Acta de entrega con fotos y garantía escrita.' },
]

const faq = [
  { q: '¿Necesito permiso del conjunto?', a: 'Casi siempre sí, para cualquier estructura fija en terraza o zona común. Lo pedimos antes de fabricar, no después.' },
  { q: '¿Se puede anclar en una terraza impermeabilizada?', a: 'Sí. Preferimos muros y vigas; sobre la placa usamos anclaje químico, sello elastomérico bajo la platina y reponemos la impermeabilización alrededor de cada pie.' },
  { q: '¿Aguanta granizo y aguaceros?', a: 'Con policarbonato de 6–8 mm sobre correas a la distancia del fabricante, pendiente de 5° o más y canal amplia, sí. La prueba de agua se hace delante de ti.' },
  { q: '¿Cuánto tarda?', a: `Fabricación e instalación: ${PENDIENTE} ⚑. Depende del tamaño y del acabado (la electrostática suma días de horno).` },
  { q: '¿Qué mantenimiento necesita?', a: 'Lavar techo y canal dos veces al año con agua y jabón neutro. Revisar la pintura una vez al año en uniones y pies de columna.' },
]

function Pendiente({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '2px 10px', borderRadius: '999px', background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.3)', color: '#B91C1C', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}>
      <Flag size={11} /> {children}
    </span>
  )
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>{children}</p>
}

function tieneImagen(img: string) {
  return fs.existsSync(path.join(process.cwd(), 'public', img))
}

function Imagen({ src, alt, eager, pos }: { src: string; alt: string; eager?: boolean; pos?: string }) {
  if (!tieneImagen(src)) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        <ImageIcon size={22} /> render en proceso
      </div>
    )
  }
  return <img className="img-zoom" src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} style={{ objectPosition: pos ?? 'center' }} />
}

export default function PergolasMetalicasPage() {
  const numero = new Map(sistemas.map((s, i) => [s.slug, i + 1]))
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Aviso de borrador — se retira antes de publicar */}
        <div style={{ marginBottom: '20px', padding: '10px 16px', borderRadius: '12px', background: 'rgba(220,38,38,0.06)', border: '1px dashed rgba(220,38,38,0.35)', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <Pendiente>Borrador en rama aislada</Pendiente>
          <span style={{ fontSize: '13px', color: 'var(--text-2)' }}>Imágenes: renders provisionales generados por IA, a reemplazar por fotos de obra. Datos con ⚑ (garantía, plazo, precio) pendientes de confirmar.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '13px', color: 'var(--text-3)', flexWrap: 'wrap' }}>
          <Link href="/exteriores" style={{ color: 'var(--text-3)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}><ArrowLeft size={13} /> Exteriores · Clima cálido</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-2)' }}>Pérgolas y estructuras metálicas</span>
        </div>

        {/* Encabezado */}
        <div style={{ maxWidth: '760px', marginBottom: '36px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Exteriores · Clima cálido · Fabricación propia</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '14px' }}>
            Sombra y techo <span className="text-gold-gradient">para el sol de Girardot</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            {sistemas.length} sistemas ordenados por el problema que resuelven: la terraza a las dos de la tarde, el aguacero de las cuatro, el carro al sol, la fachada al poniente, el piso que quema. Misma forma de hacerlos: acero estructural, anclaje elegido según tu piso y prueba de agua antes de entregar.
          </p>
        </div>

        {/* Índice por problema */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '44px' }}>
          {familias.map((f) => (
            <a key={f.slug} href={`#f-${f.slug}`} className="tag" style={{ textDecoration: 'none', fontSize: '13px', padding: '7px 14px', color: 'var(--text-2)', background: 'var(--surface)' }}>
              {f.problema} <span style={{ color: 'var(--text-3)' }}>· {sistemas.filter((s) => s.familia === f.slug).length}</span>
            </a>
          ))}
        </div>

        {/* ═══ GALERÍA POR PROBLEMA ═══ */}
        {familias.map((f, fi) => {
          const lista = sistemas.filter((s) => s.familia === f.slug)
          return (
            <section key={f.slug} id={`f-${f.slug}`} style={{ marginBottom: '56px', scrollMarginTop: '110px' }}>
              <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.1em' }}>{String(fi + 1).padStart(2, '0')}</span>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>{f.problema}</p>
                  <h2 style={{ fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.15, marginBottom: '4px' }}>{f.titulo}</h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>{f.desc}</p>
                </div>
              </div>
              <div className="pg-sistemas">
                {lista.map((s) => {
                  const wide = !!s.destacado
                  return (
                    <a key={s.slug} href={`#${s.slug}`} className={`card-glass pg-sis-card${wide ? ' pg-sis-card--wide' : ''}`} style={{ textDecoration: 'none', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderColor: s.destacado ? 'rgba(201,169,110,0.35)' : undefined }}>
                      <div className="img-zoom-wrap" style={{ position: 'relative', aspectRatio: wide ? '16/7' : '4/3', background: 'linear-gradient(135deg,#0D1525,#1A2A4A)' }}>
                        <Imagen src={s.img} alt={s.imgAlt} eager={fi === 0} pos="center 40%" />
                        <span className="tag" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.92)', color: 'var(--gold-dark)', fontWeight: 600, fontSize: '12px' }}>{s.tag}</span>
                        <span style={{ position: 'absolute', bottom: '12px', right: '12px', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', background: 'rgba(0,0,0,0.35)', padding: '3px 8px', borderRadius: '6px' }}>Render provisional</span>
                      </div>
                      <div style={{ padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                        <p style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.06em' }}>{s.sub}</p>
                        <h3 style={{ fontSize: wide ? '22px' : '18px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{s.nombre}</h3>
                        <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{s.resumen}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                          {s.usos.map((u) => <span key={u} className="tag" style={{ fontSize: '12px', padding: '4px 10px' }}>{u}</span>)}
                        </div>
                        <span style={{ marginTop: 'auto', paddingTop: '10px', fontSize: '13px', color: 'var(--gold)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          Ver ficha técnica <ArrowDown size={12} />
                        </span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </section>
          )
        })}

        {/* ═══ FICHAS TÉCNICAS ═══ */}
        <Kicker>Fichas técnicas por sistema</Kicker>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '56px' }}>
          {sistemas.map((s) => (
            <section key={s.slug} id={s.slug} className="card-glass pg-ficha" style={{ scrollMarginTop: '110px', overflow: 'hidden' }}>
              <div className="pg-ficha-img img-zoom-wrap" style={{ background: 'linear-gradient(135deg,#0D1525,#1A2A4A)' }}>
                <Imagen src={s.img} alt={s.imgAlt} />
              </div>
              <div style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.1em' }}>SISTEMA {String(numero.get(s.slug)).padStart(2, '0')}</span>
                  <span className="tag" style={{ fontSize: '12px' }}>{s.tag}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>· {familias.find((f) => f.slug === s.familia)?.problema}</span>
                  {s.pendienteDecision && <Pendiente>{s.pendienteDecision}</Pendiente>}
                </div>
                <h3 style={{ fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.15, marginBottom: '4px' }}>{s.nombre}</h3>
                <p style={{ fontSize: '13px', color: 'var(--gold)', letterSpacing: '0.06em', marginBottom: '18px' }}>{s.sub}</p>

                <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
                  {s.ficha.map((row, j) => (
                    <div key={row.label} className="pg-ficha-row" style={{ background: j % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent', borderTop: j > 0 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-3)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{row.label}</span>
                      <span style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.5 }}>{row.pendiente ? <Pendiente>{row.value}</Pendiente> : row.value}</span>
                    </div>
                  ))}
                </div>

                {s.notas.map((n) => (
                  <div key={n} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', marginBottom: '6px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '9px' }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.6 }}>{n}</span>
                  </div>
                ))}

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginTop: '18px' }}>
                  <Link href={`/cotizar?sistema=${encodeURIComponent(s.nombre)}`} className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
                    Cotizar este sistema <ArrowRight size={14} />
                  </Link>
                  <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>Desde <Pendiente>{PENDIENTE}</Pendiente></span>
                  <a href="#top" style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--text-3)', textDecoration: 'none' }}>↑ volver a los sistemas</a>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Accesorios */}
        <Link href="/productos/pergolas-metalicas/accesorios" style={{ textDecoration: 'none' }}>
          <div className="card-glass pg-acc-banner" style={{ marginBottom: '56px', padding: '26px 32px', borderColor: 'rgba(201,169,110,0.3)', background: 'linear-gradient(135deg, rgba(184,145,42,0.07) 0%, rgba(184,145,42,0.02) 100%)' }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>Catálogo técnico ilustrado</p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>Accesorios y ferretería: anclajes, pernos, perfilería, canal, sellos, eléctrico</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>90 referencias con imagen, uso, especificación, cantidades para 3 × 4 m y las nueve reglas de fijación que hacen que la pérgola dure.</p>
            </div>
            <span className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px', whiteSpace: 'nowrap' }}>Ver accesorios <ArrowRight size={14} /></span>
          </div>
        </Link>

        {/* Proceso */}
        <Kicker>Cómo la hacemos, sea cual sea el sistema</Kicker>
        <div className="pg-grid-3" style={{ marginBottom: '56px' }}>
          {proceso.map((p) => (
            <div key={p.n} className="surface" style={{ padding: '22px 24px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.1em' }}>{p.n}</span>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', margin: '6px 0 8px' }}>{p.t}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{p.d}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <Kicker>Preguntas frecuentes</Kicker>
        <div className="grid-cols-2" style={{ marginBottom: '56px' }}>
          {faq.map((f) => (
            <div key={f.q} className="surface" style={{ padding: '20px 24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{f.q}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="grid-cols-cta" style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿No sabes cuál sistema te sirve?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Visitamos tu espacio, revisamos piso y muros, y te entregamos render y cotización sin costo.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Solicitar cotización <ArrowRight size={14} />
            </Link>
            <a href="https://wa.me/573202381865" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Relacionados Safra */}
        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          <Link href="/productos/pergolas" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 24px', borderRadius: '12px', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>¿Prefieres recogerla?</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Pérgola de lona retráctil →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Aluminio + lona Acrysun, manual o motorizada</p>
            </div>
          </Link>
          <Link href="/productos/toldo-romano" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 24px', borderRadius: '12px', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Exteriores</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Toldo romano corredizo →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Tela Solar Screen, manual o motorizado</p>
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
        .pg-acc-banner { display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: center; }
        @media (max-width: 900px) {
          .pg-sistemas { grid-template-columns: 1fr; }
          .pg-grid-3 { grid-template-columns: 1fr; }
          .pg-ficha { grid-template-columns: 1fr; }
          .pg-ficha-img { min-height: 220px; aspect-ratio: 16/9; }
          .pg-ficha-row { grid-template-columns: 1fr; gap: 2px; }
        }
        @media (max-width: 700px) { .pg-acc-banner { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
