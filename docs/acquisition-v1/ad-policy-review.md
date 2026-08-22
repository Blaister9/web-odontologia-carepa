# Revisión de políticas publicitarias

Estado: **preflight interno**, no aprobación de plataforma. Google y Meta revisan anuncios y destinos; una aprobación inicial puede cambiar.

## Checklist común

- [x] Servicios reales y rutas existentes.
- [x] Sin diagnóstico por anuncio.
- [x] Sin resultados garantizados.
- [x] Sin antes/después.
- [x] Sin precio, descuento o gratuidad.
- [x] Sin disponibilidad inmediata.
- [x] Sin dirección u horario no confirmados.
- [x] Sin stock/licencia pendiente.
- [x] Consentimiento de IMG-015 confirmado en Media Intake V2.
- [x] Sin PII, capturas o datos clínicos.
- [x] Landing coherente con el mensaje.
- [ ] Revisión final dentro de Google Ads y Meta Ads Manager el día del lanzamiento.

## Meta: personal attributes

### Aprobable por diseño

- “Orientación para molestias dentales”.
- “Opciones para tu sonrisa”.
- “No necesitas saber el tratamiento”.
- “Odontología en Carepa”.

### No usar

- “Sabemos que tienes dolor”.
- “¿Te avergüenza tu sonrisa?”.
- “Tus dientes amarillos tienen solución”.
- “Tienes una urgencia”.

La distinción es que la oferta existe sin afirmar conocimiento de la salud o apariencia de quien ve el anuncio.

Fuentes: <https://www.facebook.com/help/562973647153813/> y <https://transparency.meta.com/policies/ad-standards/>.

## Google: salud y claims

La consulta odontológica se presenta como valoración y orientación local. No se anuncian medicamentos, farmacia, telemedicina, ensayos, tratamientos experimentales ni productos restringidos. Aun así, el destino completo debe cumplir políticas y ley local.

Fuente: <https://support.google.com/adspolicy/answer/176031>.

## Colombia

La publicidad objetiva obliga al anunciante y no puede inducir a error. Por eso toda promoción, cifra, precio, horario o disponibilidad futura queda bloqueada hasta tener fuente y condiciones.

- Ley 1480: <https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306>
- SIC: <https://sedeelectronica.sic.gov.co/temas/proteccion-al-consumidor/derechos-y-deberes/Informacion-enganosa>

## Riesgos residuales

| Riesgo | Mitigación |
|---|---|
| El interrogante “¿No sabes cómo empezar?” se interpreta como atributo | Existe versión declarativa: “Una forma clara de empezar” |
| Imagen de procedimiento se considera sensible | Usar equipo/consultorio como reemplazo inmediato |
| Landing contiene términos de dolor | Son orientación clínica neutral; mantener sin alarmismo |
| Plataforma recorta CTA | Assets 4:5/9:16 separados y preview obligatorio |
| Review rechaza por contexto | No intentar evasión; editar, documentar motivo y solicitar revisión legítima |

## Dictamen por pieza

| Pieza / fuente | Estado | Uso |
|---|---|---|
| `valoracion` · IMG-017 | PASS | Paid Meta / orientación |
| `confianza` · IMG-004 | PASS | Paid Meta / equipo real |
| `consultorio` · IMG-005 | PASS | Paid Meta / confianza local |
| `sonrisa` · IMG-015 | REVIEW | Paid solo tras revisar imagen de procedimiento en placement |
| `prevencion` · IMG-015 | REVIEW | Paid solo tras revisar imagen de procedimiento en placement |
| `valoracion-nataly` · VID-003 | PASS | Reels / orientación |
| `consultorio-cierre` · VID-001 | PASS | Reels / espacio real |
| `consultorio-recorrido` · VID-002 | PASS | Reels / espacio real |
| `recorrido-local-montage` · VID-001–003 | REVIEW | Aprobar audio y texto incidental completo |
| `organic-nataly-sonrie` · IMG-007 | REVIEW | Orgánico; paid requiere revisar texto heredado |
| `organic-nataly-cuidamos` · IMG-008 | REVIEW | Orgánico; paid requiere revisar texto heredado |
| `organic-brand-logo` · IMG-019 | PASS | Apoyo de marca, no anuncio principal |
| Cualquier asset con gratis/sin costo | BLOCK | No exportado ni permitido en V1 |
| IMG-020 “citas disponibles” | BLOCK | No exportado; disponibilidad no confirmada |
| Stock/Meta AI/permisos pendientes | BLOCK | No exportado |

## Política de respuesta a rechazo

1. Capturar motivo y asset ID.
2. Pausar esa pieza; no duplicarla para evadir revisión.
3. Comparar anuncio, targeting y landing con la regla señalada.
4. Sustituir lenguaje o imagen de riesgo.
5. Solicitar revisión si el rechazo parece erróneo.
6. Registrar el aprendizaje en `campaign-master.csv` o bitácora privada.
