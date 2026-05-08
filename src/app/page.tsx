import { getImagesConfig } from '@/lib/getImagesConfig'
import HomeClient from './HomeClient'

export default function Page() {
  const cfg = getImagesConfig()
  return <HomeClient cfg={cfg} />
}
