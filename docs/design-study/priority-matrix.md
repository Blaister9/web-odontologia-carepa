# Matriz de prioridad

**Escalas.** Impacto 1–5 (5 = máximo) · Esfuerzo 1–5 (5 = mayor) · Riesgo 1–5 (5 = mayor)
· Confianza 1–5 (5 = certeza de que funcionará).

---

## Matriz completa

| ID | Cambio | Impacto | Esfuerzo | Riesgo | Confianza | Prioridad | Tipo |
|---|---|:---:|:---:|:---:|:---:|:---:|---|
| **P0-1** | Desplegar la fotografía real ya commiteada — **COMPLETADO 2026-08-18, PR #18** | **5** | **1** | 1 | **5** | **P0** | Quick win |
| **P0-2** | Publicar dirección, horario y enlace al GBP | **5** | **1** | 2 | **5** | **P0** | Quick win |
| **P0-3** | Corregir "ODONTÓLOGICO" → "ODONTOLÓGICO" | 3 | **1** | 1 | **5** | **P0** | Quick win |
| **P0-4** | Áreas táctiles ≥ 44 px + arreglar solape del sticky | 4 | 2 | 1 | **5** | **P0** | Quick win |
| **P0-5** | Retirar el dorado como color de texto (2,56 : 1) | 3 | 2 | 1 | **5** | **P0** | Quick win |
| **P0-6** | Instrumentar clics de WhatsApp (H0) | 4 | 2 | 1 | **5** | **P0** | Quick win |
| **P0-7** | Eliminar las 4 animaciones infinitas | 2 | **1** | 1 | **5** | **P0** | Quick win |
| **P0-8** | Enlace de salto al contenido principal | 2 | **1** | 1 | **5** | **P0** | Quick win |
| **P1-1** | Cargar tipografía real con `next/font` (H9) | **5** | 2 | 2 | 4 | **P1** | Foundation |
| **P1-2** | Tokens: color, espacio, radio, elevación, motion | 4 | 3 | 2 | **5** | **P1** | Foundation |
| **P1-3** | Header móvil compacto (marca corta, 56 px) | 4 | 2 | 2 | 4 | **P1** | Structural |
| **P1-4** | `StickyCTA` de una sola acción; retirar el flotante | 3 | 2 | **3** | 3 | **P1** | Structural |
| **P1-5** | Héroe con fotografía + `TrustSignal` | **5** | 3 | 2 | 4 | **P1** | Structural |
| **P1-6** | `IntentGateway` al fold + fusión con `ConversionJourney` (H3) | 4 | **4** | **3** | 4 | **P1** | Structural |
| **P1-7** | `LocationBlock` en home y `/consultorio` | **5** | 2 | 2 | **5** | **P1** | Structural |
| **P1-8** | `ReviewStrip` con 3 reseñas reales (H7) | 4 | 2 | 2 | 4 | **P1** | Structural |
| **P1-9** | `/servicios`: 3 familias, de 42 CTA a 3 (H5) | 4 | **4** | **4** | 3 | **P1** | Structural |
| **P1-10** | Tarjetas de tratamiento tipográficas (sin imagen duplicada) | 4 | 2 | 2 | 4 | **P1** | Visual polish |
| **P1-11** | `/equipo`: eliminar los dos clones ilustrados | 3 | 2 | 2 | 4 | **P1** | Visual polish |
| **P2-1** | Sesión fotográfica P-1 a P-6 | **5** | **4** | **3** | 4 | **P2** | Structural |
| **P2-2** | `/consultorio` con galería del espacio | 4 | 3 | 2 | 4 | **P2** | Structural |
| **P2-3** | Bloque "Qué determina el precio" (H6) | 3 | 2 | **4** | 3 | **P2** | Structural |
| **P2-4** | JSON-LD: `LocalBusiness` + `FAQPage` | 3 | 2 | 2 | 4 | **P2** | Foundation |
| **P2-5** | Página de servicio: "para quién es / para quién no" | 3 | 3 | 2 | 4 | **P2** | Structural |
| **P2-6** | Landings de campaña a ≤ 3 pantallas | 3 | 3 | **3** | 3 | **P2** | Structural |
| **P2-7** | Dividir `globals.css` en tokens + componentes | 2 | **4** | 2 | **5** | **P2** | Foundation |
| **P2-8** | Motion: feedback del funnel refinado | 3 | 2 | 2 | 4 | **P2** | Visual polish |
| **P2-9** | Registro profesional y bioseguridad concreta | 3 | 2 | 2 | 4 | **P2** | Structural |
| **P3-1** | `BeforeAfter` con casos consentidos | 4 | **4** | **5** | 3 | **P3** | Future |
| **P3-2** | Fotografía por servicio (12 tomas) | 3 | **5** | **3** | 3 | **P3** | Future |
| **P3-3** | Programa de captación de reseñas | 4 | 3 | 2 | 4 | **P3** | Future |
| **P3-4** | Dirección C aplicada solo a estética | 2 | **5** | **5** | 2 | **P3** | Future |
| **P3-5** | Instagram y Facebook enlazados con feed | 2 | 3 | 2 | 3 | **P3** | Future |
| **P3-6** | Promover la CSP de `report-only` a activa | 2 | 2 | **3** | 4 | **P3** | Future |

---

## Quick wins — impacto alto, esfuerzo bajo, riesgo bajo

**Ocho cambios, ninguno de más de un día, ninguno dependiente de aprobar una dirección de arte.**

| ID | Cambio | Por qué está aquí |
|---|---|---|
| P0-1 | Desplegar fotografía real | **Completado** en el PR #18 (`159de66`). |
| P0-2 | Dirección, horario y GBP | Cierra la brecha de confianza más grave. Son tres campos de datos. |
| P0-3 | Corregir la errata del nombre | Un carácter. Está en el header de todas las páginas. |
| P0-4 | Áreas táctiles y solape del sticky | Corrige 12 fallos WCAG y CTA tapados. |
| P0-5 | Retirar el dorado de texto | Corrige un fallo de contraste sistémico. |
| P0-6 | Instrumentar los clics | Sin esto, todo lo demás es fe. |
| P0-7 | Eliminar animaciones infinitas | Menos ruido, menos consumo. Es borrar código. |
| P0-8 | Enlace de salto | Accesibilidad básica. Diez líneas. |

**P0-1 ya está completado. Los siete restantes se pueden ejecutar esta semana y son
independientes de este estudio.**

---

## Structural changes — requieren decisión de dirección

P1-3 · P1-4 · P1-5 · P1-6 · P1-7 · P1-9 · P2-1 · P2-2 · P2-5 · P2-6

Cambian la arquitectura de la página o el modelo de contenido. **Requieren que la
dirección de arte esté aprobada**, porque el resultado depende de la paleta, la
tipografía y el tratamiento fotográfico elegidos.

---

## Visual polish — después de las fundaciones

P1-10 · P1-11 · P2-8

Alto valor percibido, bajo riesgo, pero **carecen de sentido antes de P1-1 y P1-2**.
Pulir componentes sobre un sistema de tokens inexistente es trabajo que hay que rehacer.

---

## Future experiments — no ahora

P3-1 · P3-2 · P3-3 · P3-4 · P3-5 · P3-6

Dependen de datos que no existen (casos consentidos, reseñas acumuladas), de presupuesto
de producción, o son apuestas de riesgo alto y confianza baja.

**P3-4 merece una nota:** aplicar la dirección C solo al segmento estético es
tentador y **no se recomienda** hasta tener analítica que demuestre que ese segmento
justifica mantener dos lenguajes visuales. Dos direcciones de arte en un sitio de un
consultorio es una decisión cara de mantener.

---

## Los cinco riesgos principales

| # | Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|---|
| R-1 | **La clienta no puede o no quiere publicar la dirección exacta.** Bloquea P0-2, P1-7 y la hipótesis H1. | Media | **Alto** | Confirmarlo **antes** de empezar. Si no es posible, publicar el motivo explícitamente: el silencio se interpreta peor. |
| R-2 | **La fotografía existente no aguanta tamaño de héroe.** Son recortes de redes, no tomas para web. | **Alta** | Medio | Usar solo `nataly-natural-portrait.webp` (900×1125) en grande. Priorizar la toma P-3. Aceptar composición más pequeña si hace falta. |
| R-3 | **Reducir de 42 a 3 CTA baja los clics totales** (H4 falla). | Media | Medio | Reducir por etapas, empezando por `/servicios`, y medir entre cada una. Reversible. |
| R-4 | **Reorganizar `/servicios` daña posiciones SEO.** Es la página con más texto indexable. | Media | **Alto** | Exportar todo el contenido antes de tocar. Ningún slug cambia. Ninguna cadena se borra. Vigilar Search Console 4 semanas. |
| R-5 | **El rediseño se queda a medias** y conviven dos lenguajes visuales. | **Alta** | Medio | Ejecutar por fases completas y desplegables. Nunca dejar una fase a medio aplicar entre páginas. |

---

## Qué NO hacer

| No hacer | Por qué |
|---|---|
| Rehacer el `IntentGateway` desde cero | Es el mejor activo del sitio y no tiene equivalente en el benchmark. Se **reposiciona**, no se reescribe. |
| Cambiar el copy de honestidad clínica | Es correcto ética, legal y comercialmente. Es diferenciador. |
| Cambiar URLs o slugs | El SEO técnico es el activo mejor construido. |
| Añadir un carrusel en el héroe | Oculta contenido y perjudica el LCP. |
| Añadir vídeo de fondo | Coste de datos injustificable en el contexto local. |
| Añadir cualquier librería de JS | El presupuesto de JS adicional es **0 KB**. |
| Inventar reseñas, cifras o casos | Destruye exactamente lo que se intenta construir. |
| Implementar la dirección C con las fotos actuales | Se vería peor que el sitio de hoy. |
| Rediseñar antes de cerrar P0-2 | P0-1 ya está desplegado, pero el sitio aún no publica dirección, horario ni GBP reales. |
