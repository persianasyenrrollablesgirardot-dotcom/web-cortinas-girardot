import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProductCover from '@/components/ProductCover'
import { getImagesConfig } from '@/lib/getImagesConfig'

const fichaTecnica = [
  { label: 'Ancho de lamas',     value: '9 cm' },
  { label: 'Ancho mínimo',       value: '0.30 m' },
  { label: 'Ancho máximo',       value: '6.0 m' },
  { label: 'Alto mínimo',        value: '0.50 m' },
  { label: 'Alto máximo',        value: '3.20 m' },
  { label: 'Material del riel',  value: 'Aluminio' },
  { label: 'Medidas del riel',   value: 'Ancho 5 cm · Alto 3.2 cm · Largo 6.0 m' },
  { label: 'Color del riel',     value: 'Blanco' },
  { label: 'Sistema',            value: 'Manual (cadena continua)' },
  { label: 'Tipo de recogida',   value: 'Lateral izquierda o lateral derecha' },
  { label: 'Accesorios',         value: 'Pantógrafo · Pesalama platina blanca · Cadena con tensor' },
]

const caracteristicas = [
  { titulo: 'Versátil y funcional', desc: 'Adaptable a variedad de espacios y ambientes residenciales y comerciales.' },
  { titulo: 'Desplazamiento uniforme', desc: 'Lengüetas traslapadas con movimiento equidistante y fluido en todo el recorrido.' },
  { titulo: 'Bloqueo y dirección de luz', desc: 'Bloqueo efectivo de la luz y direccionamiento variable según la posición de las lamas.' },
  { titulo: 'Combinadas disponibles', desc: 'Vertical irregular combinada con aumento del 30%. Mínimo irregular: 0.40 m.' },
]

export default function VerticalesPage() {
  const cfg = getImagesConfig()
  const heroImg = cfg.productos_hero?.['verticales'] || ''
  const fotos = (() => {
    try {
      const dir = path.join(process.cwd(), 'public/galeria/verticales')
      return fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)).sort().map(f => `/galeria/verticales/${f}`)
    } catch { return [] as string[] }
  })()
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '24px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {heroImg ? (
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '380px', border: '1px solid rgba(201,169,110,0.2)', marginBottom: '36px' }}>
            <img src={heroImg} alt="Persianas Verticales" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' }} />
          </div>
        ) : (
          <>
            <ProductCover type="verticales" height={380} />
            <div style={{ height: '36px' }} />
          </>
        )}

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '52px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Persianas Verticales</span>
            <h1 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '16px' }}>
              Para los <span className="text-gold-gradient">grandes ventanales</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
              Lengüetas traslapadas suspendidas en riel de aluminio. Desplazamiento uniforme y equidistante. La solución <strong>versátil, funcional y estética</strong> para grandes espacios.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '24px' }}>
              Hasta <strong style={{ color: 'var(--gold)' }}>6.0 m de ancho</strong> y 3.20 m de alto. Recogida lateral izquierda o derecha según el espacio.
            </p>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar verticales <ArrowRight size={14} />
            </Link>
          </div>

          {/* Ficha técnica */}
          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>
              Ficha técnica del riel
            </p>
            {fichaTecnica.map((s, i) => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 0', borderBottom: i < fichaTecnica.length - 1 ? '1px solid var(--border)' : 'none', gap: '16px' }}>
                <span style={{ fontSize: '14px', color: 'var(--text-3)', flexShrink: 0 }}>{s.label}</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', textAlign: 'right', lineHeight: 1.4 }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Características */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Características del sistema
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '36px' }}>
          {caracteristicas.map((c) => (
            <div key={c.titulo} className="card-glass" style={{ padding: '22px 26px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.2 }}>{c.titulo}</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Nota combinada */}
        <div className="surface" style={{ padding: '20px 28px', marginBottom: '36px', borderLeft: '3px solid var(--gold)' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.65 }}>
            <strong style={{ color: 'var(--gold)' }}>Persiana Vertical Irregular Combinada:</strong> Combina diferentes tipos de lamas (opacas y traslúcidas) en el mismo sistema. Recargo del +30% sobre el precio base. Ancho mínimo para versión irregular: 0.40 m.
          </p>
        </div>

        {/* ── CATÁLOGO DE TELAS ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '36px', marginBottom: '28px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Catálogo de telas 2026</p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '28px' }}>Todas las referencias de tela disponibles para el sistema Vertical, organizadas por categoría.</p>

          {/* Vista general */}
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>Vista general — todas las categorías</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
            {[
              { nombre: 'Resumen completo de telas', sub: 'Decorativa Privacidad · Blackout · Screen — 3 categorías', src: '/telas/verticales/vista-general.png' },
              { nombre: 'Sabrina · Vittoria', sub: 'Decorativa Privacidad · 100% Poliéster · 345/275 g/m²', src: '/telas/verticales/sabrina-vittoria.png' },
            ].map((t) => (
              <a key={t.nombre} href={t.src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
                  <img src={t.src} alt={t.nombre} style={{ width: '100%', display: 'block' }} />
                  <div style={{ padding: '10px 14px 12px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{t.nombre}</p>
                    <p style={{ fontSize: '11px', color: 'var(--text-3)' }}>{t.sub}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Telas decorativas */}
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>Decorativas y Privacidad — 100% Poliéster</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '28px' }}>
            {[
              { nombre: 'Shantung', sub: '100% PES · 170 g/m² · lamas 9 cm', src: '/telas/verticales/shantung.png' },
              { nombre: 'Rayas', sub: '100% PES · 170 g/m² · Pink · Azul · Cielo', src: '/telas/verticales/rayas.png' },
              { nombre: 'Appril Shower', sub: '100% PES · 170 g/m² · Beige · Blanco · Trigo', src: '/telas/verticales/appril-shower.png' },
              { nombre: 'Primavera', sub: '100% PES · 170 g/m² · 4 colores', src: '/telas/verticales/primavera.png' },
            ].map((t) => (
              <a key={t.nombre} href={t.src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
                  <img src={t.src} alt={t.nombre} style={{ width: '100%', display: 'block' }} />
                  <div style={{ padding: '10px 12px 12px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{t.nombre}</p>
                    <p style={{ fontSize: '11px', color: 'var(--text-3)' }}>{t.sub}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Screen */}
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>Screen y Blackout</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '36px' }}>
            {[
              { nombre: 'Screen Clásico 351', sub: 'PVC 75% · F. vidrio 25% · 1% apertura', src: '/telas/verticales/screen-351.png' },
              { nombre: 'Screen Clásico 350', sub: 'PVC 75% · F. vidrio 25% · 380 g/m²', src: '/telas/verticales/screen-350.png' },
              { nombre: 'Screen 550 · 720 · Escandinavo', sub: 'Aperturas 10% · 14% · 5%', src: '/telas/verticales/screen-550-720-escandinavo.png' },
              { nombre: 'Screen Decorativo Diseño', sub: 'PVC 75% · F. vidrio 25% · 10% apertura', src: '/telas/verticales/screen-diseno.png' },
              { nombre: 'Screen Sombras · Snow', sub: 'PVC 75% · apertura 5%/4%', src: '/telas/verticales/screen-sombras-snow.png' },
              { nombre: 'Screen Noa · Blackout Pinpoint', sub: 'Screen 8% · Blackout 100% UV', src: '/telas/verticales/screen-noa-pinpoint.png' },
              { nombre: 'Screen Cristal · Madona · Kubic · Rice II', sub: 'Decorativos · aperturas 4%–5%', src: '/telas/verticales/screen-cristal-madona-kubic-rice2.png' },
            ].map((t) => (
              <a key={t.nombre} href={t.src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
                  <img src={t.src} alt={t.nombre} style={{ width: '100%', display: 'block' }} />
                  <div style={{ padding: '10px 12px 12px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{t.nombre}</p>
                    <p style={{ fontSize: '11px', color: 'var(--text-3)' }}>{t.sub}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Galería de instalaciones */}
        {fotos.length > 0 && (
          <div style={{ marginBottom: '56px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>
              Galería de instalaciones
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '24px' }}>
              {fotos.length} proyectos reales instalados en Girardot y la región.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '6px' }}>
              {fotos.map((src) => (
                <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="gal-item">
                  <img src={src} alt="Instalación Persiana Vertical" loading="lazy" className="gal-img" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>Medición gratuita en tu hogar</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Calculamos el sistema exacto para tus ventanales sin compromiso.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar medición <ArrowRight size={14} />
          </Link>
        </div>

      </div>
      <style>{`
        .gal-item { display: block; overflow: hidden; border-radius: 8px; aspect-ratio: 4/3; background: rgba(0,0,0,0.04); }
        .gal-img  { width: 100%; height: 100%; object-fit: cover; transition: transform 0.25s ease; display: block; }
        .gal-item:hover .gal-img { transform: scale(1.05); }
      `}</style>
    </div>
  )
}
