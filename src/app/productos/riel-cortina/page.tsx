import Link from 'next/link'
import { ArrowLeft, ArrowRight, Ruler, Layers, Settings, Package } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const sistemas = [
  {
    nombre: 'Super Riel',
    sub: 'Sencillo o Doble · Cortinas ligeras a medianas',
    desc: 'El riel más versátil del catálogo. Perfil de aluminio con rodachinas deslizantes silenciosas. Apto para cortinas con peso estándar. Disponible en versión sencilla (una capa) o doble (dos capas independientes).',
    tag: 'Estándar',
    items: [
      'Rodachinas clic de nylon incluidas',
      'Topes de riel laterales',
      'Cruzador central disponible',
      'Sencillo o Doble (superposición)',
    ],
    specs: [{ k: 'Longitudes', v: '5.95 m / 6.00 m' }, { k: 'Color', v: 'Blanco' }],
  },
  {
    nombre: 'Tráfico Pesado',
    sub: 'Para cortinas pesadas · Alta exigencia',
    desc: 'Perfil de aluminio reforzado para cortinas de mayor peso (blackout grueso, cortinas con forro, ambientes comerciales de alto tráfico). Rodachinas de mayor capacidad de carga.',
    tag: 'Pesado',
    destacado: true,
    items: [
      'Perfil de aluminio reforzado',
      'Rodachinas de alta capacidad',
      'Topes de riel robustos',
      'Ideal ambientes comerciales',
    ],
    specs: [{ k: 'Longitudes', v: '3.30 m / 3.50 m / 3.60 m' }, { k: 'Versión Plus', v: '4.50 m / 5.95 m / 6.00 m' }],
  },
  {
    nombre: 'Riel Luxury',
    sub: 'Alta gama · Curvas 90° · Acabado premium',
    desc: 'Sistema de riel de aluminio anodizado para instalaciones de alto nivel arquitectónico. Permite curvas de 90° para esquinas. Carros de rodamiento silencioso con acabado premium.',
    tag: 'Luxury',
    items: [
      'Aluminio anodizado',
      'Curva 90° disponible',
      'Carros de rodamiento premium',
      'Uniones y topes a juego',
    ],
    specs: [{ k: 'Longitud', v: '5.95 m' }, { k: 'Curva', v: '90° disponible' }],
  },
  {
    nombre: 'Flexiriel',
    sub: 'Riel flexible · Curvas libres · ABS + metal',
    desc: 'Sistema de riel moldeable para instalaciones con recorridos curvos, arquiteados o en L y Z. Se dobla en frío para adaptarse a cualquier geometría del espacio.',
    tag: 'Flexible',
    items: [
      'Material ABS + metal moldeable',
      'Curvas libres en frío',
      'Rodachinas Flexiriel incluidas',
      'Soportes de muro y techo disponibles',
    ],
    specs: [{ k: 'Longitudes', v: '5.80 m / 5.95 m' }, { k: 'Moldeable', v: 'Sí — curvas 90°, L, Z, arco' }],
  },
]

const fichaTecnica = [
  { label: 'Material del riel',     value: 'Aluminio extruido / anodizado' },
  { label: 'Color estándar',        value: 'Blanco' },
  { label: 'Unidad de venta',       value: 'Metro lineal (ML)' },
  { label: 'Versión doble',         value: 'Disponible — Super Riel y Tráfico Pesado' },
  { label: 'Soportes de muro',      value: 'Sencillo y doble disponibles' },
  { label: 'Soporte de techo',      value: 'Con nylon — muro y techo' },
  { label: 'Tipo de rodachina',     value: 'Clic · Corriente · Multiusos · Mini · Carro Plus' },
  { label: 'Sistemas compatibles',  value: 'Cortinas de tela · Blackout · Dimout · Velo' },
]

const usos = [
  {
    titulo: 'Cortinas con forro blackout',
    desc: 'El Tráfico Pesado es el sistema ideal para cortinas con forro, ya que soporta el peso adicional sin deformaciones en el recorrido.',
  },
  {
    titulo: 'Cortinas dobles (día-noche)',
    desc: 'El Super Riel doble permite montar una capa de velo y una de blackout en el mismo sistema. Un solo soporte, dos cortinas independientes.',
  },
  {
    titulo: 'Espacios con esquinas o curvas',
    desc: 'El Riel Luxury con curva de 90° o el Flexiriel permiten rodear columnas y resolver esquinas sin interrumpir el recorrido de la cortina.',
  },
  {
    titulo: 'Proyectos de renovación',
    desc: 'Reemplaza solo la parte mecánica conservando la tela existente. Los rieles armados se suministran listos para instalar.',
  },
]

export default function RielCortinePage() {
  const cfg = getImagesConfig()
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontSize: '13px', color: 'var(--text-3)' }}>
          <Link href="/productos" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Productos</Link>
          <span>/</span>
          <Link href="/productos/cortina" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Colección Cortina</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-2)' }}>Riel Armado Cortina ML</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px', maxWidth: '680px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Catálogo SAFRA · Vendido por ML</span>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
            Riel Armado <span className="text-gold-gradient">Cortina</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.75 }}>
            Sistema de riel de aluminio para cortinas tradicionales, suministrado <strong>armado y listo para instalar</strong>, vendido por metro lineal.
            Cuatro tipos de riel según el peso de la cortina, el tipo de instalación y el nivel de acabado requerido.
          </p>
        </div>

        {/* Ficha rápida */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px', marginBottom: '48px' }}>
          {[
            { Icon: Layers,   label: 'Sistemas',  value: 'Super · Pesado · Luxury · Flexi' },
            { Icon: Ruler,    label: 'Venta',      value: 'Metro lineal (ML)' },
            { Icon: Settings, label: 'Material',   value: 'Aluminio extruido' },
            { Icon: Package,  label: 'Estado',     value: 'Armado — listo instalar' },
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
          Tipos de riel disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '14px', marginBottom: '48px' }}>
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
              <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '12px' }}>
                {s.items.map((it) => (
                  <li key={it} style={{ fontSize: '13px', color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                    {it}
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {s.specs.map((sp) => (
                  <div key={sp.k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-3)' }}>{sp.k}</span>
                    <span style={{ color: 'var(--text-2)', fontWeight: 600 }}>{sp.v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ficha técnica */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Especificaciones generales
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
          Casos de uso frecuentes
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
            Incluye rodachinas, topes laterales y cruzadores según configuración seleccionada.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/productos/cortina" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-2)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Ver Colección Cortina
          </Link>
          <Link href="/cotizar" className="btn-primary" style={{ padding: '11px 22px', fontSize: '14px' }}>
            Cotizar riel armado <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
