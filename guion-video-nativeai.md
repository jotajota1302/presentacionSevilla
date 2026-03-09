# Guión de Vídeo — Native AI Methodology
## Caso Real: Teatro Real de Madrid
**NTT DATA EMEAL · AI Native Squad · Julio 2025**

---

> **Formato**: 1920×1080 · 30fps · ~140 segundos
> **Estilo**: Fondo blanco/azul marino, colores NTT Data (#00245D navy, #0097CF cyan)
> **Público**: Ejecutivos — lenguaje en inglés, claro y directo
> **Estructura**: El proceso de `proceso-blanca.png` (7 pasos) ilustrado con el caso real Teatro Real

---

## ESCENA 1 — PORTADA
**Duración**: 5 segundos (0s → 5s)
**Fondo**: Blanco con barra navy arriba y degradado navy→cyan abajo

### Contenido visual
- Logo **NTT DaTa** (navy + cyan)
- Título grande:
  > **The New Context of**
  > **Software Development**
- Badge cyan:
  > **A real case: AI Native**
- Subtexto:
  > A new team configuration designed to **maximize the potential of AI in software development**, redefining activities, roles and outputs to get faster and more accurate results.
- Pie:
  > NTT DATA EMEAL · AI Native Squad · Julio 2025

### Animación
- Logo aparece (fade)
- Título entra desde abajo (spring)
- Badge cyan aparece con rebote
- Descripción y pie hacen fade in escalonado

---

## ESCENA 2 — EL RETO: TEATRO REAL
**Duración**: 9 segundos (5s → 14s)
**Fondo**: Gris muy claro (#F5F8FC)

### Contexto narrativo
> El Teatro Real de Madrid necesitaba digitalizar todos sus procesos operativos: planificación de actividades, guiones técnicos de producción, logística de salas. Todo estaba en Excel, Word y email.

### Contenido visual — Dos columnas enfrentadas

| ANTES (izquierda, rojo) | → | DESPUÉS (derecha, verde) |
|---|---|---|
| 📄 Activity planning in Excel | | 🏛️ TEMPO: Activities & calendar |
| 📝 Technical scripts in Word | | 🎭 TOPS: Technical production scripts |
| 📧 Coordination by email | | 👥 ADMIN: Users, roles, permissions |
| 🔄 Inconsistent data & duplicates | | ⚡ Angular 18 + Spring Boot 3 + PostgreSQL |
| ⏱️ Hours lost in manual updates | | 🚀 MVP live in weeks, not months |

**Centro**: flecha → con badge "AI Native Methodology"

### Animación
- Columna izquierda entra desde la izquierda
- Flecha y badge aparecen en el centro
- Columna derecha entra desde la derecha

---

## ESCENA 3 — STEP 1: AGENT DESIGN
**Duración**: 14 segundos (14s → 28s)
**Fondo**: Blanco
**Barra superior navy**: `AI STRATEGY AND GOVERNANCE`

### Actor
> **AI Architect**

### Qué hace
Antes de tocar ningún documento, define los agentes especializados que van a trabajar en el proyecto. Cada agente replica un rol real del equipo de desarrollo con su propio system prompt: personalidad, capacidades, stack tecnológico y formato de salida.

> **Por qué primero los agentes**: los agentes son las herramientas con las que luego se extrae el contexto. Sin ellos definidos, la extracción sería genérica y poco útil.

### Contenido visual — 3 tarjetas de agente

**Agente 1 — Requirements Analyst** (azul medio)
```
Fichero: 01-analista-requisitos.md

# Agente: Analista de Requisitos
## Identidad y Rol
Eres un Analista de Requisitos Senior
con 15+ años de experiencia...

## Capacidades:
- Análisis de requisitos
- Generación User Stories
- Detección de ambigüedades
- Trazabilidad completa
```

**Agente 2 — Frontend Expert** (cyan)
```
Fichero: 08-experto-frontend.md

# Agente: Experto Frontend
## Stack:
- Angular 18.2 Standalone Components
- Angular Material 18
- TailwindCSS 3.4
- Signals (estado)

## Módulos:
- TEMPO Calendar
- TOPS Script Editor
- ADMIN Dashboard
```

**Agente 3 — Backend Expert** (verde)
```
Fichero: 09-experto-backend.md

# Agente: Experto Backend
## Stack:
- Java 17 + Spring Boot 3.3.0
- Spring Data JPA
- PostgreSQL 16

## Arquitectura:
- REST Controllers
- Service Layer
- Repository (JPA)
```

**Pie de escena**:
> 💡 Each agent knows the project context — no generic AI, specialized engineers

### Animación
- Las 3 tarjetas caen desde arriba de forma escalonada
- Cada tarjeta muestra primero el header coloreado y luego el contenido del prompt

---

## ESCENA 4 — STEP 2: CONTEXT ANALYSIS
**Duración**: 17 segundos (28s → 45s)
**Fondo**: Blanco
**Barra superior navy**: `AI STRATEGY AND GOVERNANCE`

### Actor
> **AI Architect**

### Qué hace
Con los agentes ya definidos, los usa para leer y procesar toda la documentación del cliente. El **Requirements Analyst agent** extrae las funcionalidades del negocio. El **Backend Expert agent** detalla cómo implementar esas funcionalidades en Java 17 + Spring Boot. El **Frontend Expert agent** detalla cómo implementarlas en Angular 18. El resultado es un repositorio de contexto estructurado que alimentará el resto del proceso.

> **Importante**: no hay código previo que analizar — es un proyecto nuevo. Los agentes de backend y frontend no leen código existente, sino que traducen los requisitos funcionales a decisiones de implementación técnica en la tecnología destino.

### Contenido visual — 3 columnas (Input → Agents → Output)

**Columna 1 — INPUT (DOC_INICIAL)**
```
📄 TR-Requisitos Generales v1.2.docx
📊 TEMPO - Temporada 2025-2026.xlsx
📊 CALENDARIO 2025.xlsx
📝 Contexto TEATRO REAL Gestión
    Interna del Teatro.docx
📝 Guion Regiduria CARMEN.docx
📋 Estado_Implementacion_TEMPO.md
📋 TR_Matriz_Requerimientos.md
```

**Columna 2 — PROCESO (Axet Plugin + Agents)**

Cada agente tiene una misión distinta:
- 🔍 **Requirements Analyst** → extrae funcionalidades del negocio
- ⚙️ **Backend Expert** → decide cómo implementarlas en Java 17 + Spring Boot
- 🎨 **Frontend Expert** → decide cómo implementarlas en Angular 18

Estructura de carpetas del repositorio:
```
~/teatro-real/
  📁 AGENTES/          ← ya definidos
  📁 DOC_INICIAL/      ← input del cliente
  📁 DOC_GENERADA/     ← output generado
  📁 PROMPT_FRAMEWORK/
  📁 scripts/
  📁 teatro-real-backend/
  📁 teatro-real-frontend/
```
Botón navy: `aXet .plugin + CONTEXT`

**Columna 3 — OUTPUT (DOC_GENERADA)**
```
→ PLAN_IMPLEMENTACION_COMPLETO.md
→ GUIA_ESTILOS_TEATRO.md
→ CONTEXTO_BACKEND.md
→ CONTEXTO_FRONTEND.md
```
Nota verde: `✓ Context ready — agents have full project knowledge`

### Animación
- Barra superior aparece inmediatamente
- Badge step 2 + título entran desde la izquierda
- Las 3 columnas aparecen escalonadas (izquierda, centro, derecha)
- Dentro de la columna 2, las carpetas aparecen una a una

---

## ESCENA 5 — RAPID PROTOTYPE & PRD VALIDATION ⭐
**Duración**: 16 segundos (45s → 61s)
**Fondo**: Gris muy claro (#F5F8FC) — diferente al resto para destacarla visualmente
**Barra superior navy**: `FROM CONTEXT TO VALIDATION`

### Actor
> **AI Architect** + cliente (Teatro Real)

### Qué hace
Con el contexto extraído, se construye un **prototipo funcional rápido** en React + Supabase — tecnología distinta a la de producción, elegida por velocidad. El objetivo no es construir el sistema final, sino **validar con el cliente** que el entendimiento es correcto antes de invertir en el desarrollo real.

> **Por qué importa**: El prototipo permitió presentar al Teatro Real una versión navegable del sistema en días, validar el PRD, y detectar enfoques erróneos antes de que se convirtieran en código de producción. **Esto es valor directo de la metodología AI Native.**

### Contenido visual — Flujo horizontal de 4 pasos

```
[Contexto extraído]  →  [Prototipo React+Supabase]  →  [Validación con cliente]  →  [PRD corregido]
```

**Paso 1 — PRD disponible**
- Badge: `EspecificacionFuncional_TeatroReal.md ✓`
- Texto: "Functional requirements captured"

**Paso 2 — Prototipo rápido**
- Stack badge: `React + Supabase`
- Texto: "Working prototype in days, not weeks"
- Icono: pantalla con interfaz simplificada (placeholder para screenshot)
- Nota: "Technology-agnostic — built for speed, not production"

**Paso 3 — Validación con cliente**
- Icono: 🤝 reunión / presentación
- Texto: "Teatro Real reviews the prototype"
- Resultado: feedback real, correcciones identificadas

**Paso 4 — PRD actualizado**
- Badge verde: `EspecificacionFuncional_TeatroReal.md v2 ✓`
- Texto: "Wrong assumptions corrected early"
- Mensaje destacado: **"Fix misunderstandings before writing production code"**

### Animación
- Los 4 pasos aparecen de izquierda a derecha con flechas que se dibujan entre ellos
- El paso 4 aparece con un efecto de "sello verde" para enfatizar la validación

---

## ESCENA 6 — STEP 3: PROMPTING FRAMEWORK
**Duración**: 14 segundos (61s → 75s)
**Fondo**: Blanco
**Barra superior navy**: `FRAMEWORK SET UP`

### Actor
> **AI Lead**

### Qué hace
Con el contexto validado y el PRD corregido, construye las plantillas de prompt que transforman los requisitos en instrucciones estructuradas y listas para ejecutar en Axet Plugin. Estandariza el trabajo de todo el equipo de desarrollo.

### Contenido visual — 2 columnas

**Columna izquierda — Catálogo de plantillas (PROMPT_FRAMEWORK/)**

| Fichero | Para qué |
|---|---|
| `PROMPT_FEATURE.md` | Full-stack feature (Backend + Frontend) |
| `PROMPT_BACKEND.md` | Spring Boot endpoint creation |
| `PROMPT_FRONTEND.md` | Angular component generation |
| `PROMPT_BUGFIX.md` | Bug identification & fix |

Nota cursiva:
> Convert client requirements into **structured, production-ready prompts**

**Columna derecha — Extracto real de PROMPT_FEATURE.md**
```
## Contexto del Proyecto

Sistema de Gestión del Teatro Real
Backend: Java 17 + Spring Boot 3.3.0
Frontend: Angular 18.2 + TailwindCSS 3.4

## Solicitud de Feature
Módulo: [ADMIN | TEMPO | TOPS]
Requisito: [RF-TEMPO-X | RF-TOPS-X]

## Historia de Usuario
Como [rol] quiero [acción]
Para [beneficio]

## Criterios de Aceptación
- [ ] Criterio verificable 1
- [ ] Criterio verificable 2

## Restricciones Técnicas
- Seguir arquitectura existente
- No romper tests actuales
```

### Animación
- Columna izquierda entra desde la izquierda, las filas de plantillas aparecen una a una
- Columna derecha (panel de código) entra desde la derecha

---

## ESCENA 7 — STEP 4: DEVELOPMENT
**Duración**: 19 segundos (75s → 94s)
**Fondo**: Blanco
**Barra superior navy**: `AI-SUPPORTED DEVELOPMENT STREAMS`

### Actores
> **AI Lead** — Planes de implementación y seguimiento
> **Front AI Dev** — Angular 18 · Components · UI
> **Back AI Dev** — Spring Boot · REST APIs · JPA

### Qué hacen
El equipo genera el código con Axet Plugin usando los prompts y el contexto preparados. El AI Lead hace seguimiento del plan de implementación. Los devs generan, revisan y refinan el código.

### Contenido visual — 2 columnas

**Columna izquierda — El equipo**

Tarjetas con icono de rol y detalle:
- 👤 `AI Lead` · Implementation plans & dev tracking
- 👤 `Front AI Dev` · Angular 18 · Components · UI
- 👤 `Back AI Dev` · Spring Boot · REST APIs · JPA

Nota: `🛠️ Co-creating code with AI agents using Axet Plugin`

**Columna derecha — Progreso de sprints**

Barras de progreso animadas:

| Sprint | Progreso |
|---|---|
| Sprint 0: Setup | ✅ 100% |
| Sprint 1: Auth + Layout | ✅ 100% |
| Sprint 2: TEMPO | ✅ 100% |
| Sprint 3: TOPS | 🔵 95% |
| Sprint 4: Integrations | 🟠 35% |
| Sprint 5: Deploy | 🟠 30% |

Banner navy:
> **Global Progress — ~80%** (en cyan grande)

### Animación
- Tarjetas del equipo entran desde la izquierda escalonadas
- Las barras de progreso se rellenan una a una
- El banner de 80% aparece al final con pop

---

## ESCENA 8 — STEP 5: QUALITY ASSURANCE
**Duración**: 13 segundos (94s → 107s)
**Fondo**: Blanco
**Barra superior navy**: `AI-SUPPORTED DEVELOPMENT STREAMS`

### Actores
> **MR Validator** + **AI Architect**

### Qué hacen
Una vez que el developer integra sus cambios en la rama de desarrollo, el código pasa por validación humana: revisión del MR, integración en development, paso de tests y comprobación antes de desplegar. No hay merge automático.

### Contenido visual — Flujo lineal de 4 pasos

Pasos con badge circular numerado y flecha entre ellos:

1. **MR created** — Front AI Dev / Back AI Dev abre el merge request
2. **Human review** — MR Validator revisa el código e integra en development
3. **Test pass** — Ejecución de tests sobre development
4. **Ready to deploy** — Validación superada, listo para despliegue

Banner navy:
> 🔒 Human validation before every integration and merge

### Animación
- Los 4 pasos aparecen de izquierda a derecha escalonados
- Flechas entre pasos se dibujan progresivamente
- Banner aparece al final

---

## ESCENA 9 — STEP 6: AI MODEL TUNING
**Duración**: 11 segundos (107s → 118s)
**Fondo**: Blanco con **sidebar cyan** derecho (igual que en proceso-blanca.png)
**Sidebar**: `VALIDATION & CONTROL LAYER` (vertical)

### Actor
> **AI Lead**

### Qué hace
El AI Lead revisa iterativamente todas las fases para mejorar la precisión y eficiencia. Cuando algo no funciona bien en generación o QA, actualiza el Harness: contexto, prompts o definición de agentes.

### Contenido visual — 2 columnas

**Columna izquierda — Feedback Loop**

Cada problema detectado → acción correctiva:

| Problema | Acción |
|---|---|
| ⚠ Missing business context | → Update EspecificacionFuncional.md |
| ⚠ Agent not following patterns | → Update CONTEXTO_BACKEND.md |
| ⚠ Incomplete prompt template | → Improve PROMPT_FEATURE.md |
| ⚠ Wrong agent behavior | → Adjust system prompt in AGENTES/ |

**Columna derecha — Panel de código (mejora continua)**
```javascript
// Enhance prompts
// Improve agent behaviors
// Refine dev patterns

Harness.update({
  agentes: review(),
  contexto: enrich(),
  prompts: refine(),
  patterns: optimize()
});

// Result:
// Better code, fewer iterations
// Higher standards adherence
```

### Animación
- Sidebar cyan aparece desde la derecha
- Las filas de feedback aparecen una a una (rojo el problema, verde la solución)
- Panel de código hace fade in

---

## ESCENA 10 — STEP 7: FINAL DELIVERY
**Duración**: 16 segundos (118s → 134s)
**Fondo**: Blanco con **sidebar cyan** derecho
**Sidebar**: `VALIDATION & CONTROL LAYER` (vertical)

### Actores
> **Outcome Validator** · Revisión final del sistema

### Qué hacen
Revisión final del sistema entregado: solución técnica completa y cobertura de requisitos. Validan que el sistema cumple lo prometido al cliente.

### Contenido visual — 2 columnas

**Columna izquierda — Outcome Validators**

Tarjetas de los validadores:
- 👔 `Outcome Validator` · Manager
- 👷 `AI Architect` · Technical review

Cita cursiva:
> *"Final review of the outcome including technical solution and requirement coverage."*

**Columna derecha — Sistema entregado**

Módulos con estado:

| Módulo | Descripción | Estado |
|---|---|---|
| **TEMPO** | Calendar · Activities · Logistics · Digital Signage | ✅ 100% |
| **TOPS** | Technical Script Editor · TOPs · Pasadas | ✅ 95% |
| **ADMIN** | Users · Roles (4) · Departments · Permissions | ✅ 100% |

Banner navy:
> 🌐 MVP Live at
> `teatro-real-app.vercel.app`

### Animación
- Tarjetas de validadores entran escalonadas
- Módulos aparecen uno a uno con su barra verde
- Banner del MVP aparece al final

---

## ESCENA 11 — CIERRE + RESULTADOS
**Duración**: 12 segundos (134s → 146s)
**Fondo**: Azul marino (#00245D) — único fondo oscuro del vídeo

### Contenido visual

**Encabezado**
> **Results**
> Teatro Real · AI Native Methodology · NTT DATA EMEAL

**4 métricas animadas (tarjetas con fondo semitransparente)**

| Icono | Valor | Etiqueta |
|---|---|---|
| ⚡ | **×2** | Faster than traditional development |
| 🧠 | **0** | Prior knowledge of target stack required |
| 🚀 | **1 week** | Prototype delivered to client |
| 📈 | **~80%** | Global completion at project handoff |

**Frase de cierre** (con línea vertical cyan a la izquierda)
> *"AI doesn't replace the team. It empowers it."*
> when used with methodology.

**Logo NTT DaTa** (versión blanca, esquina inferior derecha)

### Animación
- Encabezado entra desde abajo
- Las 4 tarjetas de métricas caen desde arriba escalonadas (cifras en cyan)
- La frase de cierre aparece con un spring suave

---

## RESUMEN DE TIMING

| # | Escena | Inicio | Fin | Duración |
|---|---|---|---|---|
| 1 | Portada | 0s | 5s | 5s |
| 2 | El reto — Teatro Real | 5s | 14s | 9s |
| 3 | **Step 1: Agent Design** | 14s | 28s | 14s |
| 4 | **Step 2: Context Analysis** | 28s | 45s | 17s |
| 5 | ⭐ **Rapid Prototype & PRD Validation** | 45s | 61s | 16s |
| 6 | Step 3: Prompting Framework | 61s | 75s | 14s |
| 7 | Step 4: Development | 75s | 94s | 19s |
| 8 | Step 5: Quality Assurance | 94s | 107s | 13s |
| 9 | Step 6: AI Model Tuning | 107s | 118s | 11s |
| 10 | Step 7: Final Delivery | 118s | 134s | 16s |
| 11 | Cierre + Resultados | 134s | 146s | 12s |
| | **TOTAL** | | | **146s** |

---

## FLUJO NARRATIVO COMPLETO

```
CLIENTE
  ↓ documentación, código legacy, datos
STEP 1: AGENT DESIGN
  → AI Architect define los agentes especializados
  → Requirements Analyst, Frontend Expert, Backend Expert
STEP 2: CONTEXT ANALYSIS
  → Los agentes leen y procesan toda la documentación
  → Generan: EspecificacionFuncional, Plan, Guía Estilos, Contextos
⭐ RAPID PROTOTYPE
  → Con el contexto, se prototipa en React + Supabase
  → Se valida con el cliente → se corrige el PRD
  → "Fix misunderstandings before writing production code"
STEP 3: PROMPTING FRAMEWORK
  → AI Lead construye plantillas sobre el PRD validado
STEP 4: DEVELOPMENT
  → Equipo co-crea código con Axet Plugin
STEP 5: QUALITY ASSURANCE
  → Validación humana obligatoria en cada MR
STEP 6: AI MODEL TUNING
  → Mejora continua del Harness
STEP 7: FINAL DELIVERY
  → Outcome Validators dan el OK final
  → Teatro Real recibe su sistema
```

---

## PENDIENTE — Assets a incorporar
> *(Iremos añadiendo conforme los tengas)*

| Asset | Escena | Estado |
|---|---|---|
| Screenshot de Axet Plugin con la estructura de carpetas | Step 2 | ⏳ Pendiente |
| Screenshot del prototipo React+Supabase | Rapid Prototype | ⏳ Pendiente |
| Screenshot de la reunión/presentación del prototipo al cliente | Rapid Prototype | ⏳ Pendiente |
| Screenshot de código siendo generado en Axet | Step 4 | ⏳ Pendiente |
| Screenshot del MR con comentarios de revisión | Step 5 | ⏳ Pendiente |
| Screenshot de la app Teatro Real entregada (TGMS) | Step 7 | ⏳ Pendiente |
| Iconos/avatares por rol (AI Architect, AI Lead, Front AI Dev, Back AI Dev, MR Validator) | Varias | ⏳ Pendiente |
| Logo NTT Data oficial (SVG/PNG) | Todas | ⏳ Pendiente |

---

## NOTAS DE REVISIÓN
> *(Espacio para tus comentarios antes de generar el TSX)*

- [ ] ¿El nuevo orden Agent Design → Context Analysis → Prototype → Framework refleja bien lo que ocurrió?
- [ ] ¿Los textos de la escena del prototipo transmiten bien el valor? (React + Supabase, validación, corrección PRD)
- [ ] ¿Los timings están bien? ¿Alguna escena necesita más/menos tiempo?
- [ ] ¿Los textos en inglés están bien o prefieres alguna parte en castellano?
- [x] ✅ Métricas del cierre confirmadas: ×2 faster, 0 prior stack knowledge, 1 week prototype, ~80% global completion
- [ ] ¿Quieres incluir la URL del MVP real o dejamos un placeholder?
- [ ] ¿Tienes screenshot del prototipo React+Supabase para la escena 5?
