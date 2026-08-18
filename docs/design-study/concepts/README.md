# Mockups conceptuales

Prototipos aislados. **No modifican producción de ninguna forma.**

| Archivo | Contenido |
|---|---|
| [`heroes.html`](heroes.html) · [`heroes.webp`](heroes.webp) | Héroe de las **tres direcciones**, en escritorio (1440x900) y móvil (390x844). Seis mockups. |
| [`a-kit.html`](a-kit.html) · [`a-kit.webp`](a-kit.webp) | **Kit de la dirección recomendada**: IntentGateway con expansión en el sitio, TreatmentCard tipográfica, DoctorIntro, Equipo, bloque de urgencia, CTA final y héroe de página de servicio. |

## Qué demuestra cada mockup

**`heroes.html`** — la comparación que sostiene la decisión. En la dirección A se ve
concretamente el cambio de presupuesto del viewport móvil: header de 56 px con marca corta
en una línea (frente a ~160 px y tres líneas hoy), un solo CTA sticky (frente a dos),
datos de confianza en el fold y la primera puerta de intención visible sin desplazar.
El cromo permanente baja del **32 % al 13 %**.

**`a-kit.html`** — los siete componentes que resuelven los defectos medidos:

| Componente | Defecto que corrige |
|---|---|
| IntentGateway con expansión en el sitio | D-09 · el resultado del funnel nace bajo el fold |
| TreatmentCard tipográfica | D-01 y D-06 · imágenes duplicadas y áreas táctiles de 15 px |
| DoctorIntro | D-01 y D-04 · avatar ilustrado con retrato real disponible sin desplegar |
| Equipo sin clones | D-01 · la misma ilustración usada para dos personas distintas |
| Bloque de urgencia | D-07 · el terracota se aísla a urgencias y se acompaña de etiqueta textual |
| CTA final | D-07 · texto blanco sobre gradiente con contraste insuficiente |
| Héroe de servicio con "para quién no" | Ningún referente del benchmark lo tiene |

## Notas técnicas

- HTML autocontenido: sin dependencias, sin JavaScript, sin peticiones de red.
- Los campos de fotografía son **marcadores etiquetados**, no fotografías.
- Los PNG son render a 2x, para revisar dentro del PR sin abrir nada.
- Las cifras y reseñas mostradas (`★ 4,9 · 27 reseñas`, horarios, dirección) son
  **texto de maqueta**. Los datos reales están marcados como `FALTA EL DATO` en
  [`../trust-architecture.md`](../trust-architecture.md) y deben aportarse antes de
  implementar nada de esto.
