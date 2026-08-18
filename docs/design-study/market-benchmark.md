# Benchmark de mercado

**Fecha de consulta:** 2026-08-17
**Método:** captura directa con Chrome headless a 1440x900 y 390x844, más extracción
programática de tipografías, paleta computada, radios, CTA, altura de documento y
presencia de señales de confianza. Datos crudos en
`screenshots/benchmark/_benchmark-data.json` y `_benchmark-data-2.json`.
Capturas en `screenshots/benchmark/desktop/` y `screenshots/benchmark/mobile/`.

**33 sitios visitados · 27 con datos completos · 6 bloquearon al agente.**
Los bloqueados se marcan y **no reciben calificación numérica inventada**.

---

## 1. Grupo A — mercado local y regional (Urabá y Antioquia)

| Sitio | Lugar | Tipografía real | Paleta | Héroe |
|---|---|---|---|---|
| [holavitaldent.com](https://www.holavitaldent.com/) | **Apartadó (Urabá)** | Arial | Lima `#e4ed80` + celeste `#bfe3f6` | **Foto real de los 2 odontólogos** en recorte circular, sobre blobs |
| [ortoclinicasdeuraba.com](https://ortoclinicasdeuraba.com/) | **Urabá** | Inter + Montserrat | Azul `#1f5f8b` + verde `#6bc048` | **Foto clínica real** con velo azul, H1 56px/800 |
| [ortoclin.co](https://ortoclin.co/) | Medellín | Bebas Neue + system | Negro `#272727` / gris | 25 imágenes, 11 453 px de alto |
| [bocasyrisas.com](https://bocasyrisas.com/) | Medellín | Outfit | Navy `#0a192f` + cian `#00e5ff` | Vídeo + 22 imágenes |
| [smilenaturalstudio.com](https://smilenaturalstudio.com/) | Medellín | Jost | **Negro `#13120e` + oro `#c9a96e`** | Recorte de la doctora sobre negro, palabra "RELAX" |
| [clinicabedharma.com](https://clinicabedharma.com/) | Medellín | Lato + Roboto | Negro / blanco / gris | 27 imágenes, 12 003 px |
| [dentioral.com](https://dentioral.com/) | Medellín | Open Sans | Celeste `#88bad9` + oliva `#b4bf5b` | 1 sola imagen, H1 en versalitas |
| clinicaodontologicadeantioquia.com.co | Antioquia | — | — | **Dominio no resuelve** |

### Lo que hace el mercado local, en una frase

**OBSERVACIÓN.** Los **dos** competidores del propio Urabá abren con **fotografía real de
personas identificables**. Ninguno usa ilustración vectorial.

**OBSERVACIÓN.** Ortoclínicas de Urabá —el competidor regional más fuerte visualmente—
pone en el fold un badge de posicionamiento (`ESPECIALISTAS EN ORTODONCIA · URABÁ,
COLOMBIA`), un H1 a dos colores, dos botones y una **fila de cifras duras**:
`20.000+ pacientes atendidos · 18+ años de experiencia · 98 % satisfacción del paciente`.
Ver `screenshots/benchmark/desktop/ortoclinicas-uraba.webp`.

**INFERENCIA.** El listón local no es estético, es **probatorio**. Se compite demostrando
volumen, años y caras. Dra. Nataly Jiménez hoy no muestra ninguna de las tres cosas.

---

## 2. Grupo B — Colombia y Latinoamérica

| Sitio | Lugar | Tipografía | Paleta | Nota |
|---|---|---|---|---|
| [1485dentalspa.com](https://1485dentalspa.com/) | Bogotá | Open Sans | Teal `#198882` + cian `#00bab9` | H1 en versalitas de 106 caracteres; **13 056 px**; 162 enlaces de nav |
| [clinicaelitedental.com.co](https://clinicaelitedental.com.co/) | Cali / Bogotá | Roboto | Azul `#062d97` | Vídeo; **sin `<h1>`**; CTA con errata ("hoyy") |
| [drasararestrepos.com](https://www.drasararestrepos.com/) | Cali | — | — | Timeout en escritorio; móvil sí capturado |
| [laclinicadental.org](https://laclinicadental.org/) | CDMX | Inter | Cianes pálidos `#e1f5f9` | H1 72px/700; **48 imágenes; 14 499 px** |
| [laclinicapolanco.dental](https://laclinicapolanco.dental/) | CDMX | Montserrat | Cian `#00bcd4` + morado `#851e98` | 33 imágenes; antes/después; precios |
| [doctoralia.co/odontologo/apartado](https://www.doctoralia.co/odontologo/apartado) | Plataforma | system-ui | Verde `#007c68` | **Reseñas, precios y disponibilidad reales** |
| [topdoctors.com.co](https://www.topdoctors.com.co/bogota-ciudad/clinica-dental/odontologia-y-ortodoncia/estetica-dental/) | Plataforma | Roboto | Azul `#093b5b` | Directorio con reseñas y reserva |
| odontoestetic.com.co | Colombia | — | — | **Bloqueado (Bitdefender)** |

**OBSERVACIÓN — el competidor invisible.** Doctoralia y Top Doctors son, en la práctica,
**el competidor real por la búsqueda "odontólogo en Apartadó / Carepa"**. Y ganan en lo
único que importa a un paciente indeciso: muestran **reseñas verificadas, precio
orientativo y disponibilidad**. Un sitio propio que no ofrece ninguna de las tres pierde
frente a un directorio.

**OBSERVACIÓN.** El patrón dominante en Colombia y México es el **muro infinito**:
13 056 px (Bogotá) y 14 499 px (CDMX) de alto de documento. Más contenido no es más
confianza; es más ruido.

---

## 3. Grupo C — internacional premium

| Sitio | Lugar | Tipografía | Paleta | Patrón clave |
|---|---|---|---|---|
| [chelseadentalclinic.co.uk](https://www.chelseadentalclinic.co.uk/) | Londres | **CenturyOld (serif) + NeueMontreal** | **Crema `#f1ece2` + oliva `#595f37`** | Logotipo serif; héroe = **la sala de espera**; "Social Proofs" con logos de prensa |
| [chelseadentalstudio.co.uk](https://chelseadentalstudio.co.uk/) | Londres | Raleway | Azul profundo `#0c2f45` | Nav de 86 enlaces |
| [dentalclinicchelsea.co.uk](https://www.dentalclinicchelsea.co.uk/) | Londres | Poppins | Teal `#008080` + terracota `#845f4d` | Precios visibles |
| [marylebonesmileclinic.co.uk](https://marylebonesmileclinic.co.uk/) | Londres | — | — | Capturado |
| [smilestylist.ca](https://www.smilestylist.ca/) | Toronto | **GD Sherpa (fuente propia)** | Blanco puro | Tipografía de marca a medida |
| [thedentaldesignstudio.co.uk](https://www.thedentaldesignstudio.co.uk/) | Reino Unido | Arial | Azul `#1c4a8c` | Vídeo |
| [clinicaeduardoanitua.com](https://clinicaeduardoanitua.com/) | Vitoria (ES) | — | — | Capturado |
| [propdental.es](https://propdental.es/) | Barcelona | — | — | Capturado |
| [vitaldent.com](https://vitaldent.com/) | España | — | — | Capturado |
| [bupadental.com.au](https://bupadental.com.au/) | Australia | — | — | Capturado |
| hellotend.com | Nueva York | — | — | **Bloqueado (Cloudflare)** |
| dentalboutique.com.au | Melbourne | — | — | **Bloqueado (403)** |
| londonsmileclinic.co.uk | Londres | — | — | **Error SSL** |

### La referencia que define "premium" en odontología

**OBSERVACIÓN (`screenshots/benchmark/desktop/chelsea-dental-clinic.webp`).**
Chelsea Dental Clinic es el caso más instructivo del benchmark completo:

- Logotipo **serif con punto final**: `Chelsea Dental Clinic.` — es un logotipo, no un texto.
- Paleta **crema y oliva**. **Cero teal. Cero azul sanitario.**
- Héroe: fotografía de **la sala de espera** — una butaca bouclé, una planta, un cuadro.
  No hay dientes. No hay bata. No hay paciente sonriendo.
- Titular centrado en serif: *"Award Winning Dentist in London You Can Trust"*.
- Bajada que nombra su propio posicionamiento: *"Quiet luxury dentistry"*.
- Dos botones **fantasma con borde fino y flecha**. Ninguno relleno.
- Primera sección tras el héroe: **"Social Proofs"** con logos de Harpers Bazaar, Grazia,
  Pop Sugar, DARE Magazine, Good Housekeeping.

**INFERENCIA.** Lo "premium" en salud no se construye con efectos. Se construye con
**tipografía con carácter, paleta cálida no clínica, fotografía del espacio, y prueba
social colocada antes que el catálogo**. Es exactamente lo contrario de "más gradientes".

---

## 4. Grupo D — marcas adyacentes

| Sitio | Sector | Tipografía | Paleta | Qué robar (como patrón, no como diseño) |
|---|---|---|---|---|
| [the-well.com](https://www.the-well.com/) | Wellness (US) | **Chronicle Display + Styrene B** | **Arena `#f2ede9`** | H1 serif enorme sobre foto arquitectónica en tono cálido; **un solo** CTA fantasma; nav en versalitas pequeñas |
| [minimaleskin.com](https://minimaleskin.com/) | Dermo-estética NYC | Poppins | **Azul niebla `#9db1c5` + hueso `#edece7`** | Rejilla editorial; todos los tratamientos con el mismo peso visual |
| [skinlaundry.com](https://www.skinlaundry.com/) | Estética clínica US | articulat-cf + Apris | **Arena `#f6ede4` + cacao `#3c201d` + lima `#cdf765`** | Neutro cálido con **un acento eléctrico**; oferta de entrada con precio |
| [clinicabaviera.com](https://clinicabaviera.com/) | Oftalmología (ES) | — | — | Capturado |
| aesop.com | Luxury beauty | — | — | **Bloqueado** |
| sixsenses.com | Hospitality | — | — | **Bloqueado (Access Denied)** |
| drsturm.com | Skincare médico | — | — | **Bloqueado** |

**OBSERVACIÓN (`screenshots/benchmark/desktop/the-well.webp`).** The Well resuelve el fold
con cuatro elementos y nada más: logotipo, nav de 4 ítems en versalitas, H1 serif de dos
líneas y **un** botón fantasma. Ni burbujas, ni chips, ni tarjetas, ni gradientes.

**INFERENCIA.** La densidad del fold es inversamente proporcional a la percepción de
calidad. Los referentes premium ponen **menos** en la primera pantalla, no más.

---

## 5. Qué está saturado

Validado contra los 27 sitios con datos, no contra memoria.

| Patrón | Frecuencia observada | Veredicto |
|---|---|---|
| **Teal / cian / azul sanitario** | 9 de 14 odontológicos | **Saturado.** Es el color por defecto del sector. |
| **"Agenda tu cita" como CTA único** | 11 de 14 | **Saturado.** Nadie dice nada distinto. |
| **Burbuja verde de WhatsApp abajo a la derecha** | 7 de 9 sitios colombianos | **Saturado.** Deja de ser un diferenciador; es mobiliario. |
| **Negro + oro como "lujo"** | 3 de 7 en Medellín | **Saturado regionalmente.** Smile Natural, Be Dharma, Ortoclin. |
| **Muro de 10 000+ px** | 6 de 14 | **Saturado.** Bogotá 13 056 px, CDMX 14 499 px, Medellín 12 003 px. |
| **Blobs y formas orgánicas de plantilla** | VitalDent Apartadó, otros | **Saturado y barato.** Señal inmediata de constructor visual. |
| **Sonrisa blanca de stock** | Presente en casi todos | **Saturado.** |
| **Icono de diente como identidad** | Mayoría, incluida Dra. Nataly | **Saturado.** |
| **Fuente por defecto del sistema o Arial** | 5 de 14 | Señal de "sin dirección de arte". |

**Dónde cae hoy Dra. Nataly Jiménez:** teal saturado ✔ · WhatsApp verde ✔ ·
icono de diente ✔ · sin webfont ✔ · sin cifras ✘ · sin caras ✘.
**Está dentro de todos los clichés y fuera de todas las pruebas.**

---

## 6. Qué funciona de verdad

Patrones presentes en los referentes que sí generan confianza o reducen fricción:

1. **Fotografía real de personas identificables en el fold** — VitalDent Apartadó,
   Ortoclínicas de Urabá, Smile Natural Studio. Universal en el mercado local.
2. **Cifras duras verificables** — `20.000+ / 18+ años / 98 %` (Ortoclínicas).
   Es la forma más barata y eficaz de demostrar que el negocio es real.
3. **Prueba social antes del catálogo** — Chelsea Dental Clinic pone "Social Proofs"
   inmediatamente tras el héroe, antes de hablar de tratamientos.
4. **Fotografía del espacio, no del procedimiento** — Chelsea, The Well. El espacio
   dice "esto existe y es agradable" sin activar ansiedad dental.
5. **Precio de entrada u orientación de precio** — Doctoralia, Skin Laundry,
   Dental Clinic Chelsea. Elimina el mayor freno declarado.
6. **Tipografía con carácter** — GD Sherpa (Smile Stylist), Chronicle Display (The Well),
   CenturyOld (Chelsea). Es lo que hace que dos sitios con la misma maquetación se sientan
   distintos.
7. **Un solo CTA en el fold** — The Well, Chelsea. Menos opciones, más clics.

---

## 7. Dónde hay hueco para diferenciarse

**OBSERVACIÓN.** Estas casillas están **vacías** en los 27 referentes con datos:

| Hueco | Nadie lo hace | Por qué importa aquí |
|---|---|---|
| **Entrada por necesidad en lenguaje de paciente** | 0 de 27 | Dra. Nataly **ya lo tiene** (`IntentGateway`). Es el activo, y está infrautilizado. |
| **Paleta cálida caribeña no clínica** | 0 de 14 odontológicos | Urabá es trópico húmedo, verde y luz alta. Ningún competidor lo usa. |
| **Reconocer el miedo al dentista explícitamente** | 0 de 27 | Dra. Nataly **ya tiene el copy**: "Me da nervios ir al odontólogo". |
| **Precio explicado con honestidad en lugar de ocultado** | 2 de 27 | "Puedes preguntar primero" ya está escrito, pero enterrado. |
| **Fotografía documental real, no posada de stock** | ~2 de 27 | Es producible con presupuesto local. |
| **Redacción por resultado en lugar de por procedimiento** | ~1 de 27 | "Quiero mejorar mi sonrisa" en lugar de "Diseño de sonrisa". **Ya existe** en `FeaturedTreatments`. |

**INFERENCIA — la conclusión central del benchmark.** La diferenciación de este proyecto
**no hay que inventarla: ya está escrita en el copy y enterrada bajo una capa visual
genérica.** El trabajo no es añadir personalidad, es dejar de esconder la que ya tiene.

---

## 8. Fuentes

| Fuente | URL | Consultado |
|---|---|---|
| WCAG 2.2 — SC 2.5.8 Target Size (Minimum) | <https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html> | 2026-08-17 |
| Core Web Vitals (umbrales y percentil 75) | <https://web.dev/articles/vitals> | 2026-08-17 |
| Nielsen Norman Group — How Long Do Users Stay on Web Pages? | <https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/> | 2026-08-17 |
| DANE — Boletín ENTIC Hogares 2024 | <https://www.dane.gov.co/files/operaciones/ENTIC/bol-ENTICHogares-2024.pdf> | 2026-08-17 |
| DANE — TIC en hogares y personas (2023) | <https://www.dane.gov.co/files/operaciones/TICH/bol-TICH-2023.pdf> | 2026-08-17 |
| ONTIC / MinTIC — Hogares con conexión a Internet | <https://ontic.mintic.gov.co/portal/Secciones/Indicadores/Conectividad-e-inclusion-digital/383058:Hogares-con-conexion-a-Internet> | 2026-08-17 |

Los 33 sitios del benchmark son fuentes primarias: se visitaron y capturaron
directamente. No se usó ningún blog de SEO como fundamento; los listados de
"mejores webs dentales" solo sirvieron para **descubrir candidatos**, y cada candidato
fue verificado con captura propia.

---

## 9. Nota sobre no copiar

De este benchmark se extraen **patrones de composición, jerarquía y estrategia**:
"fotografía del espacio en lugar del procedimiento", "cifras duras en el fold",
"prueba social antes del catálogo", "un solo CTA".

**No se toma de ningún competidor:** su maquetación exacta, sus textos, sus imágenes,
sus ilustraciones, su paleta concreta, su tipografía ni su identidad. Las tres
direcciones de [`art-directions.md`](art-directions.md) parten de la geografía, la
clientela y el copy que ya existe en este proyecto.
