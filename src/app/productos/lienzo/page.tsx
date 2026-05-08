import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const formatos = [
  { medida: '50 × 50 cm', w: 44, h: 44, desc: 'Cuadrado pequeño. Ideal en grupos de 2 o más, o para complementar composiciones mixtas.' },
  { medida: '60 × 90 cm', w: 36, h: 54, desc: 'Formato vertical estándar. Equilibrio perfecto para salas y dormitorios.' },
  { medida: '80 × 120 cm', w: 46, h: 69, desc: 'Vertical grande. Fuerte impacto visual como protagonista individual o en díptico.' },
  { medida: '100 × 150 cm', w: 52, h: 70, desc: 'Premium de gran escala. Para paredes principales o espacios de doble altura.' },
]

const composiciones = [
  {
    nombre: 'Díptico vertical',
    desc: 'Dos lienzos 80×120 cm lado a lado. Simétrico y de gran presencia. Ideal sobre un sofá o consola.',
    piezas: ['80×120 cm', '80×120 cm'],
  },
  {
    nombre: 'Collage asimétrico',
    desc: 'Mezcla de tres tamaños: 50×50, 50×50 y 100×150 con un 60×90. Composición dinámica y moderna.',
    piezas: ['50×50 cm', '50×50 cm', '100×150 cm', '60×90 cm'],
    destacado: true,
  },
  {
    nombre: 'Galería completa',
    desc: 'Cinco piezas: 80×120, 50×50, 50×50, 60×90 y 100×150. Ocupa toda una pared y marca el ambiente.',
    piezas: ['80×120 cm', '50×50 cm', '50×50 cm', '60×90 cm', '100×150 cm'],
  },
]

const ventajas = [
  { titulo: 'Impresión digital HD', desc: 'Tecnología de impresión digital de alta resolución que reproduce cada detalle con fidelidad cromática.' },
  { titulo: 'Arte de tendencia', desc: 'Diseños curados para interiores de vanguardia: abstracto, naturaleza, arquitectura, fotografía artística.' },
  { titulo: 'Bastidor de madera', desc: 'Cada lienzo llega tensado sobre bastidor. Listo para colgar sin marco adicional.' },
  { titulo: '4 formatos combinables', desc: 'Los cuatro tamaños están diseñados para combinarse entre sí en composiciones de galería.' },
]

export default function LienzoPage() {
  const cfg = getImagesConfig()
  const heroImg = cfg.productos_hero?.['lienzo'] || ''
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Banner */}
        <div style={{ position: 'relative', marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', height: '300px', border: '1px solid rgba(201,169,110,0.2)' }}>
          {heroImg ? (
            <img src={heroImg} alt="Línea Lienzo" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', gap: 0 }}>
              <div style={{ overflow: 'hidden' }}>
                <img src="/safra/lienzo/lienzo-trigo.jpg" alt="Screen Lienzo Trigo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ overflow: 'hidden' }}>
                <img src="/safra/lienzo/lienzo-flower.jpg" alt="Screen Lienzo Flower" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.86) 0%, rgba(8,14,26,0.55) 50%, rgba(8,14,26,0.2) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 52px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-flex', alignSelf: 'flex-start' }}>Línea Lienzo</span>
            <h1 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF' }}>
              Arte digital para <span className="text-gold-gradient">espacios de tendencia</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.7)', marginTop: '10px' }}>4 formatos · Bastidor de madera · Impresión HD · Composiciones de galería</p>
          </div>
        </div>

        {/* Intro */}
        <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
          <p style={{ fontSize: '16px', color: 'var(--text-2)', lineHeight: 1.75 }}>
            Arte e inspiración en lienzos, estampados con <strong>tecnología de impresión digital</strong>. Con ella podrás lograr espacios de última tendencia, siendo fieles a tu buen estilo y gusto. Los cuatro formatos están diseñados para combinarse en composiciones de galería.
          </p>
        </div>

        {/* Formatos */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Formatos disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '44px' }}>
          {formatos.map((f) => (
            <div key={f.medida} className="card-glass" style={{ padding: '22px 18px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '80px', marginBottom: '14px' }}>
                <div style={{ border: '2px solid var(--gold)', borderRadius: '2px', background: 'rgba(201,169,110,0.06)', width: `${f.w}px`, height: `${f.h}px` }}/>
              </div>
              <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>{f.medida}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.55 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Composiciones de galería */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Composiciones de galería sugeridas
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '44px' }}>
          {composiciones.map((c) => (
            <div key={c.nombre} className="card-glass" style={{ padding: '24px 26px', borderColor: c.destacado ? 'rgba(201,169,110,0.3)' : undefined }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.2 }}>{c.nombre}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6, marginBottom: '14px' }}>{c.desc}</p>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '7px' }}>Piezas</p>
                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                  {c.piezas.map((p, i) => (
                    <span key={i} className="tag" style={{ fontSize: '11px' }}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ventajas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Características de la línea
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '36px' }}>
          {ventajas.map((v) => (
            <div key={v.titulo} className="surface" style={{ padding: '20px 24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '7px', lineHeight: 1.2 }}>{v.titulo}</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Muestras de tela Screen Lienzo */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '36px', marginBottom: '36px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Telas base disponibles</p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>Los lienzos se imprimen sobre base Screen o Blackout — elige la tela según tu necesidad de luz</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { src: '/safra/lienzo/lienzo-trigo.jpg',  nombre: 'Screen Lienzo',  sub: 'Color Trigo · Traslúcido · Textura tejido natural' },
              { src: '/safra/lienzo/lienzo-flower.jpg', nombre: 'Screen Flower',  sub: 'Decorativo · Diseño Beige · Con trama visible' },
            ].map((t) => (
              <div key={t.nombre} className="card-glass" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '0' }}>
                <div style={{ width: '140px', height: '140px', flexShrink: 0, overflow: 'hidden' }}>
                  <img src={t.src} alt={t.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{t.nombre}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.5 }}>{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>Encuentra el arte ideal para tu espacio</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Te mostramos el catálogo completo y diseñamos la composición de galería perfecta.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar asesoría <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
