import fs from "node:fs/promises";
import path from "node:path";

let SpreadsheetFile;
let Workbook;
if (process.env.CODEX_ARTIFACT_VALIDATE === "1") {
  ({ SpreadsheetFile, Workbook } = await import("@oai/artifact-tool"));
}

const root = process.cwd();
const outputDir = path.join(root, "docs", "launch-kit");
const qaDir = path.join(root, ".tmp", "launch-kit-work", "qa");
const domain = "https://www.dranatalyjimenez.com";

const campaigns = [
  { id: "lanzamiento", name: "Lanzamiento del sitio", path: "/", utm: "lanzamiento_sitio" },
  { id: "urgencias", name: "Urgencias odontológicas", path: "/c/urgencias", utm: "urgencias_carepa" },
  { id: "sonrisa", name: "Mejorar mi sonrisa", path: "/c/sonrisa", utm: "sonrisa_carepa" },
  { id: "limpieza", name: "Limpieza y profilaxis", path: "/c/limpieza", utm: "limpieza_carepa" },
  { id: "ortodoncia", name: "Ortodoncia", path: "/c/ortodoncia", utm: "ortodoncia_carepa" },
  { id: "valoracion", name: "Valoración general", path: "/c/valoracion", utm: "valoracion_carepa" },
  { id: "uraba", name: "Carepa, veredas y Urabá", path: "/c/uraba", utm: "uraba_carepa" }
];

const channels = [
  { channel: "instagram_bio", source: "instagram", medium: "profile", content: "bio_main" },
  { channel: "instagram_story", source: "instagram", medium: "social", content: "story_01" },
  { channel: "instagram_post", source: "instagram", medium: "social", content: "post_01" },
  { channel: "facebook_post", source: "facebook", medium: "social", content: "post_01" },
  { channel: "facebook_ad", source: "facebook", medium: "paid_social", content: "ad_01" },
  { channel: "whatsapp_status", source: "whatsapp", medium: "status", content: "status_01" },
  { channel: "whatsapp_direct", source: "whatsapp", medium: "messaging", content: "direct_01" },
  { channel: "google_business", source: "google", medium: "organic", content: "business_post_01" },
  { channel: "qr_print", source: "qr", medium: "offline", content: "qr_print" },
  { channel: "referral", source: "referral", medium: "word_of_mouth", content: "shared_link_01" }
];

function campaignUrl(campaign, channel) {
  const url = new URL(campaign.path, domain);
  url.searchParams.set("utm_source", channel.source);
  url.searchParams.set("utm_medium", channel.medium);
  url.searchParams.set("utm_campaign", campaign.utm);
  url.searchParams.set("utm_content", channel.content);
  return url.toString();
}

const linkHeaders = ["campaign_id", "campaign_name", "channel", "landing_path", "utm_source", "utm_medium", "utm_campaign", "utm_content", "url", "enabled"];
const linkRows = campaigns.flatMap((campaign) => channels.map((channel) => [
  campaign.id,
  campaign.name,
  channel.channel,
  campaign.path,
  channel.source,
  channel.medium,
  campaign.utm,
  channel.content,
  campaignUrl(campaign, channel),
  "true"
]));

const linkFor = (campaignId, channelName) => {
  const campaign = campaigns.find((item) => item.id === campaignId);
  const channel = channels.find((item) => item.channel === channelName);
  if (!campaign || !channel) throw new Error(`Missing campaign link: ${campaignId}/${channelName}`);
  return campaignUrl(campaign, channel);
};

const asset = (campaign, format) => `/marketing/templates/${campaign}-${format}.svg`;
const entries = [
  [1, "lanzamiento", "Presentar la nueva ruta de atención", "instagram_facebook", "feed-square", "Tu consulta empieza más fácil", "La nueva web te ayuda a elegir lo que necesitas y continuar por WhatsApp.", "Elegir mi necesidad", "instagram_post", asset("lanzamiento", "feed-square"), "Admin. redes"],
  [1, "lanzamiento", "Dar visibilidad al lanzamiento", "instagram_whatsapp", "story", "Ya puedes elegir tu camino", "Dolor, sonrisa o cuidado: encuentra una orientación breve antes de escribir.", "Visitar la web", "instagram_story", asset("lanzamiento", "story"), "Admin. redes"],
  [2, "lanzamiento", "Explicar el nuevo sitio", "google_business", "google-business", "Una ruta clara para tu consulta", "Conoce la web del consultorio y elige el motivo de tu consulta antes de escribir.", "Visitar el sitio", "google_business", asset("lanzamiento", "google-business"), "Vanesa"],
  [2, "confianza", "Humanizar el contacto", "whatsapp_status", "story", "Atención cercana desde el inicio", "Primero escuchamos tu necesidad y luego revisamos el siguiente paso.", "Escribir por WhatsApp", "whatsapp_status", asset("lanzamiento", "story"), "Nataly"],
  [3, "confianza", "Presentar a la profesional", "instagram_facebook", "feed-portrait", "Conoce a la Dra. Nataly", "Odontología general, estética y especializada con atención en Carepa.", "Ver el equipo", "instagram_post", asset("valoracion", "feed-portrait"), "Admin. redes"],
  [4, "equipo", "Mostrar acompañamiento", "instagram_story", "story", "Tu valoración empieza escuchándote", "No necesitas saber el nombre del tratamiento para consultar.", "Agendar valoración", "instagram_story", asset("valoracion", "story"), "Nataly"],
  [5, "urgencias", "Orientar sin alarmismo", "instagram_facebook", "meta-horizontal", "¿Tienes dolor o inflamación?", "Consulta disponibilidad para una valoración odontológica en Carepa.", "Consultar disponibilidad", "facebook_post", asset("urgencias", "meta-horizontal"), "Admin. redes"],
  [6, "urgencias", "Activar el acceso rápido", "whatsapp_status", "story", "Dolor dental: consulta disponibilidad", "Entra por la ruta de urgencias y elige la opción más cercana a tu molestia.", "Ver ruta de urgencias", "whatsapp_status", asset("urgencias", "story"), "Vanesa"],
  [7, "atencion_local", "Reforzar cobertura regional", "instagram_story", "story", "Atención en Carepa y Urabá", "Si estás en Carepa o cerca, puedes consultar disponibilidad por WhatsApp.", "Consultar desde mi zona", "instagram_story", asset("lanzamiento", "story"), "Admin. redes"],
  [8, "limpieza", "Promover prevención", "instagram_facebook", "feed-square", "Una sonrisa también se cuida", "La valoración permite orientar si necesitas limpieza o profilaxis.", "Consultar limpieza", "instagram_post", asset("limpieza", "feed-square"), "Admin. redes"],
  [8, "limpieza", "Recordar cuidado preventivo", "whatsapp_status", "story", "¿Hace cuánto no revisas tu sonrisa?", "Consulta una valoración y recibe orientación sobre limpieza y cuidado oral.", "Ver opción de limpieza", "whatsapp_status", asset("limpieza", "story"), "Vanesa"],
  [9, "limpieza", "Educar sobre prevención", "google_business", "google-business", "Prevención con orientación clara", "Una revisión profesional ayuda a definir el cuidado adecuado para dientes y encías.", "Consultar valoración", "google_business", asset("limpieza", "google-business"), "Vanesa"],
  [9, "preguntas", "Resolver una duda común", "instagram_story", "story", "¿Limpieza o valoración primero?", "La revisión permite orientar el manejo según tu salud oral.", "Consultar por WhatsApp", "instagram_story", asset("limpieza", "story"), "Nataly"],
  [10, "limpieza", "Explicar el recorrido", "instagram_facebook", "feed-portrait", "Así consultas una limpieza", "Elige cuidado, selecciona limpieza y abre un mensaje listo para WhatsApp.", "Probar el recorrido", "instagram_post", asset("limpieza", "feed-portrait"), "Admin. redes"],
  [11, "prevencion", "Mantener recordación", "whatsapp_status", "story", "Cuidar hoy evita dejar dudas", "Agenda una valoración para conocer el estado de tu salud oral.", "Agendar valoración", "whatsapp_status", asset("valoracion", "story"), "Vanesa"],
  [12, "uraba", "Captar pacientes cercanos", "instagram_facebook", "meta-horizontal", "Carepa, veredas y Urabá", "Consulta disponibilidad y recibe orientación inicial por WhatsApp.", "Consultar desde mi zona", "facebook_post", asset("lanzamiento", "meta-horizontal"), "Admin. redes"],
  [13, "uraba", "Reforzar cercanía", "instagram_story", "story", "Tu consulta puede empezar aquí", "Usa la ruta regional y continúa por WhatsApp cuando estés listo.", "Abrir ruta regional", "instagram_story", asset("lanzamiento", "story"), "Admin. redes"],
  [14, "confianza", "Mostrar forma de atención", "whatsapp_status", "story", "Orientación antes de decidir", "La valoración profesional ayuda a explicar opciones y siguientes pasos.", "Consultar valoración", "whatsapp_status", asset("valoracion", "story"), "Nataly"],
  [15, "sonrisa", "Captar interés estético", "instagram_facebook", "feed-square", "¿Quieres mejorar tu sonrisa?", "Explora opciones estéticas con valoración previa y expectativas claras.", "Explorar opciones", "instagram_post", asset("sonrisa", "feed-square"), "Admin. redes"],
  [15, "sonrisa", "Presentar ruta estética", "instagram_story", "story", "Tu sonrisa, una ruta más clara", "Elige la opción estética que más se acerca a lo que buscas.", "Abrir ruta de sonrisa", "instagram_story", asset("sonrisa", "story"), "Admin. redes"],
  [16, "sonrisa", "Orientar sobre estética", "google_business", "google-business", "Opciones estéticas con valoración", "Conoce alternativas para tu sonrisa sin elegir un tratamiento antes de la revisión.", "Ver opciones", "google_business", asset("sonrisa", "google-business"), "Vanesa"],
  [16, "preguntas", "Normalizar la incertidumbre", "whatsapp_status", "story", "No tienes que saber el tratamiento", "Cuéntanos qué te gustaría mejorar y consulta disponibilidad para una valoración.", "Consultar por WhatsApp", "whatsapp_status", asset("sonrisa", "story"), "Vanesa"],
  [17, "ortodoncia", "Explicar la consulta inicial", "instagram_facebook", "feed-portrait", "Ortodoncia empieza con valoración", "Se revisan alineación y mordida antes de orientar alternativas.", "Consultar ortodoncia", "instagram_post", asset("ortodoncia", "feed-portrait"), "Nataly"],
  [18, "ortodoncia", "Activar el recorrido", "instagram_story", "story", "¿Te interesa la ortodoncia?", "Entra a la ruta preparada y consulta disponibilidad por WhatsApp.", "Abrir ruta de ortodoncia", "instagram_story", asset("ortodoncia", "story"), "Admin. redes"],
  [19, "preguntas", "Resolver objeción", "instagram_facebook", "feed-square", "¿Debo saber qué necesito?", "No. Puedes empezar por una valoración y recibir orientación profesional.", "Agendar valoración", "instagram_post", asset("valoracion", "feed-square"), "Admin. redes"],
  [20, "sonrisa", "Mantener interés", "whatsapp_status", "story", "Una sonrisa se planea con calma", "La valoración ayuda a revisar salud oral, expectativas y alternativas.", "Consultar sonrisa", "whatsapp_status", asset("sonrisa", "story"), "Nataly"],
  [21, "equipo", "Construir confianza", "instagram_story", "story", "Personas que escuchan tu motivo", "Conoce el equipo interdisciplinario que atiende en Carepa.", "Ver el equipo", "instagram_story", asset("valoracion", "story"), "Admin. redes"],
  [22, "valoracion", "Captar consultas generales", "instagram_facebook", "feed-square", "Empieza por una valoración", "Revisa tu salud oral y conoce qué pasos pueden ser adecuados para ti.", "Agendar valoración", "instagram_post", asset("valoracion", "feed-square"), "Admin. redes"],
  [22, "valoracion", "Facilitar la decisión", "whatsapp_status", "story", "Una valoración aclara el camino", "Entra a la opción general y abre un mensaje listo para consultar.", "Ver valoración general", "whatsapp_status", asset("valoracion", "story"), "Vanesa"],
  [23, "valoracion", "Explicar el punto de partida", "google_business", "google-business", "Tu salud oral, un paso claro", "Agenda una valoración odontológica general con atención en Carepa.", "Consultar disponibilidad", "google_business", asset("valoracion", "google-business"), "Vanesa"],
  [23, "atencion_local", "Reforzar ubicación", "instagram_story", "story", "Atención odontológica en Carepa", "Escribe desde Carepa, una vereda cercana o la región de Urabá.", "Consultar disponibilidad", "instagram_story", asset("lanzamiento", "story"), "Admin. redes"],
  [24, "equipo", "Humanizar la marca", "instagram_facebook", "feed-portrait", "La atención también es confianza", "Conoce a la Dra. Nataly Jiménez y al equipo interdisciplinario.", "Conocer el equipo", "instagram_post", asset("valoracion", "feed-portrait"), "Admin. redes"],
  [25, "preguntas", "Responder sobre precios", "whatsapp_status", "story", "¿Puedo preguntar el valor?", "Sí. El valor depende de la valoración y del manejo que realmente necesites.", "Consultar por WhatsApp", "whatsapp_status", asset("valoracion", "story"), "Vanesa"],
  [26, "lanzamiento", "Recordar el embudo", "instagram_facebook", "meta-horizontal", "Dos pasos antes de escribir", "Elige tu necesidad, revisa una orientación breve y continúa por WhatsApp.", "Usar la nueva ruta", "facebook_post", asset("lanzamiento", "meta-horizontal"), "Admin. redes"],
  [27, "urgencias", "Recordar acceso prioritario", "instagram_story", "story", "¿Dolor ahora? Revisa la ruta", "Selecciona tu motivo y consulta disponibilidad; el recorrido no confirma horarios.", "Consultar urgencia", "instagram_story", asset("urgencias", "story"), "Vanesa"],
  [28, "prevencion", "Cerrar semana con cuidado", "whatsapp_status", "story", "Tu salud oral merece revisión", "Agenda con cita previa y recibe una explicación clara de los siguientes pasos.", "Agendar valoración", "whatsapp_status", asset("valoracion", "story"), "Nataly"],
  [29, "lanzamiento", "Recapitular rutas", "instagram_story", "story", "Dolor, sonrisa o cuidado", "Tres caminos sencillos para llegar a una orientación y continuar por WhatsApp.", "Elegir mi camino", "instagram_story", asset("lanzamiento", "story"), "Admin. redes"],
  [30, "operacion", "Revisar aprendizajes del mes", "interno", "control-manual", "Revisemos qué funcionó", "Consolidar publicaciones, conversaciones y citas sin registrar datos clínicos.", "Actualizar control manual", "referral", "docs/launch-kit/publishing-guide.md", "Nataly y Vanesa"]
];

const calendarHeaders = ["day", "campaign", "objective", "channel", "format", "hook", "short_copy", "cta", "utm_link", "visual_asset", "suggested_owner", "status"];
const calendarRows = entries.map(([day, campaign, objective, channel, format, hook, copy, cta, linkChannel, visual, owner]) => {
  const campaignId = campaigns.some((item) => item.id === campaign) ? campaign : campaign === "prevencion" || campaign === "preguntas" || campaign === "confianza" || campaign === "equipo" ? "valoracion" : campaign === "atencion_local" ? "uraba" : "lanzamiento";
  const exactChannel = channel === "interno" ? "interno" : linkChannel;
  return [day, campaign, objective, exactChannel, format, hook, copy, cta, linkFor(campaignId, linkChannel), visual, owner, "pendiente"];
});

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toCsv(headers, rows) {
  return [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n") + "\n";
}

function mdEscape(value) {
  return String(value).replaceAll("|", "\\|");
}

function markdownTable(headers, rows) {
  return [
    `| ${headers.map(mdEscape).join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(mdEscape).join(" | ")} |`)
  ].join("\n");
}

const linksCsv = toCsv(linkHeaders, linkRows);
const calendarCsv = toCsv(calendarHeaders, calendarRows);

const linksMd = `# Matriz de enlaces de campaña\n\n` +
  `Dominio canónico: \`${domain}\`. Total: **${linkRows.length} enlaces** (${campaigns.length} campañas × ${channels.length} canales).\n\n` +
  `## Convención UTM\n\n- \`utm_source\`: plataforma o procedencia.\n- \`utm_medium\`: tipo de distribución.\n- \`utm_campaign\`: campaña estable.\n- \`utm_content\`: ubicación o variante creativa.\n\n` +
  `No se deben cambiar estos nombres durante los primeros 30 días. Las rutas \`/c/*\` conservan los UTM y no abren WhatsApp automáticamente.\n\n` +
  `## Enlaces\n\n${markdownTable(linkHeaders, linkRows)}\n\n` +
  `## Pendiente real\n\nNo se generó enlace de reseñas ni QR de reseñas de Google porque falta la URL oficial del perfil.\n`;

const calendarMd = `# Calendario de captación — 30 días\n\n` +
  `Cadencia: **3 publicaciones semanales**, **4–6 historias o estados semanales** y **1 publicación semanal en Google Business**. El día 30 se reserva para control operativo, no para exigir otra publicación.\n\n` +
  `Todos los textos evitan diagnósticos, promesas, precios y horarios no confirmados. Cada pieza puede reutilizarse adaptando el formato, sin cambiar el enlace UTM asignado al canal.\n\n` +
  `## Calendario operativo\n\n${markdownTable(calendarHeaders, calendarRows)}\n\n` +
  `## Uso\n\n1. Cambiar \`pendiente\` por \`aprobado\` solo tras revisión de Nataly.\n2. Publicar el recurso indicado o su PNG de vista previa.\n3. Cambiar a \`publicado\` y registrar resultados agregados en el control manual.\n4. No registrar síntomas, diagnósticos ni conversaciones privadas en el repositorio.\n`;

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(qaDir, { recursive: true });
await fs.writeFile(path.join(outputDir, "campaign-links.csv"), linksCsv, "utf8");
await fs.writeFile(path.join(outputDir, "campaign-links.md"), linksMd, "utf8");
await fs.writeFile(path.join(outputDir, "calendar-30-days.csv"), calendarCsv, "utf8");
await fs.writeFile(path.join(outputDir, "calendar-30-days.md"), calendarMd, "utf8");

async function verifyCsv(name, csvText, sheetName, expectedRows, expectedCols) {
  const workbook = await Workbook.fromCSV(csvText, { sheetName });
  const sheet = workbook.worksheets.getItem(sheetName);
  const endColumn = String.fromCharCode(64 + expectedCols);
  const header = sheet.getRange(`A1:${endColumn}1`);
  header.format = { fill: "#0D6B73", font: { bold: true, color: "#FFFFFF" }, wrapText: true };
  sheet.freezePanes.freezeRows(1);
  sheet.showGridLines = false;
  sheet.getUsedRange().format.autofitColumns();
  sheet.getUsedRange().format.autofitRows();
  const inspection = await workbook.inspect({ kind: "table", range: `${sheetName}!A1:${endColumn}6`, include: "values", tableMaxRows: 6, tableMaxCols: expectedCols, maxChars: 6000 });
  const used = sheet.getUsedRange().values;
  if (used.length !== expectedRows + 1 || used[0].length !== expectedCols) throw new Error(`${name}: unexpected shape ${used.length}x${used[0].length}`);
  const preview = await workbook.render({ sheetName, range: `A1:${endColumn}6`, scale: 1, format: "png" });
  await fs.writeFile(path.join(qaDir, `${name}.png`), new Uint8Array(await preview.arrayBuffer()));
  const xlsx = await SpreadsheetFile.exportXlsx(workbook);
  await xlsx.save(path.join(qaDir, `${name}.xlsx`));
  return inspection.ndjson;
}

let linksInspection = "Validación de Artifact Tool omitida; usa CODEX_ARTIFACT_VALIDATE=1 en un entorno de desarrollo compatible.";
let calendarInspection = linksInspection;
if (SpreadsheetFile && Workbook) {
  linksInspection = await verifyCsv("campaign-links", linksCsv, "Campaign Links", linkRows.length, linkHeaders.length);
  calendarInspection = await verifyCsv("calendar-30-days", calendarCsv, "Calendar", calendarRows.length, calendarHeaders.length);
}

const qa = {
  canonicalDomain: domain,
  campaigns: campaigns.length,
  channels: channels.length,
  links: linkRows.length,
  calendarEntries: calendarRows.length,
  allLinksCanonical: linkRows.every((row) => row[8].startsWith(`${domain}/`) || row[8].startsWith(`${domain}?`)),
  allLinksHaveFourUtms: linkRows.every((row) => ["utm_source", "utm_medium", "utm_campaign", "utm_content"].every((key) => new URL(row[8]).searchParams.has(key))),
  allCalendarHooksMaxEightWords: calendarRows.every((row) => String(row[5]).trim().split(/\s+/).length <= 8),
  linksInspection,
  calendarInspection
};
await fs.writeFile(path.join(qaDir, "data-qa.json"), JSON.stringify(qa, null, 2), "utf8");
console.log(JSON.stringify(qa, null, 2));
