# Design Direction Study — Consultorio Odontológico Dra. Nataly Jiménez

**Estado:** propuesta para decisión. **No implementada.**
**Rama:** `research/design-direction-study-v1` (creada desde `origin/main` = producción)
**Fecha del estudio:** 17 de agosto de 2026
**Producción auditada:** <https://www.dranatalyjimenez.com> (commit `ddeb2d6`)

---

## Qué es esto

Un estudio de dirección de arte y CRO basado en evidencia capturada, no en opinión.
Termina en **una** decisión de diseño aprobable, no en un menú de opciones.

Esta rama **no contiene ni un solo cambio productivo**. Solo documentación, capturas,
moodboards y prototipos aislados. Ver [Garantía de no-intervención](#garantía-de-no-intervención).

---

## Cómo leer este estudio

| Si tienes… | Lee |
|---|---|
| **3 minutos** | [`final-recommendation.md`](final-recommendation.md) → secciones 1 y 2 |
| **15 minutos** | `final-recommendation.md` completo + [`priority-matrix.md`](priority-matrix.md) |
| **1 hora** | Todo, en el orden de la tabla siguiente |

### Entregables

| # | Documento | Responde a |
|---|---|---|
| 1 | [`current-state-audit.md`](current-state-audit.md) | Qué falla hoy y qué funciona |
| 2 | [`market-benchmark.md`](market-benchmark.md) | Qué hace el mercado, qué está saturado |
| 3 | [`competitive-matrix.csv`](competitive-matrix.csv) | Matriz comparativa calificada 1–10 |
| 4 | [`user-journey.md`](user-journey.md) | Funnel actual + mapa emocional |
| 5 | [`trust-architecture.md`](trust-architecture.md) | La confianza como sistema |
| 6 | [`photography-direction.md`](photography-direction.md) | Auditoría y dirección fotográfica |
| 7 | [`art-directions.md`](art-directions.md) | Tres direcciones radicalmente distintas |
| 8 | [`motion-direction.md`](motion-direction.md) | Lenguaje de movimiento |
| 9 | [`design-system-proposal.md`](design-system-proposal.md) | Tokens y componentes |
| 10 | [`page-blueprints.md`](page-blueprints.md) | Blueprint página por página |
| 11 | [`cro-hypotheses.md`](cro-hypotheses.md) | Hipótesis de conversión falsables |
| 12 | [`priority-matrix.md`](priority-matrix.md) | P0–P3, impacto/esfuerzo/riesgo |
| 13 | [`implementation-roadmap.md`](implementation-roadmap.md) | Fases A–H |
| 14 | [`final-recommendation.md`](final-recommendation.md) | **La decisión** |

### Material visual

```
screenshots/
  360x800/ 390x844/ 414x896/ 768x1024/ 1366x768/ 1440x900/   ← producción, 6 viewports
    <pagina>--fold.png     primer viewport
    <pagina>--full.png     página completa
    scroll/<pagina>--sNN.png  recorrido pantalla a pantalla (evidencia fiable)
  _local-branch/          ← rama de fotografía real, aún NO desplegada
  benchmark/desktop/      ← 33 referentes, 1440×900
  benchmark/mobile/       ← 33 referentes, 390×844
  _capture-log.json       ← métricas por página/viewport
moodboards/               ← 3 moodboards navegables (HTML + PNG)
concepts/                 ← mockups de las 3 direcciones (HTML + PNG)
```

---

## Método y honestidad de la evidencia

Cada afirmación del estudio está etiquetada:

| Etiqueta | Significa |
|---|---|
| **OBSERVACIÓN** | Lo vi en una captura o en el código. Reproducible. |
| **EVIDENCIA** | Medición automatizada o fuente primaria citada con URL y fecha. |
| **INFERENCIA** | Deducción razonada a partir de lo anterior. Puede estar equivocada. |
| **HIPÓTESIS** | Suposición sin verificar. Requiere validación antes de invertir. |
| **RECOMENDACIÓN** | Lo que propongo hacer. |

### Cómo se capturó

- **Navegador:** Chrome headless (`puppeteer-core` 23) contra producción real.
- **Viewports:** 360×800, 390×844, 414×896, 768×1024 (móvil/táctil, UA Android, DPR 2)
  y 1366×768, 1440×900 (desktop, DPR 1).
- **Auditoría automatizada:** contraste WCAG calculado sobre color computado,
  medición de áreas táctiles, jerarquía de encabezados, JSON-LD, peso de transferencia.

### Limitaciones conocidas — léelas antes de citar el estudio

1. **Las capturas `--full.png` no son evidencia primaria.** El modo *fullPage* de Chrome
   redimensiona el viewport, lo que desactiva `IntersectionObserver` y
   `animation-timeline: view()`, y deja imágenes `next/image fill` sin pintar.
   **Usa siempre `scroll/*.png`**, que capturan el estado real que ve una persona.
   Esto es un artefacto de captura, **no** un defecto del sitio: el `ScrollReveal`
   actual degrada correctamente sin JS y con `prefers-reduced-motion`.
2. **6 de 33 referentes bloquearon el bot** (Tend NYC, Aesop, Six Senses, Dr. Barbara Sturm,
   Dental Boutique AU, Odontoestetic). Se analizaron por fuente secundaria y están
   marcados como tales en la matriz. No se les asignó calificación numérica inventada.
3. **No hay datos analíticos del sitio.** Ninguna hipótesis de CRO incluye porcentajes
   de mejora esperada, porque no existe línea base. Todas se plantean como falsables.
4. **El comportamiento local de Carepa/Urabá es INFERENCIA**, apoyada en estadística
   nacional del DANE, no en investigación de campo con pacientes reales.

---

## El hallazgo que cambia el orden de todo lo demás

> **El trabajo de fotografía real ya está hecho y NO está en producción.**

Los commits `06e7656` ("integrate real client photography") y `b719662`
("expand verified client photography") viven en `feature/real-client-photography-v1`
y **no están contenidos en `origin/main`**. Producción sigue sirviendo ilustraciones
vectoriales genéricas donde ya existen retratos reales de la Dra. Nataly Jiménez
y de Vanesa López.

Comparación visual: `screenshots/390x844/scroll/home--s04.webp` (producción, avatar
ilustrado) frente a `screenshots/_local-branch/390x844/scroll/home--s04.webp`
(rama local, retrato real).

**Consecuencia para este estudio:** la acción de mayor impacto visual disponible
no es rediseñar nada. Es desplegar lo que ya existe. Está clasificada **P0-1** en
[`priority-matrix.md`](priority-matrix.md) y es independiente de qué dirección de
arte se apruebe.

---

## Garantía de no-intervención

Esta rama parte de `origin/main` y añade **exclusivamente**:

- `docs/design-study/**` — documentación, capturas, moodboards y prototipos.

Verificación reproducible:

```bash
git diff --stat origin/main...research/design-direction-study-v1 -- ':!docs/design-study'
```

Debe devolver salida vacía. Los prototipos de `concepts/` son HTML autocontenido que
no importa nada de `src/`, no se compila con Next.js y no se sirve desde `public/`.

**No se modificó ningún componente, estilo, dato ni página de producción.
No se hizo merge. El PR es solo para revisión del estudio.**
