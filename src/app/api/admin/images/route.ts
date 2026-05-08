import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import fs from 'fs'
import path from 'path'

const CONFIG_PATH = path.join(process.cwd(), 'public/config/images.json')

async function isAuth() {
  const store = await cookies()
  return store.get('admin_auth')?.value === 'true'
}

export async function GET() {
  try {
    const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'))
    return NextResponse.json(config)
  } catch {
    return NextResponse.json({ error: 'No se pudo leer la configuración' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!(await isAuth())) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }
  try {
    const body = await req.json()
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(body, null, 2))
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'No se pudo guardar la configuración' }, { status: 500 })
  }
}
