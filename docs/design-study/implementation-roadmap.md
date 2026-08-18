# Roadmap de implementación

**Este documento no implementa nada.** Describe cómo se implementaría si se aprueba la
dirección recomendada.

**Principio.** Cada fase termina en un estado **desplegable y coherente**. Nunca se deja
el sitio con dos lenguajes visuales conviviendo entre páginas (riesgo R-5).

---

## Fase 0 — Desbloqueo (antes de cualquier diseño)

**No es una fase de desarrollo. Es una fase de datos.**

| Necesario | Responsable | Bloquea |
|---|---|---|
| ¿Se puede publicar la dirección exacta? Si no, ¿por qué? | Clienta | P0-2, P1-7, H1 |
| Horario real por día | Clienta | P0-2 |
| URL del Google Business Profile | Clienta | P0-2 |
| Calificación y nº de reseñas actuales; texto de 3 reseñas | Clienta | P1-8, H7 |
| Registro profesional y universidad de Nataly | Clienta | P2-9 |
| Cifras verificables (años ejerciendo, pacientes) | Clienta | `TrustSignal` |
| URLs de Instagram y Facebook | Clienta | LT-7 |
| ¿Hay presupuesto para media jornada de fotografía? | Clienta | Fase E |
| ¿Se aprueba la dirección **A · Luz de Urabá**? | Clienta | Fases A–D |

**Definición de terminado:** las nueve respuestas por escrito.
**Sin esto, las fases B en adelante construyen sobre huecos.**

---

## Fase A — Fundaciones + quick wins

**Ninguna de estas tareas cambia la apariencia de forma arriesgada. Todas son ganancia neta.**

| Tarea | Archivos probables |
|---|---|
| Merge de `feature/real-client-photography-v1` (P0-1) | `public/images/client/**`, `src/data/team.ts`, `src/data/site.ts` |
| Corregir `clinicName` (P0-3) | `src/data/site.ts` |
| Áreas táctiles ≥ 44 px y compensación del sticky (P0-4) | `src/styles/globals.css` |
| Retirar el dorado de texto (P0-5) | `src/styles/globals.css` |
| Eliminar 4 animaciones infinitas (P0-7) | `src/styles/globals.css` |
| Enlace de salto (P0-8) | `src/pages/_document.tsx`, `globals.css` |
| Instrumentar clics de WhatsApp (P0-6) | `src/utils/tracking.ts`, `DynamicWhatsAppCTA.tsx` |
| Cargar tipografía con `next/font` (P1-1) | `src/pages/_app.tsx`, `globals.css` |
| Crear `styles/tokens.css` (P1-2) | `src/styles/tokens.css` (nuevo) |
| Publicar dirección, horario y GBP (P0-2) | `src/data/site.ts` |

**Riesgos:** FOUT al introducir la webfont. La reducción de pesos de 11 a 3 cambia el
aspecto de los titulares — es intencional, pero hay que avisar a la clienta.

**Dependencias:** Fase 0 (dirección y horario).

**Validaciones**
- `npm run typecheck` y `npm run lint` en verde.
- Contraste: cero fallos AA en las 6 rutas medidas.
- Áreas táctiles: cero controles por debajo de 24 px.
- Peso: home móvil ≤ 350 KB.
- Comparación visual antes/después en los 6 viewports.

**Terminado cuando:** el sitio publica dirección y horario, muestra las fotos reales,
carga su tipografía y no tiene fallos AA de contraste ni de área táctil.

---

## Fase B — Héroe y home

| Tarea | Archivos probables |
|---|---|
| Header móvil compacto (P1-3) | `src/components/layout/Header.tsx` |
| `StickyCTA` de una acción; retirar el flotante (P1-4) | `MobileStickyCTA.tsx`, `WhatsAppFloatingButton.tsx` |
| Héroe con fotografía (P1-5) | `src/components/sections/Hero.tsx` |
| `TrustSignal` (componente nuevo) | `src/components/ui/TrustSignal.tsx` |
| `LocationBlock` (componente nuevo) | `src/components/sections/LocationBlock.tsx` |
| `ReviewStrip` (P1-8) | `src/components/sections/ReviewStrip.tsx` |
| Reordenar la home según el blueprint | `src/pages/index.tsx` |

**Riesgos:** el héroe es el LCP. Un cambio mal ejecutado degrada Core Web Vitals.
**Dependencias:** Fase A completa; datos de reseñas de la Fase 0.

**Validaciones**
- LCP ≤ 2,5 s en móvil simulado con red lenta.
- CLS ≤ 0,1 — espacio reservado con `aspect-ratio`.
- Fold móvil: cromo ≤ 15 % del viewport.
- El `IntentGateway` visible sin scroll a 390 px.

**Terminado cuando:** una persona a 390 px ve foto, ciudad, horario y la primera puerta
de intención **sin desplazar**, y los Core Web Vitals no han empeorado.

---

## Fase C — Funnel

| Tarea | Archivos probables |
|---|---|
| Fusionar `IntentGateway` + `ConversionJourney` (P1-6) | `IntentGateway.tsx`, `ConversionJourney.tsx`, `JourneyContext.tsx` |
| Expansión en el sitio con motion de feedback (P2-8) | `globals.css` o `components/journey.css` |
| Jerarquía de CTA de 3 niveles (H4) | `src/components/ui/Button.tsx` |

**Riesgos:** el más alto de todo el roadmap. Se toca el activo estratégico del sitio.
**Mitigación:** conservar intactos el modelo de datos (`conversionJourneys.ts`), los
mensajes de WhatsApp y la lógica contextual del sticky. **Solo cambia la presentación.**

**Dependencias:** Fase B.

**Validaciones**
- Tras seleccionar cualquier intención, el CTA resultante queda **dentro del viewport
  sin scroll adicional**, en los 6 viewports.
- Navegación completa por teclado; `aria-live` y `aria-pressed` conservados.
- Con `prefers-reduced-motion`, la expansión ocurre sin animación pero funciona.
- Sin JS: el contenido sigue accesible.

**Terminado cuando:** tocar una puerta produce una respuesta visible en la misma pantalla,
en móvil y en escritorio.

---

## Fase D — Páginas internas

| Tarea | Archivos probables |
|---|---|
| `/servicios` en 3 familias, de 42 CTA a 3 (P1-9) | `src/pages/servicios/index.tsx`, `serviceCatalog.ts` |
| Tarjetas de tratamiento tipográficas (P1-10) | `ServiceCard.tsx`, `FeaturedTreatments.tsx` |
| `/equipo` sin clones ilustrados (P1-11) | `src/pages/equipo.tsx`, `DentalTeam.tsx`, `team.ts` |
| "Para quién es / para quién no" (P2-5) | `src/pages/servicios/[slug].tsx`, `servicePages.ts` |
| "Qué determina el precio" (P2-3) | ídem |
| Landings de campaña a ≤ 3 pantallas (P2-6) | `src/pages/c/[slug].tsx` |
| JSON-LD `LocalBusiness` + `FAQPage` (P2-4) | `src/utils/seo.ts` |

**Riesgos:** **R-4, el riesgo SEO más alto del proyecto.** `/servicios` concentra el mayor
volumen de texto indexable.

**Mitigación obligatoria, antes de tocar nada:**
1. Exportar el HTML renderizado de las 12 páginas de servicio y de `/servicios`.
2. Comparar antes/después: **ninguna cadena de texto puede desaparecer**.
3. Ningún slug, ninguna URL, ningún canonical cambia.
4. Vigilar Search Console durante 4 semanas.

**Dependencias:** Fase C.

**Validaciones**
- `/servicios` ≤ 6 pantallas a 390 px (desde 11,6).
- `/c/*` ≤ 3 pantallas (desde 8,3).
- Diff de contenido: cero cadenas perdidas.
- Enlazado interno ≥ 15 enlaces por ruta.
- JSON-LD válido en el validador de resultados enriquecidos de Google.

**Terminado cuando:** las páginas internas cumplen los límites de densidad **sin** haber
perdido una sola cadena indexable.

---

## Fase E — Fotografía

| Tarea | Entregable |
|---|---|
| Sesión P-1 a P-6 (P2-1) | Fachada, sala de espera, retrato editorial de Nataly, atención, Vanesa, grupal |
| Procesado y exportación | AVIF + WebP, 4:5 y 3:2, dentro del presupuesto de peso |
| Sustitución en el sitio | `Hero`, `/consultorio`, `/equipo`, bloque de doctora |
| Galería de `/consultorio` (P2-2) | 3–4 imágenes del espacio |

**Riesgos:** calidad fotográfica insuficiente; disponibilidad de las cuatro personas.
**Mitigación:** brief escrito ([`photography-direction.md`](photography-direction.md)) entregado
al fotógrafo antes de la sesión; revisión en el sitio antes de cerrar la jornada.

**Dependencias:** presupuesto aprobado en Fase 0. **Puede ejecutarse en paralelo a B–D.**

**Validaciones:** héroe ≤ 120 KB · total de imagen en home ≤ 350 KB · LCP sin degradar ·
cero imágenes duplicadas entre servicios.

**Terminado cuando:** ninguna ilustración vectorial queda en producción.

---

## Fase F — Motion

| Tarea | Archivos probables |
|---|---|
| Tokens de motion | `src/styles/tokens.css` |
| Reveal reducido a 8 px / 240 ms | `globals.css`, `ScrollReveal.tsx` |
| Refinar el feedback del funnel | CSS del funnel |
| Auditoría: cero motion decorativo | Todo el CSS |

**Riesgos:** bajos. Es principalmente sustracción.
**Dependencias:** Fase C.

**Validaciones:** cero animaciones infinitas · nada por encima de 400 ms · solo `transform`
y `opacity` · `prefers-reduced-motion` desactiva todo · CSS de motion ≤ 3 KB.

**Terminado cuando:** todo el motion restante es funcional o de ritmo de lectura, y ninguno
es decorativo.

---

## Fase G — QA

| Comprobación | Criterio |
|---|---|
| Viewports | 360, 390, 414, 768, 1366, 1440 sin desbordes horizontales |
| Contraste | Cero fallos AA en todas las rutas |
| Áreas táctiles | Cero controles < 24 px; objetivo 44 px |
| Teclado | Recorrido completo con foco visible |
| Lector de pantalla | Encabezados, `aria-live`, `alt` correctos |
| Reduced motion | Sitio plenamente funcional |
| Sin JS | Contenido accesible |
| Core Web Vitals | LCP ≤ 2,5 s · INP ≤ 200 ms · CLS ≤ 0,1 |
| Peso | Home móvil ≤ 600 KB |
| SEO | Diff de contenido sin pérdidas; JSON-LD válido; Search Console limpio |
| Enlaces | Cero rotos; los de WhatsApp abren con el mensaje correcto |
| Tipos y lint | `npm run typecheck` y `npm run lint` en verde |

**Terminado cuando:** las doce comprobaciones pasan en las 6 rutas y los 6 viewports.

---

## Fase H — Experimentación

| Tarea | Depende de |
|---|---|
| Línea base de 4 semanas con la instrumentación de la Fase A | P0-6 |
| Evaluar H1, H2, H3 contra la línea base | Fases B y C desplegadas |
| Evaluar H4 por etapas (reducción de CTA) | Fase D |
| Decidir sobre H6 (transparencia de precio) | Datos + criterio comercial |
| Programa de captación de reseñas (P3-3) | — |
| Revisar si procede `BeforeAfter` (P3-1) | Consentimientos firmados |

**Nota metodológica.** El volumen de tráfico de un consultorio local es casi con certeza
insuficiente para un A/B con significancia estadística. La medición será **antes/después
con ventanas comparables**, reconocida explícitamente como evidencia más débil.

---

## Resumen de dependencias

```
Fase 0 (datos y aprobación)
  └─► Fase A (fundaciones + quick wins)          ← desplegable
        └─► Fase B (héroe y home)                ← desplegable
              └─► Fase C (funnel)                ← desplegable
                    └─► Fase D (páginas internas)← desplegable
                          └─► Fase G (QA)
                                └─► Fase H (experimentación)

Fase E (fotografía) ── en paralelo desde Fase 0, se integra en B y D
Fase F (motion)     ── tras Fase C
```

**Cada fase deja el sitio en un estado coherente y desplegable.** Si el proyecto se
detiene tras cualquiera de ellas, el resultado sigue siendo mejor que el punto de partida
y no queda a medio camino entre dos lenguajes visuales.
