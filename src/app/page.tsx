import { getImagesConfig } from '@/lib/getImagesConfig'
import HomeClient from './HomeClient'

export default async function Page() {
  const cfg = await getImagesConfig()
  return <HomeClient cfg={cfg} />
}
