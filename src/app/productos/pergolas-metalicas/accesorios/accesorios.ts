type ItemBase = {
  nombre: string
  uso: string
  spec: string
  material?: string
  unidad: string
  cant: string
  clave?: boolean
  evitar?: boolean
}

export type Item = ItemBase & { img: string; visual: string }

type GrupoBase = { slug: string; titulo: string; desc: string; items: ItemBase[] }
export type Grupo = Omit<GrupoBase, 'items'> & { items: Item[] }

const gruposBase: GrupoBase[] = [
  {
    slug: 'anclajes',
    titulo: 'Anclaje al piso y al muro',
    desc: 'Lo que une la pérgola al concreto. El tipo lo decide el piso: placa maciza, losa aligerada, ladrillo o zapata nueva.',
    items: [
      { clave: true, nombre: 'Chazo expansivo de cuña 1/2" × 4"', uso: 'Platina de columna a placa o losa maciza ≥ 10 cm', spec: 'Broca 1/2" · empotramiento 57–89 mm · torque 40 lb·pie (54 Nm) · borde ≥ 55 mm · separación ≥ 120 mm', material: 'Exterior: galvanizado en caliente (ASTM A153) o inox 304. El zincado brillante es solo para interior', unidad: 'paq. ×10', cant: '16 (4 por columna)' },
      { nombre: 'Chazo de cuña 3/8" × 3"', uso: 'Herrajes, tensores y canal a viga de amarre o ladrillo macizo', spec: 'Broca 3/8" · torque 20 lb·pie en concreto, 15 en mampostería', material: 'Galvanizado', unidad: 'paq. ×4', cant: '4–8' },
      { nombre: 'Chazo de manguito (camisa) 3/8" y 1/2"', uso: 'Ladrillo macizo o bloque relleno, cargas medias', spec: 'Expande a lo largo de la camisa; tolera sustrato más blando y borde cercano', material: 'Zincado', unidad: 'ud', cant: '4–8' },
      { nombre: 'Anclaje drop-in 1/2" (rosca interna)', uso: 'Losa aligerada: fijar en el nervio o la viga; permite varilla removible', spec: 'Se expande con punzón · broca 5/8"', material: 'Zincado', unidad: 'ud', cant: '0–16' },
      { nombre: 'Tornillo para concreto tipo Tapcon 1/4" × 2¼"', uso: 'Flanches, canal y pie de amigo a muro', spec: 'Broca 3/16" · cabeza hex o avellanada', material: 'Recubrimiento Climaseal o inox 410', unidad: 'paq.', cant: '10–20' },
      { clave: true, nombre: 'Varilla roscada 1/2" + 2 tuercas + arandela', uso: 'Anclaje químico en losa aligerada, terraza impermeabilizada o muro; permite nivelar la platina', spec: '1/2"-13 UNC · 20–25 cm por pata (empotramiento 100–110 mm + platina + tuerca)', material: 'Galvanizada; exterior preferir HDG o inox 304', unidad: 'barra 1 m', cant: '16 patas ≈ 4 barras' },
      { nombre: 'Perno embebido 5/8" ASTM F1554 Gr 36', uso: 'Zapata nueva: se funde con el concreto usando plantilla', spec: '5/8" × 33 cm + 2 tuercas A194 2H + arandela F436 + platina 75×75×1/2" (también en J o L)', material: 'Negro para pintar o HDG', unidad: 'ud', cant: '16' },
      { clave: true, nombre: 'Anclaje químico Sika AnchorFix-1 / -S 300 ml', uso: 'Fija la varilla roscada en concreto o ladrillo macizo sin presión de expansión', spec: 'Gel 4 min · curado 35–40 min a 25–30 °C (en Girardot se trabaja rápido) · limpiar 3× cepillo + 3× aire · llenar ¾ del hueco', material: 'Metacrilato / poliéster · ETA', unidad: 'cartucho 300 ml', cant: '1 (rinde 30–40 huecos de 1/2")' },
      { nombre: 'Sika AnchorFix-3001 · Hilti HIT-RE 500 V3', uso: 'Epóxico estructural: losa fisurada, zapata, exigencia sísmica', spec: '600 ml / 500 ml · pistola propia · ICC-ES', material: 'Epoxi 100 % sólidos', unidad: 'cartucho', cant: '1 si se exige' },
      { clave: true, nombre: 'Grout no retráctil SikaGrout-212', uso: 'Calzar la platina sobre tuercas de nivelación; la columna no se apoya en cuñas', spec: 'Espesor 3–50 mm · 60 MPa a 28 días · 2,2 kg por litro', material: 'Mortero cementicio', unidad: 'saco 30 kg', cant: '1 saco (4 platinas)' },
    ],
  },
  {
    slug: 'herrajes',
    titulo: 'Herrajes de acero',
    desc: 'Piezas que se cortan y sueldan en taller: platinas, cartelas, ménsulas, tapas.',
    items: [
      { clave: true, nombre: 'Platina base 200×200×6 mm (1/4")', uso: 'Pie de columna 100×100; reparte la carga y recibe los 4 anclajes', spec: '4 perforaciones Ø 14 mm · soldadura de filete 7018 todo alrededor', material: 'Lámina HR ASTM A36', unidad: 'ud (corte)', cant: '4' },
      { nombre: 'Cartela triangular 1/4"', uso: 'Rigidiza el nudo columna–viga; lo que impide que la pérgola se acueste con el viento', spec: '100×100 a 150×150 mm · soldada por ambas caras', material: 'A36', unidad: 'ud (corte)', cant: '8 (2 por columna)' },
      { nombre: 'Ménsula para viga adosada', uso: 'Recibe la viga trasera contra el muro de la casa', spec: 'Platina 1/4" o ángulo 2"×1/4" · cada ≤ 1,5 m · 2–4 anclajes por ménsula', material: 'A36', unidad: 'ud', cant: '3 (viga de 4 m)' },
      { nombre: 'Placa de empalme apernada', uso: 'Unir dos tubos en obra cuando el módulo no cabe en el horno de pintura o en el carro', spec: 'Platina 1½"×1/4" · 4 pernos 1/2" Gr 5', material: 'A36', unidad: 'barra 6 m', cant: 'según despiece' },
      { clave: true, nombre: 'Tapa de columna soldada', uso: 'Cierra el tubo por arriba: el óxido de las pérgolas empieza por dentro', spec: 'Lámina 3 mm o 1/4" · soldada y pulida', material: 'A36', unidad: 'ud', cant: '4' },
      { nombre: 'Tapón plástico 80×40 · 100×50 · 100×100', uso: 'Extremos de correas y vigas donde no se suelda tapa', spec: 'Polietileno a presión, interior', material: 'PE negro', unidad: 'paquete', cant: '14 (correas) + 4 (vigas)' },
      { nombre: 'Separador / arandela de nylon', uso: 'Entre perfil de aluminio (policarbonato, LED) y acero: evita el par galvánico', spec: 'Poliamida · alternativa: cinta butílica o EPDM', material: 'Nylon', unidad: 'ud', cant: '28–40' },
    ],
  },
  {
    slug: 'pernos',
    titulo: 'Pernos estructurales',
    desc: 'Solo si los módulos se apernan en obra en vez de soldarse. Siempre con tuerca de seguridad: el viento afloja.',
    items: [
      { nombre: 'Perno hexagonal 1/2"-13 × 1½"–2" Grado 5', uso: 'Viga a columna con orejas o platinas de 6 mm', spec: 'Torque 75–78 lb·pie (105 Nm) en seco · SAE J429 Gr 5 ≈ ISO 8.8', material: 'Galvanizado; HDG si queda expuesto', unidad: 'ud', cant: '16–32' },
      { nombre: 'Perno hexagonal 3/8"-16 × 1" Grado 5/8', uso: 'Correa a viga con clip', spec: 'Torque 31–39 lb·pie · Gr 8 ≈ ISO 10.9', material: 'Galvanizado', unidad: 'ud', cant: '28' },
      { nombre: 'Tuerca hexagonal + arandela plana 1/2"', uso: 'Con todos los pernos y varillas', spec: 'ASTM A563 / F844', material: 'Zincado', unidad: 'paq. ×30', cant: '48' },
      { clave: true, nombre: 'Tuerca de seguridad nylon (nyloc) 1/2"', uso: 'Uniones que vibran con el viento', spec: 'DIN 985 · no se reutiliza', material: 'Zincado', unidad: 'ud', cant: '16' },
      { nombre: 'Arandela de presión (grower) 1/2"', uso: 'Alternativa a la nyloc', spec: 'DIN 127', material: 'Zincado', unidad: 'paq. ×6', cant: '16' },
      { nombre: 'Arandela ancha 1/2" × 2"', uso: 'Platinas con hueco sobredimensionado para nivelar', spec: '—', material: 'Zincado', unidad: 'paq. ×2', cant: '16' },
    ],
  },
  {
    slug: 'tornilleria',
    titulo: 'Autoperforantes y remaches',
    desc: 'Lo más pequeño y lo que más falla. Regla: se atornilla lo que carga viento o se desmonta; se remacha lo delgado y decorativo.',
    items: [
      { clave: true, nombre: 'Autoperforante #12-14 × 1¼" punta #5', uso: 'Correa 80×40 a viga 100×50 (dos paredes de 2 mm)', spec: 'Punta #3 solo perfora 2,5 mm acumulados; dos tubos de 2 mm exigen punta #5 (hasta 6 mm) o pretaladro 4 mm', material: 'Galvanizado o ruspert; inox A2 en intemperie', unidad: 'ud', cant: '28' },
      { clave: true, nombre: 'Autoperforante #12-14 × 1" con arandela EPDM', uso: 'Perfil base del policarbonato y flanches a la correa', spec: 'Arandela EPDM Ø 16–19 mm vulcanizada · apretar hasta que apenas se abombe', material: 'Zincado + EPDM', unidad: 'caja ×100', cant: '28–40' },
      { nombre: 'Autoperforante #14-14 × 1½" con sombrilla 25 mm', uso: 'Cumbreras, flanches y policarbonato sobre correa', spec: 'Capelote metálico sobre EPDM', material: 'Zincado + EPDM', unidad: 'caja ×100', cant: '20' },
      { nombre: 'Autoperforante #12-14 × 2½" capelote', uso: 'Teja termoacústica a correa, siempre en la cresta', spec: '5 por teja en apoyos extremos, alternos en intermedios · pretaladro 6–10 mm · apoyos ≤ 1,5 m', material: 'Galvanizado + EPDM', unidad: 'caja', cant: '≈ 64 (4 tejas)' },
      { nombre: 'Tornillo de costura #10-16 × 3/4"', uso: 'Traslapes teja–teja y cumbrera cada 50 cm', spec: 'Flanje cónico', material: 'Galvanizado', unidad: 'paq.', cant: '18–24' },
      { nombre: 'Tornillo lámina hex #10 × 3/4" punta broca', uso: 'Embellecedores y tapas metálicas', spec: '—', material: 'Zincado', unidad: 'caja ×100', cant: '20' },
      { clave: true, nombre: 'Tornillo #8 × 1/2" para perfil de aluminio', uso: 'Tapas de perfil H/U y cubrezócalo del policarbonato', spec: 'Pretaladrar 2,5 mm · cabeza plana o pan', material: 'Inox 304 obligatorio: el pavonado mancha el aluminio', unidad: 'caja ×100', cant: '40' },
      { nombre: 'Remache POP 1/8" × 1/2"', uso: 'Flanches, embellecedores y tapas de canal', spec: 'Cabeza de aluminio, vástago de acero', material: 'Aluminio', unidad: 'paq.', cant: '30' },
      { nombre: 'Remache POP 5/32" × 1/2"', uso: 'Canales y perfiles de lámina 0,5–0,7 mm', spec: '—', material: 'Aluminio', unidad: 'paq. ×10', cant: '20' },
      { nombre: 'Remache POP 3/16" × 1/2"–1"', uso: 'Uniones aluminio–aluminio con más carga', spec: 'Nunca remache de acero sobre aluminio', material: 'Aluminio', unidad: 'paq.', cant: '10' },
    ],
  },
  {
    slug: 'policarbonato',
    titulo: 'Perfilería de policarbonato',
    desc: 'Para alveolar de 6–8 mm (Ajover). Ancho útil 1,05 m; correas cada 65–100 cm; la lámina no se perfora: se sujeta con perfil base y tapa.',
    items: [
      { clave: true, nombre: 'Perfil snap base + tapa (aluminio con EPDM o policarbonato)', uso: 'Une dos láminas y las fija a la correa sin perforarlas', spec: 'Base 52 mm atornillada a cada correa (c/ 50 cm) · tapa 55 mm a golpe de mazo de goma · deja 3 mm de dilatación por lado', material: 'Aluminio + EPDM (mejor) o PC', unidad: 'barra 5,90 m', cant: '2 juegos (juntas) + 2 bases laterales' },
      { nombre: 'Perfil H de policarbonato', uso: 'Unión sencilla entre láminas cuando no se usa snap', spec: '42 mm de ancho · canal 9 mm · 2,95 / 5,90 / 11,80 m', material: 'Policarbonato', unidad: 'barra', cant: '2 de 5,90 m' },
      { clave: true, nombre: 'Perfil U / cubrezócalo', uso: 'Cierra los extremos de la lámina; el de abajo va perforado para drenar la condensación', spec: '22,9 × 11 mm · 2,10 m · separado 6 mm de la lámina', material: 'Policarbonato (o aluminio)', unidad: 'ud 2,10 m', cant: '7' },
      { clave: true, nombre: 'Cinta de aluminio microperforada', uso: 'Sella los alvéolos en el extremo bajo: deja salir el condensado y no entra polvo ni insectos', spec: '25 mm × 33 m', material: 'Aluminio microperforado', unidad: 'rollo', cant: '1' },
      { nombre: 'Cinta de aluminio sólida', uso: 'Sella el extremo alto de la lámina', spec: '25–50 mm × 25–50 m', material: 'Aluminio foil 30 µ', unidad: 'rollo', cant: '1' },
      { nombre: 'Flanche contra muro', uso: 'Remate entre el techo y la pared de la casa; va en regata sellada con poliuretano', spec: '20 × 240 cm cal. 26 · 25,4 × 244 cm 0,43 mm', material: 'Galvanizado liso', unidad: 'ud', cant: '2 si una arista toca muro' },
      { nombre: 'Goterón / ángulo de aluminio 1"', uso: 'Evita que el agua retorne por debajo de la lámina en el borde bajo', spec: '6 m', material: 'Aluminio', unidad: 'barra', cant: '1–2' },
      { nombre: 'Policarbonato compacto 4 mm (alternativa)', uso: 'Cuando se quiere transparencia tipo vidrio', spec: '2,05 × 5,80 m · se fija perforado con broca +2–3 mm y arandela EPDM · cara UV arriba', material: 'PC macizo', unidad: 'lámina', cant: '—' },
      { evitar: true, nombre: 'Silicona acética', uso: 'NO: libera ácido acético al curar, agrieta el policarbonato y corroe el acero', spec: 'Usar solo silicona neutra (Sikasil-C) y nunca dentro de los alvéolos', material: '—', unidad: '—', cant: '0' },
    ],
  },
  {
    slug: 'teja',
    titulo: 'Teja termoacústica (cubierta de parqueadero)',
    desc: 'Ajover A360 o Acesco Master 1000. Tornillo en la cresta, nunca en el valle; pendiente mínima 10 % con traslapo.',
    items: [
      { nombre: 'Teja termoacústica Ajover A360 Silver', uso: 'Techo cerrado: sombra total y silencio con la lluvia', spec: 'Ancho 82 cm (útil 72) · paso 36 · traslapo longitudinal 10 cm, transversal 15 · voladizo ≤ 30 cm · correas ≤ 1,0 m', material: 'Acero prepintado + asfalto + foil aluminio · 2,68 kg/m²', unidad: 'lámina 3,05 × 0,82', cant: '4 (3×4 m)' },
      { nombre: 'Teja Acesco Master 1000 cal. 28', uso: 'Alternativa galvanizada sin aislamiento', spec: 'Útil 1,00 m · traslapo 150 mm · fijador de ala cada 1 m · correas ~1,70 m · pendiente ≥ 8°', material: 'Galvanizado 0,36 mm', unidad: 'lámina 1 × 6 m', cant: '3' },
      { nombre: 'Tornillos Ajover para A360', uso: 'Metal: 14-14 × 1½" EPDM · cresta: 2⅝" · fijador de ala ¼-14 × 1¼" en traslapo lateral', spec: 'Según ficha del fabricante', material: 'Galvanizado + EPDM', unidad: 'caja', cant: '≈ 64 + 12' },
      { nombre: 'Caballete termoacústico', uso: 'Remate de cumbrera a dos aguas', spec: '0,70 × 2,00 m · 4 fijadores por ala + manto', material: 'Igual a la teja', unidad: 'ud', cant: 'solo a dos aguas' },
      { nombre: 'Closure (espuma de cierre) trapezoidal', uso: 'Tapa las ondas al pie y en la cumbrera: ni agua ni avispas', spec: 'Perfil A360', material: 'Espuma PE', unidad: 'tira', cant: '4' },
      { nombre: 'Cinta butílica de traslapo', uso: 'Sello entre tejas en traslapos transversales', spec: '10 cm × 10 m × 1,5 mm', material: 'Aluminio-butilo', unidad: 'rollo', cant: '1' },
    ],
  },
  {
    slug: 'agua',
    titulo: 'Canal y bajante',
    desc: 'Pendiente de canal 0,5–1 % hacia la bajante, soportes cada 75 cm, una bajante de 3" por cada 90 m² de techo.',
    items: [
      { clave: true, nombre: 'Canal PVC Pavco Amazonas 3 m', uso: 'Recoge el agua en el borde bajo del techo', spec: 'Boca 160 mm · alto 95 mm · uniones con hidrosello (dilatación) · soportes ≤ 75 cm', material: 'PVC blanco', unidad: 'ud 3 m', cant: '1 (lado de 3 m)' },
      { nombre: 'Canal galvanizada cal. 24 a medida', uso: 'Alternativa de latonería, se pinta del color de la estructura', spec: 'Desarrollo 30–40 cm · sección ~10 × 10 cm · 6 m', material: 'Galvanizado cal. 24', unidad: 'tramo 6 m', cant: '1' },
      { nombre: 'Accesorios de canal Amazonas', uso: 'Unión, tapas, unión canal–bajante y soportes', spec: 'Unión 300 mm · tapa derecha/izquierda · soporte PVC o metálico colgante', material: 'PVC', unidad: 'ud', cant: '1 unión canal-bajante + 2 tapas + 5 soportes' },
      { clave: true, nombre: 'Bajante PVC 3" Pavco', uso: 'Baja el agua pegada a la columna o por dentro de ella', spec: 'Tubo 3 m (70 mm) · codos 45° y 90° · soporte cada 1,50 m · holgura 6 mm en campanas', material: 'PVC', unidad: 'ud', cant: '1 tubo + 2 codos 45° + 2 soportes' },
      { nombre: 'Bajante oculta dentro de la columna', uso: 'Acabado limpio: la columna 100×100×3 aloja el tubo de 3"', spec: 'Boquilla por perforación superior sellada · salida lateral a 30 cm del piso · registro abajo y rejilla arriba (si se tapa hay que desarmar)', material: '—', unidad: 'detalle de taller', cant: '1' },
      { nombre: 'Rejilla antihojas', uso: 'Canastilla en la boquilla; evita que el mango tape la bajante', spec: 'Para boca de 3"', material: 'PVC / inox', unidad: 'ud', cant: '1' },
      { nombre: 'Cajilla o sifón de piso 30×30', uso: 'Recibe la bajante y la conecta al desagüe', spec: 'Con rejilla', material: 'Concreto / PVC', unidad: 'ud', cant: '1' },
    ],
  },
  {
    slug: 'sellado',
    titulo: 'Sellado e impermeabilización',
    desc: 'Poliuretano en todo lo que se mueve; silicona solo neutra y solo sobre perfiles; manto asfáltico alrededor de cada platina en terraza.',
    items: [
      { clave: true, nombre: 'Sikaflex-1A (poliuretano)', uso: 'Pie de columna, platina–piso, flanche–muro, remates', spec: 'Elástico ±35 % · 3 m de junta 10×10 mm por cartucho', material: 'PU monocomponente', unidad: 'cartucho 300 ml', cant: '2' },
      { nombre: 'Sikaflex-11FC+', uso: 'Pegar y sellar perfiles y remates, curado rápido', spec: 'Adhesivo-sellador', material: 'PU', unidad: 'cartucho', cant: '1' },
      { nombre: 'Sikaflex-221', uso: 'Sobre metal pintado y cubiertas metálicas', spec: '—', material: 'PU', unidad: 'cartucho', cant: '1 opc.' },
      { clave: true, nombre: 'Silicona neutra Sikasil-C', uso: 'La única compatible con policarbonato; solo sobre perfiles y remates', spec: 'Transparente · nunca dentro de alvéolos', material: 'Silicona neutra', unidad: 'cartucho', cant: '1' },
      { nombre: 'Sikaflex-401 Pavement', uso: 'Junta horizontal platina–piso, autonivelante', spec: '—', material: 'PU', unidad: 'cartucho', cant: '1 opc.' },
      { clave: true, nombre: 'Manto asfáltico con aluminio', uso: 'Reponer la impermeabilización 10 cm alrededor de cada platina en terraza', spec: 'Texsa Alumanto 3 mm 10 m² · Sika Manto 35 kg · imprimante Igol', material: 'Asfalto modificado', unidad: 'rollo / retazo', cant: '1 rollo o retazos' },
      { evitar: true, nombre: 'Espuma expansiva de poliuretano', uso: 'NO en juntas de dilatación ni contra policarbonato', spec: 'Es rígida, se agrieta con el movimiento y se degrada al sol', material: '—', unidad: '—', cant: '0' },
    ],
  },
  {
    slug: 'acabado',
    titulo: 'Acabado y retoque',
    desc: 'La pintura dura lo que dure la preparación: metal limpio y seco, anticorrosivo el mismo día del pulido.',
    items: [
      { clave: true, nombre: 'Anticorrosivo Pintuco Corrotec / Pintulux Premium', uso: 'Primera capa sobre acero negro limpio, 2 manos', spec: '20–25 m²/gal prácticos a 2 manos · 30 min entre manos · 6 h antes del acabado', material: 'Alquídico, sin plomo ni cromo', unidad: 'galón', cant: '1 (≈ 12 m² de acero)' },
      { clave: true, nombre: 'Esmalte poliuretano Pintuco 113XX', uso: 'Acabado exterior de alta duración, brillante o mate', spec: '2 componentes · 56–60 m²/gal a 25 µm', material: 'PU 2K', unidad: '3/4 galón', cant: '1' },
      { nombre: 'Wash primer Corrotec 509A/B', uso: 'Antes del anticorrosivo sobre tubo galvanizado o aluminio', spec: '16 m²/gal', material: 'Vinílico fosfatante', unidad: 'kit', cant: '1 si el tubo es galvanizado' },
      { clave: true, nombre: 'Galvanizado en frío en aerosol', uso: 'Cortes, soldaduras y perforaciones de obra', spec: '96 % zinc · 345–400 ml', material: 'Zinc', unidad: 'lata', cant: '1–2' },
      { nombre: 'Esmalte anticorrosivo en aerosol (retoque)', uso: 'Rayones de montaje del color de la estructura', spec: '300 ml · 3 m² por capa', material: 'Alquídico', unidad: 'lata', cant: '1' },
      { nombre: 'Lija de agua #120 · desengrasante industrial', uso: 'Preparación antes de pintar', spec: 'Pliego · 4 L', material: '—', unidad: 'ud', cant: '5 pliegos · 1 garrafa' },
      { nombre: 'Pintura electrostática (servicio)', uso: 'Acabado de fábrica en 108 colores; obliga a módulos que quepan en el horno', spec: 'Poliéster horneado 160–200 °C · hornos de 6–7 m en Bogotá', material: 'Poliéster TGIC', unidad: 'm²', cant: '≈ 12 m²' },
    ],
  },
  {
    slug: 'electrico',
    titulo: 'Eléctrico e iluminación',
    desc: 'Cable por dentro de la columna, todo IP65 de verdad y un solo punto de alimentación con GFCI.',
    items: [
      { clave: true, nombre: 'Tira LED 5050 12 V siliconada IP65', uso: 'Luz perimetral bajo la viga', spec: '60 LED/m · 12–14 W/m · ~1.150 lm/m · blanco cálido', material: 'Silicona IP65', unidad: 'rollo 5 m', cant: '2–3 (perímetro 14 m)' },
      { clave: true, nombre: 'Fuente IP67 12 V 100 W', uso: 'Alimenta hasta 8 m de tira; va dentro de caja estanca', spec: '90–264 VAC · 8,5 A', material: 'Carcasa sellada', unidad: 'ud', cant: '1–2' },
      { nombre: 'Perfil de aluminio con difusor opal', uso: 'Protege la tira, disipa calor y da línea continua', spec: '1 m · empotrar o sobreponer', material: 'Aluminio + PC opal', unidad: 'm', cant: '14' },
      { nombre: 'Controlador Wifi RGB / CCT', uso: 'Control por app y escenas', spec: '12–24 V · Tuya / Steren', material: '—', unidad: 'ud', cant: '1' },
      { nombre: 'Reflector LED 50 W IP65', uso: 'Iluminación general del jardín', spec: '4.000–5.000 lm · 100–277 V', material: 'Aluminio IP65', unidad: 'ud', cant: '1–2' },
      { nombre: 'Aplique de pared exterior', uso: 'Sobre las columnas', spec: 'IP65/IP44 · E27', material: '—', unidad: 'ud', cant: '2–4' },
      { nombre: 'Fotocelda crepuscular', uso: 'Enciende sola al anochecer', spec: '110 V · 660 W · IP44', material: '—', unidad: 'ud', cant: '1' },
      { nombre: 'Interruptor exterior IP55', uso: 'Mando en la columna', spec: 'Legrand Plexo monobloc', material: 'IP55', unidad: 'ud', cant: '1' },
      { clave: true, nombre: 'Conduit EMT 1/2" × 3 m', uso: 'Baja el cable por dentro de la columna', spec: 'Se mete antes de tapar la columna', material: 'Acero galvanizado', unidad: 'ud', cant: '1' },
      { nombre: 'Caja de derivación IP65 10×10×5', uso: 'Empalmes y fuente dentro de la viga', spec: 'Dexson ABS', material: 'ABS gris', unidad: 'ud', cant: '1–2' },
      { nombre: 'Prensaestopa 1/2"', uso: 'Salida del cable por la lámina sin filtrar agua', spec: '13,5 mm', material: 'Nylon', unidad: 'ud', cant: '2–4' },
      { nombre: 'Cable encauchetado 2×14 · 3×14', uso: 'Luminarias · tomas y ventilador (con tierra)', spec: '600 V · Nexans', material: 'Cu encauchetado', unidad: 'm', cant: '15 + 10' },
      { nombre: 'Toma GFCI exterior 15–20 A', uso: 'Toma en columna para parlante o licuadora', spec: 'Con tapa a prueba de intemperie', material: '—', unidad: 'ud', cant: '1' },
    ],
  },
  {
    slug: 'confort',
    titulo: 'Confort y complementos',
    desc: 'Lo que se vende junto con la pérgola. La cortina screen de exterior ya está en nuestro catálogo.',
    items: [
      { clave: true, nombre: 'Cortina enrollable de exterior tela screen', uso: 'Cierre lateral contra sol y miradas; se ancla a la viga', spec: 'Screen 5 % · hasta 2,40 m · manual o motor', material: 'PVC-poliéster', unidad: 'm²', cant: 'según lados' },
      { nombre: 'Toldo vertical zip screen', uso: 'Cierre cortaviento con guías laterales', spec: 'Motorizable RTS', material: 'Soltis 96', unidad: 'm²', cant: '—' },
      { nombre: 'Cerramiento lateral', uso: 'Convertir la pérgola en espacio cerrado', spec: 'Vidrio templado 10 mm o policarbonato con perfilería de aluminio', material: '—', unidad: 'm²', cant: '—' },
      { nombre: 'Mosquitero enrollable', uso: 'Noches de Girardot sin zancudos', spec: 'Marco de aluminio', material: 'Fibra de vidrio', unidad: 'ud', cant: '—' },
      { nombre: 'Ventilador de techo para exterior', uso: 'Lo que más se agradece a mediodía', spec: 'Apto terrazas · 3 aspas con LED', material: 'IP44 recomendado', unidad: 'ud', cant: '1' },
      { nombre: 'Nebulizadores anticalor', uso: 'Línea perimetral en la viga; baja 5–8 °C', spec: 'Boquillas de latón + manguera', material: 'Latón', unidad: 'kit', cant: '1' },
      { nombre: 'Jardinera metálica', uso: 'Integrada al pie de las columnas', spec: 'Hierro o galvanizada', material: 'Acero', unidad: 'ud', cant: '—' },
      { nombre: 'Deck WPC', uso: 'Piso bajo la pérgola', spec: '2,1–2,5 cm', material: 'Madera-plástico', unidad: 'm²', cant: '12' },
    ],
  },
]

export const grupos: Grupo[] = gruposBase.map((g) => ({
  ...g,
  items: g.items.map((it, i) => ({
    ...it,
    img: `/pergolas-metalicas/accesorios/${g.slug}-${String(i + 1).padStart(2, '0')}.jpg`,
    visual: `${it.nombre}${it.material ? ' — ' + it.material : ''}`,
  })),
}))

export const reglas = [
  'Todo lo expuesto en Girardot va galvanizado en caliente o inoxidable: el zincado brillante se oxida en 1–2 años.',
  'Chazo de cuña solo en placa maciza; en losa aligerada, ladrillo o cerca de un borde va anclaje químico con varilla.',
  'Sobre aluminio, tornillería inoxidable y arandela de nylon o EPDM: el acero negro o pavonado mancha y corroe.',
  'El policarbonato no se perfora: perfil base y tapa. Si toca, hueco ovalado 2 mm mayor y arandela EPDM.',
  'Dos tubos de 2 mm no se unen con punta #3: punta #5 o pretaladro de 4 mm.',
  'La arandela EPDM se aprieta hasta que apenas se abombe; aplastada, gotea.',
  'Silicona solo neutra y solo sobre perfiles; nunca acética, nunca en los alvéolos.',
  'Canal con 0,5–1 % de pendiente y soportes cada 75 cm; bajante con rejilla y registro.',
  'Tubos tapados y anticorrosivo el mismo día del pulido: el óxido empieza por dentro.',
]

export const kit3x4 = [
  { n: '16', q: 'chazos de cuña 1/2"×4" HDG o 16 varillas roscadas 1/2" + 1 cartucho químico' },
  { n: '4', q: 'platinas base 200×200×6 mm con tapa de columna soldada' },
  { n: '8', q: 'cartelas 1/4" (2 por columna)' },
  { n: '1', q: 'saco de grout no retráctil' },
  { n: '28', q: 'autoperforantes #12-14 × 1¼" punta #5 (correas a vigas)' },
  { n: '40', q: 'autoperforantes #12-14 × 1" con EPDM (perfiles base y flanches)' },
  { n: '3', q: 'láminas policarbonato alveolar 8 mm 1,05 × 5,90 m bronce u opal' },
  { n: '2 + 2', q: 'juegos snap base + tapa y 2 bases laterales (5,90 m)' },
  { n: '7', q: 'cubrezócalos 2,10 m (los bajos, perforados)' },
  { n: '1 + 1', q: 'rollo cinta microperforada + rollo cinta sólida' },
  { n: '40', q: 'tornillos #8 inox para perfiles' },
  { n: '1', q: 'canal Amazonas 3 m + unión canal-bajante + 2 tapas + 5 soportes' },
  { n: '1', q: 'bajante 3" + 2 codos 45° + 2 soportes + rejilla' },
  { n: '2 + 1', q: 'cartuchos Sikaflex-1A + 1 silicona neutra' },
  { n: '1 + 1', q: 'galón anticorrosivo + 3/4 esmalte poliuretano (o electrostática ≈ 12 m²)' },
  { n: '1', q: 'lata de zinc en frío' },
  { n: '18', q: 'tapones plásticos 80×40 / 100×50' },
]
