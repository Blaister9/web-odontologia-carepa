# Playbook de WhatsApp Business

Guía operativa para convertir una visita a la web en una conversación clara y, cuando haya disponibilidad y la persona lo decida, en una cita confirmada. El número oficial usado por el sitio es `573128311449`.

## Qué hace la web y qué hace el equipo

| Etapa | La web | La persona encargada de WhatsApp |
|---|---|---|
| Orientación inicial | Muestra recorridos por urgencia, sonrisa y cuidado oral. | Lee el motivo que llega en el mensaje y confirma que entendió. |
| Selección | Permite elegir una opción y prepara un texto contextual. | Hace solo las preguntas necesarias para continuar. |
| Envío | No abre ni envía WhatsApp automáticamente; la persona conserva el control. | Responde desde el número oficial y no traslada la conversación a cuentas personales. |
| Información | Explica que cada recomendación depende de valoración profesional. | Consulta agenda y comunica únicamente información vigente y aprobada. |
| Cierre | Lleva al chat, pero no agenda ni confirma una cita. | Propone opciones reales, recibe aceptación y confirma fecha, hora y ubicación. |

La web no diagnostica, no promete disponibilidad y no almacena la selección. El mensaje recibido es un punto de partida; no reemplaza el criterio de la profesional ni la confirmación humana de agenda.

## Flujo de atención

```text
NUEVO CONTACTO
→ IDENTIFICAR MOTIVO
→ CONSULTAR DISPONIBILIDAD
→ PROPONER CITA
→ CONFIRMAR
→ SEGUIMIENTO
```

### 1. Nuevo contacto

1. Aplicar la etiqueta **Nuevo contacto**.
2. Saludar y confirmar el motivo que aparece en el mensaje.
3. Si el texto está incompleto, preguntar: “¿Qué te gustaría revisar?”.
4. No solicitar historia clínica, fotografías, documentos o datos que no sean necesarios para esta etapa.

### 2. Identificar motivo

Clasificar en una categoría operativa amplia: urgencia o molestia, valoración general, sonrisa, limpieza, ortodoncia, ubicación u otra consulta. No convertir esta clasificación en un diagnóstico.

Si el motivo no está claro, usar una sola pregunta a la vez:

> Para orientarte con la agenda, ¿quieres consultar por una molestia, por mejorar tu sonrisa o por cuidado general?

### 3. Consultar disponibilidad

1. Cambiar a **Por responder** mientras se valida la agenda.
2. Revisar el calendario autorizado; no estimar horarios de memoria.
3. Si se necesita confirmación de Nataly, decirlo con claridad y volver a la conversación cuando exista una respuesta real.
4. No usar “te atendemos de inmediato”, “siempre hay cupo” o expresiones equivalentes.

### 4. Proponer cita

Ofrecer únicamente opciones visibles y vigentes en agenda. Presentar pocas alternativas para facilitar la decisión y aclarar que la cita queda pendiente hasta que la persona elija una.

> Tengo estas opciones disponibles: [opción 1] y [opción 2]. ¿Cuál te funciona mejor?

Aplicar **Por agendar** cuando la persona muestra intención y falta elegir o confirmar un espacio.

### 5. Confirmar

La cita solo queda confirmada cuando ambas partes han acordado fecha y hora. Enviar el resumen con la plantilla `/confirmada`, aplicar **Cita confirmada** y registrar la cita únicamente en la agenda operativa autorizada.

### 6. Seguimiento

- Si falta una respuesta de la persona, aplicar **Seguimiento** y usar `/sinrespuesta` en el plazo que defina internamente el consultorio.
- Si la persona sigue interesada, retomar desde disponibilidad.
- Si decide no continuar o el proceso terminó, aplicar **Cerrado**.
- Evitar mensajes repetidos. Definir antes del lanzamiento cuántos seguimientos se permiten y en qué intervalo.

## Respuestas rápidas

Configurar estas respuestas en WhatsApp Business. Los campos entre corchetes deben completarse antes de enviar; nunca se dejan visibles al paciente.

### `/saludo` — saludo inicial

> Hola, gracias por escribir al Consultorio Odontológico Dra. Nataly Jiménez. Soy [nombre de quien responde]. Para orientarte, ¿me cuentas brevemente qué te gustaría revisar?

### `/valoracion` — valoración general

> Claro. Una valoración general permite revisar tu motivo de consulta y explicarte los siguientes pasos. ¿Qué te gustaría revisar y qué día o franja te funciona para consultar disponibilidad?

### `/urgencia` — urgencia o molestia

> Gracias por contarnos. Para consultar disponibilidad, ¿qué ocurrió y desde cuándo notas la molestia? No podemos diagnosticar por WhatsApp, pero sí revisar la agenda y orientarte sobre el siguiente paso.

**Uso interno:** dar prioridad a la lectura de estos mensajes. No indicar medicamentos ni manejo clínico por cuenta propia. Escalar a la profesional cualquier caso que requiera valoración prioritaria y seguir el protocolo clínico aprobado por Nataly.

### `/sonrisa` — diseño o mejora de sonrisa

> Gracias por escribirnos. Para orientar opciones de diseño o mejora de sonrisa primero se realiza una valoración y se conversa sobre lo que te gustaría cambiar. ¿Quieres que revisemos disponibilidad para una cita?

### `/limpieza` — limpieza o profilaxis

> Claro. La revisión permite confirmar si necesitas limpieza o profilaxis y orientar el cuidado de dientes y encías. ¿Qué día o franja te funciona para consultar disponibilidad?

### `/ortodoncia` — ortodoncia

> Gracias por tu interés. La valoración de ortodoncia permite revisar alineación y mordida antes de definir alternativas. ¿Quieres que consultemos disponibilidad para una cita?

### `/ubicacion` — ubicación

> La atención es en Carepa, Antioquia. La dirección exacta y las indicaciones vigentes se confirman al agendar. ¿Quieres que revisemos disponibilidad?

Cuando la dirección oficial esté aprobada, se puede reemplazar la segunda frase por la dirección y el enlace de mapa verificados por el consultorio.

### `/horarios` — horarios pendientes de confirmación

> La agenda se confirma según disponibilidad. Cuéntame qué día y franja te funciona, y reviso las opciones vigentes antes de confirmarte.

No añadir un horario fijo hasta que Nataly lo entregue y autorice por escrito para este canal.

### `/precios` — consulta de precios

> Con gusto te orientamos. El valor depende de lo que necesites y, en varios casos, se confirma después de una valoración. ¿Sobre qué servicio quieres consultar? Revisaré la información vigente antes de responderte.

Si existe una tarifa aprobada, comunicarla exactamente como aparece en la fuente interna vigente. No improvisar valores, planes, promociones ni formas de pago.

### `/seguimiento` — persona interesada

> Hola, retomo tu consulta sobre [motivo general]. Si todavía quieres agendar, puedo revisar las opciones disponibles. ¿Deseas que continuemos?

### `/confirmada` — cita confirmada

> Tu cita quedó confirmada para el [fecha] a las [hora], en Carepa. Motivo: [motivo general]. Ubicación e indicaciones: [información oficial]. Si necesitas hacer un cambio, avísanos por este mismo chat.

Revisar fecha, hora e información de ubicación antes de enviar. No usar esta respuesta si el espacio sigue pendiente.

### `/sinrespuesta` — persona que dejó de responder

> Hola. Quedó pendiente tu consulta sobre [motivo general]. Si todavía deseas revisar disponibilidad, responde a este mensaje y con gusto continuamos. Si ya no lo necesitas, no tienes que hacer nada.

## Etiquetas sugeridas

| Etiqueta | Cuándo aplicarla | Siguiente acción |
|---|---|---|
| **Nuevo contacto** | Entró una conversación que aún no se ha leído o clasificado. | Saludar e identificar motivo. |
| **Por responder** | El equipo debe validar agenda o información antes de contestar. | Resolver la consulta y responder; no dejarla como archivo permanente. |
| **Interesado** | La persona quiere conocer opciones o continuar la conversación. | Resolver la duda o pasar a disponibilidad. |
| **Por agendar** | Hay intención de cita, pero falta elegir o confirmar espacio. | Proponer opciones reales y pedir elección. |
| **Cita confirmada** | Fecha y hora fueron aceptadas por ambas partes. | Enviar resumen y llevar a la agenda autorizada. |
| **Seguimiento** | Falta una decisión o respuesta después de una conversación activa. | Hacer el seguimiento acordado, una vez por ciclo. |
| **Cerrado** | La consulta terminó, se descartó o ya no requiere acción. | Cerrar sin borrar información necesaria según la política del consultorio. |

Una conversación puede conservar solo la etiqueta que mejor represente su siguiente acción. Así la bandeja muestra trabajo pendiente en lugar de una acumulación de categorías.

## Criterios de respuesta

### Sí hacer

- Presentarse y escribir en mensajes cortos.
- Repetir el motivo con palabras neutrales para confirmar que se entendió.
- Consultar la agenda antes de ofrecer fecha y hora.
- Explicar cuándo hace falta valoración antes de hablar de un tratamiento.
- Dar una instrucción por mensaje cuando la conversación sea compleja.
- Escalar preguntas clínicas a Nataly.

### No hacer

- Diagnosticar, prescribir o interpretar fotografías por iniciativa propia.
- Prometer resultados, duración de tratamiento, prioridad o disponibilidad no confirmada.
- Inventar precios, horarios, promociones o ubicación.
- Pedir información clínica detallada para una hoja de seguimiento comercial.
- Copiar nombres, teléfonos, capturas o conversaciones al repositorio.
- Responder desde cuentas personales si la conversación llegó al canal oficial.

## Reparto operativo recomendado

| Tarea | Responsable principal | Escalamiento |
|---|---|---|
| Primera respuesta y etiquetas | Vanesa o persona autorizada | Nataly si el motivo requiere criterio clínico. |
| Consulta y propuesta de agenda | Vanesa o persona autorizada | Nataly ante cambios o sobrecupos. |
| Respuesta clínica | Nataly | No se delega a redes ni desarrollo. |
| Confirmación y recordatorio | Vanesa o persona autorizada | Nataly si cambia la atención prevista. |
| Problema con enlaces o mensaje precargado | Desarrollo | Nataly valida el texto clínico corregido. |

## Preparación antes de activar campañas

- [ ] Cargar y revisar las 12 respuestas rápidas.
- [ ] Confirmar quién atiende la bandeja en cada franja real.
- [ ] Definir el tiempo objetivo de primera respuesta, sin publicarlo hasta poder cumplirlo.
- [ ] Validar el calendario desde el que se ofrece disponibilidad.
- [ ] Aprobar dirección, enlace de mapa y forma de compartirlos.
- [ ] Definir protocolo clínico de escalamiento para mensajes urgentes.
- [ ] Probar un mensaje desde cada ruta `/c`.
- [ ] Confirmar que ningún mensaje promete una cita antes de revisar agenda.

## Auditoría breve de una conversación

Antes de marcarla como cerrada, verificar:

- [ ] Se entendió el motivo general.
- [ ] La información enviada estaba vigente.
- [ ] No se dio un diagnóstico por chat.
- [ ] Si hubo cita, fecha y hora quedaron explícitas.
- [ ] La etiqueta final representa el estado real.
- [ ] El registro de campaña, si se hizo, no contiene nombre, teléfono, captura ni detalle clínico.
