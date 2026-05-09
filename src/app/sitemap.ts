import type { MetadataRoute } from 'next'

const BASE = 'https://persianasgirardot.info'

export default function sitemap(): MetadataRoute.Sitemap {
  const productos = [
    'enrollables', 'sheer-elegance', 'romana', 'hanas', 'vintage',
    'verticales', 'panel', 'cortina', 'motorizacion', 'peliculas',
    'papel', 'lienzo', 'estampados', 'pergolas', 'toldo-romano',
    'accesorios-pergolas', 'accesorios-toldos', 'accesorios-pel',
  ]

  return [
    { url: BASE,              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/productos`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/cotizar`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contacto`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/proyectos`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/nosotros`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog`,      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.6 },
    ...productos.map((slug) => ({
      url: `${BASE}/productos/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
