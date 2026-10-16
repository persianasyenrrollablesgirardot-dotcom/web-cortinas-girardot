/**
 * MANDA LO QUE ESCRIBE EL CLIENTE A LA BANDEJA DE LA OFICINA.
 *
 * ── POR QUÉ EXISTE (15-oct-2026) ─────────────────────────────────────────────────
 *
 * Hasta hoy los dos formularios de esta página perdían al cliente:
 *
 *   * `/contacto` tenía un `<form>` SIN destino. El botón «Enviar mensaje» recargaba la
 *     página y no mandaba nada a ninguna parte. El cliente creía que había escrito.
 *   * `/cotizar` abría WhatsApp con el mensaje armado. Si el cliente no le daba enviar
 *     —o no tenía WhatsApp en ese aparato, o cerró la pestaña— no quedaba ni rastro.
 *
 * Ahora lo que escribe se GUARDA primero, en la misma bandeja del formulario de la
 * oficina (`gvs_solicitudes_cliente`), que ya tiene quien la vigile: un proceso la revisa
 * cada minuto y le avisa a Jhon. Después se abre WhatsApp como siempre.
 *
 * ── POR QUÉ SE LLAMA A LA PUERTA DE JUNO Y NO SE ESCRIBE ACÁ ─────────────────────
 *
 * Guardar en la base necesita la llave de servicio de Supabase, y esta página es pública:
 * cualquier cosa que viva en su código la lee quien la visite. La puerta
 * (`api/solicitud.ts`, en el proyecto de Juno) ya tiene esa llave del lado del servidor,
 * ya valida, ya limpia el teléfono, ya tiene trampa de robots y cupo por IP. Repetir todo
 * eso acá serían dos reglas distintas para el mismo formulario.
 *
 * Esa puerta acepta a esta página por nombre (CORS), así que la llamada sale del navegador
 * del visitante y el cupo por IP cuenta a cada uno por separado.
 *
 * ── LA REGLA QUE NO SE PUEDE ROMPER ─────────────────────────────────────────────
 *
 * Si guardar falla, el cliente NO se queda sin camino: se abre WhatsApp igual. Perder una
 * venta porque la base estaba caída sería peor que lo que había antes. Por eso esto nunca
 * tira: devuelve si se guardó o no, y quien llama sigue adelante en los dos casos.
 */

/** Las tres cosas que la bandeja sabe distinguir. */
export type Gestion = 'mantenimiento' | 'cotizacion' | 'venta';

export interface SolicitudWeb {
  nombre: string;
  /** Tal como lo escribió; la puerta lo normaliza. */
  telefono: string;
  gestion: Gestion;
  municipio?: string;
  conjunto?: string;
  direccion_detalle?: string;
  observaciones?: string;
  /** Trampa de robots: un campo que una persona nunca ve ni llena. */
  empresa?: string;
}

const PUERTA = 'https://gestordecampo.vercel.app/api/solicitud';

/** Cuánto se espera antes de rendirse y abrir WhatsApp igual. */
const LIMITE_MS = 12_000;

export interface ResultadoEnvio {
  guardada: boolean;
  /** Lo que se le puede decir al cliente cuando no se pudo guardar. */
  motivo?: string;
}

export async function enviarSolicitud(solicitud: SolicitudWeb): Promise<ResultadoEnvio> {
  const corte = new AbortController();
  const reloj = setTimeout(() => corte.abort(), LIMITE_MS);
  try {
    const r = await fetch(PUERTA, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(solicitud),
      signal: corte.signal,
    });
    if (r.ok) return { guardada: true };

    // El cuerpo trae `error` (para nosotros) y a veces `mensaje` (para el cliente).
    const cuerpo = (await r.json().catch(() => null)) as
      | { error?: string; mensaje?: string }
      | null;
    return { guardada: false, motivo: cuerpo?.mensaje || cuerpo?.error };
  } catch {
    // Sin señal, sin internet o la puerta caída. No se dice nada técnico.
    return { guardada: false };
  } finally {
    clearTimeout(reloj);
  }
}

/** El WhatsApp del negocio, en un solo sitio para que no se escriba a mano cada vez. */
export const WHATSAPP = '573202381865';

export function abrirWhatsApp(mensaje: string) {
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`, '_blank');
}
