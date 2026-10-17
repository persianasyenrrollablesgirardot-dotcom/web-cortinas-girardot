import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sun, Ruler, Anchor, PaintBucket, Droplets, Layers, Flag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pérgolas Metálicas para Control Solar en Girardot | Fábrica de Cortinas Girardot',
  description:
    'Pérgolas metálicas a medida en acero estructural con techo de policarbonato o teja. Adosadas o autoportantes, para terrazas, patios, parqueaderos y zonas BBQ en Girardot, Melgar y la región.',
}

/* ⚑ = dato que Jhon debe confirmar antes de publicar */
const PENDIENTES = {
  garantia: '⚑ por definir',
  plazo: '⚑ por definir',
  precio: '⚑ por definir',
}

const specs = [
  { Icon: Layers,     label: 'Estructura',          value: 'Tubo estructural A500 Gr. C (345 MPa). Columna 100×100 · viga 100×50 · correa 80×40' },
  { Icon: Sun,        label: 'Techo',               value: 'Policarbonato alveolar 6–8 mm bronce u opal, protección UV 10 años · opción teja' },
  { Icon: Anchor,     label: 'Anclaje',             value: 'Platina 200×200×6 mm con 4 anclajes de 1/2": químico o expansivo según el piso' },
  { Icon: PaintBucket,label: 'Acabado',             value: 'Anticorrosivo + esmalte poliuretano · pintura electrostática a color' },
  { Icon: Droplets,   label: 'Agua',                value: 'Pendiente mínima 5°, canal y bajante incluidos. Prueba de agua antes de entregar' },
  { Icon: Ruler,      label: 'Luz libre',           value: 'Hasta 4 m por módulo sin columnas intermedias; mayores con cálculo estructural' },
]

const tipos = [
  {
    nombre: 'Pérgola adosada',
    sub: 'Un muro + 2 columnas',
    tag: 'Terrazas',
    desc: 'La viga principal se apoya en ménsulas ancladas al muro de la casa y el frente en dos columnas. Es la más usada en terrazas de apartamento y patios traseros: menos columnas, menos huecos en el piso.',
    items: ['Ménsulas de platina cada 1,5 m', 'Flanche sellado contra el muro', 'Ancho hasta 6 m · salida hasta 4 m', 'Permiso de copropiedad si aplica'],
  },
  {
    nombre: 'Pérgola autoportante',
    sub: '4 columnas, sin muros',
    tag: 'Jardines · piscina',
    desc: 'Estructura independiente sobre cuatro columnas. Para jardines, zonas de piscina, BBQ y cualquier área libre. Las riostras en las esquinas la mantienen rígida al viento.',
    items: ['Cartelas en las 4 esquinas', 'Zapata o platina sobre placa maciza', 'Módulos de 3×3 hasta 4×6 m', 'Ampliable por módulos'],
    destacado: true,
  },
  {
    nombre: 'Cubierta de parqueadero',
    sub: 'Teja o policarbonato compacto',
    tag: 'Vehículos',
    desc: 'Misma estructura, techo cerrado. Protege el carro del sol directo y del granizo. Teja termoacústica cuando se quiere sombra total; policarbonato compacto cuando se quiere luz.',
    items: ['Altura libre 2,3–2,6 m', 'Teja termoacústica o compacto 4 mm', 'Canal de mayor sección', 'Hasta 2 vehículos por módulo'],
  },
]

const techos = [
  {
    nombre: 'Policarbonato alveolar',
    sub: '6 u 8 mm · bronce / opal',
    desc: 'Deja pasar luz difusa sin el calor del sol directo. En bronce transmite ~20 % de la luz; en opal ~40 %. Garantía UV del fabricante: 10 años. El más pedido para terrazas.',
    datos: ['Correas cada 65–100 cm según espesor', 'Perfiles de unión y cinta de sellado', 'Peso 1,1–1,4 kg/m²'],
  },
  {
    nombre: 'Policarbonato compacto',
    sub: '4–6 mm · transparente / fumé',
    desc: 'Lámina maciza, más resistente al impacto y más transparente. Para quien quiere ver el cielo. Pesa más y cuesta más que el alveolar.',
    datos: ['Resiste granizo', 'Transparencia tipo vidrio', 'Mayor dilatación: holguras más amplias'],
  },
  {
    nombre: 'Teja termoacústica',
    sub: 'Sombra total',
    desc: 'Lámina metálica con núcleo aislante. Corta el calor y el ruido de la lluvia. Para parqueaderos, zonas de servicio y donde la luz no importa.',
    datos: ['Aislamiento térmico y acústico', 'Pendiente mínima 10 %', 'Colores de fábrica'],
  },
]

const proceso = [
  { n: '01', t: 'Visita y medición',  d: 'Revisamos el piso (placa maciza, losa aligerada o jardín), los muros, el desagüe y el acceso. Definimos la pendiente desde el primer día.' },
  { n: '02', t: 'Diseño y despiece',  d: 'Render de la pérgola en tu espacio, lista de perfiles con pesos y cotización cerrada. Nada se corta sin tu aprobación.' },
  { n: '03', t: 'Fabricación en taller', d: 'Corte, armado a escuadra y soldadura por módulos. Tubos tapados para que no entre agua. Anticorrosivo el mismo día.' },
  { n: '04', t: 'Anclaje',            d: 'Perforación, limpieza del hueco y anclaje químico o expansivo según el piso. Sello elastomérico y reposición de la impermeabilización.' },
  { n: '05', t: 'Montaje y techo',    d: 'Columnas, vigas y correas aplomadas y niveladas. Policarbonato con la cara UV arriba, holguras de dilatación y cintas de sellado.' },
  { n: '06', t: 'Prueba de agua y entrega', d: 'Manguera sobre el techo, el canal y el encuentro con el muro. Acta de entrega con fotos y garantía escrita.' },
]

const durar = [
  { t: 'Acero estructural, no de cerramiento', d: 'Usamos tubería A500 Grado C (345 MPa de fluencia), la misma que exige la norma para cerchas. La tubería de ornamentación tiene la mitad de resistencia y se vende con la misma medida.' },
  { t: 'Soldadura según la unión', d: 'Electrodo 7018 en las uniones que cargan —platinas, cartelas, columna a viga— y 6013 en correas y remates. Cordón completo alrededor, no puntos.' },
  { t: 'Tubos cerrados y pintura por dentro del plazo', d: 'Cada tubo lleva tapa soldada: el óxido de las pérgolas empieza por dentro. El anticorrosivo se aplica el mismo día del pulido.' },
  { t: 'Anclaje según el piso, no el mismo para todo', d: 'Chazo expansivo solo en placa maciza. En losa aligerada, ladrillo o cerca de un borde va anclaje químico, que no fisura y sella el hueco.' },
]

const comparativa = [
  { k: 'Medidas',       kit: 'Fijas (2,95 × 3,95 m)',               nuestra: 'A la medida exacta del espacio' },
  { k: 'Estructura',    kit: 'Aluminio liviano',                      nuestra: 'Acero estructural A500 soldado' },
  { k: 'Anclaje',       kit: 'No incluido; "requiere superficie adecuada"', nuestra: 'Platina y anclajes según el piso, sellados' },
  { k: 'Agua',          kit: 'Sin pendiente definida ni canal',       nuestra: 'Pendiente ≥ 5°, canal y bajante' },
  { k: 'Garantía',      kit: '1 año',                                 nuestra: PENDIENTES.garantia },
  { k: 'Instalación',   kit: 'Armado opcional, sin diseño',           nuestra: 'Visita, render, montaje y prueba de agua' },
]

const faq = [
  { q: '¿Necesito permiso del conjunto?', a: 'Casi siempre sí, para cualquier estructura fija en terraza o zona común. Lo pedimos antes de fabricar, no después.' },
  { q: '¿Se puede anclar en una terraza impermeabilizada?', a: 'Sí. Preferimos anclar a muros y vigas; sobre la placa usamos anclaje químico, sello elastomérico bajo la platina y reponemos la impermeabilización alrededor de cada pie.' },
  { q: '¿Aguanta granizo y aguaceros?', a: 'Con policarbonato de 6–8 mm sobre correas a la distancia que indica el fabricante, pendiente de 5° o más y canal amplia, sí. La prueba de agua se hace delante de ti.' },
  { q: '¿Cuánto tarda?', a: `Fabricación e instalación: ${PENDIENTES.plazo}. Depende del tamaño y del acabado (la pintura electrostática suma días de horno).` },
  { q: '¿Qué mantenimiento necesita?', a: 'Lavar el policarbonato y la canal dos veces al año con agua y jabón neutro. Revisar la pintura una vez al año en uniones y pies de columna y retocar si hay un rayón.' },
]

function Pendiente({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '2px 10px', borderRadius: '999px', background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.3)', color: '#B91C1C', fontSize: '12px', fontWeight: 600 }}>
      <Flag size={11} /> {children}
    </span>
  )
}

function IlustracionPergola() {
  return (
    <svg viewBox="0 0 800 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden>
      <defs>
        <linearGradient id="pgSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B1526" />
          <stop offset="100%" stopColor="#13213A" />
        </linearGradient>
        <linearGradient id="pgPoly" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(201,169,110,0.35)" />
          <stop offset="100%" stopColor="rgba(201,169,110,0.08)" />
        </linearGradient>
        <radialGradient id="pgSun" cx="80%" cy="15%" r="40%">
          <stop offset="0%" stopColor="rgba(232,201,138,0.45)" />
          <stop offset="100%" stopColor="rgba(232,201,138,0)" />
        </radialGradient>
      </defs>
      <rect width="800" height="420" fill="url(#pgSky)" />
      <rect width="800" height="420" fill="url(#pgSun)" />
      <rect x="0" y="330" width="800" height="90" fill="#0A1220" />
      <line x1="0" y1="330" x2="800" y2="330" stroke="#1A2A4A" strokeWidth="1.5" />
      {/* techo policarbonato en perspectiva */}
      <polygon points="300,120 760,95 740,160 280,185" fill="url(#pgPoly)" stroke="rgba(201,169,110,0.5)" strokeWidth="1.2" />
      {/* correas */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const t = i / 5
        const x1 = 300 + (760 - 300) * t, y1 = 120 - 25 * t
        const x2 = 280 + (740 - 280) * t, y2 = 185 - 25 * t
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A96E" strokeWidth="3" />
      })}
      {/* vigas principales */}
      <line x1="300" y1="120" x2="760" y2="95" stroke="#C9A96E" strokeWidth="6" />
      <line x1="280" y1="185" x2="740" y2="160" stroke="#C9A96E" strokeWidth="7" />
      {/* columnas */}
      {[[282, 185], [738, 160], [302, 120], [758, 95]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 5} y={y} width="10" height={330 - y} fill={i < 2 ? '#C9A96E' : '#8A6A1A'} />
          <rect x={x - 16} y={326} width="32" height="6" rx="1" fill="#C9A96E" opacity={i < 2 ? 1 : 0.6} />
        </g>
      ))}
      {/* cartelas */}
      <polygon points="287,190 287,230 327,187" fill="rgba(201,169,110,0.6)" />
      <polygon points="733,165 733,205 693,168" fill="rgba(201,169,110,0.6)" />
      {/* canal y bajante */}
      <line x1="280" y1="190" x2="740" y2="165" stroke="rgba(201,169,110,0.35)" strokeWidth="2" strokeDasharray="4 3" />
      <line x1="289" y1="190" x2="289" y2="330" stroke="rgba(201,169,110,0.35)" strokeWidth="2" strokeDasharray="4 3" />
      {/* sombra proyectada */}
      <polygon points="330,330 790,305 770,345 310,360" fill="rgba(0,0,0,0.35)" />
      {/* cotas */}
      <text x="520" y="80" textAnchor="middle" fill="rgba(201,169,110,0.7)" fontSize="11" fontFamily="sans-serif" letterSpacing="2">POLICARBONATO 8 mm · PENDIENTE 5°</text>
      <text x="200" y="260" fill="rgba(201,169,110,0.6)" fontSize="10" fontFamily="sans-serif" letterSpacing="1.5">COLUMNA 100×100</text>
      <text x="200" y="345" fill="rgba(201,169,110,0.6)" fontSize="10" fontFamily="sans-serif" letterSpacing="1.5">PLATINA + ANCLAJE 1/2"</text>
    </svg>
  )
}

export default function PergolasMetalicasPage() {
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Aviso de borrador — se retira antes de publicar */}
        <div style={{ marginBottom: '20px', padding: '10px 16px', borderRadius: '12px', background: 'rgba(220,38,38,0.06)', border: '1px dashed rgba(220,38,38,0.35)', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <Pendiente>Borrador en rama aislada</Pendiente>
          <span style={{ fontSize: '13px', color: 'var(--text-2)' }}>Los datos marcados con ⚑ (garantía, plazo, precio) están pendientes de que Jhon los confirme. Fotos: ninguna propia todavía; la ilustración es provisional.</span>
        </div>

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Hero */}
        <div className="hero-section" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '36px', height: '320px', border: '1px solid rgba(201,169,110,0.18)' }}>
          <IlustracionPergola />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.9) 0%, rgba(8,14,26,0.55) 55%, rgba(8,14,26,0.05) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 clamp(24px, 6vw, 56px)' }}>
            <span className="badge" style={{ marginBottom: '14px', alignSelf: 'flex-start' }}>Nueva línea · Fabricación propia</span>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, lineHeight: 1.08, color: '#EEF2FF', marginBottom: '12px', maxWidth: '560px' }}>
              Pérgola metálica<br /><span className="text-gold-gradient" style={{ fontWeight: 500 }}>para el sol de Girardot</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.65)', maxWidth: '460px' }}>
              Estructura en acero estructural y techo de policarbonato o teja. Adosada o autoportante, a la medida de tu terraza, patio o parqueadero.
            </p>
          </div>
        </div>

        {/* Header + Specs */}
        <div className="grid-cols-2-lg" style={{ alignItems: 'start', marginBottom: '56px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Pérgolas metálicas</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
              Techo firme, sombra de verdad, <span className="text-gold-gradient">sin volver a pensar en él</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '14px' }}>
              Una pérgola de lona se recoge; una metálica se queda. Para quien quiere usar la terraza con sol de mediodía o aguacero de tarde, y no quiere subir a tensar ni a destapar nada.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '24px' }}>
              Fabricamos en taller y montamos en sitio. Cada pérgola sale con despiece, anclaje elegido según tu piso y prueba de agua antes del acta de entrega.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
                Cotizar pérgola metálica <ArrowRight size={14} />
              </Link>
              <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>Desde <Pendiente>{PENDIENTES.precio}</Pendiente></span>
            </div>
          </div>

          <div className="grid-cols-2">
            {specs.map(({ Icon, label, value }) => (
              <div key={label} className="surface" style={{ padding: '18px' }}>
                <Icon size={15} color="var(--gold)" style={{ marginBottom: '10px' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-3)', marginBottom: '4px', letterSpacing: '0.05em' }}>{label}</p>
                <p style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500, lineHeight: 1.4 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tipos */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Tres formas de instalarla
        </p>
        <div className="pg-grid-3" style={{ marginBottom: '56px' }}>
          {tipos.map((t) => (
            <div key={t.nombre} className="card-glass" style={{ padding: '28px', borderColor: t.destacado ? 'rgba(201,169,110,0.3)' : undefined, background: t.destacado ? 'rgba(184,145,42,0.04)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', gap: '8px' }}>
                <p style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.06em' }}>{t.sub}</p>
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

        {/* Techos */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>
          El techo se elige por la luz que quieres
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>Tres opciones; la estructura es la misma.</p>
        <div className="pg-grid-3" style={{ marginBottom: '56px' }}>
          {techos.map((t) => (
            <div key={t.nombre} className="card-glass" style={{ padding: '24px 28px' }}>
              <p style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.06em', marginBottom: '6px' }}>{t.sub}</p>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>{t.nombre}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '14px' }}>{t.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {t.datos.map((d) => <span key={d} className="tag" style={{ fontSize: '12px' }}>{d}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Proceso */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Cómo la hacemos
        </p>
        <div className="pg-grid-3" style={{ marginBottom: '56px' }}>
          {proceso.map((p) => (
            <div key={p.n} className="surface" style={{ padding: '22px 24px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.1em' }}>{p.n}</span>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', margin: '6px 0 8px' }}>{p.t}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{p.d}</p>
            </div>
          ))}
        </div>

        {/* Lo que la hace durar */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Lo que la hace durar
        </p>
        <div className="grid-cols-2" style={{ marginBottom: '56px' }}>
          {durar.map((c) => (
            <div key={c.t} className="card-glass" style={{ padding: '24px 28px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>{c.t}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65 }}>{c.d}</p>
            </div>
          ))}
        </div>

        {/* Comparativa */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>
          Pérgola de almacén vs. pérgola a medida
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>Para que compares con lo que ves en la góndola.</p>
        <div className="card-glass" style={{ marginBottom: '56px', overflow: 'hidden' }}>
          <div className="pg-cmp-row" style={{ background: 'rgba(184,145,42,0.06)', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-2)' }}>
            <span></span><span>Kit de almacén</span><span style={{ color: 'var(--gold-dark)' }}>A medida</span>
          </div>
          {comparativa.map((r, i) => (
            <div key={r.k} className="pg-cmp-row" style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderTop: '1px solid var(--border)' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-3)', fontWeight: 600 }}>{r.k}</span>
              <span style={{ fontSize: '13px', color: 'var(--text-2)' }}>{r.kit}</span>
              <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500 }}>{r.nuestra.startsWith('⚑') ? <Pendiente>{r.nuestra}</Pendiente> : r.nuestra}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Preguntas frecuentes
        </p>
        <div className="grid-cols-2" style={{ marginBottom: '56px' }}>
          {faq.map((f) => (
            <div key={f.q} className="surface" style={{ padding: '20px 24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{f.q}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="grid-cols-cta" style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Adosada, autoportante o para el carro?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Visitamos tu espacio, revisamos el piso y los muros, y te entregamos render y cotización sin costo.</p>
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

        {/* Relacionados */}
        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          <Link href="/productos/pergolas" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 24px', borderRadius: '12px', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>¿Prefieres recogerla?</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Pérgola de lona retráctil →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Aluminio + lona Acrysun, manual o motorizada</p>
            </div>
          </Link>
          <Link href="/productos/toldo-romano" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 24px', borderRadius: '12px', cursor: 'pointer' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Exteriores</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Toldo romano corredizo →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Tela Solar Screen, manual o motorizado</p>
            </div>
          </Link>
        </div>

      </div>

      <style>{`
        .pg-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .pg-cmp-row { display: grid; grid-template-columns: 140px 1fr 1fr; gap: 16px; padding: 13px 24px; align-items: center; }
        @media (max-width: 900px) {
          .pg-grid-3 { grid-template-columns: 1fr; }
          .pg-cmp-row { grid-template-columns: 1fr; gap: 4px; }
          .pg-cmp-row > span:first-child { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; }
        }
      `}</style>
    </div>
  )
}
