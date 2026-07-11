# Activos visuales del Launch Kit

Paquete editable y reproducible para el Consultorio Odontológico Dra. Nataly Jiménez. Los archivos usan la identidad que ya existe en el sitio, no fotografías de stock, y conducen a rutas específicas antes de abrir WhatsApp.

## Inventario

| Recurso | Cantidad | Ubicación |
| --- | ---: | --- |
| Destinos QR | 8 | `qr/manifest.csv` y `manifest.json` |
| QR SVG | 32 | `qr/svg/` |
| QR PNG | 32 | `qr/png/` |
| Líneas visuales | 6 | `templates/` |
| Formatos por línea | 7 | `templates/` |
| Másteres SVG editables | 42 | `templates/` |
| Vistas previas PNG | 42 | `previews/` |
| Reporte automatizado de QA | 1 | `qa-report.json` |

El inventario fuente de verdad es [`manifest.json`](./manifest.json). Incluye dimensiones, zonas seguras, destinos, UTM, relación entre máster y preview, y pendientes.

## Identidad auditada

La identidad se obtuvo de `src/styles/globals.css`, `src/data/site.ts` y `src/components/layout/Header.tsx`:

- Marca: `NJ` + `Dra. Nataly Jiménez`.
- Descriptor: `Odontología · Carepa`.
- Tipografía: `Inter` y la pila sans-serif del sitio.
- Tinta: `#153443`.
- Verde teal: `#0D6B73`.
- Verde suave: `#E4F3EF`.
- Menta: `#BFE2D8`.
- Dorado: `#C79B45`.
- Dorado suave: `#F3DFB4`.
- Marfil: `#FBF8F1`.
- Coral de urgencia: `#B85F4B`, ya presente como acento de intención en el CSS.
- Dominio: `https://www.dranatalyjimenez.com`.
- WhatsApp: `573128311449`.

No se creó un logo nuevo. El monograma `NJ` reproduce el tratamiento real del encabezado del sitio.

## QR

Cada destino tiene las variantes `clean`, `framed-cta`, `light` y `mono`, tanto en SVG como PNG. El patrón de nombre es:

```text
qr/svg/{destination}-{variant}.svg
qr/png/{destination}-{variant}.png
```

| ID | Destino |
| --- | --- |
| `web-general` | `https://www.dranatalyjimenez.com/?utm_source=qr&utm_medium=offline&utm_campaign=lanzamiento_sitio&utm_content=qr_print` |
| `urgencias` | `https://www.dranatalyjimenez.com/c/urgencias?utm_source=qr&utm_medium=offline&utm_campaign=urgencias_carepa&utm_content=qr_print` |
| `sonrisa` | `https://www.dranatalyjimenez.com/c/sonrisa?utm_source=qr&utm_medium=offline&utm_campaign=sonrisa_carepa&utm_content=qr_print` |
| `limpieza` | `https://www.dranatalyjimenez.com/c/limpieza?utm_source=qr&utm_medium=offline&utm_campaign=limpieza_carepa&utm_content=qr_print` |
| `ortodoncia` | `https://www.dranatalyjimenez.com/c/ortodoncia?utm_source=qr&utm_medium=offline&utm_campaign=ortodoncia_carepa&utm_content=qr_print` |
| `valoracion` | `https://www.dranatalyjimenez.com/c/valoracion?utm_source=qr&utm_medium=offline&utm_campaign=valoracion_carepa&utm_content=qr_print` |
| `uraba` | `https://www.dranatalyjimenez.com/c/uraba?utm_source=qr&utm_medium=offline&utm_campaign=uraba_carepa&utm_content=qr_print` |
| `whatsapp-directo` | `https://wa.me/573128311449` con mensaje contextual precargado |

WhatsApp directo no admite UTM como una landing web. Por eso ese QR no lleva parámetros UTM falsos: el mensaje precargado dice que la persona llegó desde el QR. El texto y la URL codificada exacta están en el manifiesto.

### Cuándo usar cada variante

- `clean`: QR de tinta de marca sobre blanco, sin elementos adicionales.
- `framed-cta`: pieza autocontenida con monograma, CTA y dominio; es la opción recomendada para mostrador o material sin contexto.
- `light`: teal sobre marfil para composiciones claras de la marca.
- `mono`: negro puro sobre blanco para impresión económica o equipos monocromáticos.

No cambies colores, inviertas el QR ni retires el margen silencioso. Para impresión, conserva al menos 25 mm de ancho y prueba una unidad física con el celular que usará el equipo antes de producir el lote.

## Plantillas editables

El patrón de nombre es:

```text
templates/{campaign}-{format}.svg
previews/{campaign}-{format}.png
```

Líneas disponibles:

- `lanzamiento`: portal de recorridos.
- `urgencias`: pulso y señal de atención.
- `sonrisa`: arco de sonrisa y destellos.
- `limpieza`: anillos limpios y brillo.
- `ortodoncia`: sistema de alineación.
- `valoracion`: ruta clara de valoración.

| Formato | Dimensiones | Zona segura |
| --- | ---: | --- |
| `feed-square` | 1080 × 1080 px | 80 px |
| `feed-portrait` | 1080 × 1350 px | 90 px arriba, 80 px laterales, 110 px abajo |
| `story` | 1080 × 1920 px | 250 px arriba/abajo y 90 px laterales |
| `meta-horizontal` | 1200 × 628 px | 58 px verticales y 64 px laterales |
| `google-business` | 1200 × 900 px | 72 px |
| `a5` | 1748 × 2480 px, 300 dpi | 142 px |
| `counter-card` | 1181 × 1772 px, 300 dpi | 96 px |

Los formatos digitales incluyen URL corta visible. A5 y mostrador incorporan el QR real de su campaña y también muestran la URL corta como alternativa.

### Cómo editar

1. Abre el SVG en Figma, Illustrator, Inkscape u otra herramienta que preserve SVG.
2. Edita los nodos `<text>`; no están convertidos a curvas para facilitar ajustes.
3. Mantén la pila `Inter, Arial, sans-serif` o instala Inter en el equipo de diseño.
4. Para mostrar temporalmente la guía, cambia `opacity="0"` por `opacity=".35"` en el grupo `id="safe-zone"`. Vuelve a `0` antes de exportar.
5. No desplaces la ilustración fuera de su región decorativa ni sobre el bloque de copy.
6. No cambies el destino del QR editando el dibujo: regenera el QR desde el script para conservar verificabilidad.

Los PNG de `previews/` sirven para revisión y selección rápida; se limitan a 900 px de ancho para no inflar el repositorio. Para publicación o impresión exporta desde el máster SVG al tamaño requerido.

## Regeneración y QA

No se agregó ninguna dependencia al `package.json` ni al bundle de Next.js. La generación usa OpenCV únicamente en desarrollo para crear y decodificar las matrices QR. La rasterización usa `sharp`, ya disponible en el árbol de instalación de Next.js.

Desde la raíz del proyecto:

```powershell
python scripts/generate-marketing-assets.py
node scripts/render-marketing-previews.mjs
python scripts/verify-marketing-assets.py
```

El verificador comprueba automáticamente:

- 8 destinos y 4 variantes por destino.
- Dominio canónico con `www`.
- `utm_source=qr`, `utm_medium=offline` y `utm_content=qr_print`.
- Número de WhatsApp y mensaje precargado.
- Decodificación exacta de los 32 PNG QR a su URL declarada.
- Decodificación exacta de los 12 QR incorporados en las vistas previas A5 y mostrador.
- 6 líneas por 7 formatos.
- Dimensiones de los 42 SVG.
- Capas editables de marca, CTA, URL, zona segura y QR impreso.
- Proporciones y existencia de las 42 vistas previas.
- Huella SHA-256 de cada archivo verificado en `qa-report.json`.

## Pendiente real

No se generó un QR de reseñas de Google. Hace falta el enlace oficial de reseñas del Google Business Profile; cuando se reciba, debe añadirse como un destino nuevo y volver a ejecutar la generación y el QA. No se debe sustituir por una búsqueda de Google ni por un enlace provisional.
