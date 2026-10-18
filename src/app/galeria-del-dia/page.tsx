import type { Metadata } from 'next'
import Link from 'next/link'
import { unstable_noStore as noStore } from 'next/cache'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Galería del día | Fábrica de Cortinas Girardot',
  description: 'Cada día una idea nueva: persianas, pérgolas metálicas, toldos y estructuras para el clima de Girardot. Imágenes de referencia y datos técnicos.',
}

type Dia = {
  fecha: string
  formato: string
  productos: string[]
  titulo: string
  imagenes: { url: string; producto: string }[]
  rotulos: { titulo: string; sub: string }[]
}

// Las imágenes del día las sube la automatización a Supabase Storage (bucket público
// web_uploads/galeria-dia). La página solo lee el índice: no hay despliegue diario.
async function cargarIndice(): Promise<Dia[]> {
  noStore()
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!base) return []
  try {
    const r = await fetch(`${base}/storage/v1/object/public/web_uploads/galeria-dia/index.json`, { cache: 'no-store' })
    if (!r.ok) return []
    const j = (await r.json()) as { dias?: Dia[] }
    return (j.dias || []).slice(0, 30)
  } catch {
    return []
  }
}

function fechaLarga(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long' })
}

export default async function GaleriaDelDiaPage() {
  const dias = await cargarIndice()
  return (
    <div className="page-top">
      <div className="container-site">
        <div style={{ marginBottom: '36px', maxWidth: '680px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Una idea nueva cada día</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '12px' }}>
            Galería <span className="text-gold-gradient">del día</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            Persianas, pérgolas metálicas, toldos y estructuras pensadas para el calor de Girardot, con sus datos técnicos. Las imágenes son de referencia; las medidas y el sistema se definen en la visita.
          </p>
        </div>

        {dias.length === 0 && (
          <div className="card-glass" style={{ padding: '28px', textAlign: 'center', color: 'var(--text-3)' }}>
            Hoy todavía no hay publicación. Vuelve mañana o <Link href="/productos" style={{ color: 'var(--gold-dark)' }}>mira el portafolio</Link>.
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {dias.map((d) => (
            <section key={d.fecha} className="card-glass" style={{ padding: 'clamp(18px, 3vw, 32px)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>{d.formato}</p>
                  <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)' }}>{d.titulo}</h2>
                </div>
                <span style={{ fontSize: '13px', color: 'var(--text-3)', textTransform: 'capitalize' }}>{fechaLarga(d.fecha)}</span>
              </div>
              <div className="gd-grid">
                {d.imagenes.map((im) => (
                  <a key={im.url} href={im.url} target="_blank" rel="noopener noreferrer" className="img-zoom-wrap" style={{ display: 'block', borderRadius: '14px', overflow: 'hidden', aspectRatio: '3 / 2', background: '#e8e4dd' }}>
                    <img src={im.url} alt={d.titulo} loading="lazy" className="img-zoom" />
                  </a>
                ))}
              </div>
              {d.rotulos.length > 0 && (
                <div className="gd-datos">
                  {d.rotulos.map((r) => (
                    <div key={r.titulo + r.sub} className="surface" style={{ padding: '14px 16px' }}>
                      <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{r.titulo}</p>
                      <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.5 }}>{r.sub}</p>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ marginTop: '18px' }}>
                <Link href="/cotizar" className="btn-primary" style={{ padding: '12px 22px', borderRadius: '12px', fontSize: '15px' }}>
                  Pedir visita sin costo <ArrowRight size={14} />
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
      <style>{`
        .gd-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .gd-datos { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 16px; }
        @media (max-width: 768px) {
          .gd-grid { grid-template-columns: 1fr; }
          .gd-datos { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
