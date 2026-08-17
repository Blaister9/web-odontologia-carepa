# Piezas originales de la clienta (uso en redes y campañas)

Copias sin modificar de las piezas entregadas por la clienta. Están aquí para
reutilizarse en Instagram, Facebook, WhatsApp Estados y campañas pagas.

**No se renderizan en el sitio web.** Contienen logo, teléfono, dirección y copy
publicitario incrustados; insertarlas como bloques de contenido duplicaría
información que la web ya entrega en HTML (mejor para SEO, accesibilidad y
mantenimiento, porque un teléfono dentro de un JPG no se puede actualizar ni
leer por un lector de pantalla).

| Archivo | Clasificación | Uso |
| --- | --- | --- |
| `nataly-servicios-promo.jpeg` | B — pieza publicitaria | Solo redes. El listado de servicios ya existe en `/servicios`. |
| `nataly-bata-promo.jpeg` | A/B — recortable, no requerida | Solo redes. Su recorte limpio no se usó porque `nataly-bata-clinica` cubre la necesidad. |
| `equipo-duo-promo.jpeg` | A — recortable | Solo redes en su versión completa. La banda fotográfica limpia se usa en `/equipo`. |
| `caso-protesis-antes-despues.jpeg` | C — caso clínico | Solo redes en su versión completa. Las dos fotos aisladas se usan en la página de prótesis. |

Los originales completos (las seis piezas) viven en `public/images/client/raw/`.
Las versiones web derivadas viven en `public/images/client/web/` y se regeneran con:

    node scripts/process-client-photography.mjs
