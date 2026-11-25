import { ArrowUpRight, Building2, CircleCheck, Clock3, FileText, Plus, ShieldCheck } from "lucide-react";

const pillars = ["TAM", "Deliverability", "Scoring", "Messaging", "Workflows", "Revisión humana", "Reporting"];

export default function Home() {
  return <main className="shell">
    <aside className="sidebar">
      <div className="brand"><span className="brandMark">F</span><span>freelan<span className="muted"> / apollo</span></span></div>
      <nav><a className="active">Resumen</a><a>Onboardings</a><a>Documentos</a><a>Configuración</a></nav>
      <div className="sidebarFoot"><ShieldCheck size={16}/> Cuenta interna Freelan</div>
    </aside>
    <section className="content">
      <header className="topbar"><div><p className="eyebrow">IMPLEMENTACIÓN APOLLO</p><h1>Centro de onboardings</h1></div><a className="primary" href="/onboarding"><Plus size={17}/> Nuevo onboarding</a></header>
      <div className="hero"><div><p className="eyebrow accent">VISTA GENERAL</p><h2>Convierte cada implementación en un sistema repetible.</h2><p className="heroCopy">Guía el discovery, documenta las decisiones y entrega al equipo técnico un plan listo para configurar.</p></div><div className="heroStat"><span>3</span><small>proyectos activos</small></div></div>
      <div className="stats"><Stat icon={<Clock3/>} label="En progreso" value="2" note="1 requiere atención"/><Stat icon={<CircleCheck/>} label="Listos para revisión" value="1" note="Esta semana"/><Stat icon={<FileText/>} label="Documentos generados" value="12" note="Últimos 30 días"/></div>
      <div className="sectionHead"><div><p className="eyebrow">PROYECTOS RECIENTES</p><h3>Onboardings activos</h3></div><button className="ghost">Ver todos <ArrowUpRight size={15}/></button></div>
      <div className="projects"><Project name="Grupo Avándaro" company="Grupo Avándaro · HubSpot" progress={68} stage="Diseño por pilar" owner="AV"/><Project name="Northstar SaaS" company="Northstar · HubSpot" progress={31} stage="Diagnóstico de datos" owner="MG"/><Project name="Lumen Industrial" company="Lumen Industrial · HubSpot" progress={100} stage="Listo para revisión" owner="AR" done/></div>
      <div className="sectionHead pillarsHead"><div><p className="eyebrow">METODOLOGÍA</p><h3>Los siete pilares</h3></div></div>
      <div className="pillars">{pillars.map((p, i) => <div className="pillar" key={p}><span>{String(i+1).padStart(2,"0")}</span><b>{p}</b><small>{i < 2 ? "Fundamento" : i < 5 ? "Diseño" : "Operación"}</small></div>)}</div>
    </section>
  </main>;
}

function Stat({icon,label,value,note}:{icon:React.ReactNode;label:string;value:string;note:string}) { return <div className="stat"><div className="statIcon">{icon}</div><div><small>{label}</small><strong>{value}</strong><span>{note}</span></div></div> }
function Project({name,company,progress,stage,owner,done}:{name:string;company:string;progress:number;stage:string;owner:string;done?:boolean}) { return <article className="project"><div className="projectTop"><div className="companyIcon"><Building2 size={18}/></div><div className="projectName"><h4>{name}</h4><span>{company}</span></div><span className={done ? "status done" : "status"}>{stage}</span><span className="avatar">{owner}</span><ArrowUpRight className="arrow" size={17}/></div><div className="progressRow"><div className="bar"><i style={{width:`${progress}%`}}/></div><strong>{progress}%</strong><span>Última actualización hoy</span></div></article> }
