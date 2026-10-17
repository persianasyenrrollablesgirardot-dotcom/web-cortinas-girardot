import type { Metadata } from 'next'
import Link from 'next/link'
import fs from 'node:fs'
import path from 'node:path'
import { ArrowRight, Sun, CloudRain, Car, Building2, Footprints, Thermometer, Wind, Droplets, ShieldCheck } from 'lucide-react'
import { sistemas, familias, type FamiliaSlug } from '../productos/pergolas-metalicas/sistemas'

export const metadata: Metadata = {
  title: 'Exteriores para clima cálido en Girardot: sombra, techo y frescura | Fábrica de Cortinas Girardot',
  description:
    'Soluciones para el sol de mediodía, el aguacero de la tarde y el calor de la noche en Girardot, Melgar y el Alto Magdalena: pérgolas metálicas, cubiertas, carports, quiebrasoles, pérgolas de lona, toldos y cortinas screen de exterior.',
}

const iconos: Record<FamiliaSlug, React.ComponentType<{ size?: number; color?: string }>> = {
  terraza: Sun, jardin: CloudRain, carro: Car, fachada: Building2, piso: Footprints,
}

const clima = [
  { Icon: Thermometer, t: '28–34 °C de día', d: 'El sol de mediodía cae vertical casi todo el año. Un techo transparente es un invernadero: aquí el policarbonato va bronce u opal, nunca cristal.' },
  { Icon: CloudRain,   t: 'Aguaceros cortos y fuertes', d: 'Dos temporadas de lluvia (abril–mayo, octubre–noviembre) con tormentas de tarde. Pendiente mínima de 5° y canal dimensionada para aguacero, no para llovizna.' },
  { Icon: Droplets,    t: 'Humedad + calor = óxido', d: 'La tornillería zincada brillante dura uno o dos años a la intemperie. Usamos galvanizado en caliente, inoxidable y pintura electrostática o poliuretano.' },
  { Icon: Wind,        t: 'La brisa es el aire acondicionado', d: 'Un techo cerrado sin salida de aire se vuelve horno. Lamas, cumbreras ventiladas y celosías dejan pasar el viento mientras cortan el sol.' },
]

const safra = [
  { href: '/productos/pergolas',    t: 'Pérgola de lona retráctil',       d: 'Aluminio + lona Acrysun. Sombra que se recoge cuando quieres el cielo.', tag: 'Safra' },
  { href: '/productos/toldo-romano', t: 'Toldo romano corredizo',          d: 'Tela Solar Screen de exterior, manual o motorizado.', tag: 'Safra' },
  { href: '/productos/enrollables',  t: 'Cortina screen de exterior',      d: 'Cierra el lado de la pérgola contra sol y miradas sin perder la brisa.', tag: 'Safra' },
  { href: '/productos/motorizacion', t: 'Motorización y domótica',         d: 'Lonas, toldos y bioclimática con control desde el celular.', tag: 'Safra' },
]

function tieneImagen(img: string) {
  return fs.existsSync(path.join(process.cwd(), 'public', img))
}

export default function ExterioresPage() {
  const portada = sistemas.find((s) => s.slug === 'adosada-policarbonato')!
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Hero */}
        <div className="hero-section ext-hero" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '40px', minHeight: '380px', border: '1px solid rgba(201,169,110,0.18)', background: '#0B1526' }}>
          {tieneImagen(portada.img) && <img src={portada.img} alt={portada.imgAlt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }} />}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.92) 0%, rgba(8,14,26,0.6) 55%, rgba(8,14,26,0.15) 100%)' }} />
          <div style={{ position: 'relative', padding: 'clamp(28px, 5vw, 56px)', maxWidth: '640px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Exteriores · Clima cálido</span>
            <h1 style={{ fontSize: 'clamp(30px, 4.6vw, 54px)', fontWeight: 300, lineHeight: 1.06, color: '#EEF2FF', marginBottom: '14px' }}>
              Sombra, techo y frescura<br /><span className="text-gold-gradient" style={{ fontWeight: 500 }}>para vivir afuera en Girardot</span>
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(238,242,255,0.7)', lineHeight: 1.65, marginBottom: '22px' }}>
              La terraza a las dos de la tarde, el aguacero de las cuatro, el carro al sol y el calor de la noche. Cada problema tiene aquí su solución, hecha para este clima y no para el de Bogotá.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="#problemas" className="btn-primary" style={{ fontSize: '15px', padding: '12px 24px' }}>Empezar por el problema <ArrowRight size={14} /></a>
              <Link href="/cotizar" className="btn-secondary" style={{ fontSize: '15px', padding: '12px 24px' }}>Pedir visita</Link>
            </div>
          </div>
        </div>

        {/* Clima */}
        <div className="ext-clima" style={{ marginBottom: '64px' }}>
          {clima.map(({ Icon, t, d }) => (
            <div key={t} className="surface" style={{ padding: '20px 22px' }}>
              <Icon size={18} color="var(--gold)" />
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', margin: '10px 0 6px' }}>{t}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>

        {/* Problemas → soluciones */}
        <div id="problemas" style={{ scrollMarginTop: '110px', marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>Empieza por lo que te molesta</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '8px' }}>Cinco problemas, <span className="text-gold-gradient">doce soluciones</span></h2>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', maxWidth: '640px' }}>Todas en acero estructural, con anclaje elegido según tu piso y prueba de agua antes de entregar. Cada una tiene ficha técnica.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '64px' }}>
          {familias.map((f) => {
            const Icon = iconos[f.slug]
            const lista = sistemas.filter((s) => s.familia === f.slug)
            return (
              <div key={f.slug} className="card-glass ext-fam" style={{ overflow: 'hidden' }}>
                <div style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Icon size={20} color="var(--gold)" />
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>{f.problema}</p>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{f.titulo}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{f.desc}</p>
                  <Link href={`/productos/pergolas-metalicas#f-${f.slug}`} style={{ marginTop: 'auto', paddingTop: '8px', fontSize: '13px', color: 'var(--gold)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Ver {lista.length} {lista.length === 1 ? 'solución' : 'soluciones'} <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="ext-fam-grid">
                  {lista.map((s) => (
                    <Link key={s.slug} href={`/productos/pergolas-metalicas#${s.slug}`} style={{ textDecoration: 'none', display: 'block', position: 'relative', aspectRatio: '4/3', background: 'linear-gradient(135deg,#0D1525,#1A2A4A)', overflow: 'hidden' }} className="img-zoom-wrap">
                      {tieneImagen(s.img) && <img className="img-zoom" src={s.img} alt={s.imgAlt} loading="lazy" />}
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,14,26,0) 40%, rgba(8,14,26,0.85) 100%)' }} />
                      <div style={{ position: 'absolute', left: '12px', right: '12px', bottom: '10px' }}>
                        <p style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E8C98A', marginBottom: '2px' }}>{s.tag}</p>
                        <p style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.2 }}>{s.nombre}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Calor de noche y zancudos → accesorios + Safra */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>Calor de noche y zancudos</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '8px' }}>Lo que completa el espacio</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', maxWidth: '640px' }}>Ventilador de techo, nebulizador, mosquitero y cortina screen: van en la misma cotización. Y lo que ya vendemos de Safra para exterior.</p>
        </div>
        <div className="ext-safra" style={{ marginBottom: '64px' }}>
          <Link href="/productos/pergolas-metalicas/accesorios#confort" style={{ textDecoration: 'none' }}>
            <div className="card-glass" style={{ padding: '20px 22px', height: '100%', borderColor: 'rgba(201,169,110,0.3)' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Confort</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>Ventilador, nebulizador, mosquitero, LED →</p>
              <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>En el catálogo de accesorios, con imagen y especificación.</p>
            </div>
          </Link>
          {safra.map((p) => (
            <Link key={p.href} href={p.href} style={{ textDecoration: 'none' }}>
              <div className="card-glass" style={{ padding: '20px 22px', height: '100%' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>{p.tag}</p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{p.t} →</p>
                <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>{p.d}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Para quién */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>Para quién</p>
          <h2 style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 300, lineHeight: 1.1 }}>Girardot, Melgar, Ricaurte, Flandes y el Alto Magdalena</h2>
        </div>
        <div className="pg-grid-3" style={{ marginBottom: '64px' }}>
          {[
            { t: 'Casa de descanso y condominio', d: 'Decides desde Bogotá: render en tu espacio, avances por WhatsApp y acta de entrega con fotos. Terraza, piscina y BBQ usables el fin de semana.' },
            { t: 'Vivienda local y conjuntos', d: 'Carport, cubierta de terraza, marquesina. Gestionamos el permiso de copropiedad y respetamos la impermeabilización.' },
            { t: 'Restaurantes, hoteles y comercio', d: 'Sombra grande, corredores, cerramientos. Proyectos a medida con cálculo estructural cuando la luz lo exige.' },
          ].map((x) => (
            <div key={x.t} className="surface" style={{ padding: '22px 24px' }}>
              <ShieldCheck size={16} color="var(--gold)" />
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', margin: '8px 0 6px' }}>{x.t}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>{x.d}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="grid-cols-cta" style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>Cuéntanos qué te molesta del espacio y qué piso tiene.</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Con eso definimos sistema y anclaje. Visita, render y cotización sin costo.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>Solicitar visita <ArrowRight size={14} /></Link>
            <a href="https://wa.me/573202381865" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '15px', padding: '11px 22px' }}>WhatsApp</a>
          </div>
        </div>

      </div>

      <style>{`
        .ext-clima { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .ext-fam { display: grid; grid-template-columns: 300px 1fr; }
        .ext-fam-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
        .ext-safra { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
        .pg-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 1024px) { .ext-clima { grid-template-columns: repeat(2, 1fr); } .ext-safra { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 900px) { .ext-fam { grid-template-columns: 1fr; } .pg-grid-3 { grid-template-columns: 1fr; } .ext-fam-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .ext-clima { grid-template-columns: 1fr; } .ext-safra { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
