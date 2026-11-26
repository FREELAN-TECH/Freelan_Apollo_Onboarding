import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
export async function POST(request: Request) {
  const { pillar, title, values } = await request.json(); const pdf = await PDFDocument.create(); const page = pdf.addPage([612,792]);
  const regular = await pdf.embedFont(StandardFonts.Helvetica); const bold = await pdf.embedFont(StandardFonts.HelveticaBold); const purple=rgb(.43,.27,.66);
  page.drawRectangle({x:0,y:730,width:612,height:62,color:rgb(.04,.04,.05)}); page.drawText("FREELAN / APOLLO",{x:42,y:762,size:11,font:bold,color:rgb(1,1,1)}); page.drawText(`Pilar ${pillar} · ${title}`,{x:42,y:686,size:22,font:bold,color:purple}); page.drawText("Entregable de implementación · Apollo Onboarding",{x:42,y:664,size:9,font:regular,color:rgb(.35,.37,.42)});
  let y=610; for(const[key,value]of Object.entries(values??{})){const label=key==="visible"?"Criterios visibles":key==="lowVisibility"?"Señales de baja visibilidad":key==="buyers"?"Buyer personas":"Exclusiones"; page.drawText(label,{x:42,y,size:11,font:bold,color:rgb(.1,.1,.12)}); y-=18; page.drawText(String(value||"Pendiente de definir").slice(0,105),{x:42,y,size:10,font:regular,color:rgb(.28,.29,.33)}); y-=42;}
  page.drawText("Gate de aprobación: criterios aceptados por el cliente.",{x:42,y:82,size:9,font:regular,color:purple}); page.drawText(`Generado: ${new Date().toLocaleDateString("es-MX")}`,{x:42,y:58,size:8,font:regular,color:rgb(.45,.46,.5)});
  const bytes = await pdf.save();
  const body = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(body).set(bytes);
  return new Response(body,{headers:{"Content-Type":"application/pdf","Content-Disposition":`attachment; filename="pilar-${pillar}.pdf"`} });
}

