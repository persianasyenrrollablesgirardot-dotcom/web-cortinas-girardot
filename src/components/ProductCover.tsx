'use client'

type ProductType = 'enrollables' | 'sheer-elegance' | 'verticales' | 'motorizacion'

interface Props {
  type: ProductType
  height?: number | string
}

/* ══════════════════════════════════════════════════════
   ENROLLABLE — persiana enrollable con motor y blackout
══════════════════════════════════════════════════════ */
function IllustrationEnrollable() {
  return (
    <svg viewBox="0 0 800 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Fondo sala */}
      <rect width="800" height="420" fill="#080E1A"/>
      {/* Pared y piso */}
      <rect x="0" y="320" width="800" height="100" fill="#0D1525"/>
      <line x1="0" y1="320" x2="800" y2="320" stroke="#1A2A4A" strokeWidth="1.5"/>
      {/* Perspectiva lateral izquierda */}
      <path d="M0 0 L140 80 L140 420 L0 420 Z" fill="#0A1220"/>
      <line x1="140" y1="80" x2="140" y2="420" stroke="#1A2A4A" strokeWidth="1"/>
      {/* Perspectiva lateral derecha */}
      <path d="M800 0 L660 80 L660 420 L800 420 Z" fill="#0A1220"/>
      <line x1="660" y1="80" x2="660" y2="420" stroke="#1A2A4A" strokeWidth="1"/>

      {/* Ventana — marco arquitectónico */}
      <rect x="180" y="50" width="440" height="300" rx="3" fill="#060C18" stroke="#1A2A4A" strokeWidth="2"/>
      {/* Luz exterior sutil */}
      <defs>
        <radialGradient id="lightGrad" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="rgba(201,169,110,0.12)"/>
          <stop offset="100%" stopColor="rgba(201,169,110,0)"/>
        </radialGradient>
        <linearGradient id="fabricGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C1810"/>
          <stop offset="100%" stopColor="#0F0D08"/>
        </linearGradient>
        <linearGradient id="fabricEdge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(201,169,110,0.4)"/>
          <stop offset="3%" stopColor="rgba(201,169,110,0.05)"/>
          <stop offset="97%" stopColor="rgba(201,169,110,0.05)"/>
          <stop offset="100%" stopColor="rgba(201,169,110,0.4)"/>
        </linearGradient>
      </defs>
      <rect x="182" y="52" width="436" height="296" fill="url(#lightGrad)"/>

      {/* RIEL SUPERIOR */}
      <rect x="175" y="45" width="450" height="18" rx="4" fill="#1A1507" stroke="#C9A96E" strokeWidth="1.2"/>
      <rect x="175" y="45" width="450" height="18" rx="4" fill="rgba(201,169,110,0.06)"/>
      {/* Tornillos del riel */}
      {[200, 280, 400, 520, 600].map(x => (
        <circle key={x} cx={x} cy="54" r="3.5" fill="#080E1A" stroke="#C9A96E" strokeWidth="1"/>
      ))}

      {/* MECANISMO MOTOR — caja derecha del riel */}
      <rect x="590" y="38" width="45" height="32" rx="5" fill="#1A1507" stroke="#C9A96E" strokeWidth="1.5"/>
      <rect x="596" y="44" width="33" height="8" rx="2" fill="rgba(201,169,110,0.2)"/>
      <rect x="596" y="55" width="20" height="4" rx="1" fill="rgba(201,169,110,0.15)"/>
      <circle cx="620" cy="57" r="3" fill="#C9A96E" opacity="0.9"/>
      {/* Cable bajando del motor */}
      <line x1="612" y1="70" x2="612" y2="100" stroke="#C9A96E" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>

      {/* TELA ENROLLABLE — bajada a 60% */}
      <rect x="183" y="63" width="434" height="230" fill="url(#fabricGrad)"/>
      <rect x="183" y="63" width="434" height="230" fill="url(#fabricEdge)"/>
      {/* Textura de tela — líneas horizontales finas */}
      {Array.from({length: 23}, (_, i) => 63 + i * 10).map(y => (
        <line key={y} x1="183" y1={y} x2="617" y2={y} stroke="rgba(201,169,110,0.07)" strokeWidth="0.8"/>
      ))}
      {/* Sombra vertical en bordes de la tela */}
      <rect x="183" y="63" width="8" height="230" fill="rgba(0,0,0,0.3)"/>
      <rect x="609" y="63" width="8" height="230" fill="rgba(0,0,0,0.3)"/>

      {/* PERFIL INFERIOR (barra de peso) */}
      <rect x="180" y="291" width="440" height="10" rx="3" fill="#1A1507" stroke="#C9A96E" strokeWidth="1.2"/>
      <rect x="180" y="291" width="440" height="10" rx="3" fill="rgba(201,169,110,0.08)"/>

      {/* LUZ FILTRADA — rayos abajo de la persiana */}
      <path d="M200 303 L240 420 L180 420 Z" fill="rgba(201,169,110,0.02)"/>
      <path d="M300 303 L360 420 L240 420 Z" fill="rgba(201,169,110,0.03)"/>
      <path d="M420 303 L500 420 L360 420 Z" fill="rgba(201,169,110,0.025)"/>
      <path d="M550 303 L620 420 L500 420 Z" fill="rgba(201,169,110,0.02)"/>

      {/* LABEL BLACKOUT badge */}
      <rect x="210" y="130" width="110" height="26" rx="5" fill="rgba(201,169,110,0.1)" stroke="rgba(201,169,110,0.35)" strokeWidth="1"/>
      <text x="265" y="147" textAnchor="middle" fill="#C9A96E" fontSize="10" fontFamily="sans-serif" letterSpacing="1.5" fontWeight="600">BLACKOUT</text>

      {/* PANEL DERECHO — info técnica */}
      <rect x="670" y="100" width="110" height="160" rx="8" fill="rgba(201,169,110,0.05)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
      <text x="725" y="122" textAnchor="middle" fill="#C9A96E" fontSize="9" fontFamily="sans-serif" letterSpacing="1" fontWeight="700">MOTOR</text>
      <line x1="685" y1="130" x2="765" y2="130" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
      {/* Icono motor */}
      <circle cx="725" cy="160" r="22" fill="rgba(201,169,110,0.08)" stroke="rgba(201,169,110,0.3)" strokeWidth="1.5"/>
      <circle cx="725" cy="160" r="12" fill="rgba(201,169,110,0.12)" stroke="#C9A96E" strokeWidth="1"/>
      <circle cx="725" cy="160" r="4" fill="#C9A96E"/>
      {/* Flechas rotación */}
      <path d="M713 148 A17 17 0 0 1 737 148" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <polygon points="737,145 737,151 743,148" fill="#C9A96E"/>
      <text x="725" y="207" textAnchor="middle" fill="rgba(201,169,110,0.6)" fontSize="8" fontFamily="sans-serif">Wi-Fi</text>
      {/* WiFi icono */}
      <path d="M713 218 Q725 210 737 218" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"/>
      <path d="M717 224 Q725 218 733 224" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="725" cy="229" r="2.5" fill="#C9A96E"/>
      <text x="725" y="250" textAnchor="middle" fill="rgba(201,169,110,0.4)" fontSize="7.5" fontFamily="sans-serif">7 AÑOS</text>

      {/* TEXTO PRODUCTO abajo izquierda */}
      <text x="195" y="385" fill="rgba(201,169,110,0.7)" fontSize="11" fontFamily="sans-serif" letterSpacing="3" fontWeight="600">PERSIANA ENROLLABLE</text>
      <text x="195" y="403" fill="rgba(201,169,110,0.35)" fontSize="9" fontFamily="sans-serif" letterSpacing="1.5">BLACKOUT · SCREEN · PANEL JAPONÉS</text>
    </svg>
  )
}

/* ══════════════════════════════════════════════════════
   SHEER ELEGANCE — franjas opacas + translúcidas
══════════════════════════════════════════════════════ */
function IllustrationSheer() {
  const stripes = Array.from({ length: 18 }, (_, i) => ({
    y: 55 + i * 19,
    opaque: i % 2 === 0,
  }))
  return (
    <svg viewBox="0 0 800 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="420" fill="#080E1A"/>
      <rect x="0" y="320" width="800" height="100" fill="#0D1525"/>
      <line x1="0" y1="320" x2="800" y2="320" stroke="#1A2A4A" strokeWidth="1.5"/>
      <path d="M0 0 L140 80 L140 420 L0 420 Z" fill="#0A1220"/>
      <path d="M800 0 L660 80 L660 420 L800 420 Z" fill="#0A1220"/>

      {/* Ventana */}
      <rect x="175" y="40" width="450" height="315" rx="3" fill="#060C18" stroke="#1A2A4A" strokeWidth="2"/>

      <defs>
        <linearGradient id="sheerLight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(201,169,110,0)"/>
          <stop offset="50%" stopColor="rgba(201,169,110,0.18)"/>
          <stop offset="100%" stopColor="rgba(201,169,110,0)"/>
        </linearGradient>
      </defs>

      {/* Riel superior doble (cenefa) */}
      <rect x="168" y="35" width="464" height="22" rx="4" fill="#15120A" stroke="#C9A96E" strokeWidth="1.5"/>
      <rect x="172" y="39" width="456" height="14" rx="2" fill="rgba(201,169,110,0.08)"/>
      <text x="400" y="50" textAnchor="middle" fill="rgba(201,169,110,0.5)" fontSize="8" fontFamily="sans-serif" letterSpacing="2">CENEFA SHEER ELEGANCE</text>

      {/* Franjas alternadas */}
      {stripes.map(({ y, opaque }, i) => {
        if (y > 350) return null
        const h = opaque ? 11 : 8
        return opaque ? (
          <rect key={i} x="177" y={y} width="446" height={h} fill="rgba(201,169,110,0.18)" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5"/>
        ) : (
          <rect key={i} x="177" y={y} width="446" height={h} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
        )
      })}

      {/* Efecto luz filtrando por franjas translúcidas */}
      {stripes.filter(s => !s.opaque && s.y < 340).map(({ y }, i) => (
        <rect key={i} x="177" y={y} width="446" height={8} fill="url(#sheerLight)" opacity="0.7"/>
      ))}

      {/* Barra inferior */}
      <rect x="175" y="352" width="450" height="8" rx="2" fill="#15120A" stroke="#C9A96E" strokeWidth="1"/>

      {/* Cadena de control */}
      <circle cx="195" cy="357" r="4" fill="rgba(201,169,110,0.4)" stroke="#C9A96E" strokeWidth="1"/>
      <line x1="195" y1="361" x2="195" y2="390" stroke="rgba(201,169,110,0.4)" strokeWidth="2"/>
      <circle cx="195" cy="393" r="5" fill="rgba(201,169,110,0.3)" stroke="#C9A96E" strokeWidth="1"/>

      {/* Leyenda franjas — lado derecho */}
      <rect x="655" y="90" width="120" height="200" rx="8" fill="rgba(201,169,110,0.04)" stroke="rgba(201,169,110,0.15)" strokeWidth="1"/>
      <text x="715" y="112" textAnchor="middle" fill="rgba(201,169,110,0.6)" fontSize="8" fontFamily="sans-serif" letterSpacing="1.5" fontWeight="700">CORTE TRANSVERSAL</text>

      {/* Franjas explicadas */}
      {[0,1,2,3,4,5].map(i => {
        const y2 = 125 + i * 24
        const op = i % 2 === 0
        return (
          <g key={i}>
            <rect x="670" y={y2} width="90" height={op ? 13 : 9} rx="1"
              fill={op ? 'rgba(201,169,110,0.2)' : 'rgba(255,255,255,0.04)'}
              stroke={op ? 'rgba(201,169,110,0.4)' : 'rgba(255,255,255,0.1)'}
              strokeWidth="0.8"/>
            {i === 0 && <text x="770" y={y2 + 9} fill="rgba(201,169,110,0.5)" fontSize="7" fontFamily="sans-serif">← Opaca</text>}
            {i === 1 && <text x="770" y={y2 + 7} fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="sans-serif">← Traslúcida</text>}
          </g>
        )
      })}

      {/* Dimensiones */}
      <line x1="640" y1="125" x2="640" y2="162" stroke="rgba(201,169,110,0.3)" strokeWidth="1"/>
      <line x1="636" y1="125" x2="644" y2="125" stroke="rgba(201,169,110,0.3)" strokeWidth="1"/>
      <line x1="636" y1="162" x2="644" y2="162" stroke="rgba(201,169,110,0.3)" strokeWidth="1"/>
      <text x="630" y="147" textAnchor="middle" fill="rgba(201,169,110,0.4)" fontSize="8" fontFamily="sans-serif" transform="rotate(-90 630 147)">7.5 cm</text>

      <text x="195" y="385" fill="rgba(201,169,110,0.7)" fontSize="11" fontFamily="sans-serif" letterSpacing="3" fontWeight="600">SHEER ELEGANCE</text>
      <text x="195" y="403" fill="rgba(201,169,110,0.35)" fontSize="9" fontFamily="sans-serif" letterSpacing="1.5">FRANJAS OPACAS + TRASLÚCIDAS · MOTORIZABLE</text>
    </svg>
  )
}

/* ══════════════════════════════════════════════════════
   VERTICALES — lamas verticales en perspectiva
══════════════════════════════════════════════════════ */
function IllustrationVerticales() {
  const slats = Array.from({ length: 16 }, (_, i) => i)
  return (
    <svg viewBox="0 0 800 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="420" fill="#080E1A"/>
      <rect x="0" y="310" width="800" height="110" fill="#0D1525"/>
      <line x1="0" y1="310" x2="800" y2="310" stroke="#1A2A4A" strokeWidth="1.5"/>
      <path d="M0 0 L100 70 L100 420 L0 420 Z" fill="#0A1220"/>
      <path d="M800 0 L700 70 L700 420 L800 420 Z" fill="#0A1220"/>

      {/* Ventana grande */}
      <rect x="120" y="35" width="560" height="310" rx="2" fill="#060C18" stroke="#1A2A4A" strokeWidth="2"/>

      <defs>
        <linearGradient id="slatLight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(201,169,110,0.35)"/>
          <stop offset="40%" stopColor="rgba(201,169,110,0.08)"/>
          <stop offset="100%" stopColor="rgba(201,169,110,0.02)"/>
        </linearGradient>
      </defs>

      {/* RIEL SUPERIOR */}
      <rect x="113" y="28" width="574" height="16" rx="4" fill="#15120A" stroke="#C9A96E" strokeWidth="1.5"/>
      <rect x="117" y="31" width="566" height="10" rx="2" fill="rgba(201,169,110,0.08)"/>
      {/* Carritos del riel */}
      {slats.map(i => {
        const x = 130 + i * 34
        return <circle key={i} cx={x} cy="36" r="4" fill="#1A1507" stroke="rgba(201,169,110,0.5)" strokeWidth="1"/>
      })}

      {/* LAMAS VERTICALES con efecto perspectiva (ligeramente giradas al 45°) */}
      {slats.map(i => {
        const x = 124 + i * 34
        const lightFactor = i / 15
        const opacity = 0.15 + lightFactor * 0.25
        const borderOpacity = 0.2 + lightFactor * 0.4
        // Perspectiva: lamas se hacen más delgadas hacia la derecha
        const width = 18 - lightFactor * 4
        return (
          <g key={i}>
            {/* Sombra lama */}
            <rect x={x + width + 1} y="44" width="3" height="270" rx="1" fill="rgba(0,0,0,0.4)"/>
            {/* Lama principal */}
            <rect x={x} y="44" width={width} height="270" rx="1.5"
              fill={`rgba(201,169,110,${opacity})`}
              stroke={`rgba(201,169,110,${borderOpacity})`}
              strokeWidth="0.8"/>
            {/* Brillo izquierdo de la lama */}
            <rect x={x} y="44" width={2} height="270" rx="1"
              fill={`rgba(201,169,110,${lightFactor * 0.3})`}/>
          </g>
        )
      })}

      {/* Luz entrando desde lamas */}
      <rect x="122" y="44" width="558" height="270" fill="url(#slatLight)" opacity="0.3"/>

      {/* Cadena lateral */}
      <circle cx="120" cy="175" r="6" fill="rgba(201,169,110,0.3)" stroke="#C9A96E" strokeWidth="1.2"/>
      <line x1="120" y1="44" x2="120" y2="169" stroke="rgba(201,169,110,0.3)" strokeWidth="1.5"/>
      <line x1="120" y1="181" x2="120" y2="314" stroke="rgba(201,169,110,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>

      {/* Indicador de rotación 45° */}
      <circle cx="715" cy="170" r="45" fill="rgba(201,169,110,0.04)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
      <line x1="715" y1="130" x2="715" y2="210" stroke="rgba(201,169,110,0.15)" strokeWidth="1"/>
      <line x1="675" y1="170" x2="755" y2="170" stroke="rgba(201,169,110,0.15)" strokeWidth="1"/>
      {/* Lama en ángulo */}
      <rect x="706" y="130" width="8" height="80" rx="2" fill="rgba(201,169,110,0.25)" stroke="#C9A96E" strokeWidth="1"
        transform="rotate(45 715 170)"/>
      <rect x="706" y="130" width="8" height="80" rx="2" fill="rgba(201,169,110,0.1)" stroke="rgba(201,169,110,0.4)" strokeWidth="1"
        transform="rotate(-45 715 170)" opacity="0.5"/>
      {/* Ángulo texto */}
      <path d="M715 155 A15 15 0 0 1 730 170" stroke="#C9A96E" strokeWidth="1.2" fill="none"/>
      <text x="726" y="163" fill="#C9A96E" fontSize="8" fontFamily="sans-serif">45°</text>
      <text x="715" y="232" textAnchor="middle" fill="rgba(201,169,110,0.4)" fontSize="7.5" fontFamily="sans-serif" letterSpacing="1">ROTACIÓN</text>

      {/* Dimensión ancho */}
      <line x1="122" y1="330" x2="680" y2="330" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
      <line x1="122" y1="326" x2="122" y2="334" stroke="rgba(201,169,110,0.3)" strokeWidth="1"/>
      <line x1="680" y1="326" x2="680" y2="334" stroke="rgba(201,169,110,0.3)" strokeWidth="1"/>
      <text x="400" y="345" textAnchor="middle" fill="rgba(201,169,110,0.35)" fontSize="9" fontFamily="sans-serif" letterSpacing="1">Hasta 5.90 m</text>

      <text x="140" y="385" fill="rgba(201,169,110,0.7)" fontSize="11" fontFamily="sans-serif" letterSpacing="3" fontWeight="600">PERSIANA VERTICAL</text>
      <text x="140" y="403" fill="rgba(201,169,110,0.35)" fontSize="9" fontFamily="sans-serif" letterSpacing="1.5">MANUAL · MOTORIZADO · AQUA · HASTA 5.90 M</text>
    </svg>
  )
}

/* ══════════════════════════════════════════════════════
   MOTORIZACIÓN — ecosistema smart home completo
══════════════════════════════════════════════════════ */
function IllustrationMotorizacion() {
  return (
    <svg viewBox="0 0 800 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="420" fill="#080E1A"/>

      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(201,169,110,0.15)"/>
          <stop offset="100%" stopColor="rgba(201,169,110,0)"/>
        </radialGradient>
        <radialGradient id="glowPhone" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(201,169,110,0.12)"/>
          <stop offset="100%" stopColor="rgba(201,169,110,0)"/>
        </radialGradient>
      </defs>

      {/* Glow central */}
      <ellipse cx="400" cy="210" rx="280" ry="180" fill="url(#glow1)"/>

      {/* ── TELÉFONO CENTRAL ── */}
      <rect x="340" y="60" width="120" height="220" rx="14" fill="#0D1525" stroke="#C9A96E" strokeWidth="1.8"/>
      <rect x="345" y="70" width="110" height="200" rx="10" fill="#060C18" stroke="rgba(201,169,110,0.15)" strokeWidth="1"/>
      {/* Pantalla app */}
      <rect x="350" y="78" width="100" height="15" rx="4" fill="rgba(201,169,110,0.1)"/>
      <text x="400" y="89" textAnchor="middle" fill="rgba(201,169,110,0.7)" fontSize="7.5" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">Mi Casa • Cortinas</text>
      {/* Persiana en pantalla */}
      <rect x="355" y="100" width="90" height="70" rx="4" fill="rgba(201,169,110,0.05)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.8"/>
      <rect x="357" y="102" width="86" height="6" rx="1" fill="rgba(201,169,110,0.2)"/>
      {[110,117,124,131,138,145,155,162].map((y,i) => (
        <rect key={y} x="357" y={y} width="86" height={i%2===0?5:3} rx="0.5"
          fill={`rgba(201,169,110,${i%2===0?0.15:0.05})`}/>
      ))}
      {/* Slider de apertura */}
      <text x="400" y="186" textAnchor="middle" fill="rgba(201,169,110,0.4)" fontSize="7" fontFamily="sans-serif">Apertura: 65%</text>
      <rect x="358" y="190" width="84" height="5" rx="2.5" fill="rgba(255,255,255,0.05)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.8"/>
      <rect x="358" y="190" width="55" height="5" rx="2.5" fill="rgba(201,169,110,0.3)"/>
      <circle cx="413" cy="192.5" r="6" fill="#C9A96E"/>
      {/* Botones */}
      {['Sala','Cuarto','Oficina','Todas'].map((label, i) => (
        <g key={label}>
          <rect x={354 + (i % 2) * 47} y={203 + Math.floor(i/2) * 24} width="43" height="18" rx="4"
            fill={i===0?'rgba(201,169,110,0.2)':'rgba(255,255,255,0.03)'}
            stroke={i===0?'rgba(201,169,110,0.4)':'rgba(255,255,255,0.08)'} strokeWidth="0.8"/>
          <text x={375 + (i % 2) * 47} y={215 + Math.floor(i/2) * 24}
            textAnchor="middle" fill={i===0?'#C9A96E':'rgba(255,255,255,0.3)'} fontSize="7" fontFamily="sans-serif">{label}</text>
        </g>
      ))}
      {/* Botón home */}
      <circle cx="400" cy="268" r="7" fill="rgba(201,169,110,0.15)" stroke="rgba(201,169,110,0.4)" strokeWidth="1"/>

      {/* ── VENTANA IZQUIERDA con persiana motorizada ── */}
      <rect x="50" y="80" width="200" height="220" rx="3" fill="#060C18" stroke="#1A2A4A" strokeWidth="1.5"/>
      <rect x="48" y="72" width="204" height="14" rx="3" fill="#15120A" stroke="#C9A96E" strokeWidth="1.2"/>
      {/* Persiana izquierda */}
      {Array.from({length:12},(_,i)=>i).map(i=>(
        <rect key={i} x="52" y={86 + i*13} width="196" height="9" rx="1"
          fill={`rgba(201,169,110,${i%2===0?0.12:0.04})`}
          stroke={`rgba(201,169,110,${i%2===0?0.25:0.08})`} strokeWidth="0.5"/>
      ))}
      <rect x="52" y="242" width="196" height="6" rx="1" fill="#15120A" stroke="rgba(201,169,110,0.4)" strokeWidth="1"/>
      {/* Motor izquierda */}
      <rect x="218" y="65" width="38" height="20" rx="4" fill="#15120A" stroke="#C9A96E" strokeWidth="1.2"/>
      <circle cx="237" cy="75" r="5" fill="rgba(201,169,110,0.3)" stroke="#C9A96E" strokeWidth="1"/>
      <circle cx="237" cy="75" r="2" fill="#C9A96E"/>

      {/* ── VENTANA DERECHA con persiana motorizada ── */}
      <rect x="550" y="80" width="200" height="220" rx="3" fill="#060C18" stroke="#1A2A4A" strokeWidth="1.5"/>
      <rect x="548" y="72" width="204" height="14" rx="3" fill="#15120A" stroke="#C9A96E" strokeWidth="1.2"/>
      {Array.from({length:12},(_,i)=>i).map(i=>(
        <rect key={i} x="552" y={86 + i*13} width="196" height="9" rx="1"
          fill={`rgba(201,169,110,${i%2===0?0.12:0.04})`}
          stroke={`rgba(201,169,110,${i%2===0?0.25:0.08})`} strokeWidth="0.5"/>
      ))}
      <rect x="552" y="242" width="196" height="6" rx="1" fill="#15120A" stroke="rgba(201,169,110,0.4)" strokeWidth="1"/>
      <rect x="548" y="65" width="38" height="20" rx="4" fill="#15120A" stroke="#C9A96E" strokeWidth="1.2"/>
      <circle cx="567" cy="75" r="5" fill="rgba(201,169,110,0.3)" stroke="#C9A96E" strokeWidth="1"/>
      <circle cx="567" cy="75" r="2" fill="#C9A96E"/>

      {/* ── SEÑALES WiFi del teléfono ── */}
      {/* Hacia ventana izquierda */}
      {[1,2,3].map(i=>(
        <line key={i} x1={340 - i*10} y1={130 + i*5} x2={260 + i*5} y2={140 + i*3}
          stroke="rgba(56,189,248,0.25)" strokeWidth="1" strokeDasharray="4 3"/>
      ))}
      <path d="M342 160 L258 170" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.6"/>
      <polygon points="262,167 252,173 258,178" fill="rgba(56,189,248,0.5)"/>

      {/* Hacia ventana derecha */}
      <path d="M458 160 L542 170" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.6"/>
      <polygon points="538,167 548,173 542,178" fill="rgba(56,189,248,0.5)"/>

      {/* ── ECOSISTEMAS ── */}
      {/* Alexa arriba izquierda */}
      <circle cx="120" cy="340" r="36" fill="rgba(201,169,110,0.05)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
      <circle cx="120" cy="332" r="14" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.4)" strokeWidth="1"/>
      {[0,1,2].map(i=>(
        <path key={i} d={`M${108+i*4} ${326-i*3} Q120 ${318-i*4} ${132-i*4} ${326-i*3}`}
          stroke="rgba(56,189,248,0.5)" strokeWidth="1" fill="none" strokeLinecap="round"/>
      ))}
      <text x="120" y="358" textAnchor="middle" fill="rgba(201,169,110,0.5)" fontSize="9" fontFamily="sans-serif" letterSpacing="0.5">Amazon Alexa</text>

      {/* Google arriba derecha */}
      <circle cx="680" cy="340" r="36" fill="rgba(201,169,110,0.05)" stroke="rgba(201,169,110,0.2)" strokeWidth="1"/>
      <circle cx="680" cy="332" r="14" fill="rgba(66,133,244,0.08)" stroke="rgba(66,133,244,0.3)" strokeWidth="1"/>
      <text x="680" y="333" textAnchor="middle" fill="rgba(66,133,244,0.7)" fontSize="9" fontFamily="sans-serif" fontWeight="700">G</text>
      <text x="680" y="358" textAnchor="middle" fill="rgba(201,169,110,0.5)" fontSize="9" fontFamily="sans-serif" letterSpacing="0.5">Google Home</text>

      {/* Apple HomeKit centro abajo */}
      <circle cx="400" cy="355" r="30" fill="rgba(201,169,110,0.05)" stroke="rgba(201,169,110,0.15)" strokeWidth="1"/>
      <path d="M392 350 Q400 342 408 350 Q404 358 400 360 Q396 358 392 350Z" fill="rgba(255,255,255,0.15)"/>
      <text x="400" y="375" textAnchor="middle" fill="rgba(201,169,110,0.5)" fontSize="9" fontFamily="sans-serif" letterSpacing="0.5">Apple HomeKit</text>

      {/* Conexiones desde phone hacia ecosistemas */}
      <line x1="360" y1="290" x2="150" y2="316" stroke="rgba(201,169,110,0.12)" strokeWidth="1" strokeDasharray="3 4"/>
      <line x1="440" y1="290" x2="650" y2="316" stroke="rgba(201,169,110,0.12)" strokeWidth="1" strokeDasharray="3 4"/>
      <line x1="400" y1="292" x2="400" y2="325" stroke="rgba(201,169,110,0.12)" strokeWidth="1" strokeDasharray="3 4"/>

      <text x="400" y="408" textAnchor="middle" fill="rgba(201,169,110,0.7)" fontSize="11" fontFamily="sans-serif" letterSpacing="3" fontWeight="600">MOTORIZACIÓN INTELIGENTE</text>
    </svg>
  )
}

/* ══════════════════════════════════════════════════════
   MAPA DE ILUSTRACIONES
══════════════════════════════════════════════════════ */
const illustrations: Record<ProductType, React.ReactNode> = {
  'enrollables':    <IllustrationEnrollable />,
  'sheer-elegance': <IllustrationSheer />,
  'verticales':     <IllustrationVerticales />,
  'motorizacion':   <IllustrationMotorizacion />,
}

/* ══════════════════════════════════════════════════════
   COMPONENTE PRINCIPAL
══════════════════════════════════════════════════════ */
export default function ProductCover({ type, height = 380 }: Props) {
  return (
    <div style={{
      width: '100%',
      height: typeof height === 'number' ? `${height}px` : height,
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(201,169,110,0.2)',
      background: '#080E1A',
    }}>
      {illustrations[type]}
    </div>
  )
}
