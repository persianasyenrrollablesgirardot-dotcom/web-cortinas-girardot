import type { Metadata } from 'next'
import { getImagesConfig } from '@/lib/getImagesConfig'
import HomeClient from '../HomeClient'

export const metadata: Metadata = {
  title: 'Persianas y cortinas | Fábrica de Cortinas Girardot',
  description:
    'Enrollables, Sheer Elegance, verticales, romanas y motorización. Fabricación e instalación en Girardot, Melgar, Ricaurte y Flandes. Garantía 7 años en enrollables.',
}

// Hub de persianas y cortinas: conserva íntegra la página que antes era la home.
export default async function PersianasPage() {
  const cfg = await getImagesConfig()
  return <HomeClient cfg={cfg} />
}
