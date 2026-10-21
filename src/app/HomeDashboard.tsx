import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Award, MapPin, Wrench, MessageCircle } from 'lucide-react'
import type { ImagesConfig } from '@/lib/getImagesConfig'
import type { DiaGaleria } from '@/lib/galeriaDia'
import GaleriaDiaCarrusel from '@/components/GaleriaDiaCarrusel'
import FondoIA from '@/components/FondoIA'

/* ─── DATOS ─────────────────────────────────────────── */

type Linea = {
  slug: string
  kicker: string
  titulo: string
  desc: string
  href: string
  img: string
  grande?: boolean
  temas: { label: string; href: string }[]
}

const lineas: Linea[] = [
  {
    slug: 'persianas',
    kicker: 'Control de luz · lo nuestro desde el primer día',
    titulo: 'Persianas y cortinas',
    desc: 'Enrollables, Sheer Elegance, verticales, romanas y motorización. Garantía 7 años en enrollables.',
    href: '/persianas',
    img: '/hero_banner.png',
    grande: true,
    temas: [
      { label: 'Enrollables', href: '/productos/enrollables' },
      { label: 'Sheer Elegance', href: '/productos/sheer-elegance' },
      { label: 'Motorización', href: '/productos/motorizacion' },
      { label: 'Estampadas', href: '/productos/estampados' },
    ],
  },
  {
    slug: 'pergolas-metalicas',
    kicker: 'Techos para vivir afuera · fabricación propia',
    titulo: 'Pérgolas metálicas',
    desc: 'Pérgolas, celosías, carports y cubiertas para terrazas, jardines y parqueaderos. Hechas para el clima de Girardot.',
    href: '/productos/pergolas-metalicas',
    img: '/pergolas-metalicas/adosada-policarbonato.jpg',
    temas: [
      { label: 'Terraza', href: '/productos/pergolas-metalicas#adosada-policarbonato' },
      { label: 'Carport', href: '/productos/pergolas-metalicas#carport-diseno' },
      { label: 'Celosías', href: '/productos/pergolas-metalicas#celosia-lamas-fijas' },
      { label: 'Accesorios', href: '/productos/pergolas-metalicas/accesorios' },
    ],
  },
  {
    slug: 'toldos',
    kicker: 'Sombra retráctil',
    titulo: 'Toldos',
    desc: 'Brazos extensibles, toldo romano corredizo y pérgola de lona Acrysun.',
    href: '/productos/toldos-brazos',
    img: '/galeria/toldo-romano/toldo-romano-01.jpeg',
    temas: [
      { label: 'Brazos extensibles', href: '/productos/toldos-brazos' },
      { label: 'Toldo romano', href: '/productos/toldo-romano' },
      { label: 'Pérgola de lona', href: '/productos/pergolas' },
    ],
  },
]

const lineasMenores: Linea[] = [
  {
    slug: 'mobiliario-exterior',
    kicker: 'Línea nueva · terraza y piscina',
    titulo: 'Muebles de exterior',
    desc: 'Mimbre natural, ratán sintético, cordón náutico, asoleadoras y mesas de madera maciza.',
    href: '/exteriores/mobiliario',
    img: '/mobiliario-exterior/ratan-sintetico.jpg',
    temas: [
      { label: 'Ratán sintético', href: '/exteriores/mobiliario#ratan-sintetico' },
      { label: 'Asoleadoras', href: '/exteriores/mobiliario#asoleadoras' },
      { label: 'Mesas de tronco', href: '/exteriores/mobiliario#mesas-tronco' },
    ],
  },
  {
    slug: 'estructuras',
    kicker: 'Acero con cálculo · diseño firmado',
    titulo: 'Estructuras metálicas',
    desc: 'Escaleras, mezzanines, cubiertas y ampliaciones.',
    href: '/estructuras',
    img: '/estructuras/naves-porticos.jpg',
    temas: [
      { label: 'Escaleras', href: '/estructuras#escaleras-metalicas' },
      { label: 'Mezzanine', href: '/estructuras#mezzanine-altillo' },
      { label: 'Cubiertas', href: '/estructuras#cubiertas-comerciales' },
    ],
  },
  {
    slug: 'motorizacion',
    kicker: 'Smart Shade',
    titulo: 'Motorización y domótica',
    desc: 'Wi-Fi, app y voz para persianas, cortinas y toldos.',
    href: '/productos/motorizacion',
    img: '/home/persianas-motor.jpg',
    temas: [
      { label: 'Motores Wi-Fi', href: '/productos/motorizacion' },
      { label: 'Riel motor', href: '/productos/riel-motor' },
    ],
  },
  {
    slug: 'peliculas',
    kicker: 'Vidrio inteligente',
    titulo: 'Películas solares',
    desc: 'HAVERKAMP: calor, rayos UV y seguridad sin tapar la vista.',
    href: '/productos/peliculas',
    img: '/home/peliculas.jpg',
    temas: [
      { label: 'Control solar', href: '/productos/peliculas' },
      { label: 'Seguridad', href: '/productos/peliculas' },
    ],
  },
  {
    slug: 'decoracion',
    kicker: 'Paredes con textura · arte',
    titulo: 'Papel de colgadura y lienzos',
    desc: 'Colecciones Safra Living y arte digital en lienzo.',
    href: '/productos/papel',
    img: '/home/decoracion.jpg',
    temas: [
      { label: 'Papel de colgadura', href: '/productos/papel' },
      { label: 'Lienzos', href: '/productos/lienzo' },
    ],
  },
]


const confianza = [
  { Icon: Shield, t: 'Garantía 7 años', d: 'en sistemas enrollables' },
  { Icon: Award, t: 'Telas certificadas', d: 'OEKO-TEX · GREENGUARD Gold' },
  { Icon: Wrench, t: 'Fabricación propia', d: 'medimos, fabricamos e instalamos' },
  { Icon: MapPin, t: 'Girardot y región', d: 'Melgar · Ricaurte · Flandes · Bogotá' },
]

const WA = 'https://wa.me/573202381865?text=Hola%2C%20quiero%20una%20asesor%C3%ADa'

/* ─── PIEZAS ────────────────────────────────────────── */

function TileLinea({ l }: { l: Linea }) {
  return (
    <article className={`hd-tile ${l.grande ? 'hd-tile-grande' : ''}`}>
      <Image src={l.img} alt={l.titulo} fill sizes={l.grande ? '(max-width: 900px) 100vw, 58vw' : '(max-width: 900px) 100vw, 42vw'} priority={!!l.grande} style={{ objectFit: 'cover' }} className="hd-img" />
      <div className="hd-shade" />
      <Link href={l.href} className="hd-stretch" aria-label={l.titulo} />
      <div className="hd-body">
        <span className="hd-kicker">{l.kicker}</span>
        <h2 className="hd-titulo">{l.titulo}</h2>
        <p className="hd-desc">{l.desc}</p>
        <div className="hd-temas">
          {l.temas.map((t) => (
            <Link key={t.href} href={t.href} className="hd-chip">{t.label}</Link>
          ))}
          <Link href={l.href} className="hd-chip hd-chip-ver">Ver todo <ArrowRight size={13} /></Link>
        </div>
      </div>
    </article>
  )
}

/* ─── PÁGINA ────────────────────────────────────────── */

export default function HomeDashboard({ cfg, dias = [] }: { cfg: ImagesConfig; dias?: DiaGaleria[] }) {
  // Si el panel admin fijó un banner remoto válido, lo usamos en el mosaico grande.
  const bannerAdmin = cfg.hero_banner && cfg.hero_banner.startsWith('http') ? cfg.hero_banner : null
  const lineasRender = lineas.map((l) => (l.grande && bannerAdmin ? { ...l, img: bannerAdmin } : l))

  return (
    <>
      {/* ══════════ BIENVENIDA ══════════ */}
      <section className="page-top hero-ia" style={{ paddingBottom: '34px' }}>
        <FondoIA />
        <div className="container-site" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span className="badge" style={{ marginBottom: '18px' }}>Girardot · Alto Magdalena</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: '860px', margin: '0 auto 14px' }}>
            Bienvenido a <span className="text-gold-gradient">Fábrica de Cortinas Girardot</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto 24px' }}>
            Persianas, cortinas, pérgolas y estructuras metálicas. Fabricamos e instalamos para el clima cálido. Elige por dónde empezar.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '22px' }}>
            <Link href="/cotizar" className="btn-primary" style={{ padding: '14px 26px', borderRadius: '14px' }}>
              Cotizar <ArrowRight size={16} />
            </Link>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '14px 26px', borderRadius: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
          {/* Sello Safri IA */}
          <Link href="/galeria-del-dia" className="hd-sello" aria-label="Safri IA, la IA propia de Fábrica de Cortinas Girardot">
            <Image src="/safri-ia.png" alt="Safri IA" width={44} height={44} />
            <span><b>Safri IA</b> · nuestra inteligencia artificial propia · persianas inteligentes, empresa inteligente</span>
          </Link>
        </div>
      </section>

      {/* ══════════ TRES LÍNEAS ══════════ */}
      <section className="section-sm" style={{ paddingTop: '32px' }}>
        <div className="container-site">
          <div className="hd-grid">
            {lineasRender.map((l) => <TileLinea key={l.slug} l={l} />)}
          </div>
          <div className="hd-grid-3">
            {lineasMenores.map((l) => <TileLinea key={l.slug} l={l} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '22px' }}>
            <Link href="/productos" style={{ fontSize: '15px', fontWeight: 600, color: 'var(--gold-dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Ver el portafolio completo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ GALERÍA DEL DÍA (rota sola) ══════════ */}
      <GaleriaDiaCarrusel dias={dias} />

      {/* ══════════ CONFIANZA ══════════ */}
      <section className="section-sm" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-site">
          <div className="hd-conf">
            {confianza.map(({ Icon, t, d }) => (
              <div key={t} className="hd-conf-item">
                <div className="hd-conf-ico"><Icon size={20} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: '15px' }}>{t}</div>
                  <div style={{ color: 'var(--text-3)', fontSize: '13px' }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="section-sm" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container-site">
          <div className="card-glass hd-cta">
            <div>
              <h3 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '6px' }}>
                ¿No sabes cuál te sirve?
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: '16px' }}>Cuéntanos el espacio y el problema. Te decimos qué sistema conviene y vamos a medir.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '14px 24px', borderRadius: '14px' }}>
                <MessageCircle size={16} /> Escribir por WhatsApp
              </a>
              <Link href="/cotizar" className="btn-secondary" style={{ padding: '14px 24px', borderRadius: '14px' }}>Pedir cotización</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hd-sello { display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px 8px 10px; border-radius: 100px; background: #14110e; color: #F3EFE6; text-decoration: none; font-size: 13px; border: 1px solid rgba(232,199,106,0.45); box-shadow: 0 6px 18px rgba(0,0,0,0.12); }
        .hd-sello b { color: #E8C76A; }
        .hd-grid { display: grid; grid-template-columns: 1.4fr 1fr; grid-template-rows: 290px 290px; gap: 16px; }
        .hd-tile { position: relative; border-radius: 22px; overflow: hidden; background: #ddd; box-shadow: 0 10px 30px rgba(0,0,0,0.08); isolation: isolate; }
        .hd-tile-grande { grid-row: 1 / 3; }
        .hd-grid-3 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 16px; }
        .hd-grid-3 .hd-tile { height: 250px; }
        .hd-grid-3 .hd-body { padding: 18px; }
        .hd-grid-3 .hd-titulo { font-size: clamp(20px, 1.7vw, 25px); }
        .hd-grid-3 .hd-desc { display: none; }
        .hd-img { transition: transform .5s ease; }
        .hd-tile:hover .hd-img { transform: scale(1.04); }
        .hd-shade { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.45) 45%, rgba(10,8,6,0.05) 75%); pointer-events: none; }
        .hd-stretch { position: absolute; inset: 0; z-index: 1; }
        .hd-body { position: absolute; left: 0; right: 0; bottom: 0; padding: 22px 24px; color: #fff; z-index: 2; pointer-events: none; }
        .hd-body > * { pointer-events: auto; }
        .hd-kicker { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #E8C76A; margin-bottom: 8px; }
        .hd-titulo { color: #fff; font-size: clamp(24px, 2.6vw, 36px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.05; margin-bottom: 6px; text-shadow: 0 2px 12px rgba(0,0,0,.4); }
        .hd-tile-grande .hd-titulo { font-size: clamp(30px, 3.6vw, 48px); }
        .hd-desc { font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.85); max-width: 520px; margin-bottom: 12px; }
        .hd-temas { display: flex; flex-wrap: wrap; gap: 8px; }
        .hd-chip { font-size: 12.5px; font-weight: 600; color: #fff; text-decoration: none; padding: 7px 12px; border-radius: 100px; background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.28); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); display: inline-flex; align-items: center; gap: 5px; transition: background .2s; }
        .hd-chip:hover { background: rgba(255,255,255,0.3); }
        .hd-chip-ver { background: var(--gold); border-color: var(--gold); }
        .hd-chip-ver:hover { background: var(--gold-light); }
        .hd-conf { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .hd-conf-item { display: flex; gap: 12px; align-items: center; padding: 14px 16px; border: 1px solid var(--border); border-radius: 14px; background: var(--surface); }
        .hd-conf-ico { width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(135deg, rgba(232,199,106,0.25), rgba(184,145,42,0.08)); color: var(--gold-dark); box-shadow: inset 0 0 0 1px rgba(184,145,42,0.25), 0 0 18px rgba(232,199,106,0.18); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .hd-cta { display: flex; justify-content: space-between; align-items: center; gap: 24px; padding: 28px 32px; flex-wrap: wrap; }
        @media (max-width: 900px) {
          .hd-grid { grid-template-columns: 1fr; grid-template-rows: none; }
          .hd-tile { height: 250px; }
          .hd-tile-grande { grid-row: auto; height: 320px; }
          .hd-grid-3 { grid-template-columns: 1fr 1fr; }
          .hd-conf { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .hd-body { padding: 16px; }
          .hd-desc { display: none; }
          .hd-grid-3 { grid-template-columns: 1fr; }
          .hd-conf { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
