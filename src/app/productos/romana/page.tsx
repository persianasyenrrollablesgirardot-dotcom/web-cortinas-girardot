import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const modelos = [
  {
    nombre: 'Romana Tradicional',
    sub: 'Sistema clásico de módulos plegables',
    desc: 'Sistema clásico con módulos plegables que brindan funcionalidad y simetría en su apertura o cierre. Diseño limpio y atemporal que se adapta a cualquier tipo de espacio.',
    specs: [
      { label: 'Cobro mínimo', value: '1.0 m²' },
      { label: 'Cobro mínimo alto', value: '1.0 m²' },
      { label: 'Sistema', value: 'Manual' },
      { label: 'Cabezal', value: 'Estándar' },
    ],
    tag: 'Clásico',
  },
  {
    nombre: 'Romana Top Down Premium',
    sub: 'Apertura inversa · Cabezal metálico',
    desc: 'Versión Premium con apertura Top Down: la persiana se abre desde arriba hacia abajo, permitiendo privacidad en la parte baja y entrada de luz natural desde la parte superior. Cabezal metálico incluido.',
    specs: [
      { label: 'Cobro mínimo', value: '1.0 m²' },
      { label: 'Cobro mínimo alto', value: '1.0 m²' },
      { label: 'Sistema', value: 'Manual' },
      { label: 'Cabezal', value: 'Metálico Premium' },
    ],
    tag: 'Top Down · Premium',
    destacado: true,
  },
]

const ventajas = [
  { titulo: 'Módulos plegables simétricos', desc: 'El sistema de pliegues crea una apertura visualmente perfecta y simétrica que da carácter a cualquier ventana.' },
  { titulo: 'Apertura Top Down única', desc: 'La versión Premium permite abrir la persiana desde arriba, protegiendo la privacidad baja mientras deja entrar luz cenital.' },
  { titulo: 'Cabezal metálico Premium', desc: 'El cabezal metálico moderniza el sistema y da mayor sofisticación y acabado arquitectónico al conjunto.' },
  { titulo: 'Compatible con telas diversas', desc: 'Admite telas blackout, traslúcidas y decorativas. Mismo sistema de telas certificadas OEKO-TEX que los enrollables.' },
]

export default async function RomanaPage() {
  const cfg = await getImagesConfig()
  const heroImg = cfg.productos_hero?.['romana'] || '/safra/romana/romana-vittoria.jpg'
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Banner visual */}
        <div style={{ position: 'relative', marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', height: '300px', border: '1px solid rgba(201,169,110,0.2)' }}>
          <img src={heroImg} alt="Persiana Romana" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.15) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 52px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-flex', alignSelf: 'flex-start' }}>Persiana Romana</span>
            <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF' }}>
              Sistema Romana <span className="text-gold-gradient">Tradicional & Top Down</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.7)', marginTop: '10px' }}>Módulos plegables · Cabezal metálico Premium · Apertura inversa</p>
          </div>
        </div>

        {/* Intro */}
        <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
          <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75 }}>
            El Sistema Romana es un diseño clásico con <strong>módulos plegables</strong> que brindan funcionalidad y simetría en su apertura o cierre, dando la alternativa de modernizarlo con su cabezal metálico de diferentes colores.
          </p>
        </div>

        {/* Modelos */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Modelos disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '48px' }}>
          {modelos.map((m) => (
            <div key={m.nombre} className="card-glass" style={{ padding: '30px 32px', borderColor: m.destacado ? 'rgba(201,169,110,0.3)' : undefined, background: m.destacado ? 'rgba(184,145,42,0.03)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--gold)', marginBottom: '4px', letterSpacing: '0.06em' }}>{m.sub}</p>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{m.nombre}</h3>
                </div>
                <span className="tag" style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>{m.tag}</span>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '20px' }}>{m.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {m.specs.map((s) => (
                  <div key={s.label} className="surface" style={{ padding: '12px 14px' }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-3)', marginBottom: '3px' }}>{s.label}</p>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ventajas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Por qué elegir la Romana
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '36px' }}>
          {ventajas.map((v) => (
            <div key={v.titulo} className="surface" style={{ padding: '20px 24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '7px', lineHeight: 1.2 }}>{v.titulo}</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Muestra de telas */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '36px', marginBottom: '44px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Muestras de tela</p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>Colecciones disponibles para Persiana Romana — todas certificadas OEKO-TEX</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
            {[
              { src: '/safra/romana/romana-imperial-s8.jpg', nombre: 'Imperial S8', sub: 'Crema' },
              { src: '/safra/romana/romana-imperial-s6.jpg', nombre: 'Imperial S6', sub: 'Gris' },
              { src: '/safra/romana/romana-vittoria.jpg',    nombre: 'Vittoria',    sub: 'Grey' },
              { src: '/safra/romana/romana-sabrina.jpg',     nombre: 'Sabrina',     sub: 'Beige' },
              { src: '/safra/romana/romana-primavera.jpg',   nombre: 'Primavera',   sub: 'Cáscara huevo' },
            ].map((t) => (
              <div key={t.nombre} className="card-glass" style={{ overflow: 'hidden' }}>
                <div className='img-zoom-wrap' style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                  <img className='img-zoom' src={t.src} alt={t.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '10px 12px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{t.nombre}</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)' }}>{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Tradicional o Top Down?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Te mostramos ambas opciones en tu espacio — asesoría gratuita.</p>
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

      </div>
    </div>
  )
}
