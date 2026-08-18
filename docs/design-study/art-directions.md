# Tres direcciones de arte

Tres propuestas **radicalmente distintas**, no tres variaciones del mismo teal.
Ninguna de las tres usa teal, cian ni azul sanitario: son los colores saturados del
sector según [`market-benchmark.md`](market-benchmark.md#5-qué-está-saturado).

Cada dirección se justifica con: qué problema resuelve, qué emoción produce, qué acción
favorece, qué cuesta en rendimiento, qué riesgo genera y qué alternativa existe.

**Todas las paletas están verificadas contra WCAG 2.2 AA** (ratios calculados, no estimados).

Mockups navegables: [`concepts/`](concepts/) · Moodboards: [`moodboards/`](moodboards/)

---

## Resumen comparativo

| | **A · Luz de Urabá** | **B · Consultorio Claro** | **C · Noche Suave** |
|---|---|---|---|
| **Personalidad** | Cálida, local, humana | Directa, útil, sin adorno | Cuidada, íntima, de autor |
| **Emoción** | *"me van a tratar bien"* | *"sé exactamente qué hacer"* | *"esto no es un trámite"* |
| **Base** | Hueso cálido | Blanco frío neutro | Carbón cálido |
| **Acento** | Verde selva + terracota | Un solo verde señal | Ámbar apagado + rosa arcilla |
| **Tipografía** | Serif editorial + grotesca | Grotesca única, alta legibilidad | Display de alto contraste + grotesca |
| **Fotografía** | Documental con luz natural | Documental frontal, plana | Retrato cinematográfico |
| **Fondo** | Papel con textura sutil | Plano absoluto | Profundidad y penumbra |
| **Riesgo** | Puede leerse "artesanal" | Puede leerse "frío" | Exige fotografía excelente |
| **Coste de foto** | Medio | **Bajo** | **Alto** |
| **Coste de motion** | Bajo | Muy bajo | Medio |

---

# A · Luz de Urabá

> *Odontología del trópico húmedo. Cálida, real, de aquí.*

### Concepto

Carepa está en el Urabá antioqueño: luz alta, verde constante, humedad, tierra roja.
**Ninguno de los 27 referentes del benchmark usa esa paleta.** El sector entero elige el
azul de hospital; esta dirección elige el lugar donde el consultorio está.

Resuelve el problema central del diagnóstico —*"se siente genérica, no local"*— por la vía
del color y la luz, no por la vía de escribir "Carepa" más veces.

### Personalidad y emoción

Anfitriona. Concreta. Sin solemnidad. La emoción objetivo es **alivio**: la sensación de
haber llegado a un sitio donde te van a explicar las cosas.

### Referencias (patrón, no diseño)

Chelsea Dental Clinic (crema + oliva, fotografía del espacio), The Well (neutro cálido con
serif editorial), Skin Laundry (arena y cacao). De ninguna se copia maquetación ni identidad.

### Paleta — verificada AA

| Token | Hex | Ratio sobre fondo | Uso |
|---|---|---|---|
| `ink` | `#23201C` | **14,55 : 1** | Texto principal |
| `bg` | `#F7F2EA` | — | Fondo (hueso cálido) |
| `surface` | `#FFFFFF` | 1,11 : 1 | Tarjetas |
| `primary` | `#1E4D3A` | **8,65 : 1** | Verde selva. Botones, titulares de acento |
| `accent` | `#A24A30` | **5,30 : 1** | Terracota. Urgencias, subrayados |
| `muted` | `#5C554C` | **6,59 : 1** | Texto secundario |
| `line` | `#E2D8C9` | — | Filetes, bordes |

Blanco sobre `primary`: **9,64 : 1**. Blanco sobre `accent`: **5,90 : 1**. Ambos AA para
texto pequeño.

### Tipografía

- **Titulares:** serif humanista con contraste moderado — *Fraunces*, *Source Serif 4* o
  *Bitter*. Variable, subconjunto latino.
- **Texto e interfaz:** grotesca neutra — *Inter*, *Public Sans*.
- **Escala:** `clamp()` fluido, ratio 1.25 en móvil y 1.333 en escritorio.
- **Pesos reales:** 400 / 600 / 700. **Nunca 850.**
- El serif solo en H1, H2 y citas. Nunca en interfaz ni en botones.

### Fotografía

Documental, luz de ventana, fondos reales del consultorio, gama cálida. Mucho espacio
negativo. Ver [`photography-direction.md`](photography-direction.md#3-dirección-fotográfica).

### Layout

Rejilla asimétrica de 12 columnas con **columna de respiración vacía a la izquierda** en
escritorio. Bloques anchos alternados con bloques estrechos de texto. Sin cajas anidadas.

### Componentes

- **Cards:** fondo `surface`, **sin sombra**, radio 4 px, filete `line` de 1 px.
  La jerarquía la da el espacio, no la elevación.
- **Buttons:** primario relleno `primary` con texto blanco, radio 4 px, altura 52 px.
  Secundario fantasma con filete de 1,5 px. Terciario texto con subrayado offset.
- **Navigation:** barra alta con logotipo serif a la izquierda y 4 ítems. Un solo CTA.
- **Hero:** fotografía a sangre por la derecha (55 %), texto a la izquierda sobre hueso.
  Titular serif de 3 líneas máximo. **Un solo botón.** Debajo, la fila de datos duros.
- **Servicios:** tarjetas tipográficas sin imagen, agrupadas en 3 familias.
- **Equipo:** retratos 4:5 en fila, nombre en serif, rol en grotesca versalitas.
- **CTA final:** banda `primary` a todo el ancho con texto blanco.

### Fondos e iconografía

Fondo `bg` plano con una **textura de papel de opacidad 2 %** (SVG en línea, < 1 KB).
Iconografía: trazo de 1,5 px, esquinas redondeadas, **cero iconos de diente**.
Los símbolos son de acción y estado, no de anatomía.

### Motion

Mínimo. Fundido de 240 ms con desplazamiento de 8 px. Hover de tarjeta: solo el filete
oscurece. Sin paralaje.

### Balance

| | |
|---|---|
| **Qué problema resuelve** | La genericidad y la falta de sensación de lugar |
| **Qué emoción produce** | Alivio y cercanía |
| **Qué acción favorece** | Escribir por WhatsApp sin sentirse en una clínica |
| **Coste en rendimiento** | ~45 KB de fuentes (2 familias variables, subconjunto latino) |
| **Riesgo** | Si la fotografía sale mediocre, el verde y el terracota pueden leerse "artesanal" en lugar de "editorial" |
| **Alternativa ligera** | Usar solo la grotesca y reservar el serif para el H1 del héroe: baja a ~22 KB |

---

# B · Consultorio Claro

> *La información correcta, a la primera. Sin decorado.*

### Concepto

Dirección **utilitaria de alta legibilidad**. Parte de una lectura del contexto:
~9 de cada 10 accesos a internet en Colombia son por móvil, con brecha de conectividad
documentada ([DANE](https://www.dane.gov.co/files/operaciones/TICH/bol-TICH-2023.pdf)).
El lujo aquí no es la textura: es que **cargue instantáneo y se entienda a la primera**.

Cero gradientes. Cero sombras. Cero `backdrop-filter`. Toda la jerarquía se resuelve con
**tamaño, peso, espacio y un único color de señal**.

### Personalidad y emoción

Competente y sin rodeos. La emoción objetivo es **control**: en cualquier punto sabes
dónde estás y cuál es el siguiente paso.

### Referencias (patrón, no diseño)

Servicios públicos digitales bien diseñados; Doctoralia por su claridad de reserva;
Minimale Skin por la rejilla igualitaria de tratamientos.

### Paleta — verificada AA

| Token | Hex | Ratio sobre fondo | Uso |
|---|---|---|---|
| `ink` | `#14181A` | **17,10 : 1** | Todo el texto |
| `bg` | `#FAFAF8` | — | Fondo |
| `surface` | `#FFFFFF` | 1,05 : 1 | Tarjetas |
| `primary` | `#0A6E47` | **6,03 : 1** | **Único color de señal.** Solo acciones. |
| `accent` | `#B3341F` | **5,86 : 1** | Solo urgencias |
| `muted` | `#4A5257` | **7,62 : 1** | Texto secundario |
| `line` | `#DCE0DE` | — | Filetes |

Blanco sobre `primary`: **6,30 : 1**. Blanco sobre `accent`: **6,13 : 1**.

**Regla de disciplina:** `primary` **solo** aparece en elementos accionables. Si algo es
verde, se toca. Esto convierte el color en un mapa de navegación.

### Tipografía

- **Una sola familia.** Grotesca de alta legibilidad: *Inter*, *Public Sans* o *Atkinson
  Hyperlegible*.
- Pesos 400 / 500 / 700. Nada más.
- Escala grande: cuerpo 17 px en móvil, H1 de 34 a 52 px con `clamp()`.
- Altura de línea generosa: 1,6 en cuerpo, 1,15 en titulares.

### Fotografía

Documental frontal, plana, sin viñeteado. Menos fotos, más grandes. Las tarjetas de
servicio **no llevan imagen**. Esta es la dirección más barata de producir.

### Layout

Rejilla estricta. Una columna en móvil, dos en escritorio. Ritmo vertical constante en
base 8. Anchura de medida limitada a 68 caracteres.

### Componentes

- **Cards:** `surface` con filete `line` de 1 px. **Sin radio (0 px) o 2 px.** Sin sombra.
- **Buttons:** rectángulos de esquina 2 px, altura **56 px**, texto 17 px/600.
  Primario relleno. Secundario filete de 2 px. **No hay tercer nivel** — si no merece
  botón, es un enlace subrayado dentro de un párrafo.
- **Navigation:** barra baja de 56 px, logotipo en texto, 4 ítems, un CTA.
- **Hero:** **sin imagen de fondo.** Titular grande sobre `bg`, subtítulo, un botón, y
  debajo la fila de datos (dirección · horario · teléfono). La foto va **después** del fold.
- **Servicios:** lista, no rejilla de tarjetas. Título + una línea + flecha.
- **Equipo:** retratos rectangulares 4:5 sin recorte circular, nombre debajo.
- **StickyCTA:** **una sola acción**, barra rectangular a todo el ancho, 56 px.

### Fondos e iconografía

Fondos absolutamente planos. Separación entre secciones por **filete de 1 px**, nunca
por cambio de gradiente. Iconografía casi ausente: solo flecha, teléfono, reloj y pin.

### Motion

Prácticamente nulo. Transiciones de color de 120 ms en foco y hover. Sin reveal on scroll.
**El contenido está donde está desde el primer frame.**

### Balance

| | |
|---|---|
| **Qué problema resuelve** | Densidad, ruido de CTA, áreas táctiles, rendimiento en gama media |
| **Qué emoción produce** | Control y confianza funcional |
| **Qué acción favorece** | La acción correcta, porque solo hay una verde por pantalla |
| **Coste en rendimiento** | ~18 KB (una familia variable). **Podría eliminar 68 gradientes y 8 `backdrop-filter`.** |
| **Riesgo** | Puede leerse **institucional o frío**. No transmite "premium" ni "estética dental". Compite mal en el segmento de diseño de sonrisa. |
| **Alternativa** | Aplicarla solo a `/servicios` y `/servicios/*`, donde la densidad es el problema real, y usar otra dirección en home y `/equipo` |

---

# C · Noche Suave

> *La consulta como un lugar al que apetece entrar.*

### Concepto

Dirección **boutique**. Base oscura cálida, tipografía display de alto contraste,
retrato cinematográfico. Compite en el terreno de la odontología estética, donde el
paciente elige por deseo, no por dolor.

**Advertencia deliberada:** el negro con oro está **saturado en Medellín** (Smile Natural,
Be Dharma, Ortoclin). Por eso esta dirección **no** es negro y oro: es **carbón cálido con
ámbar apagado y rosa arcilla**. La diferencia entre `#000000 + #D4AF37` y
`#1A1714 + #D9A25E + #C97B6E` es la diferencia entre "lujo de plantilla" y "penumbra habitada".

### Personalidad y emoción

Íntima y cuidadosa. La emoción objetivo es **deseo tranquilo**: querer ir, no tener que ir.

### Referencias (patrón, no diseño)

The Well (serif display sobre neutro cálido), Chelsea Dental Clinic (fotografía del
espacio, prueba social temprana), Skin Laundry (cacao y arena).

### Paleta — verificada AA

| Token | Hex | Ratio sobre fondo | Uso |
|---|---|---|---|
| `bg` | `#1A1714` | — | Fondo carbón cálido |
| `surface` | `#241F1B` | 1,09 : 1 | Tarjetas |
| `ink` | `#F2EDE6` | **15,33 : 1** | Texto principal |
| `muted` | `#B3A697` | **7,49 : 1** | Texto secundario |
| `primary` | `#D9A25E` | **7,89 : 1** | Ámbar. Botones y acentos |
| `accent` | `#C97B6E` | **5,56 : 1** | Rosa arcilla. Urgencias |
| `line` | `#3A322B` | — | Filetes |

**Regla obligatoria:** en botón ámbar, el texto es **`bg` oscuro (7,89 : 1)**, nunca blanco
(2,26 : 1 — falla). Este es el error clásico de las paletas oro y hay que blindarlo en el token.

### Tipografía

- **Titulares:** display serif de alto contraste — *Playfair Display*, *Prata* o *Bodoni Moda*.
  Solo en H1 y H2, tamaño grande, interlineado 1,05.
- **Texto e interfaz:** grotesca neutra de peso ligero — *Inter* 400/500.
- Versalitas con letter-spacing `0.12em` para etiquetas y navegación.

### Fotografía

**El punto crítico.** Esta dirección **exige** retrato cinematográfico: luz lateral suave,
fondo en penumbra, piel cálida, sombras controladas.

> **Con las fotos actuales, esta dirección se ve peor que la web de hoy.**
> Requiere producir P-2, P-3 y P-4 de la shot list **antes** de implementarla.

### Layout

Bloques a pantalla completa, uno por idea. Márgenes amplios. Poco contenido por pantalla,
mucho aire. Es la dirección con **menos densidad** de las tres.

### Componentes

- **Cards:** `surface` sobre `bg` con filete `line`. Radio 6 px. Sin sombra:
  la separación la da el valor, no la elevación.
- **Buttons:** primario relleno ámbar con texto oscuro, radio 999 px, altura 54 px.
  Secundario fantasma con filete `ink` al 30 %.
- **Navigation:** barra transparente sobre el héroe, versalitas, un CTA fantasma.
- **Hero:** retrato a pantalla completa con degradado oscuro solo en el tercio inferior.
  Titular display sobre la foto. Un botón.
- **Servicios:** tarjetas oscuras con número de índice grande en ámbar.
- **Equipo:** retratos 4:5 en penumbra, nombre en display.
- **CTA final:** bloque `surface` con filete ámbar.

### Fondos e iconografía

Degradados **solo** en velos fotográficos, nunca como decoración. Iconografía de trazo
fino 1 px en ámbar, muy escasa.

### Motion

Es la dirección donde el motion aporta más. Fundido de 400 ms con `cubic-bezier(.22,.75,.35,1)`.
Imagen del héroe con `scale(1.04) → 1` en 900 ms al cargar. Hover de tarjeta: el filete
pasa a ámbar en 200 ms.

### Balance

| | |
|---|---|
| **Qué problema resuelve** | La ausencia total de deseo y de sensación premium |
| **Qué emoción produce** | Deseo tranquilo, cuidado |
| **Qué acción favorece** | Consultas de estética y diseño de sonrisa (ticket alto) |
| **Coste en rendimiento** | ~40 KB de fuentes. Fondo oscuro **ahorra batería en OLED**. |
| **Riesgo** | **Alto y doble.** (1) Depende por completo de fotografía que aún no existe. (2) Un fondo oscuro puede leerse como "caro" a una audiencia sensible al precio y **desincentivar la consulta de urgencia**, que es el segmento más frecuente. |
| **Alternativa** | Aplicarla solo a `/servicios/diseno-de-sonrisa-carepa` y campañas de estética, manteniendo el resto en claro |

---

## Lo que ninguna de las tres hace

Decisiones tomadas **en contra** de la intuición de "más = mejor":

| No se hace | Por qué |
|---|---|
| Más gradientes | Hoy hay 68. Ninguna dirección añade; todas restan. |
| Glassmorphism | Hoy hay 8 `backdrop-filter`. Cuesta composición en GPU de gama media y no comunica nada. |
| Vídeo de fondo en el héroe | Coste de datos injustificable con la brecha de conectividad documentada. |
| WebGL / Three.js | Sin justificación. Ni siquiera se evalúa. |
| Carrusel en el héroe | Oculta contenido tras interacción y perjudica el LCP. |
| Más tarjetas | El problema es densidad, no falta de contenedores. |
| Icono de diente | Saturado en todo el benchmark. |
| Teal / cian / azul sanitario | Saturado en 9 de 14 referentes odontológicos. |

---

## Comparación en las dimensiones que importan

Escala 1–10. Es un juicio profesional razonado, no una medición.

| Criterio | Peso | A · Urabá | B · Claro | C · Noche |
|---|:---:|:---:|:---:|:---:|
| Diferenciación frente al mercado local | 20 % | **9** | 7 | 8 |
| Confianza para paciente de urgencia | 20 % | 8 | **9** | 5 |
| Atractivo para paciente de estética | 15 % | 7 | 5 | **9** |
| Rendimiento en gama media | 15 % | 8 | **10** | 6 |
| Viabilidad con los activos actuales | 15 % | **8** | **9** | 3 |
| Sensación premium | 10 % | 8 | 5 | **9** |
| Riesgo de ejecución (10 = menor riesgo) | 5 % | 7 | **9** | 3 |
| **Ponderado** | | **8,05** | **7,90** | **6,50** |

**A y B están empatadas en la práctica.** La decisión y su justificación, en
[`final-recommendation.md`](final-recommendation.md).
