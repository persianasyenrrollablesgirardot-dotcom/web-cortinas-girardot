import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Toldos de brazos extensibles en Girardot · Vértice, Octopus, Aqua Rain y Mykonos | Fábrica de Cortinas Girardot',
  description:
    'Toldos retráctiles de brazos articulados para terrazas, balcones y fachadas en clima cálido. Vértice hasta 5 m, Octopus hasta 14 m, Aqua Rain para lluvia y Mykonos vertical. Lona Acrysun, manual o motorizado. Medimos sin costo.',
}

// Datos del catálogo Safra (hechos confirmados: POR-099, POR-100, ING-138 a ING-142, ING-181, COM-069).
const modelos = [
  {
    slug: 'vertice', nombre: 'VÉRTICE', tipo: 'Extensible de brazos',
    para: 'Terrazas y balcones de casa; el más pedido.',
    ficha: [
      ['Ancho', '2,0 a 5,0 m'], ['Proyección', '1,50 a 3,50 m'], ['Lona', 'Acrílica ACRYSUN'],
      ['Inclinación', '30° a 60°'], ['Accionamiento', 'Manual o motor 50 NW / 100 NW'], ['Estructura', 'Aluminio blanco (negro con recargo)'],
    ],
  },
  {
    slug: 'octopus', nombre: 'OCTOPUS', tipo: 'Extensible de brazos · gran formato',
    para: 'Fachadas de locales, restaurantes y terrazas largas.',
    ficha: [
      ['Ancho', '2,0 a 14,0 m'], ['Proyección', '1,50 a 4,00 m'], ['Lona', 'Acrílica ACRYSUN'],
      ['Inclinación', '30° a 60°'], ['Refuerzo', 'Liras adicionales desde 5,80 m; dos liras por encima de 9,50 m'], ['Estructura', 'Aluminio blanco (negro con recargo)'],
    ],
  },
  {
    slug: 'aqua-rain', nombre: 'AQUA RAIN', tipo: 'Extensible para lluvia',
    para: 'Entradas y pasos donde importa el aguacero más que el sol.',
    ficha: [
      ['Ancho', '2,0 a 14,0 m'], ['Proyección', 'Fija: 1,50 m'], ['Lona', 'Multilona BRINCAFLEX (impermeable)'],
      ['Inclinación', '30° a 60°'], ['Accionamiento', 'Manual o motorizado'], ['Estructura', 'Aluminio blanco'],
    ],
  },
  {
    slug: 'mykonos', nombre: 'MYKONOS', tipo: 'Vertical con guaya',
    para: 'Cerrar un costado: balcón, corredor o ventanal al poniente.',
    ficha: [
      ['Ancho', '1,25 a 5,0 m'], ['Alto', '1,25 a 5,0 m'], ['Tela', 'Screen Básico · SUNPRO E · Clear'],
      ['Guía', 'Guaya de acero'], ['Accionamiento', 'Manual'], ['Estructura', 'Aluminio blanco'],
    ],
  },
]

const garantia = [
  ['Herraje', '1 año'], ['Motor', '3 años (Vértice y Octopus) · 5 años (Aqua Rain)'], ['Lona acrílica ACRYSUN', '5 años'], ['Multilona (Aqua Rain)', '1 año'],
]

const reglas = [
  ['Brazos por par', 'Se venden por par y en medidas de 0,50 en 0,50 m: Octopus hasta 4,0 m; Vértice hasta 3,5 m.'],
  ['Brazo cruzado', 'Cuando la proyección iguala al ancho —o el ancho no la supera en más de 60 cm— los brazos se cruzan. Se define en la visita para elegir modelo y medida.'],
  ['Viento', 'Un toldo extensible se recoge con viento fuerte; no es una cubierta fija. Para techo permanente, la solución es una pérgola metálica.'],
  ['Motor', 'Kit 50 NW o 100 NW según el tamaño. Asistido incluye manivela y control monocanal; no asistido viene sin manivela.'],
]

export default function ToldosBrazosPage() {
  return (
    <div className="page-top">
      <div className="container-site">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: 'var(--text-3)', marginBottom: '20px', flexWrap: 'wrap' }}>
          <Link href="/productos" style={{ color: 'var(--text-3)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}><ArrowLeft size={13} /> Productos</Link>
          <span>/</span><span>Toldos</span>
        </div>

        {/* Hero */}
        <div className="hero-section" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '40px', minHeight: '380px', border: '1px solid rgba(201,169,110,0.18)', background: '#0E0B08' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/toldos/toldo-brazos.jpg" alt="Toldo de brazos extensibles sobre una terraza en Girardot (imagen de referencia)" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.92) 0%, rgba(8,14,26,0.6) 55%, rgba(8,14,26,0.15) 100%)' }} />
          <div style={{ position: 'relative', padding: 'clamp(28px, 5vw, 56px)', maxWidth: '640px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Toldos · Catálogo Safra</span>
            <h1 style={{ fontSize: 'clamp(30px, 4.6vw, 54px)', fontWeight: 300, lineHeight: 1.06, color: '#EEF2FF', marginBottom: '14px' }}>
              Sombra que se recoge<br /><span className="text-gold-gradient" style={{ fontWeight: 500 }}>toldos de brazos extensibles</span>
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(238,242,255,0.7)', lineHeight: 1.65, marginBottom: '22px' }}>
              Cuatro modelos para terrazas, balcones y fachadas: Vértice, Octopus, Aqua Rain y Mykonos. Lona acrílica Acrysun, estructura de aluminio, manual o motorizado con control.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/cotizar?sistema=Toldo%20de%20brazos%20extensibles" className="btn-primary" style={{ fontSize: '15px', padding: '12px 24px' }}>Pedir visita <ArrowRight size={14} /></Link>
              <a href="#modelos" className="btn-secondary" style={{ fontSize: '15px', padding: '12px 24px' }}>Ver modelos</a>
            </div>
          </div>
        </div>

        {/* Modelos */}
        <p id="modelos" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', scrollMarginTop: '110px' }}>Cuatro modelos</p>
        <div className="tb-grid">
          {modelos.map((m) => (
            <section key={m.slug} id={m.slug} className="card-glass" style={{ padding: '24px', scrollMarginTop: '110px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>{m.tipo}</p>
              <h2 style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text)', marginBottom: '6px' }}>{m.nombre}</h2>
              <p style={{ fontSize: '15px', color: 'var(--text-2)', marginBottom: '16px' }}>{m.para}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {m.ficha.map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '6px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{k}</span>
                    <span style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 600, textAlign: 'right' }}>{v}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Garantía y reglas */}
        <div className="tb-dos" style={{ marginTop: '40px' }}>
          <div className="card-glass" style={{ padding: '24px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Garantía por componente</p>
            {garantia.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', borderBottom: '1px solid var(--border)', padding: '8px 0' }}>
                <span style={{ fontSize: '14px', color: 'var(--text-2)' }}>{k}</span>
                <span style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 600, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
            <p style={{ fontSize: '13px', color: 'var(--text-3)', marginTop: '12px', lineHeight: 1.5 }}>Según la lista vigente del proveedor. La garantía queda por escrito en la entrega.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {reglas.map(([t, d]) => (
              <div key={t} className="surface" style={{ padding: '16px 18px' }}>
                <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{t}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.55 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Relacionados */}
        <div className="tb-tres" style={{ marginTop: '40px' }}>
          {[
            ['/productos/accesorios-toldos', 'Accesorios de toldos', 'Brazos por par, motores 50/100 NW, soportes, lonas Acrysun y SUNPRO.'],
            ['/productos/toldo-romano', 'Toldo romano corredizo', 'Plegado romano sobre guías para patios y terrazas.'],
            ['/productos/pergolas-metalicas', 'Pérgola metálica', 'Cuando se necesita techo fijo que aguante sol, lluvia y viento.'],
          ].map(([href, t, d]) => (
            <Link key={href} href={href} style={{ textDecoration: 'none' }}>
              <div className="card-glass" style={{ padding: '20px 22px', height: '100%' }}>
                <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{t} →</p>
                <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.5 }}>{d}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="card-glass" style={{ marginTop: '40px', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Medimos el muro y la proyección sin costo</p>
            <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>Girardot · Melgar · Ricaurte · Flandes. Te decimos qué modelo cabe y si conviene manual o con motor.</p>
          </div>
          <Link href="/cotizar?sistema=Toldo%20de%20brazos%20extensibles" className="btn-primary" style={{ padding: '13px 24px' }}>Cotizar toldo <ArrowRight size={14} /></Link>
        </div>
      </div>
      <style>{`
        .tb-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .tb-dos { display: grid; grid-template-columns: 1fr 1.2fr; gap: 14px; }
        .tb-tres { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 768px) { .tb-grid, .tb-dos, .tb-tres { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
