# Dirección fotográfica

**La fotografía es el problema nº 1 del sitio y también su solución más barata.**
Ninguna decisión de color, tipografía o motion cambiará la percepción tanto como
sustituir clip-art por imágenes reales.

Complementa —no reemplaza— `docs/launch-kit/photography-brief.md` y
`docs/photography/missing-photo-shotlist.md`, que ya definen tomas pendientes.

---

## 1. Auditoría de todo el material existente

### 1.1 Fotografía real de la clienta (`public/images/client/`)

| Archivo | Dimensiones | Peso | Clasificación | Uso |
|---|---|---|---|---|
| `web/nataly-natural-portrait.webp` | 900×1125 (4:5) | 74 KB | **HERO-WORTHY** | Retrato del héroe; bloque de doctora |
| `web/nataly-promo-portrait.webp` | 499×624 (4:5) | 17 KB | **TEAM** | Tarjeta de equipo — resolución limitada |
| `web/nataly-clinica-avatar.webp` | 420×420 (1:1) | 12 KB | **TEAM / avatar** | Avatar circular; **no** ampliar |
| `web/equipo-preview.webp` | 719×535 (4:3) | 16 KB | **SOCIAL PROOF** | Apertura de `/equipo`; Nataly + Vanesa |
| `raw/nataly-retrato-natural.jpeg` | — | 171 KB | Origen | Archivo maestro |
| `raw/nataly-bata-clinica.jpeg` | — | 54 KB | Origen | Archivo maestro |
| `raw/nataly-bata-promo.jpeg` | — | 60 KB | Origen | Archivo maestro |
| `raw/nataly-servicios-promo.jpeg` | — | 56 KB | **MARKETING ONLY** | Pieza de redes con texto sobreimpreso |
| `raw/equipo-duo-promo.jpeg` | — | 56 KB | **MARKETING ONLY** | Pieza de redes |
| `equipo/vanesa-lopez.webp` | — | 6 KB | **TEAM / débil** | 6 KB es demasiado poco; re-exportar del original |

**OBSERVACIÓN DEL SNAPSHOT.** Al capturar el estudio, este material no estaba en
producción: vivía en `feature/real-client-photography-v1`, fuera del commit auditado
`ddeb2d6`. El 18 de agosto de 2026 se desplegó mediante el PR #18 (`159de66`).

**OBSERVACIÓN.** `nataly-natural-portrait.webp` (900×1125) es el único archivo con
resolución suficiente para un héroe. Es el activo fotográfico más valioso del proyecto.

**Limitación honesta.** `src/data/team.ts` ya lo documenta: son recortes de material de
redes sociales, no tomas pensadas para web. Sirven —y son **infinitamente** mejores que
el clip-art actual— pero no son la meta.

### 1.2 Ilustración vectorial (`public/images/servicios/`, `hero/`, `equipo/`)

| Archivo | Clasificación | Veredicto |
|---|---|---|
| `hero/consultorio-odontologico-carepa.png` | **WEAK** | Retirar del héroe. Es la causa principal del "parece plantilla". |
| `servicios/*.png` (8 archivos) | **WEAK** | Retirar. Contorno de diente repetido en 8 variantes de color. |
| `equipo/odontologia-profesional-carepa.png` | **WEAK** | Retirar. Se usa **duplicada** para dos personas distintas. |

**OBSERVACIÓN.** 12 servicios comparten 8 imágenes. Cuatro pares tienen imagen idéntica.

### 1.3 Marketing (`public/marketing/`)

35 previews de campaña, 32 QR, manifiesto y reporte de QA. Clasificación:
**MARKETING ONLY**. Bien construido para su propósito (redes, impresión, QR).
**No es material web.** Llevan texto sobreimpreso y proporciones de red social.

---

## 2. Qué falta producir

| # | Toma | Formato | Prioridad | Sustituye a |
|---|---|---|---|---|
| P-1 | **Fachada del consultorio**, luz de día, con seña de referencia visible | 3:2 horizontal | **P0** | El vacío de `/consultorio` |
| P-2 | **Sala de espera / recepción**, sin personas, luz natural | 3:2 y 4:5 | **P0** | Ilustración del héroe |
| P-3 | **Retrato editorial de Nataly**, cuerpo medio, mirada a cámara, espacio negativo a un lado | 4:5 y 16:9 | **P0** | Retrato reciclado de redes |
| P-4 | **Nataly en el sillón, atendiendo**, plano medio, sin rostro identificable de paciente | 3:2 | P1 | — |
| P-5 | **Vanesa en recepción / con el teléfono** | 4:5 | P1 | Retrato de 6 KB |
| P-6 | **Grupal de las 4 personas** (ya en la shot list existente) | 3:2 | P1 | Dos clones ilustrados |
| P-7 | **Detalle de instrumental estéril**, macro, fondo desenfocado | 1:1 | P2 | Iconos genéricos de bioseguridad |
| P-8 | **Manos explicando** sobre un modelo o una radiografía | 3:2 | P2 | Imágenes de servicio |
| P-9 | **Textura del lugar**: luz sobre pared, planta, entrada | 1:1 y 3:2 | P2 | Rellenos de gradiente |
| P-10 | **Antes/después**, mismo encuadre, misma luz, con consentimiento firmado | 1:1 pareado | P2 | Ausencia total de casos |

**Coste realista.** P-1 a P-6 son **una sola sesión de medio día** con un fotógrafo local
en el propio consultorio. No requiere estudio, modelos ni producción.

---

## 3. Dirección fotográfica

### 3.1 Luz

- **Luz natural, siempre.** Ventana como fuente principal, a 45° del sujeto.
- Prohibido el flash directo de cámara: es el rasgo nº 1 de la foto amateur de consultorio.
- En interior clínico, la luz cenital de tubo produce un verde enfermizo.
  **Apagar los tubos y usar la ventana**, o rebotar con una cartulina blanca.
- Hora recomendada: media mañana o media tarde. En Urabá el sol cenital es muy duro.
- **Sombras suaves permitidas.** El contraste alto de sombra dura es lo que hace que una
  foto se lea como "documento" y no como "editorial".

### 3.2 Fondo

- **Fondos reales del consultorio**, nunca fondo infinito blanco de estudio.
  El fondo blanco es lo que convierte un retrato profesional en foto de carnet.
- Buscar **profundidad**: que se vea que hay una habitación detrás.
- Prohibido: fondos con desorden, cables, cajas, papeles pegados a la pared.
- Un elemento de calidez en el encuadre (planta, madera, textil) desmiente el estereotipo
  de "sitio frío donde duele".

### 3.3 Ropa

- **Bata blanca limpia y bien planchada**, o casaca de color liso.
- **Un solo color de casaca para todo el equipo.** La coherencia cromática entre retratos
  es lo que hace que cuatro fotos parezcan un equipo y no cuatro personas.
- Prohibido: estampados, logos de terceros, texto en la ropa.
- Sin joyería llamativa en manos si aparecen en primer plano.

### 3.4 Pose y expresión

- **Prohibido:** brazos cruzados. Es el cliché documentado nº 1 de la foto médica y
  lee como distancia, no como autoridad.
- **Prohibido:** sostener un modelo dental gigante o un cepillo hacia la cámara.
- **Prohibido:** el pulgar arriba.
- **Sí:** postura natural de pie o sentada, hombros relajados, manos visibles y en reposo.
- **Expresión:** sonrisa cerrada o media sonrisa. La sonrisa completa de dientes en una
  odontóloga se lee como anuncio de blanqueamiento.
- **Mirada a cámara** en el retrato principal — es lo que crea el contacto.
  Mirada fuera de cuadro solo en tomas de contexto.

### 3.5 Encuadre, planos y proporciones

| Plano | Uso | Proporción |
|---|---|---|
| Plano medio (cintura arriba) | Retrato principal del héroe | 4:5 vertical, 16:9 horizontal |
| Primer plano (hombros arriba) | Tarjetas de equipo, avatares | 1:1 y 4:5 |
| Plano general | Fachada, sala de espera | 3:2 |
| Detalle / macro | Instrumental, manos | 1:1 |

- **Regla de tercios**, sujeto descentrado.
- **Espacio negativo obligatorio en las tomas de héroe.** Se necesita área limpia para el
  titular. Sin espacio negativo hay que superponer un velo oscuro, que es exactamente lo
  que hace Ortoclínicas de Urabá y lo que queremos evitar.
- **Nunca recortar por una articulación** (muñeca, codo, tobillo).
- **Producir cada toma clave en vertical y horizontal.** Recortar un 3:2 a 4:5 pierde el
  encuadre; dispararlo dos veces cuesta treinta segundos.

### 3.6 Color y postproducción

- Balance de blancos correcto. **El verde de tubo fluorescente es el error nº 1.**
- Piel con tono natural. Sin suavizado de piel agresivo.
- **Sin filtros de red social.** Sin viñeteado. Sin HDR.
- Coherencia de temperatura entre todas las fotos del sitio: **cálida**, no fría.
- Sin marca de agua.

---

## 4. Cómo evitar la "foto de consultorio genérica"

Los cinco rasgos que producen ese efecto, y su antídoto:

| Rasgo genérico | Por qué falla | Antídoto |
|---|---|---|
| Modelo con sonrisa perfecta que no es paciente real | El espectador detecta el stock | Fotografiar al equipo real, no a pacientes actuados |
| Instrumental brillante en primer plano | Activa ansiedad dental | Fotografiar el espacio y las personas; el instrumental solo como detalle pequeño |
| Fondo blanco infinito | Podría ser cualquier clínica del mundo | Fondo real, con profundidad y contexto |
| Sonrisa de dientes a pantalla completa | Es publicidad de dentífrico | Media sonrisa, mirada a cámara |
| Brazos cruzados con bata | Distancia y cliché | Postura natural, manos visibles |

**La prueba definitiva:** si la foto pudiera ilustrar cualquier clínica de cualquier país,
está mal. Debe verse **Carepa**: la luz del trópico, el espacio real, esas personas.

---

## 5. Colocación — dónde va cada foto y dónde no

| Foto | Usar en | **No** usar en |
|---|---|---|
| `nataly-natural-portrait.webp` (900×1125) | Héroe home, bloque de doctora, `/equipo` | Nada por encima de 900 px de ancho |
| `nataly-promo-portrait.webp` (499×624) | Tarjeta de equipo | Héroe — resolución insuficiente |
| `nataly-clinica-avatar.webp` (420×420) | Avatar circular ≤ 96 px | Cualquier uso ampliado |
| `equipo-preview.webp` (719×535) | Apertura de `/equipo` | Héroe de la home |
| `vanesa-lopez.webp` (6 KB) | Nada hasta re-exportar | Todo |
| `servicios/*.png` | **Nada** | Todo — retirar |
| `hero/consultorio-*.png` | **Nada** | Todo — retirar |
| `equipo/odontologia-profesional-*.png` | **Nada** | Todo — nunca duplicada |
| `marketing/**` | Redes, impresión, QR | Cualquier página web |

### Qué hacer mientras no haya fotos de servicio

**RECOMENDACIÓN.** Las 12 tarjetas de servicio **no necesitan fotografía**. Es preferible
—y más premium— una tarjeta **tipográfica**: título grande, resultado en lenguaje de
paciente, y un campo de color de la paleta. Es la solución de Minimale Skin en el
benchmark, y elimina de golpe el problema de las imágenes duplicadas.

> **Una tarjeta sin imagen es honesta. Una tarjeta con la imagen de otro servicio es un error visible.**

---

## 6. Presupuesto técnico

| Regla | Valor |
|---|---|
| Formato de entrega | AVIF con respaldo WebP, vía `next/image` |
| Ancho máximo de origen | 1600 px (héroe), 900 px (retratos), 600 px (tarjetas) |
| Peso objetivo del héroe | **≤ 120 KB** en el ancho servido a móvil |
| Peso objetivo de retrato | ≤ 60 KB |
| Peso objetivo de miniatura | ≤ 25 KB |
| Presupuesto total de imagen, home móvil | **≤ 350 KB** |
| `priority` | Solo la imagen del héroe. Todo lo demás perezoso. |
| `sizes` | Obligatorio y correcto en cada `next/image` |
| `alt` | Descriptivo en fotos informativas; `alt=""` en decorativas |
| Reserva de espacio | `width`/`height` o `aspect-ratio` siempre, para CLS ≤ 0,1 |

**Contexto.** La home transfiere hoy 184 KB totales, de los cuales 17 KB son imágenes.
Subir a 350 KB de imagen deja la página en ~520 KB: sigue siendo ligera y respeta los
umbrales de Core Web Vitals ([web.dev/articles/vitals](https://web.dev/articles/vitals),
consultado 2026-08-17).

**El coste en rendimiento de la fotografía real es asumible. El coste en credibilidad
de no tenerla no lo es.**

---

## 7. Consentimiento y ética

- Ninguna fotografía de paciente sin **consentimiento informado por escrito**, específico
  para uso web, con fecha.
- Ningún rostro de paciente identificable en tomas de procedimiento.
- Casos antes/después: mismo encuadre, misma luz, misma distancia focal, **sin retoque
  del resultado clínico**. Retocar un antes/después no es dirección de arte, es publicidad
  engañosa en salud.
- Nada de bancos de imágenes presentado como el consultorio propio.
