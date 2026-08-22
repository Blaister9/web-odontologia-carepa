# Estrategia creativa

## Principio

Fotografía y video reales autorizados, dirección Luz de Urabá y texto mínimo. La pieza demuestra **persona + lugar + siguiente paso**; no intenta diagnosticar ni prometer un resultado.

## Ángulos

| Ángulo | Hook | Evidencia visual | CTA | Ruta |
|---|---|---|---|---|
| A · Estética | Opciones para tu sonrisa | IMG-015, procedimiento autorizado | Explora opciones | `/c/sonrisa` |
| B · Orientación | No necesitas saber el tratamiento | IMG-017 / VID-003 | Conoce cómo empezar | `/c/valoracion` |
| C · Confianza local | Un equipo cercano en Carepa | IMG-004 | Conoce al equipo | `/equipo` |
| D · Consultorio real | Odontología en Carepa | IMG-005 / VID-001–002 | Conoce cómo empezar | `/c/uraba` |
| E · Prevención | Cuidar tu sonrisa empieza por valorar | IMG-015 | Ver valoración general | `/c/valoracion` |

## Formatos

- Feed 4:5: 1080×1350 WebP.
- Stories: 1080×1920 WebP.
- Reels: 720×1280 H.264, 30 fps, audio original normalizado.
- Contact sheet: `public/marketing/acquisition-v1/previews/static-contact-sheet.webp`.

Meta informa que 9:16 con audio y zonas seguras es el patrón recomendado para Reels; los assets clave permanecen en el centro. Fuente: <https://www.facebook.com/business/ads/facebook-instagram-reels-ads>

## Selección y exclusiones

Allowlist completa usada: IMG-004, IMG-005, IMG-007, IMG-008, IMG-015, IMG-017, IMG-019, VID-001, VID-002, VID-003. Los siete prioritarios alimentan anuncios principales; IMG-007, IMG-008 e IMG-019 se exportan en `meta/` como apoyo orgánico/de marca y requieren nueva revisión si pasan a paid.

Excluidos:

- Todo asset `PUBLIC-PENDING-CONFIRMATION`.
- “Valoración gratis”, “consulta gratis”, “sin costo”.
- “Citas disponibles” dinámico.
- Dirección Calle del Comercio sin confirmar.
- Material Meta AI.
- Capturas o interfaces.
- Stocks de licencia pendiente.
- Antes/después.

## Reglas de copy en pieza

- Máximo un hook, una línea de soporte y un CTA.
- Evitar segunda persona diagnóstica: “¿Tienes caries?” no se usa.
- Sí se permite lenguaje de elección: “Opciones para tu sonrisa”.
- No usar “perfecta”, “garantizado”, “sin dolor”, “inmediato”, “más barato” o superlativos.
- Carepa se presenta como ubicación de atención, no como exclusión de otras personas.

## Videos

1. `valoracion-nataly`: 6,8 s, VID-003, orientación.
2. `consultorio-cierre`: 5 s, VID-001, espacio real.
3. `consultorio-recorrido`: 6 s, VID-002, segundo plano del lugar.
4. `recorrido-local-montage`: 17,8 s, combinación de los tres, sin música nueva.

Los planos de consultorio originales son casi estáticos a 1 fps; se declaran como B-roll, no como “video dinámico”. No se amplió la fuente: se colocó sobre canvas 720×1280.

## Reproducibilidad

```powershell
node scripts/generate-acquisition-v1.mjs
```

El script escribe SHA-256, dimensiones, duración, fuente y ruta en `public/marketing/acquisition-v1/manifest.json`. No añade dependencia al runtime ni publica nada.
