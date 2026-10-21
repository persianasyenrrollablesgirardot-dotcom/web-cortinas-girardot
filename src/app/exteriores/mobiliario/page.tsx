import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Armchair, Sofa, Sun, Table2, Palette, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobiliario de exterior para Girardot: mimbre, ratán sintético, cordón náutico, asoleadoras y madera maciza | Fábrica de Cortinas Girardot',
  description:
    'Salas y comedores en mimbre natural y ratán sintético, muebles de cordón náutico, asoleadoras de piscina y mesas de madera maciza con base metálica, para Girardot, Melgar y el Alto Magdalena.',
}

type Categoria = {
  slug: string
  Icon: React.ComponentType<{ size?: number; color?: string }>
  tag: string
  titulo: string
  resumen: string
  piezas: string
  material: string
  resistencia: string
  mantenimiento: string
  img: string
  imgAlt: string
}

const categorias: Categoria[] = [
  {
    slug: 'mimbre',
    Icon: Armchair,
    tag: 'Interior y terraza techada',
    titulo: 'Mimbre natural',
    resumen:
      'Caña redonda tejida a mano, tono miel, textura irregular que se nota artesanal. Es poroso: con sol directo se seca y se agrieta, así que va bajo techo.',
    piezas: 'Salas · comedores · poltronas · mecedoras · taburetes',
    material: 'Fibra vegetal (mimbre/bejuco) o ratán natural: núcleo redondo o cinta plana de 2-10 mm, caña gruesa ≥18 mm para la estructura de piezas grandes',
    resistencia: 'Solo interior o terraza techada: el sol directo reseca y agrieta la fibra. Rango ideal 10-27°C y humedad 20-60% — no apto para exposición directa',
    mantenimiento: 'Jabón suave y agua pocas veces al año; aceite de linaza hervido 1-2 veces al año; nunca productos con silicona ni pulidores agresivos',
    img: '/mobiliario-exterior/mimbre-natural.jpg',
    imgAlt: 'Sala en mimbre natural tejido a mano en terraza techada, imagen de concepto',
  },
  {
    slug: 'ratan-sintetico',
    Icon: Sofa,
    tag: 'Exterior a la intemperie',
    titulo: 'Ratán sintético',
    resumen:
      'Tira plana de polietileno (HDPE) en tejido de cesta uniforme, tonos grafito o taupe. Impermeable y resistente a UV — es el material correcto para lo que recibe sol y lluvia directa.',
    piezas: 'Salas · comedores · sillas · taburetes de bar · daybeds · columpios · asoleadoras',
    material: 'HDPE en tira plana ("flat wicker") de 6-10 mm de ancho × 1,2-1,4 mm de espesor, estabilizador UV mezclado en la resina; estructura en aluminio 6063-T5, pintura electrostática en polvo',
    resistencia: 'Apto para lluvia directa, no solo salpique; estable entre -50°C y 80°C. Vida útil comercial de 5 a 15 años según calidad del HDPE y del estabilizador UV',
    mantenimiento: 'Agua y jabón neutro diluido, cepillo suave, enjuague y secado completo. Nunca cloro, solventes ni limpiadores ácidos o abrasivos — amarillean y agrietan el recubrimiento',
    img: '/mobiliario-exterior/ratan-sintetico.jpg',
    imgAlt: 'Sala de exterior en ratán sintético gris sobre aluminio, imagen de concepto',
  },
  {
    slug: 'cordon-nautico',
    Icon: Sofa,
    tag: 'Terrazas y hospedaje boutique',
    titulo: 'Cordón náutico',
    resumen:
      'Cordón DELGADO (4-6 mm, no cuerda gruesa de muelle) tejido en rejilla apretada sobre estructura de aluminio delgada, casi siempre en grafito. El efecto es ligero y sofisticado, no rústico.',
    piezas: 'Sillas de comedor · sofás · mecedoras · camastros · columpios',
    material: 'Cordón de poliéster o polipropileno trenzado, tejido en rejilla apretada sobre marco de aluminio extruido con pintura en polvo; 4-6 mm de diámetro es el rango comercial habitual',
    resistencia: 'Marcas de referencia (Dedon, Ethimo, Kettal) documentan resistencia a UV, agua salada, cloro y temperatura extrema — Dedon simula en laboratorio 10 años de exposición continua',
    mantenimiento: 'Lavar con hidrolavadora y secar por completo antes de cubrir — la humedad atrapada en el tejido genera moho',
    img: '/mobiliario-exterior/cordon-nautico.jpg',
    imgAlt: 'Sillas tejidas en cordón náutico delgado sobre aluminio negro, imagen de concepto',
  },
  {
    slug: 'asoleadoras',
    Icon: Sun,
    tag: 'Piscina y jardín',
    titulo: 'Asoleadoras',
    resumen:
      'Camastros reclinables. Van en ratán sintético o aluminio, nunca en mimbre natural: viven a la intemperie junto a la piscina. Melgar ya se promociona como "la ciudad de las piscinas".',
    piezas: 'Camastros reclinables · con o sin ruedas · daybeds con parasol · mesas auxiliares a juego',
    material: 'Marco de aluminio (no se oxida, resiste cloro y salinidad) con tejido de ratán sintético (PE); 1 a 5 posiciones de reclinado según modelo, 150-200 cm de largo típico',
    resistencia: 'El aluminio y el ratán sintético no se ven afectados por el cloro de piscina. Capacidad de 136-150 kg según modelo. Vida útil: 5-10 años con mantenimiento, 3-5 sin él',
    mantenimiento: 'Cepillar y lavar con agua y jabón neutro, enjuagar con manguera; guardar bajo techo en temporada de lluvia. Cojín en espuma de secado rápido con funda tipo Sunbrella, resistente a cloro y moho',
    img: '/mobiliario-exterior/asoleadoras.jpg',
    imgAlt: 'Camastros en ratán sintético grafito junto a piscina, imagen de concepto',
  },
  {
    slug: 'mesas-tronco',
    Icon: Table2,
    tag: 'Comedores y complementos',
    titulo: 'Madera maciza con base metálica',
    resumen:
      'Tablón de un solo tronco (campano, caracolí, teca para exterior) sobre base de hierro o acero — en Colombia se le llama "estilo industrial", y es, según un fabricante de Bogotá, "el estilo ganador, el más elegido".',
    piezas: 'Comedores · bancas a juego · mesas de centro y auxiliares · consolas · barras',
    material: 'Tablón de un solo tronco (campano/samán o algarrobo son los más resistentes a termitas y hongos sin tratar; caracolí necesita tratamiento preservante) sobre base soldada de hierro o acero',
    resistencia: 'Campano y algarrobo: durables en exterior (más de 15 años el algarrobo). Caracolí y eucalipto: poco durables sin tratar, solo interior/terraza techada. La base metálica en pintura electrostática o galvanizado + pintura dura más que el hierro negro simple',
    mantenimiento: 'Aceite de teca cada 4-6 meses o barniz marino revisado cada 1-2 años; paño húmedo con jabón neutro y secado inmediato — evitar sol directo prolongado y agua estancada',
    img: '/mobiliario-exterior/mesas-tronco.jpg',
    imgAlt: 'Mesa de comedor en tablón de tronco macizo sobre base metálica negra, imagen de concepto',
  },
]

export default function MobiliarioExteriorPage() {
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Hero */}
        <div className="hero-section ext-hero" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '40px', minHeight: '320px', border: '1px solid rgba(201,169,110,0.18)', background: 'linear-gradient(135deg, #0B1526 0%, #16243F 100%)' }}>
          <div style={{ position: 'relative', padding: 'clamp(28px, 5vw, 56px)', maxWidth: '680px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Línea nueva</span>
            <h1 style={{ fontSize: 'clamp(28px, 4.2vw, 48px)', fontWeight: 300, lineHeight: 1.08, color: '#EEF2FF', marginBottom: '14px' }}>
              Ya diste la sombra.<br /><span className="text-gold-gradient" style={{ fontWeight: 500 }}>¿Dónde se sienta tu cliente?</span>
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(238,242,255,0.7)', lineHeight: 1.65, marginBottom: '22px' }}>
              La pérgola resuelve el sol y la lluvia. Esta es la pieza que falta: mobiliario para la misma terraza, la misma piscina, la misma finca — mimbre natural, ratán sintético, cordón náutico, asoleadoras y madera maciza con base metálica.
            </p>
          </div>
        </div>

        {/* Las 4 categorías */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>Cinco líneas, investigadas por separado</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, lineHeight: 1.1 }}>Qué hay de cada una <span className="text-gold-gradient">en el mercado colombiano</span></h2>
        </div>

        <div className="mob-grid" style={{ marginBottom: '64px' }}>
          {categorias.map((c) => (
            <div key={c.slug} className="card-glass" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', aspectRatio: '16/10', background: 'linear-gradient(135deg,#0D1525,#1A2A4A)' }}>
                <img src={c.img} alt={c.imgAlt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(238,242,255,0.8)', background: 'rgba(8,14,26,0.6)', padding: '3px 8px', borderRadius: '999px' }}>Concepto</span>
              </div>
              <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <c.Icon size={22} color="var(--gold)" />
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>{c.tag}</p>
                <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2, margin: 0 }}>{c.titulo}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6, margin: 0 }}>{c.resumen}</p>
                <div style={{ marginTop: '6px', paddingTop: '12px', borderTop: '1px solid var(--line-soft)', display: 'grid', gap: '6px' }}>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', margin: 0 }}><strong style={{ color: 'var(--gold)' }}>Piezas: </strong>{c.piezas}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', margin: 0 }}><strong style={{ color: 'var(--text-2)' }}>Material: </strong>{c.material}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', margin: 0 }}><strong style={{ color: 'var(--text-2)' }}>Resistencia: </strong>{c.resistencia}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', margin: 0 }}><strong style={{ color: 'var(--text-2)' }}>Mantenimiento: </strong>{c.mantenimiento}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* El ángulo diferenciador */}
        <div className="grid-cols-cta" style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', marginBottom: '48px' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Palette size={14} /> El ángulo que nadie más usa en Girardot
            </p>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>La diferencia no está solo en el tejido o la estructura: está en la tela de los cojines.</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>El negocio ya maneja telas técnicas anti-UV para control solar — el mismo tipo de tela que llevan los cojines de exterior de calidad (Sunbrella y equivalentes), resistente a sol y lluvia sin decolorarse.</p>
          </div>
        </div>

        {/* Para quién */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>Mismo cliente del módulo de Exteriores</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 300, lineHeight: 1.1 }}>Girardot, Melgar, Ricaurte, Flandes y el Alto Magdalena</h2>
        </div>
        <div className="pg-grid-3" style={{ marginBottom: '56px' }}>
          {[
            { t: 'Casa de descanso y condominio', d: 'La misma pérgola necesita mesa y sillas debajo. Venta cruzada natural en la misma cotización.' },
            { t: 'Piscinas privadas y de club', d: 'Melgar se promociona como "la ciudad de las piscinas" — es territorio directo para asoleadoras.' },
            { t: 'Hospedaje boutique y Airbnb', d: 'El cordón náutico tiene su tracción más fuerte en hotelería de diseño, no en el hogar promedio.' },
          ].map((x) => (
            <div key={x.t} className="surface" style={{ padding: '22px 24px' }}>
              <ShieldCheck size={16} color="var(--gold)" />
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', margin: '8px 0 6px' }}>{x.t}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{x.d}</p>
            </div>
          ))}
        </div>

        <div className="surface" style={{ padding: '26px 28px', marginBottom: '40px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>¿Cuál le sirve a su espacio?</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6, marginBottom: '18px' }}>
            El material correcto depende de si la zona recibe sol y lluvia directa o está bajo techo. Lo vemos en sitio y le decimos cuál aguanta.
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>Pedir visita <ArrowRight size={14} /></Link>
            <a href="https://wa.me/573202381865" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '15px', padding: '11px 22px' }}>WhatsApp</a>
          </div>
        </div>

      </div>

      <style>{`
        .mob-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .pg-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 900px) { .mob-grid { grid-template-columns: 1fr; } .pg-grid-3 { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
