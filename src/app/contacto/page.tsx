import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const info = [
  { Icon: MessageCircle, label: 'WhatsApp principal', value: '320 238 1865', href: 'https://wa.me/573202381865', action: 'Abrir chat' },
  { Icon: Phone,         label: 'WhatsApp alterno',   value: '322 366 3825', href: 'https://wa.me/573223663825', action: 'Abrir chat' },
  { Icon: MapPin,        label: 'Ubicación',           value: 'Girardot, Cundinamarca', href: '#', action: null },
  { Icon: Clock,         label: 'Horario de atención', value: 'Lun – Sáb: 8 am – 6 pm', href: '#', action: null },
]

export default function ContactoPage() {
  const cfg = getImagesConfig()
  const bgImg = cfg.paginas_bg?.contacto || ''
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Header */}
        <div style={{ marginBottom: '48px', maxWidth: '560px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Contáctanos</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '14px' }}>
            Estamos para <span className="text-gold-gradient">ayudarte</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            Escríbenos por WhatsApp o completa el formulario. Respondemos en menos de 1 hora en horario de atención.
          </p>
        </div>

        {/* 2 columnas: info + formulario */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '32px', alignItems: 'start' }}>

          {/* Columna izquierda: info de contacto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {info.map(({ Icon, label, value, href, action }) => (
              <div key={label} className="surface" style={{ padding: '20px 22px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '11px', background: 'rgba(201,169,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={17} color="var(--gold)" />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '12px', color: 'var(--text-3)', marginBottom: '3px', letterSpacing: '0.04em' }}>{label}</p>
                  <p style={{ fontSize: '16px', color: 'var(--text)', fontWeight: 500 }}>{value}</p>
                </div>
                {action && (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '12px', padding: '7px 14px' }}>
                    {action}
                  </a>
                )}
              </div>
            ))}

            {/* Zonas */}
            <div className="surface" style={{ padding: '20px 22px', marginTop: '4px' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-3)', marginBottom: '10px', letterSpacing: '0.04em' }}>Cobertura</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Girardot', 'Melgar', 'Ricaurte', 'Flandes', 'Bogotá'].map((z) => (
                  <span key={z} className="tag" style={{ fontSize: '16px' }}>{z}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="card-glass" style={{ padding: '36px' }}>
            <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text)', marginBottom: '24px' }}>Envíanos un mensaje</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Nombre</label>
                  <input type="text" placeholder="Tu nombre" className="input" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>WhatsApp</label>
                  <input type="tel" placeholder="300 000 0000" className="input" />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Ciudad</label>
                <input type="text" placeholder="Girardot, Melgar..." className="input" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Mensaje</label>
                <textarea rows={4} placeholder="¿En qué podemos ayudarte?" className="input" style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                Enviar mensaje
              </button>
              <p style={{ fontSize: '16px', color: 'var(--text-3)', textAlign: 'center' }}>
                O escríbenos directamente al{' '}
                <a href="https://wa.me/573202381865" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                  320 238 1865
                </a>
              </p>
            </form>
          </div>

        </div>

        {/* Mapa de ubicación */}
        <div style={{ marginTop: '40px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>
            Nuestra ubicación — Girardot, Cundinamarca
          </p>

          {/* Mapa OpenStreetMap — gratuito, sin API key */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', height: '380px', position: 'relative' }}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.8321%2C4.2831%2C-74.7721%2C4.3231&layer=mapnik&marker=4.3031%2C-74.8021"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              title="Ubicación Fábrica de Cortinas Girardot"
            />
          </div>

          {/* Botones de acción */}
          <div style={{ marginTop: '14px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://www.google.com/maps/search/Fabrica+de+Cortinas+Girardot+Cundinamarca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '13px', padding: '9px 18px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              {/* Google Maps icon */}
              <svg width="14" height="14" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fff" d="M24 4C15.16 4 8 11.16 8 20c0 12 16 28 16 28s16-16 16-28c0-8.84-7.16-16-16-16zm0 22c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
              </svg>
              Ver en Google Maps
            </a>
            <a
              href="https://www.google.com/search?q=Fabrica+de+Cortinas+Girardot+reseñas"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'var(--gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}
            >
              ⭐ Ver reseñas en Google
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
