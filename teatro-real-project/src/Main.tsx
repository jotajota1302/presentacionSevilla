import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  spring,
  interpolate,
  Sequence,
  Img,
  staticFile,
} from 'remotion';

const FPS = 30;

// Dark navy theme — white text on dark backgrounds
const C = {
  bg: '#0C1B33',          // main dark background
  bgCard: '#162844',      // card background
  bgCardAlt: '#1A3158',   // alternate card
  navy: '#00245D',        // accent navy
  cyan: '#0097CF',        // accent cyan
  white: '#FFFFFF',
  textWhite: '#FFFFFF',
  textMuted: 'rgba(255,255,255,0.70)',
  textDim: 'rgba(255,255,255,0.45)',
  green: '#2ECC71',
  red: '#E74C3C',
  orange: '#F39C12',
  blue: '#3B82F6',
  border: 'rgba(255,255,255,0.12)',
  borderCyan: 'rgba(0,151,207,0.45)',
  codeBg: '#070F1E',
};

// ── BILINGUAL TEXTS ───────────────────────────────────────────────────────────
export type Lang = 'en' | 'es';

const T = {
  en: {
    // Scene 1
    titleLine1: 'The New Context of',
    titleLine2: 'Software Development',
    titleBadge: 'A real case: AI Native',
    titleSubtitle: <>A new team configuration designed to <strong style={{ color: C.white }}>maximize the potential of AI in software development</strong>, redefining activities, roles and outputs to get faster and more accurate results.</>,
    titleFooter: 'NTT DATA EMEAL · AI Native Squad · 2025',
    // Scene 2
    challengeSectionBar: 'THE CHALLENGE · TEATRO REAL DE MADRID',
    challengeBeforeLabel: 'Before: Manual & Fragmented',
    challengeAfterLabel: 'After: AI-Native System',
    challengeBadgeLine1: 'AI Native',
    challengeBadgeLine2: 'Methodology',
    challengeNarrative1: 'Teatro Real needed to digitize all its operational processes: activity planning, technical production scripts and hall logistics.',
    challengeNarrative2: 'Everything was in Excel, Word and email.',
    challengeBefore: ['📄 Activity planning in Excel','📝 Technical scripts in Word','📧 Coordination by email','🔄 Inconsistent data & duplicates','⏱️ Hours lost in manual updates'],
    challengeAfter: ['🏛️ TEMPO: Activities & calendar','🎭 TOPS: Technical production scripts','👥 ADMIN: Users, roles, permissions','⚡ Angular 18 + Spring Boot 3 + PostgreSQL','🚀 MVP live in weeks, not months'],
    // Scene 3
    s1SectionBar: 'AI STRATEGY AND GOVERNANCE',
    s1Phase: 'PHASE 1',
    s1Title: 'Agent Design',
    s1ActorDesc: <>Before touching any document, defines the{' '}<strong style={{ color: C.cyan }}>specialized agents</strong>{' '}that will work on the project. Each agent replicates a real development team role with its own <strong style={{ color: C.cyan }}>system prompt</strong>.</>,
    s1AgentLabels: ['Requirements Analyst','Frontend Expert','Backend Expert'],
    s1Bottom: <><strong style={{ color: C.cyan }}>Why agents first: </strong>agents are the tools used to extract context later. Without them defined, the extraction would be generic — not project-specific.</>,
    // Scene 4
    s2SectionBar: 'AI STRATEGY AND GOVERNANCE',
    s2Phase: 'PHASE 2',
    s2Title: 'Context Generation',
    s2ActorDesc: <>With the <strong style={{ color: C.cyan }}>agents from Phase 1</strong>, feeds them all client documentation. Each agent processes it from a different perspective — business, backend, frontend — producing a <strong style={{ color: C.cyan }}>structured context repository</strong> before any code is written.</>,
    s2Col1Header: '📥 INPUT — DOC_INICIAL',
    s2Col2Header: '🤖 Phase 1 Agents',
    s2Col3Header: '📤 OUTPUT — DOC_GENERADA',
    s2OutputNote: '✓ Context ready — agents have full project knowledge',
    s2Bottom: <><strong style={{ color: C.cyan }}>No production code yet — </strong>agents read, translate and structure knowledge. The project is fully understood before writing a single line of code.</>,
    // Scene 5
    s5SectionBar: '⭐ OPTIONAL PHASE',
    s5Phase: 'OPTIONAL PHASE',
    s5Title: 'Rapid Prototype & PRD Validation',
    s5ActorDesc: <>With the extracted context, builds a <strong style={{ color: C.orange }}>rapid functional prototype</strong> in React + Supabase. The goal: <strong style={{ color: C.cyan }}>validate with the client</strong> that the understanding is correct before investing in real production development.</>,
    s5Col1Header: '📋 INPUT — PRD & Context',
    s5Col2Header: '⚡ Build & Validate',
    s5Col3Header: '✅ OUTPUT — PRD v2',
    s5Bottom: <><strong style={{ color: C.orange }}>Fix misunderstandings before writing production code — </strong>direct value of the AI Native methodology.</>,
    // Scene 6
    s3SectionBar: 'FRAMEWORK SET UP',
    s3Phase: 'PHASE 3',
    s3Title: 'Prompting Framework',
    s3ActorDesc: <>With the validated context and the corrected PRD, builds <strong style={{ color: C.cyan }}>prompt templates</strong> that transform requirements into structured, executable instructions for Axet Plugin. Standardises the work of the <strong style={{ color: C.cyan }}>entire development team</strong>.</>,
    s3Col2Header: '⚙️ Templates Generated',
    s3Bottom: <><strong style={{ color: C.cyan }}>Standardise the input, improve the output — </strong>consistent prompts drive consistent, higher-quality code across the entire team.</>,
    s3TemplateDescs: ['Full-stack feature (Backend + Frontend)','Spring Boot endpoint creation','Angular component generation','Bug identification & fix'],
    // Scene 7
    s4SectionBar: 'AI-SUPPORTED DEVELOPMENT STREAMS',
    s4Phase: 'PHASE 4',
    s4Title: 'Development',
    s4ActorDesc: <>Plans the implementation, registers tasks in <strong style={{ color: C.cyan }}>Jira</strong> and distributes them across the team. Each developer launches prompts through <strong style={{ color: C.cyan }}>Axet Plugin + Codex</strong>, generating, reviewing and iterating code sprint by sprint.</>,
    s4Col1Header: '🎯 Jira — Sprint Backlog',
    s4Col2Header: '👥 Dev Team in Action',
    s4Col3Header: '📊 Sprint Progress',
    s4ProgressLabel: 'Global Progress',
    s4SprintLabels: ['Sprint 0: Setup','Sprint 1: Auth + Layout','Sprint 2: TEMPO','Sprint 3: TOPS','Sprint 4: Integrations','Sprint 5: Deploy'],
    s4Bottom: <><strong style={{ color: C.cyan }}>AI doesn't replace developers — </strong>it amplifies them. Each prompt generates a full feature; each sprint delivers working software.</>,
    // Scene 8
    s5bSectionBar: 'AI-SUPPORTED DEVELOPMENT STREAMS',
    s5bPhase: 'PHASE 5',
    s5bTitle: 'Quality Assurance',
    s5bAILeadTags: ['✅ Approves MRs','🔀 Manages branches'],
    s5bMRValidatorTags: ['👁️ Code review','🧪 Validates tests'],
    s5bActorDesc: <>Every AI-generated feature goes through <strong style={{ color: '#9B59B6' }}>human review</strong> before merging. The <strong style={{ color: C.cyan }}>AI Lead</strong> oversees quality and branch integration — no automatic merges.</>,
    s5bConnector: '🔍 GitLab MR Review',
    s5bCol1Header: '📋 INPUT — Open MRs',
    s5bCol2Header: '👥 Review in Action',
    s5bCol3Header: '✅ OUTPUT — /development',
    s5bMRLabels: ['TEMPO: Activity calendar view','TOPS: Technical script editor','ADMIN: Role & permissions mgmt','Auth: JWT login + RBAC guards'],
    s5bReviewerActions: ['Code review & test validation','Final approval & branch merge'],
    s5bBottom: <><strong style={{ color: C.cyan }}>No automatic merges — </strong>human eyes on every AI-generated line of code before it reaches the branch.</>,
    // Scene 9
    s6SectionBar: 'AI-SUPPORTED DEVELOPMENT STREAMS',
    s6Phase: 'PHASE 6',
    s6Title: 'Iterative Refinement',
    s6AILeadTags: ['🔄 Reviews all phases','📝 Updates Harness','⚡ Improves precision'],
    s6ActorDesc: <>The AI Lead <strong style={{ color: C.cyan }}>iteratively reviews all phases</strong> to improve precision and efficiency. When something doesn't work in generation or QA, it updates the <strong style={{ color: C.cyan }}>Harness</strong>: context, prompts or agent definitions.</>,
    s6Connector: 'Continuous Refinement',
    s6Node1Title: '⚠️ Issue Detected',
    s6Node2Title: '🔍 AI Lead analyzes',
    s6Node3Title: '🔄 Harness updated',
    s6Node2Items: ['Context completeness','Prompt structure & clarity','Agent behavior & scope'],
    s6FeedbackLoop: 'better next iteration',
    s6Bottom: <><strong style={{ color: C.cyan }}>Keeping the context up to date with each iteration is essential — </strong>it enables faster future developments and keeps the Harness precise.</>,
    // Scene 10
    s7SectionBar: 'AI-SUPPORTED DEVELOPMENT STREAMS',
    s7Phase: 'PHASE 7',
    s7Title: 'Final Delivery',
    s7OutcomeValidatorTags: ['✅ Validates requirements','🔍 Reviews functionality','📋 Accepts delivery'],
    s7ActorDesc: <>Final review of the delivered system: <strong style={{ color: C.orange }}>complete technical solution</strong> and requirements coverage. Validates that the system <strong style={{ color: C.white }}>delivers what was promised to the client</strong>.</>,
    s7Connector: '📋 Final Delivery Review',
    s7Col1Header: '🚀 Delivered System',
    s7Col2Header: '🔍 Validation Checklist',
    s7Col3Header: '⚠️ Human Review',
    s7AlertTitle: <>Human review is <span style={{ color: '#E74C3C' }}>MANDATORY</span></>,
    s7AlertBody: <>AI-generated code and features <strong style={{ color: C.white }}>must be reviewed by a human</strong> before final delivery to the client.</>,
    s7AlertBullets: ['Never assume AI-generated code is correct','Validate every feature with real use cases','Outcome Validator is the last line of defence'],
    s7ChecklistItems: [
      { text: 'Functional requirements covered', icon: '📋' },
      { text: 'Technical solution complete', icon: '🔧' },
      { text: 'Test coverage validated', icon: '🧪' },
      { text: 'UX reviewed with client', icon: '👁️' },
      { text: 'Delivery approved by client', icon: '✅' },
    ],
    s7Bottom: <><strong style={{ color: C.cyan }}>Human in the Loop — </strong>every AI Native delivery includes a mandatory human quality gate: the Outcome Validator ensures what ships is correct, complete, and client-approved.</>,
    // Scene 11
    closingSectionBar: 'AI NATIVE METHODOLOGY · RESULTS',
    closingSubtitle: 'AI Native Methodology · NTT DATA EMEAL',
    closingMetricLabels: ['Faster than traditional development','Prototype delivered to client','Completion at project handoff','Prior stack knowledge required'],
    closingScreenshotDescs: ['Calendar & Activity Management','Technical Script Editor','Real-time Display System'],
    s1ActorTags: ['📄 Reads PRD', '🧠 Designs agents', '📁 Creates .md specs'],
    s2ActorTags: ['📂 Loads docs', '🤖 Runs agents', '📋 Generates context'],
    s3ActorTags: ['📋 Reads PRD v2', '⚙️ Structures prompts', '📁 Creates templates'],
    s4ActorTags: ['📋 Plans sprints', '🎯 Registers in Jira', '👥 Distributes work'],
    s2InputHeader: '~/teatro-real/DOC_INICIAL/',
    s2OutputHeader: '~/teatro-real/DOC_GENERADA/',
    s2OutputLabels: ['Full implementation plan', 'UI & style guide', 'Backend context for agents', 'Frontend context for agents'],
    s2AnalyzingLabel: '⟳ analyzing...',
    s3InputHeader: '📋 INPUT — PRD v2 & Context',
    s3InputSubHeader: 'Validated & corrected',
    s4GeneratingLabel: '⟳ generating...',
    s4IdleLabel: '✓ idle',
    s4InProgressLabel: '● in progress',
    s4DoneLabel: '✓ done',
    s4GlobalProgress: 'Global Progress',
    s5ReviewingLabel: '⟳ reviewing...',
    s5ApprovingLabel: '⟳ approving...',
    s5MergedLabel: '✓ merged',
    s5IdleLabel: '✓ idle',
    s5ReviewingStatus: '● reviewing',
    s5MRQueueLabel: 'merge requests queue',
    s5BuildHealthLabel: 'build health',
    s5BuildPassingLabel: '🔒 build: passing',
    s5CoverageLabel: '📊 coverage: 87%',
    s6FeedbackLabel: 'better next iteration',
    s7ModuleDescs: ['Calendar · Activities · Logistics · Digital Signage', 'Technical Script Editor · TOPs · Pasadas', 'Users · Roles (4) · Departments · Permissions'],
    s7MVPLiveLabel: '🌐 MVP Live',
    s11SubtitleText: 'AI Native Methodology · NTT DATA EMEAL',
    closingQuote: <><strong style={{ color: C.cyan }}>"AI doesn't replace the team. It empowers it."</strong><span style={{ color: C.textMuted }}> — when used with methodology.</span></>,
  },
  es: {
    // Scene 1
    titleLine1: 'El Nuevo Contexto del',
    titleLine2: 'Desarrollo de Software',
    titleBadge: 'Un caso real: AI Native',
    titleSubtitle: <>Una nueva configuración de equipo diseñada para <strong style={{ color: C.white }}>maximizar el potencial de la IA en el desarrollo de software</strong>, redefiniendo actividades, roles y resultados para obtener resultados más rápidos y precisos.</>,
    titleFooter: 'NTT DATA EMEAL · AI Native Squad · 2025',
    // Scene 2
    challengeSectionBar: 'EL RETO · TEATRO REAL DE MADRID',
    challengeBeforeLabel: 'Antes: Manual y Fragmentado',
    challengeAfterLabel: 'Después: Sistema AI-Native',
    challengeBadgeLine1: 'Metodología',
    challengeBadgeLine2: 'AI Native',
    challengeNarrative1: 'El Teatro Real de Madrid necesitaba digitalizar todos sus procesos operativos: planificación de actividades, guiones técnicos de producción y logística de sala.',
    challengeNarrative2: 'Todo estaba en Excel, Word y email.',
    challengeBefore: ['📄 Planificación de actividades en Excel','📝 Guiones técnicos en Word','📧 Coordinación por email','🔄 Datos inconsistentes y duplicados','⏱️ Horas perdidas en actualizaciones manuales'],
    challengeAfter: ['🏛️ TEMPO: Actividades y calendario','🎭 TOPS: Guiones técnicos de producción','👥 ADMIN: Usuarios, roles, permisos','⚡ Angular 18 + Spring Boot 3 + PostgreSQL','🚀 MVP en funcionamiento en semanas, no meses'],
    // Scene 3
    s1SectionBar: 'ESTRATEGIA IA Y GOBERNANZA',
    s1Phase: 'FASE 1',
    s1Title: 'Diseño de Agentes',
    s1ActorDesc: <>Antes de tocar ningún documento, define los{' '}<strong style={{ color: C.cyan }}>agentes especializados</strong>{' '}que trabajarán en el proyecto. Cada agente replica un rol real del equipo con su propio <strong style={{ color: C.cyan }}>system prompt</strong>.</>,
    s1AgentLabels: ['Analista de Requisitos','Experto Frontend','Experto Backend'],
    s1Bottom: <><strong style={{ color: C.cyan }}>Por qué los agentes primero: </strong>los agentes son las herramientas usadas para extraer contexto después. Sin definirlos, la extracción sería genérica — no específica del proyecto.</>,
    // Scene 4
    s2SectionBar: 'ESTRATEGIA IA Y GOBERNANZA',
    s2Phase: 'FASE 2',
    s2Title: 'Generación de Contexto',
    s2ActorDesc: <>Con los <strong style={{ color: C.cyan }}>agentes de la Fase 1</strong>, les alimenta con toda la documentación del cliente. Cada agente la procesa desde una perspectiva diferente — negocio, backend, frontend — produciendo un <strong style={{ color: C.cyan }}>repositorio de contexto estructurado</strong> antes de escribir código.</>,
    s2Col1Header: '📥 INPUT — DOC_INICIAL',
    s2Col2Header: '🤖 Agentes Fase 1',
    s2Col3Header: '📤 OUTPUT — DOC_GENERADA',
    s2OutputNote: '✓ Contexto listo — los agentes conocen el proyecto al completo',
    s2Bottom: <><strong style={{ color: C.cyan }}>Sin código de producción aún — </strong>los agentes leen, traducen y estructuran el conocimiento. El proyecto se entiende completamente antes de escribir una línea de código.</>,
    // Scene 5
    s5SectionBar: '⭐ FASE OPCIONAL',
    s5Phase: 'FASE OPCIONAL',
    s5Title: 'Prototipo Rápido y Validación PRD',
    s5ActorDesc: <>Con el contexto extraído, construye un <strong style={{ color: C.orange }}>prototipo funcional rápido</strong> en React + Supabase. El objetivo: <strong style={{ color: C.cyan }}>validar con el cliente</strong> que el entendimiento es correcto antes de invertir en el desarrollo de producción real.</>,
    s5Col1Header: '📋 INPUT — PRD y Contexto',
    s5Col2Header: '⚡ Construir y Validar',
    s5Col3Header: '✅ OUTPUT — PRD v2',
    s5Bottom: <><strong style={{ color: C.orange }}>Corrige malentendidos antes de escribir código de producción — </strong>valor directo de la metodología AI Native.</>,
    // Scene 6
    s3SectionBar: 'CONFIGURACIÓN DEL FRAMEWORK',
    s3Phase: 'FASE 3',
    s3Title: 'Framework de Prompting',
    s3ActorDesc: <>Con el contexto validado y el PRD corregido, construye <strong style={{ color: C.cyan }}>plantillas de prompts</strong> que transforman requisitos en instrucciones estructuradas y ejecutables para Axet Plugin. Estandariza el trabajo de todo el <strong style={{ color: C.cyan }}>equipo de desarrollo</strong>.</>,
    s3Col2Header: '⚙️ Plantillas Generadas',
    s3Bottom: <><strong style={{ color: C.cyan }}>Estandarizar la entrada, mejorar la salida — </strong>prompts consistentes producen código consistente y de mayor calidad en todo el equipo.</>,
    s3TemplateDescs: ['Feature full-stack (Backend + Frontend)','Creación de endpoints Spring Boot','Generación de componentes Angular','Identificación y corrección de bugs'],
    // Scene 7
    s4SectionBar: 'FLUJOS DE DESARROLLO ASISTIDOS POR IA',
    s4Phase: 'FASE 4',
    s4Title: 'Desarrollo',
    s4ActorDesc: <>Planifica la implementación, registra tareas en <strong style={{ color: C.cyan }}>Jira</strong> y las distribuye al equipo. Cada desarrollador lanza prompts a través de <strong style={{ color: C.cyan }}>Axet Plugin + Codex</strong>, generando, revisando e iterando código sprint a sprint.</>,
    s4Col1Header: '🎯 Jira — Sprint Backlog',
    s4Col2Header: '👥 Equipo Dev en Acción',
    s4Col3Header: '📊 Progreso de Sprints',
    s4ProgressLabel: 'Progreso Global',
    s4SprintLabels: ['Sprint 0: Configuración','Sprint 1: Auth + Layout','Sprint 2: TEMPO','Sprint 3: TOPS','Sprint 4: Integraciones','Sprint 5: Despliegue'],
    s4Bottom: <><strong style={{ color: C.cyan }}>La IA no reemplaza a los desarrolladores — </strong>los amplifica. Cada prompt genera una feature completa; cada sprint entrega software funcional.</>,
    // Scene 8
    s5bSectionBar: 'FLUJOS DE DESARROLLO ASISTIDOS POR IA',
    s5bPhase: 'FASE 5',
    s5bTitle: 'Control de Calidad',
    s5bAILeadTags: ['✅ Aprueba MRs','🔀 Gestiona ramas'],
    s5bMRValidatorTags: ['👁️ Revisión de código','🧪 Valida tests'],
    s5bActorDesc: <>Cada funcionalidad generada por IA pasa por <strong style={{ color: '#9B59B6' }}>revisión humana</strong> antes de fusionarse. El <strong style={{ color: C.cyan }}>AI Lead</strong> supervisa la calidad e integración de ramas — sin merges automáticos.</>,
    s5bConnector: '🔍 Revisión MR en GitLab',
    s5bCol1Header: '📋 INPUT — MRs Abiertos',
    s5bCol2Header: '👥 Revisión en Acción',
    s5bCol3Header: '✅ OUTPUT — /development',
    s5bMRLabels: ['TEMPO: Vista de calendario de actividades','TOPS: Editor de guiones técnicos','ADMIN: Gestión de roles y permisos','Auth: Login JWT + guardias RBAC'],
    s5bReviewerActions: ['Revisión de código y validación de tests','Aprobación final y fusión de ramas'],
    s5bBottom: <><strong style={{ color: C.cyan }}>Sin merges automáticos — </strong>ojos humanos en cada línea de código generada por IA antes de llegar a la rama.</>,
    // Scene 9
    s6SectionBar: 'FLUJOS DE DESARROLLO ASISTIDOS POR IA',
    s6Phase: 'FASE 6',
    s6Title: 'Refinamiento Iterativo',
    s6AILeadTags: ['🔄 Revisa todas las fases','📝 Actualiza el Harness','⚡ Mejora la precisión'],
    s6ActorDesc: <>El AI Lead <strong style={{ color: C.cyan }}>revisa iterativamente todas las fases</strong> para mejorar la precisión y eficiencia. Cuando algo no funciona en la generación o QA, actualiza el <strong style={{ color: C.cyan }}>Harness</strong>: contexto, prompts o definición de agentes.</>,
    s6Connector: 'Refinamiento Continuo',
    s6Node1Title: '⚠️ Problema Detectado',
    s6Node2Title: '🔍 AI Lead analiza',
    s6Node3Title: '🔄 Harness actualizado',
    s6Node2Items: ['Completitud del contexto','Estructura y claridad del prompt','Comportamiento y alcance del agente'],
    s6FeedbackLoop: 'mejor siguiente iteración',
    s6Bottom: <><strong style={{ color: C.cyan }}>Mantener el contexto actualizado en cada iteración es esencial — </strong>facilita desarrollos futuros y mantiene el Harness preciso y actualizado.</>,
    // Scene 10
    s7SectionBar: 'FLUJOS DE DESARROLLO ASISTIDOS POR IA',
    s7Phase: 'FASE 7',
    s7Title: 'Entrega Final',
    s7OutcomeValidatorTags: ['✅ Valida requisitos','🔍 Revisa funcionalidades','📋 Acepta la entrega'],
    s7ActorDesc: <>Revisión final del sistema entregado: <strong style={{ color: C.orange }}>solución técnica completa</strong> y cobertura de requisitos. Valida que el sistema <strong style={{ color: C.white }}>cumple lo prometido al cliente</strong>.</>,
    s7Connector: '📋 Revisión de Entrega Final',
    s7Col1Header: '🚀 Sistema Entregado',
    s7Col2Header: '🔍 Checklist de Validación',
    s7Col3Header: '⚠️ Revisión Humana',
    s7AlertTitle: <>La revisión humana es <span style={{ color: '#E74C3C' }}>OBLIGATORIA</span></>,
    s7AlertBody: <>El código y las funcionalidades generadas por IA <strong style={{ color: C.white }}>deben ser revisados por un humano</strong> antes de la entrega final al cliente.</>,
    s7AlertBullets: ['Nunca asumir que el código generado es correcto','Validar cada funcionalidad con casos reales','El Outcome Validator es la última línea de defensa'],
    s7ChecklistItems: [
      { text: 'Requisitos funcionales cubiertos', icon: '📋' },
      { text: 'Solución técnica completa', icon: '🔧' },
      { text: 'Cobertura de tests validada', icon: '🧪' },
      { text: 'UX revisada con el cliente', icon: '👁️' },
      { text: 'Entrega aprobada por el cliente', icon: '✅' },
    ],
    s7Bottom: <><strong style={{ color: C.cyan }}>Human in the Loop — </strong>toda entrega AI Native incluye una validación humana obligatoria: el Outcome Validator garantiza que lo que se entrega es correcto, completo y aprobado por el cliente.</>,
    // Scene 11
    closingSectionBar: 'METODOLOGÍA AI NATIVE · RESULTADOS',
    closingSubtitle: 'Metodología AI Native · NTT DATA EMEAL',
    closingMetricLabels: ['Más rápido que el desarrollo tradicional','Prototipo entregado al cliente','Completitud en la entrega del proyecto','Conocimiento previo del stack requerido'],
    closingScreenshotDescs: ['Gestión de Calendario y Actividades','Editor de Guiones Técnicos','Sistema de Cartelería Digital'],
    s1ActorTags: ['📄 Lee el PRD', '🧠 Diseña agentes', '📁 Crea specs .md'],
    s2ActorTags: ['📂 Carga documentos', '🤖 Ejecuta agentes', '📋 Genera contexto'],
    s3ActorTags: ['📋 Lee el PRD v2', '⚙️ Estructura prompts', '📁 Crea plantillas'],
    s4ActorTags: ['📋 Planifica sprints', '🎯 Registra en Jira', '👥 Distribuye trabajo'],
    s2InputHeader: '~/teatro-real/DOC_INICIAL/',
    s2OutputHeader: '~/teatro-real/DOC_GENERADA/',
    s2OutputLabels: ['Plan de implementación completo', 'Guía de estilos UI', 'Contexto de backend para agentes', 'Contexto de frontend para agentes'],
    s2AnalyzingLabel: '⟳ analizando...',
    s3InputHeader: '📋 INPUT — PRD v2 y Contexto',
    s3InputSubHeader: 'Validado y corregido',
    s4GeneratingLabel: '⟳ generando...',
    s4IdleLabel: '✓ disponible',
    s4InProgressLabel: '● en progreso',
    s4DoneLabel: '✓ hecho',
    s4GlobalProgress: 'Progreso Global',
    s5ReviewingLabel: '⟳ revisando...',
    s5ApprovingLabel: '⟳ aprobando...',
    s5MergedLabel: '✓ fusionado',
    s5IdleLabel: '✓ disponible',
    s5ReviewingStatus: '● revisando',
    s5MRQueueLabel: 'cola de merge requests',
    s5BuildHealthLabel: 'estado del build',
    s5BuildPassingLabel: '🔒 build: correcto',
    s5CoverageLabel: '📊 cobertura: 87%',
    s6FeedbackLabel: 'mejor siguiente iteración',
    s7ModuleDescs: ['Calendario · Actividades · Logística · Cartelería Digital', 'Editor de Guiones Técnicos · TOPs · Pasadas', 'Usuarios · Roles (4) · Departamentos · Permisos'],
    s7MVPLiveLabel: '🌐 MVP en producción',
    s11SubtitleText: 'Metodología AI Native · NTT DATA EMEAL',
    closingQuote: <><strong style={{ color: C.cyan }}>"La IA no reemplaza al equipo. Lo potencia."</strong><span style={{ color: C.textMuted }}> — cuando se usa con metodología.</span></>,
  },
} as const;


const spr = (frame: number, delay = 0) =>
  spring({ frame: frame - delay, fps: FPS, config: { stiffness: 140, damping: 14, mass: 0.8 } });

// Slower, heavier spring — for card entrances we want to feel deliberate
const sprSlow = (frame: number, delay = 0) =>
  spring({ frame: frame - delay, fps: FPS, config: { stiffness: 60, damping: 16, mass: 1.4 } });

const fade = (frame: number, delay = 0, dur = 15) =>
  interpolate(frame - delay, [0, dur], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

// ── SHARED COMPONENTS ─────────────────────────────────────────────────────────

const Logo: React.FC<{ height?: number }> = ({ height = 40 }) => (
  <Img src={staticFile('logo.png')} style={{ height, objectFit: 'contain' }} />
);

const StepBadge: React.FC<{ n: number }> = ({ n }) => (
  <div style={{ width: 80, height: 80, borderRadius: '50%', background: C.cyan, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 34, fontFamily: 'Arial, sans-serif', flexShrink: 0, boxShadow: '0 4px 20px rgba(0,151,207,0.45)' }}>
    {n}
  </div>
);

const SectionBar: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ background: C.cyan, color: C.white, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, padding: '14px 0', textAlign: 'center', letterSpacing: '0.09em', width: '100%', borderRadius: 6 }}>
    {children}
  </div>
);

const StepTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ background: C.cyan, color: C.white, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 30, padding: '10px 28px', borderRadius: 6, display: 'inline-block' }}>
    {children}
  </div>
);

const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ background: C.bgCard, borderRadius: 12, border: `1px solid ${C.border}`, padding: '20px 24px', ...style }}>
    {children}
  </div>
);

const CodeBlock: React.FC<{ lines: string[]; title?: string; flex?: number }> = ({ lines, title, flex }) => (
  <div style={{ background: C.codeBg, borderRadius: 10, overflow: 'hidden', border: `1px solid ${C.borderCyan}`, ...(flex ? { flex } : {}), display: 'flex', flexDirection: 'column' }}>
    {title && (
      <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 14, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '7px 18px', borderBottom: `1px solid ${C.borderCyan}`, letterSpacing: '0.04em', flexShrink: 0 }}>
        {title}
      </div>
    )}
    <div style={{ padding: '16px 20px', overflowY: 'hidden', flex: 1 }}>
      {lines.map((l, i) => (
        <div key={i} style={{ fontFamily: 'Consolas, "Courier New", monospace', fontSize: 16, lineHeight: 1.7, whiteSpace: 'pre', color: l.startsWith('#') ? C.cyan : l.startsWith('//') ? '#6A9955' : l.startsWith('→') || l.startsWith('✓') ? '#2ECC71' : l.startsWith('⚠') ? '#F4A57A' : l.startsWith('-') ? '#C8B9F9' : 'rgba(255,255,255,0.85)' }}>
          {l}
        </div>
      ))}
    </div>
  </div>
);

const CyanSidebar: React.FC = () => (
  <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 160, background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 900, fontSize: 17, color: '#fff', letterSpacing: '0.1em', writingMode: 'vertical-rl', transform: 'rotate(180deg)', textAlign: 'center', lineHeight: 1.4 }}>
      VALIDATION & CONTROL LAYER
    </div>
  </div>
);

// ── SCENE 1: TITLE ────────────────────────────────────────────────────────────
const TitleScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 6, background: C.cyan, flexShrink: 0 }} />
      {/* Centered content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 140px' }}>
        <div style={{ opacity: fade(f, 5), transform: `translateY(${interpolate(spr(f, 5), [0, 1], [50, 0])}px)`, marginBottom: 28 }}>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 76, color: C.white, lineHeight: 1.05 }}>{T[lang].titleLine1}</div>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 76, color: C.white, lineHeight: 1.05 }}>{T[lang].titleLine2}</div>
        </div>
        <div style={{ opacity: fade(f, 20), transform: `translateY(${interpolate(spr(f, 20), [0, 1], [24, 0])}px)`, marginBottom: 44 }}>
          <div style={{ background: C.cyan, color: C.white, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 32, padding: '10px 36px', display: 'inline-block', borderRadius: 4 }}>
            {T[lang].titleBadge}
          </div>
        </div>
        <div style={{ opacity: fade(f, 28), maxWidth: 1000 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 24, color: C.textMuted, lineHeight: 1.65 }}>
            {T[lang].titleSubtitle}
          </div>
        </div>
        <div style={{ opacity: fade(f, 38), marginTop: 44 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 20, color: C.textDim }}>{T[lang].titleFooter}</div>
        </div>
      </div>
      {/* Logo bottom-right + gradient bar */}
      <div style={{ flexShrink: 0, padding: '0 60px 28px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 8) }}>
        <Logo height={70} />
      </div>
      <div style={{ height: 6, background: `linear-gradient(90deg, ${C.navy} 0%, ${C.cyan} 100%)`, flexShrink: 0 }} />
    </AbsoluteFill>
  );
};

// ── SCENE 2: THE CHALLENGE ────────────────────────────────────────────────────
const ChallengeScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();
  const before = T[lang].challengeBefore as readonly string[];
  const after = T[lang].challengeAfter as readonly string[];
  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Before / Arrow / After — vertically centered */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 80px', gap: 24 }}>
        {/* Title + narrative — centered block */}
        <div style={{ opacity: fade(f, 3), textAlign: 'center', padding: '0 80px' }}>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 42, color: C.white, marginBottom: 18, letterSpacing: '0.01em' }}>Teatro Real de Madrid</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 24, color: C.textMuted, lineHeight: 1.6 }}>
            {T[lang].challengeNarrative1}
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 24, color: C.white, fontWeight: 700, marginTop: 10 }}>
            {T[lang].challengeNarrative2}
          </div>
        </div>
        {/* Columns row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        {/* Before */}
        <div style={{ flex: 1, opacity: fade(f, 8), transform: `translateX(${interpolate(fade(f, 8), [0, 1], [-50, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 22, color: C.red, marginBottom: 18, letterSpacing: '0.02em' }}>{T[lang].challengeBeforeLabel}</div>
          {before.map((item, i) => (
            <div key={i} style={{ padding: '13px 16px', marginBottom: 8, borderRadius: 8, background: C.bgCard, border: `1px solid ${C.border}`, fontFamily: 'Arial, sans-serif', fontSize: 20, color: C.white, opacity: fade(f, 10 + i * 4) }}>
              {item}
            </div>
          ))}
        </div>
        {/* Arrow */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: fade(f, 32), flexShrink: 0, gap: 12 }}>
          <div style={{ fontSize: 56, color: C.cyan, lineHeight: 1 }}>→</div>
          <div style={{ background: C.cyan, color: C.white, padding: '10px 16px', borderRadius: 8, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, textAlign: 'center' }}>
            {T[lang].challengeBadgeLine1}<br />{T[lang].challengeBadgeLine2}
          </div>
        </div>
        {/* After */}
        <div style={{ flex: 1, opacity: fade(f, 32), transform: `translateX(${interpolate(fade(f, 32), [0, 1], [50, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 22, color: C.green, marginBottom: 18, letterSpacing: '0.02em' }}>After: AI-Native System</div>
          {after.map((item, i) => (
            <div key={i} style={{ padding: '13px 16px', marginBottom: 8, borderRadius: 8, background: C.bgCard, border: `1px solid ${C.border}`, fontFamily: 'Arial, sans-serif', fontSize: 20, color: C.white, opacity: fade(f, 34 + i * 4) }}>
              {item}
            </div>
          ))}
        </div>
        </div>{/* end columns row */}
      </div>
      <div style={{ flexShrink: 0, padding: '0 60px 28px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}>
        <Logo height={70} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 3: STEP 1 — AGENT DESIGN ───────────────────────────────────────────
const Step1Scene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();

  // Phase header: 0-20 | Architect: 25-50 | Arrows: 58 | Cards: 70·110·150 | Bottom: 180
  const archScale = spr(f, 25);
  const archOpacity = fade(f, 25, 18);
  const arrowsOpacity = fade(f, 58, 12);

  // Card delays: 70 · 110 · 150 — ~1.3s gap between each at 30fps
  const agents = [
    { icon: '🔍', label: T[lang].s1AgentLabels[0], color: C.blue, delay: 70,
      file: '01-analista-requisitos.md',
      lines: [
        'You are a Senior Requirements Analyst',
        'specialised in software consulting.',
        'Transform raw input from meetings,',
        'emails and docs into structured,',
        'clear and actionable requirements.',
        '─────────────────────────────',
        '## Capabilities:',
        '· Extract functional requirements (RF)',
        '· Extract non-functional reqs (RNF)',
        '· Generate User Stories',
        '  → As [role] I want [X] so that [Y]',
        '· Detect ambiguity, gaps &amp; conflicts',
        '· MoSCoW prioritization',
        '· Dependency &amp; traceability mapping',
        '· Impact analysis per requirement',
        '· Identify implicit requirements',
        '─────────────────────────────',
        '## Output format:',
        '· RF-001: title · actor · priority',
        '  · complexity · source · deps',
        '· RNF-001: category · metric',
        '  · validation criteria',
        '· HU-001: story + acceptance',
        '  criteria + story points',
        '· Business rules RN-001',
        '· Risk &amp; ambiguity report',
        '· Prioritised client question list',
        '─────────────────────────────',
        '## Principles:',
        '· Never assume — always flag it',
        '· Quantify: no "fast" or "easy"',
        '· Separate facts from assumptions',
        '· Think about the end user always',
      ]},
    { icon: '🎨', label: T[lang].s1AgentLabels[1], color: C.cyan, delay: 110,
      file: '08-experto-frontend.md',
      lines: [
        'You are a Senior Frontend Expert',
        'with 12+ years building modern',
        'web apps. Your specialty is',
        'scalable, performant, accessible',
        'component-driven architecture.',
        '─────────────────────────────',
        '## Stack — Teatro Real:',
        '· Angular 18.2 Standalone Components',
        '· Angular Material 18',
        '· TailwindCSS 3.4',
        '· Signals (reactive state mgmt)',
        '· TypeScript strict mode',
        '─────────────────────────────',
        '## Modules:',
        '· TEMPO: Activity calendar',
        '· TOPS: Technical script editor',
        '· ADMIN: Roles &amp; permissions',
        '─────────────────────────────',
        '## Capabilities:',
        '· Container / Presentational pattern',
        '· Lazy loading + code splitting',
        '· REST &amp; GraphQL consumption',
        '· Optimistic UI updates',
        '· WCAG 2.1 AA accessibility',
        '─────────────────────────────',
        '## Principles:',
        '· Small, focused components',
        '· Composition over inheritance',
        '· Performance by default',
        '· Type safety everywhere',
        '· Tests as living documentation',
      ]},
    { icon: '⚙️', label: T[lang].s1AgentLabels[2], color: C.green, delay: 150,
      file: '09-experto-backend.md',
      lines: [
        'You are a Senior Backend Expert',
        'with 15+ years in distributed',
        'systems and APIs. You design',
        'robust, scalable and secure',
        'server-side architectures.',
        '─────────────────────────────',
        '## Stack — Teatro Real:',
        '· Java 17 + Spring Boot 3.3.0',
        '· Spring Data JPA',
        '· PostgreSQL 16',
        '· SpringDoc OpenAPI 2.2',
        '─────────────────────────────',
        '## Architecture:',
        '· Clean / Hexagonal architecture',
        '· SOLID + DDD patterns',
        '· Domain → Application → Infra',
        '· Value Objects + Domain Events',
        '─────────────────────────────',
        '## Capabilities:',
        '· REST API design (OpenAPI spec)',
        '· JWT authentication + RBAC',
        '· OWASP security hardening',
        '· Circuit Breaker / Retry',
        '· Async event-driven architecture',
        '· Query optimisation + cache',
        '─────────────────────────────',
        '## Principles:',
        '· Fail fast · Defense in depth',
        '· No premature abstraction (DRY)',
        '· Logs &amp; traceability by design',
        '· YAGNI — only what is needed',
      ]},
  ];

  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Top bar */}
      <div style={{ flexShrink: 0, padding: '28px 100px 0', opacity: fade(f, 3, 12) }}>
        <SectionBar>{T[lang].s1SectionBar}</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={1} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.cyan, fontWeight: 700, letterSpacing: '0.08em' }}>{T[lang].s1Phase}</div>
          <StepTitle>{T[lang].s1Title}</StepTitle>
        </div>
      </div>

      {/* AI Architect — centered, width fit to content */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid ${C.cyan}`, borderRadius: 14, padding: '18px 36px', boxShadow: `0 0 40px rgba(0,151,207,0.25)` }}>
          {/* Top: avatar + name + tags — all centered */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, boxShadow: `0 0 16px rgba(0,151,207,0.5)` }}>👤</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 22, color: C.white }}>AI Architect</div>
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)' }} />
            {(T[lang].s1ActorTags as string[]).map((tag, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, fontWeight: 600, color: C.cyan, background: 'rgba(0,151,207,0.15)', border: `1px solid rgba(0,151,207,0.4)`, padding: '5px 14px', borderRadius: 20 }}>{tag}</div>
            ))}
          </div>
          {/* Bottom: description — fades in slowly after box appears, larger */}
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 860, opacity: fade(f, 42, 25), transform: `translateY(${interpolate(fade(f, 42, 25), [0, 1], [10, 0])}px)` }}>
            {T[lang].s1ActorDesc}
          </div>
        </div>
      </div>

      {/* T-connector: vertical stem → horizontal bar → 3 drops */}
      <div style={{ flexShrink: 0, padding: '0 50px', position: 'relative', height: 64 }}>
        {/* Stem down from center */}
        <div style={{ position: 'absolute', left: '50%', top: 0, width: 2, background: C.cyan, opacity: arrowsOpacity,
          height: `${interpolate(arrowsOpacity, [0, 1], [0, 20])}px`, transform: 'translateX(-50%)' }} />
        {/* GENERATES label */}
        <div style={{ position: 'absolute', left: '50%', top: 18, transform: 'translateX(-50%)', opacity: arrowsOpacity,
          fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 700, color: C.cyan, letterSpacing: '0.12em',
          background: C.bg, padding: '0 10px', whiteSpace: 'nowrap' }}>
          ▼ GENERATES
        </div>
        {/* Horizontal bar — grows from center outward */}
        {(() => {
          const barGrow = interpolate(arrowsOpacity, [0.4, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          const barW = interpolate(barGrow, [0, 1], [0, 59.6]); // card centers span 20.2%→79.8%
          return (
            <div style={{ position: 'absolute', top: 38, left: `${50 - barW / 2}%`, width: `${barW}%`, height: 2, background: C.cyan, opacity: arrowsOpacity * 0.8 }} />
          );
        })()}
        {/* 3 drop arrows aligned to card centers */}
        {[20.2, 50, 79.8].map((pos, i) => (
          <div key={i} style={{ position: 'absolute', top: 38, left: `${pos}%`, transform: 'translateX(-50%)',
            opacity: interpolate(arrowsOpacity, [0.5 + i * 0.1, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 2, height: 10, background: C.cyan }} />
            <div style={{ fontSize: 10, color: C.cyan, lineHeight: 1 }}>▼</div>
          </div>
        ))}
      </div>

      {/* Agent cards — 500px height, all equal */}
      <div style={{ flexShrink: 0, padding: '0 50px', display: 'grid', gridTemplateColumns: 'repeat(3, 520px)', gridAutoRows: '430px', gap: 22, justifyContent: 'center' }}>
        {agents.map((a, i) => (
          <div key={i} style={{ display: 'flex', opacity: fade(f, a.delay, 20), transform: `translateY(${interpolate(sprSlow(f, a.delay), [0, 1], [80, 0])}px)` }}>
            <div style={{ border: `2px solid ${a.color}`, borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={{ background: a.color, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                <span style={{ fontSize: 20 }}>{a.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.white }}>{a.label}</div>
                  <div style={{ fontFamily: 'Consolas, monospace', fontSize: 10, color: 'rgba(255,255,255,0.75)' }}>{a.file}</div>
                </div>
              </div>
              <div style={{ flex: 1, background: C.codeBg, padding: '8px 13px', overflowY: 'hidden' }}>
                {a.lines.map((l, li) => (
                  <div key={li} style={{ fontFamily: 'Consolas, monospace', fontSize: 13, lineHeight: 1.48, color: l.startsWith('─') ? 'rgba(255,255,255,0.18)' : l.startsWith('·') || l.startsWith('  →') || l.startsWith('  ·') || l.startsWith('  ') ? '#C8B9F9' : l.startsWith('##') ? C.cyan : l.startsWith('#') ? C.cyan : 'rgba(255,255,255,0.82)' }}>{l}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom — Why agents first: aparece, crece y pulsa */}
      {(() => {
        const whyOpacity = fade(f, 180, 20);
        const whyScale = interpolate(spr(f, 180), [0, 1], [0.92, 1]);
        // pulso suave: oscila entre 0.3 y 0.7 de opacidad en el borde
        const pulse = interpolate(Math.sin((f - 200) * 0.08), [-1, 1], [0.3, 0.8]);
        const borderOpacity = f > 200 ? pulse : 0.3;
        return (
          <div style={{ flex: 1, padding: '0 100px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: whyOpacity, transform: `scale(${whyScale})` }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 20, background: 'rgba(0,151,207,0.12)', borderRadius: 12, padding: '18px 36px', border: `2px solid rgba(0,151,207,${borderOpacity})`, boxShadow: `0 0 ${interpolate(borderOpacity, [0.3, 0.8], [8, 28])}px rgba(0,151,207,${borderOpacity * 0.5})` }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>💡</span>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.6 }}>
                  {T[lang].s1Bottom}
                </div>
              </div>
            </div>
            <Logo height={70} />
          </div>
        );
      })()}
    </AbsoluteFill>
  );
};

// ── SCENE 4: STEP 2 — CONTEXT GENERATION ─────────────────────────────────────
const Step2Scene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();

  const archScale = spr(f, 22);
  const archOpacity = fade(f, 22, 18);
  const arrowOpacity = fade(f, 72, 12);

  const phaseAgents = [
    { icon: '🔍', label: T[lang].s1AgentLabels[0], color: C.blue, delay: 82 },
    { icon: '⚙️', label: T[lang].s1AgentLabels[2], color: C.green, delay: 110 },
    { icon: '🎨', label: T[lang].s1AgentLabels[1], color: C.cyan, delay: 138 },
  ];

  const inputFiles = [
    '📄 TR-Requisitos Generales v1.2.docx',
    '📊 TEMPO - Temporada 2025-2026.xlsx',
    '📊 CALENDARIO 2025.xlsx',
    '📝 Contexto TEATRO REAL Gestión Interna.docx',
    '📝 Guion Regiduria CARMEN.docx',
    '📋 Estado_Implementacion_TEMPO.md',
    '📋 TR_Matriz_Requerimientos.md',
  ];

  const outputFiles = [
    { file: 'PLAN_IMPLEMENTACION_COMPLETO.md', label: T[lang].s2OutputLabels[0] },
    { file: 'GUIA_ESTILOS_TEATRO.md', label: T[lang].s2OutputLabels[1] },
    { file: 'CONTEXTO_BACKEND.md', label: T[lang].s2OutputLabels[2] },
    { file: 'CONTEXTO_FRONTEND.md', label: T[lang].s2OutputLabels[3] },
  ];

  const bottomOpacity = fade(f, 175, 20);
  const bottomScale = interpolate(spr(f, 175), [0, 1], [0.92, 1]);
  const pulse = interpolate(Math.sin((f - 195) * 0.08), [-1, 1], [0.3, 0.8]);
  const borderOpacity = f > 195 ? pulse : 0.3;

  // Input file cycling — which file is being read by the agents
  const activeInputFile = f > 90 ? Math.floor((f - 90) / 38) % inputFiles.length : -1;
  // Agent analyzing pulse
  const agentPulse = interpolate(Math.sin(f * 0.22), [-1, 1], [0.35, 1]);

  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Top bar */}
      <div style={{ flexShrink: 0, padding: '28px 100px 0', opacity: fade(f, 3, 12) }}>
        <SectionBar>{T[lang].s2SectionBar}</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={2} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.cyan, fontWeight: 700, letterSpacing: '0.08em' }}>{T[lang].s2Phase}</div>
          <StepTitle>{T[lang].s2Title}</StepTitle>
        </div>
      </div>

      {/* AI Architect box — same style as Phase 1 */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid ${C.cyan}`, borderRadius: 14, padding: '18px 36px', boxShadow: `0 0 40px rgba(0,151,207,0.25)` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, boxShadow: `0 0 16px rgba(0,151,207,0.5)` }}>👤</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 22, color: C.white }}>AI Architect</div>
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)' }} />
            {(T[lang].s2ActorTags as string[]).map((tag, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, fontWeight: 600, color: C.cyan, background: 'rgba(0,151,207,0.15)', border: `1px solid rgba(0,151,207,0.4)`, padding: '5px 14px', borderRadius: 20 }}>{tag}</div>
            ))}
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 880, opacity: fade(f, 40, 25), transform: `translateY(${interpolate(fade(f, 40, 25), [0, 1], [10, 0])}px)` }}>
            {T[lang].s2ActorDesc}
          </div>
        </div>
      </div>

      {/* Connector: AI Architect ──⚡ aXet Plugin──▼ Agents */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, flex: 1, background: C.cyan }} />
            <div style={{ background: C.cyan, color: C.white, padding: '5px 22px', borderRadius: 20, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', whiteSpace: 'nowrap', boxShadow: '0 0 16px rgba(0,151,207,0.5)', flexShrink: 0 }}>⚡ aXet Plugin</div>
            <div style={{ width: 2, flex: 1, background: C.cyan }} />
            <div style={{ fontSize: 10, color: C.cyan, lineHeight: 1, flexShrink: 0 }}>▼</div>
          </div>
        );
      })()}

      {/* 3-column flow: INPUT → AGENTS → OUTPUT */}
      <div style={{ flexShrink: 0, padding: '0 200px 12px', display: 'grid', gridTemplateColumns: '1fr 56px 1fr 56px 1fr', alignItems: 'center' }}>

        {/* Col 1: INPUT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 62, 15), transform: `translateX(${interpolate(spr(f, 62), [0, 1], [-30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s2Col1Header}</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: `1px solid ${C.borderCyan}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: `1px solid ${C.borderCyan}`, flexShrink: 0 }}>{T[lang].s2InputHeader}</div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {inputFiles.map((l, i) => {
                const isActive = activeInputFile === i;
                const filePulse = isActive ? interpolate(Math.sin(f * 0.2), [-1, 1], [0.5, 1]) : 0;
                return (
                  <div key={i} style={{ fontFamily: 'Consolas, monospace', fontSize: 13, lineHeight: 1.4, color: isActive ? C.cyan : 'rgba(255,255,255,0.82)', background: isActive ? 'rgba(0,151,207,0.12)' : 'transparent', borderRadius: 4, padding: '1px 4px', margin: '0 -4px', boxShadow: isActive ? `0 0 ${interpolate(filePulse, [0.5, 1], [4, 10])}px rgba(0,151,207,${filePulse * 0.6})` : 'none' }}>
                    {isActive ? '► ' : '  '}{l}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Arrow 1 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: arrowOpacity }}>
          <div style={{ fontSize: 30, color: C.cyan, fontWeight: 900 }}>→</div>
        </div>

        {/* Col 2: AGENTS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 72, 15) }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s2Col2Header}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {phaseAgents.map((a, i) => (
              <div key={i} style={{ background: a.color, borderRadius: 10, padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 14, opacity: fade(f, a.delay, 18), transform: `translateY(${interpolate(sprSlow(f, a.delay), [0, 1], [40, 0])}px)` }}>
                <span style={{ fontSize: 24 }}>{a.icon}</span>
                <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.white }}>{a.label}</span>
                {f > a.delay + 28 && (
                  <span style={{ fontFamily: 'Consolas, monospace', fontSize: 12, color: 'rgba(255,255,255,0.9)', opacity: agentPulse, marginLeft: 'auto' }}>{T[lang].s2AnalyzingLabel}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Arrow 2 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: arrowOpacity }}>
          <div style={{ fontSize: 30, color: C.cyan, fontWeight: 900 }}>→</div>
        </div>

        {/* Col 3: OUTPUT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 150, 15), transform: `translateX(${interpolate(spr(f, 150), [0, 1], [30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.green, marginBottom: 6 }}>{T[lang].s2Col3Header}</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: `1px solid ${C.borderCyan}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: `1px solid ${C.borderCyan}`, flexShrink: 0 }}>{T[lang].s2OutputHeader}</div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {outputFiles.map((o, i) => (
                <div key={i} style={{ opacity: fade(f, 155 + i * 5) }}>
                  <div style={{ fontFamily: 'Consolas, monospace', fontSize: 13, color: C.green, fontWeight: 600 }}>→ {o.file}</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 11.5, color: C.textDim, marginTop: 3 }}>{o.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.green, fontStyle: 'italic', fontWeight: 600 }}>{T[lang].s2OutputNote}</div>
        </div>
      </div>

      {/* Spacer — pushes grid up by taking space below it */}
      <div style={{ flex: 0.6 }} />

      {/* Bottom strip — pulsing insight + logo */}
      <div style={{ flexShrink: 0, padding: '8px 100px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: bottomOpacity, transform: `scale(${bottomScale})` }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: 'rgba(0,151,207,0.12)', borderRadius: 12, padding: '16px 32px', border: `2px solid rgba(0,151,207,${borderOpacity})`, boxShadow: `0 0 ${interpolate(borderOpacity, [0.3, 0.8], [8, 28])}px rgba(0,151,207,${borderOpacity * 0.5})` }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.6 }}>
              {T[lang].s2Bottom}
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 5: RAPID PROTOTYPE ──────────────────────────────────────────────────
const PrototypeScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();

  const archScale = spr(f, 22);
  const archOpacity = fade(f, 22, 18);
  const arrowOpacity = fade(f, 72, 12);

  const inputItems = [
    '📋 EspecificacionFuncional_TeatroReal.md',
    '📁 DOC_GENERADA/ (Phase 2 output)',
    '  → CONTEXTO_BACKEND.md',
    '  → CONTEXTO_FRONTEND.md',
    '  → PLAN_IMPLEMENTACION.md',
  ];

  const processItems = [
    { icon: '⚡', label: 'React + Supabase prototype', detail: 'Different stack from production — chosen for speed, not permanence', color: '#E67E22', delay: 90 },
    { icon: '🤝', label: 'Teatro Real reviews', detail: 'Client navigates a working system — real feedback in days', color: '#9B59B6', delay: 118 },
  ];

  const outputItems = [
    { text: 'EspecificacionFuncional_TeatroReal_v2.md', label: 'Corrected PRD' },
    { text: 'Wrong assumptions removed', label: 'Before any production code' },
    { text: 'Scope confirmed with client', label: 'Team fully aligned' },
  ];

  const bottomOpacity = fade(f, 162, 20);
  const bottomScale = interpolate(spr(f, 162), [0, 1], [0.92, 1]);
  const pulse = interpolate(Math.sin((f - 182) * 0.08), [-1, 1], [0.3, 0.8]);
  const borderOpacity = f > 182 ? pulse : 0.3;

  // Input file cycling
  const activeInputFile = f > 90 ? Math.floor((f - 90) / 40) % inputItems.length : -1;
  // Process card pulsing indicator
  const processPulse = interpolate(Math.sin(f * 0.22), [-1, 1], [0.35, 1]);

  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Top bar — OPTIONAL PHASE (orange) */}
      <div style={{ flexShrink: 0, padding: '28px 100px 0', opacity: fade(f, 3, 12) }}>
        <div style={{ background: C.orange, color: C.white, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, padding: '14px 0', textAlign: 'center', letterSpacing: '0.09em', width: '100%', borderRadius: 6 }}>
          {T[lang].s5SectionBar}
        </div>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: C.orange, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontFamily: 'Arial, sans-serif', flexShrink: 0, boxShadow: '0 4px 20px rgba(243,156,18,0.45)' }}>⭐</div>
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.orange, fontWeight: 700, letterSpacing: '0.08em' }}>{T[lang].s5Phase}</div>
          <StepTitle>{T[lang].s5Title}</StepTitle>
        </div>
      </div>

      {/* Two actors box */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid ${C.orange}`, borderRadius: 14, padding: '18px 36px', boxShadow: '0 0 40px rgba(243,156,18,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {/* Actor 1 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 0 16px rgba(0,151,207,0.5)' }}>👤</div>
              <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 22, color: C.white }}>AI Architect</div>
            </div>
            <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.15)' }} />
            {/* Actor 2 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 0 16px rgba(59,130,246,0.5)' }}>👤</div>
              <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 22, color: C.white }}>Req. Validator</div>
            </div>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 880, opacity: fade(f, 40, 25), transform: `translateY(${interpolate(fade(f, 40, 25), [0, 1], [10, 0])}px)` }}>
            {T[lang].s5ActorDesc}
          </div>
        </div>
      </div>

      {/* Connector */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, flex: 1, background: C.orange }} />
            <div style={{ background: C.orange, color: C.white, padding: '5px 22px', borderRadius: 20, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', whiteSpace: 'nowrap', boxShadow: '0 0 16px rgba(243,156,18,0.5)', flexShrink: 0 }}>⚡ React + Supabase</div>
            <div style={{ width: 2, flex: 1, background: C.orange }} />
            <div style={{ fontSize: 10, color: C.orange, lineHeight: 1, flexShrink: 0 }}>▼</div>
          </div>
        );
      })()}

      {/* 3-column flow */}
      <div style={{ flexShrink: 0, padding: '0 200px 12px', display: 'grid', gridTemplateColumns: '1fr 56px 1fr 56px 1fr', alignItems: 'center' }}>

        {/* Col 1: PRD + Context */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 72, 15), transform: `translateX(${interpolate(spr(f, 72), [0, 1], [-30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s5Col1Header}</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: `1px solid ${C.borderCyan}`, overflow: 'hidden' }}>
            <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: `1px solid ${C.borderCyan}` }}>Phase 2 output</div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {inputItems.map((l, i) => {
                const isActive = activeInputFile === i;
                const filePulse = isActive ? interpolate(Math.sin(f * 0.2), [-1, 1], [0.5, 1]) : 0;
                return (
                  <div key={i} style={{ fontFamily: 'Consolas, monospace', fontSize: 13, color: isActive ? '#fff' : (l.includes('→') ? C.cyan : 'rgba(255,255,255,0.82)'), lineHeight: 1.4, background: isActive ? `rgba(243,156,18,${filePulse * 0.18})` : 'transparent', borderRadius: 4, padding: '2px 6px', display: 'flex', alignItems: 'center', gap: 6 }}>
                    {isActive && <span style={{ color: C.orange, fontSize: 11, opacity: filePulse, flexShrink: 0 }}>►</span>}
                    {l}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Arrow 1 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: arrowOpacity }}>
          <div style={{ fontSize: 30, color: C.orange, fontWeight: 900 }}>→</div>
        </div>

        {/* Col 2: Build + Validate */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, opacity: fade(f, 90, 15) }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s5Col2Header}</div>
          {processItems.map((a, i) => {
            const cardVisible = f > a.delay + 14;
            const processLabel = i === 0 ? '⟳ building...' : '⟳ reviewing...';
            return (
              <div key={i} style={{ background: C.bgCard, borderRadius: 12, border: `2px solid ${a.color}`, padding: '20px 18px', textAlign: 'center', opacity: fade(f, a.delay, 18), transform: `translateY(${interpolate(sprSlow(f, a.delay), [0, 1], [40, 0])}px)` }}>
                <div style={{ fontSize: 44, marginBottom: 10 }}>{a.icon}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: a.color, marginBottom: 8 }}>{a.label}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMuted, lineHeight: 1.5 }}>{a.detail}</div>
                {cardVisible && <div style={{ marginTop: 10, fontFamily: 'Consolas, monospace', fontSize: 12, color: a.color, opacity: processPulse }}>{processLabel}</div>}
              </div>
            );
          })}
        </div>

        {/* Arrow 2 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: arrowOpacity }}>
          <div style={{ fontSize: 30, color: C.orange, fontWeight: 900 }}>→</div>
        </div>

        {/* Col 3: PRD v2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 140, 15), transform: `translateX(${interpolate(spr(f, 140), [0, 1], [30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.green, marginBottom: 6 }}>{T[lang].s5Col3Header}</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: '1px solid rgba(46,204,113,0.3)', overflow: 'hidden' }}>
            <div style={{ background: 'rgba(46,204,113,0.18)', color: C.green, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: '1px solid rgba(46,204,113,0.3)' }}>Validated &amp; corrected</div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {outputItems.map((o, i) => (
                <div key={i} style={{ opacity: fade(f, 145 + i * 6) }}>
                  <div style={{ fontFamily: 'Consolas, monospace', fontSize: 13, color: C.green, fontWeight: 600 }}>✓ {o.text}</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 11.5, color: C.textDim, marginTop: 3 }}>{o.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.green, fontStyle: 'italic', fontWeight: 600 }}>PRD ready for production</div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ flex: 0.6 }} />

      {/* Bottom strip */}
      <div style={{ flexShrink: 0, padding: '8px 100px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: bottomOpacity, transform: `scale(${bottomScale})` }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: 'rgba(243,156,18,0.1)', borderRadius: 12, padding: '16px 32px', border: `2px solid rgba(243,156,18,${borderOpacity})`, boxShadow: `0 0 ${interpolate(borderOpacity, [0.3, 0.8], [8, 28])}px rgba(243,156,18,${borderOpacity * 0.5})` }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.6 }}>
              {T[lang].s5Bottom}
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 6: STEP 3 — PROMPTING FRAMEWORK ────────────────────────────────────
const Step3Scene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();

  const archScale = spr(f, 22);
  const archOpacity = fade(f, 22, 18);
  const arrowOpacity = fade(f, 72, 12);

  const templates = [
    { file: 'PROMPT_FEATURE.md', desc: T[lang].s3TemplateDescs[0], color: C.cyan, delay: 82 },
    { file: 'PROMPT_BACKEND.md', desc: T[lang].s3TemplateDescs[1], color: C.green, delay: 100 },
    { file: 'PROMPT_FRONTEND.md', desc: T[lang].s3TemplateDescs[2], color: C.blue, delay: 118 },
    { file: 'PROMPT_BUGFIX.md', desc: T[lang].s3TemplateDescs[3], color: C.red, delay: 136 },
  ];

  const inputItems = [
    '📋 EspecificacionFuncional_TeatroReal_v2.md',
    '📁 DOC_GENERADA/ (Phase 2)',
    '  → CONTEXTO_BACKEND.md',
    '  → CONTEXTO_FRONTEND.md',
    '  → PLAN_IMPLEMENTACION.md',
  ];

  const outputLines = [
    '## Project Context',
    'Teatro Real Management System',
    'Backend: Java 17 + Spring Boot 3.3',
    'Frontend: Angular 18.2 + Tailwind',
    '─────────────────────────────',
    '## Feature Request',
    'Module: [ADMIN | TEMPO | TOPS]',
    'Requirement: [RF-TEMPO-X]',
    '─────────────────────────────',
    '## User Story',
    'As [role] I want [action]',
    'So that [benefit]',
    '─────────────────────────────',
    '## Acceptance Criteria',
    '- [ ] Verifiable criterion 1',
    '- [ ] Verifiable criterion 2',
    '─────────────────────────────',
    '## Technical Constraints',
    '- Follow existing architecture',
    '- Do not break current tests',
  ];

  const bottomOpacity = fade(f, 162, 20);
  const bottomScale = interpolate(spr(f, 162), [0, 1], [0.92, 1]);
  const pulse = interpolate(Math.sin((f - 182) * 0.08), [-1, 1], [0.3, 0.8]);
  const borderOpacity = f > 182 ? pulse : 0.3;

  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Top bar */}
      <div style={{ flexShrink: 0, padding: '28px 100px 0', opacity: fade(f, 3, 12) }}>
        <SectionBar>{T[lang].s3SectionBar}</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={3} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.cyan, fontWeight: 700, letterSpacing: '0.08em' }}>{T[lang].s3Phase}</div>
          <StepTitle>{T[lang].s3Title}</StepTitle>
        </div>
      </div>

      {/* AI Architect box */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid ${C.cyan}`, borderRadius: 14, padding: '18px 36px', boxShadow: '0 0 40px rgba(0,151,207,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, boxShadow: '0 0 16px rgba(0,151,207,0.5)' }}>👤</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 22, color: C.white }}>AI Architect</div>
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)' }} />
            {(T[lang].s3ActorTags as string[]).map((tag, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, fontWeight: 600, color: C.cyan, background: 'rgba(0,151,207,0.15)', border: '1px solid rgba(0,151,207,0.4)', padding: '5px 14px', borderRadius: 20 }}>{tag}</div>
            ))}
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 880, opacity: fade(f, 40, 25), transform: `translateY(${interpolate(fade(f, 40, 25), [0, 1], [10, 0])}px)` }}>
            {T[lang].s3ActorDesc}
          </div>
        </div>
      </div>

      {/* Connector */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, flex: 1, background: C.cyan }} />
            <div style={{ background: C.cyan, color: C.white, padding: '5px 22px', borderRadius: 20, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', whiteSpace: 'nowrap', boxShadow: '0 0 16px rgba(0,151,207,0.5)', flexShrink: 0 }}>📁 PROMPT_FRAMEWORK/</div>
            <div style={{ width: 2, flex: 1, background: C.cyan }} />
            <div style={{ fontSize: 10, color: C.cyan, lineHeight: 1, flexShrink: 0 }}>▼</div>
          </div>
        );
      })()}

      {/* 3-column flow */}
      <div style={{ flexShrink: 0, padding: '0 200px 12px', display: 'grid', gridTemplateColumns: '1fr 56px 1fr 56px 1fr', alignItems: 'center' }}>

        {/* Col 1: INPUT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 72, 15), transform: `translateX(${interpolate(spr(f, 72), [0, 1], [-30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s3InputHeader}</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: `1px solid ${C.borderCyan}`, overflow: 'hidden' }}>
            <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: `1px solid ${C.borderCyan}` }}>{T[lang].s3InputSubHeader}</div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {inputItems.map((l, i) => (
                <div key={i} style={{ fontFamily: 'Consolas, monospace', fontSize: 13, color: l.includes('→') ? C.cyan : 'rgba(255,255,255,0.82)', lineHeight: 1.4 }}>{l}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow 1 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: arrowOpacity }}>
          <div style={{ fontSize: 30, color: C.cyan, fontWeight: 900 }}>→</div>
        </div>

        {/* Col 2: Templates generated */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 72, 15) }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s3Col2Header}</div>
          {templates.map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '11px 16px', background: C.bgCard, borderRadius: 8, borderLeft: `4px solid ${t.color}`, opacity: fade(f, t.delay, 16), transform: `translateY(${interpolate(sprSlow(f, t.delay), [0, 1], [30, 0])}px)` }}>
              <span style={{ fontFamily: 'Consolas, monospace', fontSize: 13, color: t.color, fontWeight: 700, flexShrink: 0 }}>{t.file}</span>
              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.textMuted }}>→ {t.desc}</span>
            </div>
          ))}
        </div>

        {/* Arrow 2 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: arrowOpacity }}>
          <div style={{ fontSize: 30, color: C.cyan, fontWeight: 900 }}>→</div>
        </div>

        {/* Col 3: Preview of PROMPT_FEATURE.md */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 148, 15), transform: `translateX(${interpolate(spr(f, 148), [0, 1], [30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.cyan, marginBottom: 6 }}>📄 PROMPT_FEATURE.md</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: `1px solid ${C.borderCyan}`, overflow: 'hidden' }}>
            <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: `1px solid ${C.borderCyan}` }}>Template preview</div>
            <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 1 }}>
              {outputLines.map((l, i) => (
                <div key={i} style={{ fontFamily: 'Consolas, monospace', fontSize: 11, lineHeight: 1.5, color: l.startsWith('##') ? C.cyan : l.startsWith('─') ? 'rgba(255,255,255,0.15)' : l.startsWith('-') ? '#C8B9F9' : 'rgba(255,255,255,0.78)' }}>{l}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ flex: 0.6 }} />

      {/* Bottom strip */}
      <div style={{ flexShrink: 0, padding: '8px 100px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: bottomOpacity, transform: `scale(${bottomScale})` }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: 'rgba(0,151,207,0.12)', borderRadius: 12, padding: '16px 32px', border: `2px solid rgba(0,151,207,${borderOpacity})`, boxShadow: `0 0 ${interpolate(borderOpacity, [0.3, 0.8], [8, 28])}px rgba(0,151,207,${borderOpacity * 0.5})` }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.6 }}>
              {T[lang].s3Bottom}
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 7: STEP 4 — DEVELOPMENT ────────────────────────────────────────────
const Step4Scene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();

  const archScale = spr(f, 22);
  const archOpacity = fade(f, 22, 18);
  const arrowOpacity = fade(f, 72, 12);

  const jiraItems = [
    { ticket: 'TR-041', label: 'TEMPO: Activity calendar view', sprint: 'Sprint 2', color: C.green },
    { ticket: 'TR-067', label: 'TOPS: Technical script editor', sprint: 'Sprint 3', color: C.cyan },
    { ticket: 'TR-089', label: 'ADMIN: Role & permissions mgmt', sprint: 'Sprint 2', color: C.blue },
    { ticket: 'TR-112', label: 'Auth: JWT login + RBAC guards', sprint: 'Sprint 1', color: C.green },
  ];

  const devs = [
    { role: 'Front AI Dev', stack: 'Angular 18 · Components · UI', tool: 'Axet Plugin', color: C.blue, delay: 88 },
    { role: 'Back AI Dev', stack: 'Spring Boot · REST APIs · JPA', tool: 'Axet Plugin + Codex', color: C.green, delay: 112 },
  ];

  const sprints = [
    { label: T[lang].s4SprintLabels[0], pct: 100, color: C.green },
    { label: T[lang].s4SprintLabels[1], pct: 100, color: C.green },
    { label: T[lang].s4SprintLabels[2], pct: 100, color: C.green },
    { label: T[lang].s4SprintLabels[3], pct: 95, color: C.cyan },
    { label: T[lang].s4SprintLabels[4], pct: 35, color: C.orange },
    { label: T[lang].s4SprintLabels[5], pct: 30, color: C.orange },
  ];

  const bottomOpacity = fade(f, 170, 20);
  const bottomScale = interpolate(spr(f, 170), [0, 1], [0.92, 1]);
  const pulse = interpolate(Math.sin((f - 190) * 0.08), [-1, 1], [0.3, 0.8]);
  const borderOpacity = f > 190 ? pulse : 0.3;

  // Jira sequential: each ticket active for 55 frames, then permanently done — no loop
  const currentActive = f > 130 ? Math.min(Math.floor((f - 130) / 55), jiraItems.length - 1) : -1;
  // All tickets done at f = 130 + 4×55 = 350
  const allDone = f > 130 + jiraItems.length * 55;
  // Dev generating pulse
  const genPulse = interpolate(Math.sin(f * 0.22), [-1, 1], [0.35, 1]);

  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Top bar */}
      <div style={{ flexShrink: 0, padding: '28px 100px 0', opacity: fade(f, 3, 12) }}>
        <SectionBar>{T[lang].s4SectionBar}</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={4} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.cyan, fontWeight: 700, letterSpacing: '0.08em' }}>{T[lang].s4Phase}</div>
          <StepTitle>{T[lang].s4Title}</StepTitle>
        </div>
      </div>

      {/* AI Lead box */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid ${C.cyan}`, borderRadius: 14, padding: '18px 36px', boxShadow: '0 0 40px rgba(0,151,207,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, boxShadow: '0 0 16px rgba(0,151,207,0.5)' }}>👤</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 22, color: C.white }}>AI Lead</div>
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)' }} />
            {(T[lang].s4ActorTags as string[]).map((tag, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, fontWeight: 600, color: C.cyan, background: 'rgba(0,151,207,0.15)', border: '1px solid rgba(0,151,207,0.4)', padding: '5px 14px', borderRadius: 20 }}>{tag}</div>
            ))}
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 880, opacity: fade(f, 40, 25), transform: `translateY(${interpolate(fade(f, 40, 25), [0, 1], [10, 0])}px)` }}>
            {T[lang].s4ActorDesc}
          </div>
        </div>
      </div>

      {/* Connector */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, flex: 1, background: C.cyan }} />
            <div style={{ background: C.cyan, color: C.white, padding: '5px 22px', borderRadius: 20, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', whiteSpace: 'nowrap', boxShadow: '0 0 16px rgba(0,151,207,0.5)', flexShrink: 0 }}>⚡ Axet Plugin + Codex</div>
            <div style={{ width: 2, flex: 1, background: C.cyan }} />
            <div style={{ fontSize: 10, color: C.cyan, lineHeight: 1, flexShrink: 0 }}>▼</div>
          </div>
        );
      })()}

      {/* 3-column flow */}
      <div style={{ flexShrink: 0, padding: '0 160px 12px', display: 'grid', gridTemplateColumns: '1fr 56px 1fr 56px 1fr', alignItems: 'center' }}>

        {/* Col 1: Jira backlog */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 72, 15), transform: `translateX(${interpolate(spr(f, 72), [0, 1], [-30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s4Col1Header}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {jiraItems.map((j, i) => {
              const isDone = f > 130 + (i + 1) * 55;
              const isActive = !isDone && currentActive === i;
              const activePulse = isActive ? interpolate(Math.sin(f * 0.18), [-1, 1], [0.4, 0.8]) : 0;
              return (
                <div key={i} style={{ background: isDone ? 'rgba(46,204,113,0.08)' : (isActive ? 'rgba(0,151,207,0.14)' : C.bgCard), borderRadius: 8, padding: '10px 14px', border: `1px solid ${isDone ? 'rgba(46,204,113,0.35)' : (isActive ? j.color : C.border)}`, borderLeftWidth: 4, borderLeftColor: isDone ? C.green : j.color, borderLeftStyle: 'solid', opacity: fade(f, 76 + i * 5), boxShadow: isActive ? `0 0 ${interpolate(activePulse, [0.4, 0.8], [8, 20])}px rgba(0,151,207,${activePulse})` : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 3 }}>
                    <span style={{ fontFamily: 'Consolas, monospace', fontSize: 11, color: isDone ? C.green : j.color, fontWeight: 700 }}>{isDone ? '✅' : j.ticket}</span>
                    <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: C.textDim, background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: 10 }}>{j.sprint}</span>
                    {isActive && <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: C.cyan, fontWeight: 700, opacity: genPulse }}>{T[lang].s4InProgressLabel}</span>}
                    {isDone && <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: C.green, fontWeight: 700 }}>{T[lang].s4DoneLabel}</span>}
                  </div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: isDone ? 'rgba(46,204,113,0.7)' : (isActive ? C.white : 'rgba(255,255,255,0.82)'), textDecoration: isDone ? 'line-through' : 'none' }}>{j.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrow 1 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: arrowOpacity }}>
          <div style={{ fontSize: 30, color: C.cyan, fontWeight: 900 }}>→</div>
        </div>

        {/* Col 2: Dev team in action */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, opacity: fade(f, 82, 15) }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s4Col2Header}</div>
          {devs.map((d, i) => (
            <div key={i} style={{ background: C.bgCard, borderRadius: 10, border: `2px solid ${d.color}`, overflow: 'hidden', opacity: fade(f, d.delay, 18), transform: `translateY(${interpolate(sprSlow(f, d.delay), [0, 1], [40, 0])}px)` }}>
              <div style={{ background: d.color, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 18 }}>👤</span>
                <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.white }}>{d.role}</span>
              </div>
              <div style={{ padding: '10px 14px' }}>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMuted, marginBottom: 6 }}>{d.stack}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,151,207,0.15)', border: '1px solid rgba(0,151,207,0.35)', borderRadius: 14, padding: '3px 12px' }}>
                    <span style={{ fontSize: 12 }}>⚡</span>
                    <span style={{ fontFamily: 'Consolas, monospace', fontSize: 11, color: C.cyan, fontWeight: 700 }}>{d.tool}</span>
                  </div>
                  {f > d.delay + 30 && !allDone && (
                    <span style={{ fontFamily: 'Consolas, monospace', fontSize: 11, color: C.green, opacity: genPulse }}>{T[lang].s4GeneratingLabel}</span>
                  )}
                  {allDone && (
                    <span style={{ fontFamily: 'Consolas, monospace', fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{T[lang].s4IdleLabel}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow 2 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: arrowOpacity }}>
          <div style={{ fontSize: 30, color: C.cyan, fontWeight: 900 }}>→</div>
        </div>

        {/* Col 3: Sprint progress */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 140, 15), transform: `translateX(${interpolate(spr(f, 140), [0, 1], [30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s4Col3Header}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {sprints.map((s, i) => {
              const pct = interpolate(f, [144 + i * 10, 350], [0, s.pct], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
              const isFilling = pct > 0 && pct < s.pct;
              const barGlow = isFilling ? interpolate(Math.sin(f * 0.25), [-1, 1], [0.4, 0.9]) : 0;
              return (
                <div key={i} style={{ opacity: fade(f, 142 + i * 5) }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Arial, sans-serif', fontSize: 13, marginBottom: 4, color: isFilling ? C.white : C.textMuted }}>
                    <span>{s.label}</span>
                    <span style={{ fontWeight: 700, color: s.color }}>{Math.round(pct)}%</span>
                  </div>
                  <div style={{ height: 10, borderRadius: 5, background: C.bgCard, border: `1px solid ${C.border}` }}>
                    <div style={{ height: '100%', borderRadius: 5, background: s.color, width: `${pct}%`, boxShadow: isFilling ? `0 0 ${interpolate(barGlow, [0.4, 0.9], [4, 12])}px ${s.color}` : 'none' }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 8, background: C.cyan, borderRadius: 8, padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: fade(f, 175) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.white }}>{T[lang].s4ProgressLabel}</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 32, color: C.white }}>~80%</div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ flex: 0.6 }} />

      {/* Bottom strip */}
      <div style={{ flexShrink: 0, padding: '8px 100px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: bottomOpacity, transform: `scale(${bottomScale})` }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: 'rgba(0,151,207,0.12)', borderRadius: 12, padding: '16px 32px', border: `2px solid rgba(0,151,207,${borderOpacity})`, boxShadow: `0 0 ${interpolate(borderOpacity, [0.3, 0.8], [8, 28])}px rgba(0,151,207,${borderOpacity * 0.5})` }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.6 }}>
              {T[lang].s4Bottom}
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 8: STEP 5 — QUALITY ASSURANCE ──────────────────────────────────────
const Step5Scene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();

  const archScale = spr(f, 22);
  const archOpacity = fade(f, 22, 18);
  const arrowOpacity = fade(f, 72, 12);

  const mrItems = [
    { ticket: 'TR-041', label: T[lang].s5bMRLabels[0], color: C.green },
    { ticket: 'TR-067', label: T[lang].s5bMRLabels[1], color: C.cyan },
    { ticket: 'TR-089', label: T[lang].s5bMRLabels[2], color: C.blue },
    { ticket: 'TR-112', label: T[lang].s5bMRLabels[3], color: C.green },
  ];

  const reviewers = [
    { role: 'MR Validator', action: T[lang].s5bReviewerActions[0], tool: 'GitLab MR Review', color: '#9B59B6', delay: 88 },
    { role: 'AI Lead', action: T[lang].s5bReviewerActions[1], tool: 'GitLab + Branch mgmt', color: C.cyan, delay: 112 },
  ];

  const bottomOpacity = fade(f, 162, 20);
  const bottomScale = interpolate(spr(f, 162), [0, 1], [0.92, 1]);
  const pulse = interpolate(Math.sin((f - 182) * 0.08), [-1, 1], [0.3, 0.8]);
  const borderOpacity = f > 182 ? pulse : 0.3;

  // MR sequential: each MR active for 55 frames, then permanently merged — no loop
  const currentMR = f > 90 ? Math.min(Math.floor((f - 90) / 55), mrItems.length - 1) : -1;
  const allDone = f > 90 + mrItems.length * 55; // f > 310
  const reviewPulse = interpolate(Math.sin(f * 0.22), [-1, 1], [0.35, 1]);
  // Actor box border pulses while reviews are in progress
  const actorBorderPulse = !allDone && f > 22 ? interpolate(Math.sin(f * 0.15), [-1, 1], [0.4, 0.9]) : 0.3;
  // Build bar: each merged MR contributes 25%, animates in as it merges
  let buildPct = 0;
  for (let i = 0; i < mrItems.length; i++) {
    const start = 90 + (i + 1) * 55;
    buildPct += interpolate(f, [start, start + 20], [0, 25], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  }
  const buildFilling = buildPct > 0 && buildPct < 100;
  const barGlow = buildFilling ? interpolate(Math.sin(f * 0.25), [-1, 1], [0.4, 0.9]) : 0;

  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Top bar */}
      <div style={{ flexShrink: 0, padding: '28px 100px 0', opacity: fade(f, 3, 12) }}>
        <SectionBar>{T[lang].s5bSectionBar}</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={5} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.cyan, fontWeight: 700, letterSpacing: '0.08em' }}>{T[lang].s5bPhase}</div>
          <StepTitle>{T[lang].s5bTitle}</StepTitle>
        </div>
      </div>

      {/* Actors box */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid rgba(0,151,207,${actorBorderPulse})`, borderRadius: 14, padding: '18px 36px', boxShadow: `0 0 ${interpolate(actorBorderPulse, [0.3, 0.9], [20, 50])}px rgba(0,151,207,${actorBorderPulse * 0.4})` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {/* AI Lead */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 0 16px rgba(0,151,207,0.5)' }}>👤</div>
              <div>
                <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 20, color: C.white }}>AI Lead</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                  {(T[lang].s5bAILeadTags as string[]).map((tag, ti) => (
                    <div key={ti} style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 600, color: C.cyan, background: 'rgba(0,151,207,0.15)', border: '1px solid rgba(0,151,207,0.4)', padding: '3px 10px', borderRadius: 20 }}>{tag}</div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ width: 1, height: 48, background: 'rgba(255,255,255,0.15)' }} />
            {/* MR Validator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#9B59B6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 0 16px rgba(155,89,182,0.5)' }}>👤</div>
              <div>
                <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 20, color: C.white }}>MR Validator</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                  {(T[lang].s5bMRValidatorTags as string[]).map((tag, ti) => (
                    <div key={ti} style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 600, color: '#9B59B6', background: 'rgba(155,89,182,0.15)', border: '1px solid rgba(155,89,182,0.4)', padding: '3px 10px', borderRadius: 20 }}>{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 880, opacity: fade(f, 40, 25), transform: `translateY(${interpolate(fade(f, 40, 25), [0, 1], [10, 0])}px)` }}>
            {T[lang].s5bActorDesc}
          </div>
        </div>
      </div>

      {/* Connector */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, flex: 1, background: C.cyan }} />
            <div style={{ background: C.cyan, color: C.white, padding: '5px 22px', borderRadius: 20, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', whiteSpace: 'nowrap', boxShadow: '0 0 16px rgba(0,151,207,0.5)', flexShrink: 0 }}>{T[lang].s5bConnector}</div>
            <div style={{ width: 2, flex: 1, background: C.cyan }} />
            <div style={{ fontSize: 10, color: C.cyan, lineHeight: 1, flexShrink: 0 }}>▼</div>
          </div>
        );
      })()}

      {/* 3-column flow */}
      <div style={{ flexShrink: 0, padding: '0 160px 12px', display: 'grid', gridTemplateColumns: '1fr 56px 1fr 56px 1fr', alignItems: 'center' }}>

        {/* Col 1: Open MRs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 72, 15), transform: `translateX(${interpolate(spr(f, 72), [0, 1], [-30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s5bCol1Header}</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: `1px solid ${C.borderCyan}`, overflow: 'hidden' }}>
            <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: `1px solid ${C.borderCyan}` }}>{T[lang].s5MRQueueLabel}</div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {mrItems.map((mr, i) => {
                const isMerged = f > 90 + (i + 1) * 55;
                const isActive = !isMerged && currentMR === i;
                const mrPulse = isActive ? interpolate(Math.sin(f * 0.18), [-1, 1], [0.4, 0.8]) : 0;
                return (
                  <div key={i} style={{ background: isMerged ? 'rgba(46,204,113,0.08)' : (isActive ? 'rgba(0,151,207,0.14)' : 'transparent'), borderRadius: 6, padding: '6px 8px', border: `1px solid ${isMerged ? 'rgba(46,204,113,0.3)' : (isActive ? mr.color : 'transparent')}`, opacity: fade(f, 76 + i * 5), boxShadow: isActive ? `0 0 ${interpolate(mrPulse, [0.4, 0.8], [6, 16])}px rgba(0,151,207,${mrPulse})` : 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                    {isActive && <span style={{ color: C.orange, fontSize: 11, opacity: reviewPulse, flexShrink: 0 }}>►</span>}
                    <span style={{ fontFamily: 'Consolas, monospace', fontSize: 10, color: isMerged ? C.green : mr.color, fontWeight: 700, flexShrink: 0 }}>{isMerged ? '✅' : mr.ticket}</span>
                    <span style={{ fontFamily: 'Consolas, monospace', fontSize: 12, color: isMerged ? 'rgba(46,204,113,0.7)' : (isActive ? C.white : 'rgba(255,255,255,0.75)'), textDecoration: isMerged ? 'line-through' : 'none', flex: 1 }}>{mr.label}</span>
                    {isActive && <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: C.cyan, fontWeight: 700, opacity: reviewPulse, flexShrink: 0 }}>{T[lang].s5ReviewingStatus}</span>}
                    {isMerged && <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: C.green, fontWeight: 700, flexShrink: 0 }}>{T[lang].s5MergedLabel}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Arrow 1 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: arrowOpacity }}>
          <div style={{ fontSize: 30, color: C.cyan, fontWeight: 900 }}>→</div>
        </div>

        {/* Col 2: Review in Action */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, opacity: fade(f, 82, 15) }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>{T[lang].s5bCol2Header}</div>
          {reviewers.map((r, i) => {
            const cardVisible = f > r.delay + 14;
            const actionLabel = i === 0 ? T[lang].s5ReviewingLabel : T[lang].s5ApprovingLabel;
            return (
              <div key={i} style={{ background: C.bgCard, borderRadius: 10, border: `2px solid ${r.color}`, overflow: 'hidden', opacity: fade(f, r.delay, 18), transform: `translateY(${interpolate(sprSlow(f, r.delay), [0, 1], [40, 0])}px)` }}>
                <div style={{ background: r.color, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 18 }}>👤</span>
                  <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.white }}>{r.role}</span>
                </div>
                <div style={{ padding: '10px 14px' }}>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMuted, marginBottom: 6 }}>{r.action}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,151,207,0.15)', border: '1px solid rgba(0,151,207,0.35)', borderRadius: 14, padding: '3px 12px' }}>
                      <span style={{ fontSize: 12 }}>🔍</span>
                      <span style={{ fontFamily: 'Consolas, monospace', fontSize: 11, color: C.cyan, fontWeight: 700 }}>{r.tool}</span>
                    </div>
                    {cardVisible && !allDone && <span style={{ fontFamily: 'Consolas, monospace', fontSize: 11, color: r.color, opacity: reviewPulse }}>{actionLabel}</span>}
                    {allDone && <span style={{ fontFamily: 'Consolas, monospace', fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{T[lang].s5IdleLabel}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow 2 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: arrowOpacity }}>
          <div style={{ fontSize: 30, color: C.cyan, fontWeight: 900 }}>→</div>
        </div>

        {/* Col 3: Development branch */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 140, 15), transform: `translateX(${interpolate(spr(f, 140), [0, 1], [30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.green, marginBottom: 6 }}>✅ OUTPUT — /development</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: '1px solid rgba(46,204,113,0.3)', overflow: 'hidden' }}>
            <div style={{ background: 'rgba(46,204,113,0.18)', color: C.green, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: '1px solid rgba(46,204,113,0.3)' }}>integration branch</div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {mrItems.map((mr, i) => (
                <div key={i} style={{ fontFamily: 'Consolas, monospace', fontSize: 12, color: C.green, opacity: fade(f, 90 + (i + 1) * 55, 12), display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ flexShrink: 0 }}>↳ merge</span>
                  <span style={{ color: mr.color, fontWeight: 700 }}>{mr.ticket}</span>
                  <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11 }}>→ dev</span>
                </div>
              ))}
              <div style={{ marginTop: 4, paddingTop: 8, borderTop: '1px solid rgba(46,204,113,0.2)', display: 'flex', flexDirection: 'column', gap: 8, opacity: fade(f, 140, 15) }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Consolas, monospace', fontSize: 11, marginBottom: 4, color: buildFilling ? C.white : C.textMuted }}>
                    <span>{T[lang].s5BuildHealthLabel}</span>
                    <span style={{ fontWeight: 700, color: buildPct === 100 ? C.green : C.cyan }}>{Math.round(buildPct)}%</span>
                  </div>
                  <div style={{ height: 8, borderRadius: 4, background: C.bgCard, border: `1px solid ${C.border}` }}>
                    <div style={{ height: '100%', borderRadius: 4, background: buildPct === 100 ? C.green : C.cyan, width: `${buildPct}%`, boxShadow: buildFilling ? `0 0 ${interpolate(barGlow, [0.4, 0.9], [4, 14])}px ${C.cyan}` : 'none' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, opacity: fade(f, 315, 15) }}>
                  <div style={{ fontFamily: 'Consolas, monospace', fontSize: 12, color: C.green }}>{T[lang].s5BuildPassingLabel}</div>
                  <div style={{ fontFamily: 'Consolas, monospace', fontSize: 12, color: C.cyan }}>{T[lang].s5CoverageLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ flex: 0.6 }} />

      {/* Bottom strip */}
      <div style={{ flexShrink: 0, padding: '8px 100px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: bottomOpacity, transform: `scale(${bottomScale})` }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: 'rgba(0,151,207,0.12)', borderRadius: 12, padding: '16px 32px', border: `2px solid rgba(0,151,207,${borderOpacity})`, boxShadow: `0 0 ${interpolate(borderOpacity, [0.3, 0.8], [8, 28])}px rgba(0,151,207,${borderOpacity * 0.5})` }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.6 }}>
              {T[lang].s5bBottom}
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 9: STEP 6 — ITERATIVE REFINEMENT ───────────────────────────────────
const Step6Scene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();

  const archScale = spr(f, 22);
  const archOpacity = fade(f, 22, 18);

  const issues = [
    { label: 'Code not following patterns', from: 'QA phase' },
    { label: 'Missing business context', from: 'Code gen' },
    { label: 'Imprecise prompt output', from: 'Dev phase' },
  ];

  const harnessUpdates = [
    { icon: '📄', file: 'CONTEXTO_BACKEND.md' },
    { icon: '📋', file: 'PROMPT_FEATURE.md' },
    { icon: '🤖', file: 'AGENTES/planner.md' },
  ];

  const STEP_DUR = 35;
  const stepProgress = f > 90 ? Math.floor((f - 90) / STEP_DUR) : -1;
  const cycleStep = stepProgress >= 0 ? stepProgress % 3 : -1;
  const cycleNum = stepProgress >= 0 ? Math.floor(stepProgress / 3) : 0;
  const activeIdx = Math.min(cycleNum, issues.length - 1);
  const nodePulse = interpolate(Math.sin(f * 0.25), [-1, 1], [0.35, 1]);
  const isApplied = (i: number) => f > 90 + (i * 3 + 3) * STEP_DUR;
  const loopPulse = interpolate(Math.sin(f * 0.18), [-1, 1], [0.25, 0.75]);
  const flowPulse = interpolate(Math.sin(f * 0.28), [-1, 1], [0.2, 0.6]);
  // Continuous rotation — 1 turn every ~6s for badge, slow for feedback arrow
  const spinDeg = (f * 2) % 360;
  const spinSlowDeg = (f * 0.9) % 360;

  const bottomOpacity = fade(f, 285, 20);
  const bottomScale = interpolate(spr(f, 285), [0, 1], [0.92, 1]);
  const bottomPulse = interpolate(Math.sin((f - 300) * 0.08), [-1, 1], [0.3, 0.8]);
  const borderOpacity = f > 300 ? bottomPulse : 0.3;

  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Top bar */}
      <div style={{ flexShrink: 0, padding: '28px 100px 0', opacity: fade(f, 3, 12) }}>
        <SectionBar>{T[lang].s6SectionBar}</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={6} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.cyan, fontWeight: 700, letterSpacing: '0.08em' }}>{T[lang].s6Phase}</div>
          <StepTitle>{T[lang].s6Title}</StepTitle>
        </div>
      </div>

      {/* AI Lead actor box */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid ${C.cyan}`, borderRadius: 14, padding: '18px 36px', boxShadow: '0 0 40px rgba(0,151,207,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, boxShadow: '0 0 16px rgba(0,151,207,0.5)' }}>👤</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 22, color: C.white }}>AI Lead</div>
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)' }} />
            {(T[lang].s6AILeadTags as string[]).map((tag, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, fontWeight: 600, color: C.cyan, background: 'rgba(0,151,207,0.15)', border: '1px solid rgba(0,151,207,0.4)', padding: '5px 14px', borderRadius: 20 }}>{tag}</div>
            ))}
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 880, opacity: fade(f, 40, 25), transform: `translateY(${interpolate(fade(f, 40, 25), [0, 1], [10, 0])}px)` }}>
            {T[lang].s6ActorDesc}
          </div>
        </div>
      </div>

      {/* Connector: actor → cycle diagram */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, flex: 1, background: C.cyan }} />
            {/* Large spinning icon outside and above the badge */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flexShrink: 0 }}>
              <span style={{ display: 'inline-block', transform: `rotate(${spinDeg}deg)`, fontSize: 44, lineHeight: 1, color: C.white, filter: 'drop-shadow(0 0 10px rgba(0,151,207,0.8))' }}>↻</span>
              <div style={{ background: C.cyan, color: C.white, padding: '5px 22px', borderRadius: 20, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', whiteSpace: 'nowrap', boxShadow: '0 0 16px rgba(0,151,207,0.5)' }}>{T[lang].s6Connector}</div>
            </div>
            <div style={{ width: 2, flex: 1, background: C.cyan }} />
            <div style={{ fontSize: 10, color: C.cyan, lineHeight: 1, flexShrink: 0 }}>▼</div>
          </div>
        );
      })()}

      {/* 3 cycle nodes — natural height, not stretched */}
      <div style={{ flexShrink: 0, padding: '0 120px 0', display: 'flex', alignItems: 'stretch', gap: 0, opacity: fade(f, 72, 15) }}>

        {/* Node 1 — Issue Detected */}
        {(() => {
          const isActive = cycleStep === 0;
          const glow = isActive ? nodePulse : 0.2;
          return (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: C.bgCard, borderRadius: 12, border: `2px solid rgba(231,76,60,${glow})`, padding: '14px 16px', boxShadow: isActive ? `0 0 20px rgba(231,76,60,${glow * 0.5})` : 'none' }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, color: '#E74C3C', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                {T[lang].s6Node1Title}
                {isActive && <span style={{ fontFamily: 'Consolas, monospace', fontSize: 10, color: '#E74C3C', opacity: nodePulse }}>⟳ scanning...</span>}
              </div>
              {issues.map((issue, i) => {
                const reached = f > 90 + i * 3 * STEP_DUR;
                const isCurrent = isActive && i === activeIdx;
                const resolved = isApplied(i);
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Arial, sans-serif', fontSize: 13, borderRadius: 7, padding: '9px 10px', marginBottom: i < issues.length - 1 ? 6 : 0, background: isCurrent ? 'rgba(231,76,60,0.15)' : 'transparent', border: isCurrent ? '1px solid rgba(231,76,60,0.3)' : '1px solid transparent', color: resolved ? 'rgba(46,204,113,0.7)' : (isCurrent ? C.white : (reached ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.18)')), textDecoration: resolved ? 'line-through' : 'none' }}>
                    {isCurrent && <span style={{ color: '#E74C3C', fontSize: 11, opacity: nodePulse, flexShrink: 0 }}>►</span>}
                    {resolved && <span style={{ fontSize: 11, color: C.green, flexShrink: 0 }}>✓</span>}
                    <span style={{ flex: 1 }}>⚠️ {issue.label}</span>
                    <span style={{ fontFamily: 'Consolas, monospace', fontSize: 9, color: 'rgba(255,255,255,0.22)', flexShrink: 0 }}>{issue.from}</span>
                  </div>
                );
              })}
            </div>
          );
        })()}

        {/* Arrow 1 */}
        <div style={{ width: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ fontSize: 26, color: cycleStep === 1 ? C.cyan : 'rgba(255,255,255,0.15)', fontWeight: 900 }}>→</div>
        </div>

        {/* Node 2 — AI Lead Analyzes */}
        {(() => {
          const isActive = cycleStep === 1;
          const glow = isActive ? nodePulse : 0.2;
          return (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: C.bgCard, borderRadius: 12, border: `2px solid rgba(0,151,207,${glow})`, padding: '14px 16px', boxShadow: isActive ? `0 0 24px rgba(0,151,207,${glow * 0.5})` : 'none' }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, color: C.cyan, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                {T[lang].s6Node2Title}
                {isActive && <span style={{ fontFamily: 'Consolas, monospace', fontSize: 10, color: C.cyan, opacity: nodePulse }}>⟳ analyzing...</span>}
              </div>
              {(T[lang].s6Node2Items as string[]).map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', fontFamily: 'Arial, sans-serif', fontSize: 13, color: isActive ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.28)', padding: '9px 10px', marginBottom: i < 2 ? 6 : 0, borderLeft: `3px solid rgba(0,151,207,${isActive ? nodePulse * 0.8 : 0.12})`, paddingLeft: 12 }}>
                  {item}
                </div>
              ))}
            </div>
          );
        })()}

        {/* Arrow 2 */}
        <div style={{ width: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ fontSize: 26, color: cycleStep === 2 ? C.green : 'rgba(255,255,255,0.15)', fontWeight: 900 }}>→</div>
        </div>

        {/* Node 3 — Harness Updated */}
        {(() => {
          const isActive = cycleStep === 2;
          const glow = isActive ? nodePulse : 0.2;
          return (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: C.bgCard, borderRadius: 12, border: `2px solid rgba(46,204,113,${glow})`, padding: '14px 16px', boxShadow: isActive ? `0 0 20px rgba(46,204,113,${glow * 0.5})` : 'none' }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, color: C.green, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                {T[lang].s6Node3Title}
                {isActive && <span style={{ fontFamily: 'Consolas, monospace', fontSize: 10, color: C.green, opacity: nodePulse }}>⟳ updating...</span>}
              </div>
              {harnessUpdates.map((upd, i) => {
                const showFrame = 90 + (i * 3 + 2) * STEP_DUR;
                const visible = f > showFrame - 5;
                const isCurrent = isActive && i === activeIdx;
                const applied = isApplied(i);
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Consolas, monospace', fontSize: 12, borderRadius: 7, padding: '9px 10px', marginBottom: i < harnessUpdates.length - 1 ? 6 : 0, background: isCurrent ? 'rgba(46,204,113,0.12)' : 'transparent', border: isCurrent ? '1px solid rgba(46,204,113,0.28)' : '1px solid transparent', color: applied ? 'rgba(46,204,113,0.8)' : (isCurrent ? '#fff' : (visible ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.18)')) }}>
                    {isCurrent && <span style={{ color: C.green, fontSize: 11, opacity: nodePulse, flexShrink: 0 }}>►</span>}
                    <span style={{ fontSize: 15, flexShrink: 0 }}>{upd.icon}</span>
                    <span style={{ flex: 1 }}>{upd.file}</span>
                    <span style={{ fontSize: 10, color: applied ? C.green : (visible ? C.orange : 'rgba(255,255,255,0.18)'), fontWeight: 700, flexShrink: 0 }}>{applied ? `✓ v${i + 2}` : (visible ? '⟳' : '·')}</span>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </div>

      {/* Feedback loop arrow — pulses continuously */}
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', padding: '14px 120px 0', opacity: fade(f, 130, 20) }}>
        <div style={{ flex: 1, height: 2, background: `rgba(0,151,207,${flowPulse})`, boxShadow: `0 0 ${interpolate(flowPulse, [0.2, 0.6], [2, 8])}px rgba(0,151,207,0.5)` }} />
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.cyan, fontWeight: 700, padding: '6px 20px', background: `rgba(0,151,207,${loopPulse * 0.18})`, borderRadius: 20, whiteSpace: 'nowrap', border: `1px solid rgba(0,151,207,${loopPulse})`, boxShadow: `0 0 ${interpolate(loopPulse, [0.25, 0.75], [4, 16])}px rgba(0,151,207,0.35)`, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ display: 'inline-block', transform: `rotate(${spinSlowDeg}deg)`, fontSize: 15, lineHeight: 1 }}>↺</span>
          {T[lang].s6FeedbackLoop}
        </div>
        <div style={{ flex: 1, height: 2, background: `rgba(0,151,207,${flowPulse})`, boxShadow: `0 0 ${interpolate(flowPulse, [0.2, 0.6], [2, 8])}px rgba(0,151,207,0.5)` }} />
      </div>

      {/* Spacer */}
      <div style={{ flex: 0.6 }} />

      {/* Bottom strip */}
      <div style={{ flexShrink: 0, padding: '8px 100px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: bottomOpacity, transform: `scale(${bottomScale})` }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: 'rgba(0,151,207,0.12)', borderRadius: 12, padding: '16px 32px', border: `2px solid rgba(0,151,207,${borderOpacity})`, boxShadow: `0 0 ${interpolate(borderOpacity, [0.3, 0.8], [8, 28])}px rgba(0,151,207,${borderOpacity * 0.5})` }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.6 }}>
              {T[lang].s6Bottom}
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 10: STEP 7 — FINAL DELIVERY ────────────────────────────────────────
const Step7Scene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();

  const archScale = spr(f, 22);
  const archOpacity = fade(f, 22, 18);

  const deliveredItems = [
    { name: 'TEMPO', desc: T[lang].s7ModuleDescs[0], color: C.green },
    { name: 'TOPS', desc: T[lang].s7ModuleDescs[1], color: C.cyan },
    { name: 'ADMIN', desc: T[lang].s7ModuleDescs[2], color: C.blue },
  ];

  const checklistItems = T[lang].s7ChecklistItems as { text: string; icon: string }[];

  // Sequential delivery: 3 modules, 55 frames each starting at f=90
  const currentDelivery = f > 90 ? Math.min(Math.floor((f - 90) / 55), deliveredItems.length - 1) : -1;
  const allDelivered = f > 90 + deliveredItems.length * 55; // f > 255

  // Sequential checklist: 5 items, 30 frames each starting at f=120
  const currentCheck = f > 120 ? Math.min(Math.floor((f - 120) / 30), checklistItems.length - 1) : -1;
  const allChecked = f > 120 + checklistItems.length * 30; // f > 270

  // Alert appears after checklist progresses
  const alertOpacity = fade(f, 270, 20);
  const alertPulse = f > 270 ? interpolate(Math.sin(f * 0.12), [-1, 1], [0.4, 1.0]) : 0;

  // Actor border pulses while validating
  const actorBorderPulse = !allDelivered && f > 22 ? interpolate(Math.sin(f * 0.15), [-1, 1], [0.4, 0.9]) : 0.3;

  const bottomOpacity = fade(f, 390, 20);

  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Top bar */}
      <div style={{ flexShrink: 0, padding: '28px 100px 0', opacity: fade(f, 3, 12) }}>
        <SectionBar>{T[lang].s7SectionBar}</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={7} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.orange, fontWeight: 700, letterSpacing: '0.08em' }}>{T[lang].s7Phase}</div>
          <StepTitle>{T[lang].s7Title}</StepTitle>
        </div>
      </div>

      {/* Actor box */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid rgba(243,156,18,${actorBorderPulse})`, borderRadius: 14, padding: '18px 36px', boxShadow: `0 0 ${interpolate(actorBorderPulse, [0.3, 0.9], [20, 50])}px rgba(243,156,18,${actorBorderPulse * 0.4})` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 0 16px rgba(243,156,18,0.5)' }}>👔</div>
            <div>
              <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 20, color: C.white }}>Outcome Validator</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                {(T[lang].s7OutcomeValidatorTags as string[]).map((tag, ti) => (
                  <div key={ti} style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 600, color: C.orange, background: 'rgba(243,156,18,0.15)', border: '1px solid rgba(243,156,18,0.4)', padding: '3px 10px', borderRadius: 20 }}>{tag}</div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 880, opacity: fade(f, 40, 25), transform: `translateY(${interpolate(fade(f, 40, 25), [0, 1], [10, 0])}px)` }}>
            {T[lang].s7ActorDesc}
          </div>
        </div>
      </div>

      {/* Connector */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, flex: 1, background: C.orange }} />
            <div style={{ background: C.orange, color: C.white, padding: '5px 22px', borderRadius: 20, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', whiteSpace: 'nowrap', boxShadow: '0 0 16px rgba(243,156,18,0.5)', flexShrink: 0 }}>{T[lang].s7Connector}</div>
            <div style={{ width: 2, flex: 1, background: C.orange }} />
            <div style={{ fontSize: 10, color: C.orange, lineHeight: 1, flexShrink: 0 }}>▼</div>
          </div>
        );
      })()}

      {/* 3-column flow */}
      <div style={{ flexShrink: 0, padding: '0 100px 0', display: 'grid', gridTemplateColumns: '1fr 48px 1fr 48px 1fr', alignItems: 'start' }}>

        {/* Col 1: Delivered System */}
        <div style={{ opacity: fade(f, 68), display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.green, marginBottom: 5, letterSpacing: '0.04em' }}>{T[lang].s7Col1Header}</div>
          {deliveredItems.map((m, i) => {
            const isDone = f > 90 + (i + 1) * 55;
            const isActive = currentDelivery === i && !isDone;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: C.bgCard, borderRadius: 8, border: `1px solid ${isDone ? m.color + '88' : isActive ? m.color + '55' : 'rgba(255,255,255,0.07)'}`, opacity: isDone ? 1 : isActive ? 0.95 : 0.45 }}>
                <span style={{ fontSize: 13, color: isDone ? C.green : isActive ? C.orange : C.textDim, flexShrink: 0 }}>
                  {isDone ? '✅' : isActive ? '►' : '○'}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: isDone ? C.white : isActive ? C.white : C.textDim }}>{m.name}</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: isDone ? C.textMuted : C.textDim, marginTop: 1 }}>{m.desc}</div>
                </div>
              </div>
            );
          })}
          <div style={{ padding: '9px 12px', background: C.codeBg, borderRadius: 8, border: '1px solid rgba(0,151,207,0.3)', opacity: allDelivered ? 1 : 0.2, marginTop: 2 }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: C.textDim, marginBottom: 2 }}>{T[lang].s7MVPLiveLabel}</div>
            <div style={{ fontFamily: 'Consolas, monospace', fontSize: 13, color: C.cyan }}>teatro-real-app.vercel.app</div>
          </div>
        </div>

        {/* Arrow 1 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 36 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 20, color: C.orange, opacity: allDelivered ? 1 : 0.25 }}>→</div>
        </div>

        {/* Col 2: Validation Checklist */}
        <div style={{ opacity: fade(f, 80), display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.orange, marginBottom: 5, letterSpacing: '0.04em' }}>{T[lang].s7Col2Header}</div>
          {checklistItems.map((item, i) => {
            const isDone = f > 120 + (i + 1) * 30;
            const isActive = currentCheck === i && !isDone;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: C.bgCard, borderRadius: 8, border: `1px solid ${isDone ? 'rgba(243,156,18,0.35)' : isActive ? 'rgba(243,156,18,0.18)' : 'rgba(255,255,255,0.06)'}`, opacity: isDone ? 1 : isActive ? 0.9 : 0.4 }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{item.icon}</span>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: isDone ? C.white : isActive ? C.textMuted : C.textDim, flex: 1 }}>{item.text}</div>
                <span style={{ fontSize: 12, color: isDone ? C.green : isActive ? C.orange : C.textDim, flexShrink: 0 }}>{isDone ? '✓' : isActive ? '⟳' : ''}</span>
              </div>
            );
          })}
        </div>

        {/* Arrow 2 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 36 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 20, color: C.red, opacity: allChecked ? 1 : 0.25 }}>→</div>
        </div>

        {/* Col 3: Human Review Alert */}
        <div style={{ opacity: alertOpacity, transform: `translateY(${interpolate(alertOpacity, [0, 1], [20, 0])}px)`, display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.red, marginBottom: 5, letterSpacing: '0.04em' }}>{T[lang].s7Col3Header}</div>
          <div style={{ padding: '16px 16px', background: `rgba(231,76,60,${interpolate(alertPulse, [0.4, 1.0], [0.07, 0.14])})`, borderRadius: 12, border: `2px solid rgba(231,76,60,${alertPulse})`, boxShadow: `0 0 ${interpolate(alertPulse, [0.4, 1.0], [6, 26])}px rgba(231,76,60,${alertPulse * 0.4})`, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ fontSize: 26, lineHeight: 1, flexShrink: 0 }}>⚠️</span>
              <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 16, color: C.white, lineHeight: 1.4 }}>
                {T[lang].s7AlertTitle}
              </div>
            </div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMuted, lineHeight: 1.6, borderTop: '1px solid rgba(231,76,60,0.3)', paddingTop: 8 }}>
              {T[lang].s7AlertBody}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {(T[lang].s7AlertBullets as string[]).map((point, pi) => (
                <div key={pi} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.textMuted }}>
                  <span style={{ color: C.red, flexShrink: 0, marginTop: 1 }}>•</span>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Spacer */}
      <div style={{ flex: 0.7 }} />

      {/* Bottom strip */}
      <div style={{ flexShrink: 0, padding: '8px 100px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: bottomOpacity }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: 'rgba(231,76,60,0.10)', borderRadius: 12, padding: '14px 28px', border: `2px solid rgba(231,76,60,${alertPulse || 0.4})`, boxShadow: `0 0 ${interpolate(alertPulse || 0.4, [0.4, 1.0], [6, 22])}px rgba(231,76,60,${(alertPulse || 0.4) * 0.4})` }}>
            <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 16, color: C.white, lineHeight: 1.5 }}>
              {T[lang].s7Bottom}
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 11: CLOSING ─────────────────────────────────────────────────────────
const ClosingScene: React.FC<{ lang: Lang }> = ({ lang }) => {
  const f = useCurrentFrame();

  const screenshots = [
    { file: 'tempo.png', label: 'TEMPO', desc: T[lang].closingScreenshotDescs[0], color: C.cyan, delay: 25 },
    { file: 'tops.png', label: 'TOPS', desc: T[lang].closingScreenshotDescs[1], color: C.blue, delay: 40 },
    { file: 'carteleria.png', label: 'Digital Signage', desc: T[lang].closingScreenshotDescs[2], color: C.green, delay: 55 },
  ];

  const metrics = [
    { icon: '⚡', value: '×2', label: T[lang].closingMetricLabels[0] },
    { icon: '🚀', value: '1 week', label: T[lang].closingMetricLabels[1] },
    { icon: '📈', value: '~80%', label: T[lang].closingMetricLabels[2] },
    { icon: '🧠', value: '0', label: T[lang].closingMetricLabels[3] },
  ];

  const bottomOpacity = fade(f, 60, 20);

  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Top bar */}
      <div style={{ flexShrink: 0, padding: '28px 100px 0', opacity: fade(f, 3, 12) }}>
        <SectionBar>{T[lang].closingSectionBar}</SectionBar>
      </div>

      {/* Title — fixed at top */}
      <div style={{ flexShrink: 0, padding: '16px 100px 0', opacity: fade(f, 5, 14), transform: `translateY(${interpolate(spr(f, 5), [0, 1], [20, 0])}px)` }}>
        <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 48, color: C.white, lineHeight: 1.0, marginBottom: 6 }}>Teatro Real de Madrid</div>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.textMuted }}>{T[lang].closingSubtitle}</div>
      </div>

      {/* Center content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 100px', minHeight: 0 }}>

        {/* Metrics row — closer to title */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 14, marginBottom: 52 }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ background: C.bgCard, borderRadius: 12, padding: '18px 16px', textAlign: 'center', border: `1px solid ${C.border}`, opacity: fade(f, 10 + i * 7), transform: `translateY(${interpolate(spr(f, 10 + i * 7), [0, 1], [28, 0])}px)` }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{m.icon}</div>
              <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 38, color: C.cyan, marginBottom: 6 }}>{m.value}</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textMuted, lineHeight: 1.4 }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Screenshots — staggered entrance */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
          {screenshots.map((s, i) => {
            const delay = 45 + i * 18;
            const sc = sprSlow(f, delay);
            const op = fade(f, delay, 20);
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8, opacity: op, transform: `translateY(${interpolate(sc, [0, 1], [40, 0])}px) scale(${interpolate(sc, [0, 1], [0.94, 1])})` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 15, color: s.color }}>{s.label}</span>
                  <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMuted }}>{s.desc}</span>
                </div>
                <div style={{ height: 230, borderRadius: 10, overflow: 'hidden', border: `2px solid ${s.color}66`, boxShadow: `0 0 ${interpolate(op, [0, 1], [0, 24])}px ${s.color}44` }}>
                  <Img src={staticFile(s.file)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom strip — same as other scenes */}
      <div style={{ flexShrink: 0, padding: '8px 100px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: bottomOpacity }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: 'rgba(0,151,207,0.12)', borderRadius: 12, padding: '16px 32px', border: `2px solid rgba(0,151,207,0.45)` }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, lineHeight: 1.5 }}>
              {T[lang].closingQuote}
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── MAIN ──────────────────────────────────────────────────────────────────────
export default function Main({ lang = 'en' }: { lang?: Lang }) {
  return (
    <AbsoluteFill>
      <Sequence from={0}    durationInFrames={150}><TitleScene lang={lang} /></Sequence>
      <Sequence from={150}  durationInFrames={300}><ChallengeScene lang={lang} /></Sequence>
      <Sequence from={450}  durationInFrames={450}><Step1Scene lang={lang} /></Sequence>
      <Sequence from={900}  durationInFrames={450}><Step2Scene lang={lang} /></Sequence>
      <Sequence from={1350} durationInFrames={420}><PrototypeScene lang={lang} /></Sequence>
      <Sequence from={1770} durationInFrames={420}><Step3Scene lang={lang} /></Sequence>
      <Sequence from={2190} durationInFrames={600}><Step4Scene lang={lang} /></Sequence>
      <Sequence from={2790} durationInFrames={480}><Step5Scene lang={lang} /></Sequence>
      <Sequence from={3270} durationInFrames={450}><Step6Scene lang={lang} /></Sequence>
      <Sequence from={3720} durationInFrames={570}><Step7Scene lang={lang} /></Sequence>
      <Sequence from={4290} durationInFrames={390}><ClosingScene lang={lang} /></Sequence>
    </AbsoluteFill>
  );
}
