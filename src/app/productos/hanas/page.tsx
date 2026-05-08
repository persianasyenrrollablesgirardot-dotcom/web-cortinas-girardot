import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const fichaTecnica = [
  { label: 'Composición',         value: '100% Poliéster' },
  { label: 'Peso',                value: 'Fantasía 145 g/m² · Royal 145 g/m²' },
  { label: 'Acabado',             value: 'Termofijado de alta temperatura' },
  { label: 'Lamas por metro',     value: '13 lamas' },
  { label: 'Ancho mínimo',        value: '0.40 m' },
  { label: 'Ancho máximo',        value: '6.0 m' },
  { label: 'Alto mínimo',         value: '0.40 m' },
  { label: 'Alto máximo',         value: '3.00 m' },
  { label: 'Cobro mínimo alto',   value: '2.20 m' },
  { label: 'Sistema',             value: 'Manual y motorizado' },
  { label: 'Tipo de recogida',    value: 'Laterales, a los extremos o al centro (siempre lado izquierdo)' },
  { label: 'Cenefa',              value: 'PVC (ml adicional)' },
  { label: 'Con blackout',        value: '+15% sobre el precio base' },
]

const colecciones = [
  {
    nombre: 'Fantasía',
    sub: '100% Poliéster · 145 g/m²',
    desc: 'Colección clásica del sistema Hanas. Franjas verticales en curva S con textura suave y acabado termofijado. Ideal para ambientes modernos y contemporáneos.',
    colores: ['Blanco', 'Beige', 'Gris'],
  },
  {
    nombre: 'Royal',
    sub: '100% Poliéster · 145 g/m²',
    desc: 'Colección premium de la línea Hanas. Mayor densidad visual y caída más elegante. Para espacios que buscan mayor presencia y sofisticación.',
    colores: ['Blanco', 'Beige'],
    destacado: true,
  },
]

const ventajas = [
  { titulo: 'Curvas en S uniformes', desc: 'El diseño en S crea un efecto visual fluido y sofisticado que distingue este sistema de las verticales convencionales.' },
  { titulo: 'Control de privacidad', desc: 'Las franjas opacas y traslúcidas se alternan para controlar la privacidad y la entrada de luz de forma precisa.' },
  { titulo: 'Motorizable', desc: 'Compatible con sistema de motorización. Control por app, voz o sensores automáticos de luminosidad.' },
  { titulo: 'Gran formato', desc: 'Hasta 6.0 m de ancho y 3.00 m de alto. Ideal para grandes ventanales y espacios abiertos.' },
]

export default function HanasPage() {
  const cfg = getImagesConfig()
  const heroImg = cfg.productos_hero?.['hanas'] || '/safra/hanas/hanas-royal.png'
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Banner visual */}
        <div style={{ position: 'relative', marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', height: '300px', border: '1px solid rgba(201,169,110,0.2)' }}>
          <img src={heroImg} alt="Sistema Hanas Royal" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 52px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-flex', alignSelf: 'flex-start' }}>Sistema Hanas</span>
            <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF' }}>
              Curvas en S — <span className="text-gold-gradient">estilo y sofisticación</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.7)', marginTop: '10px' }}>Fantasía · Royal · Manual y motorizado · Hasta 6.0 m</p>
          </div>
        </div>

        {/* Header + ficha */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '52px' }}>
          <div>
            <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '16px' }}>
              Caracterizado por sus curvas uniformes en forma de S, el Sistema Hanas crea un ambiente con un estilo diferente y sofisticado. Sus franjas verticales opacas y traslúcidas permiten controlar la privacidad.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '24px' }}>
              Disponible en dos colecciones — <strong style={{ color: 'var(--gold)' }}>Fantasía</strong> y <strong style={{ color: 'var(--gold)' }}>Royal</strong> — con acabado termofijado de alta temperatura y tela 100% poliéster.
            </p>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar Sistema Hanas <ArrowRight size={14} />
            </Link>
          </div>

          {/* Ficha técnica */}
          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
              Ficha técnica
            </p>
            {fichaTecnica.map((s, i) => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '8px 0', borderBottom: i < fichaTecnica.length - 1 ? '1px solid var(--border)' : 'none', gap: '12px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-3)', flexShrink: 0 }}>{s.label}</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', textAlign: 'right', lineHeight: 1.4 }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Colecciones */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Colecciones disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '44px' }}>
          {colecciones.map((c) => (
            <div key={c.nombre} className="card-glass" style={{ overflow: 'hidden', borderColor: c.destacado ? 'rgba(201,169,110,0.3)' : undefined }}>
              <div className='img-zoom-wrap' style={{ height: '200px', overflow: 'hidden' }}>
                <img className='img-zoom'
                  src={c.nombre === 'Royal' ? '/safra/hanas/hanas-royal.png' : '/safra/hanas/hanas-fantasia.png'}
                  alt={`Hanas ${c.nombre}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '22px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{c.nombre}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--gold)', marginTop: '3px', letterSpacing: '0.05em' }}>{c.sub}</p>
                  </div>
                  {c.destacado && <span className="badge">Royal</span>}
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '18px' }}>{c.desc}</p>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-3)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Colores</p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {c.colores.map((color) => (
                      <span key={color} className="tag" style={{ fontSize: '13px' }}>{color}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ventajas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Por qué elegir el Hanas
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '36px' }}>
          {ventajas.map((v) => (
            <div key={v.titulo} className="surface" style={{ padding: '20px 24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '7px', lineHeight: 1.2 }}>{v.titulo}</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* ── CATÁLOGO DE TELAS ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '36px', marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Catálogo de telas 2026</p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>100% Poliéster · 125 g/m² · Termofijado · Alto máximo 2.80 m · OEKO-TEX · GREENGUARD</p>
          <a href="/telas/hanas/hanas-telas.png" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', maxWidth: '480px', marginBottom: '36px' }}>
            <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
              <img src="/telas/hanas/hanas-telas.png" alt="Hanas — Fantasía, Royal y Clasik con colores" style={{ width: '100%', display: 'block' }} />
              <div style={{ padding: '12px 16px 14px' }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>Colecciones Fantasía · Royal · Clasik</p>
                <p style={{ fontSize: '11px', color: 'var(--text-3)' }}>Blanco · Beige · Gris — fichas técnicas completas y referencias de color</p>
              </div>
            </div>
          </a>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Fantasía o Royal?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Te mostramos ambas colecciones y seleccionamos el color ideal.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/productos/motorizacion" className="btn-secondary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Ver motorización
            </Link>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Solicitar cotización <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
