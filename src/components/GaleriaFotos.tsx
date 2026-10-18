'use client'

import { useState } from 'react'

/**
 * Galería con tope: muestra `inicial` fotos y carga más por tandas.
 * Antes las páginas pintaban la carpeta completa (Sheer: 761 imágenes en el HTML),
 * y en el teléfono eso era un desplazamiento sin fin.
 */
export default function GaleriaFotos({ fotos, alt, inicial = 12, tanda = 24 }: {
  fotos: string[]
  alt: string
  inicial?: number
  tanda?: number
}) {
  const [visibles, setVisibles] = useState(inicial)
  const lista = fotos.slice(0, visibles)
  const faltan = fotos.length - lista.length

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '6px' }}>
        {lista.map((src) => (
          <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="gal-item">
            <img src={src} alt={alt} loading="lazy" className="gal-img" />
          </a>
        ))}
      </div>
      {faltan > 0 && (
        <div style={{ textAlign: 'center', marginTop: '18px' }}>
          <button type="button" onClick={() => setVisibles((v) => v + tanda)} className="btn-secondary" style={{ padding: '12px 22px', borderRadius: '12px', cursor: 'pointer' }}>
            Ver más fotos ({faltan} restantes)
          </button>
        </div>
      )}
    </>
  )
}
