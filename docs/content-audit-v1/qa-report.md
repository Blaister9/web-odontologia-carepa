# QA de contenido, responsive y funcional

Fecha: 2026-08-22

## Densidad de contenido renderizado

Conteo aproximado del texto visible en `main`. Las campañas incluyen el bloque de entrada y el recorrido seleccionado.

| Página | Producción anterior | Versión auditada | Cambio aproximado |
|---|---:|---:|---:|
| Home | 419 palabras | 317 palabras | -24% |
| Consultorio | 376 | 230 | -39% |
| Equipo | 234 | 123 | -47% |
| Servicios | 703 | 625 | -11% |
| Detalles de servicio | 315–344 | 239–266 | entre -16% y -28% |
| Campañas | 486–503 | 382–420 | entre -16% y -24% |

El catálogo conserva todos los servicios; por eso su reducción es menor. Cada tarjeta mantiene título y una línea útil.

## Responsive

Se probaron 22 rutas en los seis viewports solicitados: 132 combinaciones.

- 360 × 800
- 390 × 844
- 414 × 896
- 768 × 1024
- 1366 × 768
- 1440 × 900

Resultado:

- 0 páginas con overflow horizontal.
- H1 de máximo 3 líneas en todos los tamaños.
- 0 párrafos principales de más de 7 líneas en la medición automática.
- CTA contextual de campaña de máximo 2 líneas en móvil.
- Inspección visual de Home, Consultorio, Servicios y campaña de Limpieza sin cortes, solapamientos ni cambios de layout.

## Funcional

- Hero CTA desplaza a `#elige-tu-camino`.
- Los tres recorridos abren correctamente: 5 opciones de urgencia, 6 estéticas y 6 de revisión/limpieza.
- Seleccionar y cambiar opción actualiza y limpia el resultado.
- “Cambiar motivo” reinicia el recorrido.
- Los CTA contextuales usan `wa.me/573128311449`.
- Las seis rutas `/c/*` preservan UTM, abren el recorrido correcto y preseleccionan la opción cuando corresponde.
- El sticky móvil aparece en páginas internas y apunta al WhatsApp confirmado.
- Los enlaces de servicios relacionados conservan sus rutas.
- Las 12 páginas de servicio respondieron con su H1 y metadata correspondientes.

## Técnica

| Comprobación | Resultado |
|---|---|
| `npm run typecheck` | Pasa |
| `npm run lint` | Pasa |
| `npm run build` | Pasa; 17 páginas generadas |
| `npm audit --audit-level=moderate` | 0 vulnerabilidades |
| `git diff --check` | Pasa; solo avisos informativos de conversión LF/CRLF en Windows |

## Evaluación editorial contra producción

- Se lee más rápido: sí; las páginas principales reducen entre 11% y 47% del texto.
- Las frases son más concretas: sí; roles, servicios y acciones sustituyen beneficios abstractos.
- Se redujo el tono artificial: sí; “orientación” pasa de 55 a 0 y “profesional” de 31 a 10 en el inventario.
- Conserva profesionalismo: sí; mantiene límites clínicos, valoración previa y lenguaje formal sin rigidez.
- Conserva conversión: sí; cada contexto termina en una acción de WhatsApp clara.
- Conserva identidad: sí; Nataly, el equipo real, Carepa y la forma local de agendar permanecen visibles.
