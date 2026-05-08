import Link from 'next/link'

const cols = [
  {
    title: 'Productos',
    links: [
      ['Enrollables',    '/productos/enrollables'],
      ['Sheer Elegance', '/productos/sheer-elegance'],
      ['Verticales',     '/productos/verticales'],
      ['Motorización',   '/productos/motorizacion'],
    ],
  },
  {
    title: 'Empresa',
    links: [
      ['Nosotros',  '/nosotros'],
      ['Proyectos', '/proyectos'],
      ['Blog',      '/blog'],
      ['Contacto',  '/contacto'],
    ],
  },
  {
    title: 'Contacto',
    links: [
      ['320 238 1865', 'https://wa.me/573202381865'],
      ['322 366 3825', 'https://wa.me/573223663825'],
      ['Cotizar',      '/cotizar'],
    ],
    extra: 'Girardot · Melgar · Ricaurte · Flandes · Bogotá',
  },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      <div className="container-site" style={{ paddingTop: '56px', paddingBottom: '40px' }}>

        {/* Grid principal */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '14px' }}>
              <div className="text-gold-gradient" style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '3px' }}>
                Fábrica de Cortinas
              </div>
              <div style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'var(--text-3)', textTransform: 'uppercase' }}>
                Girardot · Colombia
              </div>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-3)', lineHeight: 1.65, maxWidth: '200px', marginBottom: '18px' }}>
              Sistemas de control solar premium para espacios que merecen lo mejor.
            </p>
            <a
              href="https://wa.me/573202381865?text=Hola%2C%20me%20interesa%20cotizar"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '8px 14px', background: 'rgba(37,211,102,0.1)',
                border: '1px solid rgba(37,211,102,0.2)', borderRadius: '10px',
                fontSize: '16px', color: '#22c55e', textDecoration: 'none',
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              WhatsApp
            </a>
          </div>

          {/* Columnas */}
          {cols.map((col) => (
            <div key={col.title}>
              <h5 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '18px' }}>
                {col.title}
              </h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {col.links.map(([label, href]) => (
                  <Link
                    key={href} href={href}
                    style={{ fontSize: '15px', color: 'var(--text-3)', textDecoration: 'none' }}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {label}
                  </Link>
                ))}
                {col.extra && (
                  <p style={{ fontSize: '12px', color: 'var(--text-3)', marginTop: '4px', lineHeight: 1.6 }}>
                    {col.extra}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ fontSize: '16px', color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} Fábrica de Cortinas Girardot. Todos los derechos reservados.
          </p>
          <Link href="/admin" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '16px', color: 'var(--gold)', textDecoration: 'none', padding: '5px 12px', border: '1px solid rgba(201,169,110,0.2)', borderRadius: '8px', background: 'rgba(201,169,110,0.05)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
            Panel Admin
          </Link>
        </div>

      </div>

      {/* CSS responsive del footer */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
