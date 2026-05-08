import Link from 'next/link'
import { ArrowLeft, ArrowRight, Printer, Layers, Ruler, Star, Palette, Image as ImageIcon } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

/* ─── ESPECIFICACIONES TÉCNICAS ───────────────────── */
const specs = [
  { Icon: Printer,    label: 'Tecnología',         value: 'Impresión digital de alta resolución' },
  { Icon: Layers,     label: 'Base compatible',     value: 'Tela Blackout · Screen · Traslúcida' },
  { Icon: Ruler,      label: 'Ancho máximo',        value: 'Según tela base seleccionada' },
  { Icon: Star,       label: 'Resolución',          value: 'Alta definición (HD) sin pérdida de color' },
  { Icon: Palette,    label: 'Catálogo de diseños', value: 'Más de 400 diseños en 7 categorías' },
  { Icon: ImageIcon,  label: 'Imagen personalizada', value: 'Diseño propio bajo consulta' },
]

/* ─── CATEGORÍAS ──────────────────────────────────── */
const categorias = [
  {
    codigo:   'DSDEP',
    nombre:   'Deportes',
    color:    '#7C3AED',
    colorBg:  'rgba(124,58,237,0.08)',
    desc:     'Fútbol, automovilismo, ciclismo, atletismo y más. Perfecta para habitaciones, gimnasios y espacios juveniles con pasión por el deporte.',
    ejemplos: ['DSDEP001', 'DSDEP003', 'DSDEP005', 'DSDEP006', 'DSDEP011', 'DSDEP013', 'DSDEP015', 'DSDEP016', 'DSDEP017', 'DSDEP023', 'DSDEP025', 'DSDEP027', 'DSDEP030', 'DSDEP061', 'DSDEP062'],
    paginas:  ['/estampados/page_003.png'],
    portada:  '/estampados/page_002.png',
  },
  {
    codigo:   'DSFLO',
    nombre:   'Flor & Naturaleza',
    color:    '#059669',
    colorBg:  'rgba(5,150,105,0.08)',
    desc:     'Flores, árboles, mariposas, bambú y paisajes naturales estilizados. Ideal para salas, comedores y espacios que buscan frescura y elegancia.',
    ejemplos: ['DSFLO001', 'DSFLO004', 'DSFLO015', 'DSFLO020', 'DSFLO021', 'DSFLO022', 'DSFLO030', 'DSFLO031', 'DSFLO038', 'DSFLO039', 'DSFLO054', 'DSFLO055', 'DSFLO066', 'DSFLO068', 'DSFLO082', 'DSFLO084', 'DSFLO085', 'DSFLO096', 'DSFLO100', 'DSFLO115', 'DSFLO117', 'DSFLO128', 'DSFLO133', 'DSFLO145', 'DSFLO149', 'DSFLO167', 'DSFLO179', 'DSFLO181', 'DSFLO202', 'DSFLO262', 'DSFLO278'],
    paginas:  ['/estampados/page_005.png', '/estampados/page_006.png', '/estampados/page_007.png', '/estampados/page_008.png'],
    portada:  '/estampados/page_004.png',
  },
  {
    codigo:   'DSINF',
    nombre:   'Infantil',
    color:    '#DC2626',
    colorBg:  'rgba(220,38,38,0.07)',
    desc:     'Animales tiernos, unicornios, dinosaurios, princesas, superhéroes, cohetes espaciales y personajes de fantasía. Diseñada para cuartos de niños y niñas.',
    ejemplos: ['DSINF003', 'DSINF007', 'DSINF011', 'DSINF012', 'DSINF014', 'DSINF028', 'DSINF039', 'DSINF049', 'DSINF053', 'DSINF055', 'DSINF060', 'DSINF068', 'DSINF069', 'DSINF076', 'DSINF079', 'DSINF080', 'DSINF082', 'DSINF083', 'DSINF085', 'DSINF088', 'DSINF090', 'DSINF091', 'DSINF092', 'DSINF105', 'DSINF106', 'DSINF113', 'DSINF118', 'DSINF124', 'DSINF128', 'DSINF130', 'DSINF131', 'DSINF138', 'DSINF141', 'DSINF142', 'DSINF144', 'DSINF146'],
    paginas:  ['/estampados/page_010.png', '/estampados/page_011.png', '/estampados/page_012.png', '/estampados/page_013.png'],
    portada:  '/estampados/page_009.png',
  },
  {
    codigo:   'DSMUS',
    nombre:   'Música',
    color:    '#9333EA',
    colorBg:  'rgba(147,51,234,0.08)',
    desc:     'Notas musicales, instrumentos, vinilos, guitarras, pianos y danza. Para estudios de música, salas de entretenimiento y habitaciones de melómanos.',
    ejemplos: ['DSMUS001', 'DSMUS002', 'DSMUS003', 'DSMUS006', 'DSMUS007', 'DSMUS008', 'DSMUS011', 'DSMUS012', 'DSMUS019', 'DSMUS020', 'DSMUS023', 'DSMUS026', 'DSMUS033', 'DSMUS037', 'DSMUS040'],
    paginas:  ['/estampados/page_015.png'],
    portada:  '/estampados/page_014.png',
  },
  {
    codigo:   'DSTEE',
    nombre:   'Teens',
    color:    '#DB2777',
    colorBg:  'rgba(219,39,119,0.07)',
    desc:     'Moda, frases motivacionales, atrapasueños, búhos, bicicletas y arte juvenil. Perfecta para habitaciones de adolescentes con estilo propio.',
    ejemplos: ['DSTEE001', 'DSTEE006', 'DSTEE007', 'DSTEE008', 'DSTEE017', 'DSTEE018', 'DSTEE019', 'DSTEE020', 'DSTEE021', 'DSTEE022', 'DSTEE024', 'DSTEE025', 'DSTEE034', 'DSTEE035', 'DSTEE036'],
    paginas:  ['/estampados/page_017.png'],
    portada:  '/estampados/page_016.png',
  },
  {
    codigo:   'DSPAI',
    nombre:   'Paisaje',
    color:    '#0284C7',
    colorBg:  'rgba(2,132,199,0.08)',
    desc:     'Torre Eiffel, Londres, cascadas, playas, montañas, auroras boreales y paisajes fotográficos de alta resolución de todo el mundo.',
    ejemplos: ['DSPAI001', 'DSPAI002', 'DSPAI011', 'DSPAI025', 'DSPAI032', 'DSPAI040', 'DSPAI046', 'DSPAI047', 'DSPAI048', 'DSPAI049', 'DSPAI052', 'DSPAI060', 'DSPAI076', 'DSPAI079', 'DSPAI099', 'DSPAI105', 'DSPAI107', 'DSPAI111', 'DSPAI112', 'DSPAI114', 'DSPAI128', 'DSPAI147', 'DSPAI148', 'DSPAI164', 'DSPAI168', 'DSPAI170', 'DSPAI175', 'DSPAI177', 'DSPAI178', 'DSPAI179', 'DSPAI180', 'DSPAI181', 'DSPAI182', 'DSPAI183'],
    paginas:  ['/estampados/page_019.png', '/estampados/page_020.png', '/estampados/page_021.png'],
    portada:  '/estampados/page_018.png',
  },
  {
    codigo:   'DSANI',
    nombre:   'Animales',
    color:    '#B45309',
    colorBg:  'rgba(180,83,9,0.08)',
    desc:     'Fotografía y arte de tigres, leones, caballos, lobos, mariposas, águilas, leopardos y más. Nueva categoría 2023 con imágenes de alta definición.',
    ejemplos: ['DSANI001', 'DSANI002', 'DSANI003', 'DSANI004', 'DSANI005', 'DSANI006', 'DSANI007', 'DSANI008', 'DSANI009', 'DSANI010', 'DSANI011', 'DSANI016', 'DSANI017', 'DSANI020', 'DSANI021', 'DSANI024', 'DSANI027', 'DSANI028', 'DSANI030', 'DSANI031', 'DSANI033', 'DSANI034', 'DSANI039', 'DSANI040', 'DSANI041', 'DSANI042', 'DSANI044', 'DSANI045', 'DSANI047', 'DSANI052', 'DSANI056', 'DSANI057', 'DSANI060', 'DSANI062', 'DSANI064', 'DSANI066', 'DSANI074', 'DSANI076', 'DSANI079', 'DSANI088', 'DSANI090', 'DSANI092', 'DSANI096', 'DSANI099', 'DSANI100', 'DSANI110', 'DSANI112'],
    paginas:  ['/estampados/page_023.png', '/estampados/page_024.png', '/estampados/page_025.png', '/estampados/page_026.png'],
    portada:  '/estampados/page_022.png',
    nuevo:    true,
  },
]

/* ─── TELAS BASE ──────────────────────────────────── */
const telasBase = [
  { nombre: 'Blackout',    desc: 'Oscurecimiento total · ideal dormitorios' },
  { nombre: 'Screen',      desc: 'Vista al exterior · privacidad diurna' },
  { nombre: 'Traslúcida',  desc: 'Luz difusa · ambientes cálidos' },
]

export default function EstampadosPage() {
  const cfg = getImagesConfig()
  const heroImg = cfg.productos_hero?.['estampados'] || ''
  return (
    <div className="page-top">
      <div className="container-site">

        <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none', marginBottom: '36px' }}>
          <ArrowLeft size={14} /> Volver a productos
        </Link>

        {/* Hero */}
        <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '36px', height: '280px', border: '1px solid rgba(201,169,110,0.18)' }}>
          {heroImg ? (
            <img src={heroImg} alt="Estampados" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '1fr' }}>
              {[
                '/safra/estampados/estampado-flower.jpg',
                '/safra/estampados/estampado-escandinavo.jpg',
                '/safra/estampados/estampado-kubic.jpg',
                '/safra/estampados/estampado-madona.jpg',
              ].map((src, i) => (
                <div key={i} style={{ overflow: 'hidden' }}>
                  <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.90) 0%, rgba(8,14,26,0.65) 50%, rgba(8,14,26,0.3) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 56px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px', fontWeight: 700 }}>Catálogo Diseños Safra 2023</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, lineHeight: 1.1, color: '#EEF2FF', marginBottom: '12px' }}>
              Persianas con<br /><span style={{ color: 'var(--gold-light)', fontWeight: 500 }}>impresión digital personalizada</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(238,242,255,0.6)', maxWidth: '480px' }}>
              +400 diseños en 7 categorías · Imágenes 123RF y Shutterstock · Alta resolución
            </p>
          </div>
        </div>

        {/* Header + Specs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '52px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Impresión Digital</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
              Diseño único en <span className="text-gold-gradient">cada persiana</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
              Convierte cualquier persiana enrollable en una obra de arte personalizada. Selecciona uno de los más de 400 diseños del catálogo Safra —o trae tu propia imagen— e imprimimos directamente sobre la tela con tecnología de alta resolución.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, marginBottom: '24px' }}>
              Diseños licenciados de 123RF y Shutterstock. Disponible sobre tela Blackout, Screen o Traslúcida. Cotiza indicando el código del diseño elegido.
            </p>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar con mi diseño <ArrowRight size={14} />
            </Link>
          </div>
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

        {/* Muestras de diseños decorativos */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Muestras screen decorativo</p>
          <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '18px' }}>Diseños de serie en stock — disponibles sin mínimo de metraje</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
            {[
              { src: '/safra/estampados/estampado-flower.jpg',     nombre: 'Flower',     sub: 'Beige' },
              { src: '/safra/estampados/estampado-escandinavo.jpg',nombre: 'Escandinavo',sub: 'Gris' },
              { src: '/safra/estampados/estampado-madona.jpg',     nombre: 'Madona',     sub: 'Negro' },
              { src: '/safra/estampados/estampado-kubic.jpg',      nombre: 'Kubic',      sub: 'Gris' },
              { src: '/safra/estampados/estampado-noa.jpg',        nombre: 'Noa',        sub: 'Café' },
              { src: '/safra/estampados/estampado-diseno.jpg',     nombre: 'Diseño',     sub: 'White Linen' },
              { src: '/safra/estampados/estampado-privacidad.jpg', nombre: 'Privacidad', sub: 'Zen Gris' },
              { src: '/safra/estampados/estampado-margaritas.jpg', nombre: 'Margaritas', sub: 'Blanco' },
              { src: '/safra/estampados/estampado-hojas.jpg',      nombre: 'Hojas',      sub: 'Blanco' },
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

        {/* Telas base */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          Telas base disponibles
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '52px' }}>
          {telasBase.map((t) => (
            <div key={t.nombre} className="card-glass" style={{ padding: '20px 24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{t.nombre}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.5 }}>{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Cómo funciona */}
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
          ¿Cómo funciona?
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '64px' }}>
          {[
            { n: '01', t: 'Elige el diseño',     d: 'Navega las 7 categorías y anota el código del diseño que más te gusta.' },
            { n: '02', t: 'Solicita cotización', d: 'Escríbenos por WhatsApp o usa el formulario indicando código y medidas.' },
            { n: '03', t: 'Fabricación HD',       d: 'Imprimimos tu diseño en alta resolución sobre la tela base seleccionada.' },
            { n: '04', t: 'Instalación incluida', d: 'Nuestro equipo instala la persiana en tu espacio profesionalmente.' },
          ].map((paso) => (
            <div key={paso.n} className="card-glass" style={{ padding: '22px 24px' }}>
              <p style={{ fontSize: '28px', fontWeight: 700, color: 'rgba(201,169,110,0.25)', lineHeight: 1, marginBottom: '10px', fontVariantNumeric: 'tabular-nums' }}>{paso.n}</p>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{paso.t}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.55 }}>{paso.d}</p>
            </div>
          ))}
        </div>

        {/* ══════════ CATÁLOGO POR CATEGORÍAS ══════════ */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '52px' }}>
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>
              Catálogo completo
            </p>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '10px' }}>
              7 categorías · <span className="text-gold-gradient">+400 diseños disponibles</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-3)', maxWidth: '600px' }}>
              Cada diseño tiene un código único. Al cotizar, indícanos el código y la tela base que prefieres.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {categorias.map((cat) => (
              <div key={cat.codigo}>

                {/* Encabezado de categoría */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: cat.color, background: cat.colorBg, padding: '3px 10px', borderRadius: '99px', border: `1px solid ${cat.color}30` }}>
                        {cat.codigo}
                      </span>
                      {cat.nuevo && (
                        <span className="badge" style={{ fontSize: '10px' }}>Nueva categoría 2023</span>
                      )}
                    </div>
                    <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.1, marginBottom: '6px' }}>
                      Diseño Safra <strong style={{ fontWeight: 600 }}>{cat.nombre}</strong>
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65, maxWidth: '540px' }}>{cat.desc}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontSize: '11px', color: 'var(--text-3)', marginBottom: '2px' }}>Diseños en esta categoría</p>
                    <p style={{ fontSize: '22px', fontWeight: 700, color: cat.color }}>{cat.ejemplos.length}+</p>
                  </div>
                </div>

                {/* Grids de diseños del catálogo */}
                <div style={{ display: 'grid', gridTemplateColumns: cat.paginas.length > 1 ? `repeat(${Math.min(cat.paginas.length, 2)}, 1fr)` : '1fr', gap: '12px', marginBottom: '16px' }}>
                  {cat.paginas.map((src, i) => (
                    <a key={i} href={src} target="_blank" rel="noopener noreferrer" title="Clic para ampliar" style={{ display: 'block', textDecoration: 'none', borderRadius: '12px', overflow: 'hidden', cursor: 'zoom-in' }} className="card-glass">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`Catálogo ${cat.nombre} — diseños ${cat.codigo}`}
                        className="catalog-img"
                        style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                      />
                      <div style={{ padding: '8px 14px', background: 'rgba(0,0,0,0.03)', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                        <span style={{ fontSize: '11px', color: 'var(--text-3)' }}>Clic para ampliar a pantalla completa</span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Códigos de ejemplo */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {cat.ejemplos.slice(0, 20).map((code) => (
                    <span key={code} style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--text-3)', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '6px', padding: '3px 8px' }}>
                      {code}
                    </span>
                  ))}
                  {cat.ejemplos.length > 20 && (
                    <span style={{ fontSize: '11px', color: 'var(--text-3)', padding: '3px 8px' }}>
                      +{cat.ejemplos.length - 20} más…
                    </span>
                  )}
                </div>

                <Link href="/cotizar" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: cat.color, textDecoration: 'none', fontWeight: 600 }}>
                  Cotizar diseño {cat.nombre} <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen personalizada */}
        <div style={{ marginTop: '64px', marginBottom: '44px' }} className="card-glass">
          <div style={{ padding: '28px 36px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>¿Tienes tu propia imagen?</p>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.2 }}>Estampado con diseño personalizado</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.65 }}>
                Puedes enviarnos tu propia imagen o vector en alta resolución y la imprimimos en tu persiana. Ideal para proyectos corporativos, branding, arte propio o fotografías personales. Consulta con tu asesor las condiciones de archivo.
              </p>
            </div>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px', whiteSpace: 'nowrap' }}>
              Consultar <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Ya elegiste tu diseño?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Indícanos el código, las medidas y la tela base — te cotizamos de inmediato.</p>
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
        .catalog-img { transition: transform 0.3s ease; }
        a:hover .catalog-img { transform: scale(1.02); }
      `}</style>
    </div>
  )
}
