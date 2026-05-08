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

    const dbConfig = data?.config_data || {}
    
    return {
      hero_banner: dbConfig.hero_banner || DEFAULT_CONFIG.hero_banner,
      productos_portada: dbConfig.productos_portada || DEFAULT_CONFIG.productos_portada,
      productos_hero: dbConfig.productos_hero || DEFAULT_CONFIG.productos_hero,
      paginas_bg: dbConfig.paginas_bg || DEFAULT_CONFIG.paginas_bg
    }
  } catch (err) {
    console.error("Catch Error reading from Supabase:", err)
    return DEFAULT_CONFIG
  }
}
