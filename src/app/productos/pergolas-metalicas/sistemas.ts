export type Ficha = { label: string; value: string; pendiente?: boolean }

export type Sistema = {
  slug: string
  nombre: string
  sub: string
  tag: string
  resumen: string
  img: string
  imgAlt: string
  usos: string[]
  ficha: Ficha[]
  notas: string[]
  destacado?: boolean
  pendienteDecision?: string
}

export const PENDIENTE = 'por definir'

export const sistemas: Sistema[] = [
  {
    slug: 'adosada-policarbonato',
    nombre: 'Pérgola adosada con policarbonato',
    sub: 'Un muro + 2 columnas',
    tag: 'La más pedida en terrazas',
    resumen: 'La viga trasera se apoya en ménsulas ancladas a la casa; el frente en dos columnas. Menos columnas, menos huecos en el piso y techo que deja pasar luz sin calor directo.',
    img: '/pergolas-metalicas/adosada-policarbonato.jpg',
    imgAlt: 'Pérgola metálica adosada con techo de policarbonato bronce sobre terraza',
    usos: ['Terrazas de apartamento', 'Patios traseros', 'Comedores exteriores'],
    ficha: [
      { label: 'Estructura', value: 'Tubo estructural A500 Gr. C. Columnas 100×100×2,5 mm · viga 100×50×2,0 mm · correas 80×40×2,0 mm' },
      { label: 'Techo', value: 'Policarbonato alveolar 6 u 8 mm, bronce u opal, protección UV 10 años (Ajover)' },
      { label: 'Medidas', value: 'Ancho hasta 6 m · salida hasta 4 m por módulo. Mayores con cálculo estructural' },
      { label: 'Altura libre', value: '2,4 – 2,8 m' },
      { label: 'Pendiente y agua', value: '≥ 5° hacia el frente · canal perimetral y bajante por la columna' },
      { label: 'Anclaje al muro', value: 'Ménsulas de platina 1/4" cada ≤ 1,5 m, con anclaje químico o expansivo según el muro, y flanche sellado' },
      { label: 'Anclaje al piso', value: 'Platina 200×200×6 mm, 4 anclajes de 1/2"; químico en losa aligerada o terraza impermeabilizada' },
      { label: 'Acabado', value: 'Anticorrosivo + esmalte poliuretano, o pintura electrostática a color' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Pedir permiso de copropiedad antes de fabricar', 'Se respeta la impermeabilización existente: sello y reposición alrededor de cada pie'],
    destacado: true,
  },
  {
    slug: 'autoportante-policarbonato',
    nombre: 'Pérgola autoportante con policarbonato',
    sub: '4 columnas, sin muros',
    tag: 'Jardines · piscina · BBQ',
    resumen: 'Estructura independiente sobre cuatro columnas con cartelas en las esquinas. Va donde no hay muro: jardín, borde de piscina, zona de asados.',
    img: '/pergolas-metalicas/autoportante-policarbonato.jpg',
    imgAlt: 'Pérgola metálica autoportante de cuatro columnas junto a una piscina',
    usos: ['Jardines', 'Zonas de piscina', 'Áreas de BBQ y kioscos'],
    ficha: [
      { label: 'Estructura', value: 'Tubo estructural A500 Gr. C. 4 columnas 100×100×2,5 mm · vigas perimetrales 100×50×2,0 mm · correas 80×40×2,0 mm · cartelas de platina 1/4"' },
      { label: 'Techo', value: 'Policarbonato alveolar 6 u 8 mm bronce / opal, o compacto 4–6 mm' },
      { label: 'Medidas', value: 'Módulos de 3×3 m hasta 4×6 m. Ampliable por módulos con columna compartida' },
      { label: 'Altura libre', value: '2,4 – 3,0 m' },
      { label: 'Pendiente y agua', value: '≥ 5° a un agua · canal en el lado bajo · bajante por una columna' },
      { label: 'Anclaje al piso', value: 'Sobre placa maciza: platina 200×200×6 mm + 4 chazos de cuña 1/2". Sobre tierra o jardín: zapata de concreto con pernos embebidos' },
      { label: 'Acabado', value: 'Anticorrosivo + esmalte poliuretano, o pintura electrostática a color' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Las cartelas en las cuatro esquinas son las que la mantienen rígida al viento', 'Luz entre columnas > 4 m: cálculo estructural (NSR-10)'],
  },
  {
    slug: 'celosia-lamas-fijas',
    nombre: 'Pérgola abierta de lamas fijas',
    sub: 'Sombra filtrada, sin techo cerrado',
    tag: 'Diseño · la más económica',
    resumen: 'Solo estructura y lamas metálicas inclinadas: sombra rayada, ventilación total y la estética más arquitectónica. No protege de la lluvia.',
    img: '/pergolas-metalicas/celosia-lamas-fijas.jpg',
    imgAlt: 'Pérgola metálica abierta con lamas fijas proyectando sombra rayada',
    usos: ['Fachadas y accesos', 'Patios donde la lluvia no importa', 'Complemento de piscina'],
    ficha: [
      { label: 'Estructura', value: 'Tubo estructural A500 Gr. C. Columnas 90×90 o 100×100 · vigas 100×50 · lamas en tubo 80×40 o 100×40 inclinadas 45–51°' },
      { label: 'Techo', value: 'Ninguno. Lamas cada 10–15 cm de separación (37–40 % de área abierta)' },
      { label: 'Medidas', value: 'Módulos de 3×3 m hasta 4×5 m' },
      { label: 'Altura libre', value: '2,4 – 3,0 m' },
      { label: 'Agua', value: 'No aplica. Se puede añadir policarbonato encima más adelante' },
      { label: 'Anclaje al piso', value: 'Platina 150×150×6 mm, 4 anclajes de 3/8"–1/2"' },
      { label: 'Acabado', value: 'Pintura electrostática recomendada (muchas aristas a la vista)' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Las lamas orientadas al sur-occidente cortan el sol de la tarde en Girardot', 'Se puede combinar con la pérgola de lona Safra como techo retráctil'],
  },
  {
    slug: 'cubierta-parqueadero-teja',
    nombre: 'Cubierta de parqueadero',
    sub: 'Teja termoacústica o policarbonato compacto',
    tag: 'Vehículos',
    resumen: 'Misma estructura, techo cerrado. Protege el carro del sol directo y del granizo; la teja termoacústica además corta el calor y el ruido de la lluvia.',
    img: '/pergolas-metalicas/cubierta-parqueadero-teja.jpg',
    imgAlt: 'Cubierta metálica de parqueadero con teja termoacústica y un vehículo debajo',
    usos: ['Parqueadero de 1 o 2 vehículos', 'Zonas de servicio y lavado', 'Bodegas livianas'],
    ficha: [
      { label: 'Estructura', value: 'Tubo estructural A500 Gr. C. Columnas 100×100×3,0 mm · vigas 120×60×2,5 mm · correas 80×40×2,0 mm cada ≤ 1,0 m' },
      { label: 'Techo', value: 'Teja termoacústica (lámina + núcleo aislante) o policarbonato compacto 4–6 mm' },
      { label: 'Medidas', value: '3×5 m (1 vehículo) · 5,5×5 m (2 vehículos). Voladizo frontal hasta 1 m' },
      { label: 'Altura libre', value: '2,3 – 2,6 m (camionetas: 2,6 m)' },
      { label: 'Pendiente y agua', value: 'Teja ≥ 10 % · policarbonato ≥ 5° · canal de mayor sección y bajante a desagüe' },
      { label: 'Anclaje al piso', value: 'Platina 200×200×6 mm con 4 anclajes de 1/2"; en andén o placa de parqueo, chazo de cuña; en tierra, zapata' },
      { label: 'Acabado', value: 'Anticorrosivo + esmalte poliuretano (estructura alta, retoque fácil) o electrostática' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Si da a la calle, revisar retiro y norma del municipio antes de cotizar'],
  },
  {
    slug: 'bioclimatica-lamas-orientables',
    nombre: 'Pérgola bioclimática',
    sub: 'Lamas de aluminio orientables, motorizadas',
    tag: 'Gama alta · importada',
    resumen: 'Las lamas giran de 0° a 130°: abiertas ventilan, inclinadas dan sombra, cerradas son techo contra la lluvia. Motor con control remoto y sensor de lluvia opcional.',
    img: '/pergolas-metalicas/bioclimatica-lamas-orientables.jpg',
    imgAlt: 'Pérgola bioclimática de aluminio con lamas orientables sobre terraza moderna',
    usos: ['Terrazas de alto nivel', 'Restaurantes y hoteles', 'Quien quiere sol, sombra y lluvia a voluntad'],
    ficha: [
      { label: 'Estructura', value: 'Aluminio extruido 6063-T5. Pilares 125×125 mm con drenaje interno · perimetral 195×40 mm · lamas 160–180 mm con junta EPDM' },
      { label: 'Techo', value: 'Lamas orientables 0–130°, cierran estancas; recogida de agua por canal perimetral y bajada por los pilares' },
      { label: 'Medidas', value: 'Módulo hasta 4 × 6 m; ampliable modularmente' },
      { label: 'Altura libre', value: '2,5 – 2,8 m' },
      { label: 'Accionamiento', value: 'Motor 24 V oculto en el bastidor, mando radio; sensor de lluvia y viento; tira LED opcional' },
      { label: 'Resistencia', value: 'Viento clase 6 · agua 30 mm/h (ensayo 4×6 m)' },
      { label: 'Anclaje al piso', value: 'Platina propia del sistema sobre placa maciza o zapata; anclaje químico 1/2"' },
      { label: 'Acabado', value: 'Lacado RAL de fábrica (blanco, antracita, negro)' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Sistema importado: no se fabrica en taller local, se instala', 'Precio de mercado desde $25 M por 20 m² (manual) — decisión pendiente de si entra en la línea'],
    pendienteDecision: 'Jhon decide si esta línea entra',
  },
]
