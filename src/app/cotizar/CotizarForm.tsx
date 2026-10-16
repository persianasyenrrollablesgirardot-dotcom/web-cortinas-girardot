'use client'

import { useState } from 'react'
import { abrirWhatsApp, enviarSolicitud } from '@/lib/enviarSolicitud'

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
    notas: '',
    // Trampa de robots. Una persona nunca ve este campo; un robot lo llena siempre.
    empresa: ''
  })
  const [enviando, setEnviando] = useState(false)
  const [aviso, setAviso] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  /**
   * PRIMERO SE GUARDA, DESPUÉS SE ABRE WHATSAPP.
   *
   * Antes esto solo abría WhatsApp: si el cliente no le daba enviar allá, o cerró la
   * pestaña, o no tenía WhatsApp en ese aparato, la solicitud no existía en ninguna parte
   * y nadie se enteraba de que alguien había pedido una cotización.
   *
   * Si guardar falla NO se bloquea: se abre WhatsApp igual. Perder una venta porque la
   * base estaba caída sería peor que lo que había antes.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (enviando) return
    setEnviando(true)
    setAviso(null)

    const detalles = [
      formData.sistema ? `Sistema: ${formData.sistema}` : '',
      formData.ventanas ? `Ventanas: ${formData.ventanas}` : '',
      formData.motorizacion ? `Motorización: ${formData.motorizacion}` : '',
      formData.notas ? `Notas: ${formData.notas}` : ''
    ].filter(Boolean).join(' · ')

    const r = await enviarSolicitud({
      nombre: formData.nombre,
      telefono: formData.whatsapp,
      gestion: 'cotizacion',
      municipio: formData.ciudad,
      // Lo que el cliente eligió va en el mensaje de la solicitud: la bandeja guarda lo
      // que dijo, y el detalle técnico se vuelve a confirmar cuando se le responde.
      observaciones: detalles || 'Sin detalles',
      empresa: formData.empresa
    })

    setAviso(r.guardada
      ? 'Listo: ya nos llegó tu solicitud. Te abrimos WhatsApp por si quieres añadir algo.'
      : 'No pudimos guardarla, pero te abrimos WhatsApp para que nos escribas directo.')

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

    abrirWhatsApp(mensaje)
    setEnviando(false)
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

      {/*
        La trampa de robots: fuera de la vista y fuera del recorrido del teclado. Si viene
        llena, la puerta responde que todo bien y no guarda nada — un robot no insiste con
        algo que parece haber funcionado.
      */}
      <input
        type="text"
        name="empresa"
        value={formData.empresa}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <button type="submit" disabled={enviando} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '16px', opacity: enviando ? 0.6 : 1 }}>
        {enviando ? 'Enviando...' : 'Enviar solicitud'}
      </button>

      {aviso && (
        <p style={{ fontSize: '15px', textAlign: 'center', color: 'var(--text-3)', margin: 0 }}>
          {aviso}
        </p>
      )}
    </form>
  )
}
