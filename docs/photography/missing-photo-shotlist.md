# Shot list fotográfico pendiente — Consultorio Odontológico Dra. Nataly Jiménez

Estado a 17 de agosto de 2026.

Este documento registra la fotografía profesional que **todavía hace falta** para
retirar los últimos placeholders del sitio. El material entregado hasta ahora
cubre parcialmente el retrato de la doctora y un caso clínico; el resto del
equipo, el espacio físico y la escena de atención siguen sin fotografía real.

## Qué ya está cubierto

| Necesidad | Estado | Origen |
| --- | --- | --- |
| Retrato de la Dra. Nataly (`/equipo`) | Cubierto de forma provisional | Recorte de `nataly-bata-promo` |
| Avatar de la Dra. Nataly (home) | Cubierto de forma provisional | Recorte de `nataly-bata-clinica` |
| Retrato natural de la Dra. Nataly (`/consultorio`) | Cubierto | `nataly-retrato-natural`, sin textos de origen |
| Retrato de Vanesa López | Cubierto de forma provisional | Recorte individual de `equipo-duo-promo` |
| Apertura de `/equipo` | Cubierto de forma provisional | Banda recortada de `equipo-duo-promo` |
| Caso de prótesis | Material fuera del repositorio | Pendiente autorización del paciente |

«Provisional» significa que la imagen proviene de una pieza diseñada para redes:
sirve, pero no fue tomada con encuadre, fondo ni resolución pensados para web.
El recorte de Vanesa es el más limitado de todos: la toma original la deja en
~284 px de ancho útil, así que se ve correcto en escritorio y algo blando en
móviles de alta densidad. Es la primera foto que conviene reemplazar.

## Especificaciones generales

- **Cámara**: cualquier cámara o teléfono reciente en su máxima resolución. Sin
  filtros de belleza, sin suavizado de piel, sin modo retrato agresivo.
- **Formato de entrega**: JPG o HEIC original, sin recortar y sin exportar desde
  WhatsApp (WhatsApp recomprime a ~720 px de ancho y destruye detalle).
- **Envío**: Google Drive, WeTransfer o AirDrop. **No por WhatsApp.**
- **Vestuario**: uniforme o bata del consultorio, coherente entre todas las
  personas del equipo.
- **Consistencia**: las tomas 1–5 deben hacerse en la misma sesión, con la misma
  luz y el mismo fondo, para que la cuadrícula de `/equipo` se vea homogénea.

---

## 1. Retrato — Dra. Nataly Jiménez

- **Orientación**: vertical
- **Relación de aspecto**: 4:5
- **Plano**: medio corto (de la cintura hacia arriba), mirada a cámara
- **Uso en la web**: `/equipo` (tarjeta principal), avatar de confianza en la
  home, ficha de la doctora → `public/images/equipo/nataly-jimenez.webp`
- **Luz**: natural difusa, lateral suave a 45°; evitar contraluz de ventana
- **Fondo**: pared clara y lisa del consultorio, sin puertas ni cables a la vista
- **Espacio negativo**: margen libre por encima de la cabeza y hacia un lado,
  para permitir recorte cuadrado sin cortar el rostro
- **Resolución mínima**: 1600 × 2000 px

## 2. Retrato — Dra. Clara Parra

- **Orientación**: vertical
- **Relación de aspecto**: 4:5
- **Plano**: medio corto, mismo encuadre que la toma 1
- **Uso en la web**: `/equipo` → `public/images/equipo/clara-parra.webp`
- **Luz**: idéntica a la toma 1
- **Fondo**: idéntico a la toma 1
- **Espacio negativo**: igual que la toma 1
- **Resolución mínima**: 1600 × 2000 px

## 3. Retrato — Dr. Adalberto Atencia

- **Orientación**: vertical
- **Relación de aspecto**: 4:5
- **Plano**: medio corto, mismo encuadre que la toma 1
- **Uso en la web**: `/equipo` → `public/images/equipo/adalberto-atencia.webp`
- **Luz**: idéntica a la toma 1
- **Fondo**: idéntico a la toma 1
- **Espacio negativo**: igual que la toma 1
- **Resolución mínima**: 1600 × 2000 px

## 4. Retrato — Vanesa López

**Prioridad alta.** Hoy ocupa esa tarjeta un recorte de 284 × 355 px extraído de
la foto con la doctora; es la imagen de menor resolución del sitio.

- **Orientación**: vertical
- **Relación de aspecto**: 4:5
- **Plano**: medio corto, mismo encuadre que la toma 1
- **Uso en la web**: `/equipo` → `public/images/equipo/vanesa-lopez.webp`
  (reemplaza el recorte provisional que hoy ocupa esa misma ruta)
- **Luz**: idéntica a la toma 1
- **Fondo**: idéntico a la toma 1
- **Espacio negativo**: igual que la toma 1
- **Resolución mínima**: 1600 × 2000 px

## 5. Foto grupal del equipo

- **Orientación**: horizontal
- **Relación de aspecto**: 3:2 (alternativa 16:9 si el espacio obliga)
- **Plano**: general corto, las cuatro personas de pie, sin quedar apretadas
- **Uso en la web**: apertura de `/equipo`, reemplaza la banda recortada actual
  → `public/images/equipo/equipo-completo.webp`
- **Luz**: natural difusa y pareja sobre todos los rostros; evitar que alguien
  quede en sombra
- **Fondo**: recepción o pared del consultorio, ordenada y sin objetos personales
- **Espacio negativo**: aire a izquierda o derecha para sobreponer texto en
  escritorio sin tapar rostros
- **Resolución mínima**: 2400 × 1600 px

## 6. Consultorio — plano amplio

- **Orientación**: horizontal
- **Relación de aspecto**: 16:9
- **Plano**: general, unidad odontológica completa dentro del encuadre
- **Uso en la web**: hero de la home y `og:image` de todo el sitio (hoy es una
  imagen referencial) → `public/images/hero/consultorio-carepa.webp`
- **Luz**: luces del consultorio encendidas + luz natural; sin flash directo
- **Fondo**: espacio ordenado, superficies despejadas, sin residuos ni envases
  a la vista
- **Espacio negativo**: tercio izquierdo o derecho relativamente vacío; ahí van
  las tarjetas superpuestas del hero
- **Resolución mínima**: 2400 × 1350 px
- **Nota**: al ser también la imagen de redes sociales, debe leerse bien
  recortada a 1200 × 630 px

## 7. Recepción o entrada

- **Orientación**: horizontal
- **Relación de aspecto**: 3:2
- **Plano**: general, punto de llegada del paciente
- **Uso en la web**: `/consultorio`, sección de ubicación y primera visita
- **Luz**: natural, puerta o ventana como fuente principal
- **Fondo**: mostrador o sala de espera ordenada
- **Espacio negativo**: no crítico
- **Resolución mínima**: 2000 × 1333 px

## 8. Atención a un paciente (escena natural o simulada)

- **Orientación**: horizontal
- **Relación de aspecto**: 3:2
- **Plano**: medio, la doctora atendiendo; el paciente puede aparecer de perfil,
  de espaldas o parcialmente fuera de cuadro
- **Uso en la web**: `/consultorio` y páginas de servicio, para mostrar la
  atención sin depender de imágenes de stock
- **Luz**: luz del consultorio, sin flash
- **Fondo**: unidad odontológica
- **Espacio negativo**: lateral, para texto
- **Resolución mínima**: 2000 × 1333 px
- **Requisito legal**: si el paciente es identificable, hace falta autorización
  escrita de uso de imagen. Si se prefiere evitar el trámite, usar un modelo o
  encuadrar de forma que no se reconozca a la persona.

## 9. Detalle — manos, instrumental o equipo

- **Orientación**: horizontal
- **Relación de aspecto**: 3:2
- **Plano**: detalle o primer plano (manos con guantes, instrumental estéril,
  unidad odontológica)
- **Uso en la web**: apoyo visual en páginas de servicio y bloques de
  bioseguridad
- **Luz**: dirigida, que marque textura del instrumental
- **Fondo**: superficie limpia y neutra
- **Espacio negativo**: amplio; estas tomas suelen usarse como fondo con texto
  encima
- **Resolución mínima**: 1800 × 1200 px
- **Nota**: instrumental visiblemente limpio y empacado; es una toma sobre
  bioseguridad y cualquier descuido se lee al revés.

## 10. Fachada o señalización

- **Orientación**: horizontal
- **Relación de aspecto**: 3:2
- **Plano**: general, aviso o entrada del consultorio legible
- **Uso en la web**: sección de ubicación y ficha de Google Business Profile
- **Luz**: día, preferiblemente sin sol directo de mediodía sobre el aviso
- **Fondo**: calle, con referencia visual que ayude a ubicarse
- **Espacio negativo**: no crítico
- **Resolución mínima**: 2000 × 1333 px
- **Nota**: es la foto que más ayuda a un paciente que llega por primera vez.

## 11. Casos clínicos antes/después adicionales

- **Orientación**: vertical
- **Relación de aspecto**: 4:5 por foto (par de dos)
- **Plano**: primer plano de rostro completo, o intraoral cerrado según el caso
- **Uso en la web**: bloque de caso en las páginas de servicio
  (`caseStudy` en `src/data/servicePages.ts`)
- **Luz**: idéntica en el antes y en el después; sin flash en una y luz natural
  en la otra
- **Fondo**: pared blanca o gris neutro, el mismo en ambas tomas
- **Espacio negativo**: mínimo; el encuadre debe ser cerrado y comparable
- **Resolución mínima**: 1200 × 1500 px por foto
- **Requisitos**:
  - Misma distancia, mismo ángulo y misma altura de cámara en ambas tomas. Es lo
    que hace creíble la comparación.
  - Autorización escrita del paciente para uso de imagen (Ley 1581 de 2012).
  - Sin edición de dientes, rostro ni color. Solo recorte y compresión.

---

## Cómo integrar el material cuando llegue

1. Dejar los originales en `public/images/client/raw/`.
2. Añadir el recorte correspondiente a `scripts/process-client-photography.mjs`
   y ejecutar `node scripts/process-client-photography.mjs`.
3. Para retratos de equipo: apuntar `image` a la nueva ruta en
   `src/data/team.ts`, poner `hasRealPhoto: true` (eso corrige el texto
   alternativo, que si no declara la imagen como referencial) y
   `awaitingProfessionalPhoto: false`.
4. Para casos clínicos: añadir el bloque `caseStudy` a la página de servicio.
   El caso de prótesis ya está declarado con `enabled: false` y sus fotografías
   están fuera del repositorio, en `private/client-clinical-pending/`. Al recibir
   la autorización escrita del paciente: cambiar `dir` a `webDir` en
   `scripts/process-client-photography.mjs`, regenerar y poner `enabled: true`.
