# Guía de publicación y seguimiento

Esta guía explica cómo llevar cada pieza al recorrido correcto de la web y luego a WhatsApp. El sistema no depende de Analytics durante el primer mes: los resultados básicos se registran manualmente, sin nombres, teléfonos, información clínica ni capturas de conversaciones.

## Principio operativo

```text
PIEZA O PUBLICACIÓN
→ ENLACE UTM DEL CANAL
→ RUTA /c CORRESPONDIENTE
→ RECORRIDO INTERACTIVO
→ WHATSAPP CONTEXTUAL
→ RESPUESTA DEL EQUIPO
```

Las fuentes maestras son:

- Contenido: `social-copy.md`.
- Calendario: `calendar-30-days.md` y `calendar-30-days.csv`.
- Enlaces: `campaign-links.md` y `campaign-links.csv`.
- Plantillas: `public/marketing/templates/`.
- Inventario de recursos: `public/marketing/manifest.json` y `public/marketing/README.md`.
- QR: `public/marketing/qr/svg/` para impresión y `public/marketing/qr/png/` para uso digital o documentos.

No escribir una URL de memoria. Copiar siempre la fila que coincida con **campaña + canal**.

## Mapa rápido de destinos

| Tema de la pieza | Destino |
|---|---|
| Lanzamiento general del sitio | `/` |
| Atención regional | `/c/uraba` |
| Dolor o molestia | `/c/urgencias` |
| Mejorar la sonrisa | `/c/sonrisa` |
| Limpieza o profilaxis | `/c/limpieza` |
| Ortodoncia | `/c/ortodoncia` |
| Valoración general | `/c/valoracion` |

## Cómo escoger el enlace correcto

| Lugar donde se comparte | Canal que se busca en la matriz |
|---|---|
| Enlace principal del perfil de Instagram | `instagram_bio` |
| Sticker de enlace en una historia | `instagram_story` |
| Publicación de Instagram | `instagram_post` |
| Publicación orgánica de Facebook | `facebook_post` |
| Anuncio de Meta | `facebook_ad` |
| Estado de WhatsApp | `whatsapp_status` |
| Mensaje individual autorizado | `whatsapp_direct` |
| Publicación de Google Business Profile | `google_business` |
| Pieza impresa o QR de mostrador | `qr_print` |
| Enlace compartido por recomendación | `referral` |

Dos enlaces pueden llegar a la misma ruta y aun así ser distintos porque identifican su origen. No borrar ni cambiar `utm_source`, `utm_medium`, `utm_campaign` o `utm_content`.

## Verificación de un enlace antes de publicar

1. Copiarlo desde la matriz, sin recortarlo ni volverlo a escribir.
2. Confirmar que empieza por `https://www.dranatalyjimenez.com/`.
3. Revisar que la ruta `/c` corresponda al tema.
4. Abrirlo en una ventana privada del celular.
5. Verificar que llega a la home y muestra o destaca el recorrido esperado.
6. Cambiar de opción y regresar para comprobar que la persona conserva el control.
7. Pulsar el CTA de WhatsApp, revisar el número y leer el mensaje; no enviarlo durante la prueba.
8. Guardar la URL aprobada en la herramienta de publicación sin quitar sus UTM.

Si falla un enlace, detener esa publicación y avisar a desarrollo. No reemplazarlo por la home ni por un enlace directo improvisado.

## Enlace en la bio de Instagram

Para el lanzamiento, usar como enlace principal la fila `instagram_bio` de la campaña `lanzamiento`.

1. Entrar a la cuenta oficial con acceso autorizado.
2. Abrir la edición del perfil y la sección de enlaces externos.
3. Usar como título visible: **Elige cómo empezar**.
4. Pegar el enlace completo de la matriz, incluido todo lo que aparece después de `?`.
5. Guardar y abrir el perfil como visitante.
6. Probar el enlace desde un celular y verificar el recorrido.
7. Registrar la fecha del cambio en el calendario operativo.

Para una publicación específica de limpieza, urgencias u ortodoncia, acompañar el post con una historia que use el sticker de enlace de esa campaña. Así no es necesario cambiar la bio para cada contenido.

## Historias de Instagram y estados de WhatsApp

1. Elegir el bloque de contenido en `social-copy.md` o el programado en el calendario.
2. Usar la plantilla `{campaña}-story.svg` y su exportación final aprobada para publicar.
3. Confirmar que texto, logo y CTA estén dentro de la zona segura.
4. En Instagram, agregar el sticker con la fila `instagram_story` de esa campaña.
5. En WhatsApp, adjuntar el enlace `whatsapp_status` en el texto del estado o usar la función de enlace disponible en la cuenta.
6. Abrir el enlace publicado desde otro dispositivo o perfil y validar el destino.

No usar una captura del enlace ni poner una URL tan pequeña que no pueda copiarse. Si la plataforma no deja un enlace pulsable, escribir un CTA claro hacia la bio y reutilizar la historia con sticker.

## Publicaciones de Instagram y Facebook

1. Seleccionar el formato:
   - `feed-square` o `feed-portrait` para Instagram.
   - `meta-horizontal` o `feed-square` para Facebook.
2. Copiar el texto aprobado de `social-copy.md` y ajustar solo saltos de línea.
3. En Facebook, usar la fila `facebook_post` de la campaña.
4. En Instagram, usar la fila `instagram_post` donde la plataforma permita asociar el enlace y reforzar con historia enlazada. Si el post no admite enlace pulsable, mantener el CTA hacia la bio o la historia.
5. Agregar texto alternativo que describa la pieza sin repetir todo el copy.
6. Revisar la vista previa en celular antes de publicar.
7. Marcar el contenido como `publicado` en el calendario después de comprobarlo en vivo.

## Publicaciones en Google Business Profile

1. Entrar al perfil oficial con la cuenta autorizada.
2. Crear una publicación o actualización, según las opciones disponibles en el perfil.
3. Elegir el texto de la sección de Google Business en `social-copy.md`.
4. Subir el visual `{campaña}-google-business.svg` exportado a un formato aceptado por la plataforma.
5. Escoger el botón sugerido en el copy.
6. Pegar la fila `google_business` de la misma campaña.
7. Revisar que no haya horarios, valores o disponibilidad no confirmados.
8. Publicar y probar el botón desde la vista pública.
9. Registrar fecha, campaña y estado en el calendario.

No crear una publicación para solicitar reseñas ni un QR de reseñas hasta recibir y validar el enlace oficial de Google.

## Uso de QR impresos

La convención de archivo es `{destino}-{variante}`. Los destinos son `web-general`, `urgencias`, `sonrisa`, `limpieza`, `ortodoncia`, `valoracion`, `uraba` y `whatsapp-directo`.

| Uso | Archivo recomendado |
|---|---|
| Volante o tarjeta con CTA | `public/marketing/qr/svg/{destino}-framed-cta.svg` |
| Impresión a una tinta | `public/marketing/qr/svg/{destino}-mono.svg` |
| Pieza sobre fondo claro | `public/marketing/qr/svg/{destino}-light.svg` |
| Integración por diseño | `public/marketing/qr/svg/{destino}-clean.svg` |
| Documento digital o prueba rápida | equivalente en `public/marketing/qr/png/` |

Antes de enviar a imprenta:

1. Elegir el QR de la campaña, no el QR general, cuando la pieza tenga un tema específico.
2. Mantener el margen vacío alrededor del código y no cubrirlo con logo, texto o formas.
3. No deformar, recortar, recolorear ni aplicar transparencia.
4. Imprimir una prueba al tamaño final.
5. Escanear con al menos tres celulares, desde distancias y condiciones de luz normales.
6. Confirmar que abre el dominio con `www`, conserva `utm_source=qr` y `utm_medium=offline`, y activa el recorrido esperado.
7. Guardar una muestra aprobada o su referencia de impresión.

El QR `whatsapp-directo` se reserva para contextos donde la intención ya es conversar. En piezas educativas o de campaña, se prefieren las rutas `/c` porque orientan antes de abrir el chat.

## Reutilizar una pieza sin perder trazabilidad

Una idea puede adaptarse, pero cada canal necesita su formato, CTA y enlace.

| Idea base | Adaptación | Enlace |
|---|---|---|
| Post cuadrado de urgencias | Historia con menos texto y sticker | Cambiar de `instagram_post` a `instagram_story`. |
| Historia de limpieza | Estado de WhatsApp | Cambiar a `whatsapp_status`. |
| Post de valoración | Google Business con texto informativo | Cambiar a `google_business`. |
| Reel de sonrisa | Video de Facebook o anuncio futuro | Cambiar a `facebook_post` o `facebook_ad`, según el uso real. |
| A5 de ortodoncia | Tarjeta de mostrador | Mantener campaña, usar el QR `qr_print` del formato final. |

No descargar una publicación ya comprimida para convertirla en otra. Volver siempre al SVG editable y exportar el tamaño correspondiente.

## Revisión de mensajes recibidos

La persona responsable debe revisar la bandeja en las franjas internas asignadas y seguir `whatsapp-business-playbook.md`.

En cada revisión:

1. Atender primero mensajes sin leer y los etiquetados **Por responder**.
2. Identificar el motivo general sin diagnosticar.
3. Consultar disponibilidad antes de ofrecer una cita.
4. Corregir la etiqueta según el siguiente paso real.
5. Registrar solo los datos básicos de atribución definidos abajo.
6. Reportar a desarrollo si el texto precargado, la ruta o el número son incorrectos.

## Registro manual del primer mes

Crear una copia de esta tabla en una hoja privada autorizada por el consultorio. No diligenciar ni subir registros reales al repositorio.

| Fecha | Fuente declarada por la persona, si la menciona | Campaña | Motivo de consulta, categoría general | Cita solicitada | Cita confirmada |
|---|---|---|---|---|---|
|  |  |  |  | Sí / No | Sí / No |
|  |  |  |  | Sí / No | Sí / No |
|  |  |  |  | Sí / No | Sí / No |

### Valores permitidos sugeridos

- **Fuente:** Instagram, Facebook, estado de WhatsApp, Google, QR, recomendación, otra, no mencionada.
- **Campaña:** lanzamiento, urgencias, sonrisa, limpieza, ortodoncia, valoración, Urabá, no identificada.
- **Motivo general:** molestia o urgencia, estética, limpieza, ortodoncia, valoración, ubicación, otro.
- **Cita solicitada/confirmada:** Sí o No.

### Lo que no se registra aquí

- Nombre, documento, teléfono, usuario de red social o dirección.
- Diagnóstico, síntomas detallados, fotografías, antecedentes o tratamiento.
- Copias de mensajes, notas clínicas o datos de menores.
- Datos de pago o información de la cita más allá del Sí/No para este seguimiento.

La agenda clínica y los registros de atención deben seguir el proceso privado autorizado del consultorio; esta tabla sirve únicamente para contar fuentes, campañas y avances básicos.

## Revisión semanal manual

Al cierre de cada semana, sumar sin datos personales:

- Conversaciones por fuente declarada.
- Conversaciones por campaña.
- Citas solicitadas y citas confirmadas.
- Preguntas frecuentes que requieran mejorar un copy o una respuesta rápida.
- Enlaces o recursos que presentaron problemas.

No atribuir el resultado a una campaña cuando la persona no lo mencionó; usar **no identificada**. Los hallazgos orientan la siguiente semana, pero no sustituyen una medición analítica futura.

## Checklist por publicación

- [ ] Copy y visual corresponden a la misma campaña.
- [ ] Se usó el formato correcto para el canal.
- [ ] El enlace se copió de la fila exacta de la matriz.
- [ ] El dominio tiene `www` y conserva las cuatro UTM.
- [ ] La ruta abre el recorrido esperado.
- [ ] No aparecen precios, horarios, dirección ni disponibilidad sin confirmar.
- [ ] No hay promesas, diagnósticos ni testimonios inventados.
- [ ] CTA, enlace o QR funcionan desde un celular.
- [ ] El contenido quedó marcado como publicado en el calendario.
- [ ] La bandeja de WhatsApp tiene una persona responsable.
