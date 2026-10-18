export type Ficha = { label: string; value: string; pendiente?: boolean }

export type Estructura = {
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

export const estructuras: Estructura[] = [
  {
    slug: 'escaleras-metalicas',
    nombre: 'Escaleras metálicas',
    sub: 'Interiores y exteriores, a medida',
    tag: 'Vivienda · comercio',
    resumen: 'Rectas, en L, en U o de caracol. Zancas en platina o perfil, peldaños en lámina alfajor, madera o concreto, baranda integrada. Se fabrican en taller y se montan en un día.',
    img: '/estructuras/escaleras-metalicas.jpg',
    imgAlt: 'Escalera metálica exterior negra con peldaños de lámina alfajor y baranda',
    usos: ['Acceso a segundo piso o terraza', 'Locales con mezzanine', 'Escaleras de emergencia'],
    ficha: [
      { label: 'Sistema', value: 'Dos zancas laterales (platina 1/4"–3/8" × 8"–10" o canal C) o zanca central (tubo 150×100) con ménsulas' },
      { label: 'Peldaños', value: 'Lámina alfajor 1/8", madera sobre bastidor 40×40, o bandeja para concreto. Huella ≥ 28 cm · contrahuella ≤ 18 cm (NSR-10 K)' },
      { label: 'Baranda', value: 'Altura ≥ 0,90 m (1,10 m en terrazas) · tubo 1½" + verticales cada ≤ 10 cm, cable de acero o vidrio templado' },
      { label: 'Anclaje', value: 'Platina en arranque y llegada con 4 anclajes de 1/2"; en placa aligerada, química en la viga' },
      { label: 'Acabado', value: 'Electrostática (pieza cabe entera en horno) o anticorrosivo + esmalte; galvanizado en caliente si es exterior sin mantenimiento' },
      { label: 'Diseño', value: 'Cálculo a carga viva 300 kg/m² (vivienda) o 500 kg/m² (público); memoria firmada cuando lo exige la curaduría' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Se toman medidas con el piso terminado: 1 cm de error en la altura total descuadra todos los peldaños', 'Caracol solo como secundaria: no cumple ancho de evacuación'],
    destacado: true,
  },
  {
    slug: 'mezzanine-altillo',
    nombre: 'Mezzanines y altillos',
    sub: 'Un nivel nuevo sin obra húmeda',
    tag: 'Locales · bodegas · vivienda',
    resumen: 'Aprovechar la altura: vigas y columnas de acero, entrepiso en lámina colaborante con concreto o en tablero, escalera y baranda. Se monta en días y suma metros útiles.',
    img: '/estructuras/mezzanine-altillo.jpg',
    imgAlt: 'Mezzanine metálico con vigas de acero, entrepiso de lámina colaborante y baranda dentro de un local',
    usos: ['Local comercial', 'Bodega y taller', 'Estudio o habitación extra'],
    ficha: [
      { label: 'Sistema', value: 'Columnas tubo 150×150 o HEA · vigas IPE 160–240 o tubo 200×100 · viguetas PHR C cada 0,6–1,0 m' },
      { label: 'Entrepiso', value: 'Lámina colaborante (steel deck) cal. 22 + concreto 8–10 cm con malla, o tablero OSB/fibrocemento sobre viguetas' },
      { label: 'Luces', value: 'Hasta 6 m sin columna intermedia en vivienda; mayores con cálculo' },
      { label: 'Carga de diseño', value: '200–250 kg/m² vivienda · 500 kg/m² comercio y bodega liviana' },
      { label: 'Altura libre', value: '≥ 2,2 m bajo y sobre el mezzanine (ideal desde 4,6 m de altura total)' },
      { label: 'Anclaje', value: 'Platinas con pernos químicos a placa; verificar que la placa existente soporte la carga nueva' },
      { label: 'Acabado', value: 'Anticorrosivo + esmalte; ignífugo intumescente si la norma lo pide' },
      { label: 'Diseño', value: 'Memoria de cálculo y planos firmados por ingeniero estructural (obligatorio)' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Antes de cotizar se revisa la cimentación y la placa existente: el mezzanine carga sobre ellas', 'En local arrendado, la estructura apernada se puede desmontar'],
  },
  {
    slug: 'domos-claraboyas',
    nombre: 'Domos y claraboyas',
    sub: 'Luz natural sin calor directo',
    tag: 'Patios · locales · pasillos',
    resumen: 'Cubrir un patio interior o un vacío con estructura ligera y policarbonato: luz de día, protección de lluvia y ventilación controlada. En Girardot, siempre con policarbonato bronce u opal y rejilla de ventilación.',
    img: '/estructuras/domos-claraboyas.jpg',
    imgAlt: 'Domo metálico curvo con policarbonato opal cubriendo el patio interior de una casa',
    usos: ['Patios de ropas y luz', 'Vacíos de escalera', 'Pasillos de locales'],
    ficha: [
      { label: 'Sistema', value: 'Arcos o cerchas en tubo 60×40 / 80×40 rolados, correas 40×40 cada ≤ 1,05 m, perfil snap de aluminio' },
      { label: 'Cubierta', value: 'Policarbonato alveolar 8 mm bronce/opal curvado en frío (radio ≥ 1,4 m) o compacto 4–6 mm' },
      { label: 'Formas', value: 'Arco de medio punto, a dos aguas, plano con pendiente ≥ 5°' },
      { label: 'Luces', value: 'Hasta 6 m en arco sin apoyo intermedio' },
      { label: 'Ventilación', value: 'Franja lateral con celosía o rejilla: sin ella el patio se vuelve horno' },
      { label: 'Anclaje', value: 'Platinas a muros o vigas de amarre; flanche y sello en todo el perímetro' },
      { label: 'Acabado', value: 'Electrostática blanca o negra' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Prueba de agua en el perímetro antes del acta: el domo gotea por el flanche, no por el centro', 'Policarbonato cristal queda descartado en clima cálido'],
  },
  {
    slug: 'cubiertas-comerciales',
    nombre: 'Cubiertas de locales, salones y bodegas',
    sub: 'Cerchas y correas, luces de 8 a 20 m',
    tag: 'Comercio · industria liviana',
    resumen: 'Techo completo para un local, salón de eventos, restaurante o bodega: cerchas o vigas de alma llena, correas, teja termoacústica o sándwich, canales y bajantes. Con cálculo y planos de taller.',
    img: '/estructuras/cubiertas-comerciales.jpg',
    imgAlt: 'Cubierta metálica de un salón con cerchas de acero y teja termoacústica vista desde dentro',
    usos: ['Salones de eventos y restaurantes', 'Bodegas y talleres', 'Canchas y zonas comunes'],
    ficha: [
      { label: 'Sistema', value: 'Cerchas en tubo o ángulo (luces 8–20 m) o vigas IPE/PHR · correas PHR C 160–220 cada 1,2–1,5 m · arriostramientos en cruz de San Andrés' },
      { label: 'Cubierta', value: 'Teja termoacústica, sándwich 30–50 mm o lámina arquitectónica; traslúcidas intercaladas para luz' },
      { label: 'Pendiente', value: '10–15 % · canal galvanizada cal. 22 · bajantes cada 10–12 m' },
      { label: 'Cargas', value: 'Viento según NSR-10 B.6 (Girardot) · carga viva de cubierta 50 kg/m² · granizo' },
      { label: 'Apoyos', value: 'Sobre columnas metálicas propias o sobre viga de amarre de la mampostería existente, con platinas y pernos' },
      { label: 'Acabado', value: 'Anticorrosivo + esmalte; galvanizado en caliente en bodegas' },
      { label: 'Diseño', value: 'Memoria y planos firmados; soldadores calificados AWS D1.1' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Se entrega con planos as-built y certificados de los materiales', 'En salones, aislamiento térmico es obligatorio para que el espacio sea usable a mediodía'],
  },
  {
    slug: 'ampliacion-segundo-piso',
    nombre: 'Ampliaciones y segundos pisos',
    sub: 'Estructura liviana sobre lo construido',
    tag: 'Vivienda',
    resumen: 'Un piso más sin sobrecargar la casa: columnas y vigas de acero, entrepiso en lámina colaborante, muros livianos y cubierta. Pesa la mitad que el concreto y se levanta en semanas.',
    img: '/estructuras/ampliacion-segundo-piso.jpg',
    imgAlt: 'Ampliación de segundo piso en estructura metálica sobre una casa, con lámina colaborante y columnas de acero',
    usos: ['Segundo piso sobre casa de un nivel', 'Terraza convertida en habitación', 'Local sobre garaje'],
    ficha: [
      { label: 'Sistema', value: 'Columnas tubo 150×150×4 o HEA 140 · vigas IPE 200–270 · viguetas PHR C 200 cada 0,6–1,0 m' },
      { label: 'Entrepiso', value: 'Lámina colaborante cal. 20–22 + concreto 10 cm con malla electrosoldada' },
      { label: 'Muros', value: 'Perfilería galvanizada (drywall) con fibrocemento exterior y aislamiento; o mampostería liviana si el cálculo lo permite' },
      { label: 'Cubierta', value: 'Teja termoacústica o sándwich con cielo raso ventilado' },
      { label: 'Cimentación', value: 'Se verifica la existente: casi siempre hay que reforzar columnas o zapatas antes de cargar' },
      { label: 'Diseño', value: 'Estudio de la estructura existente + diseño firmado + licencia de construcción en curaduría' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Sin licencia no se construye: la gestionamos con el ingeniero', 'El acero permite trabajar con la familia viviendo abajo'],
  },
  {
    slug: 'locales-fachadas',
    nombre: 'Locales comerciales y fachadas',
    sub: 'Estructura, frente y aviso',
    tag: 'Comercio',
    resumen: 'Del esqueleto al frente: estructura del local o la ampliación, fachada en lámina perforada o paneles metálicos, marquesina de aviso y rejas. Una sola mano para abrir el negocio.',
    img: '/estructuras/locales-fachadas.jpg',
    imgAlt: 'Fachada de local comercial con estructura metálica, paneles perforados negros y marquesina',
    usos: ['Apertura de locales', 'Remodelación de fachadas', 'Kioscos y módulos comerciales'],
    ficha: [
      { label: 'Sistema', value: 'Pórticos en tubo 150×150 / IPE · entrepiso o cubierta liviana · subestructura de fachada en tubo 40×40' },
      { label: 'Fachada', value: 'Lámina perforada cal. 18, paneles compuestos (ACM), listones metálicos, celosía; retroiluminación LED' },
      { label: 'Cierre', value: 'Cortina enrollable metálica, reja de seguridad, puerta en perfil' },
      { label: 'Aviso', value: 'Marquesina portante para aviso y luz; cumple retiro y altura del municipio' },
      { label: 'Acabado', value: 'Electrostática a color corporativo' },
      { label: 'Diseño', value: 'Planos de taller + render; cálculo firmado si hay entrepiso o luces > 6 m' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Se coordina con el aviso y la eléctrica desde el diseño, no después', 'Módulos desmontables para locales en arriendo'],
  },
  {
    slug: 'pasarelas-puentes',
    nombre: 'Pasarelas y puentes peatonales',
    sub: 'Cruces y recorridos elevados',
    tag: 'Fincas · conjuntos · comercio',
    resumen: 'Conectar dos niveles o cruzar una quebrada, una vía interna o un espejo de agua: viga-cajón o cercha, piso en lámina alfajor o madera, baranda normativa. Para fincas, conjuntos y proyectos comerciales.',
    img: '/estructuras/pasarelas-puentes.jpg',
    imgAlt: 'Pasarela peatonal metálica negra con piso de madera y baranda cruzando un jardín con quebrada',
    usos: ['Cruce de quebrada en finca', 'Conexión entre bloques', 'Mirador elevado'],
    ficha: [
      { label: 'Sistema', value: 'Dos vigas principales (IPE 200–300 o cercha en tubo) · travesaños · piso en lámina alfajor 3/16" o deck' },
      { label: 'Luces', value: '4–12 m en un tramo; mayores con apoyo intermedio o cercha' },
      { label: 'Ancho', value: '1,2 m peatonal · 1,5 m si cruza público' },
      { label: 'Baranda', value: '≥ 1,10 m, verticales cada ≤ 10 cm, resistente a 75 kg/m horizontal' },
      { label: 'Apoyos', value: 'Estribos de concreto con pernos embebidos; neopreno de apoyo en luces largas' },
      { label: 'Acabado', value: 'Galvanizado en caliente (está sobre agua o vegetación) y pintura' },
      { label: 'Diseño', value: 'Memoria firmada obligatoria · carga viva 400–500 kg/m²' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Si cruza cauce, se revisa nivel de creciente antes de fijar la altura', 'Piso antideslizante obligatorio en zona de piscina o lluvia'],
  },
  {
    slug: 'naves-porticos',
    nombre: 'Naves y pórticos estructurales',
    sub: 'Bodegas, talleres, edificaciones livianas',
    tag: 'Industria · agro · edificios livianos',
    resumen: 'La estructura completa de una bodega, un taller, un salón grande o una edificación liviana de uno o dos pisos: pórticos de acero, correas, arriostramientos, cubierta y cerramiento. Diseño, fabricación y montaje con grúa.',
    img: '/estructuras/naves-porticos.jpg',
    imgAlt: 'Nave metálica con pórticos de acero y correas durante el montaje, cubierta parcialmente instalada',
    usos: ['Bodegas y talleres', 'Galpones agrícolas', 'Salones y edificaciones livianas'],
    ficha: [
      { label: 'Sistema', value: 'Pórticos en perfiles IPE/HEA o armados en lámina, luces 10–30 m · correas PHR Z/C · arriostramientos · vigas de amarre' },
      { label: 'Cubierta y cierre', value: 'Teja arquitectónica o sándwich · cerramiento en lámina, mampostería o panel' },
      { label: 'Cimentación', value: 'Zapatas con pernos de anclaje F1554 según diseño; estudio de suelos' },
      { label: 'Cargas', value: 'NSR-10 completo: viento, sismo (Girardot zona intermedia), carga viva, equipos' },
      { label: 'Fabricación', value: 'Planos de taller, soldadores calificados AWS D1.1, control de calidad por inspección visual y, si se exige, ensayos' },
      { label: 'Montaje', value: 'Grúa o manipulador, plan de izaje, trabajo en alturas certificado' },
      { label: 'Acabado', value: 'Anticorrosivo + esmalte o galvanizado en caliente' },
      { label: 'Diseño', value: 'Ingeniero estructural responsable · licencia de construcción' },
      { label: 'Garantía', value: PENDIENTE, pendiente: true },
      { label: 'Plazo', value: PENDIENTE, pendiente: true },
    ],
    notas: ['Se cotiza por kilo de acero montado más cubierta y cerramiento por m²', 'Proyectos de más de dos pisos o uso público: solo con firma y supervisión técnica independiente'],
  },
]

export const proceso = [
  { n: '01', t: 'Levantamiento y alcance', d: 'Medidas, estado de lo existente, uso previsto y cargas. Se define si hace falta licencia y estudio de suelos.' },
  { n: '02', t: 'Diseño y memoria de cálculo', d: 'Ingeniero estructural responsable: NSR-10, planos estructurales y memoria firmada. Nada se fabrica sin esto.' },
  { n: '03', t: 'Planos de taller y despiece', d: 'Cada pieza con su perfil, longitud, perforaciones y soldaduras. Lista de materiales y peso total.' },
  { n: '04', t: 'Fabricación', d: 'Corte, armado, soldadura con soldadores calificados, limpieza y pintura en taller. Inspección antes de salir.' },
  { n: '05', t: 'Montaje', d: 'Anclajes, izaje, aplomado y apriete con torque. Trabajo en alturas certificado.' },
  { n: '06', t: 'Entrega', d: 'Planos as-built, certificados de materiales, acta de entrega y garantía escrita.' },
]

export const entregables = [
  'Memoria de cálculo y planos estructurales firmados',
  'Planos de taller y lista de materiales con pesos',
  'Certificados de calidad del acero (A36, A572, A500)',
  'Calificación de soldadores (WPQ) según AWS D1.1',
  'Planos as-built y acta de entrega con fotos',
  'Garantía escrita y manual de mantenimiento',
]
