import Link from 'next/link'
import { ArrowRight, Shield, Award, MapPin, Phone } from 'lucide-react'
import { getImagesConfig } from '@/lib/getImagesConfig'

const valores = [
  { Icon: Shield, t: 'Calidad certificada',  d: 'Materiales con OEKO-TEX, GREENGUARD Gold e ISO 9001. Sin tóxicos, ignífugos y anti-bacterias.' },
  { Icon: Award,  t: 'Experiencia probada',  d: 'Más de 500 instalaciones exitosas en toda la zona de Girardot y alrededores.' },
  { Icon: MapPin, t: 'Cobertura regional',   d: 'Girardot, Melgar, Ricaurte, Flandes y en expansión a Bogotá.' },
  { Icon: Phone,  t: 'Soporte completo',     d: 'Desde la medición inicial hasta el mantenimiento preventivo anual.' },
]

const zonas = [
  { ciudad: 'Girardot',  desc: 'Sede principal' },
  { ciudad: 'Melgar',    desc: 'Zona turística' },
  { ciudad: 'Ricaurte',  desc: 'Cobertura completa' },
  { ciudad: 'Flandes',   desc: 'Cobertura completa' },
  { ciudad: 'Bogotá',    desc: 'En expansión' },
]

const certs = [
  { name: 'OEKO-TEX Standard 100', logo: '/certs/oeko-tex.svg',     bg: '#FFFFFF' },
  { name: 'GREENGUARD Gold',       logo: '/certs/greenguard.png',   bg: '#FFFFFF' },
  { name: 'SGS ISO 9001',          logo: '/certs/iso9001.svg',      bg: '#FFFFFF' },
  { name: 'REACH NPS',             logo: '/certs/reach.svg',        bg: '#003399' },
  { name: 'NFPA Ignífugo',         logo: '/certs/nfpa.svg',         bg: '#CC0000' },
  { name: 'Anti-bacterias',        logo: '/certs/antibacterial.svg',bg: '#0066CC' },
]

export default async function NosotrosPage() {
  const cfg = await getImagesConfig()
  const bgImg = cfg.paginas_bg?.nosotros || ''
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Banner visual */}
        <div style={{ position: 'relative', marginBottom: '48px', borderRadius: '16px', overflow: 'hidden', height: '220px', border: '1px solid rgba(201,169,110,0.2)', background: 'linear-gradient(135deg, #0D1525 0%, #080E1A 50%, #0A1220 100%)' }}>
          {bgImg && <img src={bgImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,14,26,0.88) 0%, rgba(8,14,26,0.6) 60%, rgba(8,14,26,0.3) 100%)' }} />
          {!bgImg && <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />}
          {!bgImg && <div style={{ position: 'absolute', top: '-20px', right: '-30px', width: '400px', opacity: 0.08, pointerEvents: 'none' }}>
            <svg viewBox="0 0 400 260" fill="none"><rect x="30" y="20" width="340" height="220" rx="3" stroke="rgba(201,169,110,1)" strokeWidth="2"/><rect x="22" y="10" width="356" height="18" rx="4" fill="rgba(201,169,110,0.4)" stroke="rgba(201,169,110,1)" strokeWidth="1.5"/>{Array.from({length:14},(_,i)=><rect key={i} x="32" y={28+i*13} width="336" height={i%2===0?7:5} rx="1" fill={`rgba(201,169,110,${i%2===0?0.35:0.1})`}/>)}<rect x="32" y="210" width="336" height="8" rx="2" fill="rgba(201,169,110,0.5)"/></svg>
          </div>}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 48px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-flex', alignSelf: 'flex-start' }}>Nuestra empresa</span>
            <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)' }}>
              Fábrica de Cortinas <span className="text-gold-gradient">Girardot</span>
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--text-3)', marginTop: '10px' }}>Girardot · Melgar · Ricaurte · Flandes · Bogotá</p>
          </div>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '52px', maxWidth: '640px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Nuestra empresa</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 300, lineHeight: 1.08, marginBottom: '14px' }}>
            Fábrica de Cortinas <span className="text-gold-gradient">Girardot</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            Especialistas en sistemas de control solar premium para el clima exigente de la región. Calidad certificada, instalación profesional y garantía real.
          </p>
        </div>

        {/* Historia + valores — 2 columnas */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '48px' }}>

          {/* Historia */}
          <div className="card-glass" style={{ padding: '36px' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
              Nuestra historia
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '16px' }}>
              Nacimos en Girardot con una misión clara: llevar sistemas de control solar de verdadera calidad a una zona que lo exige.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-3)', lineHeight: 1.75 }}>
              El clima cálido y la alta radiación UV de la región requieren productos que realmente funcionen. Por eso trabajamos exclusivamente con telas certificadas internacionalmente, garantizando resultados que duran años.
            </p>
          </div>

          {/* Valores */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {valores.map(({ Icon, t, d }) => (
              <div key={t} className="surface" style={{ padding: '20px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(201,169,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <Icon size={16} color="var(--gold)" />
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px', lineHeight: 1.3 }}>{t}</h4>
                <p style={{ fontSize: '16px', color: 'var(--text-3)', lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Zonas + certificaciones — 2 columnas */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>

          {/* Zonas */}
          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>
              Zonas de cobertura
            </p>
            {zonas.map((z, i) => (
              <div key={z.ciudad} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < zonas.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ fontSize: '16px', color: 'var(--text-2)', fontWeight: 500 }}>{z.ciudad}</span>
                <span style={{ fontSize: '16px', color: 'var(--text-3)' }}>{z.desc}</span>
              </div>
            ))}
          </div>

          {/* Certificaciones */}
          <div className="surface" style={{ padding: '28px' }}>
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }}>
              Certificaciones internacionales
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {certs.map(({ name, logo, bg }) => (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '12px 8px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '8px', background: bg, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: bg === '#FFFFFF' ? '5px' : '0', flexShrink: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-2)', textAlign: 'center', lineHeight: 1.3 }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>¿Tienes un proyecto en mente?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Hablemos. La asesoría y medición son completamente gratuitas.</p>
          </div>
          <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
            Solicitar cotización <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}
