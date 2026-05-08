import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const grupos = [
  {
    titulo: 'ENROLLABLE',
    desc: 'Tubos, cenefas, perfiles, controles, soportes y tensores para persianas enrollables.',
    productos: [
      { nombre: 'ADAPTADOR 1 1/2" A 2"', item: '3', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_3.jpeg' },
      { nombre: 'AJUSTADOR CADENA A PARED', item: '5', colores: 'Blanco, Ivory, Chocolate', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_5.jpeg' },
      { nombre: 'CADENA CONTINUA 10 x 250M', item: '106', colores: 'Blanco, Beige, Negro', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_106.jpeg', ficha: { 'Tipo': 'Cadena continua', 'Carrete': '250 m' } },
      { nombre: 'CONECTOR CADENA PLÁSTICO', item: '133', colores: 'Blanco, Gris, Transparente', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_133.jpeg' },
      { nombre: 'CONTROL R16 1-1/2"', item: '138', colores: 'Blanco, Beige, Gris, Negro', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_138.jpeg', ficha: { 'Sistema': 'R16', 'Tubo compatible': '38 mm (1½")', 'Tipo': 'Embrague manual' } },
      { nombre: 'CONTROL R16 1-1/2" PREMIUM', item: '141', colores: 'Blanco, Beige, Negro', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_141.jpeg', ficha: { 'Sistema': 'R16', 'Tubo compatible': '38 mm (1½")', 'Tipo': 'Embrague premium' } },
      { nombre: 'CONTROL R8 1-1/2"', item: '148', colores: '', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_148.jpeg', ficha: { 'Sistema': 'R8', 'Tubo compatible': '38 mm (1½")', 'Tipo': 'Embrague manual' } },
      { nombre: 'CONTROL R8 1-1/2" ESCUALIZABLE', item: '149', colores: 'Blanco, Gris, Negro', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_149.jpeg', ficha: { 'Sistema': 'R8', 'Tubo compatible': '38 mm (1½")', 'Tipo': 'Escualizable' } },
      { nombre: 'CONTROL R8 1-1/2" PREMIUM', item: '151', colores: 'Blanco, Beige, Negro, Gris', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_151.png', ficha: { 'Sistema': 'R8', 'Tubo compatible': '38 mm (1½")', 'Tipo': 'Premium' } },
      { nombre: 'CONTROL R8 1-1/2" PREM SOPORTE R16 KIT', item: '152', colores: 'Blanco, Beige', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_152.jpeg', ficha: { 'Sistema': 'R8', 'Tubo compatible': '38 mm', 'Soporte': 'R16' } },
      { nombre: 'CONTROL R8 1-1/2" SOPORTE R16 PUNTA R8', item: '153', colores: 'Blanco, Beige', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_153.jpeg', ficha: { 'Sistema': 'R8', 'Tubo compatible': '38 mm', 'Punta': 'R8' } },
      { nombre: 'CONTROL R8 1-1/4"', item: '154', colores: 'Blanco, Beige, Negro', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_154.jpeg', ficha: { 'Sistema': 'R8', 'Tubo compatible': '32 mm (1¼")', 'Tipo': 'Embrague manual' } },
      { nombre: 'CONTROL R8 1-1/4" ESCUALIZABLE', item: '155', colores: 'Blanco, Gris, Negro', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_155.jpeg', ficha: { 'Sistema': 'R8', 'Tubo compatible': '32 mm (1¼")', 'Tipo': 'Escualizable' } },
      { nombre: 'CONTROL R8 1-1/4" PREMIUM', item: '158', colores: 'Blanco, Beige, Gris, Negro', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_158.jpeg', ficha: { 'Sistema': 'R8', 'Tubo compatible': '32 mm (1¼")', 'Tipo': 'Premium' } },
      { nombre: 'ESCUADRA CORTA 2MM', item: '198', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_198.jpeg' },
      { nombre: 'ESCUADRA LARGA 2MM', item: '200', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_200.jpeg' },
      { nombre: 'GUAYA METÁLICA PERSIANA 1/8', item: '222', colores: '', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_222.jpeg' },
      { nombre: '', item: '362', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_362.jpeg' },
      { nombre: 'SOPORTE CENTRAL R16 PREMIUM', item: '364', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_364.jpeg' },
      { nombre: 'SOPORTE CENTRAL R24 PREMIUM', item: '367', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_367.jpeg' },
      { nombre: 'SOPORTE CENTRAL R8 PREMIUM', item: '368', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_368.jpeg' },
      { nombre: 'SOPORTE ENROLLABLE R16', item: '393', colores: 'Blanco', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_393.jpeg' },
      { nombre: 'SOPORTE ENROLLABLE R24', item: '396', colores: 'Blanco', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_396.jpeg' },
      { nombre: 'SOPORTE ENROLLABLE R8', item: '398', colores: 'Blanco', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_398.jpeg' },
      { nombre: 'SOPORTE UNVIERSAL CORTO', item: '469', colores: 'Blanco, Beige, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_469.jpeg' },
      { nombre: 'SOPORTE UNVIERSAL LARGO', item: '473', colores: 'Blanco, Beige, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_473.jpeg' },
      { nombre: 'TAPA CENEFA R16', item: '491', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_491.jpeg' },
      { nombre: 'TAPA CENEFA R24', item: '494', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_494.jpeg' },
      { nombre: 'TAPA CENEFA R8', item: '495', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_495.jpeg' },
      { nombre: 'TENSOR CLIP CON TORNILLO', item: '532', colores: 'Transparente', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_532.jpeg' },
      { nombre: 'TENSOR CADENA ESCUALIZABLE', item: '533', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_533.jpeg' },
      { nombre: 'TOPE BOTTOM RAIL GOTA', item: '597', colores: 'Blanco, Beige, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_597.jpeg' },
      { nombre: 'TOPE BOTTOM RAIL OVAL', item: '604', colores: 'Blanco, Beige, Negro, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_604.jpeg' },
      { nombre: 'TOPE BOTTOM RAIL PLANO', item: '608', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Unidad', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_608.jpeg' },
      { nombre: 'CENEFA R16 TRADICIONAL', item: '987', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_987.jpeg', ficha: { 'Material': 'Aluminio', 'Sistema': 'R16', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'CENEFA R24 TRADICIONAL', item: '988', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_988.jpeg', ficha: { 'Material': 'Aluminio', 'Sistema': 'R24', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'CENEFA R8 TRADICIONAL', item: '991', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_991.jpeg', ficha: { 'Material': 'Aluminio', 'Sistema': 'R8', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'PERFIL BOTTOM RAIL GOTA', item: '1001', colores: 'Blanco, Beige, Negro', unidad: 'Metro lineal', medidas: '5,85 m / 5,95 m / 6,0 m', img: '/accesorios-pel/item_1001.jpeg', ficha: { 'Material': 'Aluminio', 'Sección': 'Gota', 'Long. barra': '5.85 / 5.95 / 6.00 m' } },
      { nombre: 'PERFIL BOTTOM RAIL OVAL', item: '1004', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_1004.jpeg', ficha: { 'Material': 'Aluminio', 'Sección': 'Oval', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'PERFIL BOTOM RAIL PLANO', item: '1007', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,85 m / 5,95 m / 6,00 m', img: '/accesorios-pel/item_1007.jpeg', ficha: { 'Material': 'Aluminio', 'Sección': 'Plano', 'Long. barra': '5.85 / 5.95 / 6.00 m' } },
      { nombre: 'TUBO ALUM. LISO 1-1/2" 2 RANURAS', item: '1040', colores: 'Crudo', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_1040.png', ficha: { 'Material': 'Aluminio crudo', 'Ø exterior': '38 mm (1½")', 'Ranuras': '2', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'TUBO ALUM. LISO 1-1/8"', item: '1043', colores: 'Crudo', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_1043.png', ficha: { 'Material': 'Aluminio crudo', 'Ø exterior': '28.5 mm (1⅛")', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'TUBO ALUM. LISO LISO 2"', item: '1044', colores: 'Crudo', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_1044.jpeg', ficha: { 'Material': 'Aluminio crudo', 'Ø exterior': '50.8 mm (2")' } },
      { nombre: 'TUBO ALUMINIO LISO 40mm', item: '1048', colores: 'Crudo, Crudo', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_1048.png', ficha: { 'Material': 'Aluminio crudo', 'Ø exterior': '40 mm', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'FELPA PERFIL LATERAL ENROLLABLE CAR. 400M', item: '1577', colores: 'Gris', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_1577.jpeg', ficha: { 'Base': '7 mm', 'Pelo': '5 mm', 'Carrete': '400 m' } },
      { nombre: 'CENEFA R15', item: '6030', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_6030.png', ficha: { 'Material': 'Aluminio', 'Sistema': 'R15', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'ESCUADRA EXTRA LARGA 2,5MM', item: '6035', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_6035.jpeg' },
      { nombre: 'SOPORTE ENROLLABLE R8 PREMIUM', item: '6038', colores: 'Blanco', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_6038.jpeg' },
      { nombre: 'SOPORTE ENROLLABLE R16 PREMIUM', item: '6039', colores: 'Blanco', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_6039.jpeg' },
      { nombre: 'SOPORTE DOBLE ENROLLABLE CON TAPA', item: '6403', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_6403.jpeg' },
      { nombre: 'SOPORTE DOBLE ENROLLABLE SIN TAPA', item: '6404', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_6404.jpeg' },
      { nombre: 'TAPA CENEFA R15', item: '11008', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_11008.png' },
      { nombre: 'CONTROL SKYLINE R8 1-1/4"', item: '22273', colores: 'Blanco, Negro', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_22273.jpeg' },
      { nombre: 'SOPORTE REDONDO PEQUEÑO', item: '22274', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_22274.jpeg' },
      { nombre: 'SOPORTE REDONDO GRANDE', item: '22275', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_22275.jpeg' },
      { nombre: 'CONTROL SKYLINE R16 S 1-1/2" LARGO', item: '23999', colores: 'Blanco, Negro', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_23999.jpeg' },
      { nombre: 'CONTROL SKYLINE R16 S 1-1/2" CORTO', item: '24000', colores: 'Blanco, Negro', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_24000.jpeg' },
      { nombre: 'CINTA DOBLE FAZ ROLLO X50 m', item: '26050', colores: '', unidad: 'Rollo', medidas: '', img: '/accesorios-pel/item_26050.jpeg' },
      { nombre: 'PERFIL LATERAL MANUAL 38', item: '30650', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_30650.jpeg', ficha: { 'Material': 'Aluminio', 'Uso': 'Sistema manual', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'PERFIL LATERAL MOTORIZACION', item: '30651', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_30651.jpeg', ficha: { 'Material': 'Aluminio', 'Uso': 'Motorización', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'PERFIL RL LIVIANO', item: '30653', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_30653.png', ficha: { 'Material': 'Aluminio', 'Tipo': 'Liviano', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'TERMINAL CONTROL PREMIUM', item: '33906', colores: 'Blanco, Beige', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_33906.jpeg' },
      { nombre: 'CONTROL R24 2" PREMIUM', item: '38638', colores: 'Blanco, Beige, Gris (Nuevo), Negro', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_38638.jpeg', ficha: { 'Sistema': 'R24', 'Tubo compatible': '51 mm (2")', 'Tipo': 'Premium' } },
      { nombre: 'PERFIL BOTTOM RAIL OVAL PARA BOLSILLO', item: '49830', colores: 'Crudo', unidad: 'Metro lineal', medidas: '6,00 m', img: '/accesorios-pel/item_49830.png', ficha: { 'Material': 'Aluminio crudo', 'Sección': 'Oval bolsillo', 'Long. barra': '6.00 m' } },
      { nombre: 'TOPE BOTTOM RAIL OVAL PARA BOLSILLO', item: '51572', colores: 'Blanco, Beige, Negro, Transparente', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_51572.png' },
      { nombre: 'ESCUADRA 6 X 15 2.5mm', item: '62118', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_62118.jpeg' },
      { nombre: 'ESCUADRA 8 X 20 3MM', item: '73263', colores: 'Blanco', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_73263.jpeg' },
      { nombre: 'CENEFA UNIVERSAL NUEVO', item: '87526', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_87526.jpeg', ficha: { 'Material': 'Aluminio', 'Tipo': 'Universal', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'TAPA CENEFA UNIVERSAL NUEVO', item: '91019', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_91019.jpeg' },
      { nombre: 'CONTROL R8 1-1/4" PREMIUM CON TAPA', item: '93245 (NUEVO)', colores: 'Blanco, Gris, Negro', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_93245.png' },
      { nombre: 'CONTROL R8 1-1/2" PREMIUM CON TAPA', item: '93246 (NUEVO)', colores: 'Blanco, Gris, Negro', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_93246.png' },
      { nombre: 'CONTROL R16 1-1/2" PREMIUM CON TAPA', item: '93247 (NUEVO)', colores: 'Blanco, Gris, Negro', unidad: 'KIT', medidas: '', img: '/accesorios-pel/item_93247.jpeg' },
      { nombre: 'TENSOR GUAYA PEL', item: '95805', colores: '', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_95805.jpeg' },
    ],
  },
  {
    titulo: 'SHEER ELEGANCE',
    desc: 'Rieles y topes especializados para sistema Sheer Elegance.',
    productos: [
      { nombre: 'TOPE BOTTOM RAIL REDONDO SHEER', item: '601', colores: 'Transparente, Blanco, Beige', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_601.jpeg' },
      { nombre: 'TOPE BOTTOM RAIL PLANO SHEER', item: '607', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_607.png' },
      { nombre: 'TOPE BOTTOM RAIL PREM. SHEER', item: '609', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_609.jpeg' },
      { nombre: 'TOPE BOTTOM RAIL RED. 4 PRON YN', item: '613', colores: 'Transparente, Blanco, Beige', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_613.jpeg' },
      { nombre: 'ZUNCHO PLASTICO CON GOMA', item: '26049 - 26050', colores: '', unidad: 'Rollo', medidas: '', img: '/accesorios-pel/item_26049.jpeg' },
      { nombre: 'RIEL SHEER NUEVO', item: '87518', colores: 'Blanco', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_87518.png' },
    ],
  },
  {
    titulo: 'PANEL JAPONÉS',
    desc: 'Rieles, cenefas, bastones, perfiles y accesorios para panel japonés.',
    productos: [
      { nombre: 'BASTÓN ACRÍLICO 75 CM', item: '61', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_61.png' },
      { nombre: 'BASTÓN ACRÍLICO 90 CM', item: '62', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_62.png' },
      { nombre: 'BASTÓN RIEL X 120cm PINTURA', item: '77', colores: 'Transparente', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_77.png' },
      { nombre: 'BASTÓN RIEL X 150cm PINTURA', item: '78', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_78.png' },
      { nombre: 'BASTÓN RIEL X 80cm PINTURA', item: '80', colores: 'Transparente', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_80.png' },
      { nombre: 'ESCUADRA EXTRA LARGA 2,5mm', item: '194', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_194.jpeg' },
      { nombre: 'FRENO PANEL', item: '206', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_206.png' },
      { nombre: 'PATÍN GUÍA', item: '295', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_295.png' },
      { nombre: 'TAPA PANEL 5 VIAS CENEFA 6.5 CM', item: '518', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_518.png' },
      { nombre: 'TAPA PANEL 5 VIAS CENEFA 11,5 CM', item: '520', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_520.png' },
      { nombre: 'TAPA PANEL 4 VIAS CENEFA 6.5 CM', item: '522', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_522.png' },
      { nombre: 'TAPA PANEL 6 VIAS CENEFA 11,5 CM', item: '524', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_524.png' },
      { nombre: 'TENSOR PESA ELIPSE', item: '538', colores: 'Blanco, Beige, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_538.png' },
      { nombre: 'TENSOR PESA ELIPSE PERFORADO KIT', item: '539', colores: 'Blanco, Beige, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_539.jpeg' },
      { nombre: 'TOPE CORDÓN METÁLICO', item: '615', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_615.png' },
      { nombre: 'TOPE LATERAL DE ARRASTRE YN', item: '621', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_621.png' },
      { nombre: 'TOPE RIEL 4 VIAS', item: '627', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_627.png' },
      { nombre: 'TOPE RIEL 5 VIAS', item: '631', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_631.png' },
      { nombre: 'TOPE RIEL 5 VIAS', item: '634', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_634.png' },
      { nombre: 'TOPE PERFIL VELCRADO DERECHO', item: '638', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_638.jpeg' },
      { nombre: 'TOPE PERFIL VELCRADO IZQUIERDO', item: '639', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_639.png' },
      { nombre: 'TOPE POSTERIOR DE TRASLAPE', item: '641', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_641.jpeg' },
      { nombre: 'CENEFA PANEL 6.5 CM', item: '982', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_982.png' },
      { nombre: 'PERFIL PESO', item: '1015', colores: 'Crudo', unidad: 'Metro lineal', medidas: '4,50 m / 5,85 m / 5,95 m', img: '/accesorios-pel/item_1015.jpeg' },
      { nombre: 'PERFIL VELCRADO', item: '1017', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_1017.jpeg' },
      { nombre: 'RIEL PANEL 4 VIAS', item: '1021', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_1021.png', ficha: { 'Material': 'Aluminio', 'Vías': '4', 'Profundidad': '76 mm', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'RIEL PANEL 5 VIAS', item: '1022', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_1022.png', ficha: { 'Material': 'Aluminio', 'Vías': '5', 'Profundidad': '92 mm', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'RIEL PANEL 6 VIAS', item: '1023', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_1023.png', ficha: { 'Material': 'Aluminio', 'Vías': '6', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'UNIÓN RIEL 3-4-5 VIAS', item: '1689', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_1689.png' },
      { nombre: 'UNIÓN RIEL 6 VIAS', item: '1691', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_1691.png' },
      { nombre: 'CORDÓN 2,5 CARRETA X 200m', item: '19923', colores: 'Blanco, Beige, Café, Negro', unidad: 'Metro lineal', medidas: '200m', img: '/accesorios-pel/item_19923.png', ficha: { 'Ø': '2.5 mm', 'Carrete': '200 m' } },
      { nombre: 'CENEFA PANEL 7 CM', item: '49693', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_49693.jpeg' },
      { nombre: 'CORDÓN 3,0 CARRETA X 200m', item: '60296', colores: 'Blanco, Café', unidad: 'Metro lineal', medidas: '200m', img: '/accesorios-pel/item_60296.png', ficha: { 'Ø': '3.0 mm', 'Carrete': '200 m' } },
      { nombre: 'BASTÓN ACRÍLICO 110cm', item: '95169', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_95169.png' },
      { nombre: 'UNION RIEL PANEL 6 -7 V M GALVANIZADO', item: '109083', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_109083.jpeg' },
    ],
  },
  {
    titulo: 'PANEL JAPONÉS RENOVADO',
    desc: 'Sistema modular renovado de riel panel en configuraciones de 4 a 7 vías.',
    productos: [
      { nombre: 'PATÍN GUÍA M', item: '294', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_294.jpeg' },
      { nombre: 'TOPE RIEL 4 VIAS M', item: '626', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_626.jpeg' },
      { nombre: 'TOPE RIEL 5 VIAS M', item: '630', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_630.jpeg' },
      { nombre: 'CENEFA PANEL 8 CM', item: '983', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_983.jpeg', ficha: { 'Alto cenefa': '8 cm', 'Long. barra': '5.95 m' } },
      { nombre: 'RIEL PANEL 4 VIAS M', item: '45775', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_45775.jpeg', ficha: { 'Material': 'Aluminio', 'Vías': '4', 'Long. barra': '5.95 m' } },
      { nombre: 'RIEL PANEL 5 VIAS M', item: '45776', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_45776.jpeg', ficha: { 'Material': 'Aluminio', 'Vías': '5', 'Long. barra': '5.95 m' } },
      { nombre: 'RIEL PANEL 6 VIAS M', item: '45777', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_45777.jpeg', ficha: { 'Material': 'Aluminio', 'Vías': '6', 'Long. barra': '5.95 m' } },
      { nombre: 'TOPE RIEL 6 VIAS M', item: '45824', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_45824.jpeg' },
      { nombre: 'TAPA LATERAL DESLIZANTE 6.5CM', item: '50023', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_50023.png' },
      { nombre: 'TAPA LATERAL DESLIZANTE 7CM', item: '50046', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_50046.jpeg' },
      { nombre: 'RIEL PANEL 7 VIAS M', item: '87525', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_87525.png', ficha: { 'Material': 'Aluminio', 'Vías': '7', 'Long. barra': '5.95 m' } },
      { nombre: 'TOPE RIEL 7 VIAS M', item: '93244', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_93244.png' },
    ],
  },
  {
    titulo: 'ROMANA',
    desc: 'Rieles, perfiles, cordones, controles y accesorios para persianas romanas.',
    productos: [
      { nombre: 'ANZUELO', item: '8', colores: 'Blanco, Beige, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_8.jpeg' },
      { nombre: 'ARO GUÍA HILO', item: '35', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_35.jpeg' },
      { nombre: 'CADENA CONTINUA CERRADA 2,5m', item: '107', colores: 'Blanco, Beige', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_107.jpeg' },
      { nombre: 'CONTROL ROMANA CADENA CONTINUA', item: '163', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_163.jpeg' },
      { nombre: 'CONTROL ROMANA SEMIAUTOMÁTICO', item: '164', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_164.jpeg' },
      { nombre: 'CORDÓN 1,0 CARRETA x 1000m', item: '169', colores: 'Blanco', unidad: 'Metro lineal', medidas: '1000m', img: '/accesorios-pel/item_169.jpeg', ficha: { 'Ø': '1.0 mm', 'Carrete': '1000 m' } },
      { nombre: 'CORDÓN 1,5 CARRETA x 100m', item: '170', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_170.jpeg', ficha: { 'Ø': '1.5 mm', 'Carrete': '100 m' } },
      { nombre: 'CORDÓN 1,5 CARRETA x 500m', item: '171', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_171.jpeg', ficha: { 'Ø': '1.5 mm', 'Carrete': '500 m' } },
      { nombre: 'CORDÓN 1,8 CARRETA x 500m', item: '173', colores: 'Blanco, Beige, Café', unidad: 'Metro lineal', medidas: '500m', img: '/accesorios-pel/item_173.jpeg', ficha: { 'Ø': '1.8 mm', 'Carrete': '500 m' } },
      { nombre: 'EMBOMINADOR ROMANA SEMIAUT.', item: '187', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_187.jpeg' },
      { nombre: 'FRENO ROMANA', item: '207', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_207.jpeg' },
      { nombre: 'GUÍA CORDÓN', item: '223', colores: 'Blanco, Beige, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_223.jpeg' },
      { nombre: 'IGUALADOR CORDÓN', item: '235', colores: 'Blanco, Beige, Café, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_235.jpeg' },
      { nombre: 'IGUALADOR DE LUJO SET', item: '238', colores: 'Blanco, Beige, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_238.jpeg' },
      { nombre: 'MARIPOSA UN H UECO', item: '287', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_287.jpeg' },
      { nombre: 'MARIPOSA DOS H UECOS', item: '288', colores: 'Transparente', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_288.jpeg' },
      { nombre: 'OJALETE OVALADO', item: '290', colores: 'Blanco', unidad: 'Unidad', medidas: '200m', img: '/accesorios-pel/item_290.jpeg' },
      { nombre: 'SOPORTE CORDÓN METÁLICO', item: '377', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_377.jpeg' },
      { nombre: 'SOPORTE CORDÓN NYLON', item: '378', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_378.jpeg' },
      { nombre: 'SOPORTE ROMANA SEMIAUT.', item: '443', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_443.jpeg' },
      { nombre: 'TAPA CENEFA ROMANA ENROLLABLE', item: '498', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_498.jpeg' },
      { nombre: 'TOPE PERFIL ROMANA', item: '636', colores: 'Blanco, Beige, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_636.jpeg' },
      { nombre: 'TOPE RIEL ROMANA', item: '647', colores: 'Blanco, Beige, Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_647.jpeg' },
      { nombre: 'UÑA PLANA', item: '653', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_653.jpeg' },
      { nombre: 'UÑA TECHO CON NYLON', item: '656', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_656.jpeg' },
      { nombre: 'UNIÓN RIEL ROMANA SEMIAUT.', item: '662', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_662.jpeg' },
      { nombre: 'EJE ROMANA SEMIAUTOMÁTICO', item: '999', colores: 'Crudo', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_999.jpeg' },
      { nombre: 'PERFIL ROMANA', item: '1016', colores: 'Blanco, Beige, Negro', unidad: 'Metro lineal', medidas: '5,85 m / 5,95 m / 6,00 m', img: '/accesorios-pel/item_1016.jpeg', ficha: { 'Material': 'Aluminio', 'Long. barra': '5.85 / 5.95 / 6.00 m' } },
      { nombre: 'RIEL ROMANA', item: '1027', colores: 'Crudo', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_1027.jpeg', ficha: { 'Material': 'Aluminio crudo', 'Long. barra': '5.95 m' } },
      { nombre: 'RIEL ROMANA SEMIAUTOMÁTICO', item: '1029', colores: 'Crudo', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_1029.jpeg', ficha: { 'Material': 'Aluminio crudo', 'Accionamiento': 'Semiautomático', 'Long. barra': '5.95 m' } },
      { nombre: 'VARILLA INT. PLÁSTICA 4,2mm SIN VENA', item: '1692', colores: 'Blanco', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_1692.jpeg', ficha: { 'Material': 'Plástico', 'Ø': '4.2 mm', 'Vena': 'No' } },
      { nombre: 'VELCRO GANCHO CON ADHESIVO', item: '1698', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_1698.png', ficha: { 'Tipo': 'Gancho', 'Adhesivo': 'Sí' } },
      { nombre: 'VELCRO FELPA SIN ADHESIVO', item: '1700', colores: 'Blanco', unidad: 'Unidad', medidas: '25m', img: '/accesorios-pel/item_1700.png', ficha: { 'Tipo': 'Felpa', 'Adhesivo': 'No', 'Rollo': '25 m' } },
      { nombre: 'CENEFA ROMANA ENROLLABLE', item: '6036', colores: 'Blanco, Beige, Negro, Gris', unidad: 'Metro lineal', medidas: '5,95m / 6,00m', img: '/accesorios-pel/item_6036.jpeg', ficha: { 'Material': 'Aluminio', 'Long. barra': '5.95 / 6.00 m' } },
    ],
  },
  {
    titulo: 'RIELES',
    desc: 'Rieles súper, tráfico pesado, luxury, rodachinas, poleas y soportes para cortinas.',
    productos: [
      { nombre: 'BRAZO CRUZADOR', item: '103', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_103.jpeg' },
      { nombre: 'CRUZADOR CON BRAZO', item: '179', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_179.jpeg' },
      { nombre: 'CRUZADOR', item: '180', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_180.jpeg' },
      { nombre: 'FRENO LATERAL', item: '203', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_203.png' },
      { nombre: 'GANCHO AGUJA', item: '208', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_208.jpeg' },
      { nombre: 'POLEA LATERAL SUPER RIEL', item: '326', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_326.jpeg' },
      { nombre: 'POLEA LATERAL TRAFICO PESADO', item: '327', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_327.jpeg' },
      { nombre: 'RODACHINA CLIC', item: '335', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_335.jpeg' },
      { nombre: 'RODACHINA CORRIENTE', item: '336', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_336.jpeg' },
      { nombre: 'RODACHINA MULTIUSOS', item: '338', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_338.jpeg' },
      { nombre: 'TOPE RIEL SUPER RIEL', item: '648', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_648.jpeg' },
      { nombre: 'TOPE RIEL TRAFICO PESADO', item: '649', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_649.jpeg' },
      { nombre: 'RIEL SUPER RIEL', item: '1030', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_1030.jpeg', ficha: { 'Material': 'Aluminio', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'RIEL TRAFICO PESADO', item: '1033', colores: 'Blanco', unidad: 'Metro lineal', medidas: '3,30 m / 3,50 m / 3,60 m', img: '/accesorios-pel/item_1033.jpeg', ficha: { 'Material': 'Aluminio reforzado', 'Long. barra': '3.30 / 3.50 / 3.60 m' } },
      { nombre: 'SOPORTE RIEL DOBLE', item: '6015', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_6015.jpeg' },
      { nombre: 'SOPORTE RIEL SENCILLO', item: '6016', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_6016.jpeg' },
      { nombre: 'GANCHO GRADUABLE CORTO', item: '18926-18925', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_18926.png' },
      { nombre: 'RODACHINA CARRO PLUS', item: '22268', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_22268.jpeg' },
      { nombre: 'RIEL TRAFICO PESADO PLUS', item: '34209', colores: 'Blanco', unidad: 'Metro lineal', medidas: '4,50 m / 5,95 m / 6,00 m', img: '/accesorios-pel/item_34209.jpeg', ficha: { 'Material': 'Aluminio reforzado', 'Long. barra': '4.50 / 5.95 / 6.00 m' } },
      { nombre: 'TOPE RIEL TRAFICO PESADO PLUS', item: '34210', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_34210.jpeg' },
      { nombre: 'RODACHINA MINI', item: '48036', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_48036.png' },
      { nombre: 'TOPE RIEL SUPER RIEL IMP', item: '91918', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_91918.png' },
      { nombre: 'UNION RIEL TRAFICO PESADO PLUS', item: '94262', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_94262.jpeg' },
      { nombre: 'UNION RIEL SUPER RIEL', item: '94263', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_94263.jpeg' },
      { nombre: 'SOPORTE MURO CON NYLON', item: '94388', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_94388.jpeg' },
      { nombre: 'SOPORTE MURO DOBLE CON NYLON', item: '94393', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_94393.jpeg' },
      { nombre: 'UNION RIEL CONTEMPORANEA', item: '114498', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_114498.jpeg' },
    ],
  },
  {
    titulo: 'MACROMADERA',
    desc: 'Tubos, escalerillas, inclinadores, soportes y accesorios para persianas macromadera.',
    productos: [
      { nombre: 'AJUSTADOR CABEZAL MACROMADERA', item: '4', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_4.jpeg' },
      { nombre: 'AJUSTAVIENTOS', item: '6', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_6.jpeg' },
      { nombre: 'BASE MACROMADERA 50mm x 38mm', item: '45', colores: '', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_45.jpeg', ficha: { 'Ancho': '50 mm', 'Alto': '38 mm' } },
      { nombre: 'CAJA SOPORTE LATERAL', item: '116', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_116.jpeg' },
      { nombre: 'CINTA MACROMADERA 38mm', item: '130', colores: 'Negro', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_130.jpeg', ficha: { 'Material': 'Poliéster', 'Ancho': '38 mm' } },
      { nombre: 'CUNA CINTA MACROMADERA PLÁSTICO', item: '182', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_182.jpeg' },
      { nombre: 'CUNA ESCALERILLA PLÁSTICA', item: '183', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_183.jpeg' },
      { nombre: 'ESCALERILLA 50mm', item: '188', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_188.jpeg', ficha: { 'Material': 'Poliéster / algodón', 'Compatible': 'Tableta 50 mm' } },
      { nombre: 'FRENO MACROMADERA', item: '204', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_204.jpeg' },
      { nombre: 'INCLINADOR MACROMADERA', item: '239', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_239.jpeg' },
      { nombre: 'PIN ESCALERILLA METÁLICO', item: '301', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_301.jpeg' },
      { nombre: 'SOPORTE CENTRAL MACROMADERA 2,50', item: '359', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_359.jpeg' },
      { nombre: 'SOPORTE CENTRAL MACROMADERA', item: '363', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_363.jpeg' },
      { nombre: 'SOPORTE UNIVERSAL MACROMADERA', item: '475', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_475.jpeg' },
      { nombre: 'TABLETA 50mm', item: '479', colores: '', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_479.jpeg', ficha: { 'Material': 'Basswood', 'Ancho': '50 mm', 'Espesor': '~2.5 mm' } },
      { nombre: 'TAMBOR MACROMADERA', item: '485', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_485.jpeg' },
      { nombre: 'TAPA BASE CINTA ALGODÓN PLÁSTICA', item: '488', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_488.jpeg' },
      { nombre: 'CENEFA MACROMADERA', item: '980', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_980.jpeg' },
      { nombre: 'EJE INCLINADOR MACROMADERA ALUM.', item: '998', colores: '', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_998.jpeg' },
      { nombre: 'CABEZAL MACROMADERA', item: '9850', colores: '', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_9850.jpeg' },
    ],
  },
  {
    titulo: 'VERTICAL',
    desc: 'Rieles, uñas, cadenas, soportes y refuerzos para persianas verticales.',
    productos: [
      { nombre: 'BOLA DE ARRASTRE VERTICAL', item: '83', colores: 'Cromado', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_83.jpeg' },
      { nombre: 'CADENA MUELA X 250m 112 bolas', item: '111', colores: 'Blanco, Beige', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_111.jpeg' },
      { nombre: 'CADENA MUELA X 250m 8 bolas', item: '112', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_112.jpeg' },
      { nombre: 'CONTROL VERTICAL', item: '165', colores: 'Crudo, Anolock, Gris', unidad: 'Juego', medidas: '', img: '/accesorios-pel/item_165.jpeg' },
      { nombre: 'CORDÓN 2,5 CARRETA X 200m', item: '175', colores: 'Blanco, Beige, Café, Negro', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_175.png' },
      { nombre: 'PATÓGRAFO', item: '292', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_292.jpeg' },
      { nombre: 'PESA MUELA 89mm', item: '297', colores: 'Blanco, Beige', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_297.jpeg', ficha: { 'Compatible': 'Lama 89 mm' } },
      { nombre: 'PESA MUELA 127mm', item: '298', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_298.jpeg', ficha: { 'Compatible': 'Lama 127 mm' } },
      { nombre: 'PIN DE SEGURIDAD VERTICAL', item: '299', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_299.jpeg' },
      { nombre: 'REFUERZO LAMA 127mm', item: '330', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_330.jpeg', ficha: { 'Compatible': 'Lama 127 mm' } },
      { nombre: 'REFUERZO LAMA 89mm', item: '331', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_331.jpeg', ficha: { 'Compatible': 'Lama 89 mm' } },
      { nombre: 'SEPARADOR VERTICAL 1/2"', item: '357', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_357.jpeg' },
      { nombre: 'SOPORTE PIÑON', item: '430', colores: 'Crudo', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_430.jpeg' },
      { nombre: 'UÑA VERTICAL', item: '658', colores: '', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_658.jpeg' },
      { nombre: 'RIEL VERTICAL', item: '1034', colores: 'Blanco, Beige, Anolock', unidad: 'Metro lineal', medidas: '5,95 m / 6,00 m', img: '/accesorios-pel/item_1034.jpeg', ficha: { 'Material': 'Aluminio', 'Lamas': '89 / 127 mm', 'Long. barra': '5.95 / 6.00 m' } },
      { nombre: 'VARILLA PIÑON VERTICAL', item: '1053', colores: 'Crudo', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_1053.jpeg', ficha: { 'Material': 'Aluminio crudo', 'Long. barra': '5.95 m' } },
      { nombre: 'TENSOR PARED CORTO', item: '6041', colores: 'Blanco, Beige', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_6041.jpeg' },
    ],
  },
  {
    titulo: 'HANNA',
    desc: 'Sistema Hanna: rieles, lanzaderas, controles, pantógrafos y accesorios.',
    productos: [
      { nombre: 'PIN DE SEGURIDAD PREMIUM', item: '300', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_300.jpeg' },
      { nombre: 'TENSOR PESA ELIPSE', item: '536', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_536.jpeg' },
      { nombre: 'TOPE LATERAL VARILLA PIÑON PREM.', item: '622', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_622.jpeg' },
      { nombre: 'UÑA VERTICAL PREMIUM', item: '657', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_657.jpeg' },
      { nombre: 'VARILLA PIÑON PREMIUM', item: '1054', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_1054.jpeg' },
      { nombre: 'STICKER HANNA', item: '36201', colores: 'Blanco', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_36201.jpeg' },
      { nombre: 'REFUERZO HANNA', item: '36203', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_36203.jpeg' },
      { nombre: 'PANTÓGRAFO', item: '36204', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_36204.jpeg' },
      { nombre: 'LANZADERA HANNA', item: '36205', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_36205.jpeg' },
      { nombre: 'CONTROL Y TERMINAL HANNA', item: '38688', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_38688.jpeg' },
      { nombre: 'GUÍA CORDÓN HANNA', item: '38689', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_38689.jpeg' },
      { nombre: 'TAPAS RIEL HANNA CONTROL BASTÓN', item: '40872', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_40872.jpeg' },
      { nombre: 'TAPAS RIEL ROMANA CTRL. CADENA', item: '40873', colores: 'Blanco', unidad: 'Par', medidas: '', img: '/accesorios-pel/item_40873.jpeg' },
      { nombre: 'BARRA SILENCIADORA', item: '40874', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_40874.jpeg' },
      { nombre: 'RIEL HANNA PLUS', item: '45764', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_45764.jpeg', ficha: { 'Material': 'Aluminio', 'Long. barra': '5.95 m' } },
      { nombre: 'TELA HANNA', item: 'Según Catálogo', colores: '', unidad: 'Metro lineal', medidas: '', img: '/accesorios-pel/item_Según_Catálogo.jpeg' },
    ],
  },
  {
    titulo: 'FLEXIRIEL',
    desc: 'Sistema Flexiriel: riel flexible, cruzadores, rodachinas y soportes.',
    productos: [
      { nombre: 'FLEXIRIEL', item: '22253', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,80 m / 5,95 m', img: '/accesorios-pel/item_22253.jpeg', ficha: { 'Material': 'ABS + metal', 'Moldeable': 'Sí (curvas 90°)', 'Long. barra': '5.80 / 5.95 m' } },
      { nombre: 'CRUZADOR IMANTADO', item: '22255', colores: 'Blanco', unidad: '', medidas: '', img: '/accesorios-pel/item_22255.jpeg' },
      { nombre: 'TOPE FLEXIRIEL', item: '22262', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_22262.jpeg' },
      { nombre: 'RODACHINA FLEXIRIEL', item: '22263', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_22263.jpeg' },
      { nombre: 'SOPORTE MURO FLEXIRIEL', item: '22265', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_22265.jpeg' },
      { nombre: 'SOPORTE DOBLE TECHO FLEXIRIEL', item: '22266', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_22266.jpeg' },
      { nombre: 'SOPORTE DOBLE MURO FLEXIRIEL', item: '22267', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_22267.jpeg' },
      { nombre: 'SOPORTE TECHO PARA FLEXIRIEL', item: '22284', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_22284.jpeg' },
      { nombre: 'TOPE FLEXIRIEL PLÁSTICO', item: '75657', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_75657.jpeg' },
    ],
  },
  {
    titulo: 'RIEL LUXURY',
    desc: 'Riel Luxury: carros, curvas, poleas, soportes y uniones.',
    productos: [
      { nombre: 'RODACHINA CARRO UNIVERSAL', item: '339', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_339.jpeg' },
      { nombre: 'RIEL LUXURY', item: '36194', colores: 'Blanco', unidad: 'Metro lineal', medidas: '5,95 m', img: '/accesorios-pel/item_36194.jpeg', ficha: { 'Material': 'Aluminio anodizado', 'Long. barra': '5.95 m' } },
      { nombre: 'CURVA 90 GRADOS LUXURY', item: '40863', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_40863.jpeg' },
      { nombre: 'RODACHINA RIEL LUXURY', item: '40864', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_40864.jpeg' },
      { nombre: 'UNIÓN RIEL LUXURY', item: '40866', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_40866.jpeg' },
      { nombre: 'CARRO CRUZADOR CON BRAZY LUX.', item: '40867', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_40867.jpeg' },
      { nombre: 'SOPORTE TECHO', item: '40868', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_40868.jpeg' },
      { nombre: 'CARRO LUXURY', item: '40869', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_40869.jpeg' },
      { nombre: 'POLEA LATERAL LUXURY', item: '40870', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_40870.jpeg' },
      { nombre: 'TOPE RIEL LUXURY', item: '40871', colores: 'Blanco', unidad: 'Unidad', medidas: '', img: '/accesorios-pel/item_40871.jpeg' },
    ],
  },
]

const TOTAL = 259
const LINEAS = 11
const fichaCount = grupos.reduce((acc, g) => acc + g.productos.filter(p => 'ficha' in p && p.ficha).length, 0)

export default function AccesoriosPelPage() {
  return (
    <div className="page-top">
      <div className="container-site">

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontSize: '13px', color: 'var(--text-3)' }}>
          <Link href="/productos" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Productos</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-2)' }}>Accesorios Persianas</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px', maxWidth: '680px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-flex' }}>Catálogo de Accesorios · Lista 220</span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '14px' }}>
            Accesorios e Insumos <span className="text-gold-gradient">Persianas</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            {TOTAL} referencias en {LINEAS} líneas de producto: enrollables, panel japonés, romana, rieles,
            macromadera, vertical, Hanna, Flexiriel y Riel Luxury. Instalación profesional en toda la zona.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-3)', marginTop: '6px' }}>
            <span style={{ color: 'var(--gold)', fontWeight: 700 }}>{fichaCount} referencias</span> incluyen ficha técnica con especificaciones de material y dimensiones.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
            {grupos.map(g => (
              <a key={g.titulo} href={`#${g.titulo.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                style={{ fontSize: '12px', padding: '5px 12px', borderRadius: '20px', background: 'rgba(184,145,42,0.1)',
                  color: 'var(--gold-dark)', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(184,145,42,0.2)' }}>
                {g.titulo} ({g.productos.length})
              </a>
            ))}
          </div>
        </div>

        {/* Secciones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {grupos.map((grupo) => {
            const anchorId = grupo.titulo.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
            return (
              <div key={grupo.titulo} id={anchorId}>
                <div style={{ marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
                  <h2 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '3px' }}>
                    {grupo.titulo}
                  </h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>{grupo.desc}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '8px' }}>
                  {grupo.productos.map((p, idx) => (
                    <div key={`${p.item}-${idx}`} className="card-glass pel-card" style={{
                      padding: '12px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center',
                      gap: '8px', borderRadius: '10px',
                    }}>
                      {p.img ? (
                        <a href={p.img} target="_blank" rel="noopener noreferrer" title="Clic para ampliar"
                          style={{ width: '100%', height: '80px', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', background: 'rgba(0,0,0,0.02)', borderRadius: '6px',
                            padding: '6px', cursor: 'zoom-in' }} className="pel-img-wrap">
                          <img src={p.img} alt={p.nombre} className="pel-img"
                            style={{ maxWidth: '100%', maxHeight: '68px', objectFit: 'contain',
                              transition: 'transform 0.2s ease' }} />
                        </a>
                      ) : (
                        <div style={{ width: '100%', height: '80px', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', background: 'rgba(0,0,0,0.03)', borderRadius: '6px',
                          fontSize: '11px', color: 'var(--text-3)' }}>
                          —
                        </div>
                      )}
                      <div style={{ width: '100%', textAlign: 'center' }}>
                        {p.item && (
                          <p style={{ fontSize: '10px', color: 'var(--gold)', fontWeight: 600,
                            letterSpacing: '0.05em', marginBottom: '3px' }}>#{p.item}</p>
                        )}
                        <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text)',
                          lineHeight: 1.25, marginBottom: '5px' }}>{p.nombre}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', justifyContent: 'center' }}>
                          {p.unidad && (
                            <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '20px',
                              background: 'rgba(184,145,42,0.1)', color: 'var(--gold-dark)', fontWeight: 600 }}>
                              {p.unidad}
                            </span>
                          )}
                          {p.colores && p.colores.split(',').slice(0, 3).map(c => c.trim()).filter(Boolean).map((color, ci) => (
                            <span key={ci} style={{ fontSize: '9px', padding: '2px 5px', borderRadius: '20px',
                              background: 'rgba(0,0,0,0.05)', color: 'var(--text-3)' }}>
                              {color}
                            </span>
                          ))}
                        </div>
                        {p.medidas && (
                          <p style={{ fontSize: '10px', color: 'var(--text-3)', marginTop: '3px' }}>{p.medidas}</p>
                        )}
                        {'ficha' in p && p.ficha && Object.keys(p.ficha).length > 0 && (
                          <div style={{
                            width: '100%', borderTop: '1px solid rgba(0,0,0,0.07)',
                            paddingTop: '6px', marginTop: '6px',
                            display: 'flex', flexDirection: 'column', gap: '3px', textAlign: 'left',
                          }}>
                            {Object.entries(p.ficha as Record<string,string>).map(([k, v]) => (
                              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: '6px', fontSize: '9px', lineHeight: 1.35 }}>
                                <span style={{ color: 'var(--text-3)', flexShrink: 0 }}>{k}</span>
                                <span style={{ color: 'var(--text-2)', textAlign: 'right', fontWeight: 600 }}>{v}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Nota */}
        <div style={{ marginTop: '48px', padding: '20px 24px', borderRadius: '12px',
          background: 'rgba(184,145,42,0.05)', border: '1px solid rgba(184,145,42,0.15)' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)' }}>Instalación y suministro profesional.</strong>{' '}
            Todos los accesorios e insumos se suministran con instalación incluida.
            Para repuestos o referencias específicas, consúltanos directamente.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/productos" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '14px', color: 'var(--text-2)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Todos los productos
          </Link>
          <Link href="/cotizar" className="btn-primary" style={{ padding: '11px 22px', fontSize: '14px' }}>
            Solicitar cotización <ArrowRight size={14} />
          </Link>
        </div>

      </div>

      <style>{`
        .pel-card { transition: transform 0.15s ease, box-shadow 0.15s ease; cursor: default; }
        .pel-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.09); }
        .pel-img-wrap:hover { background: rgba(0,0,0,0.05) !important; }
        .pel-img-wrap:hover .pel-img { transform: scale(1.1); }
      `}</style>
    </div>
  )
}
