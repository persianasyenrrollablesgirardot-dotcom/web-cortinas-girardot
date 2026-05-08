import Link from 'next/link'
import { ArrowLeft, ArrowRight, Ruler, Layers, Settings, Package } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const sistemas = [
  {
    vias: '4 Vías',
    sub: 'Para 4 paneles · Ancho hasta ~3.20 m',
    desc: 'Configuración básica. Ideal para vanos de puerta o ventana corriente. Los 4 paneles se apilan completamente a uno o ambos lados.',
    tag: 'Básico',
    items: [
      'Riel aluminio 4 vías',
      'Patines guía incluidos',
      'Topes laterales de riel',
      'Cenefa de aluminio (opcional)',
    ],
  },
  {
    vias: '5 Vías',
    sub: 'Para 5 paneles · Ancho hasta ~4.00 m',
    desc: 'La configuración más popular. Cubre espacios medianos y amplios con mayor variedad de agrupamiento y privacidad.',
    tag: 'Popular',
    destacado: true,
    items: [
      'Riel aluminio 5 vías',
      'Patines guía incluidos',
      'Frenos de panel opcionales',
      'Topes laterales de riel',
    ],
  },
  {
    vias: '6 Vías',
    sub: 'Para 6 paneles · Ancho hasta ~4.80 m',
    desc: 'Para espacios grandes. Permite subdivisiones visuales de ambientes amplios con un recorrido fluido y ordenado.',
    tag: 'Gran formato',
    items: [
      'Riel aluminio 6 vías',
      'Patines guía incluidos',
      'Frenos de panel opcionales',
      'Topes laterales de riel',
    ],
  },
  {
    vias: '7 Vías',
    sub: 'Para 7 paneles · Ancho hasta ~5.60 m',
    desc: 'La configuración más amplia del catálogo. Para espacios de gran escala: halls, salas de juntas, zonas comunes.',
    tag: 'Máxima amplitud',
    items: [
      'Riel aluminio 7 vías',
      'Patines guía incluidos',
      'Frenos de panel opcionales',
      'Topes laterales de riel',
    ],
  },
]

const fichaTecnica = [
  { label: 'Material del riel',    value: 'Aluminio extruido' },
  { label: 'Color',                value: 'Blanco estándar' },
  { label: 'Longitud de barra',    value: '5.95 m / 6.00 m' },
  { label: 'Vías disponibles',     value: '4 · 5 · 6 · 7 vías' },
  { label: 'Unidad de venta',      value: 'Metro lineal (ML)' },
  { label: 'Sistemas compatibles', value: 'Panel Japonés · Panel Dúo' },
  { label: 'Patín guía',          value: 'Incluido por vía' },
  { label: 'Cenefa',              value: '6.5 cm · 7 cm · 8 cm (según sistema)' },
]

const usos = [
  {
    titulo: 'Instaladores y talleres',
    desc: 'Compra el riel armado por metro y confecciona el panel en tu propio taller. Sin demoras en la estructura mecánica.',
  },
  {
    titulo: 'Diseñadores de interiores',
    desc: 'Especifica el sistema de rieles exacto según el proyecto. El riel se entrega listo para montar.',
  },
  {
    titulo: 'Reposición de rieles',
    desc: 'Para proyectos donde la tela está en buen estado pero el sistema mecánico requiere reemplazo o extensión.',
  },
  {
    titulo: 'Proyectos por etapas',
    desc: 'Instala el riel hoy y agrega los paneles de tela cuando el proyecto lo requiera. El riel permanece listo.',
  },
]

export default function RielPanelPage() {
  const cfg = getImagesConfig()
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontSize: '13px', color: 'var(--text-3)' }}>
          <Link href="/productos" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Productos</Link>
          <span>/</span>
          <Link href="/productos/panel" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Panel Japonés</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-2)' }}>Riel Armado Panel ML</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px', maxWidth: '680px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Catálogo SAFRA · Vendido por ML</span>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
            Riel Armado Panel <span className="text-gold-gradient">Japonés</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.75 }}>
            Sistema de riel de aluminio para Panel Japonés, suministrado <strong>armado y listo para instalar</strong>, vendido por metro lineal.
            Disponible en configuraciones de 4 a 7 vías. Incluye patines, topes laterales y cenefa según requerimiento.
          </p>
        </div>

        {/* Ficha rápida */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px', marginBottom: '48px' }}>
          {[
            { Icon: Layers,   label: 'Vías',     value: '4 · 5 · 6 · 7' },
            { Icon: Ruler,    label: 'Venta',     value: 'Metro lineal (ML)' },
            { Icon: Settings, label: 'Material',  value: 'Aluminio extruido' },
            { Icon: Package,  label: 'Estado',    value: 'Armado — listo instalar' },
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
          Configuraciones de riel
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px', marginBottom: '48px' }}>
          {sistemas.map((s) => (
            <div key={s.vias} className="card-glass" style={{ padding: '24px', borderColor: s.destacado ? 'rgba(201,169,110,0.3)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div>
                  <p style={{ fontSize: '11px', color: 'var(--gold)', marginBottom: '3px', letterSpacing: '0.06em' }}>{s.sub}</p>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>{s.vias}</h3>
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

        {/* Ficha técnica */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Especificaciones técnicas
        </p>
        <div className="surface" style={{ padding: '0', marginBottom: '48px', overflow: 'hidden', borderRadius: '12px' }}>
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

        {/* Casos de uso */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          ¿Para quién es este producto?
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '40px' }}>
          {usos.map((u) => (
            <div key={u.titulo} className="surface" style={{ padding: '20px 24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '7px' }}>{u.titulo}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65 }}>{u.desc}</p>
            </div>
          ))}
        </div>

        {/* Nota */}
        <div style={{ padding: '18px 24px', borderRadius: '12px', background: 'rgba(184,145,42,0.05)', border: '1px solid rgba(184,145,42,0.15)', marginBottom: '32px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)' }}>Precio antes de IVA.</strong>{' '}
            Producto soportado en la carta de garantías Safra. Lista de precios sujeta a cambios sin previo aviso.
            Consulta disponibilidad de longitudes y configuraciones con tu asesor.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/productos/panel" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-2)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Ver Panel Japonés
          </Link>
          <Link href="/cotizar" className="btn-primary" style={{ padding: '11px 22px', fontSize: '14px' }}>
            Cotizar riel armado <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
