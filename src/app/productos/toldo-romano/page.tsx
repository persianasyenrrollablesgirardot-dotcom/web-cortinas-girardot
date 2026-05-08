import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sun, Settings, Zap, Shield, Layers, Droplets } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const specs = [
  { Icon: Sun,      label: 'Uso',                    value: 'Exterior — terraza, patio, jardín' },
  { Icon: Layers,   label: 'Tela compatible',         value: 'Solar Screen (única habilitada)' },
  { Icon: Settings, label: 'Estructura',               value: 'Aluminio anodizado — blanco o negro' },
  { Icon: Zap,      label: 'Accionamiento',            value: 'Manual con cordón · Motorizado' },
  { Icon: Droplets, label: 'Protección UV',            value: 'Alta — reduce radiación solar directa' },
  { Icon: Shield,   label: 'Garantía',                 value: 'Hasta 5 años (tela · aluminio · motor)' },
]

const acabados = [
  {
    nombre: 'Acabado Premium',
    sub: 'Mayor sofisticación y remate',
    desc: 'Cabezal de aluminio en la parte superior, perfil inferior de lujo y cadena de peso moderna. El acabado más completo, ideal para instalaciones de alto nivel arquitectónico.',
    tag: 'Recomendado',
    destacado: true,
    items: [
      'Cabezal de aluminio incluido',
      'Perfil inferior de lujo',
      'Cadena de peso moderna',
      'Acabado limpio en techo y base',
    ],
  },
  {
    nombre: 'Acabado Plus',
    sub: 'Perfil de lujo sin cabezal',
    desc: 'Sin cabezal superior, pero mantiene el perfil inferior de lujo y cadena de peso sencilla. Equilibrio entre estética y costo para proyectos de nivel medio-alto.',
    tag: 'Equilibrado',
    destacado: false,
    items: [
      'Sin cabezal de aluminio',
      'Perfil inferior de lujo',
      'Cadena de peso sencilla',
      'Instalación visible en techo',
    ],
  },
  {
    nombre: 'Acabado Básico',
    sub: 'Funcional y económico',
    desc: 'Sin cabezal ni cadena de peso. El perfil inferior tipo bolsillo mantiene la tela tensa de forma simple. Solución funcional para espacios donde la estética es secundaria.',
    tag: 'Económico',
    destacado: false,
    items: [
      'Sin cabezal de aluminio',
      'Perfil inferior tipo bolsillo',
      'Sin cadena de peso',
      'Instalación sencilla',
    ],
  },
]

const caracteristicas = [
  {
    titulo: 'Diseño romano corredizo para exterior',
    desc: 'El sistema funciona como una persiana romana tradicional, pero diseñado y certificado para uso exterior. La tela se pliega en pliegues horizontales al recoger y se extiende formando una superficie continua de sombra al desplegar.',
  },
  {
    titulo: 'Estructura 100% aluminio',
    desc: 'Todos los perfiles, guías y rieles son de aluminio anodizado, resistente a la corrosión, la humedad y el calor. Ideal para el clima tropical de Girardot donde las lluvias y el sol intenso son constantes.',
  },
  {
    titulo: 'Accionamiento manual o motorizado',
    desc: 'En la versión manual el toldo se opera mediante cordón de control para regular la altura del pliegue con precisión. La opción motorizada permite controlar el despliegue desde un control remoto o dispositivo móvil.',
  },
  {
    titulo: 'Tela Solar Screen exterior',
    desc: 'Único tejido habilitado: Solar Screen para exteriores. Reduce la radiación solar directa, permite la visión hacia el exterior y tiene alta resistencia a la intemperie. No compatible con blackout, sheer elegance ni traslúcidas.',
  },
]

const fichaTecnica = [
  { label: 'Uso',                    value: 'Exterior' },
  { label: 'Material tela',          value: 'Poliéster recubierto en PVC — Solar Screen' },
  { label: 'Protección UV',          value: 'Alta — reduce radiación solar directa' },
  { label: 'Estructura',             value: 'Perfiles de aluminio anodizado' },
  { label: 'Color herraje',          value: 'Blanco estándar · Negro disponible' },
  { label: 'Accionamiento manual',   value: 'Cordón de control con ajuste de posición' },
  { label: 'Accionamiento motor',    value: 'Control remoto o dispositivo móvil' },
  { label: 'Acabados disponibles',   value: 'Premium · Plus · Básico' },
  { label: 'Garantía',               value: 'Hasta 5 años (tela, aluminio y motor)' },
  { label: 'Fabricación',            value: 'Nacional — medidas a la orden' },
]

export default function ToldoRomanoPage() {
  const cfg = getImagesConfig()
  const heroImg = cfg.productos_hero?.['toldo-romano'] || ''
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Hero visual */}
        <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '36px', height: '280px', background: 'linear-gradient(135deg, #0D1A10 0%, #091408 60%, #0F1A0C 100%)', border: '1px solid rgba(201,169,110,0.18)' }}>
          {heroImg && <img src={heroImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
          {heroImg && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' }} />}
          {!heroImg && <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />}
          {!heroImg && <svg viewBox="0 0 800 280" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rail superior */}
            <rect x="80" y="70" width="640" height="12" rx="4" fill="rgba(201,169,110,1)" />
            {/* Pliegues horizontales */}
            {[110, 145, 180, 215].map((y, i) => (
              <rect key={i} x="80" y={y} width="640" height="7" rx="3" fill={`rgba(201,169,110,${0.9 - i * 0.15})`} />
            ))}
            {/* Guías laterales */}
            <rect x="80" y="70" width="6" height="160" rx="3" fill="rgba(201,169,110,0.7)" />
            <rect x="714" y="70" width="6" height="160" rx="3" fill="rgba(201,169,110,0.7)" />
            {/* Perfil inferior */}
            <rect x="80" y="222" width="640" height="10" rx="4" fill="rgba(201,169,110,0.6)" />
          </svg>}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 56px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px', fontWeight: 700 }}>Exteriores · Toldo Romano Corredizo</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF', marginBottom: '12px' }}>
              Sombra elegante para<br /><span style={{ color: 'var(--gold-light)', fontWeight: 500 }}>terrazas y patios</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.6)', maxWidth: '480px' }}>
              Sistema de plegado romano para exteriores — manual o motorizado · 3 acabados · tela Solar Screen.
            </p>
          </div>
        </div>

        {/* Galería de fotos reales */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '40px' }}>
          {[
            { src: '/galeria/toldo-romano/toldo-romano-01.jpeg', alt: 'Toldo romano instalado — vista lateral' },
            { src: '/galeria/toldo-romano/toldo-romano-02.jpeg', alt: 'Toldo romano instalado — detalle' },
            { src: '/galeria/toldo-romano/toldo-romano-03.jpeg', alt: 'Toldo romano instalado — vista frontal' },
          ].map((foto, i) => (
            <a key={i} href={foto.src} target="_blank" rel="noopener noreferrer" className="tr-foto-wrap">
              <img src={foto.src} alt={foto.alt} loading="lazy" className="tr-foto-img" />
            </a>
          ))}
        </div>

        {/* Videos del producto */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>
            En movimiento
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>
            Mira el toldo romano corredizo en funcionamiento real.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '10px' }}>
            {[
              '/galeria/toldo-romano/toldo-romano-v02.mp4',
              '/galeria/toldo-romano/toldo-romano-v03.mp4',
              '/galeria/toldo-romano/toldo-romano-v04.mp4',
              '/galeria/toldo-romano/toldo-romano-v05.mp4',
            ].map((src, i) => (
              <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', background: 'rgba(0,0,0,0.06)', border: '1px solid var(--border)' }}>
                <video
                  src={src}
                  controls
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', display: 'block', maxHeight: '320px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Header + Specs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '52px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Exteriores</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
              Elegancia exterior con <span className="text-gold-gradient">sombra precisa</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
              El Toldo Romano Corredizo lleva el diseño clásico de la persiana romana al exterior. Sus pliegues horizontales crean una cubierta elegante y funcional para terrazas, patios y espacios sociales al aire libre, combinando protección solar con estética arquitectónica.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '24px' }}>
              Estructura 100% aluminio anodizado — resistente a la corrosión e intemperie. Disponible en herraje blanco o negro. Fabricación a medida para adaptarse a cualquier vano. Garantía de hasta 5 años.
            </p>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar toldo romano <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {specs.map(({ Icon, label, value }) => (
              <div key={label} className="surface" style={{ padding: '18px' }}>
                <Icon size={15} color="var(--gold)" style={{ marginBottom: '10px' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-3)', marginBottom: '4px', letterSpacing: '0.05em' }}>{label}</p>
                <p style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500, lineHeight: 1.4 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Acabados */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Niveles de acabado disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '52px' }}>
          {acabados.map((a) => (
            <div key={a.nombre} className="card-glass" style={{ padding: '28px', borderColor: a.destacado ? 'rgba(201,169,110,0.3)' : undefined, background: a.destacado ? 'rgba(184,145,42,0.04)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <p style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.06em' }}>{a.sub}</p>
                <span className="tag" style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>{a.tag}</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2, marginBottom: '10px' }}>{a.nombre}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '18px' }}>{a.desc}</p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px', marginBottom: '16px' }}>
                {a.items.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', marginBottom: '6px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/cotizar" style={{ fontSize: '13px', color: 'var(--gold)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Solicitar cotización <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>

        {/* Características técnicas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Características del sistema
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '52px' }}>
          {caracteristicas.map((c) => (
            <div key={c.titulo} className="card-glass" style={{ padding: '24px 28px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>{c.titulo}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Ficha técnica */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Ficha técnica
        </p>
        <div className="card-glass" style={{ marginBottom: '52px', overflow: 'hidden' }}>
          {fichaTecnica.map((row, i) => (
            <div key={row.label} style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr',
              gap: '16px',
              padding: '13px 24px',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
              borderBottom: i < fichaTecnica.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <span style={{ fontSize: '13px', color: 'var(--text-3)', fontWeight: 600 }}>{row.label}</span>
              <span style={{ fontSize: '13px', color: 'var(--text-2)', lineHeight: 1.5 }}>{row.value}</span>
            </div>
          ))}
        </div>

        {/* Nota tela */}
        <div style={{ marginBottom: '52px', padding: '20px 24px', borderRadius: '12px', background: 'rgba(184,145,42,0.05)', border: '1px solid rgba(184,145,42,0.15)' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)' }}>Tela habilitada: Solar Screen para exteriores.</strong>{' '}
            Este sistema no es compatible con telas blackout, Sheer Elegance, traslúcidas ni dunes.
            La tela Solar Screen filtra la luz, bloquea gran parte de la radiación UV y permite mantener
            visibilidad hacia el exterior desde dentro, lo que la hace ideal para zonas con sol directo intenso.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Cuánto espacio exterior necesitas cubrir?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Medición gratuita y cotización sin compromiso en Girardot y la región.</p>
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

        {/* Productos relacionados */}
        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          <Link href="/productos/pergolas" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 24px', borderRadius: '12px', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Exterior</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Pérgolas Palillería →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Cubierta con lona acrílica retráctil — hasta 7 m de proyección</p>
            </div>
          </Link>
          <Link href="/productos/accesorios-toldos" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 24px', borderRadius: '12px', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Insumos</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Accesorios Toldos →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Brazos, motores, estructuras y telas para toldos exteriores</p>
            </div>
          </Link>
        </div>

      </div>
      <style>{`
        .tr-foto-wrap { display: block; overflow: hidden; border-radius: 12px; aspect-ratio: 4/3; background: rgba(0,0,0,0.06); cursor: zoom-in; }
        .tr-foto-img  { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease; }
        .tr-foto-wrap:hover .tr-foto-img { transform: scale(1.04); }
      `}</style>
    </div>
  )
}
