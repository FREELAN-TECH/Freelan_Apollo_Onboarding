# Metodología de implementación Apollo GTM — Base para el copiloto

**Alcance:** lógica de implementación que el copiloto usará para guiar al consultor de Freelan en el onboarding de clientes que compraron Apollo.
**Fuente principal:** `contexto/apollo/` (one-pager GTM, infografías de los 7 pilares, notas de facilitador).
**Fuera de alcance:** precios y paquetes comerciales. Se usan solo como contexto.

---

## 1. Principio rector

Apollo es un **sistema de siete pilares** que se construye en orden. Cada pilar depende del anterior y el último (reporting) devuelve correcciones a todos.

> "Remove any layer and the system degrades." — Apollo GTM Methodology, p. 02

El copiloto no debe permitir saltar pilares ni avanzar a la siguiente fase sin cumplir el criterio de salida de la actual.

---

## 2. Secuencia de implementación

Duraciones de referencia tomadas de las fuentes de Apollo. Ver sección 6 para la discrepancia pendiente.

| Fase | Semanas (ref.) | Pilar(es) | Entregable | Criterio de salida (gate) |
|---|---|---|---|---|
| **F0. Discovery y planeación** | 1–2 | — | Segmentos, ICP, stack actual, objetivo de pipeline, dueños internos | Segmentos y criterios de TAM aprobados por el cliente |
| **F1. Construcción del TAM** | 3–4 | 1 | TAM unificado por segmento | Lista cualificada validada sobre muestra. **Hito: primer impacto visible (semana 4)** |
| **F2. Deliverability y burn rate** | 3–4 (en paralelo a F1) | 2 | Dominios y mailboxes calculados desde el TAM | Capacidad de envío calculada, con buffer |
| **F3. Scoring y priorización** | 5–6 | 3 | Pesos de señales definidos por liderazgo | Cambiar un peso re-ordena el mercado |
| **F4. Messaging intelligence** | 5–6 | 4 | Guías de mensaje por señal y prompt ensamblado | Cada señal activa tiene su línea de mensaje revisada |
| **F5. Orquestación de datos y workflows** | 7–8 | 5 | Tabla de señales convertida en columnas; flujos automatizados; integración con HubSpot | Lead de Apollo llega a HubSpot y se rutea al rep |
| **F6. Human in the loop** | 7–8 | 6 | Umbral de triage y revisores asignados | Cola de revisión operando; decisiones registradas |
| **F7. Reporting y optimización** | 9+ | 7 | Dashboard por señal; cadencias definidas | Correlación señal → respuesta/reunión visible |
| **Go-live** | 9+ | Todos | Operación evergreen | Sistema corriendo sin campañas con fecha de inicio y fin |

**Regla del copiloto:** no se pasa a F(n+1) sin gate de F(n) cumplido. Si el consultor pide saltar, el copiloto lo registra como riesgo y pide confirmación explícita.

---

## 3. Lógica por pilar

### Pilar 1 — Construir el TAM
- **Objetivo:** una sola lista de cuentas por segmento. Nada de listas por vendedor.
- **Pasos:**
  1. Filtros amplios visibles en Apollo: geografía, ingresos, headcount, industria, keywords. "Si hay duda, incluir."
  2. Pre-TAM amplio, con capa de calificación por IA (Power-Ups, señales cualitativas, Litmus Test).
  3. TAM cualificado, validado sobre una muestra y refrescado trimestralmente.
- **Preguntas que el copiloto debe hacer:** segmentos objetivo, criterios de tamaño, geografías, industrias prioritarias, exclusiones.
- **Gate:** TAM único por segmento, validado sobre muestra, con responsable de refresh.

### Pilar 2 — Deliverability y burn rate
- **Objetivo:** calcular la infraestructura de envío a partir del tamaño del mercado, no por intuición.
- **Cálculo:** TAM → contactos por cuenta → emails por contacto → volumen total → burn rate → mailboxes → dominios → buffer.
- **Variables ajustables:** contactos por cuenta, emails por contacto, burn rate, días de envío al mes, emails por día por mailbox.
- **Gate:** número de mailboxes y dominios calculado y aprobado, con buffer incluido.

### Pilar 3 — Scoring y priorización
- **Objetivo:** cada cuenta ordenada por señales de fit y timing. Las prioridades del liderazgo se vuelven pesos.
- **Pasos:**
  1. Definir el catálogo de señales (contratación, financiamiento, industria, intent, tech stack, crecimiento, engagement).
  2. Asignar pesos según prioridad de negocio.
  3. Recalibrar pesos correlacionando cada señal con respuesta y reunión (cada trimestre).
- **Preguntas que el copiloto debe hacer:** qué señales importan al cliente, cuáles son prioridad, qué significa "cuenta caliente" para su equipo.
- **Gate:** pesos aprobados por liderazgo; ranking visible; prueba de cambio de peso documentada.

### Pilar 4 — Messaging intelligence
- **Principio:** una sola investigación produce dos salidas: el **ranking** y el **mensaje**.
- **Pasos:**
  1. Mapear cada señal a una guía de mensaje (ej. "contratando 3+ roles de ventas" → "Vi que están escalando el equipo comercial este trimestre…").
  2. Ensamblar el prompt de copy con las guías de las señales activas más el contexto de investigación.
  3. Parámetros de salida: tono profesional, 100–150 palabras, CTA de llamada de descubrimiento.
- **Gate:** cada señal del pilar 3 tiene guía de mensaje; muestra de mensajes revisada por el consultor.

### Pilar 5 — Orquestación de datos y workflows
- **Principio:** la tabla de planeación (una fila por señal) se invierte en tabla operativa (una columna por señal).
- **Fuentes:** 1ª parte (CRM), 2ª parte (Apollo), 3ª parte (proveedores externos).
- **Flujo:** Trigger → Enrich → Route. Al agregarse una cuenta, todos los power-ups corren y la cuenta se rutea.
- **Cadencias de refresh:** tiempo real, diario, semanal, mensual, trimestral.
- **Integración HubSpot:** contacto creado en Apollo → sincroniza a HubSpot → campos personalizados (score, señales, ángulo de mensaje) → workflow asigna lead al SDR.
- **Gate:** flujo de punta a punta probado con al menos una cuenta real; campos de HubSpot mapeados.

### Pilar 6 — Human in the loop
- **Principio:** las personas revisan el **top ~10%** antes de enviar. Cada aprobación, edición o rechazo entrena el sistema.
- **Umbral de triage:** score < 90 → envío automático; score ≥ 90 → revisión humana. Ver nota en sección 6.
- **Acciones del revisor:** aprobar, rechazar, regenerar, con razón. El feedback se dirige a pilares 3 (ajuste de pesos), 4 (ajuste de prompts) y 7 (patrones de rechazo).
- **Preguntas que el copiloto debe hacer:** quién revisa, cuánto tiempo por día, qué criterio de rechazo usan.
- **Gate:** revisores asignados, cola operando, primer ciclo de feedback registrado.

### Pilar 7 — Reporting y optimización
- **Métricas por señal:** % de respuesta, % de reunión, correlación (r). Señal fuerte: r > 0.7 (criterio de la infografía).
- **Ciclo:** medir → analizar → ajustar (pesos y prompts, con human in the loop) → desplegar.
- **Cadencias:** mensual para ajustes tácticos; trimestral para realineación estratégica.
- **Gate:** dashboard por señal publicado; cadencia mensual y trimestral agendada con responsable.

---

## 4. Referencias de Apollo (fuente: Apollo GTM Methodology)

Se usan como referencia y se citan con su fuente. No son garantías.

| Métrica / parámetro | Valor de referencia | Fuente |
|---|---|---|
| Mejora en reply rate (SaaS mid-market, 12 meses) | +45% | Apollo one-pager |
| Reducción del ciclo de venta | −27% | Apollo one-pager |
| Generación de pipeline | +38% | Apollo one-pager |
| Tasa de reunión | +62% | Apollo one-pager |
| Cuentas en la base de Apollo | 35M+ | Infografía Pilar 1 |
| Pre-TAM | 10–200K | Infografía Pilar 1 |
| TAM cualificado | 10–50K | Infografía Pilar 1 |
| Burn rate estándar | 6 meses | Infografía Pilar 2 |
| Emails por día por mailbox | 20–25 | Infografía Pilar 2 |
| Mailboxes por dominio | 3 | Infografía Pilar 2 |
| Buffer de infraestructura | +30% | Infografía Pilar 2 |
| Umbral de triage | 90 | Infografía Pilar 6 |
| Revisión humana | Top ~10% | Apollo one-pager / Pilar 6 |
| Primer impacto visible | Semana 4 | Apollo one-pager |

**Ejemplos ilustrativos (no son benchmarks):** los scores de "Acme Corp", los datos de muestra del dashboard (p. ej. +18% de uplift, 91% de precisión HITL) y los mensajes de ejemplo son demostraciones de la infografía. El copiloto no debe presentarlos como resultados de un cliente.

**Excluido:** la garantía "+25% de reply en 6 meses o recalibramos" de las notas de facilitador. No se usa en la app.

---

## 5. Comportamiento del copiloto

- **Guía por fase:** muestra la fase actual, el gate pendiente y las preguntas del pilar.
- **Preguntas de discovery:** máximo 4 por formulario, según el flujo estándar de Freelan.
- **Registro:** cada decisión del cliente (segmentos, pesos, umbral, revisores) queda registrada con fecha y responsable.
- **Alertas:** si un gate no se cumple o se intenta saltar una fase, el copiloto lo marca como riesgo.
- **Lenguaje:** Apollo es el motor de la metodología; HubSpot es la capa de operación. Ninguna propuesta de la app presenta precios.

---

## 6. Puntos abiertos

1. **Duración total:** las notas de facilitador dicen 9 semanas; el one-pager del GTM System Build dice 6–8 semanas. Confirmar con Antonio cuál usar como referencia.
2. **Validación del TAM sobre muestra:** falta definir tamaño de muestra y quién aprueba.
3. **Umbral de triage 90:** fijo en la infografía. Confirmar si el cliente puede ajustarlo.
4. **Número de revisores humanos:** no está definido en las fuentes. Confirmar la regla de dimensionamiento.
5. **Integración HubSpot:** confirmar qué campos personalizados se crean en el portal del cliente.
