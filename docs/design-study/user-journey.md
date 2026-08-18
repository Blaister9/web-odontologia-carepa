# Audiencia, contexto local y mapa emocional

Cubre las fases 6 (audiencia), 7 (auditoría del funnel) y 8 (mapa emocional).

---

## 1. Contexto local — separando hecho de suposición

### HECHO (fuente primaria citada)

| Dato | Valor | Fuente |
|---|---|---|
| Hogares con conexión a internet en Colombia | **65,6 %** (2024) | [DANE, ENTIC Hogares 2024](https://www.dane.gov.co/files/operaciones/ENTIC/bol-ENTICHogares-2024.pdf) |
| Personas de 5+ años que usan teléfono móvil | **más de 9 de cada 10** | [DANE, TIC Hogares 2023](https://www.dane.gov.co/files/operaciones/TICH/bol-TICH-2023.pdf) |
| Personas que acceden a internet **por móvil** | **~9 de cada 10** desde 2020 | DANE, ibíd. |
| Brecha urbano / rural | Persistente; Bogotá 79,4 % de hogares frente a centros poblados y rural disperso muy por debajo | DANE / ONTIC MinTIC |
| Probabilidad de abandono | Máxima en los **primeros 10 s**; se aplana pasados ~30 s | [NN/g, *How Long Do Users Stay on Web Pages?*](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/) (205 873 páginas analizadas) |

Todas consultadas el 2026-08-17.

### INFERENCIA (razonada desde el hecho, puede fallar)

1. **El sitio es, en la práctica, una experiencia móvil.** Si ~90 % del acceso nacional
   es por móvil y Carepa está en subregión de Urabá —fuera de las capitales con mejor
   conectividad—, la proporción móvil local es probablemente **igual o mayor**.
   → El diseño de escritorio es la versión secundaria, no la primaria.

2. **El presupuesto de datos importa más que en una capital.** Con brecha de conectividad
   documentada, cada MB tiene coste percibido.
   → Refuerza el veto a vídeo pesado, WebGL y librerías grandes de
   [`design-system-proposal.md`](design-system-proposal.md#12-presupuesto-de-rendimiento).

3. **Los primeros 10 segundos son el presupuesto real de persuasión.** Si el fold móvil
   gasta 32 % en cromo y no muestra ni una cara ni una dirección, gran parte de esos
   10 segundos se consume sin entregar la única información que decide la permanencia.

### HIPÓTESIS (sin verificar — requiere validación antes de invertir)

| # | Hipótesis | Cómo se validaría |
|---|---|---|
| H-A | La mayoría del tráfico llega desde Instagram, Google Maps y WhatsApp reenviado, no desde búsqueda orgánica de escritorio | Google Search Console + fuentes de referencia + parámetros UTM de las campañas ya existentes |
| H-B | El dispositivo típico es un Android de gama media (360–414 px) con conexión variable | Informe de dispositivos en analítica |
| H-C | El paciente local compara entre 2 y 3 opciones, y una de ellas es un perfil de Doctoralia o de Google Maps, no una web propia | Entrevistas cortas al agendar por WhatsApp: *"¿cómo nos encontraste?"* |
| H-D | El freno principal declarado es el precio, seguido del miedo | El copy actual ya asume esto (`beforeBookingItems`), pero **nunca se validó** |

**RECOMENDACIÓN.** H-D se puede validar sin analítica y sin coste: registrar durante
30 días la primera pregunta que hace cada persona que escribe por WhatsApp. Es la
investigación de usuario más barata disponible y decide el orden de bloques de la home.

---

## 2. Auditoría del funnel actual

### Recorrido tal como está construido

```
Hero  ──►  IntentGateway (3 opciones)  ──►  ConversionJourney (paso 2)
  │              │                                    │
  │              └── #elige-tu-camino                 └── orientación + CTA de WhatsApp
  │
  └──►  FeaturedTreatments (4)  ──►  CompactDoctorTrust  ──►  GoogleTrustPreview
            ──►  Emergency  ──►  RegionWhatsApp  ──►  FinalWhatsAppCTA
                      │
                      └── MobileStickyCTA (contextual, x2 botones) + WhatsAppFloatingButton
```

### Diagnóstico por pregunta

| Pregunta | Diagnóstico |
|---|---|
| ¿Demasiadas decisiones? | **En el paso 1, no** — 3 opciones es correcto. **En el conjunto, sí**: 14 enlaces a WhatsApp en la home; 42 en `/servicios`. |
| ¿Se entiende inmediatamente? | El paso 1 sí. El paso 2 exige un scroll a ciegas y en móvil parece que no pasó nada. |
| ¿Sorprende positivamente? | **No, por posición.** El panel de resultado se renderiza fuera de pantalla. |
| ¿Feedback suficiente? | Técnicamente sí (`aria-live="polite"`, `aria-pressed`). Perceptualmente no. |
| ¿Parece un formulario? | Sí. Las cápsulas del héroe usan un punto relleno que se lee como radio button (D-15). |
| ¿El usuario siente avance? | A medias: "Paso 2 de 2" existe, pero no hay "Paso 1 de 2". |
| ¿Se siente personalizado? | **Sí, y es lo mejor.** `MobileStickyCTA` cambia etiqueta y mensaje según la intención. |
| ¿Qué puede ser memorable? | La transición intención → orientación, si ocurriera **en pantalla**. |

### Los tres fallos del funnel

**F-1 · El resultado nace invisible.** `ConversionJourney` es una sección hermana que
sigue a `IntentGateway`. En móvil, tras tocar una opción, el panel aparece por debajo
del fold. **El usuario no ve que su acción tuvo efecto.**
→ *Arreglo:* que el panel reemplace o se expanda **en el sitio de la tarjeta tocada**,
con scroll asistido, y que el CTA quede visible sin más desplazamiento.

**F-2 · Todos los CTA compiten con el mismo peso.** Un enlace de "Consultar limpieza" de
15 px de alto en una tarjeta secundaria y el CTA de urgencia tienen prominencia comparable.
→ *Arreglo:* jerarquía de tres niveles — **primario** (uno por pantalla), **secundario**
(explorar), **terciario** (texto). Ver
[`design-system-proposal.md`](design-system-proposal.md#8-componentes).

**F-3 · El paso 2 pide una segunda elección sin recompensar la primera.** El usuario
elige "Tengo dolor" y recibe… otra lista para elegir. La orientación llega en el paso 3.
→ *Arreglo:* que el paso 2 devuelva **algo de valor de inmediato** (una frase de
orientación real y el CTA), y que el refinamiento sea opcional.

**RECOMENDACIÓN.** No se propone almacenar ningún dato del usuario. Todo el estado del
funnel debe seguir siendo efímero y en memoria, como hoy.

---

## 3. Mapa emocional (Fase 8)

| Etapa | Qué debe sentir | Qué siente hoy | Qué lo produce en la propuesta |
|---|---|---|---|
| **Entrada** | *"esto se ve diferente"* | *"otra página de dentista"* | Fotografía real del consultorio y de Nataly, tipografía con carácter, paleta cálida no clínica |
| **Primer scroll** | *"entienden lo que necesito"* | *"me piden que elija algo"* | Las 3 puertas en lenguaje de paciente, visibles en la primera pantalla |
| **Selección** | *"esto es fácil"* | *"toqué y no pasó nada"* | El resultado aparece **donde estaba el dedo** (F-1) |
| **Confianza** | *"parecen profesionales reales"* | *"no sé si esto existe"* | Dirección, horario, mapa, cifras y reseñas |
| **Equipo** | *"sé quién me va a atender"* | *"dos personas y dos dibujos"* | Cuatro retratos reales o tres reales sin relleno ilustrado |
| **Servicio** | *"entiendo sin sentirme abrumado"* | *"11 pantallas de texto"* | Divulgación progresiva y límites de densidad |
| **CTA** | *"puedo preguntar sin compromiso"* | Correcto — ya lo consigue | Conservar el copy actual; solo elevar su prominencia |
| **WhatsApp** | *"sé qué escribir"* | Correcto — ya lo consigue | Conservar los mensajes precargados |

**OBSERVACIÓN.** Las dos últimas etapas **ya funcionan**. El problema del recorrido
emocional está concentrado en las cinco primeras, y cuatro de ellas se resuelven con
fotografía y datos de contacto, no con rediseño de interfaz.

---

## 4. Recorrido emocional completo, en primera persona

Redactado como lo viviría una persona de Carepa que llega desde una historia de Instagram
con un dolor de muela, sobre la propuesta recomendada:

> **0 s** — Veo una foto del consultorio con luz de verdad y una mujer con bata que mira
> a cámara. Arriba dice *Carepa · Urabá*. Vale, esto existe.
>
> **3 s** — Debajo del titular hay tres cosas grandes: *Me duele algo · Quiero verme mejor ·
> Quiero cuidarme*. La primera es la mía.
>
> **6 s** — Toco "Me duele algo". La tarjeta se abre ahí mismo y me dice qué contar
> (dónde, desde cuándo, qué tan fuerte). No me pide datos. Debajo hay un botón verde.
>
> **12 s** — Antes de tocarlo bajo un poco. Veo la dirección, el horario y un mapa.
> Veo tres reseñas con nombre. Veo a la doctora y a la auxiliar, las dos reales.
>
> **20 s** — Toco el botón. WhatsApp se abre con el mensaje ya escrito. Solo tengo que
> añadir desde cuándo me duele y enviar.

**El objetivo de diseño es que ese recorrido quepa en 20 segundos y en dos pantallas
de scroll.** Hoy la información de las líneas "12 s" **no existe en el sitio**.
