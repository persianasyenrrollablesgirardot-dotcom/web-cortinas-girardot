import { unstable_noStore as noStore } from 'next/cache'

export type DiaGaleria = {
  fecha: string
  formato: string
  productos: string[]
  titulo: string
  imagenes: { url: string; producto: string }[]
  rotulos: { titulo: string; sub: string }[]
}

// Las imágenes del día las sube la automatización a Supabase Storage (bucket público
// web_uploads/galeria-dia). Aquí solo se lee el índice: no hay despliegue diario.
export async function cargarGaleriaDia(max = 30): Promise<DiaGaleria[]> {
  noStore()
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!base) return []
  try {
    const r = await fetch(`${base}/storage/v1/object/public/web_uploads/galeria-dia/index.json`, { cache: 'no-store' })
    if (!r.ok) return []
    const j = (await r.json()) as { dias?: DiaGaleria[] }
    return (j.dias || []).slice(0, max)
  } catch {
    return []
  }
}

export function fechaLarga(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long' })
}
