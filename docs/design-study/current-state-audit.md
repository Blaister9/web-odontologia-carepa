# Auditoría del estado actual

**Objeto:** <https://www.dranatalyjimenez.com> · commit `ddeb2d6` · capturado 2026-08-17
**Método:** Chrome headless, 6 viewports, 10 rutas. Ver [`README.md`](README.md#método-y-honestidad-de-la-evidencia).

---

## 0. Veredicto en una página

El sitio **funciona**: navega, carga rápido, tiene SEO técnico correcto, un funnel por
intención que es genuinamente una buena idea, y una paleta base que no es fea.

El sitio **no convence**, y la causa no es "faltan efectos". Son cuatro fallos de
dirección de arte, en orden de daño:

| # | Fallo | Severidad | Evidencia |
|---|---|---|---|
| 1 | **Toda la imaginería es ilustración vectorial genérica.** El héroe, las 12 tarjetas de servicio y 2 de 4 retratos del equipo son clip-art. Hay retratos reales sin desplegar. | Crítica | §2.1 |
| 2 | **No se carga ninguna tipografía.** El sitio se renderiza en la fuente por defecto del sistema en todos los dispositivos. No existe identidad tipográfica. | Crítica | §2.2 |
| 3 | **No hay dirección exacta, ni horario, ni una sola reseña.** El negocio no demuestra que existe físicamente. | Crítica | §3.1 |
| 4 | **El móvil gasta ~32 % del viewport en cromo permanente** y la barra CTA tapa contenido accionable. | Alta | §4.1 |

**INFERENCIA.** Los cuatro comparten una raíz: el sitio se construyó para ser *correcto*
antes que para ser *creíble*. Corrección sin pruebas de existencia produce exactamente
la sensación de plantilla que se quiere eliminar.

---

## 1. Primera impresión

Test conceptual aplicado sobre `screenshots/390x844/home--fold.webp` y
`screenshots/1440x900/home--fold.webp`.

### 5-second test

| Pregunta | Respuesta honesta |
|---|---|
| ¿Qué se entiende en 3 s? | "Algo de odontología. Hay que elegir una necesidad." |
| ¿Qué se entiende en 5 s? | Que el sitio quiere que elijas antes de escribir por WhatsApp. **No** se entiende dónde queda, quién atiende, ni por qué esta y no otra. |
| ¿Qué emoción transmite? | Neutralidad ordenada. Ni confianza ni desconfianza: indiferencia. |
| ¿Parece odontología premium? | No. Parece un servicio digital genérico con paleta clínica. |
| ¿Parece plantilla? | **Sí.** El desencadenante es la ilustración del héroe, no la maquetación. |
| ¿Parece un consultorio real? | **No.** No hay ni una persona, ni un espacio, ni una dirección. |
| ¿Parece negocio pequeño o clínica corporativa? | Ninguno de los dos. Parece un *producto*, no un consultorio. |
| ¿Se siente local o genérica? | Genérica. "Carepa" aparece como palabra, nunca como lugar. |
| ¿Hay elementos memorables? | Uno solo, y es verbal: *"No necesitas conocer el tratamiento."* |

**OBSERVACIÓN.** El activo más diferenciador del sitio hoy es una frase, no una imagen.
Es el único elemento que ningún competidor del benchmark dice.

### Squint test (entornar los ojos)

Al desenfocar el fold de escritorio quedan: una mancha de texto oscuro a la izquierda y
un rectángulo pálido a la derecha. **El rectángulo pálido no tiene jerarquía interna:**
la ilustración es tan clara y de tan bajo contraste que desaparece. El héroe se lee como
media composición.

**OBSERVACIÓN.** En el fold móvil, tras desenfocar, el elemento de mayor contraste de
toda la pantalla es la **barra CTA oscura inferior**, no el titular. La jerarquía visual
real está invertida respecto de la jerarquía de contenido.

### Visual hierarchy test

Orden real de captación en escritorio: 1) nombre de marca en versalitas · 2) H1 ·
3) botón "Agendar cita" del header · 4) burbuja verde de WhatsApp · 5) ilustración.
El CTA principal previsto —`Elegir mi necesidad`— aparece **sexto**, porque está
maquetado como enlace de texto subrayado, no como botón.

---

## 2. Inventario visual (Fase 2)

Extraído de `src/styles/globals.css` (3 998 líneas · 81 KB · hoja única).

### 2.1 Fotografía e imaginería — el fallo nº 1

| Zona | Qué se sirve hoy | Veredicto |
|---|---|---|
| Héroe home | `consultorio-odontologico-carepa.png` — ilustración plana de un sillón dental | Sustituir |
| 12 tarjetas de servicio | 8 PNG ilustrados, **4 reutilizados en 2 servicios cada uno** | Sustituir |
| Avatar de la doctora | Ilustración de figura con bata y diente | Sustituir (ya existe el real) |
| Equipo `/equipo` | 2 retratos reales + **2 clones de la misma ilustración** | Sustituir |
| `/consultorio` | **0 imágenes** | Producir |
| `/servicios` | **0 imágenes** | Producir |

**EVIDENCIA (código).** `src/data/site.ts` asigna la misma imagen a pares de servicios:
`odontologia-familiar.png` para endodoncia; `protesis-dentales.png` para implantología;
`diseno-sonrisa.png` para armonización orofacial; `urgencias-odontologicas.png` para cordales.

**OBSERVACIÓN (`screenshots/390x844/scroll/home--s03.webp`).** Las cuatro tarjetas
destacadas son el **mismo contorno de diente** sobre gradientes de distinto color.
Puestas en columna, la repetición es el rasgo más visible de la página.

**OBSERVACIÓN.** Una página llamada `/consultorio`, cuyo propósito es demostrar que el
consultorio existe, no contiene ninguna fotografía del consultorio.

### 2.2 Tipografía — el fallo nº 2

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system,
             BlinkMacSystemFont, "Segoe UI", sans-serif;
```

**EVIDENCIA.** No existe `next/font`, ni `@font-face`, ni `<link>` a Google Fonts, ni
`preconnect` en todo el repositorio. Inter **nunca se descarga**.

**Consecuencia medida:** el `font-family` computado en producción devuelve la cadena
completa, y el navegador resuelve al primer disponible: Segoe UI en Windows, Roboto en
Android, San Francisco en iOS. **La marca se ve distinta en cada dispositivo y en ninguno
se ve intencional.**

Agrava el problema el uso de pesos de eje variable sobre fuentes no variables:

| Peso declarado | Veces | Qué renderiza realmente |
|---|---|---|
| 850 | 22 | 700 u 800 (redondeo) |
| 800 | 8 | 800 |
| 820 | 6 | 800 |
| 760 / 780 / 720 / 740 | 16 | 700 |

**INFERENCIA.** La escala tipográfica está diseñada para una fuente variable que no se
carga. Los 11 pesos distintos colapsan a 2 o 3 en pantalla. El resultado es que
**titulares, sub-titulares y etiquetas tienen el mismo peso óptico**, lo que aplana la
jerarquía y produce la sensación de "documento" más que de "marca".

Además hay **un solo `clamp()`** en 3 998 líneas: la tipografía no escala de forma fluida.
El H1 mide 36 px a 390 px de ancho (2 líneas) y 64 px a 1440 px, con saltos bruscos.

### 2.3 Color

| Token | Valor | Uso |
|---|---|---|
| `--color-ink` | `#153443` | Texto principal |
| `--color-ink-soft` | `#48616d` | Texto secundario |
| `--color-muted` | `#6f838c` | Texto terciario |
| `--color-teal` | `#0d6b73` | Marca / acento |
| `--color-gold` | `#c79b45` | Acento secundario |
| `--color-ivory` | `#fbf8f1` | Fondo |
| `--color-danger` | `#9a4d3c` | Urgencias |

**OBSERVACIÓN.** El sistema tokenizado son 12 variables — razonable. Pero el CSS contiene
**35 hex distintos y 68 gradientes** fuera del sistema. La deriva es de ~3x sobre los tokens.

**OBSERVACIÓN.** El teal `#0d6b73` con el ivory `#fbf8f1` es una combinación
**correcta pero exactamente la esperada** en odontología. Ver
[`market-benchmark.md`](market-benchmark.md#5-qué-está-saturado): el teal/cian sanitario
aparece en 9 de los 14 referentes odontológicos con datos.

### 2.4 Forma, sombra, espaciado

| Dimensión | Estado |
|---|---|
| Radios | `--radius-card: 8px` mas **13 valores ad-hoc** (999px, 50 %, 18, 14, 24, 10, 12, 20, 22 px y cinco radios asimétricos tipo `280px 0 0`). Sin escala. |
| Sombras | 4 tokens mas **21 sombras literales** fuera de token. |
| Gradientes | 65 `linear-gradient` mas 3 `radial-gradient`. |
| `backdrop-filter` | 8 usos (header, sticky CTA, paneles). |
| Espaciado | Sin escala. Paddings de sección: 84, 88, 98, 86, 78, 72, 62, 58, 44 px — nueve valores no derivados de una base. |
| Breakpoints | **430, 560, 720, 760, 768, 980 px** — seis puntos de corte, dos de ellos (760/768) a 8 px de distancia. |

**INFERENCIA.** Esta dispersión es la firma técnica de la "sensación de plantilla".
Ningún elemento individual está mal; lo que falta es que **repitan la misma decisión**.
Un sistema se percibe como marca cuando el ojo detecta la regla; aquí no hay regla que detectar.

### 2.5 Qué ya es fuerte y debe conservarse

**No todo debe cambiar.** Estos activos son buenos y rehacerlos sería destruir valor:

1. **El `IntentGateway` de 3 opciones.** Reducir a tres caminos (dolor / estética /
   cuidado) es una decisión de producto correcta y **ningún competidor del benchmark
   la tiene**. Es el activo estratégico del sitio.
2. **El copy de desactivación de fricción.** *"No necesitas conocer el tratamiento"*,
   *"Puedes escribir aunque no sepas el tratamiento"*, *"Solo quiero preguntar primero"*.
   Es empatía real y es diferenciador.
3. **Los mensajes de WhatsApp precargados y contextuales.** El usuario nunca se enfrenta
   a un chat vacío. Es una decisión de UX de conversión que la mayoría del mercado no toma.
4. **La honestidad clínica.** "La valoración define el camino", ausencia de promesas de
   resultado. Es correcto ética y legalmente, y además construye confianza.
5. **`ScrollReveal`.** Degrada bien sin JS y respeta `prefers-reduced-motion`. Bien hecho.
6. **La infraestructura SEO.** Canonical, JSON-LD `Dentist`, sitemap, robots, `lang="es-CO"`,
   un solo `<h1>` por página, cero saltos de nivel de encabezado en las 6 rutas medidas.

---

## 3. Arquitectura de confianza — el fallo nº 3

### 3.1 Lo que el sitio no puede demostrar

**EVIDENCIA (`src/data/site.ts`).**

```ts
address:  "Confirma la dirección exacta al agendar tu cita."
schedule: { weekdays: "Agenda sujeta a disponibilidad.", ... }
mapUrl:   "https://www.google.com/maps/search/?api=1&query=Carepa%2C%20Antioquia%2C%20Colombia"
```

| Señal de confianza | Estado |
|---|---|
| Dirección física | **Ausente.** Sustituida por una promesa de revelarla después. |
| Horario | **Ausente.** "Sujeta a disponibilidad" en los tres campos. |
| Enlace a Google Business Profile | **Ausente.** El mapa apunta a una búsqueda genérica del municipio. |
| Reseñas | **Cero**, en todo el sitio. |
| Casos antes/después | **Cero.** |
| Registro profesional / tarjeta | **Ausente.** |
| Instagram / Facebook | Campos definidos en el tipo pero **sin valor**. |

**INFERENCIA — y es la más importante del estudio.** Para alguien de Carepa que llega
desde Google Maps o una historia de Instagram, la pregunta de los primeros 5 segundos no
es "¿es bonita esta web?" sino **"¿esto existe de verdad y dónde queda?"**. El sitio
responde explícitamente que no lo va a decir todavía. Ninguna dirección de arte puede
compensar eso.

**OBSERVACIÓN.** Los dos competidores directos de la región resuelven justo esto:
Ortoclínicas de Urabá abre con `20.000+ pacientes · 18+ años · 98 % satisfacción`, y
VitalDent Apartadó pone una foto real de sus dos odontólogos como héroe.
Ver `screenshots/benchmark/desktop/ortoclinicas-uraba.webp` y `vitaldent-apartado.webp`.

### 3.2 Un detalle que socava todo lo anterior

**OBSERVACIÓN.** El nombre de marca está mal escrito en el propio dato de configuración:

```ts
clinicName: "CONSULTORIO ODONTÓLOGICO DRA NATALY JIMÉNEZ"
//                        ^ debería ser ODONTOLÓGICO
```

Aparece en el header de todas las páginas, en el footer y en el JSON-LD. En versalitas y
a tres líneas en móvil, es lo primero que se lee del sitio.
**Coste de arreglarlo: una línea. Coste de no arreglarlo: la primera impresión.**

---

## 4. Móvil (Fase 15) — el fallo nº 4

### 4.1 Presupuesto de viewport a 390x844

| Elemento | Altura | % del viewport |
|---|---|---|
| Header fijo (marca en versalitas a 3 líneas) | ~160 px | 19 % |
| Barra CTA fija inferior | ~110 px con margen | 13 % |
| **Cromo permanente** | **~270 px** | **32 %** |
| Contenido útil | ~574 px | 68 % |

**OBSERVACIÓN.** El nombre completo en versalitas ocupa tres líneas del header en móvil.
Es el elemento más grande del sitio y no comunica nada que el usuario necesite.

### 4.2 Solapamiento real de contenido

**OBSERVACIÓN (`screenshots/390x844/scroll/home--s03.webp` y `--s04.png`).**
La barra CTA fija **tapa contenido accionable**: los enlaces "Ver guía completa" y
"Consultar urgencia" de la última tarjeta visible quedan parcialmente cubiertos, y
"Ver equipo profesional" queda cortado a media palabra.

Existe `body { padding-bottom: 74px }` bajo `max-width: 760px`, pero la barra mide
~70 px de alto **más 12 px de `bottom`**, y el borde y la sombra añaden área visual.
La compensación es insuficiente.

### 4.3 Áreas táctiles

**EVIDENCIA (medición automatizada, home @390 px).**

| Control | Tamaño medido | WCAG 2.2 SC 2.5.8 (AA, 24x24 px) |
|---|---|---|
| "Consultar limpieza" | 131 x **15** px | **Falla** |
| "Consultar blanqueamiento" | 187 x **15** px | **Falla** |
| "Consultar diseño" | 118 x **15** px | **Falla** |
| "Consultar urgencia" | 133 x **15** px | **Falla** |
| Enlaces de servicio en footer (x8) | ~110 x **21** px | **Falla** |
| Botones de la barra CTA | ancho x **42** px | Pasa AA; bajo la guía de 44/48 px |

**12 controles bajo el mínimo en la home. 68 controles bajo 44 px en `/servicios`.**

Fuente: [WCAG 2.2 — Understanding SC 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html),
consultado 2026-08-17. Nivel AA, mínimo **24 x 24 px CSS**.

### 4.4 Profundidad de scroll

**EVIDENCIA (`_capture-log.json`).**

| Ruta | @390 px | Pantallas | Enlaces a WhatsApp |
|---|---|---|---|
| `/servicios` | 9 782 px | **11,6** | **42** |
| `/c/uraba` | 6 983 px | 8,3 | 14 |
| `/` | 6 070 px | 7,2 | 14 |
| `/servicios/*` | ~5 500 px | 6,5 | 8 |
| `/equipo` | 3 805 px | 4,5 | 7 |
| `/consultorio` | 3 593 px | 4,3 | 8 |

**OBSERVACIÓN.** `/servicios` son **11,6 pantallas de texto sin una sola imagen**, con
**42 enlaces a WhatsApp**. Cuando cada bloque grita, ninguno se oye. Es el peor
problema de densidad del sitio.

---

## 5. Accesibilidad (Fase 18)

**EVIDENCIA.** Contraste calculado sobre color computado. Se excluyen los falsos positivos
del script (texto blanco sobre paneles con gradiente, que el detector lee como blanco
sobre blanco). Los siguientes son fallos **reales y sistémicos**:

| Combinación | Ratio | Requerido | Dónde |
|---|---|---|---|
| `--color-gold #c79b45` sobre blanco | **2,56 : 1** | 4,5 : 1 | Eyebrows: "DRA. NATALY JIMÉNEZ", "6 SERVICIOS" (12,5–13 px) |
| `--color-muted #6f838c` sobre ivory | **3,73 : 1** | 4,5 : 1 | Bajada del header, texto terciario (12,5 px) |
| Blanco sobre WhatsApp `#128c7e` | **4,14 : 1** | 4,5 : 1 | Botones flotante y sticky |
| Flecha gold sobre blanco | **2,56 : 1** | 3 : 1 (no textual) | Tarjetas destacadas |

**El dorado como color de texto es inutilizable a los tamaños en que se usa.**
Es un fallo de sistema, no puntual: afecta a todas las etiquetas de sección del sitio.

Otros hallazgos:

- **No hay enlace de salto** al contenido principal en ninguna ruta.
- `main` y `nav` correctos; `lang="es-CO"` correcto; un `<h1>` por página; sin saltos de encabezado.
- Sin `alt` faltantes; 4 `alt=""` decorativos correctamente marcados en la home.
- `prefers-reduced-motion` respetado globalmente. **Bien hecho.**

---

## 6. Rendimiento (Fase 19)

**EVIDENCIA (home @390 px, red sin throttling).**

| Métrica | Valor |
|---|---|
| Transferencia total | **184 KB** |
| JavaScript | 146 KB |
| Imágenes | 17 KB |
| CSS y otros | 21 KB |
| Peticiones | 18 |
| DOMContentLoaded | 836 ms |

Rutas internas: 6–59 KB (navegación cliente de Next.js).

**OBSERVACIÓN — y es una buena noticia contraintuitiva.** El sitio es *demasiado ligero*.
17 KB de imágenes en la home significan que no hay fotografía que pesar. **Existe
presupuesto disponible para invertir en imaginería real** sin acercarse siquiera a los
umbrales de Core Web Vitals.

Umbrales de referencia: LCP <= 2,5 s · INP <= 200 ms · CLS <= 0,1, evaluados al
percentil 75 — [web.dev/articles/vitals](https://web.dev/articles/vitals),
consultado 2026-08-17.

**RECOMENDACIÓN.** El presupuesto de rendimiento no es una restricción para este
rediseño; es un permiso. Ver [`design-system-proposal.md`](design-system-proposal.md#12-presupuesto-de-rendimiento).

---

## 7. SEO — qué NO tocar (Fase 20)

**EVIDENCIA (6 rutas medidas).** Todo correcto:

| Comprobación | Resultado |
|---|---|
| `<title>` | 51–60 caracteres en las 6 rutas. Correcto. |
| `meta description` | Presente y específica por ruta. |
| `canonical` | Absoluto y correcto en las 6. |
| JSON-LD | `Dentist` en home. |
| `h1` | Exactamente 1 por ruta. |
| Saltos de encabezado | **Ninguno.** |
| Enlazado interno | 19–49 enlaces por ruta. Sólido. |
| `lang` | `es-CO`. |

**RECOMENDACIÓN.** Este es el activo mejor construido del proyecto y el rediseño **no
debe tocarlo**. Restricciones detalladas en [`page-blueprints.md`](page-blueprints.md#restricciones-seo-innegociables).

**Oportunidad no explotada:** el JSON-LD solo declara `Dentist`. Faltan `LocalBusiness`
con `address` y `openingHours` (imposible hoy, porque **no existe el dato**), `FAQPage`
en las páginas de servicio que ya tienen FAQ, y `AggregateRating` cuando haya reseñas.

---

## 8. Auditoría del funnel (Fase 7)

Recorrido: Hero → IntentGateway → ConversionJourney → FeaturedTreatments →
CompactDoctorTrust → GoogleTrustPreview → Emergency → RegionWhatsApp → FinalWhatsAppCTA.

| Pregunta | Respuesta |
|---|---|
| ¿Demasiadas decisiones? | No en el paso 1 (3 opciones, correcto). Sí en el conjunto: **14 enlaces a WhatsApp en la home**. |
| ¿Se entiende inmediatamente? | El paso 1 sí. El paso 2 exige un scroll a ciegas. |
| ¿Demasiados CTA? | Sí. Header, héroe, 3 intents, 8 en tarjetas, urgencia, región, final, sticky (x2) y flotante. |
| ¿La interacción sorprende? | No. El panel aparece **debajo del fold**, así que en móvil el usuario toca y aparentemente no pasa nada. |
| ¿Hay feedback suficiente? | Hay `aria-live="polite"` y estado activo. Correcto técnicamente, **invisible en móvil** por posición. |
| ¿Parece un formulario? | Sí. Las cápsulas de beneficio del héroe usan un punto relleno que se lee como radio button. |
| ¿El usuario siente avance? | Parcialmente. Dice "Paso 2 de 2" pero **no hay indicador en el paso 1**. |
| ¿Se siente personalizado? | Sí, y es lo mejor del funnel: la barra sticky cambia de etiqueta y de mensaje según la intención elegida. |
| ¿Qué podría ser memorable? | La transición intención → orientación, **si ocurriera en pantalla en lugar de fuera de ella**. |

**OBSERVACIÓN.** El fallo del funnel es de **posición**, no de lógica. La lógica es buena.
El resultado aparece donde no se ve.

---

## 9. Resumen ejecutivo de defectos

| ID | Defecto | Fase | Severidad |
|---|---|---|---|
| D-01 | Imaginería ilustrada genérica; 4 imágenes duplicadas entre servicios | 2, 10 | Crítica |
| D-02 | Ninguna webfont cargada; 11 pesos que colapsan a 2–3 | 2 | Crítica |
| D-03 | Sin dirección, horario, GBP ni reseñas | 9 | Crítica |
| D-04 | Fotografía real existente sin desplegar | 10 | Crítica |
| D-05 | 32 % del viewport móvil en cromo; sticky tapa contenido | 15 | Alta |
| D-06 | 12 áreas táctiles < 24 px (home); 68 < 44 px (`/servicios`) | 18 | Alta |
| D-07 | Dorado a 2,56 : 1 como color de texto sistémico | 18 | Alta |
| D-08 | `/servicios`: 11,6 pantallas, 42 CTA, 0 imágenes | 16 | Alta |
| D-09 | Resultado del funnel bajo el fold en móvil | 7 | Alta |
| D-10 | "ODONTÓLOGICO" mal escrito en el nombre de marca | 9 | Media (coste trivial) |
| D-11 | Sin escala de espaciado; 6 breakpoints; 3 998 líneas en una hoja | 2, 17 | Media |
| D-12 | Sin enlace de salto al contenido | 18 | Media |
| D-13 | JSON-LD sin `LocalBusiness`/`FAQPage` | 20 | Media |
| D-14 | Héroe sin jerarquía interna (squint test) | 1 | Media |
| D-15 | Cápsulas del héroe con apariencia de radio button | 1 | Baja |
