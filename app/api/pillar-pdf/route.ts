import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const guide: Record<number, string[]> = {
  1: ["El TAM unificado define la única fuente de verdad para la prospección.", "Evita listas fragmentadas y duplicidad entre representantes.", "Comenzar amplio y dejar que la inteligencia haga la precisión.", "Validar el universo en Apollo y activar enriquecimiento."],
  2: ["La entregabilidad traduce volumen, secuencias y reciclaje en infraestructura.", "Protege la reputación de dominios y la tasa de entrega.", "Usar matemática de volumen, 20–25 envíos diarios y 30% de buffer.", "Confirmar dominios, buzones y calentamiento."],
  3: ["El scoring convierte señales de mercado en prioridad operativa.", "Concentra el tiempo comercial en cuentas con mayor intención.", "Ajustar pesos con respuestas positivas y reuniones reales.", "Publicar la matriz y probarla con datos históricos."],
  4: ["La inteligencia de mensajes conecta cada señal con una narrativa relevante.", "Evita mensajes genéricos y mejora la contextualización.", "Usar ángulos, movimientos y reglas; nunca inventar evidencia.", "Aprobar la biblioteca de ángulos y sus límites."],
  5: ["La orquestación convierte la estrategia en un flujo evergreen.", "Reduce la dependencia de campañas manuales.", "Combinar first-party, Apollo y terceros con prompts documentados.", "Configurar fuentes, prompts y enrutamiento."],
  6: ["Human in the loop define dónde interviene el criterio comercial.", "Protege la calidad en oportunidades de alto valor.", "Revisar el top 10% y documentar cada rechazo o ajuste.", "Definir umbral, responsables y motivos de feedback."],
  7: ["El flywheel mide resultados, aprende y mejora la operación.", "Separa intuiciones de señales realmente predictivas.", "Revisar tácticamente cada mes y estratégicamente cada trimestre.", "Agendar cadencias y establecer KPIs."],
};
const labels = ["Decisión principal", "Señales y criterios", "Roles y responsables", "Exclusiones y restricciones"];

export async function POST(request: Request) {
  const { pillar, title, values, gate } = await request.json(); const p = Number(pillar); const g = guide[p] ?? guide[1];
  const pdf = await PDFDocument.create(); const page = pdf.addPage([612, 792]); const regular = await pdf.embedFont(StandardFonts.Helvetica); const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const purple = rgb(.40, .24, .65); const ink = rgb(.12, .12, .16); const muted = rgb(.34, .36, .42); const light = rgb(.95, .94, .98);
  page.drawRectangle({ x: 0, y: 730, width: 612, height: 62, color: rgb(.035, .035, .05) }); page.drawText("FREELAN / APOLLO", { x: 42, y: 758, size: 13, font: bold, color: rgb(1, 1, 1) });
  page.drawText(`PILAR ${p}  ·  ${title}`, { x: 42, y: 684, size: 21, font: bold, color: purple }); page.drawText("Entregable de implementación · Apollo Onboarding", { x: 42, y: 662, size: 9, font: regular, color: muted });
  let y = 620; const section = (heading: string, body: string, fill = false) => { if (fill) page.drawRectangle({ x: 36, y: y - 8, width: 540, height: 57, color: light }); page.drawText(heading.toUpperCase(), { x: 48, y, size: 8, font: bold, color: purple }); y -= 16; page.drawText(body.slice(0, 210), { x: 48, y, size: 10, font: regular, color: ink, maxWidth: 510, lineHeight: 13 }); y -= 38; };
  section("Contexto", g[0], true); section("Por qué importa", g[1]); section("Recomendación del sistema", g[2], true);
  page.drawText("DECISIONES CAPTURADAS", { x: 42, y, size: 8, font: bold, color: purple }); y -= 18;
  for (const [i, value] of Object.values(values ?? {}).entries()) { page.drawText(labels[i] ?? `Decisión ${i + 1}`, { x: 48, y, size: 10, font: bold, color: ink }); y -= 14; page.drawText(String(value || "Pendiente de definir").slice(0, 180), { x: 48, y, size: 9, font: regular, color: muted }); y -= 27; }
  section("Implicación / siguiente paso", g[3], true); page.drawText("GATE DE APROBACIÓN", { x: 42, y: 92, size: 8, font: bold, color: purple }); page.drawText(gate || "Pendiente de aprobación del cliente", { x: 48, y: 77, size: 9, font: regular, color: ink }); page.drawText(`Generado: ${new Date().toLocaleDateString("es-MX")}`, { x: 42, y: 46, size: 8, font: regular, color: muted });
  const bytes = await pdf.save(); const body = new ArrayBuffer(bytes.byteLength); new Uint8Array(body).set(bytes); return new Response(body, { headers: { "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="pilar-${p}.pdf"` } });
}

