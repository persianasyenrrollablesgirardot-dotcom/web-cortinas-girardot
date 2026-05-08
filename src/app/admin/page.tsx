'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Eye, EyeOff } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [show, setShow]         = useState(false)
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push('/admin/fotos')
    } else {
      setError('Contraseña incorrecta')
    }
    setLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '360px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '14px',
            background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
          }}>
            <Lock size={20} color="var(--gold)" />
          </div>
          <h1 style={{ fontSize: '20px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>
            Panel de administración
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--text-3)' }}>Fábrica de Cortinas Girardot</p>
        </div>

        {/* Formulario */}
        <div className="card-glass" style={{ padding: '32px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-3)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                Contraseña
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="input"
                  style={{ paddingRight: '44px' }}
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  style={{
                    position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-3)', padding: '4px',
                  }}
                >
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <p style={{ fontSize: '12px', color: '#f87171', textAlign: 'center', marginBottom: '12px' }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.6 : 1 }}
            >
              {loading ? 'Verificando...' : 'Ingresar'}
            </button>
          </form>
        </div>

        {/* Volver */}
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: 'var(--text-3)' }}>
          <a href="/" style={{ color: 'var(--gold)', textDecoration: 'none' }}>← Volver al sitio</a>
        </p>

      </div>
    </div>
  )
}
