'use client'

import { useState } from 'react'
import { abrirWhatsApp, enviarSolicitud, type Gestion } from '@/lib/enviarSolicitud'

/**
 * EL FORMULARIO DE CONTACTO, QUE ANTES NO MANDABA NADA.
 *
 * Hasta el 15-oct-2026 esto era un `<form>` sin destino dentro de una página de servidor:
 * sin `action`, sin `onSubmit` y con los campos sin nombre. El cliente escribía, tocaba
 * «Enviar mensaje», la página se recargaba y el mensaje se perdía. Nadie en el negocio se
 * enteraba de que alguien había escrito, y el cliente se quedaba esperando respuesta.
 *
 * Ahora se guarda en la bandeja de la oficina y además se abre WhatsApp, igual que el de
 * cotizar. Si guardar falla, el cliente igual sale por WhatsApp: nunca se queda sin camino.
 *
 * El «¿qué necesitas?» no es un adorno: la bandeja distingue mantenimiento, cotización y
 * venta, y eso cambia a quién le toca el caso y con qué urgencia.
 */

const OPCIONES: { valor: Gestion; texto: string }[] = [
  { valor: 'cotizacion', texto: 'Cotizar algo nuevo' },
  { valor: 'mantenimiento', texto: 'Mantenimiento o arreglo' },
  { valor: 'venta', texto: 'Otra cosa' },
]

export default function ContactoForm() {
  const [datos, setDatos] = useState({
    nombre: '',
    whatsapp: '',
    ciudad: '',
    gestion: 'cotizacion' as Gestion,
    mensaje: '',
    empresa: '',
  })
  const [enviando, setEnviando] = useState(false)
  const [aviso, setAviso] = useState<string | null>(null)

  const cambiar = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault()
    if (enviando) return
    setEnviando(true)
    setAviso(null)

    const r = await enviarSolicitud({
      nombre: datos.nombre,
      telefono: datos.whatsapp,
      gestion: datos.gestion,
      municipio: datos.ciudad,
      observaciones: datos.mensaje,
      empresa: datos.empresa,
    })

    if (r.guardada) {
      setAviso('Listo, ya nos llegó tu mensaje. Te respondemos hoy mismo en horario de atención.')
      setDatos({ nombre: '', whatsapp: '', ciudad: '', gestion: 'cotizacion', mensaje: '', empresa: '' })
    } else {
      // No se le muestra el motivo técnico: se le da la salida que sí funciona.
      setAviso('No pudimos enviarlo desde aquí. Te abrimos WhatsApp para que nos escribas directo.')
      abrirWhatsApp(
        `Hola, soy ${datos.nombre || 'un cliente'} de ${datos.ciudad || 'Girardot'}.\n${datos.mensaje}`,
      )
    }
    setEnviando(false)
  }

  const etiqueta: React.CSSProperties = {
    display: 'block', fontSize: '16px', color: 'var(--text-3)', marginBottom: '7px',
  }

  return (
    <form onSubmit={enviar} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label style={etiqueta}>Nombre</label>
          <input type="text" name="nombre" required value={datos.nombre} onChange={cambiar} placeholder="Tu nombre" className="input" />
        </div>
        <div>
          <label style={etiqueta}>WhatsApp</label>
          <input type="tel" name="whatsapp" required value={datos.whatsapp} onChange={cambiar} placeholder="300 000 0000" className="input" />
        </div>
      </div>
      <div>
        <label style={etiqueta}>Ciudad</label>
        <input type="text" name="ciudad" value={datos.ciudad} onChange={cambiar} placeholder="Girardot, Melgar..." className="input" />
      </div>
      <div>
        <label style={etiqueta}>¿Qué necesitas?</label>
        <select name="gestion" value={datos.gestion} onChange={cambiar} className="input" style={{ appearance: 'none', background: 'var(--surface)' }}>
          {OPCIONES.map(o => <option key={o.valor} value={o.valor}>{o.texto}</option>)}
        </select>
      </div>
      <div>
        <label style={etiqueta}>Mensaje</label>
        <textarea name="mensaje" rows={4} value={datos.mensaje} onChange={cambiar} placeholder="¿En qué podemos ayudarte?" className="input" style={{ resize: 'vertical' }} />
      </div>

      {/* Trampa de robots: fuera de la vista y fuera del recorrido del teclado. */}
      <input
        type="text"
        name="empresa"
        value={datos.empresa}
        onChange={cambiar}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <button type="submit" disabled={enviando} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', opacity: enviando ? 0.6 : 1 }}>
        {enviando ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {aviso && (
        <p style={{ fontSize: '15px', textAlign: 'center', color: 'var(--text-3)', margin: 0 }}>{aviso}</p>
      )}

      <p style={{ fontSize: '16px', color: 'var(--text-3)', textAlign: 'center' }}>
        O escríbenos directamente al{' '}
        <a href="https://wa.me/573202381865" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
          320 238 1865
        </a>
      </p>
    </form>
  )
}
