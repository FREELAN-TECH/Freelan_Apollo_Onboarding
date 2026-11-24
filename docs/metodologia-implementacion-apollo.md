# Metodología de implementación Apollo GTM — Proceso del copiloto

**Versión:** 2 (reemplaza la v1)
**Alcance:** proceso que el copiloto usa para guiar al consultor de Freelan y al cliente desde el discovery hasta los entregables técnicos de configuración de Apollo.
**Fuente de referencia:** `contexto/apollo/` (one-pager GTM, infografías de los 7 pilares, notas de facilitador, paquetes de servicio).
**Fuera de alcance:** precios y propuestas comerciales.

---

## 1. Principios

1. **Cada caso es distinto.** El copiloto arma el plan con los datos del cliente. No aplica una plantilla fija.
2. **El ritmo lo marca el cliente.** Un caso puede durar días o semanas. Las semanas de Apollo son referencia máxima, no calendario.
3. **Gates, no fechas.** Una fase avanza cuando se cumple su criterio de salida, no cuando se cumple un plazo.
4. **Recomendaciones de Apollo por defecto.** Si el cliente no tiene dato propio, se usa el valor de Apollo y se marca como tal.
5. **Revisión conjunta.** El cliente, apoyado por Freelan, revisa y aprueba cada entregable antes de que pase al equipo técnico.
6. **Sistema, no campaña.** Todo se diseña para operación evergreen, no para lanzamientos con fecha de fin.

---

## 2. Ciclo general

```
Discovery → Diagnóstico de datos → Diseño del sistema → Construcción → Validación → Go-live → Operación
```

| Etapa | Propósito | Salida | Quién |
|---|---|---|---|
| **E0. Discovery** | Entender negocio, ICP, ciclo de venta y stack | Ficha de cliente | Consultor + cliente |
| **E1. Diagnóstico de datos** | Obtener cifras reales para calcular tamaños | Hoja de cálculo de funnel | Cliente (entrega), consultor (valida) |
| **E2. Diseño por pilar** | Definir reglas y parámetros de cada pilar | Especificaciones por pilar | Consultor + cliente |
| **E3. Revisión conjunta** | Cliente aprueba con apoyo de Freelan | Aprobaciones firmadas por pilar | Cliente + Freelan |
| **E4. Configuración técnica** | Equipo técnico construye en Apollo y HubSpot | Sistema configurado | Equipo técnico |
| **E5. Validación y go-live** | Probar con muestra real y activar | Sistema en operación | Cliente + Freelan |
| **E6. Operación** | Cadencias de refresh, scoring y reporting | Reportes y ajustes | Cliente + Freelan |

**Regla del copiloto:** no se pasa de una etapa a otra sin su salida completa. Si el cliente quiere avanzar sin datos, el copiloto lo registra como riesgo y pide confirmación explícita.

---

## 3. E0 — Discovery

### 3.1 Preguntas (conversación, sin límite de 4)

El límite de 4 preguntas aplica al formulario automático de propuesta. El discovery conversacional va por bloques:

**Negocio y objetivo**
1. ¿Cuál es la meta de ingresos o pipeline para los próximos 12 meses?
2. ¿Qué productos o servicios vende y a qué tipo de cliente?
3. ¿Qué segmentos existen hoy y cuál es prioritario?

**Ciclo de venta y equipo**
4. ¿Cuánto dura su ciclo de venta promedio?
5. ¿Cuántas personas prospectan y cuántas cierran?
6. ¿Quién es el dueño del proceso comercial y quién aprueba cambios?

**Stack y datos**
7. ¿Qué herramientas usan hoy para prospectar, CRM, enriquecimiento y envío?
8. ¿Tienen HubSpot? ¿Qué versión y quién lo administra?
9. ¿Hay listas de cuentas existentes? ¿Cuántas y en qué formato?

**Restricciones**
10. ¿Qué mercados, industrias o cuentas están excluidas?
11. ¿Hay restricciones legales o de datos (consentimiento, privacidad, países)?
12. ¿Cuál es la fecha objetivo para primer impacto?

### 3.2 Insights a recoger

| Insight | Para qué sirve | Fuente |
|---|---|---|
| Meta de cierres y pipeline | Dimensionar el TAM (E1) | Cliente |
| Tasa de cierre real | Dimensionar el TAM (E1) | Cliente (histórico) |
| Ciclo de venta | Definir ventana de señales y cadencia | Cliente |
| Tamaño y roles del equipo | Dimensionar revisión humana y mailboxes | Cliente |
| Industrias y segmentos prioritarios | Filtros del TAM y pesos iniciales | Cliente + consultor |
| Stack actual y calidad de datos | Mapeo a HubSpot y riesgo técnico | Cliente + consultor |
| Restricciones de datos y mercado | Exclusiones y cumplimiento | Cliente |
| Velocidad de decisiones internas | Ritmo del proyecto | Consultor |

**Gate E0:** ficha de cliente completa, con meta, segmentos prioritarios y responsables de aprobación identificados.

---

## 4. E1 — Diagnóstico de datos y cálculo de tamaño

Esta etapa define cuántas empresas necesita el TAM y cuántas deben validarse en muestra.

### 4.1 Datos que se solicitan al cliente

| # | Dato | Ejemplo | Si no lo tiene |
|---|---|---|---|
| D1 | Negocios cerrados esperados en el periodo | 20 en 12 meses | Obligatorio. Sin esto no hay cálculo |
| D2 | Tasa de cierre real (ganados ÷ oportunidades, últimos 12 meses) | 25% | Usar histórico de 6 meses; si no hay, calibrar con piloto |
| D3 | Tasa de conversión de cuenta contactada a oportunidad | 4% | Calibrar con piloto de 50–100 cuentas (referencia Apollo) |
| D4 | Empresas que ya están en CRM por segmento | 1,200 | Opcional |

### 4.2 Fórmulas

**Paso 1: oportunidades requeridas**

```
Oportunidades = Negocios cerrados esperados ÷ Tasa de cierre real
```

**Paso 2: empresas totales requeridas en el TAM**

```
Empresas TAM = Oportunidades ÷ Tasa de conversión cuenta → oportunidad
```

**Paso 3: tamaño de muestra para validar el TAM**

Muestra estadística para estimar la proporción de cuentas correctamente cualificadas, con nivel de confianza 95% y margen de error ±5% (valores por defecto, ajustables con el cliente):

```
n₀ = z² × p × (1 − p) ÷ e²        z = 1.96, p = 0.5, e = 0.05  →  n₀ = 384
n  = n₀ ÷ (1 + (n₀ − 1) ÷ N)      N = Empresas TAM (corrección para población finita)
```

**Tabla de referencia (95% de confianza, ±5%, p = 0.5):**

| Empresas en TAM (N) | Muestra (n) |
|---|---|
| 500 | 218 |
| 1,000 | 278 |
| 2,000 | 323 |
| 5,000 | 357 |
| 10,000 | 370 |
| 25,000 | 379 |
| 50,000 | 382 |

**Regla de mínimo:** si la muestra calculada supera el 20% del TAM, o si el TAM es menor a 500 empresas, el copiloto marca que la validación debe ser completa, no muestral.

### 4.3 Ejemplo ilustrativo (no es dato de cliente)

- Meta: 20 negocios cerrados en 12 meses
- Tasa de cierre real: 25% → **80 oportunidades**
- Conversión cuenta → oportunidad: 4% → **2,000 empresas en TAM**
- Muestra de validación: **323 empresas** (95% de confianza, ±5%)

### 4.4 Gate E1

- D1 y D2 entregados y validados por el consultor
- Empresas TAM calculadas y aprobadas por el cliente
- Muestra de validación definida con su fórmula

---

## 5. E2 — Diseño por pilar

Cada pilar tiene: preguntas al cliente, insights, entregables para el equipo técnico y criterio de salida. Las referencias de Apollo se usan como valor por defecto.

### Pilar 1 — TAM

**Preguntas**
- ¿Cuáles son los segmentos y cómo se definen (industria, tamaño, geografía, tecnología)?
- ¿Qué cuentas deben excluirse y por qué?
- ¿Qué señales cualitativas identifican un buen fit (que los filtros no capturan)?

**Insights**
- Segmentos y criterios de fit
- Exclusiones explícitas
- Calidad y cobertura de las listas existentes

**Entregables para el equipo técnico**
- E-P1.1 Especificación de filtros por segmento (geografía, ingresos, headcount, industria, keywords)
- E-P1.2 Definición de criterios de calificación con IA (Power-Ups y Litmus Test)
- E-P1.3 Lista TAM unificada en Apollo, una por segmento
- E-P1.4 Muestra de validación extraída según sección 4.2

**Valores Apollo por defecto:** pre-TAM de 10–200K; TAM cualificado de 10–50K; refresh trimestral.

**Gate P1:** TAM por segmento validado sobre la muestra con aprobación del cliente.

### Pilar 2 — Deliverability y burn rate

**Preguntas**
- ¿Tienen dominios y mailboxes actuales? ¿En qué estado están?
- ¿Hay envíos previos con problemas de reputación?
- ¿Cuántos días al mes se puede enviar?

**Insights**
- Infraestructura existente y su reputación
- Capacidad de envío real del equipo

**Entregables**
- E-P2.1 Cálculo de volumen: contactos por cuenta (muestra de 50–100 cuentas) × emails por contacto
- E-P2.2 Burn rate por periodo (referencia 6 meses)
- E-P2.3 Mailboxes y dominios requeridos, con buffer de 30%
- E-P2.4 Plan de calentamiento de dominios

**Valores Apollo por defecto:** 2–5 contactos por cuenta; 3–5 emails por contacto; burn rate 6 meses; 20–25 emails por día por mailbox; 3 mailboxes por dominio; buffer 30%; 22 días de envío al mes.

**Gate P2:** número de mailboxes y dominios aprobado por el cliente, con buffer incluido.

### Pilar 3 — Scoring y priorización

**Preguntas**
- ¿Qué señales indican que una cuenta está lista para comprar?
- ¿Cuál es la prioridad de negocio entre señales (liderazgo lo decide)?
- ¿Qué significa "cuenta caliente" para su equipo?

**Insights**
- Señales de fit y de timing
- Prioridades del liderazgo convertidas en pesos
- Cuentas que el equipo considera ganadas en el pasado (para calibrar)

**Entregables**
- E-P3.1 Catálogo de señales (fit, timing, intent, tech stack, crecimiento, engagement)
- E-P3.2 Tabla de pesos por señal aprobada por liderazgo
- E-P3.3 Regla de score por cuenta (suma ponderada, 0–100)
- E-P3.4 Plan de recalibración trimestral por correlación con respuesta y reunión

**Valores Apollo por defecto:** señal fuerte cuando r > 0.7; recalibración trimestral.

**Gate P3:** cambiar un peso re-ordena el mercado y el cambio queda documentado.

### Pilar 4 — Messaging intelligence

**Preguntas**
- ¿Qué problemas resuelve su producto para cada segmento?
- ¿Qué casos de éxito puede citar? (solo con autorización)
- ¿Qué tono y restricciones de lenguaje debe respetar el mensaje?

**Insights**
- Propuesta de valor por segmento
- Casos de éxito disponibles y aprobados
- Lenguaje prohibido o sensible

**Entregables**
- E-P4.1 Guía de mensaje por cada señal del pilar 3
- E-P4.2 Guía de mensaje por segmento y caso de estudio
- E-P4.3 Prompt de copy ensamblado (guías + contexto de investigación)
- E-P4.4 Muestra de 20–30 mensajes generados, revisada por el cliente

**Valores Apollo por defecto:** 100–150 palabras por mensaje; CTA de llamada de descubrimiento; tono profesional.

**Gate P4:** cada señal activa tiene guía de mensaje y la muestra de mensajes está aprobada.

### Pilar 5 — Orquestación de datos y workflows

**Preguntas**
- ¿Qué fuentes de datos existen (CRM, Apollo, terceros)?
- ¿Quién recibe los leads y bajo qué reglas?
- ¿Qué campos de HubSpot ya existen y cuáles hay que crear?

**Insights**
- Mapa de fuentes de datos y responsables
- Reglas de ruteo y asignación
- Campos existentes en HubSpot y su calidad

**Entregables**
- E-P5.1 Tabla de planeación (fila por señal) y tabla operativa (columna por señal)
- E-P5.2 Mapeo de campos Apollo ↔ HubSpot
- E-P5.3 Especificación de workflows: Trigger → Enrich → Route
- E-P5.4 Calendario de refresh (tiempo real, diario, semanal, mensual, trimestral)

**Valores Apollo por defecto:** tres fuentes (1ª parte CRM, 2ª parte Apollo, 3ª parte terceros); cinco cadencias de refresh.

**Gate P5:** un lead de prueba recorre Apollo → HubSpot → rep asignado de punta a punta.

### Pilar 6 — Human in the loop (revisión humana)

**Preguntas**
- ¿Quién del cliente revisa los mensajes y con qué frecuencia?
- ¿Qué criterio usan para rechazar un mensaje o una cuenta?
- ¿Cuánto tiempo diario puede dedicar cada revisor?

**Insights**
- Roles de revisión y disponibilidad real
- Criterios de rechazo
- Patrones de corrección del equipo

**Entregables**
- E-P6.1 Umbral de triage configurado en 90 (envío automático < 90, revisión humana ≥ 90)
- E-P6.2 Roster de revisores con responsable por segmento
- E-P6.3 Flujo de acciones: aprobar, rechazar, regenerar, con motivo
- E-P6.4 Regla de retroalimentación hacia pilares 3, 4 y 7

**Valores Apollo por defecto:** revisión del top ~10%; umbral 90.

**Gate P6:** revisores asignados, cola operando y primer ciclo de feedback registrado.

**Nota:** la revisión conjunta de cliente + Freelan (sección 6) aplica a los entregables de diseño. La revisión humana de este pilar la hace el equipo del cliente sobre las cuentas en operación.

### Pilar 7 — Reporting y optimización

**Preguntas**
- ¿Qué resultados quiere ver el liderazgo y con qué frecuencia?
- ¿Quién actúa sobre los reportes?

**Insights**
- Métricas que importan al liderazgo
- Responsables de cada cadencia

**Entregables**
- E-P7.1 Dashboard por señal (reply %, meeting %, correlación)
- E-P7.2 Definición de métricas y fórmulas
- E-P7.3 Calendario de cadencias: mensual (táctico) y trimestral (estratégico)

**Valores Apollo por defecto:** cadencia mensual táctica y trimestral estratégica.

**Gate P7:** dashboard publicado con cadencias agendadas y responsables asignados.

---

## 6. E3 — Revisión conjunta

- **Quién:** el cliente revisa y aprueba cada entregable de E2. Freelan lo acompaña en la sesión.
- **Qué se aprueba:** cifras de E1, tamaño de muestra, TAM por segmento, pesos, guías de mensaje, mapeo de HubSpot, número de mailboxes y dominios.
- **Cómo:** sesión por pilar o por bloque, con el entregable en pantalla y registro de cada decisión con fecha y responsable del cliente.
- **Salida:** aprobación firmada (correo o acta) por pilar. Sin aprobación, el entregable no pasa a E4.

---

## 7. E4 a E6 — Configuración, validación y operación

- **E4 Configuración técnica:** el equipo técnico construye con los entregables aprobados. No interpreta: si algo no está en el entregable, pregunta al copiloto.
- **E5 Validación y go-live:** prueba con muestra real (sección 4.2). Se activa operación cuando los gates P1 a P6 están cumplidos.
- **E6 Operación:** cadencias de P5 (refresh), P3 (recalibración trimestral) y P7 (reporting mensual y trimestral).

**Cómo se mide el ritmo:** el copiloto registra fecha de inicio y de cierre de cada gate. Con esos datos estima el tiempo restante y lo muestra al consultor. Si un gate se atora, lo marca como bloqueo y pide la decisión que falta.

---

## 8. Estructura de entregables para el equipo técnico

Cada entregable se genera como documento aprobado con este encabezado:

| Campo | Contenido |
|---|---|
| ID | E-Pn.x |
| Cliente | Nombre interno (no va en repos) |
| Pilar y fase | — |
| Versión | v1, v2… |
| Aprobado por | Responsable del cliente y fecha |
| Parámetros | Valores definidos, con marca si son de Apollo o del cliente |
| Pasos de configuración | Lista ordenada |
| Criterio de verificación | Cómo se confirma que quedó bien |

---

## 9. Puntos abiertos

1. **Conversión cuenta → oportunidad (D3):** sin histórico del cliente, no hay base de Apollo para este dato. Hay que calibrar con piloto o acordar un supuesto explícito.
2. **Revisión de HITL:** confirmar si la revisión de cliente + Freelan se aplica solo a diseño (E3) o también a cuentas del top 10% en operación.
3. **Duración de referencia:** las notas de facilitador dicen 9 semanas; el one-pager de GTM System Build dice 6–8. Se usa como máximo, pero conviene confirmar.
4. **Tamaño mínimo de TAM para validación completa:** la regla de 20% y 500 empresas es propuesta del copiloto; confirmar.
