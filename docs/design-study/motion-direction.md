# Dirección de movimiento

**Principio.** El movimiento no es decoración: es la explicación de qué acaba de pasar y
de dónde vino. Si una animación no responde a esa pregunta, se elimina.

---

## 1. Clasificación del motion actual

Inventario de `src/styles/globals.css` (9 `@keyframes`, 9 `transition`).

| Animación | Clase | Veredicto |
|---|---|---|
| `sectionReveal` (`ScrollReveal` + `animation-timeline: view()`) | **Emocional** | **Conservar.** Da ritmo de lectura y degrada bien sin JS. Reducir el desplazamiento de 24 px a 8 px. |
| `funnelCardIn` / `funnelPanelIn` | **Funcional** | **Conservar y reforzar.** Es el feedback del funnel — hoy ocurre fuera de pantalla. |
| `needSwap` | **Funcional** | Conservar. |
| `heroRise` | Emocional | Conservar, más corto. |
| `ctaGlow` (3,2 s, infinita) | **Decorativa** | **Eliminar.** Una animación infinita en un CTA es ruido que compite con el contenido y consume ciclos permanentemente. |
| `pulseRing` (1,9 s, infinita) | **Decorativa** | **Eliminar.** Mismo motivo. |
| `scrollCue` (1,8 s, infinita) | Decorativa | **Eliminar.** Si el usuario no sabe que puede hacer scroll, el problema es la altura del héroe. |
| `ambientFloat` (9 s, infinita, alternate) | **Decorativa** | **Eliminar.** Anima manchas de fondo de un héroe que ya carece de jerarquía. |

**Resultado: se eliminan 4 animaciones infinitas.** Cuatro bucles permanentes en la home
mantienen el hilo de composición activo sin aportar información.

**OBSERVACIÓN positiva.** `prefers-reduced-motion: reduce` está bien implementado a nivel
global y `ScrollReveal` solo activa `.js-motion` cuando hay JS, `IntersectionObserver` y
no hay preferencia de movimiento reducido. **Esto se conserva tal cual.**

---

## 2. Tokens de movimiento

```css
--motion-instant:  120ms;  /* color, foco, hover                */
--motion-quick:    180ms;  /* estado de control                 */
--motion-base:     240ms;  /* entrada de elemento, reveal       */
--motion-slow:     400ms;  /* cambio de panel, transición mayor */

--ease-out:   cubic-bezier(0.22, 0.75, 0.35, 1);  /* entradas   */
--ease-in:    cubic-bezier(0.55, 0, 1, 0.45);     /* salidas    */
--ease-move:  cubic-bezier(0.4, 0, 0.2, 1);       /* desplazar  */

--motion-shift: 8px;  /* desplazamiento máximo de entrada */
```

**Reglas duras**

1. Nada dura más de **400 ms**. Por encima se percibe como lentitud, no como elegancia.
2. **Cero animaciones infinitas.** Ninguna excepción.
3. Solo se animan `transform` y `opacity`. Nunca `width`, `height`, `top` ni `margin`.
4. Desplazamiento de entrada **máximo 8 px**. Los 24 px actuales producen "salto".
5. Todo bloque de motion vive bajo `@media (prefers-reduced-motion: no-preference)`.

---

## 3. Velocidad, easing e intención

| Situación | Duración | Easing | Intención |
|---|---|---|---|
| Foco de teclado | 0 ms | — | **Instantáneo.** Nunca animar el foco. |
| Hover de botón | 120 ms | `--ease-move` | Confirmar que es accionable |
| Pulsación (`:active`) | 80 ms | `--ease-move` | Acuse físico |
| Selección de intención | 180 ms | `--ease-out` | "Registré tu elección" |
| Aparición del panel de orientación | 240 ms | `--ease-out` | "Esto es consecuencia de lo que tocaste" |
| Reveal on scroll | 240 ms | `--ease-out` | Ritmo de lectura |
| Apertura del menú móvil | 240 ms | `--ease-out` | Origen espacial |
| Carga de imagen | 400 ms | `--ease-out` | Evitar el parpadeo |

---

## 4. Profundidad

**Sin sombras para expresar elevación.** La jerarquía se construye con **valor y filete**,
no con `box-shadow`. Hoy hay 21 sombras literales fuera de token.

Se conservan exactamente **dos** elevaciones:

| Nivel | Uso | Expresión |
|---|---|---|
| 0 | Todo el contenido | Filete de 1 px |
| 1 | Barra fija y menú móvil | Sombra suave única, porque flotan de verdad sobre el contenido |

---

## 5. Feedback — el arreglo que más importa

**Problema medido.** El usuario toca una opción del `IntentGateway` y el resultado se
renderiza por debajo del fold. En móvil, **la acción parece no tener efecto**.

**Solución de motion + layout, en tres tiempos:**

```
t=0ms    Pulsación: la tarjeta baja 1px y su filete pasa a `primary`.
t=180ms  Las otras dos tarjetas se contraen a fila compacta (transform, no height).
t=240ms  El panel de orientación se expande EN EL LUGAR de la tarjeta tocada,
         con fundido y 8px de desplazamiento.
t=280ms  scrollIntoView({ block:'nearest', behavior:'smooth' }) — solo si hace falta.
         El CTA queda visible sin scroll adicional.
```

**Regla.** Después de cualquier selección, el CTA resultante debe estar **dentro del
viewport sin que el usuario desplace**. Es un requisito de aceptación, no un detalle.

---

## 6. Motion por contexto

### Entrada de página
Solo el héroe. Titular y botón con fundido y 8 px, escalonados 60 ms. **La fotografía no
se anima**: aparece ya colocada, para no perjudicar el LCP.

### Navegación
Sin transición de página. Next.js ya navega en cliente; añadir una transición añade
latencia percibida.

### CTA
Hover: fondo un 8 % más oscuro en 120 ms. Foco: contorno de 3 px, sin animación.
**Nada de brillo pulsante.**

### Fotografía
Fundido de 400 ms al decodificar. **Espacio reservado siempre** con `aspect-ratio`, para
CLS ≤ 0,1 ([web.dev/articles/vitals](https://web.dev/articles/vitals), 2026-08-17).
Sin efecto Ken Burns, sin paralaje.

### Barra fija
Aparece tras 120 px de scroll con fundido y 8 px. **No se oculta al bajar y reaparece al
subir**: ese patrón hace perder el CTA justo cuando el usuario lo busca.

---

## 7. Motion por dirección de arte

| | A · Urabá | B · Claro | C · Noche |
|---|---|---|---|
| Reveal on scroll | Sí, 240 ms / 8 px | **No** | Sí, 400 ms / 12 px |
| Entrada del héroe | Fundido escalonado | Ninguna | Fundido + `scale(1.04)→1` |
| Hover de tarjeta | Filete oscurece | Solo color de enlace | Filete a ámbar |
| Feedback del funnel | Completo (§5) | Completo (§5) | Completo (§5) |
| Presupuesto de CSS de motion | ~2 KB | **~0,4 KB** | ~3 KB |

**El feedback del funnel (§5) es obligatorio en las tres.** Es funcional, no estético.

---

## 8. Accesibilidad del movimiento

- `prefers-reduced-motion: reduce` desactiva **todo** menos los cambios de color de estado.
  El bloque global actual ya lo hace correctamente y se conserva.
- Sin JavaScript, todo el contenido es visible. Ya se cumple.
- **El foco nunca se anima.** Debe ser instantáneo y de contorno grueso.
- Ningún contenido depende **solo** del movimiento para comprenderse.
- Ningún parpadeo entre 3 y 55 Hz.
