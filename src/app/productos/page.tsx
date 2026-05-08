import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const grupos = [
  {
    titulo: 'Sistemas de Control Solar',
    desc: 'Enrollables, persianas y franjas para regular la luz con precisión.',
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
    ],
  },
  {
    titulo: 'Sistemas de Franjas Verticales',
    desc: 'Diseño contemporáneo con lamas verticales para ambientes sofisticados.',
    productos: [
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
    ],
  },
  {
    titulo: 'Panel & Cortina',
    desc: 'Para ventanales amplios y decoración de interiores de alta gama.',
    productos: [
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
        href: '/productos/riel-panel',
        num: '09',
        title: 'Riel Armado Panel ML',
        sub: '4 · 5 · 6 · 7 vías · Aluminio · Por metro lineal',
        desc: 'Riel de aluminio para Panel Japonés suministrado armado y listo para instalar. Disponible en 4, 5, 6 y 7 vías. Incluye patines, topes y cenefa opcional. Vendido por metro lineal.',
        tag: 'Por ML',
        features: ['4 · 5 · 6 · 7 vías', 'Aluminio extruido blanco', 'Patines y topes incluidos', 'Para instaladores y diseñadores'],
      },
      {
        href: '/productos/riel-cortina',
        num: '10',
        title: 'Riel Armado Cortina ML',
        sub: 'Super Riel · Pesado · Luxury · Flexiriel',
        desc: 'Sistema de riel para cortinas tradicionales vendido por metro lineal. Cuatro tipos según el peso de la cortina y nivel de acabado. Disponible sencillo o doble.',
        tag: 'Por ML',
        features: ['Super Riel · Tráfico Pesado', 'Luxury · Flexiriel', 'Sencillo o doble', 'Curvas 90° disponibles'],
      },
    ],
  },
  {
    titulo: 'Pérgolas & Exteriores',
    desc: 'Cubiertas retráctiles de lona acrílica para terrazas, patios y jardines.',
    productos: [
      {
        href: '/productos/pergolas',
        num: '13',
        title: 'Pérgolas Palillería',
        sub: 'Paredón · Lobby · Doble Lobby',
        desc: 'Cubierta de lona acrílica retráctil con estructura de aluminio. Tres tipos según la instalación: entre dos muros (Paredón), semi-adosada (Lobby) o autoportante (Doble Lobby). Proyección hasta 7 m.',
        tag: 'Exteriores',
        features: ['Lona acrílica UV · resistente lluvia', 'Motor Safra 50/12 disponible', 'Herraje blanco (negro +15%)', 'Proyección hasta 7 m'],
      },
      {
        href: '/productos/toldo-romano',
        num: '13b',
        title: 'Toldo Romano Corredizo',
        sub: 'Manual · Motorizado · Solar Screen',
        desc: 'Sistema de plegado romano para uso exterior. Tela Solar Screen que reduce la radiación solar directa. Tres niveles de acabado (Premium, Plus, Básico) con estructura de aluminio anodizado. Manual o motorizado.',
        tag: 'Exterior',
        features: ['Tela Solar Screen exterior', 'Premium · Plus · Básico', 'Manual o motorizado', 'Garantía hasta 5 años'],
      },
      {
        href: '/productos/accesorios-pergolas',
        num: '13c',
        title: 'Accesorios Pérgolas',
        sub: 'Tubos · Guías · Bridas · Poleas · Kits',
        desc: 'Referencias de insumos y accesorios para instalación de pérgolas palillería: tubos estructurales 80×80 y 80×40, guías, palillos dobles, soportes de pared, poleas, bridas con rodamiento y kits de unión.',
        tag: '25 referencias',
        features: ['Tubos y guías aluminio', 'Bridas 90mm / 60mm / 30mm', 'Poleas dobles blanco y negro', 'Kit Unión Derecha 80×80'],
      },
      {
        href: '/productos/accesorios-toldos',
        num: '13d',
        title: 'Accesorios Toldos',
        sub: 'Brazos · Motores · Estructuras · Telas',
        desc: 'Insumos completos para toldos Octopus y Vértice: brazos de lujo en 6 longitudes, casquillos, empalmes, motores 50/100NW, controles remotos, perfiles frontales P-02, tejadillos y telas Acrysun/SUNPRO.',
        tag: '+60 referencias',
        features: ['Brazos Octopus 1.5–4.0m', 'Brazos Vértice 1.5–3.5m', 'Motores 50NW y 100NW', 'Telas Acrysun · SUNPRO · Clear Cristal'],
      },
    ],
  },
  {
    titulo: 'Accesorios & Insumos',
    desc: 'Referencias técnicas de accesorios para todos los sistemas de persianas y cortinas.',
    productos: [
      {
        href: '/productos/accesorios-pel',
        num: '15',
        title: 'Accesorios Persianas — Lista 220',
        sub: '11 líneas · 259 referencias',
        desc: 'Catálogo completo de accesorios e insumos: tubos, cenefas, controles, soportes, rieles, rodachinas, bastones y más para enrollables, panel japonés, romana, vertical, Hanna, Flexiriel y Riel Luxury.',
        tag: '259 referencias',
        features: ['Enrollable · Panel Japonés · Romana', 'Rieles · Macromadera · Vertical', 'Hanna · Flexiriel · Riel Luxury', 'Sheer Elegance'],
      },
    ],
  },
  {
    titulo: 'Impresión Digital',
    desc: 'Diseños personalizados sobre cualquier persiana enrollable.',
    productos: [
      {
        href: '/productos/estampados',
        num: '14',
        title: 'Persianas Estampadas',
        sub: 'Impresión digital · Catálogo Safra 2023',
        desc: 'Más de 400 diseños en 7 categorías: Deportes, Flor, Infantil, Música, Teens, Paisaje y Animales. Impresión HD sobre tela Blackout, Screen o Traslúcida. También con imagen propia.',
        tag: 'Personalizado',
        features: ['+400 diseños licenciados', '7 categorías temáticas', 'Blackout · Screen · Traslúcida', 'Imagen personalizada disponible'],
      },
    ],
  },
  {
    titulo: 'Smart Home & Complementos',
    desc: 'Tecnología y acabados para completar cada instalación.',
    productos: [
      {
        href: '/productos/motorizacion',
        num: '09',
        title: 'Motorización & Domótica',
        sub: 'Wi-Fi · App · Voz',
        desc: 'Motores silenciosos con Wi-Fi integrado. Compatible con todos los sistemas del catálogo. Control por app móvil, voz (Alexa, Google, Siri) o sensores automáticos.',
        tag: 'Smart Home',
        features: ['App iOS & Android', 'Alexa · Google · Siri', 'Sensor luminosidad', 'Riel motor cortina/panel'],
        featured: true,
      },
      {
        href: '/productos/riel-motor',
        num: '10',
        title: 'Riel Motor Cortina y Panel ML',
        sub: 'Motor tubular · RF · Monocanal / Multicanal',
        desc: 'Sistema de riel motorizado para cortinas y Panel Japonés vendido por metro lineal. Incluye motor Safra 50NW/100NW, control y todos los componentes. Compatible con domótica.',
        tag: 'Motorizado · Por ML',
        features: ['Motor Safra 50NW / 100NW', 'Control monocanal o multicanal', 'Cortina y Panel Japonés', 'Compatible domótica'],
      },
      {
        href: '/productos/peliculas',
        num: '11',
        title: 'Películas Protección Solar',
        sub: 'Seguridad · UV · Control solar',
        desc: 'Películas de protección solar y seguridad para vidrios. Venta por m² o por rollo (rollos de 1.52 m × 46 m² y 1.82 m × 55 m²).',
        tag: 'Para vidrios',
        features: ['Control solar UV', 'Seguridad en vidrios', 'Rollos 1.52 m y 1.82 m', '3% descuento por rollo'],
      },
      {
        href: '/productos/papel',
        num: '12',
        title: 'Papel de Colgadura',
        sub: 'Colección Safra Living',
        desc: 'Diseños y texturas que inspiran desde lo convencional hasta lo más arriesgado, sin perder calidez y elegancia. Ver fichas técnicas por referencia en catálogo.',
        tag: 'Decoración',
        features: ['Colección Safra Living', 'Amplia gama de diseños', 'Texturas variadas', 'Por rollo según referencia'],
      },
      {
        href: '/productos/lienzo',
        num: '13',
        title: 'Línea Lienzo',
        sub: 'Arte digital · Impresión de alta resolución',
        desc: 'Arte e inspiración en lienzos, estampados con tecnología digital. Espacios de última tendencia. Disponible en 4 formatos: 50×50, 60×90, 80×120 y 100×150 cm.',
        tag: 'Arte & Deco',
        features: ['Impresión digital HD', '4 formatos disponibles', 'Hasta 100×150 cm', 'Tendencia en interiores'],
      },
    ],
  },
]

export default function ProductosPage() {
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Header */}
        <div style={{ marginBottom: '48px', maxWidth: '640px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Catálogo 2026</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '14px' }}>
            Todos nuestros <span className="text-gold-gradient">productos</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            15 líneas de sistemas de control solar, cortinas, pérgolas, estampados y acabados del catálogo Safra 2026. Instalación profesional en toda la zona.
          </p>
        </div>

        {/* Banner catálogo */}
        <div style={{ position: 'relative', marginBottom: '48px', borderRadius: '16px', overflow: 'hidden', height: '160px', border: '1px solid rgba(201,169,110,0.2)', background: 'linear-gradient(135deg, #0D1525 0%, #080E1A 60%, #0A1220 100%)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div style={{ position: 'absolute', right: '-40px', top: '-20px', width: '300px', opacity: 0.10 }}>
            <svg viewBox="0 0 340 200" fill="none"><rect x="20" y="10" width="300" height="175" rx="3" stroke="rgba(201,169,110,1)" strokeWidth="1.5"/>{Array.from({length:10},(_,i)=><rect key={i} x="22" y={18+i*14} width="296" height={i%2===0?8:4} rx="1" fill={`rgba(201,169,110,${i%2===0?0.3:0.1})`}/>)}</svg>
          </div>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 48px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px', fontWeight: 600 }}>Catálogo oficial 2026 · SAFRA</p>
            <p style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', fontWeight: 300, color: '#EEF2FF', lineHeight: 1.2 }}>
              14 líneas de producto — <strong style={{ color: 'var(--gold-light)' }}>sistemas certificados</strong> para cada espacio
            </p>
          </div>
        </div>

        {/* Grupos de productos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {grupos.map((grupo) => (
            <div key={grupo.titulo}>
              {/* Encabezado de grupo */}
              <div style={{ marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid var(--border)' }}>
                <h2 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>{grupo.titulo}</h2>
                <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>{grupo.desc}</p>
              </div>

              {/* Filas de productos */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {grupo.productos.map((cat, i) => (
                  <Link key={cat.href} href={cat.href} style={{ textDecoration: 'none' }}>
                    <div className="card-glass" style={{
                      padding: '28px 32px',
                      display: 'grid',
                      gridTemplateColumns: '44px 1fr 1fr auto',
                      gap: '28px',
                      alignItems: 'center',
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

        {/* CTA */}
        <div style={{ marginTop: '48px', background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿No sabes qué sistema necesitas?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Visitamos tu espacio sin costo y te asesoramos personalmente.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar asesoría gratuita <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
