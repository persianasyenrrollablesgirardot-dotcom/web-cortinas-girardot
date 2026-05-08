import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const referencias = [
  { ref: 'ISI 50000', tipo: 'Protección Solar 20R', ancho: '1.52 m', familia: 'Solar ISI', desc: 'Película de baja densidad. Alta transmisión de luz con control UV básico.' },
  { ref: 'ISI 50100', tipo: 'Protección Solar 35R', ancho: '1.52 m', familia: 'Solar ISI', desc: 'Balance entre claridad y bloqueo de calor. Para oficinas con bastante luz natural.' },
  { ref: 'ISI 50250', tipo: 'Protección Solar 50R', ancho: '1.52 m', familia: 'Solar ISI', desc: 'Nivel medio de control solar. Reduce calor y UV manteniendo visibilidad.' },
  { ref: 'IM 51100',  tipo: 'Protección Solar 80S', ancho: '1.52 m', familia: 'Solar IM',  desc: 'Mayor bloqueo de calor y UV. Para fachadas con alta exposición solar directa.', destacado: true },
  { ref: 'ESI 50045', tipo: 'Protección Solar 20R', ancho: '1.52 / 1.82 m', familia: 'Solar ESI', desc: 'Compatible con ambos anchos de rollo. Ideal para ventanales de gran formato.' },
  { ref: 'ESI 50145', tipo: 'Protección Solar 35R', ancho: '1.52 / 1.82 m', familia: 'Solar ESI', desc: 'Doble formato. Balance entre claridad y control para ventanales amplios.' },
  { ref: 'ESI 50060', tipo: 'Protección Solar 50R', ancho: '1.52 m', familia: 'Solar ESI', desc: 'Nivel medio de control solar en serie ESI.' },
  { ref: 'ESI 55100', tipo: 'Seguridad 115', ancho: '1.52 m', familia: 'Seguridad', desc: 'Película de seguridad. Mantiene los fragmentos unidos en caso de impacto o rotura.', seguridad: true },
  { ref: 'ICL 52010', tipo: 'Seguridad 300', ancho: '1.52 m', familia: 'Seguridad Max', desc: 'Seguridad máxima. Mayor resistencia al impacto. Para ambientes de alta exigencia de seguridad.', seguridad: true, destacado: true },
]

const filtracion = [
  { pelicula: '20R', luz: '99%', uv: '87.4%', calor: '17.5%', desc: 'Alta claridad, control UV básico' },
  { pelicula: '35R', luz: '99%', uv: '78.8%', calor: '41.5%', desc: 'Balance claridad / control de calor' },
  { pelicula: '50R', luz: '99%', uv: '55%',   calor: '55%',   desc: 'Control equilibrado calor y UV', destacado: true },
  { pelicula: '80S', luz: '99%', uv: '42%',   calor: '76%',   desc: 'Máximo bloqueo de calor solar' },
]

const capas = [
  { num: '1', nombre: 'Adhesivo',                    desc: 'Capa de fijación al vidrio. Permite instalación sin burbujas y sin marcas.' },
  { num: '2', nombre: 'Lámina Poliéster',            desc: 'Cuerpo principal de la película. Soporte estructural y base para las propiedades técnicas.' },
  { num: '3', nombre: 'Cubierta Cerámica',           desc: 'Capa activa de filtración. Bloquea UV y calor sin interferir con señales Wi-Fi o celular.' },
  { num: '4', nombre: 'Cubierta Resistente a Rayaduras', desc: 'Capa exterior de protección. Mayor durabilidad y vida útil de la película instalada.' },
]

const rollos = [
  { ancho: '1.52 m', area: '46 m²', desc: 'Rollo estándar. Para proyectos residenciales y comerciales.' },
  { ancho: '1.82 m', area: '55 m²', desc: 'Rollo ancho. Para ventanales grandes sin empalmes visibles.', destacado: true },
]

export default async function PeliculasPage() {
  const cfg = await getImagesConfig()
  const heroImg = cfg.productos_hero?.['peliculas'] || ''
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
          {!heroImg && <div style={{ position: 'absolute', right: '50px', top: '20px', width: '220px', height: '240px', opacity: 0.14 }}>
            <svg viewBox="0 0 220 240" fill="none">
              <rect x="10" y="10" width="200" height="220" rx="4" stroke="rgba(201,169,110,1)" strokeWidth="2" fill="rgba(201,169,110,0.05)"/>
              {[0,1,2,3].map(i => (
                <rect key={i} x="10" y={10+i*8} width="200" height="7" rx="1" fill={`rgba(201,169,110,${0.35-i*0.05})`}/>
              ))}
              {[0,1,2,3,4].map(i => (
                <g key={i}>
                  <line x1={30+i*36} y1="0" x2={20+i*36} y2="10" stroke="rgba(255,200,50,0.7)" strokeWidth="2"/>
                  <line x1={20+i*36} y1="42" x2={10+i*36} y2="60" stroke="rgba(201,169,110,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
                </g>
              ))}
              <text x="110" y="150" textAnchor="middle" fontFamily="Arial" fontSize="11" fontWeight="bold" fill="rgba(201,169,110,0.6)">HAVERKAMP</text>
              <text x="110" y="166" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="rgba(201,169,110,0.4)">protect and secure</text>
            </svg>
          </div>}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 52px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-flex', alignSelf: 'flex-start' }}>Películas HAVERKAMP</span>
            <h1 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF' }}>
              Protección Solar y Seguridad <span className="text-gold-gradient">para tus vidrios</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.7)', marginTop: '10px' }}>9 referencias · 4 capas de protección · Rollos 1.52 m y 1.82 m · 3% descuento por rollo</p>
          </div>
        </div>

        {/* Estructura 4 capas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Estructura de la película — 4 capas
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '44px' }}>
          {capas.map((c) => (
            <div key={c.nombre} className="surface" style={{ padding: '18px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(201,169,110,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)' }}>{c.num}</span>
                </div>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{c.nombre}</h4>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.55 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Tabla de filtración */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Comparación de filtración por película
        </p>
        <div style={{ marginBottom: '44px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          {/* Encabezado */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 2fr', background: 'rgba(201,169,110,0.08)', padding: '12px 20px', borderBottom: '1px solid var(--border)' }}>
            {['Película', 'Luz visible', 'Bloqueo UV', 'Bloqueo calor', 'Uso recomendado'].map(h => (
              <p key={h} style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</p>
            ))}
          </div>
          {filtracion.map((f, i) => (
            <div key={f.pelicula} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 2fr', padding: '14px 20px', borderBottom: i < filtracion.length - 1 ? '1px solid var(--border)' : 'none', background: f.destacado ? 'rgba(201,169,110,0.04)' : undefined, alignItems: 'center' }}>
              <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--gold)' }}>{f.pelicula}</p>
              <p style={{ fontSize: '15px', color: 'var(--text-2)', fontWeight: 500 }}>{f.luz}</p>
              <p style={{ fontSize: '15px', color: 'var(--text-2)', fontWeight: 500 }}>{f.uv}</p>
              <p style={{ fontSize: '15px', color: 'var(--text)' , fontWeight: f.destacado ? 700 : 500 }}>{f.calor}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Referencias */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Referencias disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '44px' }}>
          {referencias.map((r) => (
            <div key={r.ref} className="card-glass" style={{ padding: '20px 22px', borderColor: r.destacado ? 'rgba(201,169,110,0.3)' : undefined, borderLeft: r.seguridad ? '3px solid #22c55e' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', fontFamily: 'monospace' }}>{r.ref}</p>
                <span className="tag" style={{ fontSize: '11px' }}>{r.seguridad ? 'Seguridad' : 'Solar'}</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--gold)', marginBottom: '4px' }}>{r.tipo}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', marginBottom: '8px' }}>Ancho: <strong style={{ color: 'var(--text-2)' }}>{r.ancho}</strong></p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.55 }}>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Formatos de rollo */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Formatos de rollo
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '36px' }}>
          {rollos.map((r) => (
            <div key={r.ancho} className="surface" style={{ padding: '24px 28px', borderLeft: r.destacado ? '3px solid var(--gold)' : '3px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', marginBottom: '4px' }}>Ancho del rollo</p>
                  <p style={{ fontSize: '26px', fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>{r.ancho}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', marginBottom: '4px' }}>Área total</p>
                  <p style={{ fontSize: '22px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>{r.area}</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '8px' }}>{r.desc}</p>
              <span className="tag" style={{ fontSize: '12px' }}>3% descuento por rollo completo</span>
            </div>
          ))}
        </div>

        {/* Nota corte */}
        <div className="surface" style={{ padding: '20px 28px', marginBottom: '36px', borderLeft: '3px solid var(--gold)' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.65 }}>
            <strong style={{ color: 'var(--gold)' }}>Nota para pedidos por m²:</strong> El corte es <strong>transversal</strong>. Debes tener en cuenta el ancho del rollo (1.52 m o 1.82 m) al hacer el cálculo. El largo del corte se toma perpendicular al enrollado. Ejemplo: para una ventana de 1.20 m de alto y 0.90 m de ancho, necesitas 1.20 m lineal del rollo de 1.52 m.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Solar o de seguridad? Te asesoramos</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Te ayudamos a elegir la referencia correcta para cada tipo de vidrio.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar cotización <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
