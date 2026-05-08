import Link from 'next/link'
import { ArrowLeft, ArrowRight, Wifi, Zap, Layers, Ruler, Smartphone } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const sistemas = [
  {
    nombre: 'Riel Motor Cortina ML',
    sub: 'Para cortinas tradicionales · Motor tubular',
    desc: 'Riel de aluminio motorizado para cortinas de tela. Sistema de apertura y cierre eléctrico silencioso. Compatible con cortinas ligeras y pesadas según el motor seleccionado.',
    tag: 'Cortina',
    items: [
      'Motor tubular integrado al riel',
      'Control monocanal o multicanal',
      'Compatible con cortinas de tela',
      'Apertura lateral izquierda o derecha',
      'Vendido por metro lineal armado',
    ],
  },
  {
    nombre: 'Riel Motor Panel ML',
    sub: 'Para Panel Japonés · Motor tubular',
    desc: 'Riel de aluminio motorizado para sistema de Panel Japonés. Desplazamiento suave y silencioso de los paneles. Permite automatización completa con domótica.',
    tag: 'Panel',
    destacado: true,
    items: [
      'Motor tubular integrado al riel panel',
      'Compatible con 4, 5 y 6 vías',
      'Control monocanal o multicanal',
      'Apertura lateral o al centro',
      'Vendido por metro lineal armado',
    ],
  },
]

const controles = [
  {
    nombre: 'Control Monocanal Estándar',
    desc: 'Un canal, un sistema. Acciona un solo riel o un grupo de rieles en paralelo. El más simple y económico.',
    specs: [{ k: 'Canales', v: '1' }, { k: 'Alcance RF', v: 'Estándar' }],
  },
  {
    nombre: 'Control Multicanal 5 y 6 Canales',
    desc: 'Gestiona hasta 6 rieles independientes desde un solo control. Ideal para proyectos con múltiples ambientes.',
    specs: [{ k: 'Canales', v: '5 / 6' }, { k: 'Alcance RF', v: 'Estándar' }],
  },
  {
    nombre: 'Control Multicanal 16 Canales',
    desc: 'El más completo del catálogo. Controla hasta 16 sistemas de riel desde un solo mando. Para grandes proyectos e instalaciones comerciales.',
    specs: [{ k: 'Canales', v: '16' }, { k: 'Alcance RF', v: 'Largo alcance' }],
    destacado: true,
  },
]

const fichaTecnica = [
  { label: 'Tipo de motor',          value: 'Motor tubular Safra 50NW / 100NW' },
  { label: 'Control incluido',       value: 'Monocanal estándar (configurable)' },
  { label: 'Material del riel',      value: 'Aluminio extruido' },
  { label: 'Color estándar',         value: 'Blanco' },
  { label: 'Unidad de venta',        value: 'Metro lineal (ML)' },
  { label: 'Compatible con panel',   value: '4 · 5 · 6 vías' },
  { label: 'Compatible con cortina', value: 'Super Riel motor · Tráfico Pesado motor' },
  { label: 'Domótica',               value: 'Compatible — consulta con asesor' },
]

const ventajas = [
  {
    Icon: Smartphone,
    titulo: 'Control remoto por RF',
    desc: 'Abre y cierra tus cortinas o paneles desde cualquier punto del espacio con el control de radiofrecuencia incluido.',
  },
  {
    Icon: Wifi,
    titulo: 'Compatible con domótica',
    desc: 'Se puede integrar con sistemas de automatización del hogar. Consulta disponibilidad de módulos Wi-Fi con tu asesor.',
  },
  {
    Icon: Zap,
    titulo: 'Motor silencioso',
    desc: 'Los motores del catálogo Safra operan de forma silenciosa, sin vibraciones perceptibles en el riel.',
  },
  {
    Icon: Layers,
    titulo: 'Para cortina y panel',
    desc: 'El mismo sistema de control puede gestionar rieles de cortina y de panel japonés en el mismo espacio.',
  },
]

export default async function RielMotorPage() {
  const cfg = await getImagesConfig()
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontSize: '13px', color: 'var(--text-3)' }}>
          <Link href="/productos" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Productos</Link>
          <span>/</span>
          <Link href="/productos/motorizacion" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Motorización</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-2)' }}>Riel Motor Cortina y Panel ML</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px', maxWidth: '680px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Catálogo SAFRA · Vendido por ML</span>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
            Riel Motor <span className="text-gold-gradient">Cortina y Panel</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.75 }}>
            Sistema de riel motorizado para cortinas tradicionales y Panel Japonés, suministrado <strong>armado y listo para instalar</strong>, vendido por metro lineal.
            Incluye motor, control y todos los componentes necesarios para la automatización del sistema.
          </p>
        </div>

        {/* Ficha rápida */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px', marginBottom: '48px' }}>
          {[
            { Icon: Zap,        label: 'Motor',       value: 'Safra 50NW / 100NW' },
            { Icon: Ruler,      label: 'Venta',        value: 'Metro lineal (ML)' },
            { Icon: Layers,     label: 'Compatible',   value: 'Cortina y Panel Japonés' },
            { Icon: Smartphone, label: 'Control',      value: 'RF Monocanal / Multicanal' },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="surface" style={{ padding: '18px 20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Icon size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: '11px', color: 'var(--text-3)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sistemas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Configuraciones disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px', marginBottom: '48px' }}>
          {sistemas.map((s) => (
            <div key={s.nombre} className="card-glass" style={{ padding: '24px', borderColor: s.destacado ? 'rgba(201,169,110,0.3)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div>
                  <p style={{ fontSize: '11px', color: 'var(--gold)', marginBottom: '3px', letterSpacing: '0.06em' }}>{s.sub}</p>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text)' }}>{s.nombre}</h3>
                </div>
                <span className="tag" style={{ fontSize: '11px' }}>{s.tag}</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '14px' }}>{s.desc}</p>
              <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {s.items.map((it) => (
                  <li key={it} style={{ fontSize: '13px', color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Controles */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Controles compatibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px', marginBottom: '48px' }}>
          {controles.map((c) => (
            <div key={c.nombre} className="surface" style={{ padding: '20px 24px', borderColor: c.destacado ? 'rgba(201,169,110,0.3)' : undefined, border: c.destacado ? '1px solid rgba(201,169,110,0.3)' : undefined }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{c.nombre}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.6, marginBottom: '10px' }}>{c.desc}</p>
              {c.specs.map((sp) => (
                <div key={sp.k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span style={{ color: 'var(--text-3)' }}>{sp.k}</span>
                  <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{sp.v}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Ventajas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Ventajas del sistema motorizado
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '48px' }}>
          {ventajas.map(({ Icon, titulo, desc }) => (
            <div key={titulo} className="surface" style={{ padding: '20px 24px', display: 'flex', gap: '14px' }}>
              <Icon size={20} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{titulo}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ficha técnica */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Especificaciones técnicas
        </p>
        <div className="surface" style={{ padding: '0', marginBottom: '40px', overflow: 'hidden', borderRadius: '12px' }}>
          {fichaTecnica.map((f, i) => (
            <div key={f.label} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '14px 24px', gap: '16px',
              borderBottom: i < fichaTecnica.length - 1 ? '1px solid var(--border)' : 'none',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
            }}>
              <span style={{ fontSize: '14px', color: 'var(--text-3)' }}>{f.label}</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', textAlign: 'right' }}>{f.value}</span>
            </div>
          ))}
        </div>

        {/* Nota */}
        <div style={{ padding: '18px 24px', borderRadius: '12px', background: 'rgba(184,145,42,0.05)', border: '1px solid rgba(184,145,42,0.15)', marginBottom: '32px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)' }}>Precio antes de IVA.</strong>{' '}
            Producto soportado en la carta de garantías Safra. Para configuraciones de domótica Wi-Fi o Zigbee, consulta disponibilidad con tu asesor.
            El sistema de riel motor incluye todos los componentes de la estructura mecánica y el motor. Las telas no están incluidas.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/productos/motorizacion" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-2)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Ver Motorización
          </Link>
          <Link href="/cotizar" className="btn-primary" style={{ padding: '11px 22px', fontSize: '14px' }}>
            Cotizar riel motorizado <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
