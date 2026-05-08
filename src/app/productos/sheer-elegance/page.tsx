import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProductCover from '@/components/ProductCover'
import { getImagesConfig } from '@/lib/getImagesConfig'

const alturas = [
  { cenefa: 'R24',       max: '3.50 m', nota: 'Mayor altura disponible' },
  { cenefa: 'Universal', max: '2.60 m', nota: 'Opción versátil' },
  { cenefa: 'R16 / R15', max: '2.20 m', nota: 'Alturas estándar' },
]

const acciones = [
  {
    titulo: 'Cerrada',
    desc: 'Franjas opacas alineadas. Bloqueo total de la vista y la luz. Máxima privacidad.',
  },
  {
    titulo: 'Semi abierta',
    desc: 'Franjas opacas y traslúcidas intercaladas. Control preciso de luz y privacidad simultáneamente.',
  },
  {
    titulo: 'Totalmente abierta',
    desc: 'Malla traslúcida continua. Entrada de luz difusa y vista al exterior conservando un velo de privacidad.',
  },
]

const modelos = [
  {
    nombre: 'Sheer Elegance Estándar',
    opaca: '7.5 cm',
    traslucida: '5 cm',
    desc: 'La combinación clásica. Equilibrio perfecto entre privacidad y luz natural para cualquier ambiente.',
    destacado: false,
  },
  {
    nombre: 'Sheer Elegance Premium',
    opaca: '14.5 cm',
    traslucida: '8 cm',
    desc: 'Franjas más anchas para mayor impacto visual y mejor control de luz. La opción más lujosa y sofisticada.',
    destacado: true,
  },
  {
    nombre: 'Sheer Elegance Blackout',
    opaca: 'Blackout',
    traslucida: 'Malla',
    desc: 'Tela blackout en la franja opaca. Permite entrada de luz durante el día y oscuridad total en la noche.',
    destacado: false,
  },
]

export default function SheerElegancePage() {
  const cfg = getImagesConfig()
  const heroImg = cfg.productos_hero?.['sheer-elegance'] || ''
  const fotos = (() => {
    try {
      const dir = path.join(process.cwd(), 'public/galeria/sheer')
      return fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)).sort().map(f => `/galeria/sheer/${f}`)
    } catch { return [] as string[] }
  })()
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '24px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {heroImg ? (
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '380px', border: '1px solid rgba(201,169,110,0.2)', marginBottom: '36px' }}>
            <img src={heroImg} alt="Sheer Elegance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' }} />
          </div>
        ) : (
          <>
            <ProductCover type="sheer-elegance" height={380} />
            <div style={{ height: '36px' }} />
          </>
        )}

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '52px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Sheer Elegance</span>
            <h1 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '16px' }}>
              Elegancia y luz <span className="text-gold-gradient">en perfecta armonía</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
              Sistema de doble función: tela compuesta con franjas opacas rectangulares y malla abierta traslúcida. Controla la privacidad o el trasluz deseado en el espacio.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
              Cuenta con mecanismo de <strong style={{ color: 'var(--gold)' }}>triple acción</strong>: cerrada, semi abierta o totalmente abierta. Práctico, moderno y elegante.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '24px' }}>
              Cobro mínimo de Sheer: 1.20 m². También disponible con tela blackout para oscuridad nocturna.
            </p>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar Sheer Elegance <ArrowRight size={14} />
            </Link>
          </div>

          {/* Alturas por cenefa */}
          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>
              Alturas máximas por cenefa
            </p>
            {alturas.map((a, i) => (
              <div key={a.cenefa} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 0',
                borderBottom: i < alturas.length - 1 ? '1px solid var(--border)' : 'none',
                gap: '12px',
              }}>
                <div>
                  <p style={{ fontSize: '16px', color: 'var(--text-2)', fontWeight: 500 }}>Cenefa {a.cenefa}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>{a.nota}</p>
                </div>
                <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap' }}>{a.max}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Triple acción */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Sistema de triple acción
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '44px' }}>
          {acciones.map((a, i) => (
            <div key={a.titulo} className="card-glass" style={{ padding: '24px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(201,169,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--gold)' }}>{i + 1}</span>
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)' }}>{a.titulo}</h4>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65 }}>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Modelos de franjas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Modelos de franjas
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '40px' }}>
          {modelos.map((m) => (
            <div key={m.nombre} className="card-glass" style={{ padding: '26px 28px', borderColor: m.destacado ? 'rgba(201,169,110,0.3)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{m.nombre}</h3>
                {m.destacado && <span className="badge" style={{ flexShrink: 0 }}>Premium</span>}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                <div className="surface" style={{ padding: '11px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)', marginBottom: '4px' }}>Franja opaca</p>
                  <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>{m.opaca}</p>
                </div>
                <div className="surface" style={{ padding: '11px', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)', marginBottom: '4px' }}>Franja traslúcida</p>
                  <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--gold)' }}>{m.traslucida}</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{m.desc}</p>
            </div>
          ))}
        </div>

        {/* ── CATÁLOGO DE TELAS ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '36px', marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Catálogo de telas 2026</p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '28px' }}>Fichas técnicas con composición, certificaciones y referencias de color.</p>
        </div>

        {/* Sheer Screen */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>Sheer Screen</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '28px' }}>
          {[
            { nombre: 'Sheer Screen Clásico', sub: '70% PVC · 30% PES · 325 g/m² · UV 99% · Solidez 8 GRADE SGS · REACH NPS · Anti-insecto', src: '/telas/sheer-elegance/sheer-screen-clasico.png' },
            { nombre: 'Sheer Screen Fina', sub: '70% PVC · 30% PES · 310 g/m² · UV 99% · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/sheer-elegance/sheer-screen-fina.png' },
            { nombre: 'Sheer Screen Elite', sub: '65% PVC · 35% PES · 265 g/m² · 2.20 m · Solidez 8 GRADE SGS · REACH NPS', src: '/telas/sheer-elegance/sheer-screen-elite.png' },
            { nombre: 'Sheer Screen Silver', sub: '70% PVC · 30% PES · 276 g/m² · UV 99% · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/sheer-elegance/sheer-screen-silver.png' },
            { nombre: 'Sheer Screen Parma', sub: 'PVC 85% · PES 35% · 250 g/m² · 3.00 m · Solidez 8 GRADE SGS · REACH NPS', src: '/telas/sheer-elegance/sheer-screen-parma.png' },
            { nombre: 'Sheer Screen Emely', sub: 'PVC 65% · PES 35% · 275 g/m² · Solidez 8 GRADE SGS · Anti-insecto · REACH NPS', src: '/telas/sheer-elegance/sheer-screen-emely.png' },
            { nombre: 'Sheer Screen Combi', sub: '70% PVC · 30% PES · 310 g/m² · UV 99% · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/sheer-elegance/sheer-screen-combi.png' },
            { nombre: 'Sheer Screen Japónica', sub: '65% PVC · 35% PES · 267 g/m² · UV 99% · Solidez 8 GRADE SGS · Anti-insecto · REACH NPS', src: '/telas/sheer-elegance/sheer-screen-japonica.png' },
            { nombre: 'Sheer Screen Extra Wide', sub: '70% PVC · 30% PES · 325 g/m² · 2.50 m · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/sheer-elegance/sheer-screen-extra-wide.png' },
          ].map((t) => (
            <a key={t.nombre} href={t.src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
                <img src={t.src} alt={t.nombre} style={{ width: '100%', display: 'block' }} />
                <div style={{ padding: '10px 14px 12px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{t.nombre}</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)', lineHeight: 1.4 }}>{t.sub}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Sheer Poliéster + Venecian */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '44px' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>Sheer Poliéster</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {[
                { nombre: 'Sheer Poliéster', sub: '100% PES · 140 g/m² · 2.60 m', src: '/telas/sheer-elegance/sheer-poliester.png' },
                { nombre: 'Bianca', sub: '100% PES · 144 g/m² · UV 99%', src: '/telas/sheer-elegance/sheer-poliester-bianca.png' },
                { nombre: 'Blackout PES', sub: '100% PES · 227 g/m² · UV 99%', src: '/telas/sheer-elegance/sheer-poliester-blackout.png' },
              ].map((t) => (
                <a key={t.nombre} href={t.src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
                    <img src={t.src} alt={t.nombre} style={{ width: '100%', display: 'block' }} />
                    <div style={{ padding: '8px 10px 10px' }}>
                      <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{t.nombre}</p>
                      <p style={{ fontSize: '10px', color: 'var(--text-3)', lineHeight: 1.4 }}>{t.sub}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>Venecian</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[
                { nombre: 'Imperial S6 · S8', sub: '100% PES · 207 g/m² · 3.00 m', src: '/telas/sheer-elegance/venecian-s6-s8.png' },
                { nombre: 'Imperial S9 · Bella', sub: '100% PES · franja 5.5 cm', src: '/telas/sheer-elegance/venecian-s9-bella.png' },
              ].map((t) => (
                <a key={t.nombre} href={t.src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
                    <img src={t.src} alt={t.nombre} style={{ width: '100%', display: 'block' }} />
                    <div style={{ padding: '8px 10px 10px' }}>
                      <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{t.nombre}</p>
                      <p style={{ fontSize: '10px', color: 'var(--text-3)', lineHeight: 1.4 }}>{t.sub}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* Galería de instalaciones */}
        {fotos.length > 0 && (
          <div style={{ marginBottom: '56px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>
              Galería de instalaciones
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '24px' }}>
              {fotos.length} proyectos reales instalados en Girardot y la región.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '6px' }}>
              {fotos.map((src) => (
                <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="gal-item">
                  <img src={src} alt="Instalación Sheer Elegance" loading="lazy" className="gal-img" />
                </a>
              ))}
            </div>
          </div>
        )}

        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>También disponible con motorización</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Controla tus Sheer Elegance desde la app o con voz.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/productos/motorizacion" className="btn-secondary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Ver motorización
            </Link>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
      <style>{`
        .gal-item { display: block; overflow: hidden; border-radius: 8px; aspect-ratio: 4/3; background: rgba(0,0,0,0.04); }
        .gal-img  { width: 100%; height: 100%; object-fit: cover; transition: transform 0.25s ease; display: block; }
        .gal-item:hover .gal-img { transform: scale(1.05); }
      `}</style>
    </div>
  )
}
