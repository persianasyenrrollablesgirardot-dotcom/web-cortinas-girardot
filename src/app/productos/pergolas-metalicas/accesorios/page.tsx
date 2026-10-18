import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Star, Ban } from 'lucide-react'
import { grupos, reglas, kit3x4 } from './accesorios'

export const metadata: Metadata = {
  title: 'Accesorios y ferretería para pérgolas metálicas | Fábrica de Cortinas Girardot',
  description:
    'Catálogo técnico ilustrado: anclajes, platinas, pernos, autoperforantes, remaches, perfilería de policarbonato, teja, canal y bajante, selladores, acabado, eléctrico y complementos para pérgolas metálicas.',
}

const totalItems = grupos.reduce((a, g) => a + g.items.length, 0)

export default function AccesoriosPergolasMetalicasPage() {
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '13px', color: 'var(--text-3)', flexWrap: 'wrap' }}>
          <Link href="/productos" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Productos</Link>
          <span>/</span>
          <Link href="/productos/pergolas-metalicas" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Pérgolas metálicas</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-2)' }}>Accesorios y ferretería</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '28px', maxWidth: '760px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Catálogo técnico ilustrado</span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '14px' }}>
            Accesorios y ferretería para <span className="text-gold-gradient">pérgolas metálicas</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            {totalItems} referencias en {grupos.length} grupos: desde el chazo que sostiene la columna hasta el tornillo inoxidable de la tapa del perfil. Cada pieza con su imagen, para qué sirve, cómo se especifica y cuántas lleva una pérgola de 3 × 4 m.
          </p>
        </div>

        {/* Índice de grupos */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
          {grupos.map((g) => (
            <a key={g.slug} href={`#${g.slug}`} className="tag" style={{ textDecoration: 'none', fontSize: '13px', padding: '7px 14px', color: 'var(--text-2)', background: 'var(--surface)' }}>
              {g.titulo} <span style={{ color: 'var(--text-3)' }}>· {g.items.length}</span>
            </a>
          ))}
          <a href="#kit" className="tag" style={{ textDecoration: 'none', fontSize: '13px', padding: '7px 14px', color: 'var(--gold-dark)', background: 'rgba(184,145,42,0.08)', borderColor: 'rgba(184,145,42,0.3)', fontWeight: 600 }}>Kit 3 × 4 m</a>
          <a href="#reglas" className="tag" style={{ textDecoration: 'none', fontSize: '13px', padding: '7px 14px', color: 'var(--gold-dark)', background: 'rgba(184,145,42,0.08)', borderColor: 'rgba(184,145,42,0.3)', fontWeight: 600 }}>9 reglas de fijación</a>
        </div>

        {/* Leyenda */}
        <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', fontSize: '12px', color: 'var(--text-3)', marginBottom: '20px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}><Star size={12} color="var(--gold)" fill="var(--gold)" /> imprescindible</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}><Ban size={12} color="#B91C1C" /> no usar</span>
          <span>Cant. = unidades para una pérgola de 3 × 4 m</span>
        </div>

        {/* Grupos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '52px' }}>
          {grupos.map((g, gi) => (
            <section key={g.slug} id={g.slug} style={{ scrollMarginTop: '110px' }}>
              <div style={{ marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.1em' }}>{String(gi + 1).padStart(2, '0')}</span>
                <div>
                  <h2 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>{g.titulo}</h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>{g.desc}</p>
                </div>
              </div>

              <div className="acc-grid">
                {g.items.map((it) => {
                  return (
                    <article key={it.nombre} className="card-glass acc-card" style={{ borderColor: it.evitar ? 'rgba(220,38,38,0.35)' : it.clave ? 'rgba(201,169,110,0.35)' : undefined }}>
                      <div className="acc-img img-zoom-wrap">
                        <img className="img-zoom" src={it.img} alt={it.nombre} loading="lazy" />
                        {it.clave && <span className="acc-badge acc-badge--clave"><Star size={11} fill="currentColor" /> imprescindible</span>}
                        {it.evitar && <span className="acc-badge acc-badge--evitar"><Ban size={11} /> no usar</span>}
                      </div>
                      <div className="acc-body">
                        <h3 style={{ fontSize: '15px', fontWeight: 600, color: it.evitar ? '#B91C1C' : 'var(--text)', lineHeight: 1.3 }}>{it.nombre}</h3>
                        {it.material && <p style={{ fontSize: '11px', color: 'var(--gold-dark)', lineHeight: 1.4 }}>{it.material}</p>}
                        <p style={{ fontSize: '13px', color: 'var(--text-2)', lineHeight: 1.5 }}>{it.uso}</p>
                        <p style={{ fontSize: '12px', color: 'var(--text-3)', lineHeight: 1.5 }}>{it.spec}</p>
                        <div className="acc-meta">
                          <span><b>Unidad</b>{it.unidad}</span>
                          <span><b>Cant. 3×4</b>{it.cant}</span>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Kit 3x4 */}
        <section id="kit" style={{ marginTop: '64px', scrollMarginTop: '110px' }}>
          <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>Lista de compra · pérgola 3 × 4 m autoportante, policarbonato 8 mm</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>Lo que se pide a la ferretería además de los tubos. Sirve de checklist para no volver a mitad de montaje.</p>
          </div>
          <div className="acc-kit">
            {kit3x4.map((k) => (
              <div key={k.q} className="surface" style={{ padding: '12px 16px', display: 'grid', gridTemplateColumns: '56px 1fr', gap: '10px', alignItems: 'center' }}>
                <span className="text-gold-gradient" style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1 }}>{k.n}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-2)', lineHeight: 1.45 }}>{k.q}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Reglas */}
        <section id="reglas" style={{ marginTop: '56px', scrollMarginTop: '110px' }}>
          <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>Nueve reglas de fijación</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>Las que separan una pérgola que dura veinte años de una que gotea el primer invierno.</p>
          </div>
          <div className="grid-cols-2">
            {reglas.map((r, i) => (
              <div key={r} className="card-glass" style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: '28px 1fr', gap: '12px', alignItems: 'start' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.1em', marginTop: '3px' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.6 }}>{r}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="grid-cols-cta" style={{ marginTop: '56px', background: 'linear-gradient(135deg, rgba(184,145,42,0.08) 0%, rgba(184,145,42,0.03) 100%)', border: '1px solid rgba(184,145,42,0.22)', borderRadius: '16px', padding: '28px 36px' }}>
          <div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>Todo esto va incluido en la pérgola instalada.</p>
            <p style={{ fontSize: '15px', color: 'var(--text-3)' }}>Este catálogo existe para que sepas qué lleva y por qué. Si ya tienes estructura y te falta algo, también lo conseguimos.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href="/productos/pergolas-metalicas" className="btn-secondary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Ver sistemas de pérgola
            </Link>
            <Link href="/cotizar" className="btn-primary" style={{ fontSize: '15px', padding: '11px 22px' }}>
              Cotizar <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        .acc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 12px; }
        .acc-card { display: flex; flex-direction: column; overflow: hidden; border-radius: 14px; }
        .acc-img { position: relative; aspect-ratio: 1 / 1; background: #FFFFFF; border-bottom: 1px solid var(--border); }
        .acc-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .acc-img-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; font-size: 11px; color: var(--text-3); background: linear-gradient(135deg, #F4F1EA, #FFFFFF); }
        .acc-badge { position: absolute; top: 8px; left: 8px; display: inline-flex; align-items: center; gap: 4px; padding: 3px 8px; border-radius: 999px; font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }
        .acc-badge--clave { background: rgba(255,255,255,0.94); color: var(--gold-dark); border: 1px solid rgba(184,145,42,0.35); }
        .acc-badge--evitar { background: rgba(255,255,255,0.94); color: #B91C1C; border: 1px solid rgba(220,38,38,0.35); }
        .acc-body { padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
        .acc-meta { margin-top: auto; padding-top: 8px; border-top: 1px solid var(--border); display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .acc-meta span { display: flex; flex-direction: column; font-size: 12px; color: var(--text-2); }
        .acc-meta b { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-3); font-weight: 700; }
        .acc-kit { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        @media (max-width: 1024px) { .acc-kit { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .acc-grid { grid-template-columns: repeat(2, 1fr); } .acc-kit { grid-template-columns: 1fr; } }
        @media (max-width: 420px) { .acc-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
