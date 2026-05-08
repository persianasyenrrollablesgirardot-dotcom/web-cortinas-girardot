import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const grupos = [
  {
    titulo: 'Tubos, Perfiles y Barras Estructurales',
    desc: 'Perfiles de aluminio y tubos de carga para la estructura del toldo.',
    items: [
      { img: '/accesorios-toldos/barra-cuadrada-40x40.png',        name: 'Barra Cuadrada 40×40',                  unidad: 'UND (6m)' },
      { img: '/accesorios-toldos/perfil-sheer-elegance.png',        name: 'Perfil Sheer Elegance Deluxe',          unidad: 'ML (5.80m)' },
      { img: '/accesorios-toldos/tapa-perfil-sheer.png',            name: 'Tapa Perfil Sheer Elegance Deluxe',     unidad: 'PAR' },
      { img: '/accesorios-toldos/perfil-frontal-p02-580.png',       name: 'Perfil Frontal P-02 (5.80 ml)',         unidad: 'UND' },
      { img: '/accesorios-toldos/perfil-frontal-p02-5m.png',        name: 'Perfil Frontal P-02 (5 ml)',            unidad: 'UND' },
      { img: '/accesorios-toldos/tapas-perfil-p02.png',             name: 'Tapas Perfil P-02',                     unidad: 'PAR' },
      { img: '/accesorios-toldos/tubo-galvanizado-70mm-5m.jpeg',    name: 'Tubo Galvanizado 70mm (5m)',            unidad: 'UND' },
      { img: '/accesorios-toldos/tubo-galvanizado-70mm-6m.jpeg',    name: 'Tubo Galvanizado 70mm (6m)',            unidad: 'UND' },
      { img: '/accesorios-toldos/tubo-galvanizado-80mm-5m.jpeg',    name: 'Tubo Galvanizado 80mm (5m)',            unidad: 'UND' },
      { img: '/accesorios-toldos/tubo-galvanizado-80mm-580.jpeg',   name: 'Tubo Galvanizado 80mm (5.80m)',         unidad: 'UND' },
      { img: '/accesorios-toldos/empalme-barra-cuadrada.png',       name: 'Empalme Barra Cuadrada GL 0.50cm',     unidad: 'UND' },
      { img: '/accesorios-toldos/empalme-perfil-frontal-p02.jpeg',  name: 'Empalme Perfil Frontal P-02 GL',        unidad: 'UND' },
      { img: '/accesorios-toldos/empalme-tuberia.jpeg',              name: 'Empalme Tubería 70 / 80',              unidad: 'UND' },
    ],
  },
  {
    titulo: 'Sistema Mykonos',
    desc: 'Kit y accesorios para toldo vertical Mykonos con guía de cable de acero.',
    items: [
      { img: '/accesorios-toldos/kit-mykonos-vertical.jpeg',        name: 'Kit Mykonos Vertical',                  unidad: 'KIT' },
      { img: '/accesorios-toldos/kit-mykonos-componentes.png',      name: 'Kit Mykonos — Componentes',             unidad: 'KIT' },
      { img: '/accesorios-toldos/soporte-seguridad-mykonos.png',    name: 'Soporte de Seguridad Mykonos',          unidad: 'PAR' },
      { img: '/accesorios-toldos/soporte-union-central-mykonos.jpeg',name: 'Soporte Unión Central Mykonos',        unidad: 'KIT' },
      { img: '/accesorios-toldos/cable-acero-aisi316.png',          name: 'Cable Acero Inoxidable AISI316 3mm',    unidad: 'ML' },
      { img: '/accesorios-toldos/terminales-cable-acero.png',       name: 'Terminales Cable Acero + Tuercas',      unidad: 'KIT' },
      { img: '/accesorios-toldos/canutillo-blanco.png',             name: 'Canutillo Blanco 5.5 mm',               unidad: 'ML' },
    ],
  },
  {
    titulo: 'Brazos de Lujo',
    desc: 'Brazos extensibles para toldos Octopus y Vértice en diferentes longitudes.',
    items: [
      { img: '/accesorios-toldos/brazos-octopus-1-5m.jpeg',         name: 'Brazos Lujo Octopus 1.5m',             unidad: 'PAR' },
      { img: '/accesorios-toldos/brazos-octopus-2-0m.jpeg',         name: 'Brazos Lujo Octopus 2.0m',             unidad: 'PAR' },
      { img: '/accesorios-toldos/brazos-octopus-2-5m.jpeg',         name: 'Brazos Lujo Octopus 2.5m',             unidad: 'PAR' },
      { img: '/accesorios-toldos/brazos-octopus-3-0m.jpeg',         name: 'Brazos Lujo Octopus 3.0m',             unidad: 'PAR' },
      { img: '/accesorios-toldos/brazos-octopus-3-5m.jpeg',         name: 'Brazos Lujo Octopus 3.5m',             unidad: 'PAR' },
      { img: '/accesorios-toldos/brazos-octopus-4-0m.jpeg',         name: 'Brazos Lujo Octopus 4.0m',             unidad: 'PAR' },
      { img: '/accesorios-toldos/brazos-vertice-1-5m.png',          name: 'Brazos Lujo Vértice 1.5m',             unidad: 'PAR' },
      { img: '/accesorios-toldos/brazos-vertice-2-0m.png',          name: 'Brazos Lujo Vértice 2.0m',             unidad: 'PAR' },
      { img: '/accesorios-toldos/brazos-vertice-2-5m.png',          name: 'Brazos Lujo Vértice 2.5m – 3.5m',      unidad: 'PAR' },
    ],
  },
  {
    titulo: 'Casquillos y Empalmes de Eje',
    desc: 'Casquillos espiga y empalmes para tubos de 70mm y 80mm.',
    items: [
      { img: '/accesorios-toldos/casquillo-espiga-cuadrada-70mm.png',name: 'Casquillo Espiga Cuadrada 70mm GL',   unidad: 'UND' },
      { img: '/accesorios-toldos/casquillo-espiga-redonda-70mm.png', name: 'Casquillo Espiga Redonda 70mm GL',    unidad: 'UND' },
      { img: '/accesorios-toldos/casquillo-espiga-cuadrado-80mm.png',name: 'Casquillo Espiga Cuadrado 80mm GL',  unidad: 'UND' },
      { img: '/accesorios-toldos/casquillo-espiga-redonda-80mm.png', name: 'Casquillo Espiga Redonda 80mm GL',   unidad: 'UND' },
      { img: '/accesorios-toldos/corona-70mm.jpeg',                  name: 'Corona Tubo 70mm',                   unidad: 'UND' },
      { img: '/accesorios-toldos/adaptador-70mm.png',                name: 'Adaptador Tubo 70mm',                unidad: 'UND' },
      { img: '/accesorios-toldos/corona-80mm.jpeg',                  name: 'Corona Tubo 80mm',                   unidad: 'UND' },
      { img: '/accesorios-toldos/adaptador-80mm.png',                name: 'Adaptador Tubo 80mm',                unidad: 'UND' },
    ],
  },
  {
    titulo: 'Manivelas y Máquinas',
    desc: 'Accionamientos manuales para apertura y cierre del toldo.',
    items: [
      { img: '/accesorios-toldos/manivelas.png',                    name: 'Manivela 1.5 / 1.8 / 2.0 GL',         unidad: 'UND' },
      { img: '/accesorios-toldos/maquina-111-mango.png',            name: 'Máquina 1.11 con Mango Metal',         unidad: 'UND' },
      { img: '/accesorios-toldos/maquina-111-recubrimiento.png',    name: 'Máquina 1.11 con Recubrimiento',       unidad: 'UND' },
      { img: '/accesorios-toldos/maquina-116.png',                  name: 'Máquina 1.16 con Recubrimiento',       unidad: 'UND' },
    ],
  },
  {
    titulo: 'Soportes',
    desc: 'Soportes de pared, techo y lira para montaje de toldos Octopus.',
    items: [
      { img: '/accesorios-toldos/soporte-pared-octopus.png',        name: 'Soporte a Pared Octopus',              unidad: 'UND' },
      { img: '/accesorios-toldos/soporte-techo-pared-octopus.png',  name: 'Soporte Techo/Pared Octopus GL',       unidad: 'UND' },
      { img: '/accesorios-toldos/soporte-lira-octopus.png',         name: 'Soporte Lira Octopus',                 unidad: 'UND' },
      { img: '/accesorios-toldos/set-tapa-soporte-eje-barra.png',   name: 'Set Tapa Soporte Eje Barra GL',        unidad: 'PAR' },
      { img: '/accesorios-toldos/set-soportes-eje-barra.png',       name: 'Set Soportes Eje Barra GL',            unidad: 'PAR' },
      { img: '/accesorios-toldos/soporte-manivela-motor.png',       name: 'Soporte Manivela Motor Asistido',      unidad: 'UND' },
      { img: '/accesorios-toldos/soporte-cabeza-motor.jpeg',        name: 'Soporte Cabeza Motor 50 / 100',        unidad: 'UND' },
      { img: '/accesorios-toldos/apoyos-telescopicos.png',          name: 'Apoyos Telescópicos 2.80',             unidad: 'PAR' },
    ],
  },
  {
    titulo: 'Motores y Controles',
    desc: 'Motorización eléctrica y controles remotos para toldos.',
    items: [
      { img: '/accesorios-toldos/motor-50nw.png',                   name: 'Motor 50NW',                           unidad: 'UND' },
      { img: '/accesorios-toldos/motor-100nw.png',                  name: 'Motor 100NW',                          unidad: 'UND' },
      { img: '/accesorios-toldos/control-multicanal-16.png',        name: 'Control Multicanal 16 Canales',         unidad: 'UND' },
      { img: '/accesorios-toldos/control-multicanal-5-6.png',       name: 'Control Multicanal 5 y 6 Canales',     unidad: 'UND' },
      { img: '/accesorios-toldos/control-monocanal.png',            name: 'Control Monocanal Estándar',            unidad: 'UND' },
    ],
  },
  {
    titulo: 'Tejadillo, Faldillas y Acabados',
    desc: 'Accesorios de terminación para la caída frontal del toldo.',
    items: [
      { img: '/accesorios-toldos/tejadillo.png',                    name: 'Tejadillo 2.44',                       unidad: 'ML' },
      { img: '/accesorios-toldos/faldilla.jpeg',                    name: 'Faldilla 25-40cm Perfil Estándar',     unidad: 'ML' },
      { img: '/accesorios-toldos/faldilla.jpeg',                    name: 'Faldilla 25-40cm Perfil Deluxe',       unidad: 'ML' },
    ],
  },
  {
    titulo: 'Telas y Lonas',
    desc: 'Telas de alta calidad para confección de toldos y pérgolas.',
    items: [
      { img: '/accesorios-toldos/clear-cristal.png',                name: 'Clear Cristal Comercial Renolit CAL.20 (1.40m)', unidad: 'ML / MT²' },
    ],
  },
]

const totalItems = grupos.reduce((acc, g) => acc + g.items.length, 0)

export default async function AccesoriosToldosPage() {
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontSize: '13px', color: 'var(--text-3)' }}>
          <Link href="/productos" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Productos</Link>
          <span>/</span>
          <Link href="/productos/pergolas" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Pérgolas</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-2)' }}>Accesorios Toldos</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px', maxWidth: '640px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Catálogo SAFRA</span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '14px' }}>
            Accesorios e Insumos para <span className="text-gold-gradient">Toldos</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            Más de {totalItems} referencias de perfiles estructurales, brazos, casquillos, motores, controles y telas del catálogo oficial SAFRA.
            Instalación profesional en toda la zona.
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
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                gap: '10px',
              }}>
                {grupo.items.map((item, idx) => (
                  <div key={`${item.name}-${idx}`} className="card-glass accesorio-card" style={{
                    padding: '16px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    borderRadius: '10px',
                  }}>
                    {/* Image */}
                    <a
                      href={item.img}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Clic para ampliar"
                      style={{
                        width: '100%',
                        height: '90px',
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
                          maxHeight: '74px',
                          objectFit: 'contain',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </a>

                    {/* Info */}
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3, marginBottom: '6px' }}>
                        {item.name}
                      </p>
                      <span style={{
                        fontSize: '10px', padding: '2px 8px', borderRadius: '20px',
                        background: 'rgba(184,145,42,0.1)', color: 'var(--gold-dark)', fontWeight: 600,
                      }}>
                        {item.unidad}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Kits de motor */}
        <div style={{ marginTop: '48px', borderRadius: '16px', border: '1px solid rgba(184,145,42,0.2)', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', background: 'rgba(184,145,42,0.05)', borderBottom: '1px solid rgba(184,145,42,0.12)' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2px' }}>
              Kits de Motor Asistido y No Asistido
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Incluyen motor, manivela y control según configuración</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0' }}>
            {[
              { name: 'Motor 50NW Asistido', desc: 'Incluye Manivela y Control Monocanal' },
              { name: 'Motor 100NW Asistido', desc: 'Incluye Manivela y Control Monocanal' },
              { name: 'Motor 50NW No Asistido', desc: 'Sin Manivela ni Soporte Manivela' },
              { name: 'Motor 100NW No Asistido', desc: 'Sin Manivela ni Soporte Manivela' },
            ].map((kit, i) => (
              <div key={kit.name} style={{
                padding: '16px 20px',
                borderRight: (i % 2 === 0) ? '1px solid var(--border)' : 'none',
                borderBottom: (i < 2) ? '1px solid var(--border)' : 'none',
              }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>{kit.name}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-3)' }}>{kit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Telas section */}
        <div style={{ marginTop: '32px', padding: '20px 24px', borderRadius: '12px', background: 'rgba(0,0,0,0.02)', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>
            Telas Disponibles
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
            {[
              'Lona Acrysun (ancho 1.20m)',
              'Lona Acrysun Confeccionada',
              'Lona Confeccionada Screen',
              'SUNPRO Y101 (ancho 3.00m)',
              'SUNPRO E (ancho 3.00m / 3.50m)',
              'Lona Confeccionada SUNPRO Y101',
              'Lona Confeccionada SUNPRO E',
              'Clear Cristal Comercial Renolit CAL.20 (1.40m)',
            ].map((tela) => (
              <div key={tela} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.5)' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: 'var(--text-2)' }}>{tela}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nota */}
        <div style={{
          marginTop: '32px', padding: '20px 24px', borderRadius: '12px',
          background: 'rgba(184,145,42,0.05)', border: '1px solid rgba(184,145,42,0.15)',
        }}>
          <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)' }}>Instalación profesional incluida.</strong>{' '}
            Todos los insumos y accesorios se suministran con la instalación de tu toldo.
            Para repuestos o proyectos especiales, consúltanos directamente.
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
            Cotizar toldo completo <ArrowRight size={14} />
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
