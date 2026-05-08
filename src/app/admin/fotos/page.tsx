'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Upload, Trash2, ImageIcon, LogOut, Check, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const BUCKET    = 'proyectos'
const CATEGORIAS = ['Enrollables', 'Sheer Elegance', 'Verticales', 'Motorización', 'General']

type Foto = { name: string; url: string; categoria: string; created_at: string }

export default function AdminFotosPage() {
  const router   = useRouter()
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [fotos,     setFotos]     = useState<Foto[]>([])
  const [uploading, setUploading] = useState(false)
  const [categoria, setCategoria] = useState('General')
  const [toast,     setToast]     = useState<{ msg: string; ok: boolean } | null>(null)
  const [drag,      setDrag]      = useState(false)

  const showToast = (msg: string, ok = true) => {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 3000)
  }

  const cargarFotos = useCallback(async () => {
    const { data, error } = await supabase.storage.from(BUCKET).list('', {
      limit: 100,
      sortBy: { column: 'created_at', order: 'desc' },
    })
    if (error) return
    const lista: Foto[] = (data || [])
      .filter((f) => f.name !== '.emptyFolderPlaceholder')
      .map((f) => {
        const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(f.name)
        const partes = f.name.split('__')
        return { name: f.name, url: urlData.publicUrl, categoria: partes[0] || 'General', created_at: f.created_at || '' }
      })
    setFotos(lista)
  }, [supabase])

  useEffect(() => { cargarFotos() }, [cargarFotos])

  const subirArchivos = async (files: FileList | File[]) => {
    setUploading(true)
    let subidos = 0
    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/')) continue
      const ext    = file.name.split('.').pop()
      const nombre = `${categoria}__${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
      const { error } = await supabase.storage.from(BUCKET).upload(nombre, file, { contentType: file.type })
      if (!error) subidos++
    }
    await cargarFotos()
    setUploading(false)
    showToast(`${subidos} foto(s) subida(s) correctamente`)
  }

  const eliminarFoto = async (name: string) => {
    if (!confirm('¿Eliminar esta foto?')) return
    const { error } = await supabase.storage.from(BUCKET).remove([name])
    if (error) { showToast('Error al eliminar', false); return }
    await cargarFotos()
    showToast('Foto eliminada')
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDrag(false)
    if (e.dataTransfer.files.length > 0) subirArchivos(e.dataTransfer.files)
  }

  return (
    <div className="page-top" style={{ paddingBottom: '80px' }}>

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', top: '24px', right: '24px', zIndex: 200,
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '12px 18px', borderRadius: '12px', fontSize: '13px', fontWeight: 500,
          background: toast.ok ? 'rgba(16,77,48,0.95)' : 'rgba(77,16,16,0.95)',
          color: toast.ok ? '#4ade80' : '#f87171',
          border: `1px solid ${toast.ok ? 'rgba(74,222,128,0.3)' : 'rgba(248,113,113,0.3)'}`,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}>
          {toast.ok ? <Check size={15} /> : <X size={15} />}
          {toast.msg}
        </div>
      )}

      <div className="container-site">

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
              Administración
            </p>
            <h1 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 300, lineHeight: 1.1 }}>
              Gestión de <span className="text-gold-gradient">fotos</span>
            </h1>
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <a href="/admin/imagenes" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '13px', background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.25)', color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>Configurar Imágenes</a>
              <a href="/admin/fotos" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '13px', background: 'rgba(0,0,0,0.04)', border: '1px solid var(--border)', color: 'var(--text-3)', textDecoration: 'none' }}>Galería de fotos</a>
            </div>
          </div>
          <button
            onClick={() => router.push('/admin')}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 18px', fontSize: '13px',
              background: 'rgba(0,0,0,0.04)', border: '1px solid var(--border)',
              borderRadius: '12px', color: 'var(--text-3)', cursor: 'pointer',
              fontFamily: 'inherit', transition: 'color 0.2s',
            }}
          >
            <LogOut size={14} /> Salir
          </button>
        </div>

        {/* Panel de subida */}
        <div className="card-glass" style={{ padding: '32px', marginBottom: '24px' }}>

          {/* Selector categoría */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-3)', marginBottom: '8px', letterSpacing: '0.05em' }}>
              Categoría de las fotos
            </label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="input"
              style={{ width: 'auto', minWidth: '200px' }}
            >
              {CATEGORIAS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Zona drag & drop */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
            onDragLeave={() => setDrag(false)}
            onDrop={onDrop}
            style={{
              border: `2px dashed ${drag ? 'var(--gold)' : 'var(--border)'}`,
              borderRadius: '16px', padding: '48px 24px', textAlign: 'center',
              background: drag ? 'rgba(201,169,110,0.05)' : 'transparent',
              transition: 'all 0.2s ease',
            }}
          >
            <Upload size={32} color="var(--text-3)" style={{ margin: '0 auto 16px' }} />
            <p style={{ fontSize: '14px', color: 'var(--text-3)', marginBottom: '20px' }}>
              Arrastra fotos aquí o haz clic para seleccionar
            </p>
            <label style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 22px', fontSize: '13px', fontWeight: 600,
              background: uploading ? 'rgba(201,169,110,0.15)' : 'var(--gold)',
              color: uploading ? 'var(--text-3)' : '#080808',
              borderRadius: '10px', cursor: uploading ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
            }}>
              <input
                type="file" accept="image/*" multiple
                style={{ display: 'none' }}
                disabled={uploading}
                onChange={(e) => e.target.files && subirArchivos(e.target.files)}
              />
              {uploading ? 'Subiendo...' : 'Seleccionar fotos'}
            </label>
            <p style={{ fontSize: '11px', color: 'var(--text-3)', marginTop: '12px' }}>
              JPG, PNG, WebP · Múltiples archivos soportados
            </p>
          </div>
        </div>

        {/* Contadores por categoría */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-3)', alignSelf: 'center', marginRight: '4px' }}>
            {fotos.length} foto{fotos.length !== 1 ? 's' : ''}
          </span>
          {CATEGORIAS.map((c) => {
            const n = fotos.filter((f) => f.categoria === c).length
            return (
              <span key={c} className="tag" style={{ fontSize: '11px' }}>
                {c}: {n}
              </span>
            )
          })}
        </div>

        {/* Galería */}
        {fotos.length === 0 ? (
          <div className="card-glass" style={{ padding: '64px', textAlign: 'center' }}>
            <ImageIcon size={40} color="var(--text-3)" style={{ margin: '0 auto 16px' }} />
            <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>No hay fotos aún. Sube la primera.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
            {fotos.map((foto) => (
              <div key={foto.name} className="foto-card" style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '1', background: 'var(--surface)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={foto.url} alt={foto.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div className="foto-overlay" style={{
                  position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  opacity: 0, transition: 'opacity 0.2s',
                }}>
                  <span style={{ fontSize: '11px', color: 'var(--gold)', background: 'rgba(201,169,110,0.15)', padding: '3px 10px', borderRadius: '999px' }}>
                    {foto.categoria}
                  </span>
                  <button
                    onClick={() => eliminarFoto(foto.name)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      padding: '7px 14px', fontSize: '12px', borderRadius: '8px',
                      background: 'rgba(127,29,29,0.8)', color: '#fca5a5',
                      border: '1px solid rgba(239,68,68,0.4)', cursor: 'pointer', fontFamily: 'inherit',
                    }}
                  >
                    <Trash2 size={13} /> Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <style>{`
        .foto-card:hover .foto-overlay { opacity: 1 !important; }
      `}</style>
    </div>
  )
}
