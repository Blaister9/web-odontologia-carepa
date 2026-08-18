# Moodboards

Tres moodboards navegables, uno por dirección de arte. Cada uno contiene paleta con
ratios de contraste verificados, espécimen tipográfico, estudio de forma, materia y
textura, componentes de interfaz, tratamiento fotográfico y las decisiones explícitas
de lo que la dirección **no** hace.

| Dirección | HTML | PNG |
|---|---|---|
| **A · Luz de Urabá** — recomendada | [`a-luz-de-uraba.html`](a-luz-de-uraba.html) | [`a-luz-de-uraba.webp`](a-luz-de-uraba.webp) |
| **B · Consultorio Claro** | [`b-consultorio-claro.html`](b-consultorio-claro.html) | [`b-consultorio-claro.webp`](b-consultorio-claro.webp) |
| **C · Noche Suave** — descartada | [`c-noche-suave.html`](c-noche-suave.html) | [`c-noche-suave.webp`](c-noche-suave.webp) |

Los PNG son render a 2x de cada HTML, para poder revisarlos dentro del PR sin abrir nada.
Descripción completa de cada dirección en [`../art-directions.md`](../art-directions.md).

## Notas técnicas

- **Autocontenidos.** No importan nada de `src/`, no se compilan con Next.js y no se
  sirven desde `public/`. Abrir el HTML directamente en el navegador.
- **Sin archivos de fuente.** Ninguna tipografía comercial se incluye ni se distribuye.
  Los espécimenes usan pilas del sistema que aproximan el carácter de las familias
  propuestas (Fraunces, Playfair Display, Inter). Las familias reales se cargarían con
  `next/font/google` en la implementación.
- **Los campos fotográficos son marcadores**, no fotografías. La fotografía definitiva
  aún no está producida — ver [`../photography-direction.md`](../photography-direction.md).
- Todos los ratios de contraste indicados están calculados sobre los hex reales, no estimados.
