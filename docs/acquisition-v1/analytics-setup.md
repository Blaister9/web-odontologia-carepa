# Configuración de analítica

## Estado actual

La web emite `whatsapp_click` con `page_path`, `cta_location`, `service_slug`, `journey_id` y `campaign`, y puede enviar a `gtag`/`fbq` cuando están presentes. Este evento confirma un clic, no una conversación ni una cita.

## Auditoría de eventos

En el código actual solo existe una instrumentación consistente para `whatsapp_click`; además hay un evento legado `click_whatsapp_campaign` en una sección. No se encontró una implementación completa de `page_view`, `campaign_entry`, `journey_selected` u `option_selected`, ni un Measurement ID de GA4 confirmado. Por tanto, esos eventos son un diseño pendiente, no capacidad actual.

## Eventos propuestos y datos permitidos

| Evento | Uso | Parámetros permitidos | Clasificación |
|---|---|---|---|
| `page_view` | Diagnóstico de página | page_path y UTM permitidas | Micro |
| `campaign_entry` | Entrada desde `/c/*` | campaign_slug, source, medium | Micro |
| `journey_selected` | Elección de necesidad | journey_id | Micro |
| `option_selected` | Elección dentro del journey | journey_id, option_id | Micro |
| `service_view` | Interés de contenido | service_slug, page_path | Micro |
| `whatsapp_click` | Inicio de salida a WA | campos existentes, UTM | Micro |
| `conversation_started` | Registro humano agregado | plataforma/campaña, fecha | Secundario |
| `appointment_requested` | Solicitud explícita | plataforma/campaña, fecha | Secundario |
| `appointment_confirmed` | Cita acordada | plataforma/campaña, fecha | Primario |
| `appointment_attended` | Asistencia | plataforma/campaña, fecha | Negocio |

Nunca enviar nombre, teléfono, correo, texto del chat, síntomas, diagnóstico, tratamiento, foto, historia clínica ni identificadores publicitarios unidos a información de salud.

## UTM canónica

- Google: `utm_source=google&utm_medium=cpc&utm_campaign=pa_v1_{geo}_{intent}&utm_content={adgroup}_{creative}`.
- Meta: `utm_source=meta&utm_medium=paid_social&utm_campaign=pa_v1_{geo}_{angle}&utm_content={placement}_{creative}`.
- Orgánico: `utm_source=instagram|facebook|google_business&utm_medium=organic&utm_campaign=pa_v1_support&utm_content={post}`.
- Usar solo minúsculas, ASCII, guiones bajos y valores sin datos personales.

## Implementación previa al lanzamiento

1. Verificar dominio y propiedad de contenedores.
2. Documentar consentimiento y política de privacidad antes de agregar tags.
3. Probar UTM desde `/c/{slug}` hasta la URL de WhatsApp.
4. Confirmar que parámetros no contienen PII ni términos clínicos libres.
5. Crear conversiones de plataforma solo después del QA.
6. Mantener `whatsapp_click` como secundaria; no usarlo como cita.
7. Registrar citas en una hoja privada basada en `appointment-attribution.csv`; el repositorio conserva solo la plantilla vacía.

No inventar un GA4 Measurement ID. Si se decide implementar los cuatro eventos pendientes, debe hacerse en una fase funcional separada con QA y consentimiento aprobados.

## Importación futura

La importación de `appointment_confirmed` requiere proceso aprobado, consentimiento aplicable, deduplicación y controles de acceso. No subir listas de pacientes ni datos clínicos a plataformas publicitarias. Hasta que exista ese proceso, evaluar manualmente con totales agregados.
