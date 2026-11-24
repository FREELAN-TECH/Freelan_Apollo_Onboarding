# Handoff — Copiloto de implementación Apollo GTM

Estado al cierre de la sesión de trabajo. Úsalo para continuar en una sesión nueva.

## 1. Objetivo
Aplicación web interna para consultores de Freelan que guía el onboarding de clientes que compraron Apollo. Genera entregables en DOCX por pilar y un SOW de configuración de Apollo.

## 2. Decisiones tomadas
- **Usuarios:** solo consultores de Freelan. Login con correo y contraseña.
- **Roles:** administrador (Settings: conectar Claude, Apollo y HubSpot; alta de usuarios) y consultor.
- **Alcance:** la app guía y genera entregables. No escribe en Apollo ni en HubSpot. El equipo técnico configura a mano a partir de los entregables.
- **Entregables:** DOCX con estándar de consultoría de negocios. Un documento por pilar y un SOW de configuración de Apollo.
- **Stack propuesto y aceptado:** Next.js en Railway, Supabase para autenticación y base de datos, API de Claude para el copiloto.
- **Secretos:** las claves capturadas en Settings se guardan cifradas en la base de datos. Nunca en el repo ni en el chat.
- **Paleta (pendiente de confirmar contra el portal de propuestas):**
  - Fondo `#060608`, texto `#f5f7fb`, azul `#425B76`, gris `#444444`, morado `#6d46a8`, línea `#ffffff17`, texto secundario `#a7acb8`.
  - Tipografía: Arial, Helvetica, sans-serif.
- **Metodología:** proceso adaptable por cliente, gates por pilar, muestra calculada desde cierres esperados y tasa de cierre real.

## 3. Metodología (fuente de verdad)
- Especificación: `docs/metodologia-implementacion-apollo.md` (versión 2 + ajustes).
- Fuentes de Apollo: `contexto/apollo/` (cinco archivos).
- Decisiones de la última revisión:
  - **Conversión cuenta → oportunidad:** se determina en la sesión con el cliente.
  - **Revisión humana:** el cliente valida la calidad de las cuentas del top 10%.
  - **Tamaño del TAM:** sin tope. Las referencias de Apollo son TAM cualificado de 10–50K por segmento, pre-TAM de 10–200K y base de 35M+ cuentas.
  - **Fórmula de muestra:** 95% de confianza y ±5%, con corrección de población finita. Es metodología de Freelan, no de Apollo.
- Métricas de referencia (fuente Apollo): +45% reply, −27% ciclo, +38% pipeline, +62% reuniones. Son benchmarks, no garantías.
- **Excluido:** precios y la garantía "+25% en 6 meses" de las notas de facilitador.

## 4. Estado del repo
- Rama de trabajo: `claude/wizardly-cannon-88sunp`.
- Commits relevantes: contexto de Apollo, especificación v1, especificación v2 y ajustes de TAM.
- Aún no hay código de la aplicación.

## 5. Railway
- El proyecto existe (ID en el dashboard). No hay servicio conectado al repo.
- En las sesiones actuales solo hay herramientas de forks. No se pueden crear servicios ni variables desde el copiloto.
- **Opción A (preferida):** conector de Railway con permisos completos en claude.ai, y sesión nueva.
- **Opción C (respaldo):** el administrador de Railway crea el servicio desde GitHub una vez, y el copiloto publica cambios con `git push`.

## 6. Pendientes, en orden
1. Confirmar acceso a Railway en la sesión nueva (opción A) o aplicar la opción C.
2. Confirmar paleta: ¿la oscura de arriba o la navy/naranja del portal de propuestas?
3. Crear proyecto en Supabase y definir variables de entorno en Railway (credenciales de Supabase y clave de Claude API). Nunca en el repo.
4. Construir la primera versión:
   - Estructura de Next.js y login por correo y contraseña.
   - Menú de Settings para el administrador.
   - Flujo de discovery y gates por pilar.
   - Plantilla DOCX por pilar y SOW de Apollo.
5. Pruebas con un caso ficticio de inicio a fin.

## 7. Notas para la siguiente sesión
- No incluir nombres de clientes de referencia, correos ni claves en archivos, commits ni issues.
- Mensajes de commit sin identificadores de modelo.
- La conversación con el usuario es en español latinoamericano, con tono ejecutivo y directo.
