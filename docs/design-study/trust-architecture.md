# Arquitectura de confianza

La confianza no es una sección. Es un sistema de señales distribuidas.
Este documento define **qué señal va dónde** y, sobre todo, **cuáles no existen todavía**.

**Regla del documento:** no se inventa ninguna señal. Todo lo marcado `FALTA EL DATO`
requiere que la clienta lo aporte antes de poder diseñarlo.

---

## 1. Las cinco capas

| Capa | Responde a | Estado hoy |
|---|---|---|
| **Human trust** | ¿Quién me va a atender? | Parcial — existe, sin desplegar |
| **Clinical trust** | ¿Sabe lo que hace? | Bueno en tono, débil en credenciales |
| **Social trust** | ¿A otros les fue bien? | **Inexistente** |
| **Local trust** | ¿Dónde queda y puedo llegar? | **Inexistente** |
| **Digital trust** | ¿Es un sitio serio? | Bueno |

---

## 2. Human trust — confianza humana

### Estado

| Señal | Hoy en producción | Disponible sin producir |
|---|---|---|
| Retrato de la Dra. Nataly | Ilustración genérica | **Sí** — 4 archivos reales, sin desplegar |
| Retrato de Vanesa López | Ilustración genérica | **Sí** — `vanesa-lopez.webp` |
| Foto de pareja Nataly + Vanesa | No existe | **Sí** — `equipo-preview.webp` |
| Dra. Clara Parra (ortodoncia) | Clon ilustrado | `FALTA EL DATO` |
| Dr. Adalberto Atencia (maxilofacial) | Clon ilustrado | `FALTA EL DATO` |
| Foto grupal de las 4 personas | No existe | `FALTA EL DATO` |
| Voz propia de Nataly | Existe una cita en `site.ts`, no se muestra en la home | Ya escrita |

**OBSERVACIÓN.** `src/data/team.ts` ya modela esto correctamente con
`hasRealPhoto` y `awaitingProfessionalPhoto`. **El código es más honesto que la web**:
sabe que dos fotos son de relleno, pero las muestra igual, y las muestra idénticas
entre sí.

### Recomendaciones

| # | Recomendación | Dónde |
|---|---|---|
| HT-1 | **Desplegar la fotografía real que ya existe.** Es un merge, no un rediseño. | Global |
| HT-2 | **No mostrar dos veces la misma ilustración de relleno.** Dos clones idénticos señalan el relleno con más fuerza que dejar el hueco. Alternativa: tarjeta tipográfica con iniciales y rol, declarada como "retrato en producción". | `/equipo` |
| HT-3 | Retrato de Nataly **en el fold** de la home, no a 4 pantallas de scroll. | Home |
| HT-4 | Su cita ya escrita, atribuida y con su cara al lado. Una sola frase. | Home + `/equipo` |
| HT-5 | Añadir a Vanesa en el bloque de "cómo agendar": es quien responde el WhatsApp. Poner cara a quien contesta reduce la fricción de escribir. | Home |

---

## 3. Clinical trust — confianza clínica

### Estado

**Fuerte:** el tono. "La valoración define el camino", ausencia de promesas de resultado,
explicación de que el precio depende del diagnóstico. Es correcto ética, legal y
comercialmente, y **el mercado no lo hace**.

**Débil:** no hay ninguna credencial verificable.

| Señal | Estado |
|---|---|
| Roles del equipo | Presentes y específicos |
| Especialidades | Presentes |
| Universidad, año de grado, registro profesional | `FALTA EL DATO` |
| Protocolo de bioseguridad concreto | Genérico: "protocolos de higiene y cuidado" |
| Equipamiento del consultorio | `FALTA EL DATO` |
| Proceso de la primera visita | **Presente y bueno** (`firstVisitSteps`) |

### Recomendaciones

| # | Recomendación |
|---|---|
| CT-1 | Publicar **registro profesional y universidad** de Nataly. Es dato público, gratuito y de alto valor probatorio. `FALTA EL DATO`. |
| CT-2 | Sustituir "protocolos de higiene" por **tres hechos concretos** (esterilización, instrumental de un solo uso, barreras). Concreto vence a tranquilizador. `FALTA EL DATO`. |
| CT-3 | Mantener intacta la política de no prometer resultados. **No negociable.** |
| CT-4 | Elevar `firstVisitSteps` de `/consultorio` a la home: responde "¿qué me van a hacer?" antes de que se pregunte. |

---

## 4. Social trust — prueba social

### Estado: **cero señales en todo el sitio.**

Existe un componente llamado `GoogleTrustPreview`, pero **no muestra reseñas reales**.
Existe `Testimonials.tsx` en el repositorio, **sin usar en ninguna página**.

**OBSERVACIÓN.** Esta es la mayor brecha frente al competidor real. Doctoralia muestra
reseñas verificadas de odontólogos de Apartadó. Google Business Profile ya está activo
según el contexto del proyecto. **El dato probablemente ya existe y no está en la web.**

### Recomendaciones

| # | Recomendación |
|---|---|
| ST-1 | Publicar **3 reseñas reales de Google** con nombre, fecha y texto, enlazadas al perfil. `FALTA EL DATO` (extraer del GBP). |
| ST-2 | Mostrar **calificación y número de reseñas** del GBP, con enlace. Cuando exista, añadir `AggregateRating` al JSON-LD. |
| ST-3 | Casos antes/después **solo con consentimiento escrito**, con fecha y sin retoque. Un caso real vence a diez de stock. `FALTA EL DATO`. |
| ST-4 | **No inventar ni parafrasear reseñas**, ni usar testimonios sin nombre. Una reseña genérica sin autor resta credibilidad en lugar de sumarla. |
| ST-5 | Mientras no haya reseñas: usar **cifras verificables** que la clienta sí pueda confirmar (años ejerciendo, pacientes atendidos). Es lo que hace Ortoclínicas de Urabá. `FALTA EL DATO`. |

---

## 5. Local trust — confianza local

### Estado: **la brecha crítica.**

```ts
address:  "Confirma la dirección exacta al agendar tu cita."
schedule: { weekdays: "Agenda sujeta a disponibilidad." }
mapUrl:   ".../maps/search/?api=1&query=Carepa%2C%20Antioquia%2C%20Colombia"
```

**INFERENCIA.** Un consultorio que no publica su dirección lee como uno de estos tres
casos, y ninguno ayuda: (a) atención a domicilio, (b) local compartido no consolidado,
(c) negocio que aún no abre. Si la razón real es distinta, **el sitio no lo está contando**.

Si existe una razón legítima para no publicar la dirección exacta —consultorio dentro de
otro centro médico, agenda itinerante entre municipios— **hay que decirla explícitamente**.
El silencio se interpreta peor que la explicación.

### Recomendaciones

| # | Recomendación | Prioridad |
|---|---|---|
| LT-1 | **Publicar dirección exacta.** Si no es posible, publicar el porqué en una frase. `FALTA EL DATO`. | **P0** |
| LT-2 | **Publicar horario real.** Aunque sea "Lun–Vie 8:00–12:00 y 14:00–18:00, sábado con cita previa". `FALTA EL DATO`. | **P0** |
| LT-3 | Sustituir el `mapUrl` genérico por el **enlace directo al Google Business Profile**. | **P0** |
| LT-4 | Añadir `LocalBusiness` al JSON-LD con `address`, `geo`, `openingHours` y `telephone`. Depende de LT-1 y LT-2. | P1 |
| LT-5 | Fotografía de **la fachada y de la sala de espera**. Es lo que permite reconocer el sitio al llegar. `FALTA EL DATO` — producir. | P1 |
| LT-6 | Referencia de llegada en lenguaje local ("frente a…", "a una cuadra de…"), más útil que una coordenada. `FALTA EL DATO`. | P1 |
| LT-7 | Enlazar Instagram y Facebook reales. Los campos existen vacíos en `site.ts`. `FALTA EL DATO`. | P1 |
| LT-8 | Mantener el marco Carepa + Urabá. Ya está bien resuelto en `RegionWhatsApp`. | Conservar |

---

## 6. Digital trust — confianza digital

**La capa mejor construida del proyecto.**

| Señal | Estado |
|---|---|
| Dominio propio + HTTPS | Correcto |
| Cabeceras de seguridad | HSTS, `X-Frame-Options`, `Permissions-Policy`, CSP en modo *report-only* |
| SEO técnico | Canonical, sitemap, robots, JSON-LD, `lang="es-CO"` |
| Rendimiento | 184 KB, DCL 836 ms |
| Errores de consola | Ninguno detectado |
| Consistencia entre páginas | Alta |

### Recomendaciones

| # | Recomendación |
|---|---|
| DT-1 | **Corregir "ODONTÓLOGICO" → "ODONTOLÓGICO"** en `clinicName`. Una errata en el nombre propio destruye más confianza digital que cualquier cabecera la construye. |
| DT-2 | Promover la CSP de `report-only` a activa una vez validada. |
| DT-3 | Añadir enlace de salto al contenido principal. |

---

## 7. Dónde va cada señal — mapa de colocación

| Señal | Home fold | Home cuerpo | `/consultorio` | `/equipo` | `/servicios/*` | Footer |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Retrato de Nataly | ● | ● | | ● | ○ | |
| Ciudad + región | ● | | ● | | | ● |
| Dirección exacta | | ● | ● | | | ● |
| Horario | | ● | ● | | | ● |
| Mapa / enlace GBP | | ● | ● | | | ● |
| Calificación de Google | ● | ● | | | ○ | |
| 3 reseñas con nombre | | ● | ● | | ● | |
| Cifras (años, pacientes) | ● | | ● | | | |
| Roles del equipo | | ○ | | ● | | |
| Registro profesional | | | ● | ● | | |
| Bioseguridad concreta | | | ● | | ○ | |
| Proceso de primera visita | | ● | ● | | ● | |
| Foto de fachada / sala | | ○ | ● | | | |
| Casos antes/después | | ○ | | | ● | |
| WhatsApp directo | ● | ● | ● | ● | ● | ● |

● principal · ○ secundario

---

## 8. Orden de impacto

Si solo se pudiera hacer una cosa de este documento, en este orden:

1. **LT-1 + LT-2 + LT-3** — dirección, horario y enlace al GBP.
   Coste: tres campos de datos. Impacto: convierte un sitio dudoso en un negocio real.
2. **HT-1** — desplegar la fotografía real que ya está commiteada.
   Coste: un merge. Impacto: el mayor salto visual disponible.
3. **ST-1** — tres reseñas reales de Google.
   Coste: copiar y pegar del GBP. Impacto: cierra la brecha con Doctoralia.
4. **DT-1** — corregir la errata del nombre.
   Coste: un carácter.

**Ninguna de las cuatro requiere aprobar una dirección de arte.** Son independientes de
[`final-recommendation.md`](final-recommendation.md) y pueden ejecutarse esta semana.
