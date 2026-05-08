import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const colecciones = [
  {
    nombre: 'Living I',
    sub: 'Colección Safra Living',
    tag: 'Clásico',
    desc: 'Diseños clásicos con texturas cálidas y patrones atemporales. Desde lo convencional y sutil hasta propuestas más expresivas, siempre con elegancia.',
    estilos: ['Glam Bohemio', 'Estilo Británico', 'Antiguo / Retro', 'Jardín Interior', 'Texturas'],
    referencias: ['LIV-0261', 'LIV-0231', 'LIV-0211', 'LIV-0241', 'LIV-0161', 'LIV-0123', 'LIV-0122'],
  },
  {
    nombre: 'Living II',
    sub: 'Colección Safra Living',
    tag: 'Contemporáneo',
    destacado: true,
    desc: 'Segunda entrega de la colección Living. Texturas más elaboradas, mayor variedad de patrones y combinaciones de color para ambientes contemporáneos.',
    estilos: ['Texturas tipo textil', 'Piedra y ladrillo', 'Geometría contemporánea', 'Tonos neutros urbanos'],
    referencias: [],
  },
  {
    nombre: 'Nuevas Tendencias — Renacer',
    sub: 'Colección Safra Living',
    tag: 'Vanguardia & Infantil',
    desc: 'Los diseños más contemporáneos e inspiradores. Incluye la sublínea Renacer: papeles temáticos para los miembros más pequeños de la familia — barcos, dinosaurios, globos y animales, creados para animar con creatividad.',
    estilos: ['Infantil — Renacer', 'Diseños contemporáneos', 'Patrones de alto impacto', 'Geometría moderna'],
    referencias: ['6202'],
    rollo: '52 cm × 10 m (±1.5%) · Repetición: 60 cm',
  },
]

const fichaTecnica = [
  { label: 'Formato de rollo estándar', value: '52 cm de ancho × 10 m de largo' },
  { label: 'Tolerancia de rollo',       value: '±1.5% sobre la longitud declarada' },
  { label: 'Repetición de diseño',      value: '60 cm (varía por referencia)' },
  { label: 'Base del papel',            value: 'Papel — requiere remojo previo a instalación' },
  { label: 'Método de pegado',          value: 'Encolar solo el área a cubrir con la tira' },
  { label: 'Limpieza recomendada',      value: 'Esponja o paño húmedo — sin detergentes' },
  { label: 'Nota de color',             value: 'Los colores digitales pueden variar de la muestra física' },
]

const estilosLiving = [
  {
    nombre: 'Glam Bohemio',
    desc: 'Estampados asimétricos y tonos metálicos sobre carbón. Diseños que evocan la psicodelia de los 60 con líneas y formas de fuerte punto de vista "deco".',
  },
  {
    nombre: 'Estilo Británico',
    desc: 'Rayas verticales que separan visualmente el techo del suelo, ganando sensación de altura. Un clásico que siempre estará de moda.',
  },
  {
    nombre: 'Antiguo — Evocando Recuerdos',
    desc: 'Estampados retro que demuestran que lo clásico siempre tiene lugar en la decoración moderna. Para los que se desenvuelven bien con lo ecléctico.',
  },
  {
    nombre: 'Jardín en el Interior',
    desc: 'Flores y naturaleza en formatos, diseños y colores que integran muy bien decoraciones clásicas, modernas o rústicas. Abre las ventanas al exterior.',
  },
  {
    nombre: 'Texturas',
    desc: 'Tipo textil, piedra, ladrillo o texturas urbanas. Para destacar con total intención cualquier espacio con materialidad y profundidad visual.',
  },
]

const consejosInstalacion = [
  {
    titulo: 'Remojo previo',
    desc: 'Los papeles con base de papel requieren un tiempo de remojo específico para absorber el pegante antes de colocarse. No forzar en seco.',
  },
  {
    titulo: 'Encolar por tiras',
    desc: 'Recuerda encolar solo el área de pared que cubrirá la tira que vas a colocar. No encoles toda la pared de una vez.',
  },
  {
    titulo: 'Limpieza sin químicos',
    desc: 'No utilices detergentes. Pueden quitar las tintas del diseño. Usa una esponja o un paño húmedo para limpiar manchas suavemente.',
  },
  {
    titulo: 'Muestra física',
    desc: 'Los colores digitales pueden variar de la muestra física. Solicita siempre la muestra antes de elegir la referencia definitiva.',
  },
]

const ambientes = [
  { titulo: 'Salas y comedores',              desc: 'Diseños que enmarcan el espacio social, cálidos o sofisticados según la paleta elegida.' },
  { titulo: 'Dormitorios',                    desc: 'Texturas suaves o expresivas para crear el ambiente de descanso ideal.' },
  { titulo: 'Habitaciones infantiles',        desc: 'Colección Renacer con temáticas de barcos, dinosaurios, globos y animales.' },
  { titulo: 'Oficinas y recepción',           desc: 'Patrones corporativos o neutros que aportan distinción y seriedad al ambiente laboral.' },
  { titulo: 'Pasillos y áreas de tránsito',  desc: 'Diseños que transforman zonas de circulación en espacios con identidad propia.' },
]

export default function PapelPage() {
  const cfg = getImagesConfig()
  const heroImg = cfg.productos_hero?.['papel'] || ''
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Banner */}
        <div style={{ position: 'relative', marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', height: '300px', border: '1px solid rgba(201,169,110,0.2)', background: 'linear-gradient(135deg, #0D1525 0%, #080E1A 60%, #0A1220 100%)' }}>
          {heroImg && <img src={heroImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
          {heroImg && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' }} />}
          {!heroImg && <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 52px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-flex', alignSelf: 'flex-start' }}>Papel de Colgadura</span>
            <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF' }}>
              Colección Safra Living — <span className="text-gold-gradient">tres líneas de diseño</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.7)', marginTop: '10px' }}>
              Living I · Living II · Nuevas Tendencias · Renacer infantil · Rollo 52 cm × 10 m
            </p>
          </div>
        </div>

        {/* Intro */}
        <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
          <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75 }}>
            La colección de Papel de Colgadura Safra Living llega con diseños y texturas que inspirarán desde un gusto{' '}
            <strong>convencional y sutil</strong> hasta algunos más <strong>arriesgados</strong>, sin perder la calidez y la elegancia.
            Tres colecciones para cada tipo de espacio y personalidad — incluyendo la sublínea <strong>Renacer</strong> para ambientes infantiles.
          </p>
        </div>

        {/* Ficha técnica del rollo */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Especificaciones del rollo
        </p>
        <div className="surface" style={{ padding: '0', marginBottom: '48px', overflow: 'hidden', borderRadius: '12px' }}>
          {fichaTecnica.map((f, i) => (
            <div key={f.label} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '13px 24px', gap: '16px',
              borderBottom: i < fichaTecnica.length - 1 ? '1px solid var(--border)' : 'none',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
            }}>
              <span style={{ fontSize: '14px', color: 'var(--text-3)' }}>{f.label}</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', textAlign: 'right', maxWidth: '55%' }}>{f.value}</span>
            </div>
          ))}
        </div>

        {/* Las colecciones */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Colecciones disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px', marginBottom: '48px' }}>
          {colecciones.map((c) => (
            <div key={c.nombre} className="card-glass" style={{ padding: '28px', borderColor: c.destacado ? 'rgba(201,169,110,0.3)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <p style={{ fontSize: '11px', color: 'var(--gold)', marginBottom: '4px', letterSpacing: '0.06em' }}>{c.sub}</p>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{c.nombre}</h3>
                </div>
                <span className="tag" style={{ fontSize: '11px' }}>{c.tag}</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '14px' }}>{c.desc}</p>

              {/* Estilos */}
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '11px', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Estilos</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {c.estilos.map((e) => (
                    <span key={e} style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '20px', background: 'rgba(184,145,42,0.08)', color: 'var(--gold-dark)', border: '1px solid rgba(184,145,42,0.15)' }}>{e}</span>
                  ))}
                </div>
              </div>

              {/* Referencias */}
              {c.referencias.length > 0 && (
                <div>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Referencias</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {c.referencias.map((r) => (
                      <span key={r} style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--text-2)', fontFamily: 'monospace' }}>{r}</span>
                    ))}
                  </div>
                </div>
              )}

              {c.rollo && (
                <p style={{ marginTop: '10px', fontSize: '12px', color: 'var(--gold)', fontWeight: 600 }}>{c.rollo}</p>
              )}
            </div>
          ))}
        </div>

        {/* Estilos Living */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Estilos colección Living
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px', marginBottom: '48px' }}>
          {estilosLiving.map((e) => (
            <div key={e.nombre} className="surface" style={{ padding: '20px 24px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '7px', lineHeight: 1.2 }}>{e.nombre}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.65 }}>{e.desc}</p>
            </div>
          ))}
        </div>

        {/* Consejos de instalación */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Consejos de instalación y cuidado
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '48px' }}>
          {consejosInstalacion.map((c) => (
            <div key={c.titulo} className="surface" style={{ padding: '20px 24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '7px' }}>{c.titulo}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Ambientes ideales */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Ambientes ideales
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px', marginBottom: '40px' }}>
          {ambientes.map((a) => (
            <div key={a.titulo} className="surface" style={{ padding: '16px 20px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '5px' }}>{a.titulo}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.6 }}>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Nota fichas técnicas */}
        <div className="surface" style={{ padding: '20px 28px', marginBottom: '32px', borderLeft: '3px solid var(--gold)' }}>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.65 }}>
            <strong style={{ color: 'var(--gold)' }}>Fichas técnicas por referencia:</strong>{' '}
            Cada diseño cuenta con su propia ficha técnica disponible en el catálogo oficial Safra Living.
            Te la mostramos en la visita de asesoría para que puedas elegir con toda la información: resistencia, aplicación recomendada, método de instalación y cuidados específicos.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>Conoce las colecciones en detalle</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Te llevamos el catálogo completo con fichas técnicas y muestras físicas — visita sin costo.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar asesoría <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
