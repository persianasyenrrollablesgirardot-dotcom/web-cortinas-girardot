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

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1, gap: '4px' }}>
          <span className="text-gold-gradient" style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Fábrica de Cortinas
          </span>
          <span style={{
            fontSize: '11px', letterSpacing: '0.5em', textTransform: 'uppercase', fontWeight: 400,
            color: showSolid ? 'var(--text-3)' : 'rgba(255,255,255,0.55)',
          }}>
            Girardot · Colombia
          </span>
        </Link>

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

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
            color: showSolid ? 'var(--text-2)' : 'rgba(255,255,255,0.85)',
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '900px' : '0',
        transition: 'max-height 0.35s ease',
        background: 'rgba(247,245,241,0.99)',
        borderTop: open ? '1px solid rgba(0,0,0,0.07)' : 'none',
      }}>
        <div className="container-site" style={{ padding: '16px 24px 28px' }}>
          {links.map((link) => (
            <div key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)} style={{
                display: 'block', padding: '13px 0', fontSize: '16px',
                color: active(link.href) ? 'var(--gold-dark)' : 'var(--text)',
                textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.06)',
                fontWeight: active(link.href) ? 600 : 400,
              }}>
                {link.label}
              </Link>
              {link.hasSub && (
                <div style={{ paddingLeft: '16px', paddingBottom: '4px' }}>
                  {submenuGrupos.map((grupo) => (
                    <div key={grupo.titulo}>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '8px 0 4px' }}>
                        {grupo.titulo}
                      </p>
                      {grupo.items.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
                          display: 'block', padding: '8px 0', fontSize: '14px',
                          color: pathname === item.href ? 'var(--gold-dark)' : 'var(--text-2)',
                          textDecoration: 'none',
                        }}>
                          — {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/cotizar" onClick={() => setOpen(false)} className="btn-primary"
            style={{ marginTop: '20px', width: '100%', justifyContent: 'center', fontSize: '15px' }}>
            Cotizar ahora
          </Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 899px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
        .nav-link:hover { color: var(--text) !important; }
        .mega-item:hover { background: rgba(0,0,0,0.04) !important; }
      `}</style>
    </header>
  )
}
