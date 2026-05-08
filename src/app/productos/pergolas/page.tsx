import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sun, Wind, Ruler, Settings, Zap, Home, Droplets, Shield, Thermometer, Leaf } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const specs = [
  { Icon: Sun,      label: 'Material cubierta',       value: 'Lona acrílica de alta resistencia UV' },
  { Icon: Settings, label: 'Herraje',                  value: 'Blanco estándar · Negro +15% recargo' },
  { Icon: Zap,      label: 'Accionamiento',             value: 'Manual con cordón · Motor Safra 50/12' },
  { Icon: Ruler,    label: 'Altura máx. de bases',     value: '2.80 m' },
  { Icon: Wind,     label: 'Proyección máxima',        value: 'Hasta 7 m (según estructura disponible)' },
  { Icon: Home,     label: 'Accesorio disponible',     value: 'Tejadillo aluminio 20 cm × 2.44 m' },
]

const tipos = [
  {
    nombre: 'Pérgola Palillería Paredón',
    sub: 'Instalación entre dos muros',
    desc: 'Diseñada para cubrir espacios entre dos paredes paralelas. La lona se extiende de muro a muro, creando una cubierta continua y de aspecto arquitectónico limpio. La proyección corresponde al lado por el cual se desea la caída del agua.',
    instalacion: 'Entre dos muros',
    tag: 'Entre muros',
    items: [
      'Ancho desde 1.50 m hasta 5.75 m',
      'Altura (proyección) desde 2.00 m hasta 5.75 m',
      'Motor Safra 50/12 disponible (no asistido)',
      'Tejadillo aluminio como complemento',
    ],
  },
  {
    nombre: 'Pérgola Palillería Lobby',
    sub: 'Instalación entre un muro y un área libre',
    desc: 'Ideal cuando uno de los lados se ancla a la fachada o muro de la edificación y el otro extremo se sostiene con columnas sobre área libre. Perfecta para terrazas, patios y entradas.',
    instalacion: 'Un muro + área libre',
    tag: 'Semi-adosada',
    items: [
      'Ancho desde 1.50 m hasta 5.75 m',
      'Altura (proyección) desde 2.00 m hasta 5.75 m',
      'Motor Safra 50/12 disponible (no asistido)',
      'Tejadillo aluminio como complemento',
    ],
    destacado: true,
  },
  {
    nombre: 'Pérgola Palillería Doble Lobby',
    sub: 'Instalación en área libre de muros',
    desc: 'Estructura completamente autoportante, sin necesidad de muros de apoyo. Se sostiene sobre cuatro columnas propias. La solución más versátil para jardines, terrazas amplias y zonas descubiertas.',
    instalacion: 'Área libre (sin muros)',
    tag: 'Autoportante',
    items: [
      'Ancho desde 1.50 m hasta 5.75 m',
      'Altura (proyección) desde 2.00 m hasta 5.75 m',
      'Motor Safra 50/12 disponible (no asistido)',
      'Tejadillo aluminio como complemento',
    ],
  },
]

const caracteristicas = [
  {
    titulo: 'Lona Acrílica Premium',
    desc: 'Tejido acrílico de alta densidad diseñado para exteriores. Resistente a los rayos UV, la lluvia y el viento. Mantiene el color sin desteñirse en climas cálidos y húmedos como el de Girardot.',
  },
  {
    titulo: 'Herraje en Aluminio Blanco',
    desc: 'Estructura de aluminio anodizado blanco que resiste la corrosión y la intemperie. Disponible en color negro con un recargo del 15% sobre el precio base.',
  },
  {
    titulo: 'Accionamiento manual o motorizado',
    desc: 'La lona se abre y cierra mediante cordón manual o con motor eléctrico Safra 50/12 (no asistido). Opción ideal para pérgolas de mayor tamaño donde el manejo manual puede resultar pesado.',
  },
  {
    titulo: 'Tejadillo de Aluminio',
    desc: 'Complemento de 20 cm de ancho × 2.44 m de largo en aluminio. Se instala en el extremo superior para mejorar el remate de la cubierta y la protección contra la lluvia lateral.',
  },
]

// ── Tela Acrysun ──────────────────────────────────────────────
const fichaTecnica = [
  { label: 'Composición',            value: '100% fibra acrílica teñida en masa' },
  { label: 'Tipo de tejido',         value: 'Acrílico Semi-Impermeable' },
  { label: 'Acabado',                value: 'Resinado a 1 cara · Tratamiento especial antimanchas y antimoho (BS 7209)' },
  { label: 'Uso',                    value: 'Exterior' },
  { label: 'Peso',                   value: '300 g/m² ± 5%  ·  UNE-EN 12127' },
  { label: 'Espesor',                value: '0.55 mm  ·  UNE-EN ISO 5084' },
  { label: 'Ancho del rollo',        value: '120 cm ± 1%' },
  { label: 'Longitud del rollo',     value: '60 m (promedio)' },
  { label: 'Columna de agua',        value: '≥ 1.000 mm  ·  UNE-EN ISO 20811' },
  { label: 'Resistencia tracción',   value: '155 / 90 daN / 5 cm ± 5%  (Urdimbre/Trama)  ·  UNE-EN ISO 13934-1' },
  { label: 'Resistencia desgarre',   value: '4 / 3 daN ± 10%  (Urdimbre/Trama)  ·  UNE-EN ISO 13937-2' },
  { label: 'Solidez color (Xenotest)', value: '7–8  ·  UNE-EN ISO 105 B02' },
  { label: 'Solidez color (intemperie)', value: '4–5  ·  UNE-EN ISO 105 B04' },
  { label: 'Repelencia al aceite',   value: '≥ 4  ·  UNE-EN ISO 14419' },
  { label: 'Repelencia al agua',     value: '≥ 4  ·  UNE-EN ISO 4920' },
]

const propiedades = [
  'Anti-UV', 'Climático', 'Transpirable', 'Antibacterial', 'Anti-manchas',
  'Secado rápido', 'Repelente al agua', 'Máxima resistencia',
  'Fácil mantenimiento', 'Estabilidad dimensional', 'Producción amigable con el ambiente',
]

// colores lisos
const coloresRayas = [
  { codigo: '2015', nombre: 'Rayas Amarillo N',   css: 'repeating-linear-gradient(90deg, #F0B800 0px, #F0B800 10px, #F5F0E0 10px, #F5F0E0 20px)', ancho: '10 cm' },
  { codigo: '2019', nombre: 'Rayas Azul N',        css: 'repeating-linear-gradient(90deg, #1E3A5F 0px, #1E3A5F 10px, #E8E4D8 10px, #E8E4D8 20px)', ancho: '10 cm' },
  { codigo: '2120', nombre: 'Rayas Negro N',       css: 'repeating-linear-gradient(90deg, #1A1A1A 0px, #1A1A1A 10px, #D4AA30 10px, #D4AA30 20px)', ancho: '10 cm' },
  { codigo: '2171', nombre: 'Rayas Negro N',       css: 'repeating-linear-gradient(90deg, #2E2E2E 0px, #2E2E2E 10px, #888888 10px, #888888 20px)', ancho: '10 cm' },
  { codigo: '2212', nombre: 'Rayas Rojo',          css: 'repeating-linear-gradient(90deg, #B81820 0px, #B81820 10px, #F0EDE8 10px, #F0EDE8 20px)', ancho: '10 cm' },
  { codigo: '2248', nombre: 'Rayas Verde/N',       css: 'repeating-linear-gradient(90deg, #2D6A4F 0px, #2D6A4F 10px, #1A1A1A 10px, #1A1A1A 20px)', ancho: '10 cm' },
  { codigo: '1477', nombre: 'Rayas Lagoon V.C/N',  css: 'repeating-linear-gradient(90deg, #1B7A6E 0px, #1B7A6E 10px, #1A1A1A 10px, #1A1A1A 20px)', ancho: '10 cm' },
]

const coloresLisos = [
  // Blancos y neutros claros
  { codigo: '1069', nombre: 'Optik',      css: '#EEECEA', grupo: 'Neutros' },
  { codigo: '2042', nombre: 'Blanco',     css: '#F8F6F2', grupo: 'Neutros' },
  { codigo: '2926', nombre: 'Natural',    css: '#E0D4C0', grupo: 'Neutros' },
  { codigo: '2596', nombre: 'Seda',       css: '#DDD3C4', grupo: 'Neutros' },
  { codigo: '2354', nombre: 'Tenere',     css: '#CBBFA8', grupo: 'Neutros' },
  { codigo: '2038', nombre: 'Beige',      css: '#C0A882', grupo: 'Neutros' },
  { codigo: '2296', nombre: 'Avena',      css: '#CEC09A', grupo: 'Neutros' },
  { codigo: '2838', nombre: 'Integral',   css: '#AE9A7A', grupo: 'Neutros' },
  { codigo: '2821', nombre: 'Silver',     css: '#B0B8C4', grupo: 'Grises' },
  { codigo: '2102', nombre: 'Gris',       css: '#787878', grupo: 'Grises' },
  { codigo: '224',  nombre: 'Grafito',    css: '#484848', grupo: 'Grises' },
  { codigo: '3602', nombre: 'Grafito',    css: '#383838', grupo: 'Grises' },
  { codigo: '8488', nombre: 'Antracita',  css: '#2A2A2A', grupo: 'Grises' },
  { codigo: '2170', nombre: 'Negro',      css: '#101010', grupo: 'Grises' },
  // Tierra / cálidos
  { codigo: '3605', nombre: 'Piedra',     css: '#C8783C', grupo: 'Tierra' },
  { codigo: '1073', nombre: 'Rain',       css: '#C05830', grupo: 'Tierra' },
  { codigo: '2316', nombre: 'Café',       css: '#4A2210', grupo: 'Tierra' },
  { codigo: '2146', nombre: 'Marrón',     css: '#7A3820', grupo: 'Tierra' },
  { codigo: '8645', nombre: 'Terracota',  css: '#8B2018', grupo: 'Tierra' },
  { codigo: '2101', nombre: 'Granate',    css: '#6A0E18', grupo: 'Tierra' },
  // Amarillos / naranjas / rojos
  { codigo: '2013', nombre: 'Amarillo',   css: '#F0B800', grupo: 'Vivos' },
  { codigo: '2142', nombre: 'Mandarina',  css: '#E07818', grupo: 'Vivos' },
  { codigo: '2050', nombre: 'Naranja',    css: '#D85000', grupo: 'Vivos' },
  { codigo: '2211', nombre: 'Rojo',       css: '#C01820', grupo: 'Vivos' },
  { codigo: '1066', nombre: 'Logo Red',   css: '#D80018', grupo: 'Vivos' },
  // Verdes
  { codigo: '2244', nombre: 'Verde Claro', css: '#6AAB30', grupo: 'Verdes' },
  { codigo: '2242', nombre: 'Verde',       css: '#2D7A28', grupo: 'Verdes' },
  { codigo: '2892', nombre: 'Jade',        css: '#0A5840', grupo: 'Verdes' },
  { codigo: '2245', nombre: 'Botella',     css: '#1A4028', grupo: 'Verdes' },
  // Azules
  { codigo: '2235', nombre: 'Azul Real',  css: '#1040A0', grupo: 'Azules' },
  { codigo: '2018', nombre: 'Azul',       css: '#1028C0', grupo: 'Azules' },
  { codigo: '2145', nombre: 'Marino',     css: '#102060', grupo: 'Azules' },
  { codigo: '2051', nombre: 'Admiral',    css: '#0A1840', grupo: 'Azules' },
]

const gruposLisos = ['Neutros', 'Grises', 'Tierra', 'Vivos', 'Verdes', 'Azules']

export default async function PergolasPage() {
  const cfg = await getImagesConfig()
  const heroImg = cfg.productos_hero?.['pergolas'] || '/safra/pergolas/pergola-palomino.jpg'
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Hero visual */}
        <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '36px', height: '280px', border: '1px solid rgba(201,169,110,0.18)' }}>
          <img src={heroImg} alt="Pérgola Palillería" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.85) 0%, rgba(8,14,26,0.5) 60%, rgba(8,14,26,0.1) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 56px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px', fontWeight: 700 }}>Pérgolas Palillería · Safra 2026</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF', marginBottom: '12px' }}>
              Cubierta para exteriores<br /><span style={{ color: 'var(--gold-light)', fontWeight: 500 }}>con lona acrílica retráctil</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.6)', maxWidth: '480px' }}>
              3 tipos de instalación — entre muros, semi-adosada o autoportante. Proyección hasta 7 m.
            </p>
          </div>
        </div>

        {/* Header + Specs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '52px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Pérgolas</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
              Protección solar para <span className="text-gold-gradient">espacios exteriores</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
              Las Pérgolas Palillería de Safra combinan estructura de aluminio de alta resistencia con lona acrílica retráctil, ofreciendo sombra y protección en terrazas, patios, jardines y zonas sociales al aire libre.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '24px' }}>
              Color herraje blanco estándar. Disponible en negro con 15% de recargo. Accionamiento manual con cordón. Motor Safra 50/12 disponible (no asistido). Altura máxima de las bases: 2.80 m.
            </p>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar pérgola <ArrowRight size={14} />
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

        {/* Tipos de pérgola */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Tipos de instalación disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '52px' }}>
          {tipos.map((t) => (
            <div key={t.nombre} className="card-glass" style={{ padding: '28px 28px', borderColor: t.destacado ? 'rgba(201,169,110,0.3)' : undefined, background: t.destacado ? 'rgba(184,145,42,0.04)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <p style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.06em' }}>{t.instalacion}</p>
                <span className="tag" style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>{t.tag}</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2, marginBottom: '10px' }}>{t.nombre}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '18px' }}>{t.desc}</p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px', marginBottom: '16px' }}>
                {t.items.map((item) => (
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

        {/* Accesorios */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Accesorios adicionales
        </p>
        <div style={{ marginBottom: '64px' }}>
          <div className="card-glass" style={{ padding: '24px 32px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Tejadillo en Aluminio</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>
              20 cm de ancho × 2.44 m de largo. Se instala en el remate superior de la pérgola para mejorar la protección contra la lluvia y lograr un acabado arquitectónico superior. Consulta disponibilidad con tu asesor.
            </p>
          </div>
        </div>

        {/* Galería lonas disponibles */}
        <div style={{ marginBottom: '52px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Lonas disponibles</p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>Telas acrílicas para pérgola — rayas y lisos en +40 referencias de color</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { src: '/safra/pergolas/pergola-acrysun-rayas.jpg', nombre: 'Acrysun Rayas',  sub: 'Rayas Amarillo · 2015' },
              { src: '/safra/pergolas/pergola-ventura.jpg',       nombre: 'Ventura',         sub: 'Blackout · Lona exterior' },
              { src: '/safra/pergolas/pergola-palomino.jpg',      nombre: 'Palomino',        sub: 'Blackout · Lona exterior' },
            ].map((t) => (
              <div key={t.nombre} className="card-glass" style={{ overflow: 'hidden' }}>
                <div className='img-zoom-wrap' style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img className='img-zoom' src={t.src} alt={t.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '12px 16px 14px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{t.nombre}</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-3)' }}>{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            TELA ACRYSUN
        ═══════════════════════════════════════════════ */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '52px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <span className="badge">Tela oficial</span>
            <span style={{ fontSize: '12px', color: 'var(--text-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Línea Exteriores</span>
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '12px' }}>
            Tela <span className="text-gold-gradient">AcrySun®</span> — 100% Fibra Acrílica
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '36px' }}>
            Lona acrílica semi-impermeable teñida en masa, con tratamiento especial antimanchas y antimoho para toldos exteriores. Certificada bajo normas UNE-EN internacionales. Disponible en más de 40 colores lisos y rayas.
          </p>
        </div>

        {/* Propiedades AcrySun */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>
          Propiedades
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '44px' }}>
          {propiedades.map((p) => (
            <span key={p} className="tag" style={{ fontSize: '13px', padding: '5px 12px' }}>{p}</span>
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
              gridTemplateColumns: '200px 1fr',
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

        {/* Carta de colores — Rayas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
          Carta de color — Rayas
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>
          Ancho de franjas: 10 cm · Ancho de tela: 1.20 m
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', marginBottom: '48px' }}>
          {coloresRayas.map((c) => (
            <div key={c.codigo} className="card-glass" style={{ overflow: 'hidden' }}>
              <div style={{ height: '80px', background: c.css }} />
              <div style={{ padding: '10px 12px 12px' }}>
                <p style={{ fontSize: '11px', color: 'var(--gold)', marginBottom: '2px', fontVariantNumeric: 'tabular-nums' }}>{c.codigo}</p>
                <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{c.nombre}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carta de colores — Lisos por grupo */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
          Carta de color — Lisos
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '28px' }}>
          Ancho de tela: 1.20 m
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '52px' }}>
          {gruposLisos.map((grupo) => {
            const colores = coloresLisos.filter((c) => c.grupo === grupo)
            return (
              <div key={grupo}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>
                  {grupo}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
                  {colores.map((c) => (
                    <div key={c.codigo} className="card-glass" style={{ overflow: 'hidden' }}>
                      <div style={{ height: '80px', background: c.css, border: c.css === '#F8F6F2' || c.css === '#EEECEA' ? '1px solid var(--border)' : 'none' }} />
                      <div style={{ padding: '10px 12px 12px' }}>
                        <p style={{ fontSize: '11px', color: 'var(--gold)', marginBottom: '2px', fontVariantNumeric: 'tabular-nums' }}>{c.codigo}</p>
                        <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{c.nombre}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Cuál tipo de pérgola y color necesitas?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Visitamos tu espacio, tomamos medidas y te entregamos cotización sin costo.</p>
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

        {/* Accesorios links */}
        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          <Link href="/productos/accesorios-pergolas" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 24px', borderRadius: '12px', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Insumos</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Accesorios Pérgolas →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Tubos, guías, bridas, poleas y kits de instalación</p>
            </div>
          </Link>
          <Link href="/productos/accesorios-toldos" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 24px', borderRadius: '12px', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Insumos</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Accesorios Toldos →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Brazos, casquillos, motores, telas y estructuras</p>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
