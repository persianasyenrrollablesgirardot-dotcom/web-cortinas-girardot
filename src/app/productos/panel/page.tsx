import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const sistemas = [
  {
    nombre: 'Panel Simple',
    sub: 'Un riel · Telos deslizantes',
    desc: 'Telos individuales que se deslizan sobre un riel. Variedad de agrupamiento: apilado a la izquierda, derecha o al centro. Cenefa metálica o en tela según el ambiente.',
    specs: [
      { label: 'Cobro mínimo', value: '1.30 m²' },
      { label: 'Cobro mínimo alto', value: '1.0 m²' },
      { label: 'Cenefa', value: 'Metálica o en Tela' },
    ],
    tag: 'Clásico',
  },
  {
    nombre: 'Panel Dúo',
    sub: 'Doble capa · Blackout + Translúcido',
    desc: 'Sistema con dos capas de paneles independientes. Combina una capa translúcida para el día con una blackout para total oscuridad en la noche. Un solo sistema, dos funciones.',
    specs: [
      { label: 'Cobro mínimo', value: '1.30 m²' },
      { label: 'Cobro mínimo alto', value: '1.0 m²' },
      { label: 'Cenefa', value: 'Metálica o en Tela' },
    ],
    tag: 'Doble capa',
    destacado: true,
  },
]

const rieles = [
  {
    tipo: 'Riel Armado Panel 4 Vías',
    desc: 'Riel con capacidad para 4 paneles. Ideal para ventanales medianos con hasta 4 telos.',
    perfiles: ['Perfil Estándar', 'Perfil Cuadrado', 'Perfil de Lujo'],
  },
  {
    tipo: 'Riel Armado Panel 5 Vías',
    desc: 'Para ventanales más amplios. 5 telos con mayor capacidad de agrupamiento.',
    perfiles: ['Perfil Estándar', 'Perfil Cuadrado', 'Perfil de Lujo'],
  },
  {
    tipo: 'Riel Armado Panel 6 Vías',
    desc: 'El riel de mayor capacidad del catálogo. Hasta 6 telos para grandes formatos.',
    perfiles: ['Perfil Estándar', 'Perfil Cuadrado', 'Perfil de Lujo'],
    destacado: true,
  },
  {
    tipo: 'Riel Armado Vertical',
    desc: 'Riel específico para sistema de Panel en orientación vertical. Cenefa Metálica disponible.',
    perfiles: ['Perfil Estándar'],
    nota: 'Cenefa Metálica disponible como accesorio',
  },
]

const perfilesDesc = [
  { nombre: 'Perfil Estándar', desc: 'Acabado clean y funcional. La opción de mayor relación calidad-precio.' },
  { nombre: 'Perfil Cuadrado', desc: 'Diseño geométrico y moderno. Líneas rectas que aportan carácter arquitectónico.' },
  { nombre: 'Perfil de Lujo',  desc: 'El acabado más refinado del catálogo. Para proyectos de diseño de alto nivel.', destacado: true },
]

const cenefas = [
  { tipo: 'Cenefa Metálica', desc: 'Acabado industrial y contemporáneo. Diferentes colores. Mayor sofisticación arquitectónica.' },
  { tipo: 'Cenefa en Tela',  desc: 'Recubierta con la misma tela del panel. Resultado homogéneo y cálido.' },
]

const usos = [
  { titulo: 'Puertas ventana',     desc: 'Separación elegante en puertas de vidrio de piso a techo.' },
  { titulo: 'Puertas corredizas',  desc: 'Complemento perfecto para terrazas y balcones con puertas de corredera.' },
  { titulo: 'Grandes ventanales',  desc: 'Donde un enrollable convencional queda corto en ancho o agrupamiento.' },
  { titulo: 'Divisores de espacio', desc: 'Para separar zonas en oficinas o plantas abiertas sin construir muros.' },
]

export default async function PanelPage() {
  const cfg = await getImagesConfig()
  const heroImg = cfg.productos_hero?.['panel'] || ''
  const fotos = (() => {
    try {
      const dir = path.join(process.cwd(), 'public/galeria/panel')
      return fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)).sort().map(f => `/galeria/panel/${f}`)
    } catch { return [] as string[] }
  })()
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Banner */}
        <div style={{ position: 'relative', marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', height: '300px', border: '1px solid rgba(201,169,110,0.2)', background: 'linear-gradient(135deg, #0D1525 0%, #080E1A 60%, #0A1220 100%)' }}>
          {heroImg && <img src={heroImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
          {heroImg && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' }} />}
          {!heroImg && <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />}
          {!heroImg && <div style={{ position: 'absolute', right: '40px', top: '20px', width: '280px', height: '260px', opacity: 0.14 }}>
            <svg viewBox="0 0 280 260" fill="none">
              <rect x="0" y="0" width="280" height="12" rx="3" fill="rgba(201,169,110,0.8)" stroke="rgba(201,169,110,1)" strokeWidth="1"/>
              {[0,1,2,3].map(i => (
                <g key={i}>
                  <rect x={4+i*68} y="12" width="62" height="240" rx="2" fill={`rgba(201,169,110,${0.12+i*0.03})`} stroke="rgba(201,169,110,0.5)" strokeWidth="1"/>
                  <circle cx={35+i*68} cy="20" r="4" fill="rgba(201,169,110,0.5)"/>
                </g>
              ))}
            </svg>
          </div>}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 52px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-flex', alignSelf: 'flex-start' }}>Panel & Panel Dúo</span>
            <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF' }}>
              La solución para <span className="text-gold-gradient">espacios amplios</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.7)', marginTop: '10px' }}>Riel 4/5/6 vías · Perfil Estándar / Cuadrado / Lujo · Cenefa metálica o tela</p>
          </div>
        </div>

        {/* Sistemas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Sistemas disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '48px' }}>
          {sistemas.map((s) => (
            <div key={s.nombre} className="card-glass" style={{ padding: '28px 32px', borderColor: s.destacado ? 'rgba(201,169,110,0.3)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--gold)', marginBottom: '4px', letterSpacing: '0.06em' }}>{s.sub}</p>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{s.nombre}</h3>
                </div>
                <span className="tag" style={{ fontSize: '12px' }}>{s.tag}</span>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '18px' }}>{s.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {s.specs.map((sp) => (
                  <div key={sp.label} className="surface" style={{ padding: '11px 12px' }}>
                    <p style={{ fontSize: '11px', color: 'var(--text-3)', marginBottom: '3px' }}>{sp.label}</p>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{sp.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rieles disponibles */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Rieles armados disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '44px' }}>
          {rieles.map((r) => (
            <div key={r.tipo} className={r.destacado ? 'card-glass' : 'surface'} style={{ padding: '20px 24px', borderColor: r.destacado ? 'rgba(201,169,110,0.25)' : undefined }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{r.tipo}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6, marginBottom: '10px' }}>{r.desc}</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {r.perfiles.map(p => <span key={p} className="tag" style={{ fontSize: '11px' }}>{p}</span>)}
              </div>
              {r.nota && <p style={{ fontSize: '12px', color: 'var(--gold)', marginTop: '8px' }}>{r.nota}</p>}
            </div>
          ))}
        </div>

        {/* Perfiles */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Tipos de perfil
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '44px' }}>
          {perfilesDesc.map((p) => (
            <div key={p.nombre} className="surface" style={{ padding: '20px 22px', borderLeft: p.destacado ? '3px solid var(--gold)' : undefined }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '7px' }}>{p.nombre}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Cenefas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Tipos de cenefa
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '44px' }}>
          {cenefas.map((c) => (
            <div key={c.tipo} className="surface" style={{ padding: '18px 22px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{c.tipo}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Usos ideales */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Usos ideales</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '36px' }}>
          {usos.map((u) => (
            <div key={u.titulo} className="card-glass" style={{ padding: '18px 22px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '8px' }} />
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{u.titulo}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.55 }}>{u.desc}</p>
              </div>
            </div>
          ))}
        </div>

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
                  <img src={src} alt="Instalación Panel Japonés" loading="lazy" className="gal-img" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>Medimos y seleccionamos el riel correcto</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>4, 5 o 6 vías — perfil estándar, cuadrado o lujo. Lo definimos juntos.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar cotización <ArrowRight size={14} />
          </Link>
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
