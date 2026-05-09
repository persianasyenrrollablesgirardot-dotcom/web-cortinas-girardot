'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const submenuGrupos = [
  {
    titulo: 'Sistemas enrollables',
    items: [
      { href: '/productos/enrollables',    label: 'Persiana Enrollable',  sub: 'Blackout · Screen · Premium' },
      { href: '/productos/sheer-elegance', label: 'Sheer Elegance',       sub: 'Triple acción · Franjas' },
      { href: '/productos/romana',         label: 'Romana',               sub: 'Tradicional · Top Down' },
    ],
  },
  {
    titulo: 'Franjas y verticales',
    items: [
      { href: '/productos/hanas',          label: 'Sistema Hanas',        sub: 'Curvas en S · Fantasía/Royal' },
      { href: '/productos/vintage',        label: 'Sistema Vintage',      sub: 'Lamas plegables' },
      { href: '/productos/verticales',     label: 'Persiana Vertical',    sub: 'Hasta 6.0 m · Riel aluminio' },
    ],
  },
  {
    titulo: 'Panel y cortina',
    items: [
      { href: '/productos/panel',          label: 'Panel & Panel Dúo',    sub: 'Riel 4/5/6 vías' },
      { href: '/productos/cortina',        label: 'Colección Cortina',    sub: 'Luxury · Brisá · LaMar' },
      { href: '/productos/riel-panel',     label: 'Riel Armado Panel ML', sub: '4 · 5 · 6 · 7 vías · Por ML' },
      { href: '/productos/riel-cortina',   label: 'Riel Armado Cortina ML', sub: 'Super · Pesado · Luxury · Flexi' },
    ],
  },
  {
    titulo: 'Smart & complementos',
    items: [
      { href: '/productos/motorizacion',   label: 'Motorización',         sub: 'Wi-Fi · App Tuya · Voz' },
      { href: '/productos/riel-motor',     label: 'Riel Motor Cortina/Panel', sub: 'Motor Safra · RF · Por ML' },
      { href: '/productos/peliculas',      label: 'Películas Solares',    sub: 'UV · Seguridad · HAVERKAMP' },
      { href: '/productos/papel',          label: 'Papel de Colgadura',   sub: 'Living I · II · Tendencias' },
      { href: '/productos/lienzo',         label: 'Línea Lienzo',         sub: 'Arte digital · 4 formatos' },
    ],
  },
  {
    titulo: 'Pérgolas & exteriores',
    items: [
      { href: '/productos/pergolas',             label: 'Pérgolas Palillería',  sub: 'Paredón · Lobby · Doble Lobby' },
      { href: '/productos/toldo-romano',         label: 'Toldo Romano',         sub: 'Corredizo · 3 acabados · Solar Screen' },
      { href: '/productos/accesorios-pergolas',  label: 'Accesorios Pérgolas',  sub: 'Tubos · Bridas · Poleas' },
      { href: '/productos/accesorios-toldos',    label: 'Accesorios Toldos',    sub: 'Brazos · Motores · Telas' },
    ],
  },
  {
    titulo: 'Impresión digital',
    items: [
      { href: '/productos/estampados',     label: 'Persianas Estampadas', sub: '+400 diseños · 7 categorías' },
    ],
  },
  {
    titulo: 'Accesorios Persianas',
    items: [
      { href: '/productos/accesorios-pel', label: 'Accesorios Persianas', sub: '259 ref · 11 líneas' },
    ],
  },
]

const links = [
  { href: '/',          label: 'Inicio' },
  { href: '/productos', label: 'Productos', hasSub: true },
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

  const linkColor = (href: string) => {
    if (active(href)) return 'var(--gold)'
    return showSolid ? 'var(--text-2)' : 'rgba(255,255,255,0.88)'
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
                  position: 'absolute', top: '100%', left: '50%',
                  transform: subOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(6px)',
                  paddingTop: '8px',           /* zona invisible que evita perder el hover */
                  width: '1080px',
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
                    padding: '20px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    gap: '6px',
                  }}>
                    {submenuGrupos.map((grupo) => (
                      <div key={grupo.titulo}>
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

                    {/* Footer del mega-menu */}
                    <div style={{ gridColumn: '1 / -1', marginTop: '8px', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontSize: '12px', color: 'var(--text-3)' }}>15 líneas de producto · Catálogo 2026</p>
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
            color: showSolid ? 'var(--text-3)' : 'rgba(255,255,255,0.7)',
            textAlign: 'right'
          }}>
            Girardot · Colombia
          </span>
        </Link>
      </div>

      {/* Mobile menu */}
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '100vh' : '0',
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
                  maxHeight: mobileSubOpen === link.label ? '2000px' : '0', 
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
