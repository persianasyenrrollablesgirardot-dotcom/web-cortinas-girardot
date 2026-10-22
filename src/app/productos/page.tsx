import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FondoIA from '@/components/FondoIA'

const mapa: Record<string, string> = {
  'persianas-y-cortinas': '/hero_banner.png',
  'motorizacion-y-domotica-de-persianas': '/home/persianas-motor.jpg',
  'accesorios-de-persianas-y-cortinas': '/home/persianas-verticales.jpg',
  'pergolas-metalicas': '/pergolas-metalicas/adosada-policarbonato.jpg',
  'estructuras-metalicas': '/estructuras/escaleras-metalicas.jpg',
  'divisiones-de-bano': '/divisiones-bano/frameless.jpg',
  'toldos-y-pergolas-de-lona': '/toldos/toldo-brazos.jpg',
  'peliculas-solares': '/home/peliculas.jpg',
  'lienzos': '/home/decoracion.jpg',
  'papel-de-colgadura': '/home/decoracion.jpg',
  'mobiliario-exterior': '/mobiliario-exterior/ratan-sintetico.jpg',
}

const grupos = [
  {
    slug: 'persianas-y-cortinas',
    titulo: 'Persianas y cortinas · Control de luz',
    desc: 'Lo que fabricamos e instalamos todos los días: enrollables, franjas, verticales, panel, cortina y persianas estampadas.',
    productos: [
      {
        href: '/productos/enrollables',
        num: '01',
        title: 'Persiana Enrollable',
        sub: 'Estándar · Premium con cabezal metálico',
        desc: 'La solución más versátil. Sistema Estándar para uso cotidiano y versión Premium con cabezal metálico para mayor sofisticación. Garantía 7 años.',
        tag: 'Garantía 7 años',
        features: ['Blackout · Screen · Traslúcida', 'Panel Japonés modular', 'Cabezal metálico Premium', 'Hasta 3 m manual / motor sin límite'],
      },
      {
        href: '/productos/sheer-elegance',
        num: '02',
        title: 'Sheer Elegance',
        sub: 'Franjas opacas + malla traslúcida',
        desc: 'Sistema de doble función: franjas opacas rectangulares y malla traslúcida. Triple acción: cerrada, semi abierta o totalmente abierta. Disponible con blackout.',
        tag: 'Premium',
        features: ['Triple acción', 'Disponible blackout nocturno', 'Cobro mínimo 1.20 m²', 'Motorizable'],
      },
      {
        href: '/productos/romana',
        num: '03',
        title: 'Romana',
        sub: 'Tradicional · Top Down Premium',
        desc: 'Sistema clásico con módulos plegables de diseño simétrico. Disponible en Romana Tradicional y Romana Top Down con apertura desde arriba hacia abajo.',
        tag: 'Clásico',
        features: ['Módulos plegables', 'Cabezal metálico opcional', 'Top Down (apertura inversa)', 'Cobro mínimo 1.0 m²'],
      },
      {
        href: '/productos/hanas',
        num: '04',
        title: 'Sistema Hanas',
        sub: 'Curvas uniformes en S',
        desc: 'Franjas verticales opacas y traslúcidas con curvas uniformes en forma de S. Crea ambientes con estilo diferente y sofisticado. 100% poliéster, 13 lamas por metro.',
        tag: 'Sofisticado',
        features: ['Colores: Blanco, Beige, Gris', 'Fantasía y Royal', 'Hasta 6.0 m de ancho', 'Manual y motorizado'],
      },
      {
        href: '/productos/vintage',
        num: '05',
        title: 'Sistema Vintage',
        sub: 'Lamas verticales plegables',
        desc: 'Combina el estilo de una persiana vertical con el look y elegancia de una cortina tradicional. Lamas plegables con caída suave y sofisticada.',
        tag: 'Elegante',
        features: ['Hasta 6.0 m de ancho', 'Alto máximo 5.85 m', 'Cenefa PVC', 'Cobro mínimo alto 1.60 m'],
      },
      {
        href: '/productos/verticales',
        num: '06',
        title: 'Persiana Vertical',
        sub: 'Manual · Lamas 9 cm · Riel aluminio',
        desc: 'Lengüetas traslapadas suspendidas en riel de aluminio. Desplazamiento uniforme y equidistante. Versátil, funcional y estética para grandes espacios.',
        tag: 'Hasta 6.0 m',
        features: ['Lamas 9 cm de ancho', 'Riel aluminio blanco', 'Ancho máx. 6.0 m · Alto máx. 3.20 m', 'Combinada irregular disponible'],
      },
      {
        href: '/productos/panel',
        num: '07',
        title: 'Panel & Panel Dúo',
        sub: 'Panel simple y Panel Dúo',
        desc: 'Solución ideal para espacios amplios, puertas ventana o corredizas. Telos con variedad de agrupamiento. Cenefa metálica o en tela según el ambiente.',
        tag: 'Espacios amplios',
        features: ['Panel simple y Panel Dúo', 'Cenefa metálica o en tela', 'Cobro mínimo 1.30 m²', 'Ideal puertas corredizas'],
      },
      {
        href: '/productos/cortina',
        num: '08',
        title: 'Colección Cortina',
        sub: '100% Poliéster · Lanzamiento 2026',
        desc: 'Colección de cortinas de lanzamiento 2026. Modernidad y elegancia para decorar tus ambientes. Composición 100% poliéster capas exteriores. Alto mínimo 2.20 m.',
        tag: 'Nuevo 2026',
        features: ['100% Poliéster', 'Alto mínimo 2.20 m', 'Lanzamiento 2026', 'Instalación profesional'],
      },
      {
        href: '/productos/estampados',
        num: '09',
        title: 'Persianas Estampadas',
        sub: 'Impresión digital · Catálogo Safra 2023',
        desc: 'Más de 400 diseños en 7 categorías: Deportes, Flor, Infantil, Música, Teens, Paisaje y Animales. Impresión HD sobre tela Blackout, Screen o Traslúcida. También con imagen propia.',
        tag: 'Personalizado',
        features: ['+400 diseños licenciados', '7 categorías temáticas', 'Blackout · Screen · Traslúcida', 'Imagen personalizada disponible'],
      },
    ],
  },
  {
    slug: 'motorizacion-y-domotica-de-persianas',
    titulo: 'Smart Shade · Motorización y domótica',
    desc: 'Motores Wi-Fi, app, voz y rieles motorizados para persianas, cortinas y panel.',
    productos: [
      {
        href: '/productos/motorizacion',
        num: '10',
        title: 'Motorización & Domótica',
        sub: 'Wi-Fi · App · Voz',
        desc: 'Motores silenciosos con Wi-Fi integrado. Compatible con todos los sistemas del catálogo. Control por app móvil, voz (Alexa, Google, Siri) o sensores automáticos.',
        tag: 'Smart Home',
        features: ['App iOS & Android', 'Alexa · Google · Siri', 'Sensor luminosidad', 'Riel motor cortina/panel'],
        featured: true,
      },
      {
        href: '/productos/riel-motor',
        num: '11',
        title: 'Riel Motor Cortina y Panel ML',
        sub: 'Motor tubular · RF · Monocanal / Multicanal',
        desc: 'Sistema de riel motorizado para cortinas y Panel Japonés vendido por metro lineal. Incluye motor Safra 50NW/100NW, control y todos los componentes. Compatible con domótica.',
        tag: 'Motorizado · Por ML',
        features: ['Motor Safra 50NW / 100NW', 'Control monocanal o multicanal', 'Cortina y Panel Japonés', 'Compatible domótica'],
      },
    ],
  },
  {
    slug: 'accesorios-de-persianas-y-cortinas',
    titulo: 'Repuestos & Rieles · Accesorios de persianas',
    desc: 'Insumos, rieles armados y repuestos de todos los sistemas de persianas.',
    productos: [
      {
        href: '/productos/accesorios-pel',
        num: '12',
        title: 'Repuestos de persianas · Lista 220',
        sub: '11 líneas · 259 referencias',
        desc: 'Catálogo completo de accesorios e insumos: tubos, cenefas, controles, soportes, rieles, rodachinas, bastones y más para enrollables, panel japonés, romana, vertical, Hanna, Flexiriel y Riel Luxury.',
        tag: '259 referencias',
        features: ['Enrollable · Panel Japonés · Romana', 'Rieles · Macromadera · Vertical', 'Hanna · Flexiriel · Riel Luxury', 'Sheer Elegance'],
      },
      {
        href: '/productos/riel-panel',
        num: '13',
        title: 'Riel Armado Panel ML',
        sub: '4 · 5 · 6 · 7 vías · Aluminio · Por metro lineal',
        desc: 'Riel de aluminio para Panel Japonés suministrado armado y listo para instalar. Disponible en 4, 5, 6 y 7 vías. Incluye patines, topes y cenefa opcional. Vendido por metro lineal.',
        tag: 'Por ML',
        features: ['4 · 5 · 6 · 7 vías', 'Aluminio extruido blanco', 'Patines y topes incluidos', 'Para instaladores y diseñadores'],
      },
      {
        href: '/productos/riel-cortina',
        num: '14',
        title: 'Riel Armado Cortina ML',
        sub: 'Super Riel · Pesado · Luxury · Flexiriel',
        desc: 'Sistema de riel para cortinas tradicionales vendido por metro lineal. Cuatro tipos según el peso de la cortina y nivel de acabado. Disponible sencillo o doble.',
        tag: 'Por ML',
        features: ['Super Riel · Tráfico Pesado', 'Luxury · Flexiriel', 'Sencillo o doble', 'Curvas 90° disponibles'],
      },
    ],
  },
  {
    slug: 'pergolas-metalicas',
    titulo: 'Pérgolas metálicas · Techos para vivir afuera',
    desc: 'Fabricación propia en acero para el clima de Girardot, con su ferretería completa.',
    productos: [
      {
        href: '/productos/pergolas-metalicas',
        num: '15',
        title: 'Sistemas de pérgola metálica',
        sub: 'Clima cálido · Fabricación propia · Girardot',
        desc: 'Catorce sistemas en acero estructural ordenados por el problema que resuelven: terraza, jardín y piscina, vehículos, fachada y piso. Policarbonato bronce u opal, teja o lamas. Anclaje según el piso y prueba de agua antes de entregar.',
        tag: 'Nuevo · propio',
        features: ['Adosada · autoportante · gazebo', 'Carport · cubierta de parqueadero', 'Quiebrasol · celosía · deck', 'Catálogo de 108 accesorios'],
        featured: true,
      },
      {
        href: '/productos/pergolas-metalicas/accesorios',
        num: '16',
        title: 'Ferretería de pérgola metálica',
        sub: '108 referencias · 12 grupos · cada una con foto',
        desc: 'Todo lo que lleva una pérgola metálica, del chazo a la tapa del perfil: perfilería estructural (tubo cuadrado y rectangular, IPE, canal, ángulo), anclajes químicos y expansivos, pernos y tornillería inoxidable, herrajes, policarbonato y teja, canal y bajante, sellado, acabado, eléctrico y confort. Con el kit de referencia para una pérgola de 3 × 4 m.',
        tag: 'Con foto · sin precios',
        features: ['Perfilería: tubo A500, IPE, canal, ángulo', 'Anclaje químico y expansivo', 'Tornillería y pernos inoxidables', 'Kit 3 × 4 m y 9 reglas de fijación'],
      },
    ],
  },
  {
    slug: 'estructuras-metalicas',
    titulo: 'Estructuras metálicas · Acero con cálculo',
    desc: 'Escaleras, mezzanines, cubiertas y ampliaciones con diseño firmado.',
    productos: [
      {
        href: '/estructuras',
        num: '17',
        title: 'Estructuras metálicas',
        sub: 'Escaleras · mezzanines · cubiertas · ampliaciones',
        desc: 'Ocho tipos de obra en acero con diseño firmado por ingeniero: escaleras, mezzanines y altillos, domos y claraboyas, cubiertas comerciales, ampliación de segundo piso, locales y fachadas, pasarelas y naves. Memoria de cálculo, planos de taller y montaje propio.',
        tag: 'Con diseño firmado',
        features: ['Memoria de cálculo NSR-10', 'Fabricación en taller, montaje en obra', 'Soldadores calificados', 'Documentos de entrega'],
      },
    ],
  },
  {
    slug: 'divisiones-de-bano',
    titulo: 'Divisiones de baño · Solo vidrio templado',
    desc: 'Fija, corredera, abatible, plegable, esquinera, frameless, enmarcada y para tina, todo en vidrio templado de seguridad NTC 1578.',
    productos: [
      {
        href: '/productos/divisiones-bano',
        num: '27',
        title: 'Divisiones de baño en vidrio templado',
        sub: '8 sistemas · NTC 1578 · herrajes inoxidables',
        desc: 'Fija walk-in, corredera, abatible, plegable, esquinera, frameless sin marco, enmarcada y mampara para tina. Vidrio templado de seguridad certificado, herrajes en acero inoxidable 304/316 y sellado con silicona neutra antihongos.',
        tag: 'Línea nueva',
        features: ['Vidrio templado NTC 1578', 'De 4 mm enmarcado a 10 mm frameless', 'Herrajes acero inoxidable 304/316', 'Sellado antihongos + prueba de agua'],
        featured: true,
      },
    ],
  },
  {
    slug: 'toldos-y-pergolas-de-lona',
    titulo: 'Toldos · Sombra retráctil',
    desc: 'Sombra retráctil: brazos extensibles, toldo romano corredizo, pérgola de lona (palillería) y sus accesorios.',
    productos: [
      {
        href: '/productos/toldos-brazos',
        num: '18',
        title: 'Toldos de brazos extensibles',
        sub: 'VÉRTICE · OCTOPUS · AQUA RAIN · MYKONOS',
        desc: 'Toldo de pared con brazos articulados que se recoge cuando no hace falta. Vértice hasta 5 m de ancho y 3,5 m de proyección; Octopus hasta 14 m y 4 m; Aqua Rain para lluvia con proyección fija; Mykonos vertical con guaya. Lona acrílica Acrysun, manual o motorizado.',
        tag: 'Garantía lona 5 años',
        features: ['Proyección 1,5 a 4,0 m', 'Lona Acrysun · multilona Brincaflex', 'Motor 50/100 NW con control', 'Inclinación 30–60°'],
      },
      {
        href: '/productos/toldo-romano',
        num: '19',
        title: 'Toldo Romano Corredizo',
        sub: 'Manual · Motorizado · Solar Screen',
        desc: 'Sistema de plegado romano para uso exterior. Tela Solar Screen que reduce la radiación solar directa. Tres niveles de acabado (Premium, Plus, Básico) con estructura de aluminio anodizado. Manual o motorizado.',
        tag: 'Exterior',
        features: ['Tela Solar Screen exterior', 'Premium · Plus · Básico', 'Manual o motorizado', 'Garantía hasta 5 años'],
      },
      {
        href: '/productos/pergolas',
        num: '20',
        title: 'Pérgola de lona (Palillería)',
        sub: 'Paredón · Lobby · Doble Lobby',
        desc: 'Cubierta de lona acrílica retráctil con estructura de aluminio. Tres tipos según la instalación: entre dos muros (Paredón), semi-adosada (Lobby) o autoportante (Doble Lobby). Proyección hasta 7 m.',
        tag: 'Exteriores',
        features: ['Lona acrílica UV · resistente lluvia', 'Motor Safra 50/12 disponible', 'Herraje blanco (negro +15%)', 'Proyección hasta 7 m'],
      },
      {
        href: '/productos/accesorios-toldos',
        num: '21',
        title: 'Repuestos de toldo',
        sub: 'Brazos · Motores · Estructuras · Telas',
        desc: 'Insumos completos para toldos Octopus y Vértice: brazos de lujo en 6 longitudes, casquillos, empalmes, motores 50/100NW, controles remotos, perfiles frontales P-02, tejadillos y telas Acrysun/SUNPRO.',
        tag: '+60 referencias',
        features: ['Brazos Octopus 1.5–4.0m', 'Brazos Vértice 1.5–3.5m', 'Motores 50NW y 100NW', 'Telas Acrysun · SUNPRO · Clear Cristal'],
      },
      {
        href: '/productos/accesorios-pergolas',
        num: '22',
        title: 'Repuestos de pérgola de lona',
        sub: 'Tubos · Guías · Bridas · Poleas · Kits',
        desc: 'Referencias de insumos y accesorios para instalación de pérgolas palillería: tubos estructurales 80×80 y 80×40, guías, palillos dobles, soportes de pared, poleas, bridas con rodamiento y kits de unión.',
        tag: '25 referencias',
        features: ['Tubos y guías aluminio', 'Bridas 90mm / 60mm / 30mm', 'Poleas dobles blanco y negro', 'Kit Unión Derecha 80×80'],
      },
    ],
  },
  {
    slug: 'mobiliario-exterior',
    titulo: 'Mobiliario de exterior · Terraza y piscina',
    desc: 'Muebles para la zona húmeda y la terraza, en el material que aguanta cada sitio.',
    productos: [
      {
        href: '/exteriores/mobiliario',
        num: '26',
        title: 'Mobiliario de exterior',
        sub: 'Mimbre · Ratán sintético · Cordón náutico · Asoleadoras · Madera maciza',
        desc: 'Salas, comedores, poltronas, daybeds, asoleadoras de piscina y mesas de tronco. El mimbre natural va bajo techo; el ratán sintético y la madera maciza aguantan sol y lluvia directa.',
        tag: 'Línea nueva',
        features: ['Mimbre natural bajo techo', 'Ratán sintético HDPE con filtro UV', 'Cordón náutico en rejilla', 'Mesas de madera maciza con base metálica'],
      },
    ],
  },
  {
    slug: 'peliculas-solares',
    titulo: 'Películas solares · Vidrio inteligente',
    desc: 'Control solar y seguridad directamente en el vidrio.',
    productos: [
      {
        href: '/productos/peliculas',
        num: '23',
        title: 'Películas Protección Solar',
        sub: 'Seguridad · UV · Control solar',
        desc: 'Películas de protección solar y seguridad para vidrios. Venta por m² o por rollo (rollos de 1.52 m × 46 m² y 1.82 m × 55 m²).',
        tag: 'Para vidrios',
        features: ['Control solar UV', 'Seguridad en vidrios', 'Rollos 1.52 m y 1.82 m', '3% descuento por rollo'],
      },
    ],
  },
  {
    slug: 'lienzos',
    titulo: 'Lienzos · Arte para la pared',
    desc: 'Arte digital en lienzo para completar el espacio.',
    productos: [
      {
        href: '/productos/lienzo',
        num: '24',
        title: 'Línea Lienzo',
        sub: 'Arte digital · Impresión de alta resolución',
        desc: 'Arte e inspiración en lienzos, estampados con tecnología digital. Espacios de última tendencia. Disponible en 4 formatos: 50×50, 60×90, 80×120 y 100×150 cm.',
        tag: 'Arte & Deco',
        features: ['Impresión digital HD', '4 formatos disponibles', 'Hasta 100×150 cm', 'Tendencia en interiores'],
      },
    ],
  },
  {
    slug: 'papel-de-colgadura',
    titulo: 'Papel de colgadura · Paredes con textura',
    desc: 'Colecciones Safra Living para paredes.',
    productos: [
      {
        href: '/productos/papel',
        num: '25',
        title: 'Papel de Colgadura',
        sub: 'Colección Safra Living',
        desc: 'Diseños y texturas que inspiran desde lo convencional hasta lo más arriesgado, sin perder calidez y elegancia. Ver fichas técnicas por referencia en catálogo.',
        tag: 'Decoración',
        features: ['Colección Safra Living', 'Amplia gama de diseños', 'Texturas variadas', 'Por rollo según referencia'],
      },
    ],
  },
]

export default async function ProductosPage() {
  return (
    <div>
      {/* Cabecera oscura con el fondo vivo y el mapa de líneas */}
      <section className="page-top hero-ia" style={{ paddingBottom: '36px' }}>
        <FondoIA densidad={40} />
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '680px', marginBottom: '28px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Catálogo 2026</span>
            <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Todos nuestros <span className="text-gold-gradient">productos</span>
            </h1>
            <p style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Nueve líneas, cada una con sus accesorios. Toca una para ir directo a ella.
            </p>
          </div>
          <div className="mapa-grid">
            {grupos.map((g) => (
              <a key={g.slug} href={`#${g.slug}`} className="mapa-tile">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={mapa[g.slug] || '/hero_banner.png'} alt="" loading="lazy" />
                <span className="mapa-shade" />
                <span className="mapa-body">
                  <b>{g.titulo.split(' · ')[0]}</b>
                  <i style={{ fontStyle: 'normal', fontSize: '12px', color: 'rgba(243,239,230,0.8)' }}>{g.titulo.split(' · ')[1] || ''}</i>
                  <small>{g.productos.length} {g.productos.length === 1 ? 'página' : 'páginas'}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="container-site" style={{ paddingTop: '48px', paddingBottom: '72px' }}>

        {/* Grupos de productos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {grupos.map((grupo) => (
            <div key={grupo.titulo} id={grupo.slug} style={{ scrollMarginTop: '100px' }}>
              {/* Encabezado de grupo */}
              <div style={{ marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid var(--border)' }}>
                <h2 style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--text)', marginBottom: '3px' }}>{grupo.titulo}</h2>
                <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>{grupo.desc}</p>
              </div>

              {/* Filas de productos */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {grupo.productos.map((cat, i) => (
                  <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none' }}>
                    <div className="card-glass grid-cols-products" style={{
                      padding: '28px 32px',
                      borderColor: cat.featured ? 'rgba(201,169,110,0.3)' : undefined,
                      cursor: 'pointer',
                      borderRadius: i === 0 ? '16px 16px 6px 6px' : i === grupo.productos.length - 1 ? '6px 6px 16px 16px' : '6px',
                      background: cat.featured ? 'rgba(184,145,42,0.04)' : undefined,
                    }}>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-3)', fontVariantNumeric: 'tabular-nums' }}>
                        {cat.num}
                      </span>
                      <div>
                        <p style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.08em', marginBottom: '4px' }}>{cat.sub}</p>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.15, marginBottom: '7px' }}>{cat.title}</h3>
                        <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.6 }}>{cat.desc}</p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {cat.features.map((f) => (
                          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                            <span style={{ fontSize: '15px', color: 'var(--text-3)' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
                        <span className="tag" style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>{cat.tag}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--gold)', fontSize: '15px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                          Ver detalle <ArrowRight size={13} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid-cols-cta" style={{ marginTop: '48px', background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿No sabes qué sistema necesitas?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Visitamos tu espacio sin costo y te asesoramos personalmente.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar asesoría gratuita <ArrowRight size={14} />
          </Link>
        </div>

      </div>
      <style>{`
        .mapa-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .mapa-tile { position: relative; display: block; height: 150px; border-radius: 16px; overflow: hidden; text-decoration: none; background: #1a1612; border: 1px solid rgba(232,199,106,0.18); transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; isolation: isolate; }
        .mapa-tile img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.75; transition: transform .5s ease, opacity .3s ease; }
        .mapa-shade { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,8,6,0.9) 10%, rgba(10,8,6,0.2) 70%); }
        .mapa-body { position: absolute; left: 14px; right: 14px; bottom: 12px; color: #fff; display: flex; flex-direction: column; gap: 2px; }
        .mapa-body b { font-size: 16px; font-weight: 700; letter-spacing: -0.01em; line-height: 1.15; }
        .mapa-body small { font-size: 11px; color: #E8C76A; letter-spacing: .08em; text-transform: uppercase; }
        .mapa-tile:hover { transform: translateY(-2px); border-color: rgba(232,199,106,0.6); box-shadow: 0 0 28px rgba(232,199,106,0.18); }
        .mapa-tile:hover img { transform: scale(1.05); opacity: 0.9; }
        @media (max-width: 900px) { .mapa-grid { grid-template-columns: repeat(2, 1fr); } .mapa-tile { height: 120px; } }
        @media (max-width: 480px) { .mapa-grid { grid-template-columns: 1fr 1fr; gap: 8px; } .mapa-tile { height: 104px; } .mapa-body b { font-size: 14px; } }
      `}</style>
    </div>
  )
}
