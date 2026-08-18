# Propuesta de sistema de diseño

Especificación agnóstica de la dirección de arte. Los **tokens semánticos** son los mismos
en las tres direcciones; solo cambian sus valores. Eso permite decidir la dirección
después de construir el sistema.

Valores mostrados: **A · Luz de Urabá** (dirección recomendada).

---

## 1. Color

### Tokens semánticos

```css
:root {
  /* Superficie */
  --c-bg:            #F7F2EA;
  --c-surface:       #FFFFFF;
  --c-surface-sunk:  #F0E9DD;

  /* Texto */
  --c-text:          #23201C;   /* 14.55:1 sobre bg */
  --c-text-soft:     #5C554C;   /*  6.59:1 sobre bg */
  --c-text-on-fill:  #FFFFFF;

  /* Acción */
  --c-action:        #1E4D3A;   /*  8.65:1 sobre bg  · blanco encima 9.64:1 */
  --c-action-hover:  #17402F;
  --c-urgent:        #A24A30;   /*  5.30:1 sobre bg  · blanco encima 5.90:1 */

  /* Estructura */
  --c-line:          #E2D8C9;
  --c-line-strong:   #C9BCA6;
  --c-focus:         #1E4D3A;
}
```

### Reglas de color

1. **Un solo color de acción.** `--c-action` aparece **únicamente** en elementos
   accionables. Si es verde, se toca.
2. **`--c-urgent` solo en urgencias.** Nunca como acento decorativo.
3. **Se elimina el dorado como color de texto.** Falla a 2,56 : 1 hoy (D-07). Si se quiere
   conservar un acento cálido, es color de superficie o de filete, **nunca de tipografía**.
4. **Máximo 2 colores por pantalla**, además de texto y fondo.
5. **Ningún gradiente decorativo.** Solo velos sobre fotografía.
6. **La información nunca depende solo del color** (WCAG 1.4.1). Urgencia se marca con
   color **y** con etiqueta textual.

### Objetivos de contraste

| Elemento | Mínimo | Objetivo |
|---|---|---|
| Texto de cuerpo | 4,5 : 1 | ≥ 7 : 1 |
| Texto grande (≥ 24 px, o ≥ 18,66 px en negrita) | 3 : 1 | ≥ 4,5 : 1 |
| Bordes de control, iconos con significado | 3 : 1 | ≥ 4,5 : 1 |
| Contorno de foco | 3 : 1 | ≥ 4,5 : 1 |

---

## 2. Tipografía

```css
--font-display: "Fraunces", Georgia, "Times New Roman", serif;
--font-text:    "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
```

**Regla nº 1: la fuente se carga de verdad.** Con `next/font/google`, subconjunto
`latin` + `latin-ext`, `display: 'swap'`, autoalojada por Next.js.
Hoy no se carga ninguna (D-02) y ese es el fallo tipográfico raíz.

### Escala fluida

| Rol | `clamp()` | 390 px | 1440 px |
|---|---|---|---|
| `display` | `clamp(2.25rem, 1.6rem + 3.2vw, 4rem)` | 36 px | 64 px |
| `h1` | `clamp(1.95rem, 1.45rem + 2.4vw, 3rem)` | 31 px | 48 px |
| `h2` | `clamp(1.55rem, 1.25rem + 1.5vw, 2.25rem)` | 25 px | 36 px |
| `h3` | `clamp(1.2rem, 1.05rem + 0.7vw, 1.5rem)` | 19 px | 24 px |
| `body-lg` | `clamp(1.06rem, 1rem + 0.3vw, 1.19rem)` | 17 px | 19 px |
| `body` | `1rem` | 16 px | 16 px |
| `small` | `0.875rem` | **14 px** | 14 px |

**Se elimina cualquier texto por debajo de 14 px.** Hoy hay tipografía a 12,48 px
combinada con contraste insuficiente.

### Pesos

**Solo 400, 600 y 700.** Los 11 pesos actuales (850, 820, 780, 760, 740, 720…) colapsan a
2–3 en pantalla porque la fuente variable nunca se descarga.

### Otras reglas

- Medida de línea: **60–72 caracteres**. `max-width: 68ch` en párrafos.
- Interlineado: 1,6 en cuerpo · 1,15 en titulares.
- El serif solo en `display`, `h1`, `h2` y citas. **Nunca en botones ni en interfaz.**
- Versalitas solo en etiquetas cortas, con `letter-spacing: 0.08em`.
  **Nunca el nombre completo de la marca en versalitas** (hoy ocupa 3 líneas en móvil).

---

## 3. Espaciado

Escala base 4, con paso 8 a partir de `md`:

```css
--s-2:4px; --s-3:8px; --s-4:12px; --s-5:16px; --s-6:24px;
--s-7:32px; --s-8:48px; --s-9:64px; --s-10:96px; --s-11:128px;
```

| Uso | Móvil | Escritorio |
|---|---|---|
| Padding de sección | `--s-8` (48 px) | `--s-10` (96 px) |
| Espacio entre bloques | `--s-7` | `--s-8` |
| Padding interno de tarjeta | `--s-6` | `--s-6` |
| Separación entre tarjetas | `--s-5` | `--s-6` |
| Margen del contenedor | 20 px | `auto`, máx. 1140 px |

**Prohibido cualquier valor fuera de la escala.** Hoy hay nueve paddings de sección
distintos no derivados de una base (D-11).

---

## 4. Radio

```css
--r-sm: 4px;    /* botones, tarjetas, campos */
--r-md: 8px;    /* contenedores grandes      */
--r-full: 999px;/* solo chips y avatares     */
```

**Tres valores. Nada más.** Hoy hay 14, incluidos cinco radios asimétricos tipo
`280px 0 0`. Se eliminan todos.

---

## 5. Elevación

```css
--e-0: none;                                  /* todo el contenido */
--e-1: 0 8px 24px rgba(35, 32, 28, 0.10);     /* solo elementos flotantes */
```

**Dos niveles.** La jerarquía se expresa con espacio y filete. Hoy hay 4 tokens de sombra
más 21 sombras literales.

---

## 6. Bordes

```css
--b-hairline: 1px solid var(--c-line);
--b-strong:   1.5px solid var(--c-line-strong);
--b-action:   2px solid var(--c-action);
```

---

## 7. Breakpoints

```css
--bp-sm:  480px;   /* móvil grande      */
--bp-md:  768px;   /* tablet            */
--bp-lg: 1024px;   /* escritorio        */
--bp-xl: 1280px;   /* escritorio ancho  */
```

**Cuatro puntos.** Hoy hay seis, dos de ellos a 8 px de distancia (760 y 768).
El diseño base es **390 px**, mobile-first, con `min-width` hacia arriba.

---

## 8. Componentes

| Componente | Estado actual | Acción | Por qué |
|---|---|---|---|
| `Button` | Existe, 3 variantes | **Evolucionar** | Fijar altura mínima 48/56 px y 3 niveles reales |
| `Chip` | Cápsulas del héroe | **Reemplazar** | Parecen radio buttons (D-15) |
| `Badge` | Insignias de servicio | Evolucionar | Retirar el dorado como color de texto |
| `Card` | Genérica | Evolucionar | Sin sombra, con filete |
| `TreatmentCard` | Con imagen | **Reemplazar** | Imágenes duplicadas; pasar a tipográfica |
| `DoctorCard` | Existe | Evolucionar | Retrato real, 4:5, sin recorte circular grande |
| `JourneyOption` | Existe y funciona | **Evolucionar** | Área táctil, y expansión en el sitio (motion §5) |
| `CTA` | Múltiples formas | Consolidar | Un solo componente con 3 niveles |
| `Navbar` | Marca en versalitas a 3 líneas | **Reemplazar** | Consume 19 % del viewport móvil (D-05) |
| `StickyCTA` | Dos botones, tapa contenido | **Reemplazar** | Una sola acción; compensación de espacio correcta |
| `FAQ` | Existe | Conservar | Añadir `FAQPage` al JSON-LD |
| `TrustSignal` | **No existe** | **Crear** | Dirección, horario, cifras, calificación |
| `BeforeAfter` | **No existe** | **Crear** | Bloqueado por consentimiento (`FALTA EL DATO`) |
| `ReviewCard` | **No existe** | **Crear** | Bloqueado por datos de GBP (`FALTA EL DATO`) |
| `WhatsAppFloatingButton` | Existe | **Retirar en móvil** | Duplica el `StickyCTA` |
| `SectionHeading` | Existe | Conservar | Bien construido |
| `ScrollReveal` | Existe | Conservar | Degradación correcta |

### Especificación de `Button`

| Nivel | Uso | Altura | Aspecto |
|---|---|---|---|
| Primario | **Uno por pantalla** | 56 px móvil / 52 px escritorio | Relleno `--c-action`, texto blanco, radio 4 px |
| Secundario | Explorar | 48 px | Filete 1,5 px, sin relleno |
| Terciario | Acción menor | 44 px mínimo | Texto con subrayado offset. **Nunca por debajo de 44 px.** |

Todos: `padding-inline: 24px`, `font-weight: 600`, foco con contorno de 3 px y offset 3 px.

### Especificación de `TrustSignal` (componente nuevo)

Fila horizontal en el fold, tres a cinco datos verificables:

```
[ Carepa, Antioquia ]  [ Lun–Vie 8–18 ]  [ ★ 4,9 · 27 reseñas ]  [ WhatsApp directo ]
```

Depende de `FALTA EL DATO` en [`trust-architecture.md`](trust-architecture.md).
**Sin datos reales no se implementa.** Nunca con cifras aproximadas.

---

## 9. Áreas táctiles

| Regla | Valor |
|---|---|
| Mínimo absoluto | **24 x 24 px** — WCAG 2.2 SC 2.5.8 AA |
| Objetivo del sistema | **44 x 44 px** |
| Acción primaria en móvil | **56 px** de alto |
| Separación entre objetivos adyacentes | ≥ 8 px |

**Corrige D-06:** 12 controles bajo el mínimo en la home, 68 bajo 44 px en `/servicios`.

Fuente: [WCAG 2.2 — Understanding SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html),
consultado 2026-08-17.

---

## 10. Densidad de contenido

| Elemento | Límite |
|---|---|
| H1 | ≤ 55 caracteres |
| H2 | ≤ 45 caracteres |
| Bajada del héroe | ≤ 120 caracteres |
| Copy de tarjeta | ≤ 90 caracteres |
| Párrafo | ≤ 3 líneas en móvil |
| Opciones visibles a la vez | **≤ 5** |
| CTA primarios por pantalla | **1** |
| Enlaces a WhatsApp por página | **≤ 6** (hoy: 14 en home, 42 en `/servicios`) |
| Altura de página en móvil | **≤ 6 pantallas** (hoy: 11,6 en `/servicios`) |
| FAQ visibles cerradas | Todas; abiertas de una en una |

### Divulgación progresiva

Se aplica en: FAQ (acordeón), detalle de tratamiento (resumen + "ver más"), y catálogo de
servicios (agrupado en 3 familias en lugar de 12 tarjetas planas).

**No se aplica a:** encabezados, texto SEO principal, dirección, horario ni precios.
Todo contenido plegado permanece **en el DOM** y accesible con `<details>` o
`aria-expanded` — nunca renderizado condicionalmente en cliente, para no perjudicar
rastreo ni accesibilidad.

---

## 11. Arquitectura de CSS

**Problema.** 3 998 líneas y 81 KB en una sola hoja global (D-11).

**Propuesta.**

```
styles/
  tokens.css      /* variables. Fuente única de verdad */
  reset.css
  base.css        /* tipografía, contenedor, foco */
  components/*.css
  pages/*.css
```

Reglas:
- Ningún valor literal de color, radio, espacio o duración fuera de `tokens.css`.
- Ningún componente define sus propias sombras ni gradientes.
- Nomenclatura BEM ya en uso: **conservarla**. Funciona y es coherente.
- Migración por componente, no de golpe.

---

## 12. Presupuesto de rendimiento

**Punto de partida medido:** 184 KB totales, 146 KB de JS, 17 KB de imágenes, DCL 836 ms.

| Recurso | Presupuesto | Nota |
|---|---|---|
| **Imagen del héroe** | ≤ 120 KB | AVIF/WebP, `priority`, `sizes` correcto |
| **Imágenes, total home móvil** | ≤ 350 KB | Hoy 17 KB — hay margen amplio |
| **Fuentes** | ≤ 60 KB | 2 familias variables, subconjunto latino, autoalojadas |
| **CSS** | ≤ 40 KB comprimido | Hoy 81 KB sin comprimir en una hoja |
| **JS adicional** | **0 KB** | **Ninguna librería nueva.** Nada de animación, carrusel ni UI. |
| **CSS de motion** | ≤ 3 KB | |
| **Total de la home en móvil** | **≤ 600 KB** | Frente a 184 KB hoy |

### Objetivos de Core Web Vitals

LCP ≤ 2,5 s · INP ≤ 200 ms · CLS ≤ 0,1, al percentil 75 —
[web.dev/articles/vitals](https://web.dev/articles/vitals), consultado 2026-08-17.

### Vetos explícitos

| Prohibido | Motivo | Alternativa ligera |
|---|---|---|
| Vídeo de fondo en el héroe | Coste de datos con brecha de conectividad documentada | Fotografía estática con `priority` |
| WebGL / Three.js | Sin justificación de negocio | Nada |
| Librería de animación (GSAP, Framer Motion) | El motion propuesto cabe en CSS puro | `@keyframes` |
| Librería de carrusel | Los carruseles ocultan contenido | Rejilla o scroll horizontal nativo |
| Fuentes de icono | Peso y accesibilidad | SVG en línea |
| Google Fonts vía `<link>` | Petición a tercero, coste de conexión, CSP | `next/font/google` autoalojada |

**Excepción admitida.** Cualquier recurso que supere el presupuesto necesita una
justificación escrita con: qué problema de negocio resuelve, coste medido y alternativa
ligera descartada con su motivo.
