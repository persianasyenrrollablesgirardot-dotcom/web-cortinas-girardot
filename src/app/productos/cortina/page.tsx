import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const colecciones = [
  {
    nombre: 'Colección LUXURY',
    sub: 'Onda Moderna y Pliegue Francés con Cordel o Bastón',
    desc: 'La línea más completa. Blackout en tonos Período, Mármol, Grafito, Natural y Natural+. Velos con Hilos de Fantasía en múltiples referencias.',
    referencias: [
      'Blackout Luxury – Período (01–02–03–04–05)',
      'Blackout Luxury – Mármol (06–07–08–09–10)',
      'Blackout Luxury – Grafito (11–12–13–14–15–16)',
      'Blackout Luxury – Natural (17–18)',
      'Blackout Luxury – Natural+ (19–20–21)',
      'Velos Hilos de Fantasía',
      'Velos Hilos de Fantasía (68–67–68–69–70)',
    ],
    tag: 'Más completa',
  },
  {
    nombre: 'Colección BRISÁ',
    sub: 'Onda Moderna y Pliegue Francés con Cordel o Bastón',
    desc: 'Línea intermedia con Dimouts, Velos y Blackouts de gran presencia visual. Incluye telas Natalie y Eclipse con efecto difuminado especial.',
    referencias: [
      'Dimout Natalie DIMOUT',
      'Dimout Eclipse DIMOUT',
      'Velo Beru',
      'Velo Rein',
      'Blackout Palomino',
      'Blackout Importa',
      'Blackout Ventura',
    ],
    tag: 'Dimout',
    destacado: true,
  },
  {
    nombre: 'Colección LaMar',
    sub: 'Velos · Dimouts · Blackouts — Lanzamiento',
    desc: 'La colección de lanzamiento 2026. Tres líneas en una: Blackout para total oscuridad, Velo para luz difusa elegante. Diseño contemporáneo para el mercado actual.',
    referencias: [
      'Blackout LaMar 01',
      'Blackout LaMar 02–03',
      'Velo LaMar 01–02–16',
      'Velo LaMar del 3 al 15',
    ],
    tag: 'Nuevo 2026',
  },
]

const tiposCortina = [
  {
    tipo: 'Onda Moderna Tela al 2.3',
    desc: 'Plegado moderno con proporción tela : ancho de 2.3. Caída ondulada de tamaño medio.',
  },
  {
    tipo: 'Onda Moderna Tela al 2.8',
    desc: 'Plegado más pronunciado con mayor volumen. La opción más lujosa y de mayor presencia.',
  },
  {
    tipo: 'Pliegue Francés Tela al 2.3',
    desc: 'Pliegue agrupado en tríos, elegante y clásico. Requiere cordel o bastón según el sistema de riel.',
  },
]

const especificaciones = [
  { label: 'Composición',         value: '100% Poliéster (capas exteriores)' },
  { label: 'Dobladillo',          value: '15 cm' },
  { label: 'Ancho de reata',      value: '28 mm' },
  { label: 'Cobro mínimo alto',   value: '2.20 m' },
  { label: 'Altura máxima',       value: '2.50 m para telas con diseño en una sola dirección' },
  { label: 'Ancho máximo',        value: '6.0 m' },
  { label: 'Cenefa PVC',          value: 'Disponible como accesorio adicional (ml)' },
  { label: 'Certificaciones',     value: 'PASS NFPA-701 · OEKO-TEX Standard 100' },
  { label: 'Motorización',        value: 'Compatible con Riel Motor Cortina y Panel' },
]

const cuidados = [
  'Aspirar el textil frecuentemente para mantenerlo libre de polvo',
  'No usar blanqueador ni detergentes fuertes',
  'No usar cepillos',
  'Lavar a mano o en ciclo delicado',
  'Secar colgado',
  'Es necesario planchar siempre después de instalada',
  'Tolerancia de ±1 cm — hay telas que ceden o se encogen tras la confección',
]

export default function CortinaPage() {
  const cfg = getImagesConfig()
  const heroImg = cfg.productos_hero?.['cortina'] || '/safra/hero-coleccion.jpg'
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Banner */}
        <div style={{ position: 'relative', marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', height: '300px', border: '1px solid rgba(201,169,110,0.2)' }}>
          <img src={heroImg} alt="Colección Cortina LaMar 2026" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 65%, rgba(8,14,26,0.1) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span className="badge" style={{ display: 'inline-flex' }}>Colección Cortina</span>
              <span className="tag" style={{ fontSize: '12px', color: '#EEF2FF' }}>Lanzamiento 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(22px, 3.2vw, 38px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF' }}>
              Luxury · Brisá · LaMar — <span className="text-gold-gradient">tres colecciones</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.7)', marginTop: '10px' }}>Onda Moderna · Pliegue Francés · Blackout · Dimout · Velo · NFPA-701 · OEKO-TEX</p>
          </div>
        </div>

        {/* Colecciones */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Tres colecciones disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '48px' }}>
          {colecciones.map((c) => (
            <div key={c.nombre} className="card-glass" style={{ padding: '26px 28px', borderColor: c.destacado ? 'rgba(201,169,110,0.3)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>{c.nombre}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--gold)', marginTop: '3px', letterSpacing: '0.04em', lineHeight: 1.4 }}>{c.sub}</p>
                </div>
                <span className="tag" style={{ fontSize: '11px', whiteSpace: 'nowrap', marginLeft: '8px', flexShrink: 0 }}>{c.tag}</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6, marginBottom: '14px' }}>{c.desc}</p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Referencias</p>
                {c.referencias.map((r) => (
                  <div key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '4px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.4 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tipos de cortina */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Tipos de confección
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '44px' }}>
          {tiposCortina.map((t) => (
            <div key={t.tipo} className="surface" style={{ padding: '20px 22px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.3 }}>{t.tipo}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Especificaciones técnicas */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '44px' }}>
          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Especificaciones técnicas</p>
            {especificaciones.map((s, i) => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '9px 0', borderBottom: i < especificaciones.length - 1 ? '1px solid var(--border)' : 'none', gap: '12px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-3)', flexShrink: 0 }}>{s.label}</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', textAlign: 'right', lineHeight: 1.4 }}>{s.value}</span>
              </div>
            ))}
          </div>

          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Mantenimiento y lavado</p>
            {cuidados.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '7px' }} />
                <span style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.55 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
          {[
            { cert: 'PASS NFPA-701', desc: 'Resistente al fuego', color: '#CC0000' },
            { cert: 'OEKO-TEX Standard 100', desc: 'Sin químicos tóxicos', color: '#FFFFFF' },
          ].map((c) => (
            <div key={c.cert} className="surface" style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: c.color, border: '1px solid var(--border)', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{c.cert}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── MUESTRAS DE TELA ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '36px', marginBottom: '24px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Muestras de tela</p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>Selección de telas disponibles para cortinas — colecciones Brisa y Luxury</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '28px' }}>
            {[
              { src: '/safra/cortina/cortina-musa.png',           nombre: 'Musa',           sub: 'Velo · Colección Brisa' },
              { src: '/safra/cortina/cortina-nina.png',           nombre: 'Nina',           sub: 'Velo · Colección Brisa' },
              { src: '/safra/cortina/cortina-appril-shower.jpg',  nombre: 'Appril Shower',  sub: 'Dimout · Ceniza' },
              { src: '/safra/cortina/cortina-margaritas.jpg',     nombre: 'Margaritas',     sub: 'Blackout · Blanco' },
              { src: '/safra/cortina/cortina-hojas.jpg',          nombre: 'Hojas',          sub: 'Blackout · Blanco' },
              { src: '/safra/cortina/cortina-sabrina.jpg',        nombre: 'Sabrina',        sub: 'Blackout · Beige' },
              { src: '/safra/cortina/cortina-primavera.jpg',      nombre: 'Primavera',      sub: 'Blackout · Cáscara huevo' },
              { src: '/safra/hero-coleccion.jpg',                 nombre: 'Colección LaMar','sub': 'Velos · Dimouts · Blackouts 2026' },
            ].map((t) => (
              <div key={t.nombre} className="card-glass" style={{ overflow: 'hidden' }}>
                <div className='img-zoom-wrap' style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                  <img className='img-zoom' src={t.src} alt={t.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '9px 12px 11px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{t.nombre}</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)' }}>{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CATÁLOGO DE TELAS ── */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Catálogo completo 2026</p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '28px' }}>Referencias de color y fichas técnicas de Colección Brisa y Colección Luxury.</p>
        </div>

        {/* Brisa */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>Colección Brisá — Velos · Dimout · Blackout</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '32px' }}>
          {[
            { nombre: 'Velos Baru · Rain', sub: '100% PES Texturizado · Cáscara · Beige · Blanco · Gris', src: '/telas/cortina/brisa/velos-baru-rain.png' },
            { nombre: 'Dimout Natalia', sub: '100% PES Texturizado · 350 g/m² · Camel · Marfil · Plata', src: '/telas/cortina/brisa/dimout-natalia.png' },
            { nombre: 'Dimout Eclypse', sub: '100% PES Texturizado · 340 g/m² · 6 colores', src: '/telas/cortina/brisa/dimout-eclypse.png' },
            { nombre: 'Blackout Imperio · Palomino · Ventura', sub: '100% PES Texturizado · Ancho 2.80 m', src: '/telas/cortina/brisa/blackout-imperio-palomino-ventura.png' },
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

        {/* Luxury */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>Colección Luxury — Blackout · Velos</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '44px' }}>
          {[
            { nombre: 'Blackout Perlado', sub: '100% PES · capas exteriores Poliéster · silicona posterior', src: '/telas/cortina/luxury/blackout-perlado.png' },
            { nombre: 'Blackout Mármol · Grafito', sub: 'Refs. 6–16 · Gris frío · Grafito oscuro', src: '/telas/cortina/luxury/blackout-marmol-grafito.png' },
            { nombre: 'Velos Luxury · Blackout Natural', sub: 'Refs. 1–25 velos + refs. 17–21 Natural', src: '/telas/cortina/luxury/velos-natural.png' },
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

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>Te presentamos el muestrario completo</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Luxury, Brisá o LaMar — en tu espacio para que elijas sin dudas.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/productos/motorizacion" className="btn-secondary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Ver motorización
            </Link>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Solicitar cotización <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
