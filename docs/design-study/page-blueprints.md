# Blueprints página por página

Incluye la Fase 22 (home de segundo nivel) y la Fase 20 (preservación de SEO).
Todos los blueprints son **mobile-first a 390 px**; el escritorio se describe como
adaptación, no al revés.

---

## Restricciones SEO innegociables

El SEO técnico es el activo mejor construido del proyecto
([`current-state-audit.md` §7](current-state-audit.md#7-seo--qué-no-tocar-fase-20)).
El rediseño **no puede** tocar:

| Elemento | Regla |
|---|---|
| **URLs** | Ninguna ruta cambia. Ni `/servicios/[slug]`, ni `/c/[slug]`, ni `/consultorio`, ni `/equipo`. |
| **Canonical** | Se conserva la generación actual. |
| **`sitemap.xml` / `robots.txt`** | Sin cambios de lógica. |
| **JSON-LD** | Solo se **añade** (`LocalBusiness`, `FAQPage`, `AggregateRating`). Nunca se retira `Dentist`. |
| **Un `<h1>` por página** | Se mantiene. Sin saltos de nivel de encabezado. |
| **Texto SEO de `servicePages.ts`** | **No se borra.** Puede reorganizarse o plegarse con `<details>`, pero permanece en el DOM. |
| **Enlazado interno** | 19–49 enlaces por ruta. No reducir por debajo de ~15. |
| **`lang="es-CO"`** | Sin cambios. |
| **`<title>` y `meta description`** | Solo cambian si mejoran, nunca como efecto colateral. |

### Cambios seguros y cambios de riesgo

| Seguro | De riesgo — requiere validación |
|---|---|
| Cambiar color, tipografía, espacio, radio, sombra | Cambiar el **texto** de un `h1` o `h2` |
| Reordenar bloques **dentro** de una página | Mover contenido entre páginas |
| Plegar contenido con `<details>` (permanece en el DOM) | Renderizar contenido solo en cliente tras interacción |
| Sustituir imágenes | Eliminar enlaces internos |
| Añadir tipos de JSON-LD | Cambiar slugs o rutas |
| Añadir un `TrustSignal` | Reescribir descripciones de servicio |

**Regla de oro.** Si un cambio de diseño obliga a borrar texto que hoy está indexado, **no
es un cambio de diseño**: es un cambio de contenido y necesita su propia decisión.

---

## HOME

### Objetivo
Que una persona que no sabe qué necesita entienda en 10 segundos que este consultorio
existe, dónde queda, quién atiende, y cómo preguntar sin compromiso.

### Emoción
Entrada: *"esto se ve diferente"* → Salida: *"puedo escribir sin que me presionen"*.

### Home actual frente a home propuesta

| # | **ACTUAL** | **PROPUESTA** | Justificación |
|---|---|---|---|
| 1 | Hero con ilustración | **Hero con fotografía real** + `TrustSignal` | D-01, D-03. El fold debe probar existencia |
| 2 | `CampaignEntry` (condicional) | Igual, condicional | Funciona |
| 3 | `IntentGateway` (3 opciones) | **`IntentGateway` subido al fold** | Es el activo estratégico; hoy queda fuera de pantalla |
| 4 | `ConversionJourney` (sección aparte) | **Fusionado: expande en el sitio** | F-1. El feedback ocurre fuera de pantalla |
| 5 | `FeaturedTreatments` (4 con imagen) | **3 tarjetas tipográficas** | Imágenes duplicadas; ≤ 5 opciones |
| 6 | `CompactDoctorTrust` | **`DoctorIntro`** con retrato 4:5 y cita | Human trust; el retrato existe |
| 7 | `GoogleTrustPreview` (sin reseñas) | **`ReviewStrip`** con 3 reseñas reales | ST-1. Bloqueado por `FALTA EL DATO` |
| 8 | — | **`LocationBlock`** nuevo: dirección, horario, mapa | LT-1/2/3. **La brecha más grave** |
| 9 | `Emergency` | Igual, con `--c-urgent` | Funciona |
| 10 | `RegionWhatsApp` | Igual | Funciona |
| 11 | `FinalWhatsAppCTA` | Igual, un solo botón | Funciona |
| — | `MobileStickyCTA` (2 botones) | **1 botón** + compensación correcta | D-05 |
| — | `WhatsAppFloatingButton` | **Retirado en móvil** | Duplica el sticky |

### Respuesta a la pregunta de la Fase 22

> *"Si hoy tuviéramos toda la información y el conocimiento acumulado, ¿cómo diseñaríamos
> esta home desde cero sin perder lo que funciona?"*

**La estructura actual es correcta en un 70 %.** No hay que rehacerla. Los tres cambios
estructurales reales son:

1. **Subir el `IntentGateway` al fold** y fusionarlo con `ConversionJourney`, para que la
   decisión y su consecuencia ocurran en la misma pantalla.
2. **Insertar `LocationBlock`**, que hoy simplemente no existe.
3. **Bajar el catálogo de tratamientos** por debajo de la prueba de existencia. Hoy el sitio
   habla de lo que vende antes de demostrar que existe.

Todo lo demás es sustitución de imaginería, tipografía y densidad — no de arquitectura.

### Fold móvil (390 px) — presupuesto

| Elemento | Altura |
|---|---|
| Header compacto (marca corta, 1 línea) | 56 px |
| Foto del héroe con titular superpuesto | 320 px |
| `TrustSignal` (2 filas de chips) | 72 px |
| Primera puerta de intención, visible completa | 96 px |
| Asomo de la segunda puerta | 30 px |
| **Total** | **574 px de 844** |

El resto queda para el `StickyCTA` (56 px) y margen. **El cromo baja del 32 % al 13 %.**

### Jerarquía visual objetivo

1. Fotografía + titular · 2. Chips de confianza · 3. Las tres puertas ·
4. CTA sticky · 5. Navegación.

### Escritorio
Héroe en dos columnas 55/45: texto a la izquierda, fotografía a sangre a la derecha.
`TrustSignal` en fila bajo el texto. Las tres puertas en fila de 3 columnas, visibles sin scroll.

---

## CONSULTORIO

### Objetivo
Demostrar que el lugar físico existe y que ir allí no da miedo.

### Problema actual
**Cero imágenes en 4,3 pantallas de móvil.** Una página sobre un lugar, sin el lugar.

### Orden de bloques

1. **Hero:** foto de la fachada, H1, y de inmediato dirección + horario + mapa.
2. **`LocationBlock` completo:** dirección exacta, cómo llegar en lenguaje local, horario
   por día, teléfono, enlace al GBP.
3. **Galería del espacio:** 3–4 fotos (fachada, recepción, sala, consultorio). `FALTA EL DATO`.
4. **Primera visita:** `firstVisitSteps` — ya existe y es bueno.
5. **Bioseguridad:** tres hechos concretos, no adjetivos. `FALTA EL DATO`.
6. **`BeforeBooking`:** las cuatro objeciones. Ya existe y es excelente.
7. **CTA de WhatsApp.**

**Motion:** ninguno más allá del reveal. **Móvil:** mapa como imagen estática enlazada,
nunca iframe (coste y privacidad).

---

## EQUIPO

### Objetivo
Poner cara a quien atiende.

### Problema actual
2 retratos reales y **2 clones de la misma ilustración**. La duplicación señala el relleno.

### Orden de bloques

1. **Hero:** foto grupal (`equipo-preview.webp` hoy; P-6 cuando exista) + H1.
2. **Tarjetas de equipo:** rejilla 1 columna en móvil, 2 en escritorio. Retrato 4:5,
   nombre en `display`, rol en versalitas, dos líneas de descripción.
3. **Perfil ampliado de Nataly:** retrato grande, su cita, formación y registro. `FALTA EL DATO`.
4. **CTA.**

### Decisión sobre las fotos que faltan
**No mostrar la misma ilustración dos veces.** Opciones, en orden de preferencia:

1. Producir los dos retratos (P-6). **Preferido.**
2. Tarjeta tipográfica con iniciales, rol y una nota honesta: *"retrato profesional en
   producción"*. La honestidad construye más confianza que un relleno detectable.
3. Mostrar solo a las dos personas con foto real y describir a las otras dos en texto,
   dentro del bloque de "equipo de apoyo especializado".

---

## SERVICIOS (índice)

### Objetivo
Que alguien encuentre lo suyo en menos de 15 segundos.

### Problema actual — el peor del sitio
**9 782 px (11,6 pantallas), 42 enlaces a WhatsApp, 0 imágenes.**

### Orden de bloques

1. **Hero corto:** H1 + una línea. Sin imagen.
2. **Tres familias, no doce tarjetas:**
   - **Me duele algo** — urgencias, endodoncia, cordales
   - **Quiero verme mejor** — diseño de sonrisa, blanqueamiento, resinas, armonización
   - **Quiero cuidarme / recuperar** — limpieza, ortodoncia, prótesis, implantes, familiar
3. Dentro de cada familia: **lista**, no tarjetas. Título + una línea + flecha.
   Área táctil de fila completa, **56 px de alto**.
4. **Un solo CTA** al final de cada familia. **De 42 enlaces a 3.**
5. FAQ transversal.
6. CTA final.

**Objetivo de altura: ≤ 6 pantallas (de 11,6).**

**Riesgo SEO.** Esta página concentra mucho texto indexable. Agrupar y convertir tarjetas
en lista **no borra texto**, solo lo reordena. Antes de tocarla hay que exportar el
contenido actual y verificar que ninguna cadena desaparece.

---

## SERVICE DETAIL (`/servicios/[slug]`)

### Objetivo
Explicar un tratamiento sin abrumar y sin prometer resultados.

### Problema actual
6,5 pantallas, 1 imagen (a menudo compartida con otro servicio), 8 enlaces a WhatsApp.

### Orden de bloques

1. **Hero:** título del servicio en lenguaje de resultado + una línea + **un** CTA.
2. **Qué es** — 2 párrafos máximo.
3. **Para quién es / para quién no** — dos columnas. **Diferenciador.** Decir para quién
   *no* es construye más credibilidad que cualquier promesa.
4. **Cómo es el proceso** — 3–4 pasos.
5. **Qué determina el precio** — sin cifras, explicando los factores. Responde al freno
   nº 1 sin comprometer al consultorio.
6. **FAQ** del servicio, plegada, con `FAQPage` en JSON-LD.
7. **Servicios relacionados** — máximo 3.
8. **CTA final.**

**Imagen:** ninguna hasta que exista fotografía propia del servicio.
Antes ninguna que una imagen que también ilustra otro tratamiento.

---

## CAMPAIGN ENTRY (`/c/[slug]`)

### Objetivo
Continuidad desde el anuncio, la historia o el QR, sin repetir la home entera.

### Problema actual
`/c/uraba` mide **8,3 pantallas y 6 983 px**. Una landing de campaña más larga que la home
es una landing que no cierra.

### Orden de bloques

1. **Hero de campaña:** el mensaje del anuncio, literal. Continuidad de expectativa.
2. **`TrustSignal`.**
3. **La puerta de intención relevante para esa campaña, ya preseleccionada** — no las tres.
4. **Una prueba** (una reseña, o una cifra).
5. **CTA de WhatsApp** con mensaje precargado de campaña. Ya funciona bien.
6. Enlace discreto a la home.

**Objetivo: ≤ 3 pantallas.** Una landing de campaña es una decisión, no un catálogo.

**Nota.** El sistema de campañas (`campaigns.ts`, UTM, mensajes precargados) está bien
construido. El problema es la longitud de la página, no la lógica.

---

## Resumen de altura objetivo en móvil

| Página | Hoy | Objetivo | Reducción |
|---|---:|---:|---:|
| `/servicios` | 11,6 pantallas | **6** | −48 % |
| `/c/uraba` | 8,3 | **3** | −64 % |
| `/` | 7,2 | **6** | −17 % |
| `/servicios/*` | 6,5 | **5** | −23 % |
| `/equipo` | 4,5 | 4,5 | = |
| `/consultorio` | 4,3 | 5 | **+16 %** (entra fotografía y ubicación) |

`/consultorio` es la única que **debe crecer**: hoy está vacía de lo que la justifica.
