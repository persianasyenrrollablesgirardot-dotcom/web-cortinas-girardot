import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const posts = [
  {
    slug: 'blackout-vs-screen',
    cat: 'Guías',
    titulo: '¿Blackout o Screen? Cuál elegir para cada espacio',
    resumen: 'La duda más común al elegir una persiana enrollable. Te explicamos las diferencias reales y cuándo conviene cada una según tu espacio y necesidades.',
    fecha: 'Marzo 2026',
    lectura: '4 min',
  },
  {
    slug: 'motorizacion-2026',
    cat: 'Tecnología',
    titulo: '5 razones para motorizar tus cortinas en 2026',
    resumen: 'La motorización ya no es un lujo reservado para pocos. Con precios cada vez más accesibles e integración total con Alexa y Google, aquí están los motivos.',
    fecha: 'Febrero 2026',
    lectura: '5 min',
  },
  {
    slug: 'calor-girardot',
    cat: 'Consejos',
    titulo: 'Cómo proteger tu hogar del calor en Girardot',
    resumen: 'El clima de Girardot exige protección solar real. Descubre qué sistemas pueden reducir la temperatura interior hasta 8°C sin sacrificar la vista al exterior.',
    fecha: 'Enero 2026',
    lectura: '6 min',
  },
  {
    slug: 'sheer-elegance-guia',
    cat: 'Productos',
    titulo: 'Sheer Elegance: guía completa para elegir el sistema correcto',
    resumen: 'Franjas, cenefas, alturas máximas y motorización. Todo lo que necesitas saber sobre el sistema de cortinas más sofisticado del mercado.',
    fecha: 'Diciembre 2025',
    lectura: '7 min',
  },
  {
    slug: 'certificaciones-telas',
    cat: 'Calidad',
    titulo: 'Qué significan las certificaciones OEKO-TEX y GREENGUARD en telas',
    resumen: 'No todas las telas son iguales. Te explicamos qué garantizan las certificaciones internacionales y por qué son importantes para tu familia.',
    fecha: 'Noviembre 2025',
    lectura: '5 min',
  },
  {
    slug: 'verticales-ventanales',
    cat: 'Guías',
    titulo: 'Persianas verticales para ventanales grandes: lo que debes saber',
    resumen: 'Desde la medición hasta la instalación. Todo sobre el sistema ideal para puertas corredizas y ventanales de gran formato en climas cálidos.',
    fecha: 'Octubre 2025',
    lectura: '4 min',
  },
]

const categorias = ['Todos', 'Guías', 'Tecnología', 'Consejos', 'Productos', 'Calidad']

export default async function BlogPage() {
  const cfg = await getImagesConfig()
  const bgImg = cfg.paginas_bg?.blog || ''
  const [principal, ...resto] = posts

  return (
    <div className="page-top">
      <div className="container-site">

        {/* Banner blog */}
        <div style={{ position: 'relative', marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', height: '200px', border: '1px solid rgba(201,169,110,0.2)', background: '#080E1A' }}>
          {bgImg && <img src={bgImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
          <div style={{ position: 'absolute', inset: 0, background: bgImg ? 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' : 'linear-gradient(135deg, #0D1525 0%, #080E1A 100%)' }} />
          {!bgImg && <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 48px', gap: '24px' }}>
            <span className="badge">Blog & Consejos</span>
            <h1 style={{ fontSize: 'clamp(20px, 3vw, 36px)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.1 }}>
              Aprende sobre <span className="text-gold-gradient">control solar</span>
            </h1>
          </div>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div />
          {/* Filtros */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {categorias.map((c, i) => (
              <button key={c} style={{
                padding: '7px 16px', fontSize: '13px', borderRadius: '999px', cursor: 'pointer', fontFamily: 'inherit',
                background: i === 0 ? 'rgba(184,145,42,0.1)' : 'rgba(0,0,0,0.04)',
                outline: 'none',
                border: i === 0 ? '1px solid rgba(184,145,42,0.35)' : '1px solid var(--border)',
                color: i === 0 ? 'var(--gold-dark)' : 'var(--text-3)',
              }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Post principal destacado */}
        <div className="card-glass" style={{ padding: '36px 40px', marginBottom: '24px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center', borderColor: 'rgba(201,169,110,0.2)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span className="badge">Destacado</span>
              <span style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{principal.cat}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 500, color: 'var(--text)', lineHeight: 1.2, marginBottom: '12px' }}>
              {principal.titulo}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-3)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '560px' }}>
              {principal.resumen}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '16px', color: 'var(--text-3)' }}>{principal.fecha}</span>
              <span style={{ fontSize: '16px', color: 'var(--text-3)' }}>·</span>
              <span style={{ fontSize: '16px', color: 'var(--text-3)' }}>{principal.lectura} de lectura</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontSize: '15px', fontWeight: 600, whiteSpace: 'nowrap' }}>
            Leer artículo <ArrowRight size={14} />
          </div>
        </div>

        {/* Grid de posts restantes — 2 columnas × 3 filas reorganizadas en grilla de 5 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          {resto.map((post) => (
            <article key={post.slug} className="card-glass" style={{ padding: '26px 30px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', gap: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  {post.cat}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-3)', whiteSpace: 'nowrap' }}>{post.lectura}</span>
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.25, marginBottom: '10px' }}>
                {post.titulo}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '16px' }}>{post.resumen}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', color: 'var(--text-3)' }}>{post.fecha}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--gold)', fontSize: '16px', fontWeight: 600 }}>
                  Leer <ArrowRight size={12} />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  )
}
