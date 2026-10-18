import { getImagesConfig } from '@/lib/getImagesConfig'
import HomeDashboard from './HomeDashboard'

export default async function Page() {
  const cfg = await getImagesConfig()
  return <HomeDashboard cfg={cfg} />
}
