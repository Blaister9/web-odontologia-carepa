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
| `nataly-servicios-promo.jpeg` | B — pieza publicitaria | **Solo redes.** Se evaluó recortarla: Nataly queda contra el borde derecho y las píldoras de texto llegan hasta x≈468, así que el área útil baja a ~249 px de ancho, con el gorro y el mentón pegados a los bordes. No alcanza la calidad de las demás. |
| `nataly-bata-promo.jpeg` | A — recortable | Solo redes en su versión completa. Su recorte limpio 499 × 624 es el retrato de Nataly en `/equipo`. |
| `equipo-duo-promo.jpeg` | A — recortable | Solo redes en su versión completa. De aquí salen la apertura de `/equipo` y el retrato individual de Vanesa López. |

> **El caso de prótesis ya no está en esta carpeta.** Contiene un paciente
> identificable y no hay autorización escrita de uso de imagen, así que tanto el
> original como los dos recortes se movieron fuera de `public/` y fuera del
> repositorio, a `private/client-clinical-pending/` (en `.gitignore`). Mientras
> el caso siga con `enabled: false` no debe existir ninguna copia bajo `public/`.
> Al recibir la autorización se republican desde una rama nueva.

Los originales de las cinco piezas sin pacientes viven en
`public/images/client/raw/`; el caso clínico está aparte, en
`private/client-clinical-pending/`.
Las versiones web derivadas viven en `public/images/client/web/` y se regeneran con:

    node scripts/process-client-photography.mjs
