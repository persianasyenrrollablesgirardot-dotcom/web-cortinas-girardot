'use client'

import { useState } from 'react'

interface CotizarFormProps {
  sistemasGrupos: { grupo: string; items: string[] }[]
}

export default function CotizarForm({ sistemasGrupos }: CotizarFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    ciudad: '',
    sistema: '',
    ventanas: '',
    motorizacion: '',
    notas: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mensaje = `Hola Fábrica de Cortinas, quiero solicitar una cotización.
    
*Datos del cliente:*
- *Nombre:* ${formData.nombre}
- *WhatsApp:* ${formData.whatsapp}
- *Ciudad:* ${formData.ciudad}

*Detalles del proyecto:*
- *Sistema:* ${formData.sistema || 'No especificado'}
- *Ventanas:* ${formData.ventanas || 'No especificado'}
- *Motorización:* ${formData.motorizacion || 'No especificado'}
- *Notas:* ${formData.notas || 'Ninguna'}

Quedo atento a su respuesta.`

    const url = `https://wa.me/573202381865?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Nombre completo *</label>
          <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" className="input" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>WhatsApp *</label>
          <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} placeholder="300 000 0000" className="input" />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Ciudad / Municipio *</label>
        <input type="text" name="ciudad" required value={formData.ciudad} onChange={handleChange} placeholder="Girardot, Melgar, Ricaurte..." className="input" />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Tipo de sistema</label>
        <select name="sistema" value={formData.sistema} onChange={handleChange} className="input" style={{ appearance: 'none', background: 'var(--surface)' }}>
          <option value="">Seleccionar...</option>
          {sistemasGrupos.map((g) => (
            <optgroup key={g.grupo} label={g.grupo}>
              {g.items.map((s) => <option key={s} value={s}>{s}</option>)}
            </optgroup>
          ))}
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>¿Cuántas ventanas?</label>
          <input type="number" name="ventanas" min={1} value={formData.ventanas} onChange={handleChange} placeholder="Ej: 3" className="input" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>¿Con motorización?</label>
          <select name="motorizacion" value={formData.motorizacion} onChange={handleChange} className="input" style={{ appearance: 'none', background: 'var(--surface)' }}>
            <option value="">No sé aún</option>
            <option value="Sí, con motorización">Sí, con motorización</option>
            <option value="No por ahora">No por ahora</option>
          </select>
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px' }}>Notas adicionales</label>
        <textarea name="notas" rows={3} value={formData.notas} onChange={handleChange} placeholder="Medidas aproximadas, tipo de espacio, preferencias de color..." className="input" style={{ resize: 'vertical' }} />
      </div>

      <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '16px' }}>
        Enviar solicitud por WhatsApp
      </button>
    </form>
  )
}
