# Luz de Urabá — implementación visual

Fecha de captura: 2026-08-18. Las imágenes **antes** pertenecen al inventario del
estudio aprobado; las imágenes **después** corresponden a la rama
`feature/luz-de-uraba-design-v1` en servidor local. Se guardó un pliegue por ruta
y viewport para mantener una comparación útil sin generar cientos de archivos.

| Ruta | 390×844 antes | 390×844 después | 1440×900 antes | 1440×900 después |
| --- | --- | --- | --- | --- |
| Inicio | [antes](../design-study/screenshots/390x844/home--fold.webp) | [después](./after/390x844/home--fold.webp) | [antes](../design-study/screenshots/1440x900/home--fold.webp) | [después](./after/1440x900/home--fold.webp) |
| Consultorio | [antes](../design-study/screenshots/390x844/consultorio--fold.webp) | [después](./after/390x844/consultorio--fold.webp) | [antes](../design-study/screenshots/1440x900/consultorio--fold.webp) | [después](./after/1440x900/consultorio--fold.webp) |
| Equipo | [antes](../design-study/screenshots/390x844/equipo--fold.webp) | [después](./after/390x844/equipo--fold.webp) | [antes](../design-study/screenshots/1440x900/equipo--fold.webp) | [después](./after/1440x900/equipo--fold.webp) |
| Servicios | [antes](../design-study/screenshots/390x844/servicios--fold.webp) | [después](./after/390x844/servicios--fold.webp) | [antes](../design-study/screenshots/1440x900/servicios--fold.webp) | [después](./after/1440x900/servicios--fold.webp) |
| Limpieza dental | [antes](../design-study/screenshots/390x844/svc-limpieza--fold.webp) | [después](./after/390x844/svc-limpieza--fold.webp) | [antes](../design-study/screenshots/1440x900/svc-limpieza--fold.webp) | [después](./after/1440x900/svc-limpieza--fold.webp) |
| Diseño de sonrisa | [antes](../design-study/screenshots/390x844/svc-sonrisa--fold.webp) | [después](./after/390x844/svc-sonrisa--fold.webp) | [antes](../design-study/screenshots/1440x900/svc-sonrisa--fold.webp) | [después](./after/1440x900/svc-sonrisa--fold.webp) |
| Ortodoncia | [antes](../design-study/screenshots/390x844/svc-ortodoncia--fold.webp) | [después](./after/390x844/svc-ortodoncia--fold.webp) | [antes](../design-study/screenshots/1440x900/svc-ortodoncia--fold.webp) | [después](./after/1440x900/svc-ortodoncia--fold.webp) |
| Urgencias | [antes](../design-study/screenshots/390x844/svc-urgencias--fold.webp) | [después](./after/390x844/svc-urgencias--fold.webp) | [antes](../design-study/screenshots/1440x900/svc-urgencias--fold.webp) | [después](./after/1440x900/svc-urgencias--fold.webp) |

## Lectura comparativa

- El sistema anterior dependía de gradientes, ilustraciones dentales genéricas,
  sombras y múltiples acciones simultáneas.
- Luz de Urabá usa una base marfil, tipografía editorial, verde de acción único,
  bordes finos y fotografía real solo cuando la identidad está confirmada.
- En móvil, la portada entra por necesidad en dos pasos; la selección contrae
  opciones secundarias y mantiene la recomendación con su CTA dentro del viewport.
- Las fichas de servicio pasan de héroes ilustrados a orientación tipográfica y
  conservan información clínica, FAQ, enlaces relacionados y datos estructurados.

## Registro de decisiones

- Componentes base: tokens semánticos, Fraunces/Public Sans, cabecera compacta,
  CTA móvil único, seguimiento centralizado de WhatsApp y movimiento funcional de
  240 ms con respeto por `prefers-reduced-motion`.
- Portada: fotografía real de Nataly, entrada por necesidad en dos pasos, doctora
  antes de tratamientos, catálogo destacado tipográfico y urgencias en terracota.
- Equipo: fotografía grupal confirmada de Nataly y Vanesa; retratos reales de
  Nataly y Vanesa; iniciales para Clara Parra y Adalberto Atencia hasta recibir
  retratos propios. No se reutilizan fotos referenciales como identidades.
- Consultorio: relato editorial con el retrato real disponible. Dirección exacta,
  horarios y disponibilidad siguen sujetos a confirmación al agendar.
- Servicios: se mantienen las ocho categorías y los 36 servicios del catálogo
  real. Las fichas eliminan ilustraciones genéricas y publican `Service` + `FAQPage`.
- Conversión: un CTA contextual visible por pantalla móvil; el CTA fijo se retira
  cuando ya existe una recomendación con acción propia.
- Privacidad: el caso clínico de prótesis continúa deshabilitado y sus rutas de
  imagen se eliminan de las props públicas cuando no existe consentimiento.
- Social: `public/og-luz-de-uraba.webp`, generado como pieza tipográfica sin
  pacientes sintéticos, optimizado a 1200×630 y 32 KB.
- Sin cambios de infraestructura ni dependencias: la publicación permanece en el
  pipeline GitHub → Vercel solicitado. No se creó un segundo hosting ni se tocó DNS.

## Pendientes explícitos

- Retratos profesionales 4:5 propios de Clara Parra y Adalberto Atencia.
- Fotografía grupal del equipo completo y tomas clínicas de detalle según la
  `docs/photography/missing-photo-shotlist.md`.
- Dirección, enlace de mapa y horarios exactos, cuando la clienta los confirme.
