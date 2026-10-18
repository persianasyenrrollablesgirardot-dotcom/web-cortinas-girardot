import { getImagesConfig } from '@/lib/getImagesConfig'
import HomeDashboard from './HomeDashboard'
import { cargarGaleriaDia } from '@/lib/galeriaDia'

export default async function Page() {
  const [cfg, dias] = await Promise.all([getImagesConfig(), cargarGaleriaDia(7)])
  return <HomeDashboard cfg={cfg} dias={dias} />
}
