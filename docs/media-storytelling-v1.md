# Real media storytelling v1

## Alcance y criterio editorial

La integración parte de la auditoría de producción del 24 de agosto de 2026 y de la política de publicación definida en `docs/media-intake-v2`. Solo se usaron activos clasificados como `PUBLIC-SAFE`; no se abrió ni publicó `IMG-001`, y se excluyeron promociones, ubicaciones, licencias o procedencias pendientes.

Oportunidades detectadas:

- Alta: `/consultorio`, `/servicios` y la plantilla de detalle de servicio.
- Media: apertura de `/equipo` y un bloque editorial posterior al embudo principal de la home.
- Sin incorporación: hero y embudo principal de la home, CTAs, footer, tarjetas de conversión y páginas donde no existe una relación honesta entre el material disponible y el tratamiento.

## Activos seleccionados

| ID | Derivado web | Uso editorial |
| --- | --- | --- |
| IMG-004 | `nataly-vanesa-team.webp` | Home, equipo, ortodoncia y odontología familiar |
| IMG-005 | `clinic-chair.webp`, `clinic-chair-portrait.webp` | Consultorio, servicios, prótesis, endodoncia y cordales |
| IMG-015 | `nataly-clinic-work.webp` | Home, consultorio, servicios, limpieza, resinas y urgencias |
| IMG-017 | `nataly-portrait.webp` | Consultorio, blanqueamiento y diseño de sonrisa |
| VID-002 | `clinic-room-closing-vertical.mp4` | Un único video contextual en `/consultorio` |

También se reutilizaron fotografías web ya autorizadas del proyecto en la home y en las tarjetas del equipo. No se añadieron flyers, piezas con texto promocional, material generado con Meta AI, capturas privadas, logos rasterizados ni activos pendientes de confirmación.

## Tratamiento técnico

- Derivados WebP generados sin ampliar el original y con `sizes` responsivos.
- Solo el medio LCP de `/consultorio` lleva prioridad; el resto conserva carga diferida.
- Video con controles nativos, `playsInline`, `preload="none"`, sin autoplay, loop ni reproducción silenciada forzada.
- Póster `clinic-tour-poster.webp` extraído de VID-002 en `00:01.000`.
- Peso público nuevo: 309,832 bytes (cuatro derivados nuevos, incluido el póster).

## Cobertura

Antes de esta integración, las áreas auditadas sumaban 8 colocaciones de imagen y ningún video: home 3, consultorio 2, equipo 3, índice de servicios 0 y detalles de servicio 0. Después suman 25 colocaciones de imagen y un video: home 5, consultorio 4, equipo 4, índice de servicios 2 y detalles de servicio 10.

Diez de las doce páginas de servicio incorporan un medio contextual. `implantologia-carepa` y `armonizacion-orofacial-carepa` conservan el layout sin imagen porque los activos disponibles no representan esos tratamientos de forma verificable. La propiedad `heroMedia` es opcional para sostener ambas variantes sin contenido de relleno.
