import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const store = await cookies()
  if (store.get('admin_auth')?.value !== 'true') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    if (!file) {
      return NextResponse.json({ error: 'Sin archivo' }, { status: 400 })
    }

    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
    const filename = `img_${Date.now()}.${ext}`
    
    const buffer = Buffer.from(await file.arrayBuffer())

    // Subir a Supabase Storage
    const { data, error } = await supabase
      .storage
      .from('web_uploads')
      .upload(filename, buffer, {
        contentType: file.type || 'image/jpeg',
        upsert: false
      })

    if (error) {
      console.error("Supabase Upload Error:", error)
      return NextResponse.json({ error: 'Error en Supabase' }, { status: 500 })
    }

    // Obtener la URL pública
    const { data: publicUrlData } = supabase
      .storage
      .from('web_uploads')
      .getPublicUrl(filename)

    return NextResponse.json({ url: publicUrlData.publicUrl })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error al subir el archivo' }, { status: 500 })
  }
}
