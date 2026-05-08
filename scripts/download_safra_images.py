"""
Script para descargar imágenes de Safra SAS (proveedor autorizado)
y organizarlas en las carpetas correctas del proyecto.
"""
import urllib.request
import os
import sys

BASE = "https://safrasas.com/wp-content/uploads"
PUBLIC = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public")

# Mapa: (url_imagen, ruta_destino_relativa_a_public)
IMAGES = [
    # ── HOMEPAGE / HERO ─────────────────────────────────────────────
    (f"{BASE}/2024/11/LaMar-coleccion-safra.jpg",          "safra/hero-coleccion.jpg"),

    # ── ENROLLABLES · Telas Blackout ────────────────────────────────
    (f"{BASE}/2023/12/Blackout-Fiorela-Blanco.jpg",        "safra/enrollables/blackout-fiorela.jpg"),
    (f"{BASE}/2023/12/Imperial-Blackout-S9-Gris.jpg",      "safra/enrollables/blackout-imperial-s9.jpg"),
    (f"{BASE}/2023/12/Blackout-Zen-Arena.jpg",             "safra/enrollables/blackout-zen.jpg"),
    (f"{BASE}/2024/02/Blackout-Text-Pop-Azul.png",         "safra/enrollables/blackout-text.png"),

    # ── ENROLLABLES · Telas Screen ──────────────────────────────────
    (f"{BASE}/2024/02/Screen-Clasico-300-Negro.jpg",       "safra/enrollables/screen-300.jpg"),
    (f"{BASE}/2023/12/Screen-Lienzo-Trigo.jpg",            "safra/enrollables/screen-lienzo.jpg"),
    (f"{BASE}/2023/12/Sheer-Screen-Combi-Gris-Negro.jpg",  "safra/enrollables/screen-combi.jpg"),
    (f"{BASE}/2023/12/Sheer-Screen-fina-cafe.jpg",         "safra/enrollables/screen-fina.jpg"),
    (f"{BASE}/2023/12/Sheer-Screen-Silver-Beige-1.jpg",    "safra/enrollables/screen-silver.jpg"),
    (f"{BASE}/2023/12/Screen-Decorativo-Flower-Beige.jpg", "safra/enrollables/screen-flower.jpg"),
    (f"{BASE}/2023/12/Screen-Decorativo-Escandinavo-Gris.jpg", "safra/enrollables/screen-escandinavo.jpg"),
    (f"{BASE}/2023/12/Screen-Madona-Negro.jpg",            "safra/enrollables/screen-madona.jpg"),
    (f"{BASE}/2023/12/Screen-Decorativo-Kubic-Gris.jpg",   "safra/enrollables/screen-kubic.jpg"),
    (f"{BASE}/2023/12/Screen-Decorativo-Noa-Cafe.jpg",     "safra/enrollables/screen-noa.jpg"),
    (f"{BASE}/2023/12/Screen-Diseno-White-Linen.jpg",      "safra/enrollables/screen-diseno.jpg"),
    (f"{BASE}/2023/12/Decorativo-Privacidad-Zen-Gris.jpg", "safra/enrollables/screen-privacidad-zen.jpg"),
    (f"{BASE}/2024/09/Screen-Asiatico-Linen.jpg",          "safra/enrollables/screen-asiatico.jpg"),
    (f"{BASE}/2024/09/Sunpro-Y101-Gris-Silver-404.jpg",    "safra/enrollables/sunpro-y101.jpg"),
    (f"{BASE}/2024/09/Supron-E-Gris.jpg",                  "safra/enrollables/sunpro-e.jpg"),

    # ── SHEER ELEGANCE ──────────────────────────────────────────────
    (f"{BASE}/2024/09/Emely-Arena.jpg",                    "safra/sheer/sheer-emely.jpg"),

    # ── ROMANA ──────────────────────────────────────────────────────
    (f"{BASE}/2023/12/Imperial-S8-Crema.jpg",              "safra/romana/romana-imperial-s8.jpg"),
    (f"{BASE}/2023/12/Imperial-S6-Gris.jpg",               "safra/romana/romana-imperial-s6.jpg"),
    (f"{BASE}/2024/03/Vittoria-Grey.jpg",                  "safra/romana/romana-vittoria.jpg"),
    (f"{BASE}/2024/03/Sabrina-Beige.jpg",                  "safra/romana/romana-sabrina.jpg"),
    (f"{BASE}/2024/03/Primavera-Cascara-de-huevo.jpg",     "safra/romana/romana-primavera.jpg"),

    # ── HANAS ───────────────────────────────────────────────────────
    (f"{BASE}/2024/02/Telas-Hanas-Royal-Beige.png",        "safra/hanas/hanas-royal.png"),
    (f"{BASE}/2024/02/Telas-Hanas-Fantasia-Gris.png",      "safra/hanas/hanas-fantasia.png"),

    # ── VINTAGE ─────────────────────────────────────────────────────
    (f"{BASE}/2024/01/tela-vintage-inspiracion-safra.png", "safra/vintage/vintage-inspiracion.png"),
    (f"{BASE}/2024/01/Musa-cortina.png",                   "safra/vintage/vintage-musa.png"),
    (f"{BASE}/2024/01/Nina-Gris-1.png",                    "safra/vintage/vintage-nina.png"),

    # ── CORTINA ─────────────────────────────────────────────────────
    (f"{BASE}/2024/03/Ceniza.jpg",                         "safra/cortina/cortina-appril-shower.jpg"),
    (f"{BASE}/2024/02/Margaritas-Blanco.jpg",              "safra/cortina/cortina-margaritas.jpg"),
    (f"{BASE}/2024/02/Hojas-Blanco-4.jpg",                 "safra/cortina/cortina-hojas.jpg"),
    (f"{BASE}/2024/01/Musa-cortina.png",                   "safra/cortina/cortina-musa.png"),
    (f"{BASE}/2024/01/Nina-Gris-1.png",                    "safra/cortina/cortina-nina.png"),
    (f"{BASE}/2024/03/Sabrina-Beige.jpg",                  "safra/cortina/cortina-sabrina.jpg"),
    (f"{BASE}/2024/03/Primavera-Cascara-de-huevo.jpg",     "safra/cortina/cortina-primavera.jpg"),

    # ── ESTAMPADOS ──────────────────────────────────────────────────
    (f"{BASE}/2023/12/Screen-Decorativo-Flower-Beige.jpg", "safra/estampados/estampado-flower.jpg"),
    (f"{BASE}/2023/12/Screen-Decorativo-Escandinavo-Gris.jpg", "safra/estampados/estampado-escandinavo.jpg"),
    (f"{BASE}/2023/12/Screen-Madona-Negro.jpg",            "safra/estampados/estampado-madona.jpg"),
    (f"{BASE}/2023/12/Screen-Decorativo-Kubic-Gris.jpg",   "safra/estampados/estampado-kubic.jpg"),
    (f"{BASE}/2023/12/Screen-Decorativo-Noa-Cafe.jpg",     "safra/estampados/estampado-noa.jpg"),
    (f"{BASE}/2023/12/Screen-Diseno-White-Linen.jpg",      "safra/estampados/estampado-diseno.jpg"),
    (f"{BASE}/2023/12/Decorativo-Privacidad-Zen-Gris.jpg", "safra/estampados/estampado-privacidad.jpg"),
    (f"{BASE}/2024/02/Margaritas-Blanco.jpg",              "safra/estampados/estampado-margaritas.jpg"),
    (f"{BASE}/2024/02/Hojas-Blanco-4.jpg",                 "safra/estampados/estampado-hojas.jpg"),

    # ── LIENZO ──────────────────────────────────────────────────────
    (f"{BASE}/2023/12/Screen-Lienzo-Trigo.jpg",            "safra/lienzo/lienzo-trigo.jpg"),
    (f"{BASE}/2023/12/Screen-Decorativo-Flower-Beige-1.jpg","safra/lienzo/lienzo-flower.jpg"),

    # ── PÉRGOLAS ────────────────────────────────────────────────────
    (f"{BASE}/2024/03/Acrysun-2015-Rayas-Amarillo-N.jpg",  "safra/pergolas/pergola-acrysun-rayas.jpg"),
    (f"{BASE}/2024/05/Ventura-Portada.jpg",                "safra/pergolas/pergola-ventura.jpg"),
    (f"{BASE}/2024/05/Palomino-Portada.jpg",               "safra/pergolas/pergola-palomino.jpg"),

    # ── TOLDOS (ACRYSUN lonas) ──────────────────────────────────────
    (f"{BASE}/2024/03/Acrysun-2015-Rayas-Amarillo-N.jpg",  "safra/toldos/toldo-acrysun.jpg"),
    (f"{BASE}/2024/05/Ventura-Portada.jpg",                "safra/toldos/toldo-ventura.jpg"),
    (f"{BASE}/2024/05/Palomino-Portada.jpg",               "safra/toldos/toldo-palomino.jpg"),
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Referer": "https://safrasas.com/",
}

ok = 0
fail = 0
skip = 0

for url, rel_dest in IMAGES:
    dest = os.path.join(PUBLIC, rel_dest.replace("/", os.sep))
    os.makedirs(os.path.dirname(dest), exist_ok=True)

    if os.path.exists(dest):
        print(f"  SKIP  {rel_dest}")
        skip += 1
        continue

    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        with open(dest, "wb") as f:
            f.write(data)
        size_kb = len(data) // 1024
        print(f"  OK  {size_kb:>5} KB  {rel_dest}")
        ok += 1
    except Exception as e:
        print(f"  FAIL  {rel_dest}  [{e}]")
        fail += 1

print(f"\n✓ {ok} descargadas · {skip} ya existían · {fail} fallidas")
