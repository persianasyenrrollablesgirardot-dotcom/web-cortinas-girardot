import Link from 'next/link'
import { ArrowRight, ImageIcon } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const categorias = ['Todos', 'Enrollables', 'Sheer Elegance', 'Verticales', 'Motorización']

const stats = [
  { num: '+500', label: 'Proyectos instalados' },
  { num: '4',    label: 'Ciudades de cobertura' },
  { num: '7',    label: 'Años de garantía' },
  { num: '100%', label: 'Instalación profesional' },
]

export default function ProyectosPage() {
  const cfg = getImagesConfig()
  const bgImg = cfg.paginas_bg?.proyectos || ''
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Banner galería */}
        <div style={{ position: 'relative', marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', height: '200px', border: '1px solid rgba(201,169,110,0.2)', background: '#080E1A' }}>
          {bgImg && <img src={bgImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
          {!bgImg && <svg viewBox="0 0 1200 200" fill="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="200" fill="#080E1A"/>
            <rect x="0" y="140" width="1200" height="60" fill="#0A1220"/>
            <line x1="0" y1="140" x2="1200" y2="140" stroke="#1A2A4A" strokeWidth="1"/>
            {/* 5 ventanas con persianas */}
            {[80,280,480,680,880].map((x,i)=>(
              <g key={x}>
                <rect x={x} y="20" width="160" height="130" rx="2" fill="#060606" stroke="#1E1E1E" strokeWidth="1"/>
                <rect x={x-4} y="14" width="168" height="12" rx="3" fill="#15120A" stroke="rgba(201,169,110,0.5)" strokeWidth="1"/>
                {Array.from({length:6+i},(_,j)=>(
                  <rect key={j} x={x+2} y={26+j*15} width="156" height={j%2===0?9:5} rx="1"
                    fill={`rgba(201,169,110,${j%2===0?0.12:0.04})`}
                    stroke={`rgba(201,169,110,${j%2===0?0.2:0.06})`} strokeWidth="0.5"/>
                ))}
                <rect x={x+2} y="130" width="156" height="5" rx="1" fill="rgba(201,169,110,0.2)"/>
              </g>
            ))}
            <rect width="1200" height="200" fill="linear-gradient(90deg,rgba(8,8,8,0.7) 0%,rgba(8,8,8,0) 30%,rgba(8,8,8,0) 70%,rgba(8,8,8,0.7) 100%)"/>
            <defs><linearGradient id="fadeEnds" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="rgba(8,8,8,0.9)"/><stop offset="20%" stopColor="rgba(8,8,8,0)"/><stop offset="80%" stopColor="rgba(8,8,8,0)"/><stop offset="100%" stopColor="rgba(8,8,8,0.9)"/></linearGradient></defs>
            <rect width="1200" height="200" fill="url(#fadeEnds)"/>
          </svg>}
          {bgImg && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.55) 60%, rgba(8,14,26,0.1) 100%)' }} />}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 48px' }}>
            <span className="badge" style={{ marginBottom: '12px', display: 'inline-flex', alignSelf: 'flex-start' }}>Galería de instalaciones</span>
            <h1 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)' }}>
              Nuestros <span className="text-gold-gradient">proyectos</span>
            </h1>
          </div>
        </div>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'end', marginBottom: '40px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Galería de instalaciones</span>
            <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '14px' }}>
              Nuestros <span className="text-gold-gradient">proyectos</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
              Instalaciones reales en Girardot, Melgar, Ricaurte y toda la zona. Cada proyecto es único y ejecutado con total profesionalismo.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {stats.map(({ num, label }) => (
              <div key={label} className="surface" style={{ padding: '20px', textAlign: 'center' }}>
                <div className="text-gold-gradient" style={{ fontSize: '26px', fontWeight: 700, lineHeight: 1, marginBottom: '6px', display: 'block' }}>{num}</div>
                <p style={{ fontSize: '16px', color: 'var(--text-3)', lineHeight: 1.4 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filtros */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {categorias.map((cat, i) => (
            <button key={cat} style={{
              padding: '8px 18px', fontSize: '13px', borderRadius: '999px', cursor: 'pointer', fontFamily: 'inherit',
              outline: 'none',
              background: i === 0 ? 'rgba(184,145,42,0.1)' : 'rgba(0,0,0,0.04)',
              border: i === 0 ? '1px solid rgba(184,145,42,0.35)' : '1px solid var(--border)',
              color: i === 0 ? 'var(--gold-dark)' : 'var(--text-3)',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Galería — grid con variación de tamaño */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gap: '10px', marginBottom: '36px' }}>
          {/* Foto grande izquierda */}
          <div className="surface" style={{ gridColumn: '1 / 2', gridRow: '1 / 3', minHeight: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', borderRadius: '16px' }}>
            <ImageIcon size={28} color="var(--text-3)" />
            <span style={{ fontSize: '16px', color: 'var(--text-3)' }}>Foto próximamente</span>
          </div>
          {/* 4 fotos pequeñas */}
          {[1,2,3,4].map((i) => (
            <div key={i} className="surface" style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '12px' }}>
              <ImageIcon size={20} color="var(--text-3)" />
              <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>Próximamente</span>
            </div>
          ))}
          {/* Foto grande derecha */}
          <div className="surface" style={{ gridColumn: '3 / 4', gridRow: '2 / 4', minHeight: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', borderRadius: '16px' }}>
            <ImageIcon size={28} color="var(--text-3)" />
            <span style={{ fontSize: '16px', color: 'var(--text-3)' }}>Foto próximamente</span>
          </div>
          {/* 2 fotos abajo */}
          {[5,6].map((i) => (
            <div key={i} className="surface" style={{ minHeight: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '12px' }}>
              <ImageIcon size={20} color="var(--text-3)" />
              <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>Próximamente</span>
            </div>
          ))}
        </div>

        {/* Info de admin */}
        <div className="surface" style={{ padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>
            Las fotos se gestionan desde el panel de administración.
          </p>
          <Link href="/admin" style={{ fontSize: '16px', color: 'var(--gold)', textDecoration: 'none' }}>
            Ir al admin →
          </Link>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Tu proyecto podría estar aquí?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Solicita tu cotización gratuita y únete a nuestros clientes satisfechos.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar cotización <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
