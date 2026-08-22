# Arquitectura Meta V1

## Campaña inicial

`M_TRAFFIC_PROSPECTING_CAREPA_V1`

- Objetivo: Traffic.
- Conversion location: Website.
- Performance goal: landing page views, si la cuenta y tag lo permiten; si no, link clicks sólo como fase técnica corta.
- Placements: Advantage+ placements, con assets separados 4:5 y 9:16 ya preparados.
- Edad: 18+.
- Género: todos.
- Targeting detallado: ninguno en V1.
- Audiencias personalizadas/remarketing: HOLD.

## Ad sets

| Ad set | Ubicación | Estado inicial | Nota |
|---|---|---|---|
| `AS_CAREPA_BROAD_18P` | Carepa | ON en todos los escenarios | Núcleo |
| `AS_APARTADO_BROAD_18P` | Apartadó | Medio/Alto | Competencia más fuerte; medir aparte |
| `AS_CHIGORODO_BROAD_18P` | Chigorodó | Medio/Alto | Medir aparte |
| `AS_TURBO_BROAD_18P` | Turbo | HOLD | Sólo test con presupuesto Alto |

No usar intereses de “dolor dental”, condiciones médicas, inseguridad corporal o salud. La geografía es la restricción operativa; el creativo y el sistema encuentran respuesta.

## Ads y ángulos

1. Valoración: “No necesitas saber el tratamiento”.
2. Sonrisa: “Primero valorar, luego decidir”.
3. Confianza: equipo real.
4. Local: consultorio real en Carepa.
5. Prevención: cuidado desde la valoración.

Cada ad usa un solo ángulo y una URL UTM propia. Ver `meta-ads-copy.csv`.

## Cuándo probar WhatsApp directo

Crear `M_MSG_WHATSAPP_PILOT_V1` sólo si:

- [ ] WhatsApp Business está vinculado a la cuenta correcta.
- [ ] La bandeja tiene cobertura real durante programación.
- [ ] Mensaje de bienvenida y máximo de preguntas aprobados.
- [ ] Existe registro consistente de conversación, cita solicitada y confirmada.
- [ ] Se probó desde Facebook e Instagram sin enviar datos clínicos a Meta.
- [ ] Nataly aprobó el copy y la ruta de escalamiento.

El piloto usa Leads/Messaging o la opción vigente que Meta muestre para conversaciones; la interfaz debe verificarse el día del lanzamiento.

## Cuándo NO usar WhatsApp directo

- Cuando la bandeja no responde.
- Cuando se optimiza sólo a “conversación” pero nadie registra citas.
- Cuando el anuncio sugiere que Meta conoce una condición del usuario.
- Cuando el flujo automatizado solicita síntomas detallados, fotos clínicas o PII innecesaria.

## Ventana de aprendizaje

No editar presupuesto, audiencia y creativo a la vez. En mercado local el volumen puede ser bajo; la lectura mínima es de 7 días y la decisión comercial semanal usa citas confirmadas, no el estado de “learning” como excusa.

## Fuentes

- <https://www.facebook.com/business/ads/ad-objectives/traffic>
- <https://www.facebook.com/business/ads/click-to-message-ads>
- <https://www.facebook.com/business/ads/ad-targeting>
- <https://www.facebook.com/business/ads/facebook-instagram-reels-ads>
