import Link from 'next/link'
import { CheckCircle, Clock, MapPin, Phone } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const sistemasGrupos = [
  {
    grupo: 'Sistemas enrollables',
    items: ['Persiana Enrollable Blackout', 'Persiana Enrollable Screen', 'Persiana Enrollable Traslúcida', 'Persiana Enrollable Premium (cabezal metálico)', 'Panel Japonés'],
  },
  {
    grupo: 'Sistemas de franjas',
    items: ['Sheer Elegance Estándar', 'Sheer Elegance Premium', 'Sheer Elegance con Blackout', 'Sistema Hanas Fantasía', 'Sistema Hanas Royal', 'Sistema Vintage'],
  },
  {
    grupo: 'Persianas y panel',
    items: ['Persiana Vertical Manual', 'Panel Simple', 'Panel Dúo', 'Romana Tradicional', 'Romana Top Down Premium'],
  },
  {
    grupo: 'Cortinas y textiles',
    items: ['Colección Cortina 2026', 'Papel de Colgadura Safra Living', 'Línea Lienzo'],
  },
  {
    grupo: 'Tecnología y protección',
    items: ['Motorización (motor Wi-Fi)', 'Películas de Protección Solar', 'Películas de Seguridad'],
  },
  {
    grupo: 'Otros',
    items: ['Varios sistemas — necesito asesoría', 'No sé — necesito orientación'],
  },
]

const beneficios = [
  { Icon: CheckCircle, t: 'Sin costo',        d: 'La cotización y visita de medición son completamente gratuitas.' },
  { Icon: Clock,       t: 'Respuesta rápida', d: 'Te contactamos en menos de 2 horas en horario de atención.' },
  { Icon: MapPin,      t: 'Visita a domicilio', d: 'Vamos a tu hogar u oficina en Girardot, Melgar y toda la zona.' },
  { Icon: Phone,       t: 'Sin compromiso',   d: 'Recibes la cotización detallada. Tú decides sin presiones.' },
]

export default async function CotizarPage() {
  const cfg = await getImagesConfig()
  const bgImg = cfg.paginas_bg?.cotizar || ''
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Header */}
        <div style={{ marginBottom: '48px', maxWidth: '560px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Completamente gratis</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '14px' }}>
            Solicita tu <span className="text-gold-gradient">cotización</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            Completa el formulario y te contactamos en menos de 2 horas. Visitamos tu espacio, tomamos medidas y te entregamos la cotización sin ningún costo.
          </p>
        </div>

        {/* 2 columnas: beneficios + formulario */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '32px', alignItems: 'start' }}>

          {/* Beneficios */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {beneficios.map(({ Icon, t, d }) => (
              <div key={t} className="surface" style={{ padding: '18px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <Icon size={17} color="var(--gold)" style={{ flexShrink: 0, marginTop: '1px' }} />
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>{t}</p>
                  <p style={{ fontSize: '16px', color: 'var(--text-3)', lineHeight: 1.55 }}>{d}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '8px', padding: '20px', background: 'rgba(37,211,102,0.06)', border: '1px solid rgba(37,211,102,0.15)', borderRadius: '12px' }}>
              <p style={{ fontSize: '16px', color: '#22c55e', fontWeight: 600, marginBottom: '4px' }}>¿Prefieres WhatsApp?</p>
              <a href="https://wa.me/573202381865" target="_blank" rel="noopener noreferrer" style={{ fontSize: '15px', color: '#22c55e', fontWeight: 700, textDecoration: 'none' }}>
                320 238 1865
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="card-glass" style={{ padding: '36px' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Nombre completo *</label>
                  <input type="text" required placeholder="Tu nombre" className="input" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>WhatsApp *</label>
                  <input type="tel" required placeholder="300 000 0000" className="input" />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Ciudad / Municipio *</label>
                <input type="text" required placeholder="Girardot, Melgar, Ricaurte..." className="input" />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Tipo de sistema</label>
                <select className="input" style={{ appearance: 'none', background: 'var(--surface)' }}>
                  <option value="">Seleccionar...</option>
                  {sistemasGrupos.map((g) => (
                    <optgroup key={g.grupo} label={g.grupo}>
                      {g.items.map((s) => <option key={s}>{s}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>¿Cuántas ventanas?</label>
                  <input type="number" min={1} placeholder="Ej: 3" className="input" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>¿Con motorización?</label>
                  <select className="input" style={{ appearance: 'none', background: 'var(--surface)' }}>
                    <option value="">No sé aún</option>
                    <option>Sí, con motorización</option>
                    <option>No por ahora</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Notas adicionales</label>
                <textarea rows={3} placeholder="Medidas aproximadas, tipo de espacio, preferencias de color..." className="input" style={{ resize: 'vertical' }} />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '16px' }}>
                Enviar solicitud de cotización
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}
