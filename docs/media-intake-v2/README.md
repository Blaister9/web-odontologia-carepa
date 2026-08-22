# Media Asset Intake V2

## Resumen ejecutivo

Se recibieron **25 archivos**: **20 imágenes JPEG** y **5 videos MP4**, con un tamaño original total de **11,799,824 bytes (11.80 MB decimales)**. Todos los originales permanecen intactos y gitignored en `private/media-intake-2026-08-22/raw/`; el ZIP original no se modificó ni se copió al repositorio.

Clasificación final, después de que la cliente confirmara permiso para todos los pacientes/procedimientos:

- **PUBLIC-SAFE:** 10.
- **PUBLIC-PENDING-CONFIRMATION:** 14.
- **CONSENT-REQUIRED:** 0.
- **PRIVATE-DO-NOT-PUBLISH:** 1.

El único asset privado es IMG-001, una captura de conversación de WhatsApp. No se generó preview ni se reprodujo su contenido. Los assets de procedimiento IMG-015 y VID-004 tienen permiso confirmado; VID-004 sigue en espera únicamente por la promoción de valoración gratis.

## Top 10

1. **IMG-005 — unidad odontológica vacía.** Calidad A; mejor asset de consultorio, web y Google Business.
2. **VID-003 — Nataly + CTA de valoración.** Calidad A; mejor Reel listo para publicar.
3. **IMG-004 — Nataly + Vanesa.** Calidad B; mejor prueba de equipo real.
4. **IMG-017 — retrato de Nataly.** Calidad B; fuerte para confianza y campañas.
5. **IMG-015 — procedimiento autorizado.** Calidad B; prueba auténtica de atención clínica.
6. **VID-004 — carillas durante procedimiento.** Calidad B; gran potencial educativo, pero pendiente de confirmar “valoración gratis”.
7. **VID-005 — Nataly + Vanesa.** Calidad B; fuerte para presentación del equipo, pero pendiente de “consulta gratis”.
8. **IMG-008 — Nataly con mensaje “Cuidamos de ti”.** Calidad B; pieza orgánica lista.
9. **IMG-007 — Nataly y guante “Sonríe”.** Calidad B; pieza orgánica lista.
10. **VID-001 — cierre de jornada.** Calidad C; B-roll seguro del espacio.

## Qué publicar primero

1. IMG-005 en Google Business y como post de confianza local.
2. VID-003 como Reel de valoración con destino `/c/valoracion`.
3. IMG-004 para presentar a Nataly y Vanesa.
4. IMG-017 para un mensaje personal de orientación.
5. IMG-015 con copy educativo responsable y sin promesas de resultado.

## Website

- `/consultorio`: se añadió **una** fotografía real, optimizada y lazy-loaded de la unidad odontológica (IMG-005). No se alteró Hero ni se convirtió la página en galería.
- `/equipo`: se reemplazó la banda provisional por la foto real nueva de Nataly + Vanesa (IMG-004).
- Home, funnel, campañas `/c/*` y SEO no se modificaron.
- El procedimiento autorizado se preparó para campañas, pero no se incorporó a la web porque las dos mejoras anteriores aportan mayor claridad sin aumentar exposición clínica innecesaria.

## Qué debe quedarse fuera

- IMG-001: conversación privada, permanentemente excluida.
- IMG-016 e IMG-018: llevan marca Meta AI y no deben presentarse como fotografía real sin aclaración de procedencia.
- IMG-003: captura con interfaz y agenda de 2024.
- IMG-002 e IMG-010: procedencia/licencia de la fotografía clínica por confirmar.
- Todas las piezas que incluyan “valoración gratis”, “consulta gratis” o “primera cita sin costo” hasta confirmar condiciones.
- Piezas que muestran “Calle del Comercio” hasta confirmar la dirección pública exacta.

## Aprobaciones necesarias

1. Vigencia, alcance y condiciones de la oferta gratis: IMG-006, IMG-010–IMG-014, VID-004 y VID-005.
2. Dirección pública exacta: IMG-009, IMG-011, IMG-013 e IMG-014.
3. Procedencia/licencia de fotografías tipo stock: IMG-002 e IMG-010.
4. Procedencia y uso deseado de las piezas con marca Meta AI: IMG-016 e IMG-018.

## Teléfono y contenido desactualizado

- Todos los números publicitarios legibles coinciden con **+57 312 831 1449**.
- No se detectó `321` en material publicitario.
- IMG-003 contiene una agenda rotulada 2024 y no debe publicarse.
- La dirección exacta y horarios siguen sin confirmar en el proyecto; por eso no se infirieron ni actualizaron desde flyers.

## Assets públicos y presupuesto

- 2 imágenes WebP para web.
- 20 formatos WebP de campaña (4 fuentes × 5 relaciones de aspecto).
- 3 originales de marketing `PUBLIC-SAFE`.
- 3 previews MP4 H.264 `PUBLIC-SAFE`.
- Tamaño total nuevo en `public/`: **2,535,287 bytes (2.54 MB)**, incluido el README operativo del paquete.
- Staging privado completo, incluyendo hojas de inspección: **15,513,948 bytes (15.51 MB)**; no se versiona.
- Entrega raw: **11,799,824 bytes (11.80 MB)**.
- Ahorro de huella pública frente a versionar la entrega raw completa: **9,264,537 bytes (78.5%)**, incluso incluyendo 20 formatos derivados y 3 previews.

Los videos completos no se versionaron. Las fuentes pequeñas se colocaron sobre canvas editorial en lugar de ampliarse. No se aplicaron beauty filters, edición facial/dental/corporal, reemplazo de fondo ni IA generativa.

## Duplicados

No existen duplicados exactos por SHA-256. IMG-005, VID-001 y VID-002 son vistas relacionadas del mismo espacio; se usaron con propósitos distintos y no se generaron copias redundantes. El análisis completo está en [`duplicate-analysis.md`](./duplicate-analysis.md).

## Archivos de esta auditoría

- [`inventory.csv`](./inventory.csv) y [`inventory.md`](./inventory.md)
- [`video-analysis.md`](./video-analysis.md)
- [`reel-clips.csv`](./reel-clips.csv) y [`reel-clips.md`](./reel-clips.md)
- [`campaign-asset-matrix.csv`](./campaign-asset-matrix.csv) y [`campaign-asset-matrix.md`](./campaign-asset-matrix.md)
- [`asset-map.csv`](./asset-map.csv)
- [`consent-pending.md`](./consent-pending.md)
- [`google-business-shortlist.md`](./google-business-shortlist.md)
- [`social-organic-shortlist.md`](./social-organic-shortlist.md)
- [`paid-ads-shortlist.md`](./paid-ads-shortlist.md)
- [`format-candidates.md`](./format-candidates.md)
- [`duplicate-analysis.md`](./duplicate-analysis.md)

## Allowlist pública

Los únicos IDs de esta entrega autorizados a producir archivos en `public/` son:

`IMG-004`, `IMG-005`, `IMG-007`, `IMG-008`, `IMG-015`, `IMG-017`, `IMG-019`, `VID-001`, `VID-002`, `VID-003`.

Todo lo demás permanece solo en `private/`.
