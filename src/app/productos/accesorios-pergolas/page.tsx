import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const grupos = [
  {
    titulo: 'Tubos y Guías Estructurales',
    desc: 'Perfiles de aluminio para la estructura principal de las pérgolas.',
    items: [
      { img: '/accesorios-pergolas/tubo-80x80-blanco.png',      name: 'P.Tubo Estructural 80×80 Blanco',        unidad: 'ML', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/tubo-80x40-blanco.png',      name: 'Tubo Estructural 80×40 Blanco',          unidad: 'ML', variantes: ['Blanco', 'Negro'] },
      { img: '/accesorios-pergolas/tubo-80x40-negro.jpeg',      name: 'Tubo Estructural 80×40 Negro',           unidad: 'ML', variantes: ['Negro'] },
      { img: '/accesorios-pergolas/guia-80x40-blanco.png',      name: 'Guía 80×40 Blanco',                      unidad: 'ML', variantes: ['Blanco', 'Negro'] },
      { img: '/accesorios-pergolas/guia-80x40-negro.jpeg',      name: 'Guía 80×40 Negro (RAL 9011)',             unidad: 'ML', variantes: ['Negro'] },
    ],
  },
  {
    titulo: 'Palillos y Soportes',
    desc: 'Palillos dobles y soportes de pared para el sistema de pérgola.',
    items: [
      { img: '/accesorios-pergolas/palillo-doble-negro.jpeg',   name: 'Palillo Doble Negro (RAL 9011)',          unidad: 'ML', variantes: ['Negro'] },
      { img: '/accesorios-pergolas/palillo-doble-blanco.png',   name: 'Palillo Doble Blanco',                   unidad: 'ML', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/soporte-pared-blanco.png',   name: 'Soporte Pared Aluminio Blanco 80×40',    unidad: 'UND', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/soporte-pared-negro.jpeg',   name: 'Soporte Pared Aluminio Negro 80×40',     unidad: 'UND', variantes: ['Negro'] },
      { img: '/accesorios-pergolas/tapa-palillo-doble.png',     name: 'Tapa Palillo Doble Blanco',              unidad: 'UND', variantes: ['Blanco'] },
    ],
  },
  {
    titulo: 'Poleas y Bridas con Rodamiento',
    desc: 'Sistema de poleas y bridas para guiar y tensar la lona de la pérgola.',
    items: [
      { img: '/accesorios-pergolas/polea-doble-blanca.png',     name: 'Polea Doble Blanca SFR',                 unidad: 'UND', variantes: ['Blanca'] },
      { img: '/accesorios-pergolas/polea-doble-negra.jpeg',     name: 'Polea Doble Negra',                      unidad: 'UND', variantes: ['Negra'] },
      { img: '/accesorios-pergolas/brida-90mm-blanco.png',      name: 'Brida c/Rodamiento 90mm Blanco',         unidad: 'UND', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/brida-90mm-negro.png',       name: 'Brida c/Rodamiento 90mm Negro',          unidad: 'UND', variantes: ['Negro'] },
      { img: '/accesorios-pergolas/brida-60mm-blanco.png',      name: 'Brida c/Rodamiento 60mm Blanco',         unidad: 'UND', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/brida-60mm-negro.png',       name: 'Brida c/Rodamiento 60mm Negro',          unidad: 'UND', variantes: ['Negro'] },
      { img: '/accesorios-pergolas/brida-movil-30mm-blanco.png',name: 'Brida Móvil Rodamientos Blanco 30mm',    unidad: 'UND', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/brida-movil-30mm-negro.png', name: 'Brida Móvil Rodamientos Negro 30mm',     unidad: 'UND', variantes: ['Negro'] },
    ],
  },
  {
    titulo: 'Tensores, Cuerdas y Fijaciones',
    desc: 'Componentes para fijar y tensar el sistema de cables de la pérgola.',
    items: [
      { img: '/accesorios-pergolas/brida-pisacuerda-blanco.png',name: 'Brida con Pisacuerda Blanco',             unidad: 'UND', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/cogida-cuerda-blanco.png',   name: 'Cogida Cuerda Toldo Blanco',             unidad: 'UND', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/soporte-suelo-8t.png',       name: 'Soporte Suelo 8T 80×80 Blanco',          unidad: 'UND', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/brida-fija-blanco.png',      name: 'Brida Fija Perfil Blanco',               unidad: 'UND', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/brida-fija-negro.png',       name: 'Brida Fija Perfil Negro',                unidad: 'UND', variantes: ['Negro'] },
      { img: '/accesorios-pergolas/tapon-tornillo.png',         name: 'Tapón Tornillo 4.8×19 Blanco',           unidad: 'UND', variantes: ['Blanco'] },
      { img: '/accesorios-pergolas/kit-union-derecha.jpeg',     name: 'Kit Unión Derecha 80×80 Blanco',         unidad: 'PAR', variantes: ['Blanco'] },
    ],
  },
]

const totalItems = grupos.reduce((acc, g) => acc + g.items.length, 0)

export default async function AccesoriosPergolasPage() {
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontSize: '13px', color: 'var(--text-3)' }}>
          <Link href="/productos" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Productos</Link>
          <span>/</span>
          <Link href="/productos/pergolas" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Pérgolas Palillería</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-2)' }}>Accesorios e Insumos</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px', maxWidth: '640px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Catálogo SAFRA</span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '14px' }}>
            Accesorios e Insumos para <span className="text-gold-gradient">Pérgolas</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            {totalItems} referencias de tubos estructurales, guías, poleas, bridas y kits de instalación para sistemas de pérgola palillería.
            Disponibles en versión blanco y negro (RAL 9011).
          </p>
        </div>

        {/* Grupos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {grupos.map((grupo) => (
            <div key={grupo.titulo}>
              <div style={{ marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
                <h2 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>
                  {grupo.titulo}
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>{grupo.desc}</p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '12px',
              }}>
                {grupo.items.map((item) => (
                  <div key={item.name} className="card-glass accesorio-card" style={{
                    padding: '20px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '14px',
                    borderRadius: '12px',
                  }}>
                    {/* Image */}
                    <a
                      href={item.img}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Clic para ampliar"
                      style={{
                        width: '100%',
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.02)',
                        borderRadius: '8px',
                        padding: '8px',
                        textDecoration: 'none',
                        cursor: 'zoom-in',
                      }}
                      className="img-zoom-wrap"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="acc-img"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '84px',
                          objectFit: 'contain',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </a>

                    {/* Info */}
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3, marginBottom: '6px' }}>
                        {item.name}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: '11px', padding: '3px 8px', borderRadius: '20px',
                          background: 'rgba(184,145,42,0.1)', color: 'var(--gold-dark)', fontWeight: 600,
                        }}>
                          {item.unidad}
                        </span>
                        {item.variantes.map((v) => (
                          <span key={v} style={{
                            fontSize: '10px', padding: '2px 7px', borderRadius: '20px',
                            background: v === 'Negro' ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.8)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            color: 'var(--text-3)',
                          }}>
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nota */}
        <div style={{
          marginTop: '48px', padding: '20px 24px', borderRadius: '12px',
          background: 'rgba(184,145,42,0.05)', border: '1px solid rgba(184,145,42,0.15)',
        }}>
          <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)' }}>Instalación profesional incluida.</strong>{' '}
            Todos los accesorios e insumos listados se suministran con la instalación de tu pérgola.
            Si necesitas repuestos o instalaciones adicionales, consúltanos directamente.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/productos/pergolas" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '14px', color: 'var(--text-2)', textDecoration: 'none',
          }}>
            <ArrowLeft size={14} /> Ver Pérgolas Palillería
          </Link>
          <Link href="/cotizar" className="btn-primary" style={{ padding: '11px 22px', fontSize: '14px' }}>
            Cotizar pérgola completa <ArrowRight size={14} />
          </Link>
        </div>

      </div>

      <style>{`
        .accesorio-card { transition: transform 0.18s ease, box-shadow 0.18s ease; cursor: default; }
        .accesorio-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
        .img-zoom-wrap:hover { background: rgba(0,0,0,0.05) !important; }
        .img-zoom-wrap:hover .acc-img { transform: scale(1.08); }
      `}</style>
    </div>
  )
}
