'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const submenuGrupos = [
  {
    titulo: 'Persianas y cortinas · Control de luz',
    items: [
      { href: '/productos/enrollables',    label: 'Enrollable Screen & Blackout',  sub: 'Calor fuera, vista adentro · Premium' },
      { href: '/productos/sheer-elegance', label: 'Sheer Elegance · Día y noche', sub: 'Franjas que abren y cierran la luz' },
      { href: '/productos/romana',         label: 'Romana · Pliegues clásicos', sub: 'Tradicional · Top Down' },
      { href: '/productos/hanas',          label: 'Hanas · Curvas en S',  sub: 'Fantasía · Royal' },
      { href: '/productos/vintage',        label: 'Vintage · Lamas plegables', sub: 'Cortina y persiana en una' },
      { href: '/productos/verticales',     label: 'Vertical · Grandes ventanales', sub: 'Hasta 6,0 m de ancho' },
      { href: '/productos/panel',          label: 'Panel japonés · Puertas corredizas', sub: 'Panel · Panel Dúo' },
      { href: '/productos/cortina',        label: 'Cortinas · Colección 2026', sub: 'Luxury · Brisá · LaMar' },
      { href: '/productos/estampados',     label: 'Persianas estampadas · Tu diseño', sub: '+400 diseños o tu propia imagen' },
    ],
  },
  {
    titulo: 'Smart Shade · Motorización y domótica',
    items: [
      { href: '/productos/motorizacion',   label: 'Persianas motorizadas · Wi-Fi y voz', sub: 'App · Alexa · Google · sin hub' },
      { href: '/productos/riel-motor',     label: 'Cortinas motorizadas · Riel con motor', sub: 'Cortina y panel · motor Safra' },
    ],
  },
  {
    titulo: 'Repuestos & Rieles · Accesorios de persianas',
    items: [
      { href: '/productos/accesorios-pel', label: 'Repuestos de persianas', sub: '259 referencias · 11 sistemas' },
      { href: '/productos/riel-panel',     label: 'Riel para panel japonés', sub: '4 · 5 · 6 · 7 vías · por metro' },
      { href: '/productos/riel-cortina',   label: 'Riel para cortina',    sub: 'Super · Pesado · Luxury · Flexi' },
    ],
  },
  {
    titulo: 'Pérgolas metálicas · Techos para vivir afuera',
    items: [
      { href: '/productos/pergolas-metalicas',   label: 'Sistemas de pérgola metálica', sub: '14 sistemas · fabricación propia en acero' },
      { href: '/productos/pergolas-metalicas/accesorios', label: 'Ferretería de pérgola', sub: '108 piezas con foto · perfilería, anclajes, tornillería' },
      { href: '/exteriores',                     label: 'Soluciones por espacio', sub: 'Terraza · parqueadero · fachada · jardín' },
    ],
  },
  {
    titulo: 'Estructuras metálicas · Acero con cálculo',
    items: [
      { href: '/estructuras',              label: 'Escaleras, mezzanines y cubiertas', sub: '8 tipos de obra · diseño firmado' },
    ],
  },
  {
    titulo: 'Divisiones de baño · Solo vidrio templado',
    items: [
      { href: '/productos/divisiones-bano', label: 'Divisiones de baño en vidrio templado', sub: '7 sistemas · NTC 1578 · sin marco perimetral' },
    ],
  },
  {
    titulo: 'Toldos · Sombra retráctil',
    items: [
      { href: '/productos/toldos-brazos',        label: 'Toldo de brazos extensibles', sub: 'Vértice · Octopus · Aqua Rain · Mykonos' },
      { href: '/productos/toldo-romano',         label: 'Toldo romano corredizo', sub: 'Solar Screen · 3 acabados' },
      { href: '/productos/pergolas',             label: 'Pérgola de lona · Palillería', sub: 'Paredón · Lobby · Doble Lobby' },
      { href: '/productos/accesorios-toldos',    label: 'Repuestos de toldo',  sub: 'Brazos · motores · lonas' },
      { href: '/productos/accesorios-pergolas',  label: 'Repuestos de pérgola de lona',  sub: 'Tubos · bridas · poleas' },
    ],
  },
  {
    titulo: 'Mobiliario de exterior · Terraza y piscina',
    items: [
      { href: '/exteriores/mobiliario',    label: 'Muebles de exterior', sub: 'Mimbre · ratán sintético · cordón náutico · asoleadoras · madera maciza' },
    ],
  },
  {
    titulo: 'Películas solares · Vidrio inteligente',
    items: [
      { href: '/productos/peliculas',      label: 'Película solar y de seguridad', sub: 'HAVERKAMP · calor, UV, seguridad' },
    ],
  },
  {
    titulo: 'Lienzos · Arte para la pared',
    items: [
      { href: '/productos/lienzo',         label: 'Lienzos decorativos',  sub: 'Arte digital · 4 formatos' },
    ],
  },
  {
    titulo: 'Papel de colgadura · Paredes con textura',
    items: [
      { href: '/productos/papel',          label: 'Papel de colgadura Safra Living', sub: 'Living I · II · Tendencias' },
    ],
  },
]

const links = [
  { href: '/',          label: 'Inicio' },
  { href: '/productos', label: 'Productos', hasSub: true },
  { href: '/productos/pergolas-metalicas', label: 'Pérgolas' },
  { href: '/estructuras', label: 'Estructuras' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/nosotros',  label: 'Nosotros' },
  { href: '/blog',      label: 'Blog' },
  { href: '/contacto',  label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [subOpen, setSubOpen]   = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const isHome    = pathname === '/'
  const showSolid = !isHome || scrolled

  const active = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  // Sobre el hero oscuro de la home (sin desplazar) los enlaces van claros
  const sobreOscuro = isHome && !scrolled
  const linkColor = (href: string) => {
    if (active(href)) return sobreOscuro ? '#E8C76A' : 'var(--gold)'
    return sobreOscuro ? 'rgba(243,239,230,0.82)' : 'var(--text-2)'
  }

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setOpen(false)
    setMobileSubOpen(null)
  }, [pathname])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      background: showSolid ? 'rgba(247,245,241,0.97)' : 'transparent',
      backdropFilter: showSolid ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: showSolid ? 'blur(20px)' : 'none',
      borderBottom: showSolid ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
      boxShadow: showSolid ? '0 2px 20px rgba(0,0,0,0.07)' : 'none',
    }}>
      <div className="container-site" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '84px' }}>

        {/* Nav desktop */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden-mobile">
          {links.map((link) =>
            link.hasSub ? (
              /* ── Productos con mega-menu ── */
              <div
                key={link.href}
                style={{ position: 'relative' }}
                onMouseEnter={() => setSubOpen(true)}
                onMouseLeave={() => setSubOpen(false)}
              >
                <button style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '9px 15px', fontSize: '14px', letterSpacing: '0.01em',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: linkColor(link.href),
                  borderRadius: '10px', fontFamily: 'inherit',
                  transition: 'color 0.2s',
                }}>
                  {link.label}
                  <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: subOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>

                {/* Mega-menu — sin gap: paddingTop crea el espacio visual sin romper hover */}
                <div style={{
                  position: 'absolute', top: '100%', left: '-100px', /* Centrado manual respecto al link */
                  transform: subOpen ? 'translateY(0)' : 'translateY(6px)',
                  paddingTop: '12px', /* zona invisible que evita perder el hover */
                  width: '880px', /* Reducido de 1080px */
                  opacity: subOpen ? 1 : 0,
                  visibility: subOpen ? 'visible' : 'hidden',
                  transition: 'opacity 0.18s ease, transform 0.18s ease, visibility 0.18s',
                  pointerEvents: subOpen ? 'auto' : 'none',
                  zIndex: 200,
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.99)',
                    border: '1px solid rgba(0,0,0,0.09)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.13)',
                    padding: '24px',
                    maxHeight: 'calc(100vh - 110px)', /* con 11 grupos el panel ya no cabe en ventanas bajas */
                    overflowY: 'auto',
                  }}>
                    {/* Mosaico de columnas: un grid de filas iguales dejaba huecos enormes
                        porque "Persianas y cortinas" (9 enlaces) estiraba toda la fila
                        debajo de grupos de 2-4 enlaces. Columnas CSS acomodan cada grupo
                        según su propio alto, sin huecos. */}
                    <div style={{ columnCount: 4, columnGap: '16px' }}>
                      {submenuGrupos.map((grupo) => (
                        <div key={grupo.titulo} style={{ breakInside: 'avoid', marginBottom: '20px' }}>
                          <p style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px', padding: '0 10px' }}>
                            {grupo.titulo}
                          </p>
                          {grupo.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setSubOpen(false)}
                              style={{
                                display: 'block', padding: '9px 10px', borderRadius: '10px',
                                textDecoration: 'none',
                                background: pathname === item.href ? 'rgba(184,145,42,0.08)' : 'transparent',
                                transition: 'background 0.15s',
                              }}
                              className="mega-item"
                            >
                              <p style={{ fontSize: '13px', fontWeight: 600, color: pathname === item.href ? 'var(--gold-dark)' : 'var(--text)', lineHeight: 1.2, marginBottom: '2px' }}>
                                {item.label}
                              </p>
                              <p style={{ fontSize: '11px', color: 'var(--text-3)', lineHeight: 1.3 }}>
                                {item.sub}
                              </p>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Footer del mega-menu */}
                    <div style={{ marginTop: '8px', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontSize: '12px', color: 'var(--text-3)' }}>16 líneas de producto · Catálogo 2026</p>
                      <Link href="/productos" onClick={() => setSubOpen(false)} style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', textDecoration: 'none' }}>
                        Ver catálogo completo →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} style={{
                padding: '9px 15px', fontSize: '14px', letterSpacing: '0.01em',
                color: linkColor(link.href),
                borderRadius: '10px', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              className="nav-link">
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="hidden-mobile">
          <Link href="/cotizar" className="btn-primary" style={{ padding: '11px 22px', fontSize: '14px' }}>
            Cotizar ahora
          </Link>
        </div>

        {/* Mobile toggle - MOVED TO LEFT IN ROW */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{
            background: 'var(--gold)', 
            border: 'none',
            boxShadow: '0 4px 12px rgba(184,145,42,0.4)',
            cursor: 'pointer', padding: '10px', borderRadius: '12px',
            color: '#FFFFFF',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, order: 0
          }}
        >
          {open ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>

        {/* Logo - MOVED TO RIGHT IN ROW (via order) */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1, gap: '2px', flexShrink: 1, minWidth: 0, order: 1 }}>
          <span className="text-gold-gradient logo-text" style={{ fontWeight: 800, letterSpacing: '0.02em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Fábrica de Cortinas
          </span>
          <span className="logo-sub" style={{
            textTransform: 'uppercase', fontWeight: 400,
            color: sobreOscuro ? 'rgba(243,239,230,0.7)' : 'var(--text-3)',
            textAlign: 'right'
          }}>
            Girardot · Colombia
          </span>
        </Link>
      </div>

      {/* Mobile menu */}
      <div style={{
        overflow: 'hidden',
        // El panel arranca en top:84px, así que 100vh se sale 84px por debajo de la pantalla
        // y las últimas opciones quedaban fuera de alcance al hacer scroll.
        maxHeight: open ? 'calc(100vh - 84px)' : '0',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: 'var(--surface)',
        borderTop: open ? '1px solid rgba(0,0,0,0.07)' : 'none',
        position: 'absolute', top: '84px', left: 0, right: 0,
        boxShadow: open ? '0 20px 40px rgba(0,0,0,0.1)' : 'none',
        overflowY: 'auto',
      }}>
        <div className="container-site" style={{ padding: '8px 24px 40px' }}>
          {links.map((link) => (
            <div key={link.href} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link 
                  href={link.hasSub ? '#' : link.href} 
                  onClick={(e) => {
                    if (link.hasSub) {
                      e.preventDefault();
                      setMobileSubOpen(mobileSubOpen === link.label ? null : link.label);
                    } else {
                      setOpen(false);
                    }
                  }} 
                  style={{
                    display: 'block', padding: '16px 0', fontSize: '17px', flex: 1,
                    color: active(link.href) ? 'var(--gold-dark)' : 'var(--text)',
                    textDecoration: 'none',
                    fontWeight: active(link.href) || (link.hasSub && mobileSubOpen === link.label) ? 600 : 400,
                  }}
                >
                  {link.label}
                </Link>
                {link.hasSub && (
                  <button 
                    onClick={() => setMobileSubOpen(mobileSubOpen === link.label ? null : link.label)}
                    style={{ background: 'none', border: 'none', padding: '16px', color: 'var(--text-3)' }}
                  >
                    <ChevronDown size={18} style={{ transform: mobileSubOpen === link.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                  </button>
                )}
              </div>
              
              {link.hasSub && (
                <div style={{ 
                  // 6000px, no 2000: con 10 grupos el submenú mide ~2030px y el límite viejo
                  // lo cortaba justo en «Mobiliario de exterior», escondiendo también
                  // películas, lienzos y papel de colgadura.
                  maxHeight: mobileSubOpen === link.label ? '6000px' : '0',
                  overflow: 'hidden', 
                  transition: 'max-height 0.5s ease-in-out',
                  background: 'rgba(0,0,0,0.02)',
                  margin: '0 -24px',
                  padding: mobileSubOpen === link.label ? '8px 24px 16px' : '0 24px'
                }}>
                  {submenuGrupos.map((grupo) => (
                    <div key={grupo.titulo} style={{ marginBottom: '16px' }}>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                        {grupo.titulo}
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px' }}>
                        {grupo.items.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
                            display: 'block', padding: '10px 12px', fontSize: '14px', borderRadius: '8px',
                            color: pathname === item.href ? 'var(--gold-dark)' : 'var(--text-2)',
                            background: pathname === item.href ? 'rgba(184,145,42,0.06)' : 'transparent',
                            textDecoration: 'none',
                          }}>
                            <span style={{ fontWeight: 600, display: 'block' }}>{item.label}</span>
                            <span style={{ fontSize: '11px', color: 'var(--text-3)' }}>{item.sub}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link href="/productos" onClick={() => setOpen(false)} style={{ display: 'block', textAlign: 'center', padding: '12px', color: 'var(--gold)', fontWeight: 600, fontSize: '14px', textDecoration: 'none', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '8px' }}>
                    Ver catálogo completo →
                  </Link>
                </div>
              )}
            </div>
          ))}
          <div style={{ marginTop: '32px' }}>
            <Link href="/cotizar" onClick={() => setOpen(false)} className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '16px' }}>
              Cotizar ahora
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
          .logo-text { fontSize: 26px; }
          .logo-sub { fontSize: 11px; letterSpacing: 0.5em; }
        }
        @media (max-width: 1023px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
          .logo-text { fontSize: clamp(14px, 4.5vw, 20px); }
          .logo-sub { fontSize: 9px; letterSpacing: 0.15em; }
        }
        @media (max-width: 360px) {
          .logo-sub { display: none; }
        }
        .nav-link:hover { color: var(--text) !important; }
        .mega-item:hover { background: rgba(0,0,0,0.04) !important; }
      `}</style>
    </header>
  )
}
