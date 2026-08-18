# Recomendación final

---

## 1. La decisión

> ## Dirección recomendada: **A · Luz de Urabá**
> **con la disciplina de sistema de B · Consultorio Claro.**

No es un empate disfrazado. Es una decisión concreta:

- **A aporta la identidad**: paleta cálida de hueso, verde selva y terracota; tipografía
  serif editorial en titulares; fotografía documental con luz natural.
- **B aporta las reglas**: un solo color de acción, un CTA primario por pantalla,
  cero gradientes decorativos, cero sombras de elevación, áreas táctiles de 44 px,
  límites duros de densidad.

A resuelve *"se ve genérica"*. B resuelve *"está desordenada y es difícil de usar en el móvil"*.
Ambos problemas están medidos en [`current-state-audit.md`](current-state-audit.md) y
**ninguna de las dos direcciones por separado resuelve los dos**.

**Se descarta C · Noche Suave.**

---

## 2. Antes de la dirección de arte: el hallazgo que la precede

> **La acción de mayor impacto visual disponible no requiere aprobar nada de este estudio.**

En el snapshot `ddeb2d6`, los commits `06e7656` y `b719662` —fotografía real verificada
de la Dra. Nataly Jiménez y de Vanesa López— existían y estaban terminados, pero aún no
estaban en `origin/main`. Esa producción seguía mostrando ilustraciones vectoriales
genéricas.

Comparar:
- `screenshots/390x844/scroll/home--s04.webp` — producción: avatar ilustrado
- `screenshots/_local-branch/390x844/scroll/home--s04.webp` — rama local: retrato real

Junto a esto hay siete correcciones más de coste casi nulo
([`priority-matrix.md`](priority-matrix.md#quick-wins--impacto-alto-esfuerzo-bajo-riesgo-bajo)),
incluida una errata en el nombre de la marca (`ODONTÓLOGICO` en lugar de `ODONTOLÓGICO`)
que aparece en el header de todas las páginas.

**Estado posterior al snapshot:** P0-1 quedó completado el 18 de agosto de 2026 en el
PR #18 (`159de66`). La recomendación operativa vigente es ejecutar los otros siete quick
wins sin esperar a que se decida la dirección de arte.

---

## 3. Por qué A gana

### 3.1 Ataca la causa raíz, no el síntoma

El diagnóstico no es "faltan efectos". Es que **el sitio no demuestra ser un lugar real
en un sitio real**. A resuelve eso por la vía del color y la luz: la paleta de hueso,
verde selva y terracota es la del Urabá, y **ninguno de los 27 referentes analizados la usa**.

### 3.2 Sale del color saturado del sector

**EVIDENCIA.** El teal, el cian o el azul sanitario aparecen en **9 de los 14** referentes
odontológicos con datos. El actual `#0d6b73` está exactamente en el centro de ese cúmulo.
A lo abandona por completo.

### 3.3 Coincide con lo que hace "premium" a los mejores referentes

Chelsea Dental Clinic —el sitio odontológico mejor calificado del benchmark (8,5/10)—
usa crema y oliva, serif editorial, fotografía del **espacio**, prueba social antes del
catálogo y botones fantasma. **Cero teal. Cero iconos de diente. Cero gradientes.**
A comparte esa lógica sin copiar su maquetación, su paleta ni su identidad.

### 3.4 Es viable con los activos que ya existen

`nataly-natural-portrait.webp` (900×1125) tiene luz cálida y fondo suave: **funciona en la
paleta de A hoy mismo**. En C sería insuficiente.

### 3.5 Sirve a los dos segmentos

El paciente de urgencia necesita claridad; el de estética necesita deseo. A es cálida sin
ser cara, cuidada sin ser intimidante. **C atiende bien al segundo y ahuyenta al primero**,
que es el más frecuente.

---

## 4. Contra qué ganó

### Frente a **B · Consultorio Claro** (7,90 sobre 8,05)

B es más segura, más barata y más rápida. Su disciplina es tan buena que **se adopta
íntegra como reglas de sistema**.

**Pierde porque no responde a la pregunta del encargo.** El objetivo es que el sitio se
sienta *diferenciado, memorable, premium y humano*. B consigue claro, rápido y usable —
pero **memorable, no**. Un sitio impecablemente neutro sigue siendo neutro, y neutro es
justo el diagnóstico actual.

### Frente a **C · Noche Suave** (6,50 sobre 8,05)

C tiene el mayor techo estético y **el mayor riesgo**, por dos motivos independientes:

1. **Depende de fotografía que no existe.** Con el material actual —recortes de redes—
   C **se vería peor que el sitio de hoy**. Un fondo oscuro es implacable con la
   fotografía mediocre.
2. **Puede desincentivar la consulta de urgencia.** Un lenguaje visual de lujo comunica
   precio alto. En un consultorio local donde el freno declarado nº 1 es el coste
   (`beforeBookingItems`), eso trabaja en contra del segmento más frecuente.

Además, negro y oro **ya está saturado en Medellín** (Smile Natural, Be Dharma, Ortoclin).
C sería diferenciadora en Carepa, pero al precio de parecerse a la competencia de la capital.

---

## 5. Qué riesgos tiene A

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| El verde y el terracota se leen "artesanal" en lugar de "editorial" si la fotografía es floja | Media | La disciplina de B (cero gradientes, cero sombras, rejilla estricta) es precisamente lo que impide ese deslizamiento. Priorizar la toma P-3. |
| Coste de dos familias tipográficas (~45 KB) | Baja | Presupuesto de 60 KB, variables y subconjunto latino. Alternativa: serif solo en el H1 del héroe (~22 KB). |
| El serif se percibe menos "clínico" | Baja | El serif se limita a `display`, `h1`, `h2` y citas. **Nunca en interfaz ni en botones.** |
| Requiere sesión fotográfica para llegar al 100 % | Media | Es válida al ~70 % con los activos actuales. La sesión es Fase E, en paralelo. |

---

## 6. Qué perdemos

Hay que decirlo con franqueza:

1. **El teal actual.** Es reconocible para quien ya haya visto el sitio. Se pierde.
2. **Parte de la señal "clínica".** El hueso y el verde selva son más cálidos que el
   azul sanitario. Alguien que espere un aspecto de hospital notará el cambio.
3. **Simplicidad de mantenimiento.** Dos familias tipográficas y una paleta cálida exigen
   más criterio que un teal y la fuente del sistema.
4. **El pico estético de C.** A es cálida y creíble; C podría ser espectacular.
   Se renuncia a ese techo a cambio de no depender de fotografía inexistente.

---

## 7. Qué conseguimos

1. **Diferenciación real y verificada.** Ningún referente del benchmark usa esta paleta.
2. **Salida del cúmulo del sector.** Fuera del teal que comparten 9 de 14 competidores.
3. **Sensación de lugar.** El sitio parecerá de Carepa, no de un catálogo genérico.
4. **Los defectos medidos, corregidos.** Contraste, áreas táctiles, densidad, cromo móvil,
   feedback del funnel — todos entran en el plan.
5. **Lo bueno, conservado.** El `IntentGateway`, el copy de empatía, los mensajes de
   WhatsApp precargados, la honestidad clínica y el SEO técnico salen intactos.
6. **Rendimiento holgado.** ≤ 600 KB frente a los 184 KB actuales, con Core Web Vitals
   dentro de umbral. Hay presupuesto para fotografía real.

---

## 8. Qué NO implementaríamos

| No se hace | Por qué |
|---|---|
| Vídeo de fondo en el héroe | Coste de datos con brecha de conectividad documentada |
| WebGL, Three.js, canvas animado | Sin justificación de negocio |
| Cualquier librería de JS nueva | Presupuesto de JS adicional: **0 KB** |
| Glassmorphism | Los 8 `backdrop-filter` actuales se retiran, no se amplían |
| Más gradientes | Los 68 actuales se reducen a los velos fotográficos |
| Carrusel en el héroe | Oculta contenido y perjudica el LCP |
| Icono de diente como identidad | Saturado en todo el benchmark |
| Modo oscuro | Complejidad sin demanda demostrada |
| Cambios de URL o de slug | El SEO técnico es el activo mejor construido |
| Reescribir el `IntentGateway` | Se reposiciona; no se reescribe |
| Dos direcciones de arte según segmento | Caro de mantener y sin datos que lo justifiquen |
| Inventar reseñas, cifras o casos | Destruye lo que se intenta construir |

---

## 9. Las 16 preguntas del criterio de éxito

| # | Pregunta | Respuesta |
|---|---|---|
| 1 | **Qué falla visualmente hoy** | Imaginería ilustrada genérica con 4 duplicados; ninguna webfont cargada (11 pesos que colapsan a 2–3); sin dirección ni horario ni reseñas; 32 % del viewport móvil en cromo; dorado a 2,56 : 1; 12 áreas táctiles < 24 px. |
| 2 | **Qué funciona y debe conservarse** | El `IntentGateway` de 3 puertas; el copy que desactiva la fricción; los mensajes de WhatsApp precargados y contextuales; la honestidad clínica; `ScrollReveal`; todo el SEO técnico. |
| 3 | **Qué hace la competencia** | Local: foto real de sus profesionales y cifras duras en el fold. Colombia/LatAm: muros de 13 000–14 500 px. Internacional premium: paleta cálida no clínica, tipografía con carácter, fotografía del espacio, prueba social antes del catálogo. |
| 4 | **Qué está saturado en odontología** | Teal/cian (9/14), "Agenda tu cita" (11/14), burbuja verde de WhatsApp (7/9 en Colombia), negro y oro (3/7 en Medellín), muros de 10 000+ px, blobs de plantilla, sonrisa de stock, icono de diente. |
| 5 | **Cómo diferenciarnos** | Paleta cálida del trópico (nadie), entrada por necesidad en lenguaje de paciente (nadie), reconocer el miedo (nadie), explicar el precio con honestidad (2/27), fotografía documental real (~2/27). **Cuatro de las cinco ya están escritas en el copy actual.** |
| 6 | **Qué estilo adoptar** | **A · Luz de Urabá** con la disciplina de sistema de **B**. |
| 7 | **Cómo debería verse móvil** | Header de 56 px; héroe con foto y titular; `TrustSignal` con ciudad, horario y calificación; primera puerta de intención visible sin scroll; un CTA sticky. Cromo ≤ 15 %. |
| 8 | **Cómo debería verse escritorio** | Dos columnas 55/45, foto a sangre por la derecha, columna de respiración a la izquierda, tres puertas en fila sin scroll, máximo 1140 px de contenedor. |
| 9 | **Cómo debería moverse** | Nada por encima de 400 ms, desplazamiento máximo de 8 px, solo `transform` y `opacity`, cero animaciones infinitas. El único motion obligatorio es el feedback del funnel. |
| 10 | **Cómo usar las fotografías** | `nataly-natural-portrait.webp` (900×1125) para héroe y doctora; el resto solo en tarjetas y avatares; retirar toda ilustración; producir P-1 a P-6 en media jornada; las tarjetas de servicio **sin imagen**. |
| 11 | **Cómo mejorar la confianza** | Dirección, horario y enlace al GBP; retrato real en el fold; 3 reseñas reales; cifras verificables; registro profesional; bioseguridad concreta; corregir la errata del nombre. |
| 12 | **Cómo mejorar la conversión** | Instrumentar primero (H0). Después: prueba de existencia local (H1), fotografía real (H2), feedback del funnel en pantalla (H3), un CTA primario por pantalla (H4), servicios por necesidad (H5), reseñas junto al CTA (H7), áreas táctiles (H8). |
| 13 | **Qué componentes cambiar** | Reemplazar `Navbar`, `StickyCTA`, `TreatmentCard`, `Chip`. Crear `TrustSignal`, `LocationBlock`, `ReviewCard`, `BeforeAfter`. Evolucionar `Button`, `Card`, `DoctorCard`, `JourneyOption`, `Badge`. Retirar `WhatsAppFloatingButton` en móvil. |
| 14 | **Qué NO cambiar** | URLs, slugs, canonical, sitemap, robots, el texto SEO de `servicePages.ts`, la lógica de `conversionJourneys.ts`, los mensajes de WhatsApp, el copy de honestidad clínica, `SectionHeading`, la degradación de `ScrollReveal`. |
| 15 | **En qué orden implementar** | Fase 0 datos → A fundaciones y quick wins → B héroe y home → C funnel → D páginas internas → G QA → H experimentación. E fotografía en paralelo; F motion tras C. |
| 16 | **Cuánto riesgo tiene cada cambio** | Ver [`priority-matrix.md`](priority-matrix.md). Los cinco riesgos principales: que no se pueda publicar la dirección; que la fotografía existente no aguante tamaño de héroe; que reducir CTA baje los clics; que reorganizar `/servicios` dañe el SEO; que el rediseño se quede a medias. |

---

## 10. Qué se necesita para aprobar

Una sola decisión:

> **¿Se aprueba A · Luz de Urabá como dirección visual?**

Y nueve datos ([Fase 0 del roadmap](implementation-roadmap.md#fase-0--desbloqueo-antes-de-cualquier-diseño)),
de los cuales tres son bloqueantes:

1. **Dirección exacta** — o el motivo para no publicarla.
2. **Horario real**.
3. **URL del Google Business Profile**.

**Y una acción que no requiere aprobación de nadie:** desplegar la fotografía real que
ya está commiteada y corregir la errata del nombre de la marca.

---

## 11. Confirmación de alcance

Este estudio **no modificó producción**. La rama
`research/design-direction-study-v1` parte de `origin/main` y añade exclusivamente
`docs/design-study/**`.

```bash
git diff --stat origin/main...research/design-direction-study-v1 -- ':!docs/design-study'
```

Debe devolver salida vacía. No se hizo merge. El PR es únicamente para revisar el estudio.
