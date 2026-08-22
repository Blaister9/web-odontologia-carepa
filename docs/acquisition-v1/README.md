# Patient Acquisition Campaigns V1

Paquete **offline y listo para revisión** de captación local para el Consultorio Odontológico Dra. Nataly Jiménez. Incluye Google Search, Meta, apoyo orgánico, medición, presupuesto, reglas de decisión, copys y creatividades reales.

## Estado

- Rama: `research/patient-acquisition-campaigns-v1`.
- Fecha de investigación: 2026-08-22.
- Mercado: Carepa como núcleo; Apartadó y Chigorodó como expansión controlada; Turbo como prueba separada.
- Objetivo de negocio: **citas confirmadas**, no clics aislados.
- Estado operativo: **no lanzado**. No se creó cuenta, campaña, conjunto, anuncio, método de pago ni gasto.

## Arquitectura en una línea

```text
Google Search captura demanda explícita
Meta crea consideración y visitas cualificadas
Orgánico aporta confianza y segunda exposición
Web orienta y conserva UTM
WhatsApp continúa con atención humana
Hoja privada registra cita solicitada/confirmada sin PII
```

## Qué contiene

| Área | Fuente principal |
|---|---|
| Investigación de plataformas | `platform-research.md` |
| Audiencia y competencia local | `local-audience-research.md` |
| Arquitectura completa | `acquisition-architecture.md` |
| Google Search | `google-keywords.csv`, `google-negatives.csv`, `google-ads-copy.csv`, `google-location-strategy.md` |
| Google Business / Maps | `google-business-maps-checklist.md` |
| Meta | `meta-campaign-architecture.md`, `meta-ads-copy.csv` |
| Creatividad | `creative-strategy.md`, `public/marketing/acquisition-v1/manifest.json` |
| QA visual | `visual-qa.md`, `public/marketing/acquisition-v1/previews/` |
| Política | `ad-policy-review.md` |
| Presupuesto y prueba | `budget-scenarios.md`, `test-plan.md` |
| Medición | `analytics-setup.md`, `measurement-framework.md`, `appointment-attribution.csv` |
| Decisiones | `stop-continue-rules.md`, `campaign-master.csv` |
| Primer mes | `30-day-paid-plan.md`, `organic-paid-synergy.md` |
| Operación | `LAUNCH_CHECKLIST.md`, `responsibilities.md` |

## Decisiones clave

1. **Google primero para demanda de alta intención.** Empezar con frase y exacta; no activar broad match hasta tener términos de búsqueda y conversiones fiables.
2. **Meta a sitio primero.** La web reduce fricción y conserva UTM. Click-to-WhatsApp es una segunda prueba, no el punto de partida, porque todavía no existe una atribución automática de cita confirmada.
3. **Geografía por capas.** Carepa no se mezcla desde el día 1 con Turbo. Así se puede saber si el mayor alcance compensa el desplazamiento.
4. **Un solo evento primario al optimizar:** `appointment_confirmed`, importado manualmente o desde un proceso aprobado cuando exista volumen. Mientras tanto, `whatsapp_click` es microconversión.
5. **Cero datos clínicos en analítica.** Nunca enviar síntomas, texto del chat, nombre, teléfono, correo, diagnóstico, URL con datos ni fotografías.
6. **Cero promesas.** No se usan “gratis”, “sin dolor”, “resultado garantizado”, “citas disponibles”, antes/después ni urgencia inmediata.

## Assets

- 10 anuncios estáticos principales: cinco ángulos en 1080×1350 y 1080×1920.
- 3 apoyos orgánicos/de marca normalizados para completar el allowlist PUBLIC-SAFE.
- 4 videos verticales H.264, 720×1280, con audio original normalizado y sin música añadida.
- Fotografía/video: exclusivamente allowlist `PUBLIC-SAFE` de Media Intake V2.
- Regeneración: `node scripts/generate-acquisition-v1.mjs`.

## Pendientes que bloquean el lanzamiento

- Acceso y titularidad verificados de Google Ads, Meta Business, página, Instagram, WhatsApp y Google Business Profile.
- Dirección exacta, horario público y URL oficial de Google Business/Maps.
- Presupuesto aprobado y método de pago configurado por la persona autorizada.
- Pixel/Google tag y consentimiento revisados antes de instalación; este paquete no los añade.
- Bandeja de WhatsApp con responsable, horarios y SLA internos.
- Hoja privada de atribución creada fuera del repositorio.
- Revisión clínica final por Nataly y revisión final de políticas dentro de cada plataforma.

## Regla de salida

Nada de este paquete autoriza publicación automática. El checklist termina en una pausa obligatoria para aprobación humana.
