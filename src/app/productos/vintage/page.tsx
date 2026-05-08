import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const specs = [
  { label: 'Ancho mínimo',       value: '0.40 m' },
  { label: 'Ancho máximo',       value: '6.0 m' },
  { label: 'Alto mínimo',        value: '0.40 m' },
  { label: 'Alto máximo',        value: '5.85 m' },
  { label: 'Cobro mínimo alto',  value: '1.60 m' },
  { label: 'Cenefa',             value: 'PVC (ml adicional)' },
  { label: 'Sistema',            value: 'Manual' },
]

const diferencial = [
  {
    titulo: 'Lamas verticales plegables',
    desc: 'A diferencia de las persianas verticales estándar con lamas rígidas, el Vintage usa lamas que se pliegan con caída suave, creando el efecto visual de una cortina.',
  },
  {
    titulo: 'Estilo de cortina, funcionalidad de vertical',
    desc: 'Combina lo mejor de dos mundos: la operación sencilla y ordenada de una persiana vertical con la elegancia y fluidez de una cortina tradicional.',
  },
  {
    titulo: 'Gran formato',
    desc: 'Hasta 6.0 m de ancho y 5.85 m de alto. Uno de los sistemas de mayor capacidad en altura del catálogo. Ideal para espacios de doble altura.',
  },
  {
    titulo: 'Versatilidad de acabados',
    desc: 'Compatible con una amplia gama de telas. La cenefa PVC se añade como accesorio adicional por metro lineal para un acabado superior.',
  },
]

export default function VintagePage() {
  const cfg = getImagesConfig()
  const heroImg = cfg.productos_hero?.['vintage'] || '/safra/vintage/vintage-inspiracion.png'
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Banner visual */}
        <div style={{ position: 'relative', marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', height: '300px', border: '1px solid rgba(201,169,110,0.2)' }}>
          <img src={heroImg} alt="Sistema Vintage" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 52px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-flex', alignSelf: 'flex-start' }}>Sistema Vintage</span>
            <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF' }}>
              La elegancia de una cortina, <span className="text-gold-gradient">la función de una vertical</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.7)', marginTop: '10px' }}>Lamas plegables · Hasta 6.0 × 5.85 m · Cenefa PVC</p>
          </div>
        </div>

        {/* Header + specs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '52px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Sistema Vintage</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
              Lamas verticales <span className="text-gold-gradient">plegables</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '16px' }}>
              El Sistema Vintage se caracteriza por sus lamas verticales plegables. Combina el estilo de una persiana vertical con el look y elegancia de una cortina tradicional.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '24px' }}>
              Con una altura máxima de <strong style={{ color: 'var(--gold)' }}>5.85 m</strong>, es uno de los sistemas de mayor alcance vertical del catálogo. Ideal para espacios de doble altura y ventanales monumentales.
            </p>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar Sistema Vintage <ArrowRight size={14} />
            </Link>
          </div>

          {/* Specs */}
          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>
              Especificaciones técnicas
            </p>
            {specs.map((s, i) => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: i < specs.length - 1 ? '1px solid var(--border)' : 'none', gap: '16px' }}>
                <span style={{ fontSize: '15px', color: 'var(--text-3)' }}>{s.label}</span>
                <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', textAlign: 'right' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Diferencial */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Lo que hace único al Vintage
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '36px' }}>
          {diferencial.map((d) => (
            <div key={d.titulo} className="card-glass" style={{ padding: '22px 26px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.2 }}>{d.titulo}</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65 }}>{d.desc}</p>
            </div>
          ))}
        </div>

        {/* ── CATÁLOGO DE TELAS ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '36px', marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Catálogo de telas 2026</p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>100% Poliéster · 200 g/m² · Termofijado · GREENGUARD · OEKO-TEX</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
            {[
              { src: '/safra/vintage/vintage-inspiracion.png', nombre: 'Inspiración 2', sub: 'Gris · Taupe · Beige' },
              { src: '/safra/vintage/vintage-musa.png',        nombre: 'Musa 2',         sub: 'Blanco · Marfil · Beige' },
              { src: '/safra/vintage/vintage-nina.png',        nombre: 'Nina 2',          sub: 'Gris · Plata · Arena' },
            ].map((t) => (
              <div key={t.nombre} className="card-glass" style={{ overflow: 'hidden' }}>
                <div className='img-zoom-wrap' style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                  <img className='img-zoom' src={t.src} alt={t.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '10px 14px 12px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{t.nombre}</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)' }}>{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="/telas/vintage/vintage-telas.png" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--gold)', marginBottom: '36px' }}>
            Ver carta completa de colores →
          </a>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>Perfecto para espacios de altura</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Medimos y fabricamos a la medida exacta de tus ventanas.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar cotización <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
