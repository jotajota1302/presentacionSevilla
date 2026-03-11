import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  spring,
  interpolate,
  Sequence,
} from 'remotion';

const FPS = 30;

// Dark navy theme — consistent with Teatro Real project
const C = {
  bg: '#0C1B33',
  bgCard: '#162844',
  bgCardAlt: '#1A3158',
  navy: '#00245D',
  cyan: '#0097CF',
  white: '#FFFFFF',
  textWhite: '#FFFFFF',
  textMuted: 'rgba(255,255,255,0.70)',
  textDim: 'rgba(255,255,255,0.45)',
  green: '#2ECC71',
  red: '#E74C3C',
  orange: '#F39C12',
  blue: '#3B82F6',
  magenta: '#E6007E',
  purple: '#9B59B6',
  border: 'rgba(255,255,255,0.12)',
  borderCyan: 'rgba(0,151,207,0.45)',
  codeBg: '#070F1E',
};

// ── BILINGUAL TEXTS ─────────────────────────────────────────────────────────
export type Lang = 'en' | 'es';

const T = {
  en: {
    // Scene 1 - Title
    titleLine1: 'Native AI',
    titleLine2: 'Methodology',
    titleSub: 'From tool to method',
    titleBadge: 'AI-Assisted Development with Coding Agents',
    titleFooter: 'NTT DATA EMEAL · Squad IA · 2025',
    // Scene 2 - The Problem
    s2Title: 'AI Without Methodology: The Starting Point',
    s2Expectation: 'More AI tools ≠ More productivity',
    s2ExpectationSub: 'We equipped the team with AI tools… but the results were not as expected',
    s2JuniorLabel: 'JUNIOR PROFILES',
    s2JuniorText: "Couldn't leverage the tool",
    s2JuniorDetail: 'Lack of criteria to evaluate AI output',
    s2SeniorLabel: 'SENIOR PROFILES',
    s2SeniorText: "Didn't get expected results either",
    s2SeniorDetail: 'Improvised prompts, no project context',
    s2DiagLine1: 'The problem',
    s2DiagLine2: 'was NOT the tool',
    s2DiagLine3: 'It was the absence of a',
    s2DiagWord: 'METHODOLOGY',
    s2DiagTooltip: '(Harness / Framework)',
    s2Conclusion: "We don't need more tools. We need to learn how to use them well.",
    // Scene 3 - What is a Harness
    s3Title: 'What is a Coding Agent?',
    s3Sub: 'A coding agent is not just an LLM. It is a model wrapped by 4 key pieces that we must build and tune.',
    s3ModelLabel: 'MODEL (LLM)',
    s3ModelDesc: 'GPT · Claude · Gemini\nInterchangeable',
    s3Components: [
      { icon: '🧠', title: 'Behavior Prompt', desc: 'Personality and rules that guide the agent' },
      { icon: '📋', title: 'Context', desc: 'Project info the model needs to understand' },
      { icon: '🔧', title: 'Tools', desc: 'Actions the agent can perform (APIs, MCPs, scripts)' },
      { icon: '💾', title: 'Memory', desc: 'Conversation history and learned patterns' },
    ],
    s3Without: 'Without configuring it',
    s3With: 'With Methodology',
    s3CompareLabels: ['Prompt', 'Context', 'Tools', 'Memory'],
    s3CompareLeft: ['No role, generic behavior', 'Zero project knowledge', 'Only generates text', 'Forgets everything each session'],
    s3CompareRight: ['Expert with rules & criteria', 'Knows architecture & standards', 'Connects to Jira, DB, docs…', 'Retains patterns & decisions'],
    s3Bottom: 'With the same LLM, results can be radically different. Configuration and context are the key.',
    // Scene 4 - 3 Pillars
    s4Title: 'Building the Context',
    s4Sub: '3 pillars: define agents, tools and skills — extract functional and technical context — standardize team input to models',
    s4P1Title: 'Specialized Agents',
    s4P1Sub: 'We create, reuse and customize agents for each role. Each one has its own behavior prompt, specialized knowledge and tools.',
    s4P1Agents: [
      { icon: '⚙️', name: 'Backend Expert', spec: 'Java, Spring, REST APIs', prompt: 'You are a senior backend developer…' },
      { icon: '🎨', name: 'Frontend Expert', spec: 'Angular, Components, UI', prompt: 'You are a frontend specialist…' },
      { icon: '🧪', name: 'Testing Expert', spec: 'Unit & integration tests', prompt: 'You are a QA engineer…' },
      { icon: '🗄️', name: 'Database Expert', spec: 'SQL, migrations', prompt: 'You are a database architect…' },
      { icon: '🔍', name: 'Code Reviewer', spec: 'Standards & security', prompt: 'You are a code reviewer…' },
    ],
    s4P2Title: 'Context Extraction',
    s4P2Sub: 'We extract and synthesize information the model needs to understand the project',
    s4P2Func: 'FUNCTIONAL CONTEXT',
    s4P2FuncDesc: 'Business rules, use cases, user flows, validations',
    s4P2Tech: 'TECHNICAL CONTEXT',
    s4P2TechDesc: 'Architecture, design patterns, conventions, APIs',
    s4P2Sources: 'Sources:',
    s4P2SourceList: ['🗄️ Database / Data Models', '📦 Legacy Code', '📄 Client Docs (Confluence)', '📋 Specs & Decisions'],
    s4P2Arrow: 'Files of 500–2000 lines with synthesized context',
    s4P3Title: 'Prompt Framework',
    s4P3Sub: 'Standardize how the team communicates with models. Manage PRD and project plan.',
    s4P3Steps: ['PRD / Project\nPlan', 'Requirement\n(Jira / Docs)', 'Template\n+ Context', 'Structured\nPrompt'],
    s4P3Result: 'Consistent, repeatable output across the whole team',
    s4ConnectorText: 'Together they form the Native AI Methodology',
    // Scene 5 - 5 Phases
    s5Title: 'Building the Harness: 5 Phases',
    s5Phases: ['Define\nAgents', 'Extract\nContext', 'Prompt\nFramework', 'Generate\n& Refine', 'Integrate\n& Validate'],
    s5Feedback: 'Continuous feedback',
    s5Principles: ['AI as assistant,\nnot replacement', 'Continuous\nimprovement', 'Model\nagnostic', 'Portable to\nother projects'],
    // Scene 6 - Phase 1: Agents
    s6Bar: 'PHASE 1 · AGENT DEFINITION',
    s6Quote: 'Instead of a generic agent, we create specialists that replicate real team roles',
    s6DevAgents: ['Backend\nExpert', 'Frontend\nExpert', 'Testing\nExpert', 'Database\nExpert'],
    s6DevSpecs: ['Java, Spring, REST APIs', 'Angular, components, UI', 'Unit & integration tests', 'SQL, migrations, optimization'],
    s6SupportAgents: ['Functional\nAnalyst IA', 'Technical\nArchitect IA', 'Code\nReviewer IA'],
    s6SupportSpecs: ['Functional extraction', 'Technical extraction', 'Standards & security'],
    s6AnatomyTitle: 'backend-expert.md',
    s6AnatomyLines: ['# Backend Expert', '', '## Identity & Role', 'Senior backend developer with 15+', 'years in Java/Spring...', '', '## Project Context', '[Auto-injected technical docs]', '', '## Generation Rules', '- Pattern: Controller → Service → Repo', '- Use Lombok on all entities', '- Include Javadoc on public methods', '- Mandatory unit tests'],
    s6CompareHeaders: ['Generic Agent', 'Specialized Agent'],
    s6CompareLeft: ['Explain every time', 'Generic code', 'Variable quality'],
    s6CompareRight: ['Already knows project', 'Follows conventions', 'Predictable behavior'],
    // Scene 7 - Phase 2: Knowledge Extraction
    s7Bar: 'PHASE 2 · KNOWLEDGE EXTRACTION',
    s7ProblemProject: '500,000+ lines',
    s7ProblemContext: '~128K tokens',
    s7ProblemText: "We can't give EVERYTHING to the agent. We need to synthesize.",
    s7FunnelText: 'SYNTHESIZE',
    s7FuncTitle: 'FUNCTIONAL',
    s7FuncSub: 'WHAT the application does',
    s7FuncItems: ['Features & user flows', 'Business rules', 'Use cases', 'Main entities'],
    s7TechTitle: 'TECHNICAL',
    s7TechSub: 'HOW it is built',
    s7TechItems: ['Architecture & tech stack', 'Design patterns', 'Code conventions', 'Data model'],
    s7Docs: ['context-functional.md', 'context-technical.md', 'code-patterns.md', 'data-model.md'],
    s7Note: 'Documentation is NOT static. It updates with every iteration.',
    // Scene 8 - Phase 3: Framework, Tools, Skills
    s8Bar: 'PHASE 3 · FRAMEWORK · TOOLS · SKILLS',
    s8FlowIn: 'INPUT',
    s8FlowInDetail: 'Jira / Docs',
    s8FlowFw: 'FRAMEWORK',
    s8FlowFwDetail: '+ Template + Context\n+ Tools + Rules',
    s8FlowOut: 'PROMPT READY',
    s8FlowOutDetail: 'Structured\nContextualized',
    s8RepoTitle: 'Harness Repository (Teams)',
    s8RepoClassic: ['/agents', '/context', '/templates'],
    s8RepoNew: ['/tools', '/scripts', '/mcps', '/skills'],
    s8ActTitle: 'Harness Assets: Beyond Prompts',
    s8ToolsTitle: 'TOOLS',
    s8ToolsSub: 'Functions agents invoke directly',
    s8ToolsItems: ['Query Jira tickets', 'Execute DB queries', 'Read Oracle Forms binaries', 'Validate data schemas'],
    s8ScriptsTitle: 'SCRIPTS',
    s8ScriptsSub: 'Team-built automations',
    s8ScriptsItems: ['DOCX ↔ Markdown', 'PPTX → Markdown extractor', 'Oracle Forms → readable text', 'Legacy binary conversion'],
    s8McpsTitle: 'MCPs',
    s8McpsSub: 'Model Context Protocol servers',
    s8McpsItems: ['Jira MCP Server', 'Database MCP', 'Docs Converter MCP'],
    s8SkillsTitle: 'Skills: Reusable Knowledge Blocks',
    s8SkillDef: 'A Skill = instructions + context + tools packaged for a specific task. The developer activates it and the agent executes with all needed knowledge preloaded.',
    s8Skills: ['/generate-crud', '/review-code', '/create-tests'],
    s8SkillDescs: ['Agent + Context + Template + DB Tool', 'Agent + Checklist + Standards + Lint', 'Agent + Patterns + Framework + Test Runner'],
    s8SkillTags: ['Full-stack CRUD in minutes', 'Automated pre-MR review', 'Unit + integration tests'],
    s8Badge: "All of this ALREADY EXISTS. It's not a future plan.",
    // Scene 9 - Roles
    s9Title: 'Roles & Responsibilities',
    s9Sub: 'The methodology redefines how the team works',
    s9Phases: ['DEFINITION\nPHASE', 'EXECUTION\nPHASE', 'VALIDATION\nPHASE'],
    s9TechLeadTitle: 'Tech Lead AI / Architect',
    s9TechLeadItems: ['Extracts & documents business rules', 'Creates and maintains agents', 'Defines prompting framework', 'Prepares environment & context', 'Rapid prototype + PRD'],
    s9AILeadsTitle: 'AI Leads (Front / Back)',
    s9AILeadsItems: ['Planning by features/technology', 'Refine prompts & specific agents', 'Define reusable components (Tools)', 'Direct support to Dev Team'],
    s9DevsTitle: 'Developers',
    s9DevsItems: ['Execute predefined prompts', 'Validate & test generated code', 'Prepare features for integration'],
    s9MRTitle: 'MR Validators',
    s9MRItems: ['Functional review', 'Technical code review', 'Standards & patterns validation', 'Merge Request approval'],
    s9Bottom: "Doesn't replace people. Transforms how they work.",
    // Scene 10 - Phases 4-5
    s10Bar: 'PHASES 4-5 · GENERATION & VALIDATION',
    s10GenTitle: 'PHASE 4: GENERATION',
    s10GenSteps: ['Load prompt + agent', 'Execute generation', 'Review generated code', 'Debug & correct', 'Iterate if needed'],
    s10GenFeedback: ['Missing context → Update Phase 2', 'Wrong pattern → Update Phase 3', 'Bad agent config → Adjust Phase 1'],
    s10GenQuote: 'The developer doesn\'t write: supervises, guides and validates',
    s10ValTitle: 'PHASE 5: VALIDATION',
    s10ValRule: 'ALL AI-generated code goes through HUMAN VALIDATION',
    s10ValChecks: ['Standards', 'Technical Quality', 'Security', 'Functionality'],
    s10ValDetails: ['Naming, structure', 'Patterns, tests', 'No secrets, input validation', 'Acceptance criteria'],
    s10KPIs: ['>70%', '<3', '60%+', '0'],
    s10KPILabels: ['Usable code', 'Iterations/task', 'MRs OK first try', 'Critical issues'],
    // Scene 11 - Results
    s11Title: "What isn't measured, can't be improved",
    s11Metrics: ['20-40%', '>70%', '30-50%', '>90%'],
    s11MetricLabels: ['Dev time\nreduction', 'Usable\nAI code', 'Onboarding\nreduction', 'Standards\nadherence'],
    s11MetricTimelines: ['6 months', '3 months', '6 months', '3 months'],
    s11BeforeTitle: 'BEFORE',
    s11AfterTitle: 'NOW',
    s11Before: ['Improvised prompt', 'Generic code', 'Rewrite everything', 'Each dev on their own'],
    s11After: ['Structured prompt', 'Contextualized code', 'Refine details', 'Aligned team'],
    // Scene 12 - Closing
    s12Line1: "AI doesn't replace the team.",
    s12Line2: 'It empowers it when used',
    s12Line3: 'with methodology.',
    s12Keywords: ['Structured context', 'Defined processes', 'Expert supervision', 'Continuous improvement'],
    s12KeySubs: ['(Harness)', '(Methodology)', '(Human-in-the-loop)', '(Feedback)'],
    s12Footer: 'Native AI Methodology · NTT DATA EMEAL · 2025',
  },
  es: {
    // Scene 1
    titleLine1: 'Native AI',
    titleLine2: 'Methodology',
    titleSub: 'De la herramienta al método',
    titleBadge: 'Desarrollo Asistido por Agentes de Codificación',
    titleFooter: 'NTT DATA EMEAL · Squad IA · 2025',
    // Scene 2
    s2Title: 'IA sin Metodología: El Punto de Partida',
    s2Expectation: 'Más herramientas IA ≠ Más productividad',
    s2ExpectationSub: 'Dotamos al equipo de herramientas IA… pero los resultados no fueron los esperados',
    s2JuniorLabel: 'PERFILES JUNIOR',
    s2JuniorText: 'No supieron aprovechar la herramienta',
    s2JuniorDetail: 'Falta de criterio para evaluar el output de la IA',
    s2SeniorLabel: 'PERFILES SENIOR',
    s2SeniorText: 'Tampoco obtuvieron rendimiento',
    s2SeniorDetail: 'Prompts improvisados, sin contexto del proyecto',
    s2DiagLine1: 'El problema',
    s2DiagLine2: 'NO era la herramienta',
    s2DiagLine3: 'Era la ausencia de un',
    s2DiagWord: 'METODOLOGÍA',
    s2DiagTooltip: '(Harness / Framework)',
    s2Conclusion: 'No necesitamos más herramientas. Necesitamos saber usarlas bien.',
    // Scene 3
    s3Title: '¿Qué es un Coding Agent?',
    s3Sub: 'Un coding agent no es solo un LLM. Es un modelo envuelto por 4 piezas clave que debemos construir y ajustar.',
    s3ModelLabel: 'MODELO (LLM)',
    s3ModelDesc: 'GPT · Claude · Gemini\nIntercambiables',
    s3Components: [
      { icon: '🧠', title: 'Prompt de Comportamiento', desc: 'Personalidad y reglas que guían al agente' },
      { icon: '📋', title: 'Contexto', desc: 'Información del proyecto que el modelo necesita' },
      { icon: '🔧', title: 'Tools', desc: 'Acciones que el agente puede ejecutar (APIs, MCPs, scripts)' },
      { icon: '💾', title: 'Memoria', desc: 'Historial de conversación y patrones aprendidos' },
    ],
    s3Without: 'Sin configurar',
    s3With: 'Con Metodología',
    s3CompareLabels: ['Prompt', 'Contexto', 'Tools', 'Memoria'],
    s3CompareLeft: ['Sin rol, comportamiento genérico', 'Cero conocimiento del proyecto', 'Solo genera texto', 'Olvida todo cada sesión'],
    s3CompareRight: ['Experto con reglas y criterio', 'Conoce arquitectura y estándares', 'Conecta con Jira, BD, docs…', 'Retiene patrones y decisiones'],
    s3Bottom: 'Con el mismo LLM los resultados pueden ser radicalmente distintos. La configuración y el contexto es la clave.',
    // Scene 4
    s4Title: 'Construyendo el Contexto',
    s4Sub: '3 pilares: definir agentes, tools y skills — extraer contexto funcional y técnico — estandarizar el input del equipo a los modelos',
    s4P1Title: 'Agentes Especializados',
    s4P1Sub: 'Creamos, reutilizamos y personalizamos agentes para cada rol. Cada uno tiene su propio prompt de comportamiento, conocimiento especializado y herramientas.',
    s4P1Agents: [
      { icon: '⚙️', name: 'Backend Expert', spec: 'Java, Spring, REST APIs', prompt: 'Eres un desarrollador backend senior…' },
      { icon: '🎨', name: 'Frontend Expert', spec: 'Angular, Componentes, UI', prompt: 'Eres un especialista frontend…' },
      { icon: '🧪', name: 'Testing Expert', spec: 'Tests unitarios e integración', prompt: 'Eres un ingeniero QA…' },
      { icon: '🗄️', name: 'Database Expert', spec: 'SQL, migraciones', prompt: 'Eres un arquitecto de BD…' },
      { icon: '🔍', name: 'Code Reviewer', spec: 'Estándares y seguridad', prompt: 'Eres un revisor de código…' },
    ],
    s4P2Title: 'Extracción de Contexto',
    s4P2Sub: 'Extraemos y sintetizamos la información que el modelo necesita para entender el proyecto',
    s4P2Func: 'CONTEXTO FUNCIONAL',
    s4P2FuncDesc: 'Reglas de negocio, casos de uso, flujos, validaciones',
    s4P2Tech: 'CONTEXTO TÉCNICO',
    s4P2TechDesc: 'Arquitectura, patrones de diseño, convenciones, APIs',
    s4P2Sources: 'Orígenes:',
    s4P2SourceList: ['🗄️ Base de Datos / Modelos', '📦 Código Legacy', '📄 Docs de Cliente (Confluence)', '📋 Specs y Decisiones'],
    s4P2Arrow: 'Ficheros de 500–2000 líneas con contexto sintetizado',
    s4P3Title: 'Framework de Prompts',
    s4P3Sub: 'Estandarizar cómo el equipo se comunica con los modelos. Gestionar el PRD y plan de proyecto.',
    s4P3Steps: ['PRD / Plan\nde Proyecto', 'Requisito\n(Jira / Docs)', 'Plantilla\n+ Contexto', 'Prompt\nEstructurado'],
    s4P3Result: 'Output consistente y repetible en todo el equipo',
    s4ConnectorText: 'Juntos forman la Metodología Native AI',
    // Scene 5
    s5Title: 'Construyendo el Harness: 5 Fases',
    s5Phases: ['Definir\nAgentes', 'Extraer\nContexto', 'Framework\nPrompts', 'Generar\ny Refinar', 'Integrar\ny Validar'],
    s5Feedback: 'Retroalimentación continua',
    s5Principles: ['IA como asistente,\nno reemplazo', 'Mejora\ncontinua', 'Agnóstico\nal modelo', 'Portable a\notros proyectos'],
    // Scene 6
    s6Bar: 'FASE 1 · DEFINICIÓN DE AGENTES',
    s6Quote: 'En lugar de un agente genérico, creamos especialistas que replican los roles del equipo real',
    s6DevAgents: ['Backend\nExpert', 'Frontend\nExpert', 'Testing\nExpert', 'Database\nExpert'],
    s6DevSpecs: ['Java, Spring, APIs REST', 'Angular, componentes, UI', 'Tests unitarios e integración', 'SQL, migraciones, optimización'],
    s6SupportAgents: ['Analista\nFuncional IA', 'Arquitecto\nTécnico IA', 'Code\nReviewer IA'],
    s6SupportSpecs: ['Extracción funcional', 'Extracción técnica', 'Estándares y seguridad'],
    s6AnatomyTitle: 'backend-expert.md',
    s6AnatomyLines: ['# Backend Expert', '', '## Identidad y Rol', 'Desarrollador backend senior con 15+', 'años en Java/Spring...', '', '## Contexto del Proyecto', '[Inyección automática doc. técnica]', '', '## Reglas de Generación', '- Patrón: Controller → Service → Repo', '- Usar Lombok en todas las entidades', '- Incluir Javadoc en métodos públicos', '- Tests unitarios obligatorios'],
    s6CompareHeaders: ['Agente genérico', 'Agente especializado'],
    s6CompareLeft: ['Hay que explicar cada vez', 'Código genérico', 'Calidad variable'],
    s6CompareRight: ['Ya conoce el proyecto', 'Sigue convenciones', 'Comportamiento predecible'],
    // Scene 7
    s7Bar: 'FASE 2 · EXTRACCIÓN DE CONOCIMIENTO',
    s7ProblemProject: '500.000+ líneas',
    s7ProblemContext: '~128K tokens',
    s7ProblemText: 'No podemos dar TODO al agente. Necesitamos sintetizar.',
    s7FunnelText: 'SINTETIZAR',
    s7FuncTitle: 'FUNCIONAL',
    s7FuncSub: 'QUÉ hace la aplicación',
    s7FuncItems: ['Funcionalidades y flujos', 'Reglas de negocio', 'Casos de uso', 'Entidades principales'],
    s7TechTitle: 'TÉCNICO',
    s7TechSub: 'CÓMO está construida',
    s7TechItems: ['Arquitectura y stack', 'Patrones de diseño', 'Convenciones de código', 'Modelo de datos'],
    s7Docs: ['contexto-funcional.md', 'contexto-tecnico.md', 'patrones-codigo.md', 'modelo-datos.md'],
    s7Note: 'La documentación NO es estática. Se actualiza con cada iteración.',
    // Scene 8
    s8Bar: 'FASE 3 · FRAMEWORK · TOOLS · SKILLS',
    s8FlowIn: 'ENTRADA',
    s8FlowInDetail: 'Jira / Docs',
    s8FlowFw: 'FRAMEWORK',
    s8FlowFwDetail: '+ Plantilla + Contexto\n+ Tools + Reglas',
    s8FlowOut: 'PROMPT LISTO',
    s8FlowOutDetail: 'Estructurado\nContextualizado',
    s8RepoTitle: 'Repositorio del Harness (Teams)',
    s8RepoClassic: ['/agentes', '/contexto', '/plantillas'],
    s8RepoNew: ['/tools', '/scripts', '/mcps', '/skills'],
    s8ActTitle: 'Activos del Harness: más allá de los prompts',
    s8ToolsTitle: 'TOOLS',
    s8ToolsSub: 'Funciones que los agentes invocan',
    s8ToolsItems: ['Consultar tickets Jira', 'Ejecutar queries BD', 'Leer binarios Oracle Forms', 'Validar schemas de datos'],
    s8ScriptsTitle: 'SCRIPTS',
    s8ScriptsSub: 'Automatizaciones del equipo',
    s8ScriptsItems: ['DOCX ↔ Markdown', 'PPTX → Markdown extractor', 'Oracle Forms → texto legible', 'Conversión binarios legacy'],
    s8McpsTitle: 'MCPs',
    s8McpsSub: 'Servidores Model Context Protocol',
    s8McpsItems: ['Jira MCP Server', 'Database MCP', 'Docs Converter MCP'],
    s8SkillsTitle: 'Skills: Bloques de Conocimiento Reutilizables',
    s8SkillDef: 'Una Skill = instrucciones + contexto + herramientas empaquetadas para una tarea concreta. El developer la activa y el agente ejecuta con todo el conocimiento precargado.',
    s8Skills: ['/generate-crud', '/review-code', '/create-tests'],
    s8SkillDescs: ['Agente + Contexto + Plantilla + Tool BD', 'Agente + Checklist + Estándares + Lint', 'Agente + Patrones + Framework + Test Runner'],
    s8SkillTags: ['CRUD full-stack en minutos', 'Review automático pre-MR', 'Tests unitarios + integración'],
    s8Badge: 'Todo esto YA EXISTE. No es un plan futuro.',
    // Scene 9
    s9Title: 'Roles y Responsabilidades',
    s9Sub: 'La metodología redefine cómo trabaja el equipo',
    s9Phases: ['FASE DE\nDEFINICIÓN', 'FASE DE\nEJECUCIÓN', 'FASE DE\nVALIDACIÓN'],
    s9TechLeadTitle: 'Tech Lead AI / Architect',
    s9TechLeadItems: ['Extrae y documenta reglas de negocio', 'Crea y mantiene agentes', 'Define framework de prompting', 'Prepara entorno y contexto', 'Prototipo rápido + PRD'],
    s9AILeadsTitle: 'AI Leads (Front / Back)',
    s9AILeadsItems: ['Planificación por funcionalidades', 'Refinan prompts y agentes', 'Definen componentes reutilizables (Tools)', 'Soporte directo al Dev Team'],
    s9DevsTitle: 'Developers',
    s9DevsItems: ['Ejecutan prompts predefinidos', 'Validan y testean código generado', 'Preparan features para integración'],
    s9MRTitle: 'MR Validators',
    s9MRItems: ['Revisión funcional', 'Revisión técnica del código', 'Validación de estándares y patrones', 'Aprobación de Merge Requests'],
    s9Bottom: 'No reemplaza personas. Transforma cómo trabajan.',
    // Scene 10
    s10Bar: 'FASES 4-5 · GENERACIÓN Y VALIDACIÓN',
    s10GenTitle: 'FASE 4: GENERACIÓN',
    s10GenSteps: ['Cargar prompt + agente', 'Ejecutar generación', 'Revisar código generado', 'Depurar y corregir', 'Iterar si necesario'],
    s10GenFeedback: ['Falta contexto → Actualizar Fase 2', 'Patrón incorrecto → Actualizar Fase 3', 'Agente mal config → Ajustar Fase 1'],
    s10GenQuote: 'El developer no escribe: supervisa, guía y valida',
    s10ValTitle: 'FASE 5: VALIDACIÓN',
    s10ValRule: 'TODO código generado por IA pasa por VALIDACIÓN HUMANA',
    s10ValChecks: ['Estándares', 'Calidad técnica', 'Seguridad', 'Funcionalidad'],
    s10ValDetails: ['Nomenclatura, estructura', 'Patrones, tests', 'Sin secrets, validación inputs', 'Criterios de aceptación'],
    s10KPIs: ['>70%', '<3', '60%+', '0'],
    s10KPILabels: ['Código aprovechable', 'Iteraciones/tarea', 'MRs OK a primera', 'Issues críticos'],
    // Scene 11
    s11Title: 'Lo que no se mide, no se mejora',
    s11Metrics: ['20-40%', '>70%', '30-50%', '>90%'],
    s11MetricLabels: ['Reducción\ntiempo dev', 'Código\naprovechable', 'Reducción\nonboarding', 'Adherencia\nestándares'],
    s11MetricTimelines: ['6 meses', '3 meses', '6 meses', '3 meses'],
    s11BeforeTitle: 'ANTES',
    s11AfterTitle: 'AHORA',
    s11Before: ['Prompt improvisado', 'Código genérico', 'Reescribir todo', 'Cada dev por libre'],
    s11After: ['Prompt estructurado', 'Código contextualizado', 'Refinar detalles', 'Equipo alineado'],
    // Scene 12
    s12Line1: 'La IA no reemplaza al equipo.',
    s12Line2: 'Lo potencia cuando se usa',
    s12Line3: 'con metodología.',
    s12Keywords: ['Contexto estructurado', 'Procesos definidos', 'Supervisión experta', 'Mejora continua'],
    s12KeySubs: ['(Harness)', '(Metodología)', '(Human-in-the-loop)', '(Retroalimentación)'],
    s12Footer: 'Native AI Methodology · NTT DATA EMEAL · 2025',
  },
} as const;

// ── ANIMATION HELPERS ───────────────────────────────────────────────────────
const spr = (frame: number, delay = 0) =>
  spring({ frame: frame - delay, fps: FPS, config: { stiffness: 140, damping: 14, mass: 0.8 } });

const fade = (frame: number, delay = 0, dur = 15) =>
  interpolate(frame - delay, [0, dur], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

// ── SHARED COMPONENTS ───────────────────────────────────────────────────────
const TopBar: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = C.cyan }) => (
  <div style={{ background: color, color: C.white, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, padding: '14px 40px', letterSpacing: '0.08em', width: '100%', flexShrink: 0 }}>
    {children}
  </div>
);

const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ background: C.bgCard, borderRadius: 12, border: `1px solid ${C.border}`, padding: '18px 22px', ...style }}>
    {children}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode; color?: string; style?: React.CSSProperties }> = ({ children, color = C.cyan, style }) => (
  <div style={{ background: color, color: C.white, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, padding: '6px 16px', borderRadius: 20, display: 'inline-block', ...style }}>
    {children}
  </div>
);

const PillRow: React.FC<{ items: string[]; color?: string; delay?: number; frame: number }> = ({ items, color = C.cyan, delay = 0, frame }) => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    {items.map((item, i) => (
      <div key={i} style={{ opacity: fade(frame, delay + i * 6), background: `${color}22`, border: `1px solid ${color}55`, color, fontFamily: 'Arial, sans-serif', fontWeight: 600, fontSize: 13, padding: '5px 14px', borderRadius: 16 }}>
        {item}
      </div>
    ))}
  </div>
);

// ── SCENE 1: TITLE ──────────────────────────────────────────────────────────
const TitleScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 6, background: C.cyan, flexShrink: 0 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 140px' }}>
        {/* Line 1: "Native AI" — appears at frame 10 */}
        <div style={{ opacity: fade(f, 10), transform: `translateY(${interpolate(spr(f, 10), [0, 1], [40, 0])}px)`, marginBottom: 0 }}>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 82, color: C.white, lineHeight: 1.05 }}>{t.titleLine1}</div>
        </div>
        {/* Line 2: "Methodology" — appears at frame 35 */}
        <div style={{ opacity: fade(f, 35), transform: `translateY(${interpolate(spr(f, 35), [0, 1], [30, 0])}px)`, marginBottom: 24 }}>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 82, color: C.white, lineHeight: 1.05 }}>{t.titleLine2}</div>
        </div>
        {/* Subtitle — appears at frame 60 */}
        <div style={{ opacity: fade(f, 60), transform: `translateY(${interpolate(spr(f, 60), [0, 1], [20, 0])}px)`, marginBottom: 36 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 28, color: C.textMuted }}>{t.titleSub}</div>
        </div>
        {/* Badge — appears at frame 85 */}
        <div style={{ opacity: fade(f, 85), transform: `scale(${interpolate(spr(f, 85), [0, 1], [0.85, 1])})`, marginBottom: 44 }}>
          <div style={{ background: C.cyan, color: C.white, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 24, padding: '12px 36px', display: 'inline-block', borderRadius: 6, boxShadow: '0 0 30px rgba(0,151,207,0.3)' }}>
            {t.titleBadge}
          </div>
        </div>
        {/* Footer — appears at frame 110 */}
        <div style={{ opacity: fade(f, 110) }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.textDim }}>{t.titleFooter}</div>
        </div>
      </div>
      <div style={{ height: 6, background: `linear-gradient(90deg, ${C.navy} 0%, ${C.cyan} 100%)`, flexShrink: 0 }} />
    </AbsoluteFill>
  );
};

// ── SCENE 2: THE PROBLEM ────────────────────────────────────────────────────
const ProblemScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
      {/* Title — frame 10 */}
      <div style={{ opacity: fade(f, 10), transform: `translateY(${interpolate(spr(f, 10), [0, 1], [20, 0])}px)`, marginBottom: 30 }}>
        <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 44, color: C.white }}>{t.s2Title}</div>
        <div style={{ height: 4, width: interpolate(spr(f, 10), [0, 1], [0, 240]), background: C.cyan, marginTop: 12 }} />
      </div>
      <div style={{ display: 'flex', gap: 30, flex: 1, alignItems: 'stretch' }}>
        {/* Expectation — frame 40 emoji, 60 text, 80 sub */}
        <Card style={{ flex: 1, opacity: fade(f, 40), transform: `translateY(${interpolate(spr(f, 40), [0, 1], [-40, 0])}px)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 20 }}>
          <div style={{ fontSize: 64, opacity: fade(f, 40) }}>🚀</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 28, color: C.white, opacity: fade(f, 60) }}>{t.s2Expectation}</div>
          <div style={{ fontSize: 44, color: C.textDim, opacity: fade(f, 75) }}>↓</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 22, color: C.textMuted, opacity: fade(f, 90) }}>{t.s2ExpectationSub}</div>
        </Card>
        {/* Reality — Junior frame 120, Senior frame 180 */}
        <div style={{ flex: 1.4, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Card style={{ borderLeft: `5px solid ${C.red}`, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '28px 32px', opacity: fade(f, 120), transform: `translateX(${interpolate(spr(f, 120), [0, 1], [40, 0])}px)` }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.red, letterSpacing: 2, marginBottom: 12 }}>{t.s2JuniorLabel}</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 28, color: C.white, marginBottom: 10, opacity: fade(f, 135) }}>{t.s2JuniorText}</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 21, color: C.textMuted, opacity: fade(f, 150) }}>{t.s2JuniorDetail}</div>
          </Card>
          <Card style={{ borderLeft: `5px solid ${C.red}`, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '28px 32px', opacity: fade(f, 180), transform: `translateX(${interpolate(spr(f, 180), [0, 1], [40, 0])}px)` }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.red, letterSpacing: 2, marginBottom: 12 }}>{t.s2SeniorLabel}</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 28, color: C.white, marginBottom: 10, opacity: fade(f, 195) }}>{t.s2SeniorText}</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 21, color: C.textMuted, opacity: fade(f, 210) }}>{t.s2SeniorDetail}</div>
          </Card>
        </div>
        {/* Diagnosis — frame 250, elements staggered */}
        <Card style={{ flex: 1.2, opacity: fade(f, 250), transform: `translateX(${interpolate(spr(f, 250), [0, 1], [50, 0])}px)`, border: `2px solid ${C.cyan}`, boxShadow: '0 0 30px rgba(0,151,207,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 14 }}>
          <div style={{ fontSize: 64, opacity: fade(f, 255) }}>🔍</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 24, color: C.textMuted, opacity: fade(f, 270) }}>{t.s2DiagLine1}</div>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 30, color: C.white, opacity: fade(f, 290) }}><span style={{ color: C.red }}>NO</span> {t.s2DiagLine2.replace('NO ', '')}</div>
          <div style={{ height: 2, width: '60%', background: C.cyan, opacity: fade(f, 310) * 0.5 }} />
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 24, color: C.textMuted, opacity: fade(f, 320) }}>{t.s2DiagLine3}</div>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 48, color: C.cyan, opacity: fade(f, 340), transform: `scale(${interpolate(spr(f, 340), [0, 1], [0.7, 1])})` }}>{t.s2DiagWord}</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.textDim, fontStyle: 'italic', opacity: fade(f, 360) }}>{t.s2DiagTooltip}</div>
        </Card>
      </div>
      {/* Bottom bar — frame 390 */}
      <div style={{ opacity: fade(f, 390), marginTop: 24, background: C.navy, borderRadius: 8, padding: '16px 30px', textAlign: 'center', transform: `translateY(${interpolate(spr(f, 390), [0, 1], [15, 0])}px)`, boxShadow: '0 0 20px rgba(0,36,93,0.5)' }}>
        <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 24, color: C.white }}>{t.s2Conclusion}</div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 3: WHAT IS A CODING AGENT ─────────────────────────────────────────
const HarnessScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column', padding: '30px 70px' }}>
      {/* Title + subtitle */}
      <div style={{ opacity: fade(f, 0), marginBottom: 6 }}>
        <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 42, color: C.white }}>{t.s3Title}</div>
        <div style={{ height: 4, width: 240, background: C.cyan, marginTop: 8 }} />
      </div>
      <div style={{ opacity: fade(f, 10), marginBottom: 12 }}>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 22, color: C.textMuted, lineHeight: 1.3 }}>{t.s3Sub}</div>
      </div>

      {/* Two-row layout: diagram top, table bottom */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
        {/* Diagram: Model center + 4 pieces around it */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: 1060, height: 300 }}>
            {/* Pulsing glow rings expanding from model */}
            {[0, 1, 2].map((ring) => {
              const ringDelay = 25 + ring * 40;
              const ringProgress = interpolate(f - ringDelay, [0, 60], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
              const ringScale = interpolate(ringProgress, [0, 1], [0.3, 1.8]);
              const ringOpacity = interpolate(ringProgress, [0, 0.3, 1], [0, 0.35, 0]);
              return (
                <div key={ring} style={{
                  position: 'absolute', left: 430, top: 55, width: 200, height: 200, borderRadius: '50%',
                  border: `2px solid ${C.cyan}`, opacity: ringOpacity,
                  transform: `scale(${ringScale})`, pointerEvents: 'none' as const,
                }} />
              );
            })}

            {/* Model circle in center */}
            <div style={{
              opacity: fade(f, 15), transform: `scale(${interpolate(spr(f, 15), [0, 1], [0.5, 1])})`,
              position: 'absolute', left: 430, top: 75, width: 200, height: 150, borderRadius: 75,
              border: `3px solid rgba(255,255,255,0.5)`, background: 'rgba(255,255,255,0.08)',
              boxShadow: `0 0 40px rgba(0,151,207,${interpolate(f % 60, [0, 30, 60], [0.1, 0.3, 0.1])})`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              zIndex: 2,
            }}>
              <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 18, color: C.white }}>{t.s3ModelLabel}</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.textDim, marginTop: 4, textAlign: 'center', whiteSpace: 'pre-line' }}>{t.s3ModelDesc}</div>
            </div>

            {/* 4 component cards — 2 left, 2 right of model */}
            {(t.s3Components as { icon: string; title: string; desc: string }[]).map((comp, i) => {
              const cardDelay = [25, 45, 65, 85][i];
              const positions = [
                { left: 0, top: 0, width: 340 },       // left-top: Behavior Prompt
                { left: 0, top: 165, width: 340 },     // left-bottom: Context
                { left: 720, top: 0, width: 340 },     // right-top: Tools
                { left: 720, top: 165, width: 340 },   // right-bottom: Memory
              ];
              const fromX = i < 2 ? -60 : 60;
              const p = positions[i];
              const glowOpacity = interpolate(f - cardDelay, [0, 15, 40], [0, 0.6, 0.15], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
              return (
                <div key={i} style={{
                  opacity: fade(f, cardDelay),
                  transform: `translateX(${interpolate(spr(f, cardDelay), [0, 1], [fromX, 0])}px)`,
                  position: 'absolute', left: p.left, top: p.top, width: p.width,
                  background: C.bgCard, border: `1px solid ${C.borderCyan}`, borderRadius: 14,
                  padding: '14px 18px', display: 'flex', alignItems: 'flex-start', gap: 12,
                  boxShadow: `0 0 20px rgba(0,151,207,${glowOpacity})`,
                  zIndex: 1,
                }}>
                  <div style={{ fontSize: 30, flexShrink: 0, marginTop: 2 }}>{comp.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.cyan, marginBottom: 3 }}>{comp.title}</div>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMuted, lineHeight: 1.3 }}>{comp.desc}</div>
                  </div>
                </div>
              );
            })}

            {/* Animated arrow connectors */}
            {[0, 1, 2, 3].map((i) => {
              const arrowDelay = [35, 55, 75, 95][i];
              const arrowOp = fade(f, arrowDelay);
              const dashOffset = -(f - arrowDelay) * 2;
              const lines = [
                { x1: 340, y1: 55, x2: 440, y2: 130 },
                { x1: 340, y1: 230, x2: 440, y2: 190 },
                { x1: 720, y1: 55, x2: 620, y2: 130 },
                { x1: 720, y1: 230, x2: 620, y2: 190 },
              ];
              const l = lines[i];
              return (
                <svg key={i} style={{ position: 'absolute', left: 0, top: 0, width: 1060, height: 300, pointerEvents: 'none' as const }} viewBox="0 0 1060 300">
                  <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                    stroke={C.cyan} strokeWidth="2" strokeDasharray="8,6"
                    strokeDashoffset={dashOffset} opacity={arrowOp * 0.6} />
                  <circle cx={l.x2} cy={l.y2} r="4" fill={C.cyan} opacity={arrowOp * 0.8} />
                </svg>
              );
            })}
          </div>
        </div>

        {/* Comparison table — full width below diagram */}
        <div style={{ marginTop: 16, marginLeft: 'auto', marginRight: 'auto', width: '80%' }}>
          {/* Header row */}
          <div style={{ display: 'flex', marginBottom: 4, opacity: fade(f, 95), transform: `translateY(${interpolate(spr(f, 95), [0, 1], [20, 0])}px)` }}>
            <div style={{ width: 120 }} />
            <div style={{ flex: 1, background: 'rgba(231,76,60,0.2)', padding: '12px 16px', borderRadius: '8px 0 0 0', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.red, textAlign: 'center' }}>{t.s3Without}</div>
            <div style={{ flex: 1, background: 'rgba(0,151,207,0.2)', padding: '12px 16px', borderRadius: '0 8px 0 0', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.cyan, textAlign: 'center' }}>{t.s3With}</div>
          </div>
          {/* Rows — each illuminates one by one with highlight sweep */}
          {t.s3CompareLeft.map((left, i) => {
            const rowDelay = 110 + i * 25;
            const rowAge = Math.max(0, f - rowDelay);
            // Bright glow on appear, fades to subtle
            const rowGlow = interpolate(rowAge, [0, 8, 20, 50], [0, 0.8, 0.3, 0.05], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
            // Left border highlight that sweeps
            const borderGlow = interpolate(rowAge, [0, 8, 25], [0, 1, 0.2], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
            // Slight scale pop
            const rowScale = interpolate(rowAge, [0, 8, 20], [0.97, 1.01, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
            return (
              <div key={i} style={{
                display: 'flex', marginBottom: 4,
                opacity: fade(f, rowDelay),
                transform: `translateX(${interpolate(spr(f, rowDelay), [0, 1], [40, 0])}px) scale(${rowScale})`,
                boxShadow: `0 0 24px rgba(0,151,207,${rowGlow}), inset 3px 0 0 rgba(0,151,207,${borderGlow})`,
                borderRadius: 4,
              }}>
                <div style={{ width: 120, background: `rgba(26,49,88,${interpolate(rowAge, [0, 10], [0.4, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' })})`, padding: '10px 12px', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>{(t.s3CompareLabels as string[])[i]}</div>
                <div style={{ flex: 1, background: C.bgCard, padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.textMuted, borderRight: `1px solid ${C.border}` }}>✗ {left}</div>
                <div style={{ flex: 1, background: C.bgCard, padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.cyan }}>✓ {(t.s3CompareRight as readonly string[])[i]}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom badge */}
      <div style={{ opacity: fade(f, 220), marginTop: 14, background: C.navy, borderRadius: 8, padding: '16px 30px', textAlign: 'center', transform: `translateY(${interpolate(spr(f, 220), [0, 1], [15, 0])}px)`, boxShadow: '0 0 20px rgba(0,36,93,0.5)' }}>
        <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 24, color: C.white }}>{t.s3Bottom}</div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 4: 3 PILLARS ──────────────────────────────────────────────────────
const PillarsScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  const pillarColors = [C.cyan, C.blue, C.magenta];
  const pillarIcons = ['🤖', '📚', '📋'];

  type Agent = { icon: string; name: string; spec: string; prompt: string };
  const agents = t.s4P1Agents as Agent[];

  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column', padding: '40px 60px' }}>
      {/* Title */}
      <div style={{ opacity: fade(f, 10), marginBottom: 6 }}>
        <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 42, color: C.white }}>{t.s4Title}</div>
        <div style={{ height: 4, width: 240, background: C.cyan, marginTop: 8 }} />
      </div>
      <div style={{ opacity: fade(f, 25), marginBottom: 16 }}>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 22, color: C.textMuted, lineHeight: 1.3 }}>{t.s4Sub}</div>
      </div>

      {/* 3 Pillars */}
      <div style={{ display: 'flex', gap: 20, flex: 1, alignItems: 'stretch' }}>
        {/* PILLAR 1 — Agents with mini prompt windows */}
        <div style={{
          flex: 1, opacity: fade(f, 50), transform: `translateY(${interpolate(spr(f, 50), [0, 1], [50, 0])}px)`,
          background: C.bgCard, borderRadius: 16, borderTop: `4px solid ${pillarColors[0]}`,
          padding: '24px 22px', display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div style={{ fontSize: 34 }}>{pillarIcons[0]}</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 26, color: C.white }}>{t.s4P1Title}</div>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.textMuted, marginBottom: 16, lineHeight: 1.3 }}>{t.s4P1Sub}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, justifyContent: 'center' }}>
            {agents.map((agent, i) => {
              const agentDelay = 70 + i * 25;
              const agentAge = Math.max(0, f - agentDelay);
              const glowAmt = interpolate(agentAge, [0, 10, 30], [0, 0.5, 0.08], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
              const promptShow = interpolate(agentAge, [0, 18, 28], [0, 0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
              return (
                <div key={i} style={{
                  opacity: fade(f, agentDelay),
                  transform: `translateX(${interpolate(spr(f, agentDelay), [0, 1], [-30, 0])}px)`,
                  background: C.bgCardAlt, border: `1px solid ${C.borderCyan}`, borderRadius: 10,
                  padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
                  boxShadow: `0 0 16px rgba(0,151,207,${glowAmt})`,
                }}>
                  <div style={{ fontSize: 24, width: 32, textAlign: 'center', flexShrink: 0 }}>{agent.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.cyan }}>{agent.name}</div>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.textDim }}>{agent.spec}</div>
                  </div>
                  <div style={{
                    opacity: promptShow * 0.9, transform: `scale(${interpolate(promptShow, [0, 1], [0.8, 1])})`,
                    background: C.codeBg, border: `1px solid ${C.borderCyan}`, borderRadius: 6,
                    padding: '4px 10px', flexShrink: 0,
                  }}>
                    <div style={{ fontFamily: 'Consolas, monospace', fontSize: 10, color: C.cyan, whiteSpace: 'nowrap' }}>{`> ${agent.prompt}`}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PILLAR 2 — Context Extraction */}
        <div style={{
          flex: 1, opacity: fade(f, 120), transform: `translateY(${interpolate(spr(f, 120), [0, 1], [50, 0])}px)`,
          background: C.bgCard, borderRadius: 16, borderTop: `4px solid ${pillarColors[1]}`,
          padding: '24px 22px', display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div style={{ fontSize: 34 }}>{pillarIcons[1]}</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 26, color: C.white }}>{t.s4P2Title}</div>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.textMuted, marginBottom: 16, lineHeight: 1.3 }}>{t.s4P2Sub}</div>
          {/* Two context types side by side */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
            <div style={{ flex: 1, opacity: fade(f, 150), background: 'rgba(59,130,246,0.1)', border: `1px solid rgba(59,130,246,0.35)`, borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.blue, marginBottom: 4 }}>{t.s4P2Func}</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textMuted, lineHeight: 1.3 }}>{t.s4P2FuncDesc}</div>
            </div>
            <div style={{ flex: 1, opacity: fade(f, 170), background: 'rgba(0,151,207,0.1)', border: `1px solid rgba(0,151,207,0.35)`, borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.cyan, marginBottom: 4 }}>{t.s4P2Tech}</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textMuted, lineHeight: 1.3 }}>{t.s4P2TechDesc}</div>
            </div>
          </div>
          {/* Sources */}
          <div style={{ opacity: fade(f, 190), marginBottom: 8 }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: C.orange, marginBottom: 6 }}>{t.s4P2Sources}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
              {(t.s4P2SourceList as string[]).map((src, i) => (
                <div key={i} style={{ opacity: fade(f, 200 + i * 12), background: 'rgba(243,156,18,0.1)', border: '1px solid rgba(243,156,18,0.3)', borderRadius: 6, padding: '5px 10px', fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.orange }}>{src}</div>
              ))}
            </div>
          </div>
          <div style={{ opacity: fade(f, 250), textAlign: 'center', background: C.bgCardAlt, borderRadius: 8, padding: '10px 14px', marginTop: 'auto' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.green }}>{t.s4P2Arrow}</div>
          </div>
        </div>

        {/* PILLAR 3 — Prompt Framework */}
        <div style={{
          flex: 1, opacity: fade(f, 190), transform: `translateY(${interpolate(spr(f, 190), [0, 1], [50, 0])}px)`,
          background: C.bgCard, borderRadius: 16, borderTop: `4px solid ${pillarColors[2]}`,
          padding: '24px 22px', display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div style={{ fontSize: 34 }}>{pillarIcons[2]}</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 26, color: C.white }}>{t.s4P3Title}</div>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.textMuted, marginBottom: 16, lineHeight: 1.3 }}>{t.s4P3Sub}</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flex: 1, justifyContent: 'center' }}>
            {(t.s4P3Steps as string[]).map((step, i) => {
              const stepDelay = 220 + i * 22;
              const isLast = i === (t.s4P3Steps as string[]).length - 1;
              const stepAge = Math.max(0, f - stepDelay);
              const stepGlow = interpolate(stepAge, [0, 10, 30], [0, 0.5, 0.1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
              return (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div style={{ opacity: fade(f, stepDelay - 8), color: C.cyan, fontSize: 22, lineHeight: 1 }}>↓</div>
                  )}
                  <div style={{
                    opacity: fade(f, stepDelay),
                    transform: `scale(${interpolate(spr(f, stepDelay), [0, 1], [0.85, 1])})`,
                    background: isLast ? 'rgba(0,151,207,0.15)' : C.bgCardAlt,
                    border: `1px solid ${isLast ? C.cyan : C.border}`,
                    borderRadius: 10, padding: '12px 20px', textAlign: 'center', width: '95%',
                    boxShadow: `0 0 14px rgba(0,151,207,${stepGlow})`,
                  }}>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: isLast ? 700 : 600, fontSize: 16, color: isLast ? C.cyan : C.white, whiteSpace: 'pre-line', lineHeight: 1.2 }}>{step}</div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div style={{ opacity: fade(f, 310), textAlign: 'center', background: C.bgCardAlt, borderRadius: 8, padding: '10px 14px', marginTop: 10 }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.green }}>{t.s4P3Result}</div>
          </div>
        </div>
      </div>

      {/* Bottom connector */}
      <div style={{ opacity: fade(f, 300), marginTop: 16, background: C.navy, borderRadius: 8, padding: '14px 30px', textAlign: 'center', transform: `translateY(${interpolate(spr(f, 300), [0, 1], [15, 0])}px)` }}>
        <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 22, color: C.white }}>{t.s4ConnectorText}</div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 5: 5 PHASES TIMELINE ──────────────────────────────────────────────
const PhasesTimelineScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  const phaseColors = [C.cyan, C.green, C.magenta, C.orange, C.navy];
  const icons = ['🤖', '📚', '📋', '⚡', '✓'];
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column', padding: '50px 70px', justifyContent: 'center' }}>
      <div style={{ opacity: fade(f, 0), textAlign: 'center', marginBottom: 50 }}>
        <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 34, color: C.white }}>{t.s5Title}</div>
      </div>
      {/* Timeline nodes */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
        {t.s5Phases.map((phase, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div style={{ opacity: fade(f, 15 + i * 12), color: C.textDim, fontSize: 28 }}>→</div>}
            <div style={{
              opacity: fade(f, 12 + i * 12), transform: `scale(${interpolate(spr(f, 12 + i * 12), [0, 1], [0, 1])})`,
              width: 140, height: 140, borderRadius: 16, border: `3px solid ${phaseColors[i]}`,
              background: `${phaseColors[i]}15`, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', textAlign: 'center',
            }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: C.white, fontFamily: 'Arial, sans-serif', marginBottom: 2 }}>{i + 1}</div>
              <div style={{ fontSize: 28, marginBottom: 4 }}>{icons[i]}</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 12, color: C.white, whiteSpace: 'pre-line', lineHeight: 1.2 }}>{phase}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {/* Feedback arrow */}
      <div style={{ opacity: fade(f, 80), textAlign: 'center', marginBottom: 40 }}>
        <div style={{ display: 'inline-block', background: `${C.cyan}15`, border: `1px solid ${C.cyan}40`, borderRadius: 20, padding: '8px 30px' }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.cyan }}>◄──── {t.s5Feedback} ────►</div>
        </div>
      </div>
      {/* Principles */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
        {t.s5Principles.map((p, i) => (
          <div key={i} style={{
            opacity: fade(f, 90 + i * 8), transform: `translateY(${interpolate(spr(f, 90 + i * 8), [0, 1], [20, 0])}px)`,
            background: 'rgba(255,255,255,0.06)', border: `1px solid ${C.border}`, borderRadius: 24,
            padding: '10px 20px', textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMuted, whiteSpace: 'pre-line', lineHeight: 1.3 }}>{p}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 6: PHASE 1 - AGENTS ───────────────────────────────────────────────
const AgentsScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  const devColors = [C.cyan, C.green, C.orange, C.purple];
  const supColors = [C.red, C.navy, C.magenta];
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <TopBar>● 1 &nbsp; {t.s6Bar}</TopBar>
      <div style={{ padding: '20px 50px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ opacity: fade(f, 5), fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.textMuted, fontStyle: 'italic', textAlign: 'center', marginBottom: 16 }}>{t.s6Quote}</div>
        <div style={{ display: 'flex', gap: 20, flex: 1 }}>
          {/* Left: agent grid */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              {t.s6DevAgents.map((agent, i) => (
                <Card key={i} style={{ flex: 1, borderLeft: `3px solid ${devColors[i]}`, opacity: fade(f, 15 + i * 8), transform: `scale(${interpolate(spr(f, 15 + i * 8), [0, 1], [0, 1])})`, textAlign: 'center', padding: '14px 8px' }}>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: C.white, whiteSpace: 'pre-line', lineHeight: 1.2, marginBottom: 6 }}>{agent}</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: C.textDim }}>{(t.s6DevSpecs as readonly string[])[i]}</div>
                </Card>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {t.s6SupportAgents.map((agent, i) => (
                <Card key={i} style={{ flex: 1, borderLeft: `3px solid ${supColors[i]}`, opacity: fade(f, 50 + i * 8), transform: `scale(${interpolate(spr(f, 50 + i * 8), [0, 1], [0, 1])})`, textAlign: 'center', padding: '14px 8px' }}>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: C.white, whiteSpace: 'pre-line', lineHeight: 1.2, marginBottom: 6 }}>{agent}</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: C.textDim }}>{(t.s6SupportSpecs as readonly string[])[i]}</div>
                </Card>
              ))}
            </div>
            {/* Comparison table */}
            <div style={{ opacity: fade(f, 90), marginTop: 6 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                <div style={{ flex: 1, background: 'rgba(231,76,60,0.15)', padding: '6px 12px', borderRadius: '6px 0 0 0', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 12, color: C.red }}>{(t.s6CompareHeaders as readonly string[])[0]}</div>
                <div style={{ flex: 1, background: 'rgba(0,151,207,0.15)', padding: '6px 12px', borderRadius: '0 6px 0 0', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 12, color: C.cyan }}>{(t.s6CompareHeaders as readonly string[])[1]}</div>
              </div>
              {t.s6CompareLeft.map((left, i) => (
                <div key={i} style={{ display: 'flex', gap: 2, marginTop: 1 }}>
                  <div style={{ flex: 1, background: C.bgCard, padding: '5px 12px', fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.textMuted }}>✗ {left}</div>
                  <div style={{ flex: 1, background: C.bgCard, padding: '5px 12px', fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.cyan }}>✓ {(t.s6CompareRight as readonly string[])[i]}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: anatomy */}
          <div style={{ flex: 0.9, opacity: fade(f, 60), transform: `translateX(${interpolate(spr(f, 60), [0, 1], [80, 0])}px)` }}>
            <div style={{ background: C.codeBg, borderRadius: 12, border: `1px solid ${C.borderCyan}`, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: 'rgba(0,151,207,0.15)', borderBottom: `1px solid ${C.borderCyan}` }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#E74C3C' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F39C12' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2ECC71' }} />
                <div style={{ fontFamily: 'Consolas, monospace', fontSize: 12, color: C.textDim, marginLeft: 8 }}>{t.s6AnatomyTitle}</div>
              </div>
              <div style={{ padding: '14px 18px', flex: 1, overflow: 'hidden' }}>
                {t.s6AnatomyLines.map((line, i) => (
                  <div key={i} style={{
                    fontFamily: 'Consolas, monospace', fontSize: 13, lineHeight: 1.65,
                    color: line.startsWith('#') ? C.cyan : line.startsWith('##') ? C.white : line.startsWith('-') ? '#C8B9F9' : line.startsWith('[') ? C.green : C.textMuted,
                    fontWeight: line.startsWith('#') ? 700 : 400,
                    opacity: fade(f, 70 + i * 3),
                  }}>{line || '\u00A0'}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 7: PHASE 2 - KNOWLEDGE EXTRACTION ─────────────────────────────────
const KnowledgeScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <TopBar color={C.green}>● 2 &nbsp; {t.s7Bar}</TopBar>
      <div style={{ padding: '24px 60px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Problem: scale bars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 30, marginBottom: 20, opacity: fade(f, 5) }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.white, marginBottom: 6 }}>{t.s7ProblemProject}</div>
            <div style={{ height: 20, borderRadius: 10, background: C.navy, width: `${interpolate(spr(f, 8), [0, 1], [0, 100])}%` }} />
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textDim }}>vs</div>
          <div style={{ flex: 0.25 }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.cyan, marginBottom: 6 }}>{t.s7ProblemContext}</div>
            <div style={{ height: 20, borderRadius: 10, background: C.cyan, width: `${interpolate(spr(f, 15), [0, 1], [0, 100])}%` }} />
          </div>
        </div>
        <div style={{ opacity: fade(f, 20), textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.red }}>⚠️ {t.s7ProblemText}</div>
        </div>
        {/* Funnel */}
        <div style={{ opacity: fade(f, 35), textAlign: 'center', marginBottom: 20 }}>
          <div style={{ display: 'inline-block', background: `linear-gradient(180deg, ${C.navy}, ${C.cyan})`, padding: '10px 50px', borderRadius: '8px 8px 30px 30px' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 900, fontSize: 18, color: C.white }}>{t.s7FunnelText}</div>
          </div>
        </div>
        {/* Two columns */}
        <div style={{ display: 'flex', gap: 24, flex: 1 }}>
          <Card style={{ flex: 1, borderTop: `4px solid ${C.blue}`, opacity: fade(f, 45), transform: `translateX(${interpolate(spr(f, 45), [0, 1], [-40, 0])}px)` }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.blue, marginBottom: 4 }}>{t.s7FuncTitle}</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textMuted, marginBottom: 12 }}>{t.s7FuncSub}</div>
            {t.s7FuncItems.map((item, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textWhite, marginBottom: 6, opacity: fade(f, 55 + i * 6) }}>
                <span style={{ color: C.blue }}>● </span>{item}
              </div>
            ))}
          </Card>
          <Card style={{ flex: 1, borderTop: `4px solid ${C.cyan}`, opacity: fade(f, 50), transform: `translateX(${interpolate(spr(f, 50), [0, 1], [40, 0])}px)` }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.cyan, marginBottom: 4 }}>{t.s7TechTitle}</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textMuted, marginBottom: 12 }}>{t.s7TechSub}</div>
            {t.s7TechItems.map((item, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textWhite, marginBottom: 6, opacity: fade(f, 60 + i * 6) }}>
                <span style={{ color: C.cyan }}>● </span>{item}
              </div>
            ))}
          </Card>
        </div>
        {/* Result docs */}
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          {t.s7Docs.map((doc, i) => (
            <div key={i} style={{ flex: 1, opacity: fade(f, 85 + i * 6), background: C.bgCardAlt, borderRadius: 8, padding: '8px 14px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Consolas, monospace', fontSize: 13, color: C.cyan }}>📄 {doc}</div>
            </div>
          ))}
        </div>
        {/* Note */}
        <div style={{ opacity: fade(f, 110), textAlign: 'center', marginTop: 12 }}>
          <Badge color={C.orange}>{t.s7Note}</Badge>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 8: PHASE 3 - FRAMEWORK, TOOLS, SKILLS ────────────────────────────
const FrameworkScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  // 3 acts: 0-240 flow+repo, 240-390 tools/scripts/mcps, 390-540 skills+badge
  const act = f < 240 ? 'A' : f < 390 ? 'B' : 'C';
  const af = act === 'A' ? f : act === 'B' ? f - 240 : f - 390;
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <TopBar color={C.magenta}>● 3 &nbsp; {t.s8Bar}</TopBar>
      <div style={{ padding: '20px 50px', flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {act === 'A' && (
          <>
            {/* Flow */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 20 }}>
              {[{ title: t.s8FlowIn, detail: t.s8FlowInDetail, color: C.textDim, border: C.border },
                { title: t.s8FlowFw, detail: t.s8FlowFwDetail, color: C.magenta, border: C.magenta },
                { title: t.s8FlowOut, detail: t.s8FlowOutDetail, color: C.cyan, border: C.cyan }].map((block, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div style={{ opacity: fade(af, 10 + i * 15), fontSize: 28, color: C.cyan }}>→</div>}
                  <Card style={{ width: 240, textAlign: 'center', opacity: fade(af, 5 + i * 15), border: `2px solid ${block.border}40`, transform: `scale(${interpolate(spr(af, 5 + i * 15), [0, 1], [0.8, 1])})` }}>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: block.color, letterSpacing: 1, marginBottom: 4 }}>{block.title}</div>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMuted, whiteSpace: 'pre-line' }}>{block.detail}</div>
                  </Card>
                </React.Fragment>
              ))}
            </div>
            {/* Repository */}
            <Card style={{ flex: 1, opacity: fade(af, 50), transform: `translateY(${interpolate(spr(af, 50), [0, 1], [40, 0])}px)` }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.white, marginBottom: 14 }}>{t.s8RepoTitle}</div>
              <div style={{ display: 'flex', gap: 40 }}>
                <div>
                  {t.s8RepoClassic.map((folder, i) => (
                    <div key={i} style={{ fontFamily: 'Consolas, monospace', fontSize: 15, color: C.textMuted, marginBottom: 6, opacity: fade(af, 60 + i * 6) }}>📁 {folder}</div>
                  ))}
                </div>
                <div>
                  {t.s8RepoNew.map((folder, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Consolas, monospace', fontSize: 15, color: C.cyan, marginBottom: 6, opacity: fade(af, 75 + i * 6) }}>
                      📁 {folder} <Badge color={C.cyan} style={{ fontSize: 10, padding: '2px 8px' }}>NEW</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </>
        )}
        {act === 'B' && (
          <>
            <div style={{ opacity: fade(af, 0), fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 26, color: C.white, textAlign: 'center', marginBottom: 16 }}>{t.s8ActTitle}</div>
            <div style={{ display: 'flex', gap: 16, flex: 1 }}>
              {[{ title: t.s8ToolsTitle, sub: t.s8ToolsSub, items: t.s8ToolsItems, color: C.orange },
                { title: t.s8ScriptsTitle, sub: t.s8ScriptsSub, items: t.s8ScriptsItems, color: C.green },
                { title: t.s8McpsTitle, sub: t.s8McpsSub, items: t.s8McpsItems, color: C.magenta }].map((card, ci) => (
                <Card key={ci} style={{
                  flex: 1, borderTop: `4px solid ${card.color}`,
                  opacity: fade(af, 10 + ci * 15), transform: `translateY(${interpolate(spr(af, 10 + ci * 15), [0, 1], [50, 0])}px)`,
                }}>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 22, color: C.white, marginBottom: 4 }}>{card.title}</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMuted, marginBottom: 12 }}>{card.sub}</div>
                  {card.items.map((item, i) => (
                    <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textWhite, marginBottom: 5, opacity: fade(af, 25 + ci * 10 + i * 5) }}>
                      <span style={{ color: card.color }}>● </span>{item}
                    </div>
                  ))}
                </Card>
              ))}
            </div>
          </>
        )}
        {act === 'C' && (
          <>
            <div style={{ opacity: fade(af, 0), fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 24, color: C.white, textAlign: 'center', marginBottom: 10 }}>{t.s8SkillsTitle}</div>
            <Card style={{ opacity: fade(af, 8), marginBottom: 14, border: `1px solid ${C.cyan}40`, textAlign: 'center' }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMuted }}>{t.s8SkillDef}</div>
            </Card>
            <div style={{ display: 'flex', gap: 16, flex: 1 }}>
              {t.s8Skills.map((skill, i) => (
                <div key={i} style={{
                  flex: 1, background: C.codeBg, borderRadius: 12, border: `1px solid ${C.borderCyan}`, overflow: 'hidden',
                  opacity: fade(af, 20 + i * 12), transform: `scale(${interpolate(spr(af, 20 + i * 12), [0, 1], [0, 1])})`,
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ background: 'rgba(0,151,207,0.15)', padding: '8px 14px', borderBottom: `1px solid ${C.borderCyan}` }}>
                    <div style={{ fontFamily: 'Consolas, monospace', fontSize: 15, color: C.cyan }}>$ {skill}</div>
                  </div>
                  <div style={{ padding: '12px 16px', flex: 1 }}>
                    <div style={{ fontFamily: 'Consolas, monospace', fontSize: 12, color: C.textMuted, whiteSpace: 'pre-line', lineHeight: 1.7 }}>{(t.s8SkillDescs as readonly string[])[i]}</div>
                  </div>
                  <div style={{ padding: '6px 14px', borderTop: `1px solid ${C.borderCyan}` }}>
                    <Badge color={[C.green, C.orange, C.cyan][i]} style={{ fontSize: 11 }}>{(t.s8SkillTags as readonly string[])[i]}</Badge>
                  </div>
                </div>
              ))}
            </div>
            {/* Badge */}
            <div style={{ opacity: fade(af, 60), textAlign: 'center', marginTop: 14 }}>
              <div style={{ display: 'inline-block', background: C.cyan, borderRadius: 8, padding: '10px 28px' }}>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 17, color: C.white }}>★ {t.s8Badge}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 9: ROLES ──────────────────────────────────────────────────────────
const RolesScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  const phaseColors = [C.cyan, C.magenta, C.green];
  const roles = [
    { title: t.s9TechLeadTitle, items: t.s9TechLeadItems, color: C.cyan, phase: 'DEF' },
    { title: t.s9AILeadsTitle, items: t.s9AILeadsItems, color: C.magenta, phase: 'EXEC' },
    { title: t.s9DevsTitle, items: t.s9DevsItems, color: C.orange, phase: 'EXEC' },
    { title: t.s9MRTitle, items: t.s9MRItems, color: C.green, phase: 'VAL' },
  ];
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column', padding: '40px 60px' }}>
      <div style={{ opacity: fade(f, 0), textAlign: 'center', marginBottom: 8 }}>
        <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 34, color: C.white }}>{t.s9Title}</div>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.cyan, fontStyle: 'italic', marginTop: 6 }}>{t.s9Sub}</div>
      </div>
      {/* Phase bar */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
        {t.s9Phases.map((phase, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div style={{ display: 'flex', alignItems: 'center', color: C.textDim, fontSize: 20 }}>▶</div>}
            <div style={{
              flex: 1, background: `${phaseColors[i]}20`, borderRadius: 8, padding: '10px 0', textAlign: 'center',
              opacity: fade(f, 10 + i * 10), fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: C.white, whiteSpace: 'pre-line', lineHeight: 1.2,
            }}>{phase}</div>
          </React.Fragment>
        ))}
      </div>
      {/* Role cards */}
      <div style={{ display: 'flex', gap: 14, flex: 1 }}>
        {roles.map((role, ri) => (
          <Card key={ri} style={{
            flex: 1, borderLeft: `4px solid ${role.color}`,
            opacity: fade(f, 30 + ri * 15), transform: `translateY(${interpolate(spr(f, 30 + ri * 15), [0, 1], [40, 0])}px)`,
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 17, color: C.white, marginBottom: 10 }}>{role.title}</div>
            {role.items.map((item, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMuted, marginBottom: 5, opacity: fade(f, 50 + ri * 10 + i * 5) }}>
                <span style={{ color: role.color }}>● </span>{item}
              </div>
            ))}
          </Card>
        ))}
      </div>
      <div style={{ opacity: fade(f, 110), textAlign: 'center', marginTop: 16 }}>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 20, color: C.white }}>{t.s9Bottom.split('.')[0]}. <span style={{ color: C.cyan }}>{t.s9Bottom.split('.')[1]?.trim() || ''}</span></div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 10: PHASES 4-5 ───────────────────────────────────────────────────
const GenValScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  const stepColors = [C.cyan, C.navy, C.orange, C.red, C.green];
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <TopBar>● 4-5 &nbsp; {t.s10Bar}</TopBar>
      <div style={{ padding: '16px 40px', flex: 1, display: 'flex', gap: 20 }}>
        {/* Left: Generation */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ opacity: fade(f, 5), fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.orange, marginBottom: 4 }}>{t.s10GenTitle}</div>
          {t.s10GenSteps.map((step, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div style={{ textAlign: 'center', color: C.textDim, fontSize: 14, opacity: fade(f, 15 + i * 10) }}>↓</div>}
              <Card style={{ opacity: fade(f, 12 + i * 10), borderLeft: `3px solid ${stepColors[i]}`, padding: '10px 16px', transform: `translateX(${interpolate(spr(f, 12 + i * 10), [0, 1], [-30, 0])}px)` }}>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.white }}>{step}</div>
              </Card>
            </React.Fragment>
          ))}
          <div style={{ opacity: fade(f, 70), marginTop: 8 }}>
            {t.s10GenFeedback.map((fb, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.cyan, marginBottom: 3, opacity: fade(f, 75 + i * 8) }}>← {fb}</div>
            ))}
          </div>
          <div style={{ opacity: fade(f, 95), marginTop: 6, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: C.white, fontStyle: 'italic' }}>{t.s10GenQuote}</div>
          </div>
        </div>
        {/* Divider */}
        <div style={{ width: 2, background: C.border, flexShrink: 0 }} />
        {/* Right: Validation */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ opacity: fade(f, 10), fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.green, marginBottom: 4 }}>{t.s10ValTitle}</div>
          <Card style={{ opacity: fade(f, 20), borderLeft: `4px solid ${C.red}`, background: 'rgba(231,76,60,0.08)' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: C.white }}>{t.s10ValRule}</div>
          </Card>
          {t.s10ValChecks.map((check, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: fade(f, 35 + i * 10) }}>
              <div style={{ width: 22, height: 22, borderRadius: 4, border: `2px solid ${C.green}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: C.green, flexShrink: 0 }}>
                {fade(f, 40 + i * 10) > 0.5 ? '✓' : ''}
              </div>
              <div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.white }}>{check}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.textDim }}>{(t.s10ValDetails as readonly string[])[i]}</div>
              </div>
            </div>
          ))}
          {/* KPIs */}
          <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
            {t.s10KPIs.map((kpi, i) => (
              <Card key={i} style={{ flex: 1, textAlign: 'center', opacity: fade(f, 85 + i * 8), padding: '10px 6px' }}>
                <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 24, color: [C.cyan, C.navy, C.green, C.red][i] }}>{kpi}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: C.textMuted }}>{(t.s10KPILabels as readonly string[])[i]}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 11: RESULTS ───────────────────────────────────────────────────────
const ResultsScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  const metricColors = [C.cyan, C.green, C.magenta, C.navy];
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column', padding: '40px 60px' }}>
      <div style={{ opacity: fade(f, 0), textAlign: 'center', marginBottom: 30 }}>
        <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 32, color: C.white }}>{t.s11Title}</div>
      </div>
      {/* KPI cards */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 30 }}>
        {t.s11Metrics.map((metric, i) => (
          <Card key={i} style={{
            flex: 1, textAlign: 'center',
            opacity: fade(f, 12 + i * 10), transform: `translateY(${interpolate(spr(f, 12 + i * 10), [0, 1], [40, 0])}px)`,
          }}>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 40, color: metricColors[i], marginBottom: 6 }}>{metric}</div>
            <div style={{ height: 6, borderRadius: 3, background: `${metricColors[i]}20`, marginBottom: 8 }}>
              <div style={{ height: '100%', borderRadius: 3, background: metricColors[i], width: `${interpolate(spr(f, 20 + i * 10), [0, 1], [0, [35, 70, 40, 90][i]])}%` }} />
            </div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textMuted, whiteSpace: 'pre-line', lineHeight: 1.3 }}>{(t.s11MetricLabels as readonly string[])[i]}</div>
            <Badge color={`${metricColors[i]}40`} style={{ marginTop: 8, fontSize: 11 }}>{(t.s11MetricTimelines as readonly string[])[i]}</Badge>
          </Card>
        ))}
      </div>
      {/* Before / After */}
      <div style={{ display: 'flex', gap: 2, flex: 1, opacity: fade(f, 65) }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ background: 'rgba(231,76,60,0.2)', padding: '10px 20px', borderRadius: '8px 0 0 0', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.red }}>{t.s11BeforeTitle}</div>
          </div>
          {t.s11Before.map((item, i) => (
            <div key={i} style={{ background: C.bgCard, padding: '10px 20px', fontFamily: 'Arial, sans-serif', fontSize: 16, color: C.textMuted, opacity: fade(f, 75 + i * 8), textDecoration: 'line-through', textDecorationColor: 'rgba(231,76,60,0.4)' }}>
              ✗ {item}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 12px', opacity: fade(f, 80) }}>
          <div style={{ fontSize: 36, color: C.cyan }}>→</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ background: 'rgba(0,151,207,0.2)', padding: '10px 20px', borderRadius: '0 8px 0 0', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.cyan }}>{t.s11AfterTitle}</div>
          </div>
          {t.s11After.map((item, i) => (
            <div key={i} style={{ background: C.bgCard, padding: '10px 20px', fontFamily: 'Arial, sans-serif', fontSize: 16, color: C.cyan, fontWeight: 600, opacity: fade(f, 80 + i * 8) }}>
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 12: CLOSING ───────────────────────────────────────────────────────
const ClosingScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const t = T[lang];
  const fadeOut = f > 200 ? interpolate(f, [200, 240], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) : 1;
  return (
    <AbsoluteFill style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.cyan} 100%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: fadeOut }}>
      <div style={{ opacity: fade(f, 5), transform: `scale(${interpolate(spr(f, 5), [0, 1], [0.5, 1])})`, marginBottom: 40 }}>
        <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 48, color: C.white, textAlign: 'center', letterSpacing: 3 }}>NTT DATA</div>
      </div>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ opacity: fade(f, 20), fontFamily: 'Arial, sans-serif', fontSize: 34, color: C.white, marginBottom: 8 }}>{t.s12Line1}</div>
        <div style={{ opacity: fade(f, 30), fontFamily: 'Arial, sans-serif', fontSize: 34, color: C.white, marginBottom: 8 }}>{t.s12Line2}</div>
        <div style={{ opacity: fade(f, 40), fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 40, color: C.white, textDecoration: 'underline', textDecorationColor: C.cyan, textUnderlineOffset: 6 }}>{t.s12Line3}</div>
      </div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
        {t.s12Keywords.map((kw, i) => (
          <div key={i} style={{
            opacity: fade(f, 55 + i * 8), transform: `scale(${interpolate(spr(f, 55 + i * 8), [0, 1], [0, 1])})`,
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '12px 22px', textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 17, color: C.white }}>{kw}</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{(t.s12KeySubs as readonly string[])[i]}</div>
          </div>
        ))}
      </div>
      <div style={{ opacity: fade(f, 90), fontFamily: 'Arial, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>{t.s12Footer}</div>
    </AbsoluteFill>
  );
};

// ── MAIN COMPOSITION ────────────────────────────────────────────────────────
// Scene durations in frames (30fps)
const DURATIONS = [150, 450, 450, 360, 360, 420, 420, 540, 450, 420, 360, 240];
const scenes = [TitleScene, ProblemScene, HarnessScene, PillarsScene, PhasesTimelineScene, AgentsScene, KnowledgeScene, FrameworkScene, RolesScene, GenValScene, ResultsScene, ClosingScene];

export const Main: React.FC<{ lang: Lang }> = ({ lang }) => {
  let offset = 0;
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      {scenes.map((Scene, i) => {
        const from = offset;
        offset += DURATIONS[i];
        return (
          <Sequence key={i} from={from} durationInFrames={DURATIONS[i]}>
            <Scene lang={lang} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
