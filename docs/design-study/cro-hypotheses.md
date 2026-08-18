# Hipótesis de conversión

**Advertencia metodológica.** No se declara ningún porcentaje de mejora esperado.
No existe línea base analítica del sitio, así que cualquier cifra sería inventada.
Cada hipótesis se plantea de forma **falsable**: define qué la confirmaría y qué la
refutaría.

**Métrica primaria del proyecto:** conversaciones de WhatsApp iniciadas desde el sitio.
Ya es medible: `src/utils/tracking.ts` existe y `DynamicWhatsAppCTA` acepta `ctaLocation`.
**Antes de probar nada, hay que instrumentar.** Ver H0.

---

## H0 · Prerrequisito: no se puede optimizar lo que no se mide

| | |
|---|---|
| **Problema** | No hay datos de comportamiento. Todas las hipótesis siguientes son inverificables hoy. |
| **Cambio** | Instrumentar el clic de cada CTA de WhatsApp con su `ctaLocation` y la intención seleccionada. Registrar dispositivo, viewport y fuente de tráfico. |
| **Motivo** | Sin línea base, cualquier cambio posterior es fe, no CRO. |
| **Métrica futura** | Clics a WhatsApp por ubicación · tasa por sesión · profundidad de scroll · tasa de selección de intención. |
| **Riesgo** | Ninguno funcional. Cuidar la privacidad: **sin PII, sin cookies de terceros**, con analítica respetuosa. |
| **Prioridad** | **P0.** Bloquea a todas las demás. |

---

## H1 · La prueba de existencia local aumenta el contacto

| | |
|---|---|
| **Problema** | El sitio no publica dirección, horario ni reseñas. Un visitante no puede confirmar que el consultorio existe. |
| **Cambio** | Añadir `TrustSignal` en el fold (ciudad, horario, calificación) y `LocationBlock` (dirección, mapa, GBP) por encima del catálogo. |
| **Motivo** | La probabilidad de abandono es máxima en los primeros 10 s ([NN/g](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/), 2026-08-17). Hoy esos 10 s no responden la pregunta que decide la permanencia. Los dos competidores directos del Urabá sí la responden. |
| **Confirmaría** | Sube la tasa de clic a WhatsApp por sesión y baja el rebote en sesiones móviles. |
| **Refutaría** | Sin cambio en clics tras 4 semanas con tráfico comparable. |
| **Riesgo** | **Requiere que la clienta acepte publicar la dirección.** Si hay una razón legítima para no hacerlo, hay que explicarla en el sitio, no callarla. |
| **Prioridad** | **P0** |

---

## H2 · La fotografía real de Nataly aumenta la confianza y el contacto

| | |
|---|---|
| **Problema** | El avatar de la doctora es una ilustración genérica. El sitio no tiene cara. |
| **Cambio** | Desplegar los retratos reales ya commiteados y llevar el de Nataly al fold. |
| **Motivo** | Los tres competidores locales con mejor presencia usan foto real de sus profesionales. Es el estándar del mercado, y aquí **el activo ya está producido y sin desplegar**. |
| **Confirmaría** | Sube el clic a WhatsApp desde el bloque de doctora y desde el sticky. |
| **Refutaría** | Sin cambio, o caída (posible si la calidad del recorte de redes se percibe como amateur en tamaño grande). |
| **Riesgo** | **Real.** Las fotos actuales son recortes de material de redes, no tomas para web. En un héroe a 900 px podrían verse blandas. *Mitigación:* usar `nataly-natural-portrait.webp` (900×1125, el único con resolución suficiente) y priorizar la toma P-3. |
| **Prioridad** | **P0** |

---

## H3 · Reducir la ambigüedad del funnel aumenta la selección de intención

| | |
|---|---|
| **Problema** | Al tocar una opción, el resultado aparece bajo el fold. En móvil parece que no pasó nada. |
| **Cambio** | El panel de orientación se expande **en el sitio de la tarjeta tocada** (ver [`motion-direction.md` §5](motion-direction.md#5-feedback--el-arreglo-que-más-importa)), con el CTA visible sin scroll adicional. |
| **Motivo** | La retroalimentación inmediata es la base de un control percibido como funcional. Hoy el feedback existe en el DOM pero no en pantalla. |
| **Confirmaría** | Sube la proporción de sesiones que seleccionan una intención, y la de las que llegan al CTA contextual. |
| **Refutaría** | Igual tasa de selección pero misma tasa de abandono → el problema no era el feedback sino la propuesta. |
| **Riesgo** | Bajo. Es un cambio de posición y motion, no de lógica. |
| **Prioridad** | **P1** |

---

## H4 · Menos CTA por pantalla aumentan los clics totales

| | |
|---|---|
| **Problema** | 14 enlaces a WhatsApp en la home, 42 en `/servicios`, todos con peso visual comparable. |
| **Cambio** | Un CTA primario por pantalla. Jerarquía de tres niveles. `StickyCTA` de una sola acción. Retirar el flotante en móvil. De 42 a 3 CTA en `/servicios`. |
| **Motivo** | Cuando todo es prominente, nada lo es. La barra sticky de dos botones obliga además a una microdecisión en cada scroll. |
| **Confirmaría** | Sube el total de clics a WhatsApp aunque haya menos enlaces. |
| **Refutaría** | Baja el total → algunos de esos 42 enlaces sí capturaban intención en su contexto. |
| **Riesgo** | **Medio y contraintuitivo.** Es la hipótesis con más probabilidad de fallar. *Mitigación:* reducir por etapas y medir entre cada una, empezando por `/servicios`. |
| **Prioridad** | **P1** |

---

## H5 · Los servicios expresados como necesidad se entienden mejor

| | |
|---|---|
| **Problema** | 12 servicios con nomenclatura clínica en una lista plana. Un paciente con dolor no sabe si necesita "endodoncia" o "extracción de cordales". |
| **Cambio** | Agrupar en tres familias con lenguaje de paciente: *Me duele algo · Quiero verme mejor · Quiero cuidarme*. **Coherente con el `IntentGateway` que ya existe.** |
| **Motivo** | `FeaturedTreatments` **ya lo hace bien** ("Quiero aclarar mis dientes" en lugar de "Blanqueamiento dental"). El patrón está probado en el propio sitio pero no se extendió al catálogo. |
| **Confirmaría** | Sube la profundidad de navegación a páginas de servicio y baja el rebote en `/servicios`. |
| **Refutaría** | Sube el rebote → los usuarios buscaban el nombre clínico exacto (probable en tráfico SEO de cola larga). |
| **Riesgo** | **SEO.** Los nombres clínicos son términos de búsqueda. *Mitigación:* la familia es la agrupación visual; el nombre clínico se conserva en el título del enlace, en el `<h1>` de la página de servicio y en el slug. **Ningún slug cambia.** |
| **Prioridad** | **P1** |

---

## H6 · Explicar qué determina el precio reduce el abandono

| | |
|---|---|
| **Problema** | El precio es el freno declarado nº 1 (`beforeBookingItems`: "No sé cuánto cuesta"). El sitio solo dice "pregunta por WhatsApp". |
| **Cambio** | Bloque **"Qué determina el precio"** en cada página de servicio: los factores, sin cifras. Elevar "Puedes preguntar primero" a un lugar visible. |
| **Motivo** | Doctoralia y Top Doctors —competidores reales por la búsqueda local— muestran orientación de precio. No dar ninguna referencia empuja a comparar en otro sitio. |
| **Confirmaría** | Sube el clic a WhatsApp desde páginas de servicio; los mensajes entrantes traen más contexto. |
| **Refutaría** | Sube el volumen de consultas de solo precio que no agendan → gasta tiempo del equipo sin convertir. |
| **Riesgo** | **Comercial, no técnico.** *Mitigación:* explicar factores, nunca cifras. Compatible con la política de honestidad clínica existente. |
| **Prioridad** | **P2** |

---

## H7 · Las reseñas cerca del CTA aumentan los clics

| | |
|---|---|
| **Problema** | Cero prueba social. `GoogleTrustPreview` no muestra reseñas y `Testimonials.tsx` no se usa en ninguna página. |
| **Cambio** | Tres reseñas reales de Google (nombre, fecha, texto) **inmediatamente antes** del CTA final y en el bloque de la doctora. |
| **Motivo** | Chelsea Dental Clinic pone su prueba social **antes** del catálogo. Doctoralia gana la comparación local precisamente por sus reseñas verificadas. |
| **Confirmaría** | Sube el clic en el CTA final y en el sticky en sesiones que llegan al bloque. |
| **Refutaría** | Sin cambio → el volumen de reseñas es demasiado bajo para ser persuasivo. |
| **Riesgo** | Bloqueado por `FALTA EL DATO`. **No inventar ni parafrasear reseñas bajo ninguna circunstancia.** |
| **Prioridad** | **P1** (si el dato existe) |

---

## H8 · Corregir las áreas táctiles reduce los toques fallidos

| | |
|---|---|
| **Problema** | 12 controles bajo 24 px en la home; 68 bajo 44 px en `/servicios`. Los enlaces "Consultar X" miden **15 px de alto**. |
| **Cambio** | Mínimo 44 px de alto en todo control; 56 px en la acción primaria móvil. Corregir la compensación del sticky para que deje de tapar contenido. |
| **Motivo** | Cumplimiento de WCAG 2.2 SC 2.5.8 AA ([W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), 2026-08-17), y **un CTA tapado por una barra fija es un CTA perdido**. |
| **Confirmaría** | Suben los clics en los CTA de tarjeta; menos toques repetidos en la misma zona. |
| **Refutaría** | Difícil de refutar: es corrección de defecto, no experimento. |
| **Riesgo** | Ninguno. Aumenta la altura de página, compensada por H4 y H5. |
| **Prioridad** | **P0** — es un defecto, no una hipótesis. |

---

## H9 · Una tipografía cargada de verdad mejora la percepción de calidad

| | |
|---|---|
| **Problema** | Ninguna webfont se descarga. El sitio se ve en la fuente por defecto de cada sistema. |
| **Cambio** | Cargar dos familias variables con `next/font/google`, subconjunto latino, autoalojadas. Reducir de 11 pesos a 3. |
| **Motivo** | Es lo que separa "página hecha" de "marca". En el benchmark, los referentes premium tienen tipografía con carácter (GD Sherpa, Chronicle Display, CenturyOld); los amateur usan Arial o la fuente del sistema. |
| **Confirmaría** | No es medible directamente en conversión. Se valida cualitativamente: comparación A/B mostrada a 5–10 personas de Carepa. |
| **Refutaría** | Que nadie perciba diferencia en la prueba cualitativa. |
| **Riesgo** | ~45 KB adicionales y riesgo de FOUT. *Mitigación:* `display: swap`, subconjunto, autoalojamiento, presupuesto ≤ 60 KB. |
| **Prioridad** | **P1** |

---

## Orden de ejecución

```
H0  instrumentar                    ── bloquea todo lo demás
 │
 ├── H1  prueba de existencia local  ── P0 · mayor impacto esperado
 ├── H2  fotografía real             ── P0 · ya está construido
 ├── H8  áreas táctiles              ── P0 · defecto
 │
 ├── H9  tipografía                  ── P1
 ├── H3  feedback del funnel         ── P1
 ├── H7  reseñas                     ── P1 · si existe el dato
 ├── H5  servicios por necesidad     ── P1
 ├── H4  reducir CTA                 ── P1 · medir por etapas
 │
 └── H6  transparencia de precio     ── P2 · decisión comercial
```

**Sobre pruebas A/B.** El volumen de tráfico de un consultorio local es casi con certeza
insuficiente para alcanzar significancia estadística en un A/B razonable. **La
recomendación es medir antes y después con ventanas comparables**, aceptando explícitamente
que es evidencia más débil, en lugar de fingir un rigor que el tamaño de muestra no permite.
