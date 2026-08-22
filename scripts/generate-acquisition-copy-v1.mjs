import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const docs = path.join(root, "docs", "acquisition-v1");
const domain = "https://www.dranatalyjimenez.com";

const shared = {
  clarity: ["Conoce Cómo Empezar", "Atención Clara y Cercana", "Primero Valorar y Orientar", "Opciones Según Tu Caso", "Decide con Información"],
  action: ["Consulta Disponibilidad", "Atención con Cita Previa", "Habla con Nuestro Equipo", "Información por WhatsApp", "Consultorio en Carepa"]
};

const groups = [
  {
    id: "odontologo_valoracion", label: "Odontologo_Valoracion", route: "/c/valoracion",
    intent: ["Odontología en Carepa", "Dentista en Carepa", "Valoración Odontológica", "Consultorio Odontológico", "Dra. Nataly Jiménez"],
    descriptions: [
      "Atención odontológica en Carepa. Conoce el equipo y solicita orientación.",
      "La valoración permite entender cada caso antes de definir opciones de cuidado.",
      "Revisa servicios y conoce cómo dar un primer paso informado para tu salud oral.",
      "Un equipo real y cercano te orienta según lo que se observe en la valoración.",
      "Consulta disponibilidad por WhatsApp y conoce la información antes de agendar.",
      "Atención con cita previa en Carepa. Escríbenos si deseas solicitar orientación."
    ]
  },
  {
    id: "urgencias", label: "Urgencias", route: "/c/urgencias",
    intent: ["Urgencias Dentales Carepa", "Orientación Dental Carepa", "Atención Odontológica", "Primero Debemos Valorar", "Revisión Profesional"],
    descriptions: [
      "Ante una molestia dental, consulta disponibilidad y orientación con el equipo.",
      "Cada situación debe valorarse antes de indicar el manejo apropiado para el caso.",
      "Conoce el proceso para solicitar orientación odontológica responsable en Carepa.",
      "El equipo revisa disponibilidad y orienta el siguiente paso de forma responsable.",
      "Solicita información por WhatsApp. La valoración define el siguiente paso.",
      "Evita el autotratamiento y consulta cómo recibir una revisión profesional."
    ]
  },
  {
    id: "limpieza", label: "Limpieza", route: "/c/limpieza",
    intent: ["Limpieza Dental en Carepa", "Higiene Oral en Carepa", "Cuidado Preventivo Dental", "Consulta por Limpieza", "Profilaxis Dental Carepa"],
    descriptions: [
      "Conoce el servicio de limpieza dental y solicita orientación en Carepa.",
      "La valoración ayuda a revisar dientes, encías y el cuidado apropiado para el caso.",
      "La prevención comienza con información clara y una revisión profesional.",
      "Revisa cómo empezar y conoce opciones de higiene oral según tu valoración.",
      "Consulta disponibilidad por WhatsApp antes de solicitar tu cita de limpieza.",
      "Atención con cita previa. Conoce el consultorio y conversa con nuestro equipo."
    ]
  },
  {
    id: "ortodoncia", label: "Ortodoncia", route: "/c/ortodoncia",
    intent: ["Ortodoncia en Carepa", "Valoración de Ortodoncia", "Opciones de Ortodoncia", "Revisión de Tu Mordida", "Alineación Dental Carepa"],
    descriptions: [
      "Conoce opciones de ortodoncia a partir de una valoración profesional en Carepa.",
      "Cada plan depende de la alineación, la mordida y las necesidades observadas.",
      "Infórmate sobre el punto de partida antes de elegir una alternativa de ortodoncia.",
      "La valoración permite explicar opciones, pasos y expectativas de forma responsable.",
      "Consulta disponibilidad por WhatsApp y solicita información para una valoración.",
      "Conoce al equipo y revisa cómo empezar tu consulta de ortodoncia en Carepa."
    ]
  },
  {
    id: "diseno_estetica", label: "Diseno_Estetica", route: "/c/sonrisa",
    intent: ["Diseño de Sonrisa Carepa", "Opciones para Tu Sonrisa", "Cuidado Estético Dental", "Primero Una Valoración", "Tu Sonrisa Es Única"],
    descriptions: [
      "Explora opciones estéticas con orientación profesional y expectativas realistas.",
      "Cada resultado depende del caso; una valoración permite conocer alternativas.",
      "Infórmate antes de elegir. Tu salud oral y tus objetivos orientan cada opción.",
      "Conoce servicios estéticos y un proceso responsable para decidir con calma.",
      "Consulta disponibilidad por WhatsApp y solicita orientación para una valoración.",
      "Conoce el consultorio en Carepa y conversa con el equipo sobre tus objetivos."
    ]
  }
];

function escapeCsv(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function csv(headers, rows) {
  return `${headers.join(",")}\n${rows.map((row) => headers.map((key) => escapeCsv(row[key])).join(",")).join("\n")}\n`;
}

function parseCsv(input) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    if (char === '"') {
      if (quoted && input[index + 1] === '"') { field += '"'; index += 1; } else quoted = !quoted;
    } else if (char === "," && !quoted) { row.push(field); field = ""; }
    else if ((char === "\r" || char === "\n") && !quoted) {
      if (char === "\r" && input[index + 1] === "\n") index += 1;
      row.push(field); if (row.some(Boolean)) rows.push(row); row = []; field = "";
    } else field += char;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [headers, ...body] = rows;
  return body.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

const googleRows = [];
const conceptNames = ["A_INTENT", "B_CLARITY", "C_ACTION"];
for (const group of groups) {
  const headlineSets = [group.intent, shared.clarity, shared.action];
  for (let conceptIndex = 0; conceptIndex < 3; conceptIndex += 1) {
    const concept = conceptNames[conceptIndex];
    const utm = `utm_source=google&utm_medium=cpc&utm_campaign=search_${group.id}_carepa&utm_content=rsa_${concept.toLowerCase()}`;
    const finalUrl = `${domain}${group.route}?${utm}`;
    headlineSets[conceptIndex].forEach((text, index) => googleRows.push({
      campaign: "CAREPA_SEARCH_ODONTOLOGIA_V1", ad_group: group.label, concept,
      asset_type: "headline", position: index + 1, text, char_count: [...text].length,
      final_url: finalUrl, status: "DRAFT", policy_status: "PASS"
    }));
    group.descriptions.slice(conceptIndex * 2, conceptIndex * 2 + 2).forEach((text, index) => googleRows.push({
      campaign: "CAREPA_SEARCH_ODONTOLOGIA_V1", ad_group: group.label, concept,
      asset_type: "description", position: index + 1, text, char_count: [...text].length,
      final_url: finalUrl, status: "DRAFT", policy_status: "PASS"
    }));
  }
}
await fs.writeFile(path.join(docs, "google-ads-copy.csv"), csv(
  ["campaign", "ad_group", "concept", "asset_type", "position", "text", "char_count", "final_url", "status", "policy_status"], googleRows
));

let googleMd = "# Google RSA copy\n\nQuince conceptos listos para carga manual: tres por cada una de cinco intenciones. Cada concepto tiene cinco titulares y dos descripciones, por encima del mínimo vigente de tres y dos. No fijar assets salvo evidencia; dejar que el RSA combine dentro de cada concepto.\n\n";
for (const group of groups) {
  googleMd += `## ${group.label}\n\nLanding: \`${group.route}\`.\n\n`;
  for (const concept of conceptNames) {
    const assets = googleRows.filter((row) => row.ad_group === group.label && row.concept === concept);
    googleMd += `### ${concept}\n\n`;
    googleMd += `- Headlines: ${assets.filter((row) => row.asset_type === "headline").map((row) => `“${row.text}”`).join("; ")}\n`;
    googleMd += `- Descriptions: ${assets.filter((row) => row.asset_type === "description").map((row) => `“${row.text}”`).join("; ")}\n\n`;
  }
}
await fs.writeFile(path.join(docs, "google-ads-copy.md"), `${googleMd.trimEnd()}\n`);

const keywordPath = path.join(docs, "google-keywords.csv");
const keywords = parseCsv(await fs.readFile(keywordPath, "utf8")).map((row) => ({
  campaign: row.campaign,
  ad_group: row.ad_group,
  keyword: row.keyword,
  match_type: row.match_type,
  intent: row.intent,
  landing: row.landing ?? row.landing_path,
  priority: ({ high: "P0", medium: "P1", low: "TEST" })[row.priority] ?? row.priority,
  risk: row.intent === "urgent" ? "policy-review" : (row.status === "HOLD" || row.notes?.includes("HOLD")) ? "geo-hold" : "low",
  notes: [row.notes, row.status === "HOLD" ? "HOLD" : "DRAFT"].filter(Boolean).join("; ")
}));
await fs.writeFile(keywordPath, csv(["campaign", "ad_group", "keyword", "match_type", "intent", "landing", "priority", "risk", "notes"], keywords));

const metaPath = path.join(docs, "meta-ads-copy.csv");
const metaRows = parseCsv(await fs.readFile(metaPath, "utf8")).map((row) => ({
  ...row,
  landing_url: row.landing_url.replace("https://www.consultoriodranatalyjimenez.com", domain),
  hook: row.headline,
  placement: row.format === "reel" ? "Reels/Stories" : row.format === "story" ? "Stories" : "Feed",
  policy_notes: "PASS; lenguaje prudente; sin atributo personal ni promesas de resultado"
}));
await fs.writeFile(metaPath, csv(
  ["ad_id", "angle", "format", "primary_text", "headline", "description", "cta", "landing_url", "asset_path", "hook", "placement", "policy_notes", "status"], metaRows
));

let metaMd = "# Meta ads copy\n\nTres variaciones por cada uno de cinco ángulos. El destino inicial es la web; WhatsApp directo permanece en HOLD hasta tener SLA y atribución.\n\n";
for (const angle of [...new Set(metaRows.map((row) => row.angle))]) {
  metaMd += `## ${angle}\n\n`;
  for (const row of metaRows.filter((item) => item.angle === angle)) {
    metaMd += `### ${row.ad_id} · ${row.placement}\n\n- Primary: ${row.primary_text}\n- Headline: ${row.headline}\n- CTA: ${row.cta}\n- Route: ${new URL(row.landing_url).pathname}\n- Asset: \`${row.asset_path}\`\n- Policy: ${row.policy_notes}\n\n`;
  }
}
await fs.writeFile(path.join(docs, "meta-ads-copy.md"), `${metaMd.trimEnd()}\n`);

const master = [];
for (const group of groups) {
  for (const concept of conceptNames) {
    const assets = googleRows.filter((row) => row.ad_group === group.label && row.concept === concept);
    const first = assets[0];
    master.push({
      platform: "Google Search", campaign: "CAREPA_SEARCH_ODONTOLOGIA_V1", ad_group: group.label,
      audience: "18+; Carepa; presencia", intent: group.id, asset: "RSA text", copy_id: `${group.id}_${concept}`,
      headline: assets.filter((row) => row.asset_type === "headline").map((row) => row.text).join(" | "),
      cta: "Consulta disponibilidad", landing: group.route, utm: new URL(first.final_url).search.slice(1),
      budget_scenario: "BASE COP 1.000.000 total", status: "DRAFT", policy_status: "PASS",
      notes: "Search only; frase/exacta; publicar solo con aprobación humana"
    });
  }
}
for (const row of metaRows) {
  const url = new URL(row.landing_url);
  master.push({
    platform: "Meta", campaign: "META_TRAFFIC_CAREPA_V1", ad_group: row.angle,
    audience: "18+; Carepa; amplia sin salud sensible", intent: row.angle, asset: row.asset_path,
    copy_id: row.ad_id, headline: row.headline, cta: row.cta, landing: url.pathname,
    utm: url.search.slice(1), budget_scenario: "BASE COP 1.000.000 total", status: "DRAFT",
    policy_status: "PASS", notes: `${row.placement}; website destination; WhatsApp directo HOLD`
  });
}
master.push({
  platform: "Organic", campaign: "ORGANIC_SUPPORT_V1", ad_group: "GBP+Instagram+Facebook+WA Status",
  audience: "Carepa y Urabá", intent: "trust+education", asset: "Launch Kit + PUBLIC-SAFE",
  copy_id: "ORGANIC_SUPPORT", headline: "Contenido real y orientación", cta: "Conoce cómo empezar",
  landing: "/c/valoracion", utm: "utm_medium=organic&utm_campaign=pa_v1_support",
  budget_scenario: "Sin pauta", status: "DRAFT", policy_status: "REVIEW",
  notes: "Verificar dirección/horario antes de publicar"
});
await fs.writeFile(path.join(docs, "campaign-master.csv"), csv(
  ["platform", "campaign", "ad_group", "audience", "intent", "asset", "copy_id", "headline", "cta", "landing", "utm", "budget_scenario", "status", "policy_status", "notes"], master
));

console.log(`Generated ${googleRows.length} Google RSA assets, ${metaRows.length} Meta ads and ${master.length} master rows.`);
