'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type ImagesConfig = {
  hero_banner: string
  productos_portada: Record<string, string>
  productos_hero: Record<string, string>
  paginas_bg: Record<string, string>
}

type Section = 'portada' | 'catalogo' | 'hero' | 'paginas'

type ActiveSlot = {
  section: Section
  key: string
} | null

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const PRODUCT_NAMES: Record<string, string> = {
  'enrollables':          'Enrollables',
  'sheer-elegance':       'Sheer Elegance',
  'verticales':           'Verticales',
  'motorizacion':         'Motorización',
  'romana':               'Romana',
  'hanas':                'Hanas',
  'vintage':              'Vintage',
  'panel':                'Panel Japonés',
  'cortina':              'Cortina',
  'peliculas':            'Películas UV',
  'papel':                'Papel Colgadura',
  'lienzo':               'Lienzo',
  'pergolas':             'Pérgolas',
  'estampados':           'Estampados',
  'toldo-romano':         'Toldo Romano',
  'accesorios-pel':       'Accesorios Persianas',
  'accesorios-pergolas':  'Accesorios Pérgolas',
  'accesorios-toldos':    'Accesorios Toldos',
}

const PAGE_NAMES: Record<string, string> = {
  proyectos: 'Proyectos',
  nosotros:  'Nosotros',
  blog:      'Blog',
  cotizar:   'Cotizar',
  contacto:  'Contacto',
}

// ---------------------------------------------------------------------------
// ImageSlot component
// ---------------------------------------------------------------------------
type ImageSlotProps = {
  label: string
  value: string
  isActive: boolean
  onActivate: () => void
  onSave: (url: string) => Promise<void>
  onCancel: () => void
}

function ImageSlot({ label, value, isActive, onActivate, onSave, onCancel }: ImageSlotProps) {
  const [tab, setTab]           = useState<'upload' | 'url'>('upload')
  const [urlInput, setUrlInput] = useState(value)
  const [preview, setPreview]   = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [saving, setSaving]     = useState(false)
  const [drag, setDrag]         = useState(false)
  const fileRef                 = useRef<HTMLInputElement>(null)

  // Reset state when panel opens
  useEffect(() => {
    if (isActive) {
      setTab('upload')
      setUrlInput(value)
      setPreview(null)
      setUploading(false)
      setUploadError(null)
      setSaving(false)
    }
  }, [isActive, value])

  const handleUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) return
    setUploadError(null)
    setUploading(true)

    // Preview instantáneo con FileReader — no espera al servidor
    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string
      if (dataUrl) setPreview(dataUrl)
    }
    reader.readAsDataURL(file)

    const fd = new FormData()
    fd.append('file', file)
    try {
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      if (!res.ok) {
        let msg = `Error ${res.status}`
        try { const d = await res.json(); msg = d.error || msg } catch {}
        setUploadError(msg)
        setPreview(null)
        return
      }
      const data = await res.json()
      if (data.url) {
        setPreview(data.url)
        setUrlInput(data.url)
      } else {
        setUploadError('El servidor no devolvió una URL válida')
        setPreview(null)
      }
    } catch (e: unknown) {
      setUploadError(e instanceof Error ? e.message : 'Error de conexión')
      setPreview(null)
    } finally {
      setUploading(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDrag(false)
    const file = e.dataTransfer.files[0]
    if (file) handleUpload(file)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await onSave(urlInput)
    } finally {
      setSaving(false)
    }
  }

  const displaySrc = preview || value

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Card */}
      <div
        className="card-glass"
        style={{
          padding: '12px',
          borderRadius: '12px',
          border: isActive ? '1px solid var(--gold)' : undefined,
          transition: 'border-color 0.2s',
        }}
      >
        {/* Image preview */}
        <div style={{
          height: '160px',
          borderRadius: '8px',
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.04)',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {displaySrc ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={displaySrc}
              alt={label}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-3)' }}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span style={{ fontSize: '10px', color: 'var(--text-3)' }}>Sin imagen</span>
            </div>
          )}
        </div>

        {/* Label + button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-2)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {label}
          </span>
          <button
            onClick={isActive ? onCancel : onActivate}
            style={{
              padding: '5px 12px',
              fontSize: '11px',
              fontWeight: 600,
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.15s',
              background: isActive ? 'rgba(255,255,255,0.06)' : 'rgba(201,169,110,0.15)',
              border: isActive ? '1px solid var(--border)' : '1px solid rgba(201,169,110,0.4)',
              color: isActive ? 'var(--text-3)' : 'var(--gold)',
              flexShrink: 0,
            }}
          >
            {isActive ? 'Cerrar' : 'Cambiar'}
          </button>
        </div>
      </div>

      {/* Inline editor panel */}
      {isActive && (
        <div style={{
          marginTop: '8px',
          background: 'rgba(10,10,10,0.8)',
          border: '1px solid rgba(201,169,110,0.3)',
          borderRadius: '12px',
          padding: '16px',
          backdropFilter: 'blur(12px)',
        }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '14px', background: 'rgba(255,255,255,0.04)', padding: '3px', borderRadius: '8px' }}>
            {(['upload', 'url'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1,
                  padding: '6px 0',
                  fontSize: '11px',
                  fontWeight: 600,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  border: 'none',
                  fontFamily: 'inherit',
                  transition: 'all 0.15s',
                  background: tab === t ? 'var(--gold)' : 'transparent',
                  color: tab === t ? '#080808' : 'var(--text-3)',
                }}
              >
                {t === 'upload' ? 'Subir archivo' : 'Pegar URL'}
              </button>
            ))}
          </div>

          {/* Upload tab */}
          {tab === 'upload' && (
            <div
              onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
              onDragLeave={() => setDrag(false)}
              onDrop={handleDrop}
              onClick={() => fileRef.current?.click()}
              style={{
                border: `2px dashed ${drag ? 'var(--gold)' : 'rgba(201,169,110,0.25)'}`,
                borderRadius: '10px',
                padding: '24px 16px',
                textAlign: 'center',
                background: drag ? 'rgba(201,169,110,0.05)' : 'rgba(255,255,255,0.02)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginBottom: '12px',
              }}
            >
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
              />
              {uploadError ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#f87171' }}>✗ {uploadError}</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-3)' }}>Clic para intentar de nuevo</span>
                </div>
              ) : uploading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '24px', height: '24px', border: '2px solid rgba(201,169,110,0.3)',
                    borderTopColor: 'var(--gold)', borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                  }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {preview && <img src={preview} alt="preview" style={{ height: '60px', maxWidth: '100%', objectFit: 'contain', borderRadius: '6px', opacity: 0.6 }} />}
                  <span style={{ fontSize: '12px', color: 'var(--gold)' }}>Subiendo al servidor...</span>
                </div>
              ) : preview ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={preview} alt="preview" style={{ height: '80px', maxWidth: '100%', objectFit: 'contain', borderRadius: '6px' }} />
                  <span style={{ fontSize: '11px', color: '#4ade80' }}>✓ Subido correctamente</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-3)' }}>Clic para cambiar</span>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-3)' }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>Arrastra o haz clic para seleccionar</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-3)', opacity: 0.7 }}>JPG, PNG, WebP</span>
                </div>
              )}
            </div>
          )}

          {/* URL tab */}
          {tab === 'url' && (
            <div style={{ marginBottom: '12px' }}>
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://... o /ruta/imagen.jpg"
                className="input"
                style={{ width: '100%', marginBottom: '10px', fontSize: '12px', boxSizing: 'border-box' }}
              />
              {urlInput && (
                <div style={{ borderRadius: '8px', overflow: 'hidden', height: '100px', background: 'rgba(255,255,255,0.03)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={urlInput}
                    alt="preview"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleSave}
              disabled={saving || uploading}
              style={{
                flex: 1,
                padding: '8px 0',
                fontSize: '12px',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: saving || uploading ? 'not-allowed' : 'pointer',
                border: 'none',
                fontFamily: 'inherit',
                background: saving || uploading ? 'rgba(201,169,110,0.3)' : 'var(--gold)',
                color: saving || uploading ? 'var(--text-3)' : '#080808',
                transition: 'all 0.15s',
              }}
            >
              {saving ? 'Guardando...' : 'Guardar'}
            </button>
            <button
              onClick={onCancel}
              style={{
                padding: '8px 16px',
                fontSize: '12px',
                borderRadius: '8px',
                cursor: 'pointer',
                border: '1px solid var(--border)',
                fontFamily: 'inherit',
                background: 'transparent',
                color: 'var(--text-3)',
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// SectionHeader component
// ---------------------------------------------------------------------------
function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-1)', marginBottom: '4px' }}>
        {title}
      </h2>
      <p style={{ fontSize: '12px', color: 'var(--text-3)' }}>{subtitle}</p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------
export default async function AdminImagenesPage() {
  const router = useRouter()
  const [config, setConfig]   = useState<ImagesConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [active, setActive]   = useState<ActiveSlot>(null)
  const [toast, setToast]     = useState<{ msg: string; ok: boolean } | null>(null)

  const showToast = useCallback((msg: string, ok = true) => {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 3500)
  }, [])

  // Auth check + load config
  useEffect(() => {
    fetch('/api/admin/images')
      .then((res) => {
        if (res.status === 401) { router.push('/admin'); return null }
        if (!res.ok) throw new Error('Error al cargar')
        return res.json()
      })
      .then((data) => {
        if (data) setConfig(data)
      })
      .catch(() => showToast('Error al cargar la configuración', false))
      .finally(() => setLoading(false))
  }, [router, showToast])

  const saveConfig = useCallback(async (updated: ImagesConfig) => {
    const res = await fetch('/api/admin/images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
    if (res.status === 401) { router.push('/admin'); return }
    if (!res.ok) throw new Error('Error al guardar')
  }, [router])

  const handleSave = useCallback(async (section: Section, key: string, url: string) => {
    if (!config) return
    const updated: ImagesConfig = {
      ...config,
      ...(section === 'portada'
        ? { hero_banner: url }
        : section === 'catalogo'
        ? { productos_portada: { ...config.productos_portada, [key]: url } }
        : section === 'hero'
        ? { productos_hero: { ...config.productos_hero, [key]: url } }
        : { paginas_bg: { ...config.paginas_bg, [key]: url } }),
    }
    await saveConfig(updated)
    setConfig(updated)
    setActive(null)
    showToast('Imagen guardada correctamente')
  }, [config, saveConfig, showToast])

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' }).catch(() => {})
    router.push('/admin')
  }

  const productKeys = Object.keys(PRODUCT_NAMES)

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px', height: '40px', border: '3px solid rgba(201,169,110,0.2)',
            borderTopColor: 'var(--gold)', borderRadius: '50%',
            animation: 'spin 0.8s linear infinite', margin: '0 auto 16px',
          }} />
          <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Cargando configuración...</p>
        </div>
      </div>
    )
  }

  if (!config) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '14px', color: '#f87171' }}>Error al cargar la configuración.</p>
      </div>
    )
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
          {toast.ok ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          )}
          {toast.msg}
        </div>
      )}

      <div className="container-site">

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
              Administración
            </p>
            <h1 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 300, lineHeight: 1.1 }}>
              Gestión de <span className="text-gold-gradient">imágenes</span>
            </h1>

            {/* Nav tabs */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <a
                href="/admin/imagenes"
                style={{
                  padding: '8px 16px', borderRadius: '8px', fontSize: '13px',
                  background: 'var(--gold)', border: '1px solid var(--gold)',
                  color: '#080808', textDecoration: 'none', fontWeight: 700,
                }}
              >
                Configurar Imágenes
              </a>
              <a
                href="/admin/fotos"
                style={{
                  padding: '8px 16px', borderRadius: '8px', fontSize: '13px',
                  background: 'rgba(0,0,0,0.04)', border: '1px solid var(--border)',
                  color: 'var(--text-3)', textDecoration: 'none',
                }}
              >
                Galería de fotos
              </a>
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 18px', fontSize: '13px',
              background: 'rgba(0,0,0,0.04)', border: '1px solid var(--border)',
              borderRadius: '12px', color: 'var(--text-3)', cursor: 'pointer',
              fontFamily: 'inherit', transition: 'color 0.2s',
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Salir
          </button>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Section 1 — Hero banner                                           */}
        {/* ---------------------------------------------------------------- */}
        <div style={{ marginBottom: '48px' }}>
          <SectionHeader
            title="Portada del sitio"
            subtitle="Imagen principal que aparece en el banner hero de la página de inicio."
          />
          <div style={{ maxWidth: '320px' }}>
            <ImageSlot
              label="Hero Banner"
              value={config.hero_banner}
              isActive={active?.section === 'portada' && active?.key === 'hero_banner'}
              onActivate={() => setActive({ section: 'portada', key: 'hero_banner' })}
              onSave={(url) => handleSave('portada', 'hero_banner', url)}
              onCancel={() => setActive(null)}
            />
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Section 2 — Catálogo portadas                                     */}
        {/* ---------------------------------------------------------------- */}
        <div style={{ marginBottom: '48px' }}>
          <SectionHeader
            title="Catálogo — Portadas de productos"
            subtitle="Imágenes que aparecen en las tarjetas del catálogo principal."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '12px',
          }}>
            {productKeys.map((key) => (
              <ImageSlot
                key={`catalogo-${key}`}
                label={PRODUCT_NAMES[key]}
                value={config.productos_portada[key] ?? ''}
                isActive={active?.section === 'catalogo' && active?.key === key}
                onActivate={() => setActive({ section: 'catalogo', key })}
                onSave={(url) => handleSave('catalogo', key, url)}
                onCancel={() => setActive(null)}
              />
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Section 3 — Hero de páginas de producto                           */}
        {/* ---------------------------------------------------------------- */}
        <div style={{ marginBottom: '48px' }}>
          <SectionHeader
            title="Hero de páginas de producto"
            subtitle="Imágenes de banner que aparecen en la cabecera de cada página de producto."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '12px',
          }}>
            {productKeys.map((key) => (
              <ImageSlot
                key={`hero-${key}`}
                label={PRODUCT_NAMES[key]}
                value={config.productos_hero[key] ?? ''}
                isActive={active?.section === 'hero' && active?.key === key}
                onActivate={() => setActive({ section: 'hero', key })}
                onSave={(url) => handleSave('hero', key, url)}
                onCancel={() => setActive(null)}
              />
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Section 4 — Fondos de páginas                                     */}
        {/* ---------------------------------------------------------------- */}
        <div style={{ marginBottom: '48px' }}>
          <SectionHeader
            title="Fondos de páginas"
            subtitle="Imágenes de fondo para las páginas generales del sitio."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '12px',
            maxWidth: '800px',
          }}>
            {Object.keys(PAGE_NAMES).map((key) => (
              <ImageSlot
                key={`paginas-${key}`}
                label={PAGE_NAMES[key]}
                value={config.paginas_bg[key] ?? ''}
                isActive={active?.section === 'paginas' && active?.key === key}
                onActivate={() => setActive({ section: 'paginas', key })}
                onSave={(url) => handleSave('paginas', key, url)}
                onCancel={() => setActive(null)}
              />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
