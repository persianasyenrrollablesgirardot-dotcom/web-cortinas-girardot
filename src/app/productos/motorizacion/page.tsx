import Link from 'next/link'
import { ArrowLeft, ArrowRight, Smartphone, Mic, Sun, Clock, Wifi, Home, Zap, Shield } from 'lucide-react'
import ProductCover from '@/components/ProductCover'
import { getImagesConfig } from '@/lib/getImagesConfig'

const motoresTubulares = [
  {
    nombre: 'Motor Batería 6/24',
    sub: '+ Control Monocanal + Cable tipo C',
    fuerza: '6 NW', rpm: '24 RPM', tipo: 'Eléctrico',
    mando: 'Control', sonido: 'Silencioso', cables: '0',
    pesoR16: '12 kg', pesoR24: '10 kg',
    desc: 'Motor a batería recargable. Sin instalación eléctrica. Ideal para enrollables sin toma cerca.',
  },
  {
    nombre: 'Motor Tubular Wifi 6/28 RF',
    sub: '+ Control',
    fuerza: '6 NW', rpm: '28 RPM', tipo: 'Eléctrico',
    mando: 'Control', sonido: 'Silencioso', cables: '3',
    pesoR16: '12 kg', pesoR24: '10 kg',
    desc: 'Motor Wi-Fi con radiofrecuencia. Control APP Tuya, voz y automatización domótica.',
    destacado: true,
  },
  {
    nombre: 'Motor Tope Mecánico 10/21',
    sub: 'Ultrasilencioso RF',
    fuerza: '10 NW', rpm: '21 RPM', tipo: 'Mecánico',
    mando: 'Control', sonido: 'Ultrasilencioso', cables: '3',
    pesoR16: '20 kg', pesoR24: '17 kg',
    desc: 'Motor de alta fuerza para persianas pesadas. El más silencioso del catálogo.',
  },
]

const motoresEspeciales = [
  {
    nombre: 'Motor Ultrasilencioso Cortina/Panel Wi-Fi',
    sub: '+ Control Monocanal · Panel & Cortina',
    velocidad: '24 cm/sg',
    acceso: 'Wifi Radiofrecuencia',
    mando: 'Control APP Tuya',
    sonido: 'Ultra Silencioso',
    cables: '3',
    compatibles: ['Colección Cortina', 'Panel & Panel Dúo'],
  },
  {
    nombre: 'Motor Vertical Hanas Vintage Wi-Fi',
    sub: '+ Control · Vertical / Hanas / Vintage',
    velocidad: '24 cm/sg',
    acceso: 'Wifi Radiofrecuencia',
    mando: 'Control APP Tuya',
    sonido: 'Silencioso',
    cables: '3',
    compatibles: ['Persiana Vertical', 'Sistema Hanas', 'Sistema Vintage'],
    destacado: true,
  },
]

const controles = [
  'Control Motor Batería 15 canales',
  'Control Motor Wi-Fi 6 Canales',
  'Control Motor inalámbrico 15 canales lujo',
  'Control Motor inalámbrico monocanal',
  'Control Motor inalámbrico panel 10',
  'Control Motor inalámbrico panel 2',
  'Control monocanal estándar',
  'Control multicanal 5 estándar',
]

const features = [
  { Icon: Smartphone, t: 'App Tuya',          d: 'Controla desde cualquier lugar. iOS y Android. Sin límite de distancia.' },
  { Icon: Mic,        t: 'Control por voz',   d: 'Compatible con Alexa, Google Assistant y Apple Siri. Solo di la orden.' },
  { Icon: Sun,        t: 'Sensor de luz',     d: 'Apertura y cierre automáticos según la intensidad solar exterior.' },
  { Icon: Clock,      t: 'Temporizadores',    d: 'Programa horarios diarios: abre al amanecer, cierra al anochecer.' },
  { Icon: Wifi,       t: 'Wi-Fi integrado',   d: 'Sin hub adicional. Conexión directa Wifi + Radiofrecuencia al sistema.' },
  { Icon: Home,       t: 'Módulo Broadlink',  d: 'Integración domótica avanzada para escenas y rutinas del hogar inteligente.' },
]

const ecosistemas = [
  { nombre: 'Amazon Alexa',   color: '#00CAFF' },
  { nombre: 'Google Home',    color: '#4CAF50' },
  { nombre: 'Apple HomeKit',  color: '#999' },
  { nombre: 'Tuya Smart',     color: '#FF6B00' },
  { nombre: 'SmartThings',    color: '#1428A0' },
  { nombre: 'Broadlink',      color: '#E53935' },
]

const productos_compatibles = [
  { nombre: 'Persiana Enrollable',  href: '/productos/enrollables' },
  { nombre: 'Sheer Elegance',       href: '/productos/sheer-elegance' },
  { nombre: 'Persiana Vertical',    href: '/productos/verticales' },
  { nombre: 'Sistema Hanas',        href: '/productos/hanas' },
  { nombre: 'Sistema Vintage',      href: '/productos/vintage' },
  { nombre: 'Panel & Panel Dúo',    href: '/productos/panel' },
  { nombre: 'Colección Cortina',    href: '/productos/cortina' },
  { nombre: 'Romana Premium',       href: '/productos/romana' },
]

export default async function MotorizacionPage() {
  const cfg = await getImagesConfig()
  const heroImg = cfg.productos_hero?.['motorizacion'] || ''
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '24px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {heroImg ? (
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '380px', border: '1px solid rgba(201,169,110,0.2)', marginBottom: '36px' }}>
            <img src={heroImg} alt="Motorización" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' }} />
          </div>
        ) : (
          <>
            <ProductCover type="motorizacion" height={380} />
            <div style={{ height: '36px' }} />
          </>
        )}

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '52px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Motorización & Domótica</span>
            <h1 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '16px' }}>
              Tu hogar, <span className="text-gold-gradient">inteligente</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
              Motores tubulares y de panel con Wi-Fi integrado. Control por <strong>App Tuya</strong>, radiofrecuencia, voz o sensores automáticos. Sin hub adicional — conexión directa a tu red.
            </p>
            <div style={{ display: 'flex', gap: '7px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Zap size={14} color="var(--gold)" />
                <span style={{ fontSize: '15px', color: 'var(--text-2)' }}>Instalación profesional incluida</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Shield size={14} color="var(--gold)" />
                <span style={{ fontSize: '15px', color: 'var(--text-2)' }}>Garantía 3 años</span>
              </div>
            </div>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar motorización <ArrowRight size={14} />
            </Link>
          </div>

          {/* Ecosistemas */}
          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>Compatible con</p>
            {ecosistemas.map((e, i) => (
              <div key={e.nombre} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 0', borderBottom: i < ecosistemas.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: e.color, flexShrink: 0 }} />
                <span style={{ fontSize: '16px', color: 'var(--text-2)' }}>{e.nombre}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Motores tubulares */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Motores tubulares — para enrollables
        </p>
        <div style={{ marginBottom: '44px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr 2fr', background: 'rgba(201,169,110,0.08)', padding: '10px 20px', borderBottom: '1px solid var(--border)', gap: '8px' }}>
            {['Motor', 'Fuerza', 'RPM', 'Sonido', 'Cables', 'Peso máx. R16', 'Descripción'].map(h => (
              <p key={h} style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</p>
            ))}
          </div>
          {motoresTubulares.map((m, i) => (
            <div key={m.nombre} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr 2fr', padding: '14px 20px', borderBottom: i < motoresTubulares.length - 1 ? '1px solid var(--border)' : 'none', gap: '8px', alignItems: 'center', background: m.destacado ? 'rgba(201,169,110,0.03)' : undefined }}>
              <div>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{m.nombre}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-3)' }}>{m.sub}</p>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-2)', fontWeight: 500 }}>{m.fuerza}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-2)' }}>{m.rpm}</p>
              <p style={{ fontSize: '13px', color: m.sonido === 'Ultrasilencioso' ? 'var(--gold)' : 'var(--text-2)' }}>{m.sonido}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-2)', textAlign: 'center' }}>{m.cables}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-2)' }}>{m.pesoR16}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.4 }}>{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Motores especiales */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Motores Panel, Cortina, Vertical, Hanas y Vintage
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '44px' }}>
          {motoresEspeciales.map((m) => (
            <div key={m.nombre} className="card-glass" style={{ padding: '24px 28px', borderColor: m.destacado ? 'rgba(201,169,110,0.3)' : undefined }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2, marginBottom: '4px' }}>{m.nombre}</h3>
              <p style={{ fontSize: '12px', color: 'var(--gold)', marginBottom: '16px', letterSpacing: '0.04em' }}>{m.sub}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                {[
                  { label: 'Velocidad', value: m.velocidad },
                  { label: 'Acceso', value: m.acceso },
                  { label: 'Mando', value: m.mando },
                  { label: 'Sonido', value: m.sonido },
                ].map(s => (
                  <div key={s.label} className="surface" style={{ padding: '10px 12px' }}>
                    <p style={{ fontSize: '11px', color: 'var(--text-3)', marginBottom: '3px' }}>{s.label}</p>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{s.value}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-3)', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Compatible con</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {m.compatibles.map(c => <span key={c} className="tag" style={{ fontSize: '11px' }}>{c}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Funcionalidades */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Funcionalidades del sistema
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '36px' }}>
          {features.map(({ Icon, t, d }) => (
            <div key={t} className="card-glass" style={{ padding: '22px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(201,169,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Icon size={17} color="var(--gold)" />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px', lineHeight: 1.2 }}>{t}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>

        {/* Controles multicanal */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '36px' }}>
          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Controles multicanal disponibles</p>
            {controles.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', borderBottom: i < controles.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '14px', color: 'var(--text-2)' }}>{c}</span>
              </div>
            ))}
          </div>

          {/* Productos compatibles */}
          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Se puede motorizar</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {productos_compatibles.map((p) => (
                <Link key={p.href} href={p.href} className="btn-secondary" style={{ fontSize: '14px', padding: '8px 14px' }}>
                  {p.nombre}
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '20px', padding: '14px 16px', background: 'rgba(201,169,110,0.05)', borderRadius: '10px', border: '1px solid rgba(201,169,110,0.15)' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--gold)', marginBottom: '4px' }}>Módulo Domótica Broadlink</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Integración avanzada para escenas automatizadas con todos los sistemas del hogar.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Listo para un hogar inteligente?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Cotizamos la motorización junto con tus persianas en una sola visita.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar cotización <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
