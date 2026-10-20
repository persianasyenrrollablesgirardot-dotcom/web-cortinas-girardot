import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Armchair, Sofa, Sun, Table2, Palette, ShieldCheck, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobiliario de exterior para Girardot: mimbre, ratán sintético, cordón náutico, asoleadoras y madera maciza | Fábrica de Cortinas Girardot',
  description:
    'Propuesta de línea nueva: salas y comedores en mimbre natural y ratán sintético, muebles de cordón náutico, asoleadoras de piscina y mesas de madera maciza con base metálica, para Girardot, Melgar y el Alto Magdalena.',
  robots: { index: false, follow: false },
}

type Categoria = {
  slug: string
  Icon: React.ComponentType<{ size?: number; color?: string }>
  tag: string
  titulo: string
  resumen: string
  piezas: string
  objetos: string
  competencia: string
  entrada: string
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
    objetos: 'Jarrones, canastos, bandejas y lámparas de un solo proveedor en Ibagué (Mis Canastas); espejos (Monstera, Cúcuta)',
    competencia: '4 competidores ya instalados en Girardot (Rattan Home, Colombia Muebles, Tejidos & Fibras, Elite)',
    entrada: 'La tradición del mimbre en Colombia nació en Ibagué, no en la costa — ahí mismo hay asociación de artesanos (ASOMIMTOL)',
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
    objetos: 'Macetas colgantes (marca Nativa, vía Homecenter) y papeleras de exterior (Plastihogar) — proveedor distinto al del mueble',
    competencia: 'Los mismos 4 de Girardot, más Industrias Trophy (Bogotá) y Jomave (Barranquilla) como proveedores de fibra',
    entrada: 'Diferenciar con cojines en tela técnica anti-UV, el mismo tipo que ya se maneja en control solar',
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
    objetos: 'Espejos, lámparas y biombos en este material: nadie los fabrica todavía en Colombia — espacio libre, hay que preguntar directo si lo hacen a pedido',
    competencia: 'Sin competencia en la zona — todo el que fabrica esto está en Medellín',
    entrada: 'Nicho de diseño; cotizar directo con 2-3 talleres de Medellín antes de comprometer inventario',
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
    objetos: 'Comparte proveedores de accesorios con ratán sintético (macetas, papeleras) — ver esa línea',
    competencia: 'Sin fabricante identificado en Tolima; toda la oferta está en Bogotá, Yumbo o Medellín',
    entrada: 'El más rápido de probar: Rimax ya tiene modelo de distribución establecido',
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
    objetos: 'Espejos en el mismo tablón con base metálica (línea ISLA, MARTE, PARKER de Macizo Colombia) — el hallazgo más fuerte de todo el objeto decorativo',
    competencia: 'Sin mayorista en el país — todo se fabrica sobre pedido',
    entrada: 'Asociarse con un carpintero/aserradero local y un herrero, no buscar un proveedor que no existe',
    img: '/mobiliario-exterior/mesas-tronco.jpg',
    imgAlt: 'Mesa de comedor en tablón de tronco macizo sobre base metálica negra, imagen de concepto',
  },
]

export default function MobiliarioExteriorPage() {
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Aviso de borrador — se quita cuando se apruebe */}
        <div className="surface" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 18px', marginBottom: '28px', borderColor: 'rgba(234,179,8,0.35)', background: 'rgba(234,179,8,0.06)' }}>
          <Info size={18} color="#eab308" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: '#eab308' }}>Borrador sin publicar.</strong> Página aislada, sin enlazar en el menú ni indexada — es para revisar la idea. Imágenes de concepto, no son fotos de inventario propio (línea nueva, aún sin producto real que fotografiar). Sin precios: se cotiza por WhatsApp cuando Jhon los fije.
          </p>
        </div>

        {/* Hero */}
        <div className="hero-section ext-hero" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '40px', minHeight: '320px', border: '1px solid rgba(201,169,110,0.18)', background: 'linear-gradient(135deg, #0B1526 0%, #16243F 100%)' }}>
          <div style={{ position: 'relative', padding: 'clamp(28px, 5vw, 56px)', maxWidth: '680px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Propuesta · Línea nueva</span>
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
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', margin: 0 }}><strong style={{ color: 'var(--text-2)' }}>Objetos: </strong>{c.objetos}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', margin: 0 }}><strong style={{ color: 'var(--text-2)' }}>Competencia: </strong>{c.competencia}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', margin: 0 }}><strong style={{ color: 'var(--text-2)' }}>Entrada: </strong>{c.entrada}</p>
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
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>Los 4 competidores de mimbre están en el tejido y la estructura, no en la tela de los cojines.</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>El negocio ya maneja telas técnicas anti-UV para control solar — el mismo tipo de tela que llevan los cojines de exterior de calidad (Sunbrella y equivalentes). Es una ventaja que ningún fabricante de ratán de la zona parece estar usando.</p>
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

        {/* Decisiones pendientes */}
        <div className="surface" style={{ padding: '24px 26px', marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Antes de publicar esto</p>
          <ol style={{ margin: 0, paddingLeft: '20px', display: 'grid', gap: '8px' }}>
            {[
              'Por dónde empezar: asoleadoras es la entrada más rápida y barata para probar demanda.',
              'Fabricar, asociarse con terceros, o revender terminado — varía por categoría.',
              'Si se usa el ángulo de telas propias como diferenciador frente al mimbre ya instalado en Girardot.',
              'Si esto entra al menú «Exteriores» como fila nueva, junto a pérgolas y toldos.',
            ].map((d) => (
              <li key={d} style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{d}</li>
            ))}
          </ol>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--text-3)', textAlign: 'center' }}>
          Investigación completa en <code>empresa-kb/conocimiento/investigacion/mobiliario-exterior-portafolio-2026.md</code>
        </p>

      </div>

      <style>{`
        .mob-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .pg-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 900px) { .mob-grid { grid-template-columns: 1fr; } .pg-grid-3 { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
