import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Star, Ban, Flag } from 'lucide-react'
import { grupos, reglas, kit3x4, FECHA_PRECIOS } from './accesorios'

export const metadata: Metadata = {
  title: 'Accesorios y ferretería para pérgolas metálicas | Fábrica de Cortinas Girardot',
  description:
    'Catálogo técnico completo: anclajes, platinas, pernos, autoperforantes, remaches, perfilería de policarbonato, teja, canal y bajante, selladores, acabado, eléctrico y complementos para pérgolas metálicas.',
}

const totalItems = grupos.reduce((a, g) => a + g.items.length, 0)

export default function AccesoriosPergolasMetalicasPage() {
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Aviso de borrador */}
        <div style={{ marginBottom: '20px', padding: '10px 16px', borderRadius: '12px', background: 'rgba(220,38,38,0.06)', border: '1px dashed rgba(220,38,38,0.35)', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '2px 10px', borderRadius: '999px', background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.3)', color: '#B91C1C', fontSize: '12px', fontWeight: 600 }}><Flag size={11} /> Borrador en rama aislada</span>
          <span style={{ fontSize: '13px', color: 'var(--text-2)' }}>Precios de referencia de almacén ({FECHA_PRECIOS}), no precios nuestros. Cantidades calculadas para una pérgola de 3 × 4 m con policarbonato alveolar 8 mm.</span>
        </div>

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
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Catálogo técnico</span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '14px' }}>
            Accesorios y ferretería para <span className="text-gold-gradient">pérgolas metálicas</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            {totalItems} referencias en {grupos.length} grupos: desde el chazo que sostiene la columna hasta el tornillo inoxidable de la tapa del perfil. Cada ítem dice para qué sirve, cómo se especifica, cuántos lleva una pérgola de 3 × 4 m y cuánto vale de referencia.
          </p>
        </div>

        {/* Índice de grupos */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
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
          <span>Precio = referencia de almacén ({FECHA_PRECIOS}), no cotización</span>
        </div>

        {/* Grupos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '52px' }}>
          {grupos.map((g, gi) => (
            <section key={g.slug} id={g.slug} style={{ scrollMarginTop: '110px' }}>
              <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.1em' }}>{String(gi + 1).padStart(2, '0')}</span>
                <div>
                  <h2 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>{g.titulo}</h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>{g.desc}</p>
                </div>
              </div>

              <div className="card-glass" style={{ overflow: 'hidden' }}>
                <div className="acc-row acc-head">
                  <span>Ítem</span><span>Para qué</span><span>Especificación</span><span>Unidad</span><span>Cant. 3×4</span><span>Precio ref.</span>
                </div>
                {g.items.map((it, i) => (
                  <div key={it.nombre} className="acc-row" style={{ background: it.evitar ? 'rgba(220,38,38,0.04)' : it.clave ? 'rgba(184,145,42,0.035)' : i % 2 === 0 ? 'rgba(0,0,0,0.015)' : 'transparent', borderTop: '1px solid var(--border)' }}>
                    <span className="acc-nombre">
                      <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '6px' }}>
                        {it.clave && <Star size={12} color="var(--gold)" fill="var(--gold)" style={{ flexShrink: 0, marginTop: '4px' }} />}
                        {it.evitar && <Ban size={12} color="#B91C1C" style={{ flexShrink: 0, marginTop: '4px' }} />}
                        <span style={{ fontWeight: 600, color: it.evitar ? '#B91C1C' : 'var(--text)', fontSize: '14px', lineHeight: 1.35 }}>{it.nombre}</span>
                      </span>
                      {it.material && <span className="acc-material">{it.material}</span>}
                    </span>
                    <span data-l="Para qué" style={{ fontSize: '13px', color: 'var(--text-2)', lineHeight: 1.5 }}>{it.uso}</span>
                    <span data-l="Especificación" style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.5 }}>{it.spec}</span>
                    <span data-l="Unidad" style={{ fontSize: '13px', color: 'var(--text-2)' }}>{it.unidad}</span>
                    <span data-l="Cant. 3×4" style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 600 }}>{it.cant}</span>
                    <span data-l="Precio ref." style={{ fontSize: '13px', color: 'var(--text-2)', fontVariantNumeric: 'tabular-nums' }}>{it.precio}</span>
                  </div>
                ))}
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
        .acc-row { display: grid; grid-template-columns: 1.5fr 1.3fr 1.6fr 0.7fr 0.7fr 1fr; gap: 14px; padding: 12px 18px; align-items: start; }
        .acc-head { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-3); background: rgba(184,145,42,0.06); }
        .acc-nombre { display: flex; flex-direction: column; gap: 4px; }
        .acc-material { font-size: 11px; color: var(--gold-dark); line-height: 1.4; }
        .acc-kit { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .acc-row > span[data-l]::before { display: none; }
        @media (max-width: 1024px) {
          .acc-row { grid-template-columns: 1.4fr 1.4fr 1fr; }
          .acc-head { display: none; }
          .acc-row > span[data-l]::before { display: block; content: attr(data-l); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-3); margin-bottom: 2px; }
          .acc-kit { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .acc-row { grid-template-columns: 1fr; gap: 8px; padding: 14px 16px; }
          .acc-kit { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
