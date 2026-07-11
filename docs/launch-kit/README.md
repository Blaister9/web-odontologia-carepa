# Launch Kit de Captación de 30 días

Kit operativo para llevar personas desde Instagram, Facebook, estados de WhatsApp, Google Business Profile, recomendaciones y QR hacia un recorrido relevante de la web y, después, a una conversación contextual en WhatsApp.

## Cómo funciona

```text
Contenido o QR
→ enlace específico con UTM
→ recorrido web según intención
→ WhatsApp contextual
→ equipo consulta agenda y continúa la atención
```

La web orienta y prepara el mensaje. No diagnostica, no agenda, no abre WhatsApp automáticamente y no almacena la selección. La confirmación de disponibilidad, cita e información vigente siempre corresponde al equipo humano.

## Qué fue creado

### Campañas y entradas web

- `src/data/campaigns.ts`: configuración central de las siete campañas, sus mensajes, recorrido y opción inicial.
- `src/pages/c/[slug].tsx`: entradas breves que redirigen temporalmente a la home, conservan UTM y no crean páginas duplicadas indexables.
- Integración del embudo: recibe únicamente campañas, recorridos y opciones permitidos; cualquier valor desconocido se ignora.

Rutas disponibles:

| Ruta | Recorrido inicial |
|---|---|
| `/c/urgencias` | Tengo dolor o una molestia. |
| `/c/sonrisa` | Quiero mejorar mi sonrisa. |
| `/c/limpieza` | Cuidado oral, con limpieza o profilaxis seleccionada. |
| `/c/ortodoncia` | Estética, con ortodoncia seleccionada. |
| `/c/valoracion` | Cuidado oral, con valoración general seleccionada. |
| `/c/uraba` | Recorrido general para Carepa, veredas cercanas y Urabá. |

### Enlaces y distribución

- `campaign-links.md`: matriz legible de campañas, canales, UTM y destinos.
- `campaign-links.csv`: versión para filtrar, copiar o importar a una hoja de trabajo.
- `calendar-30-days.md`: calendario operativo legible.
- `calendar-30-days.csv`: versión editable del calendario con responsable y estado.

La matriz contiene una fila por combinación de campaña y canal. Es la fuente que se debe usar al publicar; no se crean enlaces manualmente desde un chat o una pieza.

### QR y piezas visuales

- `public/marketing/qr/svg/`: QR vectoriales para impresión.
- `public/marketing/qr/png/`: QR en mapa de bits para documentos y pruebas.
- `public/marketing/templates/`: plantillas SVG editables de lanzamiento, urgencias, sonrisa, limpieza, ortodoncia y valoración.
- `public/marketing/manifest.json`: inventario legible por herramientas con dimensiones, destinos y nombres.
- `public/marketing/README.md`: guía técnica de variantes, exportación y uso.

Convenciones:

- Plantilla: `{campaña}-{formato}.svg`.
- Formatos: `feed-square`, `feed-portrait`, `story`, `meta-horizontal`, `google-business`, `a5` y `counter-card`.
- QR: `{destino}-{variante}.{extensión}`.
- Variantes QR: `clean`, `framed-cta`, `light` y `mono`.

### Operación y contenido

- `social-copy.md`: 12 publicaciones, 16 historias o estados, 6 guiones de Reels, 4 publicaciones de Google Business, 4 conceptos de anuncios, 8 hooks y 8 CTA.
- `whatsapp-business-playbook.md`: flujo, respuestas rápidas, etiquetas, criterios y escalamiento.
- `publishing-guide.md`: pasos por canal, uso de UTM y QR, reutilización y registro manual sin datos sensibles.
- `photography-brief.md`: tomas, formatos, dirección visual, privacidad, consentimientos y entrega para una sesión real.

## Regla de fuente única

| Necesidad | Consultar primero |
|---|---|
| Cambiar datos o comportamiento de una campaña | `src/data/campaigns.ts` |
| Encontrar el enlace para un canal | `campaign-links.csv` o `campaign-links.md` |
| Saber qué publicar y cuándo | `calendar-30-days.csv` o `calendar-30-days.md` |
| Copiar un texto aprobado | `social-copy.md` |
| Responder y etiquetar un chat | `whatsapp-business-playbook.md` |
| Publicar, imprimir o registrar | `publishing-guide.md` |
| Preparar la sesión fotográfica | `photography-brief.md` |
| Identificar un recurso visual o QR | `public/marketing/manifest.json` |

No mantener versiones paralelas de enlaces o copys en documentos personales sin fecha. Si se aprueba un cambio permanente, quien sea responsable actualiza primero la fuente correspondiente y vuelve a validar los derivados.

## Responsabilidades

### Dra. Nataly Jiménez

Puede:

- Aprobar el enfoque clínico y el tono final de copys, guiones y respuestas.
- Publicar videos en primera persona, historias educativas y contenido del equipo.
- Grabar los Reels de `social-copy.md` con celular mientras se realiza la sesión profesional.
- Confirmar qué información real de agenda, ubicación, servicios y valores puede comunicarse.
- Autorizar las fotografías que representan al consultorio y a su equipo.
- Resolver preguntas clínicas escaladas desde WhatsApp.

Debe evitar editar directamente UTM, rutas, QR o archivos técnicos. Un cambio clínico aprobado se comunica a redes y desarrollo para mantener una sola versión.

### Vanesa

Puede:

- Configurar y usar las respuestas rápidas y etiquetas de WhatsApp Business.
- Hacer primera respuesta, identificar el motivo general, consultar agenda y proponer opciones reales.
- Confirmar citas solo cuando fecha y hora estén acordadas.
- Publicar estados y las actualizaciones de Google Business asignadas en el calendario.
- Llevar el registro manual privado y preparar el resumen semanal sin datos personales.
- Reportar preguntas repetidas, enlaces rotos o mensajes precargados incorrectos.

No debe diagnosticar, indicar manejo clínico, inventar disponibilidad ni modificar textos clínicos sin aprobación de Nataly.

### Persona que administra redes

Puede:

- Preparar, programar y publicar Instagram y Facebook según el calendario.
- Exportar los SVG al formato final del canal sin cambiar la identidad ni deformar QR.
- Reutilizar una idea en varios formatos con un enlace UTM diferente por canal.
- Adaptar saltos de línea y longitud, conservando el sentido, el CTA y las reglas clínicas.
- Marcar contenidos como `pendiente`, `aprobado` o `publicado`.
- Entregar un resumen de piezas publicadas y problemas de distribución.

Debe pedir aprobación a Nataly para nuevas afirmaciones clínicas y a desarrollo para crear una ruta, campaña, QR o UTM que no exista.

### Desarrollo

Debe:

- Mantener la configuración central, las rutas `/c` y la integración segura con el embudo.
- Regenerar y validar matrices, QR y recursos derivados cuando cambie un destino aprobado.
- Comprobar que el dominio canónico conserve `www`, que las UTM sobrevivan al redirect y que no se indexen entradas duplicadas.
- Probar rutas, cambio entre recorridos, teclado, responsive y destino de WhatsApp antes de desplegar.
- Actualizar los activos web autorizados después de la sesión fotográfica, sin reemplazar imágenes por anticipado.
- Evitar que datos de pacientes, agendas, conversaciones o consentimientos entren al repositorio.

No debe cambiar copy clínico, disponibilidad, horarios, precios o dirección por su cuenta.

## Flujo de aprobación

| Recurso | Prepara | Aprueba | Publica o ejecuta |
|---|---|---|---|
| Copy orgánico | Redes | Nataly | Redes o Nataly, según calendario. |
| Guion de Reel | Redes | Nataly | Nataly. |
| Estado de WhatsApp | Vanesa o redes | Nataly cuando tenga contenido clínico | Vanesa o Nataly. |
| Respuesta rápida | Vanesa | Nataly | Vanesa o persona autorizada. |
| Google Business | Vanesa o redes | Nataly | Cuenta autorizada. |
| Anuncio pago | Redes | Nataly y responsable del presupuesto | Administrador de pauta autorizado. |
| Cambio de ruta, UTM o QR | Desarrollo | Responsable de campaña; Nataly valida el texto | Desarrollo. |
| Fotografía | Fotógrafo | Nataly y cada persona según consentimiento | Redes o desarrollo después de aprobación. |

## Datos reales pendientes

Estos pendientes no se deben completar con suposiciones:

| Dato o decisión | Para qué se necesita | Responsable de entregarlo o aprobarlo |
|---|---|---|
| Dirección pública exacta y enlace de mapa | Respuesta `/ubicacion`, ficha local y futuras piezas | Nataly. |
| Horarios que sí pueden publicarse | Respuesta `/horarios` y perfiles | Nataly. |
| Tarifas o reglas vigentes para comunicar valores | Respuesta `/precios`; solo si se decide publicarlas | Nataly. |
| URL oficial para solicitar reseña de Google | Futuro QR y mensajes de reseña | Nataly o Vanesa desde el perfil oficial. |
| Accesos y URL oficiales de Instagram y Facebook | Publicación y verificación de perfiles | Titular de las cuentas. |
| Responsables y franjas reales de WhatsApp | Cobertura de bandeja y escalamiento | Nataly y Vanesa. |
| Protocolo clínico para mensajes prioritarios | Escalamiento seguro | Nataly. |
| Regla de seguimiento: intervalo y cantidad | Evitar insistencia o conversaciones abandonadas | Nataly y Vanesa. |
| Presupuesto, cobertura y cuenta publicitaria | Activar los cuatro conceptos de anuncios | Responsable comercial. |
| Fecha, participantes y permisos de fotografía | Producir y usar imágenes reales | Nataly y fotógrafo. |

El enlace de reseñas de Google está pendiente de forma intencional. No existe QR de reseñas en este kit hasta recibir la URL oficial.

## Secuencia recomendada de lanzamiento

### Fase 1. Aprobación

1. Nataly revisa copys, guiones y respuestas rápidas.
2. Nataly y Vanesa confirman agenda interna, escalamiento y quién responde WhatsApp.
3. Redes asigna responsables y estados del calendario.
4. Los datos pendientes permanecen como pendientes; no se completan para “cerrar” la pieza.

### Fase 2. Preparación técnica y operativa

1. Desarrollo despliega y prueba las seis rutas `/c`.
2. El equipo abre una muestra de enlaces de cada canal y escanea todos los destinos QR.
3. Vanesa configura respuestas rápidas, etiquetas y vista de agenda.
4. Redes exporta la primera semana de piezas y comprueba zonas seguras.
5. Nataly da aprobación final a la primera semana.

### Fase 3. Salida pública

1. Actualizar el enlace principal de Instagram con la URL `instagram_bio` aprobada.
2. Publicar la pieza general, una historia o estado con enlace y la actualización de Google Business programada.
3. Probar cada publicación desde una cuenta o dispositivo distinto.
4. Mantener una persona responsable de la bandeja de WhatsApp durante las franjas internas acordadas.
5. Registrar atribución básica solo cuando la persona declare la fuente.

### Fase 4. Optimización manual

1. Revisar semanalmente publicaciones, conversaciones, citas solicitadas y confirmadas.
2. Identificar dudas frecuentes y fricciones sin copiar conversaciones ni datos personales.
3. Ajustar CTA, distribución o respuesta rápida con aprobación del rol correspondiente.
4. Cerrar el día 30 con un resumen agregado y decisiones para el siguiente ciclo.

## Checklist de primera semana

### Antes de publicar

- [ ] Rama aprobada, validaciones pasadas y despliegue disponible.
- [ ] Las seis rutas `/c` abren el recorrido correcto desde celular.
- [ ] Todos los enlaces de la primera semana usan el dominio con `www` y UTM del canal.
- [ ] Cada QR que se va a imprimir fue escaneado desde una prueba física.
- [ ] WhatsApp abre el número oficial y muestra el mensaje correspondiente.
- [ ] Las respuestas rápidas y etiquetas están configuradas.
- [ ] Nataly aprobó los copys de la semana.
- [ ] Hay una persona asignada a la bandeja en las franjas acordadas.
- [ ] El registro manual privado está creado sin columnas de identificación personal.
- [ ] Dirección, horarios o valores no confirmados siguen fuera de publicaciones.

### Durante la semana

- [ ] Enlace de bio actualizado y probado.
- [ ] Tres publicaciones distribuidas según el calendario, sin exigir publicación diaria.
- [ ] Entre cuatro y seis historias o estados reutilizados con su enlace de canal.
- [ ] Una actualización de Google Business publicada y probada.
- [ ] Cada contenido cambió de `aprobado` a `publicado` después de verificarse.
- [ ] Mensajes clasificados y respondidos con el playbook.
- [ ] Errores de ruta, CTA, QR o mensaje reportados a desarrollo.
- [ ] Atribución registrada únicamente cuando fue mencionada.

### Al cerrar la semana

- [ ] Conteo agregado por fuente y campaña.
- [ ] Total de citas solicitadas y confirmadas, sin identificar personas.
- [ ] Lista de preguntas frecuentes sin copiar textos privados.
- [ ] Revisión de capacidad de respuesta antes de programar la semana siguiente.
- [ ] Ajustes de copy aprobados por Nataly y ajustes técnicos asignados a desarrollo.

## Checklist del primer mes

- [ ] Se sostuvo una cadencia aproximada de tres publicaciones semanales.
- [ ] Se publicaron entre cuatro y seis historias o estados por semana.
- [ ] Se publicó una actualización semanal en Google Business.
- [ ] Los Reels se usaron como apoyo o reemplazo planificado, sin aumentar una carga insostenible.
- [ ] Cada canal usó sus UTM y no un enlace genérico copiado para todo.
- [ ] QR impresos siguieron legibles y apuntando al destino esperado.
- [ ] La bandeja no conserva conversaciones accionables bajo una etiqueta incorrecta.
- [ ] Los seguimientos respetaron la regla interna aprobada.
- [ ] El registro manual no contiene nombres, teléfonos, detalles clínicos ni capturas.
- [ ] Se consolidaron resultados por fuente, campaña, cita solicitada y cita confirmada.
- [ ] Se identificaron contenidos útiles para reutilizar y preguntas que necesitan respuesta.
- [ ] Nataly revisó cualquier ajuste clínico.
- [ ] Desarrollo corrigió fallas de ruta o tracking y volvió a validar derivados.
- [ ] Se revisó si ya existe el enlace oficial de reseñas; si no, permanece pendiente.
- [ ] Se definieron aprendizajes y una cadencia sostenible para el siguiente mes.

## Cierre del ciclo

El kit se considera operando correctamente cuando cada publicación tiene un enlace identificable, la ruta abre el recorrido esperado, WhatsApp recibe un contexto útil y el equipo puede continuar sin inventar información. El éxito del primer mes se revisa con datos agregados y calidad operativa, no con información clínica ni datos personales dentro del repositorio.
