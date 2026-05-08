import { unstable_noStore as noStore } from 'next/cache'
import { supabase } from '@/lib/supabase'

export type ImagesConfig = {
  hero_banner: string
  productos_portada: Record<string, string>
  productos_hero: Record<string, string>
  paginas_bg: Record<string, string>
}

const DEFAULT_CONFIG: ImagesConfig = {
  hero_banner: '/hero_banner.png',
  productos_portada: {},
  productos_hero: {},
  paginas_bg: {}
}

export async function getImagesConfig(): Promise<ImagesConfig> {
  noStore() // siempre leer fresco en Vercel
  
  try {
    const { data, error } = await supabase
      .from('site_config')
      .select('config_data')
      .eq('id', 1)
      .single()

    if (error) {
      console.error("Error reading from Supabase:", error)
      return DEFAULT_CONFIG
    }

    return (data?.config_data as ImagesConfig) || DEFAULT_CONFIG
  } catch (err) {
    console.error("Catch Error reading from Supabase:", err)
    return DEFAULT_CONFIG
  }
}
