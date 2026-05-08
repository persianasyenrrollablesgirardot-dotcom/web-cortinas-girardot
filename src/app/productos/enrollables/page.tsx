import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Shield, Ruler, Layers, Thermometer, Star } from 'lucide-react'
import ProductCover from '@/components/ProductCover'
import { getImagesConfig } from '@/lib/getImagesConfig'

const specs = [
  { Icon: Ruler,       label: 'Ancho máximo manual',  value: 'Hasta 3.00 m (recargo R24 > 3 m)' },
  { Icon: Ruler,       label: 'Ancho motorizado',      value: 'Sin límite práctico (recargo > 351 cm)' },
  { Icon: Shield,      label: 'Garantía',               value: '7 años — la mayor del mercado' },
  { Icon: Layers,      label: 'Telas disponibles',      value: 'Blackout · Screen · Traslúcida · Panel Japonés' },
  { Icon: Thermometer, label: 'Certificaciones',        value: 'OEKO-TEX · GREENGUARD Gold · REACH NPS · BSCI/amfori · SGS · ISO 9001' },
  { Icon: Star,        label: 'Versión Premium',        value: 'Cabezal metálico de alta sofisticación' },
]

const versiones = [
  {
    nombre: 'Enrollable Estándar',
    sub: 'Sistema clásico',
    desc: 'El sistema de persiana enrollable de referencia del mercado. Mecánica robusta y confiable. Compatible con todo tipo de telas. Ideal para cualquier ambiente residencial o comercial.',
    recargos: ['Manual ancho > 3 m: +15% (mecanismo R24 + tubo 2")', 'Motorizado ancho > 351 cm: +15% (tubo 2½")'],
    tag: 'Más vendido',
  },
  {
    nombre: 'Enrollable Premium',
    sub: 'Cabezal metálico',
    desc: 'Versión de alta sofisticación con cabezal metálico que eleva la estética de cualquier espacio. Mismas telas certificadas del sistema Estándar con acabado arquitectónico superior.',
    recargos: ['Manual ancho > 3 m: +15% (mecanismo R24 + tubo 2")', 'Motorizado ancho > 351 cm: +15% (tubo 2½")'],
    tag: 'Premium',
    destacado: true,
  },
]

const telas = [
  {
    nombre: 'Blackout',
    sub: 'Oscurecimiento total',
    desc: 'Bloqueo 100% de la luz exterior. Ideal para dormitorios, salas de cine en casa y cualquier espacio que requiera oscuridad total.',
    ideal: 'Dormitorios · Cine en casa · Descanso',
  },
  {
    nombre: 'Screen',
    sub: 'Vista al exterior + privacidad diurna',
    desc: 'Permite ver el exterior sin que desde afuera te vean durante el día. Filtra hasta el 90% de los rayos UV sin perder luminosidad.',
    ideal: 'Salas · Oficinas · Con vista panorámica',
  },
  {
    nombre: 'Panel Japonés',
    sub: 'Diseño modular minimalista',
    desc: 'Paneles deslizantes que se apilan al costado. Estética contemporánea y lineal. Ideal para ventanales amplios y espacios de diseño.',
    ideal: 'Ventanales grandes · Diseño de interiores',
  },
  {
    nombre: 'Traslúcida',
    sub: 'Luz difusa y cálida',
    desc: 'Tamiza la luz creando un ambiente cálido y difuso. Mantiene la privacidad sin oscurecer el espacio. Perfecta para comedores y zonas sociales.',
    ideal: 'Salas · Comedores · Oficinas',
  },
  {
    nombre: 'Estampados',
    sub: 'Personalización con imagen o vector',
    desc: 'Posibilidad de personalizar con imágenes y vectores para estampados en la tela. Consulta con tu asesor las opciones disponibles.',
    ideal: 'Proyectos especiales · Branding · Decoración única',
  },
]

function readGaleria(sub: string) {
  const dir = path.join(process.cwd(), 'public/galeria', sub)
  try {
    return fs.readdirSync(dir)
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort()
      .map(f => `/galeria/${sub}/${f}`)
  } catch { return [] }
}

export default function EnrollablesPage() {
  const cfg = getImagesConfig()
  const heroImg = cfg.productos_hero?.['enrollables'] || ''
  const fotosBlackout = readGaleria('blackout')
  const fotosScreen   = readGaleria('screen')
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {heroImg ? (
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '380px', border: '1px solid rgba(201,169,110,0.2)', marginBottom: '36px' }}>
            <img src={heroImg} alt="Persianas Enrollables" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' }} />
          </div>
        ) : (
          <>
            <ProductCover type="enrollables" height={380} />
            <div style={{ height: '36px' }} />
          </>
        )}

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '52px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Persianas Enrollables</span>
            <h1 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '16px' }}>
              Control total de <span className="text-gold-gradient">luz y privacidad</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '20px' }}>
              La solución más versátil y durable del mercado. Disponible en versión Estándar y Premium con cabezal metálico. Fabricadas con telas certificadas internacionalmente y con la mayor garantía disponible: <strong style={{ color: 'var(--gold)' }}>7 años</strong>.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '24px' }}>
              Cobro mínimo: alto 1 m². Estampados con imágenes y vectores disponibles — consulta con tu asesor.
            </p>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar enrollables <ArrowRight size={14} />
            </Link>
          </div>

          {/* Specs grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {specs.map(({ Icon, label, value }) => (
              <div key={label} className="surface" style={{ padding: '18px' }}>
                <Icon size={15} color="var(--gold)" style={{ marginBottom: '10px' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-3)', marginBottom: '4px', letterSpacing: '0.05em' }}>{label}</p>
                <p style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500, lineHeight: 1.4 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Versiones */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Versiones disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '44px' }}>
          {versiones.map((v) => (
            <div key={v.nombre} className="card-glass" style={{ padding: '28px 32px', borderColor: v.destacado ? 'rgba(201,169,110,0.3)' : undefined }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--gold)', marginBottom: '4px', letterSpacing: '0.06em' }}>{v.sub}</p>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>{v.nombre}</h3>
                </div>
                <span className="tag" style={{ fontSize: '12px' }}>{v.tag}</span>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '16px' }}>{v.desc}</p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                <p style={{ fontSize: '12px', color: 'var(--text-3)', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Recargos adicionales</p>
                {v.recargos.map((r) => (
                  <div key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', marginBottom: '5px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.5 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Telas */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Tipos de tela disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '40px' }}>
          {telas.map((t) => (
            <div key={t.nombre} className="card-glass" style={{ padding: '22px 24px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2, marginBottom: '4px' }}>{t.nombre}</h4>
              <p style={{ fontSize: '12px', color: 'var(--gold)', marginBottom: '10px', letterSpacing: '0.05em' }}>{t.sub}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '12px' }}>{t.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)' }} />
                <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{t.ideal}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── MUESTRAS DE TELA SAFRA ── */}
        <div style={{ marginBottom: '8px', paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px', marginTop: '36px' }}>
            Muestras de tela
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '18px' }}>
            Selección de blackout y screen disponibles — referencias con stock permanente
          </p>
          <div style={{ marginBottom: '12px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '10px' }}>Blackout</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '20px' }}>
              {[
                { src: '/safra/enrollables/blackout-fiorela.jpg',    nombre: 'Fiorela',    sub: 'Blanco' },
                { src: '/safra/enrollables/blackout-imperial-s9.jpg',nombre: 'Imperial S9',sub: 'Gris' },
                { src: '/safra/enrollables/blackout-zen.jpg',        nombre: 'Zen',        sub: 'Arena' },
                { src: '/safra/enrollables/blackout-text.png',       nombre: 'Text Pop',   sub: 'Azul' },
              ].map((t) => (
                <div key={t.nombre} className="card-glass" style={{ overflow: 'hidden' }}>
                  <div className='img-zoom-wrap' style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img className='img-zoom' src={t.src} alt={t.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '8px 10px 10px' }}>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginBottom: '1px' }}>{t.nombre}</p>
                    <p style={{ fontSize: '11px', color: 'var(--text-3)' }}>{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '10px' }}>Screen Solar</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '28px' }}>
              {[
                { src: '/safra/enrollables/screen-300.jpg',          nombre: 'Clásico 300',  sub: 'Negro' },
                { src: '/safra/enrollables/screen-combi.jpg',        nombre: 'Combi',        sub: 'Gris-Negro' },
                { src: '/safra/enrollables/screen-fina.jpg',         nombre: 'Fina',         sub: 'Café' },
                { src: '/safra/enrollables/screen-silver.jpg',       nombre: 'Silver',       sub: 'Beige' },
                { src: '/safra/enrollables/screen-lienzo.jpg',       nombre: 'Lienzo',       sub: 'Trigo' },
                { src: '/safra/enrollables/screen-flower.jpg',       nombre: 'Flower',       sub: 'Beige' },
                { src: '/safra/enrollables/screen-escandinavo.jpg',  nombre: 'Escandinavo',  sub: 'Gris' },
                { src: '/safra/enrollables/screen-madona.jpg',       nombre: 'Madona',       sub: 'Negro' },
                { src: '/safra/enrollables/screen-asiatico.jpg',     nombre: 'Asiático',     sub: 'Linen' },
                { src: '/safra/enrollables/sunpro-y101.jpg',         nombre: 'Sunpro Y101',  sub: 'Gris Silver' },
              ].map((t) => (
                <div key={t.nombre} className="card-glass" style={{ overflow: 'hidden' }}>
                  <div className='img-zoom-wrap' style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img className='img-zoom' src={t.src} alt={t.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '8px 10px 10px' }}>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginBottom: '1px' }}>{t.nombre}</p>
                    <p style={{ fontSize: '11px', color: 'var(--text-3)' }}>{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CERTIFICACIONES DE TELAS ── */}
        <div style={{ marginBottom: '40px', paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px', marginTop: '36px' }}>
            Certificaciones de las telas
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>
            Estándares internacionales verificados por laboratorios independientes que garantizan la calidad, seguridad y durabilidad de cada tela.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px' }}>
            {[
              { cert: 'OEKO-TEX® Standard 100', desc: 'Libre de sustancias nocivas para la salud. Cada componente del producto ha sido testado y certificado por el instituto Hohenstein.' },
              { cert: 'GREENGUARD Gold', desc: 'Bajas emisiones de compuestos orgánicos volátiles (VOC). Certificación para ambientes sensibles: escuelas, hospitales y hogares.' },
              { cert: 'REACH NPS', desc: 'Cumple con el Reglamento Europeo REACH. Sin sustancias químicas peligrosas (cancerígenas, mutágenas o tóxicas) en la composición de la tela.' },
              { cert: 'SGS Grado 8 — Solidez del color', desc: 'Grado máximo (8/8) en la escala ISO de resistencia al decoloramiento por luz. Verificado por SGS, el laboratorio más reconocido del mundo.' },
              { cert: 'AATCC 16 — Class 4.5', desc: 'Estándar americano de solidez del color a la luz. Class 4.5 sobre 5 indica mínimo desvanecimiento tras larga exposición solar.' },
              { cert: 'AATCC 183 — UV 99.9%', desc: 'Mide la transmitancia UV a través de la tela. Un resultado de 99.9% confirma bloqueo casi total de radiación ultravioleta UV-A y UV-B.' },
              { cert: 'ISO 105-B02', desc: 'Norma ISO de solidez del color frente a luz artificial (lámpara xenón). Complementa al AATCC 16 para validación internacional cruzada.' },
              { cert: 'BSCI / amfori', desc: 'Auditoría de responsabilidad social de la cadena de producción. Verifica condiciones laborales justas, sin trabajo infantil ni forzado en el fabricante.' },
              { cert: 'Tratamiento Anti-insecto', desc: 'Las telas screen incorporan acabado que inhibe la proliferación de ácaros e insectos. Especialmente recomendado para personas con alergias.' },
              { cert: 'Ignifugación', desc: 'Tratamiento que dificulta la ignición y la propagación de llamas. Cumple con normas NFPA 701 y estándares equivalentes para textiles de interior.' },
              { cert: 'Lead-Free (Pb)', desc: 'Verificado sin plomo en ningún componente. El ícono Pb tachado en las fichas técnicas confirma este cumplimiento mediante análisis de laboratorio.' },
            ].map((item) => (
              <div key={item.cert} className="card-glass" style={{ padding: '16px 18px' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '6px', lineHeight: 1.3 }}>{item.cert}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-3)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CATÁLOGO DE TELAS ── */}
        <div style={{ marginBottom: '16px', paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px', marginTop: '36px' }}>
            Catálogo de telas 2026
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '28px' }}>
            Fichas técnicas completas con composición, certificaciones y referencias de color por tela.
          </p>
        </div>

        {/* Blackout */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>
          Blackout — oscurecimiento 100%
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '36px' }}>
          {[
            { nombre: 'Pinpoint', sub: '75% PVC · 25% fibra de vidrio · 580 g/m² · UV 100% · Solidez 4.5 AATCC 16 · Ignifugo', src: '/telas/enrollables/blackout/pinpoint.png' },
            { nombre: 'Ebano', sub: '93% Poliéster · 7% Linen · 208 g/m² · 2.80 m · OEKO-TEX · GREENGUARD · Anti-ácaros', src: '/telas/enrollables/blackout/ebano.png' },
            { nombre: 'Melissa', sub: '100% Poliéster · 370 g/m² · 3.00 m · UV 100% · OEKO-TEX · Lead-Free', src: '/telas/enrollables/blackout/melissa.png' },
            { nombre: 'Tiffany', sub: '100% Poliéster · 168 g/m² · UV 99.9% (AATCC 183) · Solidez ISO 105-B02 · OEKO-TEX', src: '/telas/enrollables/blackout/tiffany.png' },
            { nombre: 'Fiorella', sub: '100% Poliéster · 360 g/m² · 2.60 m · Solidez 4.5 AATCC 16 · OEKO-TEX · REACH NPS', src: '/telas/enrollables/blackout/fiorella.png' },
            { nombre: 'Jianna', sub: '100% Poliéster · 425 g/m² · 3.00 m · Solidez 4.5 AATCC 16 · OEKO-TEX · SGS', src: '/telas/enrollables/blackout/jianna.png' },
            { nombre: 'Zen', sub: '100% Poliéster · 370 g/m² · 3.00 m · UV 100% · Solidez 4.5 AATCC 16 · OEKO-TEX', src: '/telas/enrollables/blackout/zen.png' },
            { nombre: 'Text', sub: '75% PVC · 25% fibra de vidrio · 380 g/m² · OEKO-TEX · GREENGUARD · NFPA · REACH NPS', src: '/telas/enrollables/blackout/text.png' },
          ].map((t) => (
            <a key={t.nombre} href={t.src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
                <img src={t.src} alt={`Blackout ${t.nombre} – fichas técnicas y colores`} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                <div style={{ padding: '12px 14px 14px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>{t.nombre}</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)', lineHeight: 1.4 }}>{t.sub}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Screen */}
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>
          Screen — vista al exterior · privacidad diurna
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '36px' }}>
          {[
            { nombre: 'Asiático', sub: '70% PVC · 30% Poliéster · 5% apertura · Solidez 8 GRADE SGS · REACH NPS', src: '/telas/enrollables/screen/asiatico.png' },
            { nombre: 'Clásico 351', sub: '525 g/m² · 3.00 m · 1% apertura · UV 99% · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/enrollables/screen/clasico-351.png' },
            { nombre: 'Clásico 300', sub: '365 g/m² · 5.00 m · 3% apertura · Solidez 8 GRADE SGS · BSCI/amfori · OEKO-TEX', src: '/telas/enrollables/screen/clasico-300.png' },
            { nombre: 'Clásico 350', sub: '410 g/m² · 3.00 m · 5% apertura · UV 95% · Solidez 8 GRADE SGS · Anti-insecto · REACH NPS', src: '/telas/enrollables/screen/clasico-350.png' },
            { nombre: 'Clásico 550', sub: '520 g/m² · 3.00 m · 10% apertura · UV 90% · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/enrollables/screen/clasico-550.png' },
            { nombre: 'Clásico 720', sub: '420 g/m² · 2.50 m · 14% apertura · UV 86% · Solidez 8 GRADE SGS · Anti-insecto · REACH NPS', src: '/telas/enrollables/screen/clasico-720.png' },
            { nombre: 'Noa', sub: '428 g/m² · 2.50 m · 8% apertura · UV 92% · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/enrollables/screen/noa.png' },
            { nombre: 'Diseño', sub: '452 g/m² · 2.50 m · 10% apertura · UV 90% · Solidez 8 GRADE SGS · Anti-insecto · REACH NPS', src: '/telas/enrollables/screen/diseno.png' },
            { nombre: 'Flower', sub: '467 g/m² · 3.00 m · 5% apertura · UV 97% · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/enrollables/screen/flower.png' },
            { nombre: 'Kubic', sub: '467 g/m² · 3.00 m · 3% apertura · UV 100% · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/enrollables/screen/kubic.png' },
            { nombre: 'Madona', sub: '480 g/m² · 3.00 m · 4% apertura · UV 96% · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/enrollables/screen/madona.png' },
            { nombre: 'Snow', sub: '420 g/m² · 2.50 m · 4% apertura · UV 96% · Solidez 8 GRADE SGS · Anti-insecto · REACH NPS', src: '/telas/enrollables/screen/snow.png' },
            { nombre: 'Cristal', sub: '420 g/m² · 2.50 m · 4% apertura · UV 88% · Solidez 8 GRADE SGS · Anti-insecto · REACH NPS', src: '/telas/enrollables/screen/cristal.png' },
            { nombre: 'Rice II', sub: '409 g/m² · 2.50 m · 5% apertura · UV 95% · Solidez 8 GRADE SGS · Anti-insecto · REACH NPS', src: '/telas/enrollables/screen/rice-ii.png' },
            { nombre: 'Escandinavo', sub: '80% PVC · 20% Poliéster · 422 g/m² · Solidez 8 GRADE SGS · Anti-insecto · Ignifugo', src: '/telas/enrollables/screen/escandinavo.png' },
            { nombre: 'Lienzo', sub: '66% PVC · 18% PES · 16% Linen · 5% apertura · UV 95% · Solidez 8 GRADE SGS · REACH NPS', src: '/telas/enrollables/screen/lienzo.png' },
          ].map((t) => (
            <a key={t.nombre} href={t.src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
                <img src={t.src} alt={`Screen ${t.nombre} – fichas técnicas y colores`} style={{ width: '100%', display: 'block' }} />
                <div style={{ padding: '12px 14px 14px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>{t.nombre}</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)', lineHeight: 1.4 }}>{t.sub}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Privacidad + Trasluz */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '24px', marginBottom: '44px' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>
              Privacidad — semi-blackout
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {[
                { nombre: 'Ebano', sub: '91% PES · 9% Linen · 185 g/m² · 2.80 m · OEKO-TEX · GREENGUARD · NFPA · Anti-ácaros', src: '/telas/enrollables/privacidad/ebano.png' },
                { nombre: 'Manantial', sub: '100% Poliéster · 200 g/m² · 3.00 m · OEKO-TEX · Lead-Free', src: '/telas/enrollables/privacidad/manantial.png' },
                { nombre: 'Melissa', sub: '100% Poliéster · 220 g/m² · Semi-Blackout · OEKO-TEX · Lead-Free', src: '/telas/enrollables/privacidad/melissa.png' },
                { nombre: 'Zen', sub: '100% Poliéster · 180 g/m² · UV 100% · OEKO-TEX · Lead-Free', src: '/telas/enrollables/privacidad/zen.png' },
              ].map((t) => (
                <a key={t.nombre} href={t.src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
                    <img src={t.src} alt={`Privacidad ${t.nombre}`} style={{ width: '100%', display: 'block' }} />
                    <div style={{ padding: '10px 12px 12px' }}>
                      <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>{t.nombre}</p>
                      <p style={{ fontSize: '11px', color: 'var(--text-3)', lineHeight: 1.4 }}>{t.sub}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>
              Trasluz
            </p>
            <a href="/telas/enrollables/trasluz/tiffany.png" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="card-glass fabric-card" style={{ overflow: 'hidden' }}>
                <img src="/telas/enrollables/trasluz/tiffany.png" alt="Trasluz Tiffany" style={{ width: '100%', display: 'block' }} />
                <div style={{ padding: '10px 12px 12px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>Tiffany Trasluz</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)', lineHeight: 1.4 }}>100% Poliéster · 370 g/m² · UV 99.9%</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Galería de instalaciones */}
        {(fotosBlackout.length > 0 || fotosScreen.length > 0) && (
          <div style={{ marginBottom: '56px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>
              Galería de instalaciones
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '24px' }}>
              Proyectos reales instalados en Girardot y la región.
            </p>

            {fotosBlackout.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>
                  Blackout ({fotosBlackout.length} fotos)
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '6px' }}>
                  {fotosBlackout.map((src) => (
                    <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="gal-item">
                      <img src={src} alt="Instalación blackout" loading="lazy" className="gal-img" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {fotosScreen.length > 0 && (
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '12px' }}>
                  Screen Solar ({fotosScreen.length} fotos)
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '6px' }}>
                  {fotosScreen.map((src) => (
                    <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="gal-item">
                      <img src={src} alt="Instalación screen solar" loading="lazy" className="gal-img" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Estándar o Premium? Te ayudamos a elegir</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Medición y asesoría gratuita en tu espacio — sin compromiso.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Solicitar cotización <ArrowRight size={14} />
            </Link>
            <a href="https://wa.me/573202381865" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              WhatsApp
            </a>
          </div>
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
