# Plan de pruebas

## Principio

Cada prueba cambia una sola variable, conserva geografía y presupuesto comparables y decide por citas confirmadas. `whatsapp_click` sirve para diagnóstico, no prueba por sí solo adquisición de pacientes.

| Fase | Días | Hipótesis | Celdas | Decisión |
|---|---:|---|---|---|
| Instrumentación | 0–2 | UTM y eventos llegan completos | QA interno, sin pauta | Corregir antes de publicar |
| Señal inicial | 1–7 | Google local produce intención más cualificada | Local vs valoración | Mantener términos relevantes; excluir ruido |
| Creatividad | 4–14 | Persona/equipo genera más conversaciones cualificadas que espacio | Confianza vs consultorio | Ganador por cita confirmada y calidad |
| Geografía | 8–21 | Apartadó/Chigorodó aportan citas sin degradar eficiencia | Carepa vs corredor | Continuar solo si hay capacidad y citas |
| Destino Meta | 15–30 | Sitio conserva mejor contexto que mensaje directo | Sitio vs WA, solo si WA está listo | No abrir WA directo sin SLA/atribución |

## Tamaño y disciplina

- No declarar ganador antes de siete días completos ni con menos de 10 resultados intermedios por celda; si no hay citas suficientes, declarar “inconcluso”.
- No editar presupuesto, audiencia y creatividad simultáneamente.
- Mantener una pieza control y una variante.
- Registrar fecha, cambio, motivo y efecto en `campaign-master.csv` o bitácora privada.
- Una caída de CTR no justifica pausar si la tasa de cita mejora; un CTR alto no justifica escalar si no hay citas.

## Pruebas en HOLD

- Broad match, Performance Max, Advantage+ expansion, retargeting, audiencias similares, formularios instantáneos y optimización automática a mensajes.
- Ofertas, descuentos, disponibilidad inmediata, antes/después y testimonios de pacientes.
- Turbo hasta tener referencia de Carepa y corredor.
