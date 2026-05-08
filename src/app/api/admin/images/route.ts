import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '@/lib/supabase'

async function isAuth() {
  const store = await cookies()
  return store.get('admin_auth')?.value === 'true'
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('site_config')
      .select('config_data')
      .eq('id', 1)
      .single()

    if (error) throw error
    return NextResponse.json(data?.config_data || {})
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'No se pudo leer la configuración' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!(await isAuth())) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }
  try {
    const body = await req.json()
    const { error } = await supabase
      .from('site_config')
      .update({ config_data: body })
      .eq('id', 1)

    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'No se pudo guardar la configuración' }, { status: 500 })
  }
}
