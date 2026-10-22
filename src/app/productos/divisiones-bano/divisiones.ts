export type Ficha = { label: string; value: string; pendiente?: boolean }

export type Division = {
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
}

export const PENDIENTE = 'Consultar'

export const divisiones: Division[] = [
  {
    slug: 'fija-walk-in',
    nombre: 'Fija · Walk-in',
    sub: 'Un solo panel, sin puerta',
    tag: 'Diseño abierto',
    resumen: 'Un panel de vidrio fijo que contiene el agua de un lado, sin puerta ni partes móviles. La opción más económica por metro cuadrado y la más usada en duchas abiertas de diseño minimalista.',
    img: '/divisiones-bano/fija-walk-in.jpg',
    imgAlt: 'Panel de vidrio templado fijo en ducha walk-in sin puerta, sujeto con pinzas de acero inoxidable',
    usos: ['Ducha abierta sin puerta', 'Complemento de un muro medio existente', 'Baños pequeños sin espacio de giro'],
    ficha: [
      { label: 'Vidrio', value: 'Templado transparente o esmerilado, 8 mm o 10 mm · borde pulido o biselado' },
      { label: 'Sujeción', value: 'Perfil U de aluminio en 2–3 lados, o pinzas (clamps) de piso y pared en inox 304 para look sin marco' },
      { label: 'Medidas', value: 'Altura 1,90–2,00 m estándar · ancho hasta 1,20 m sin refuerzo intermedio' },
      { label: 'Sello', value: 'Silicona neutra antihongos en todo el contacto con muro y piso · no silicona acética (se amarillea)' },
      { label: 'Tratamiento', value: 'Anti-cal con nanotecnología opcional: sella el microporo del templado donde se pega la cal' },
      { label: 'Norma', value: 'NTC 1578 · vidrio de seguridad templado, mínimo 6 mm en bordes libres, sello de certificación visible en el vidrio' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Un panel fijo no reemplaza la puerta si la ducha no tiene otro cerramiento: solo contiene el agua del lado donde está', 'El vidrio no se corta ni se perfora después de templado: la medida se toma en obra terminada, no antes'],
    destacado: true,
  },
  {
    slug: 'corredera',
    nombre: 'Corredera',
    sub: 'Dos o tres hojas sobre riel',
    tag: 'Baños medianos y pequeños',
    resumen: 'Las hojas se deslizan sobre riel de aluminio, una fija y una o dos móviles con traslape. No necesita espacio de apertura hacia adentro ni afuera: la mejor opción cuando el baño es estrecho.',
    img: '/divisiones-bano/corredera.jpg',
    imgAlt: 'División de ducha corredera con dos hojas de vidrio templado sobre riel de aluminio cromado',
    usos: ['Baños pequeños y medianos sin espacio de giro', 'Remodelación sobre un vano ya enchapado', 'Duchas en apartamentos'],
    ficha: [
      { label: 'Vidrio', value: 'Templado 6 mm u 8 mm · 2 o 3 hojas con traslape mínimo de 4–5 cm' },
      { label: 'Riel', value: 'Perfil de aluminio anodizado natural, negro o cromado · rodachinas de nylon o acero con rodamiento sellado' },
      { label: 'Guía inferior', value: 'Riel con canal y drenaje, o sistema colgante sin riel de piso (más fácil de limpiar, menos cal atrapada)' },
      { label: 'Sello', value: 'Felpa (burlete) en el canto de cierre + silicona neutra en el perímetro fijo' },
      { label: 'Norma', value: 'NTC 1578 · mínimo 6 mm en vidrios con bordes en contacto' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['El riel de piso junta cal y cabello; en uso diario se recomienda el sistema colgante aunque cueste un poco más', 'Las rodachinas con rodamiento sellado son las que no empiezan a sonar ni a trabarse al año de uso'],
  },
  {
    slug: 'abatible',
    nombre: 'Abatible · Batiente',
    sub: 'Puerta con bisagras',
    tag: 'Baños amplios',
    resumen: 'Puerta de vidrio sobre bisagras que abre hacia adentro o afuera, montada vidrio-a-vidrio o vidrio-a-muro. Apertura amplia y look limpio, sin riel visible.',
    img: '/divisiones-bano/abatible.jpg',
    imgAlt: 'Puerta abatible de ducha en vidrio templado con bisagras de acero inoxidable y tirador en barra',
    usos: ['Baños con espacio de giro disponible', 'Esquinas con panel fijo + puerta batiente', 'Acabado minimalista sin riel'],
    ficha: [
      { label: 'Vidrio', value: 'Templado 8 mm o 10 mm' },
      { label: 'Bisagras', value: 'Acero inoxidable 304/316 · montaje vidrio-vidrio o vidrio-muro · apertura 90°, 135° o 180° · autorretorno opcional' },
      { label: 'Manija', value: 'Tirador en barra o perilla, acabado inox o cromado' },
      { label: 'Tope', value: 'Regulador de piso o imán en el panel fijo: evita que la puerta golpee el muro o el sanitario' },
      { label: 'Sello', value: 'Felpa vertical en el canto de cierre + silicona neutra en el panel fijo' },
      { label: 'Norma', value: 'NTC 1578 · puertas sin marco con pivotes o bisagras: mínimo 6 mm · equivalente internacional ANSI Z97.1 / CPSC 16 CFR 1201 Cat. II' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Necesita el espacio de giro completo de la puerta: no sirve en baños muy angostos', 'El tope de piso no es decorativo: sin él la bisagra trabaja de más y con el tiempo afloja el vidrio'],
  },
  {
    slug: 'plegable',
    nombre: 'Plegable · Acordeón',
    sub: 'Hojas en fuelle',
    tag: 'Duchas estrechas',
    resumen: 'Las hojas se pliegan tipo acordeón hacia un extremo y liberan casi todo el vano de entrada. La solución cuando la ducha es angosta y no hay espacio de giro para una puerta batiente.',
    img: '/divisiones-bano/plegable.jpg',
    imgAlt: 'División de baño plegable tipo acordeón en vidrio templado con bisagras centrales',
    usos: ['Duchas muy estrechas', 'Remodelaciones donde no existe espacio de giro', 'Baños compactos de apartamento'],
    ficha: [
      { label: 'Vidrio', value: 'Templado 6 mm (hojas más livianas por el doble punto de giro)' },
      { label: 'Bisagras', value: 'Centrales entre hojas + bisagra de giro en el extremo, todas en acero inoxidable' },
      { label: 'Riel', value: 'Solo superior, con rodachinas; sin riel de piso' },
      { label: 'Hojas', value: '2 a 4 según el ancho del vano' },
      { label: 'Sello', value: 'Felpa en todos los cantos de plegado' },
      { label: 'Norma', value: 'NTC 1578 · vidrio de seguridad templado' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Libera casi todo el vano de entrada, pero es el sistema con más puntos de bisagra: el que más mantenimiento pide', 'No se recomienda en duchas de uso muy frecuente por varias personas: cada bisagra es un punto de desgaste'],
  },
  {
    slug: 'esquinera',
    nombre: 'Esquinera',
    sub: 'Dos paños en ángulo + puerta',
    tag: 'Ducha de esquina',
    resumen: 'Dos paños de vidrio en ángulo recto —fijo más fijo, o fijo más corredera— unidos con conector vidrio a vidrio. La configuración más común para duchas en esquina.',
    img: '/divisiones-bano/esquinera.jpg',
    imgAlt: 'División de baño esquinera en vidrio templado con conector vidrio a vidrio en acero inoxidable',
    usos: ['Ducha ubicada en esquina', 'Combinación con sistema corredizo para no perder espacio de giro', 'Baños en L'],
    ficha: [
      { label: 'Vidrio', value: 'Templado 6 mm u 8 mm' },
      { label: 'Configuración', value: 'Fijo + fijo en ángulo recto, o fijo + corredera, unidos con conector vidrio-vidrio (U-clip) a 90°' },
      { label: 'Herraje de unión', value: 'Barra estabilizadora horizontal o conector vertical vidrio-vidrio en acero inoxidable' },
      { label: 'Sello', value: 'Silicona estructural en la unión de los dos paños + silicona neutra en el perímetro' },
      { label: 'Norma', value: 'NTC 1578' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['El conector de la esquina es el punto que más se revisa en la instalación: si no queda a escuadra, el desnivel se ve desde la puerta', 'Se combina seguido con sistema corredizo para no perder espacio de giro en baños pequeños'],
  },
  {
    slug: 'frameless',
    nombre: 'Frameless · Sin marco',
    sub: 'Solo vidrio y herrajes',
    tag: 'Diseño premium',
    resumen: 'Sin perfiles de aluminio visibles: solo vidrio y herraje mínimo en acero inoxidable. El acabado más limpio y el de mayor espesor, porque aquí el vidrio carga solo todo el esfuerzo que en los otros sistemas absorbe el marco.',
    img: '/divisiones-bano/frameless.jpg',
    imgAlt: 'Ducha frameless sin marco en vidrio templado de 10 mm con herrajes minimalistas en acero inoxidable 316',
    usos: ['Baños de remodelación de alto nivel', 'Diseño minimalista sin perfiles visibles', 'Proyectos donde el vidrio es el acabado principal'],
    ficha: [
      { label: 'Vidrio', value: 'Templado 10 mm como mínimo · bordes pulidos a espejo o biselados' },
      { label: 'Herrajes', value: 'Bisagras y pinzas (clamps) de piso, techo o muro en acero inoxidable 316 · acabado pulido, negro mate o dorado' },
      { label: 'Sello', value: 'Silicona transparente de bajo perfil; sin perfil de aluminio que lo cubra' },
      { label: 'Tratamiento', value: 'Anti-cal con nanotecnología recomendado: sin marco, la mancha de cal se nota más' },
      { label: 'Norma', value: 'NTC 1578 · vidrio sin marco en baño; este sistema usa 10 mm (no el mínimo de 6 mm) por no tener perfil que lo arriostre' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['A mayor espesor, mayor peso: el anclaje al muro se calcula sobre el peso real del paño, no se estima', 'Toda perforación para herraje se define antes de enviar el vidrio a templar: después no se puede taladrar'],
  },
  {
    slug: 'para-tina',
    nombre: 'Para tina · Bañera',
    sub: 'Mampara corta sobre el borde',
    tag: 'Bañeras y tinas',
    resumen: 'Mampara de media altura que arranca desde el borde de la tina, fija o con bisagra pivotante que gira para facilitar la limpieza de los dos lados del vidrio.',
    img: '/divisiones-bano/para-tina.jpg',
    imgAlt: 'Mampara de vidrio templado para bañera con perfil U atornillado al borde de la tina',
    usos: ['Tinas y bañeras existentes', 'Reemplazo de cortina de baño por vidrio fijo', 'Baños de huéspedes'],
    ficha: [
      { label: 'Vidrio', value: 'Templado 6 mm · fijo o con bisagra pivotante (gira 180° para limpiar ambos lados)' },
      { label: 'Altura', value: '1,40–1,50 m (menor que una ducha completa: arranca desde el borde de la tina)' },
      { label: 'Anclaje', value: 'Perfil U atornillado al borde de la tina con sello de silicona + pinza de pared' },
      { label: 'Sello', value: 'Silicona 100 % en el encuentro con la tina: es el punto que más se revisa, porque ahí se filtra el agua hacia la base' },
      { label: 'Norma', value: 'NTC 1578' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Un sello mal hecho contra la tina humedece la base y, si hay piso de madera debajo, lo puede pudrir con el tiempo', 'La versión pivotante cuesta más pero es la única que se puede limpiar por los dos lados sin desmontarla'],
  },
]

export const proceso = [
  { n: '01', t: 'Visita y medición', d: 'Se mide el vano exacto, el nivel de piso y el plomo de los muros. El vidrio no se corta ni se perfora después de templado: el margen de error en esta medida es cero.' },
  { n: '02', t: 'Elección de sistema y vidrio', d: 'Fijo, corredizo, abatible, plegable, esquinero, frameless o enmarcado; espesor y acabado (transparente, esmerilado, satinado) según el sistema y la norma NTC 1578.' },
  { n: '03', t: 'Fabricación del vidrio templado', d: 'Corte, pulido de bordes y perforaciones para herraje (si aplica) antes del templado en horno certificado. Plazo propio del proveedor de vidrio.' },
  { n: '04', t: 'Preparación del sitio', d: 'Impermeabilización y enchape terminados antes de instalar: sin baldosa lista no se monta ningún sistema.' },
  { n: '05', t: 'Instalación y sellado', d: 'Anclaje de perfiles o herrajes, nivelación, montaje del vidrio y sellado con silicona neutra antihongos. 24 horas de curado antes de usar la ducha.' },
  { n: '06', t: 'Entrega', d: 'Prueba de agua, garantía escrita y recomendaciones de limpieza y tratamiento anti-cal.' },
]

export const entregables = [
  'Vidrio templado de seguridad NTC 1578 con sello de certificación visible en el vidrio',
  'Herrajes en acero inoxidable 304 o 316 según el sistema elegido',
  'Sellado con silicona neutra antihongos en todo el perímetro',
  'Prueba de agua antes del acta de entrega',
  'Garantía escrita y ficha de mantenimiento y limpieza',
  'Tratamiento anti-cal con nanotecnología disponible como opcional',
]
