import fs from 'fs'
import path from 'path'
import { unstable_noStore as noStore } from 'next/cache'

export type ImagesConfig = {
  hero_banner: string
  productos_portada: Record<string, string>
  productos_hero: Record<string, string>
  paginas_bg: Record<string, string>
}

export function getImagesConfig(): ImagesConfig {
  noStore() // siempre leer el archivo fresco — nunca cachear
  const configPath = path.join(process.cwd(), 'public/config/images.json')
  try {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'))
  } catch {
    return { hero_banner: '/hero_banner.png', productos_portada: {}, productos_hero: {}, paginas_bg: {} }
  }
}
