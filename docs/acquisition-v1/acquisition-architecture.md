# Arquitectura de adquisición V1

## North star

**Citas confirmadas atribuibles por canal y campaña**, revisadas semanalmente sin PII. Los clics y conversaciones son pasos del funnel, no el resultado final.

## Papel de cada canal

| Canal | Rol | Qué captura | Qué no debe hacer |
|---|---|---|---|
| Google Search | Demanda explícita | Personas buscando proveedor o servicio local | Crear demanda estética amplia |
| Meta | Consideración y confianza | Personas adultas locales que responden a equipo, espacio y orientación | Inferir una condición dental o salud |
| Google Business | Confianza de proximidad | Búsqueda de marca/local, dirección, llamada, ruta | Publicar datos no confirmados |
| Orgánico | Validación y segunda exposición | Equipo, consultorio, educación, respuestas | Copiar el mismo anuncio todos los días |
| WhatsApp | Conversación y agenda | Motivo general, disponibilidad, cita | Diagnosticar o prometer cupo |

## Funnel

```text
Impresión
→ clic / landing page view
→ recorrido /c relevante
→ clic a WhatsApp
→ conversación iniciada
→ cita solicitada
→ cita confirmada
→ cita asistida (opcional, sistema clínico privado)
```

## Campañas

### Google

- `G_SEARCH_CORE_CAREPA_V1`: local + valoración + urgencias + sonrisa.
- `G_SEARCH_NEIGHBORS_V1`: Apartadó y Chigorodó, sólo tras estabilizar Core.
- Turbo: no se mezcla; test posterior `G_SEARCH_TURBO_V1`.

### Meta

- `M_TRAFFIC_PROSPECTING_CAREPA_V1`: tres ad sets por geografía si el presupuesto lo permite.
- `M_TRAFFIC_CREATIVE_TEST_V1`: ángulos valoración, confianza, local, prevención y sonrisa.
- `M_MSG_WHATSAPP_PILOT_V1`: HOLD hasta completar condiciones operativas.
- Remarketing: HOLD por sensibilidad del contexto de salud y falta de revisión de privacidad/consentimiento.

## Convención UTM

| Campo | Google | Meta | Orgánico |
|---|---|---|---|
| `utm_source` | `google` | `meta` | `instagram`, `facebook`, `google`, `whatsapp` |
| `utm_medium` | `cpc` | `paid_social` | `social`, `organic`, `status` |
| `utm_campaign` | campaña estable | campaña estable | convención existente |
| `utm_content` | RSA/grupo | asset/ángulo/formato | ubicación de la pieza |
| `utm_term` | `{keyword}` en Google | omitido | omitido |

No introducir datos personales o texto libre en UTM.

## URLs base pagadas

- Google local: `https://www.dranatalyjimenez.com/c/uraba?utm_source=google&utm_medium=cpc&utm_campaign=google_search_core_v1&utm_content=rsa_local&utm_term={keyword}`
- Google valoración: `https://www.dranatalyjimenez.com/c/valoracion?utm_source=google&utm_medium=cpc&utm_campaign=google_search_core_v1&utm_content=rsa_valoracion&utm_term={keyword}`
- Google urgencias: `https://www.dranatalyjimenez.com/c/urgencias?utm_source=google&utm_medium=cpc&utm_campaign=google_search_core_v1&utm_content=rsa_urgencias&utm_term={keyword}`
- Google sonrisa: `https://www.dranatalyjimenez.com/c/sonrisa?utm_source=google&utm_medium=cpc&utm_campaign=google_search_core_v1&utm_content=rsa_sonrisa&utm_term={keyword}`
- Meta se define por pieza en `meta-ads-copy.csv`.

## Conversiones

| Evento | Tipo | Uso |
|---|---|---|
| `landing_view` | Diagnóstico | Calidad de entrega; no conversión primaria |
| `journey_select` | Micro | Interés en intención; no disponible todavía como evento productivo |
| `whatsapp_click` | Micro | Ya existe en el código si hay tag consumidor |
| `conversation_started` | Secundaria | Manual o plataforma; requiere definición consistente |
| `appointment_requested` | Secundaria | Hoja privada agregada |
| `appointment_confirmed` | **Primaria de negocio** | Decisión de presupuesto |

No optimizar a “cita confirmada” en plataforma hasta tener volumen y un mecanismo fiable. Mientras tanto, optimizar a landing page view / conversación y juzgar semanalmente con citas confirmadas.

## Dependencias y gates

1. **Datos:** dirección, horario, GBP, cuentas, presupuesto.
2. **Operación:** responsable WhatsApp, SLA, agenda real, escalamiento clínico.
3. **Medición:** tags y consentimiento aprobados; hoja privada preparada.
4. **QA:** links, UTMs, copy, video, políticas y responsive.
5. **Aprobación humana:** Nataly + presupuesto + administrador de pauta.

Si un gate no pasa, la campaña permanece en borrador.
