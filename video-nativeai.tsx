import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  spring,
  interpolate,
  Sequence,
} from 'remotion';

const FPS = 30;

const C = {
  navy: '#00245D',
  cyan: '#0097CF',
  blue: '#1565C0',
  white: '#FFFFFF',
  offWhite: '#F5F8FC',
  lightBlue: '#E3EFF8',
  borderBlue: '#BDD7EE',
  text: '#0D1B2A',
  textMid: '#3D5A80',
  green: '#1B7A3E',
  red: '#C0392B',
  orange: '#F39C12',
  codeBg: '#0F2040',
};

const spr = (frame: number, delay = 0) =>
  spring({ frame: frame - delay, fps: FPS, config: { stiffness: 140, damping: 14, mass: 0.8 } });

const fade = (frame: number, delay = 0, dur = 15) =>
  interpolate(frame - delay, [0, dur], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

// ── SHARED COMPONENTS ─────────────────────────────────────────────────────────

const NTTLogo: React.FC<{ white?: boolean; size?: number }> = ({ white, size = 22 }) => (
  <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: size, letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: 2 }}>
    <span style={{ color: white ? '#fff' : C.navy }}>NTT </span>
    <span style={{ color: C.cyan }}>D</span>
    <span style={{ color: white ? '#fff' : C.navy }}>aT</span>
    <span style={{ color: white ? '#fff' : C.navy }}>a</span>
  </div>
);

const StepBadge: React.FC<{ n: number }> = ({ n }) => (
  <div style={{ width: 60, height: 60, borderRadius: '50%', background: C.navy, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 26, fontFamily: 'Arial, sans-serif', flexShrink: 0, boxShadow: '0 4px 14px rgba(0,36,93,0.35)' }}>
    {n}
  </div>
);

const SectionBar: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ background: C.navy, color: '#fff', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 17, padding: '11px 0', borderRadius: 4, textAlign: 'center', letterSpacing: '0.09em', width: '100%' }}>
    {children}
  </div>
);

const StepTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ background: C.navy, color: '#fff', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 24, padding: '9px 22px', borderRadius: 6, display: 'inline-block' }}>
    {children}
  </div>
);

const Code: React.FC<{ lines: string[]; title?: string; height?: number }> = ({ lines, title, height = 200 }) => (
  <div style={{ background: C.codeBg, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,151,207,0.3)' }}>
    {title && (
      <div style={{ background: 'rgba(0,151,207,0.18)', color: C.cyan, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '5px 14px', borderBottom: '1px solid rgba(0,151,207,0.3)', letterSpacing: '0.04em' }}>
        {title}
      </div>
    )}
    <div style={{ padding: '12px 16px', height, overflowY: 'hidden' }}>
      {lines.map((l, i) => (
        <div key={i} style={{ fontFamily: 'Consolas, "Courier New", monospace', fontSize: 13, lineHeight: 1.65, whiteSpace: 'pre', color: l.startsWith('#') ? C.cyan : l.startsWith('//') ? '#6A9955' : l.startsWith('→') || l.startsWith('✓') ? '#9EE09E' : l.startsWith('⚠') ? '#F4A57A' : l.startsWith('-') ? '#C8B9F9' : '#D0E8F8' }}>
          {l}
        </div>
      ))}
    </div>
  </div>
);

const CyanSidebar: React.FC = () => (
  <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 140, background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 900, fontSize: 15, color: '#fff', letterSpacing: '0.1em', writingMode: 'vertical-rl', transform: 'rotate(180deg)', textAlign: 'center', lineHeight: 1.3 }}>
      VALIDATION &{'\n'}CONTROL LAYER
    </div>
  </div>
);

// ── SCENE 1: TITLE ────────────────────────────────────────────────────────────
const TitleScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.white, flexDirection: 'column' }}>
      <div style={{ background: C.navy, height: 8 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 120px' }}>
        <div style={{ opacity: fade(f, 8), marginBottom: 44 }}><NTTLogo size={26} /></div>
        <div style={{ opacity: fade(f, 5), transform: `translateY(${interpolate(spr(f, 5), [0, 1], [40, 0])}px)`, marginBottom: 18 }}>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 62, color: C.navy, lineHeight: 1.05 }}>The New Context of</div>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 62, color: C.navy, lineHeight: 1.05 }}>Software Development</div>
        </div>
        <div style={{ opacity: fade(f, 20), transform: `translateY(${interpolate(spr(f, 20), [0, 1], [20, 0])}px)`, marginBottom: 32 }}>
          <div style={{ background: C.cyan, color: '#fff', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 26, padding: '8px 22px', display: 'inline-block', borderRadius: 4 }}>
            A real case: AI Native
          </div>
        </div>
        <div style={{ opacity: fade(f, 28), maxWidth: 840 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 19, color: C.textMid, lineHeight: 1.6 }}>
            A new team configuration designed to <strong style={{ color: C.navy }}>maximize the potential of AI in software development</strong>, redefining activities, roles and outputs to get faster and more accurate results.
          </div>
        </div>
        <div style={{ opacity: fade(f, 38), marginTop: 32 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMid }}>NTT DATA EMEAL · AI Native Squad · 2025</div>
        </div>
      </div>
      <div style={{ height: 6, background: `linear-gradient(90deg, ${C.navy} 0%, ${C.cyan} 100%)` }} />
    </AbsoluteFill>
  );
};

// ── SCENE 2: THE CHALLENGE ────────────────────────────────────────────────────
const ChallengeScene: React.FC = () => {
  const f = useCurrentFrame();
  const before = [
    '📄 Activity planning in Excel',
    '📝 Technical scripts in Word',
    '📧 Coordination by email',
    '🔄 Inconsistent data & duplicates',
    '⏱️ Hours lost in manual updates',
  ];
  const after = [
    '🏛️ TEMPO: Activities & calendar',
    '🎭 TOPS: Technical production scripts',
    '👥 ADMIN: Users, roles, permissions',
    '⚡ Angular 18 + Spring Boot 3 + PostgreSQL',
    '🚀 MVP live in weeks, not months',
  ];
  return (
    <AbsoluteFill style={{ background: C.offWhite, flexDirection: 'column' }}>
      <div style={{ background: C.navy, padding: '18px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 28, color: '#fff' }}>Teatro Real de Madrid</div>
        <NTTLogo white />
      </div>
      <div style={{ flex: 1, padding: '32px 80px', display: 'flex', gap: 50, alignItems: 'flex-start' }}>
        <div style={{ flex: 1, opacity: fade(f, 5), transform: `translateX(${interpolate(fade(f, 5), [0, 1], [-40, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 19, color: C.red, marginBottom: 16 }}>Before: Manual &amp; Fragmented</div>
          {before.map((item, i) => (
            <div key={i} style={{ padding: '10px 0', borderBottom: `1px solid ${C.borderBlue}`, fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.text, opacity: fade(f, 8 + i * 4) }}>
              {item}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 64, opacity: fade(f, 30) }}>
          <div style={{ fontSize: 42, color: C.navy }}>→</div>
          <div style={{ background: C.cyan, color: '#fff', padding: '8px 14px', borderRadius: 6, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, textAlign: 'center', marginTop: 8 }}>
            AI Native<br />Methodology
          </div>
        </div>
        <div style={{ flex: 1, opacity: fade(f, 30), transform: `translateX(${interpolate(fade(f, 30), [0, 1], [40, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 19, color: C.green, marginBottom: 16 }}>After: AI-Native System</div>
          {after.map((item, i) => (
            <div key={i} style={{ padding: '10px 0', borderBottom: `1px solid ${C.borderBlue}`, fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.text, opacity: fade(f, 34 + i * 4) }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 3: STEP 1 — AGENT DESIGN ───────────────────────────────────────────
const Step1Scene: React.FC = () => {
  const f = useCurrentFrame();
  const agents = [
    {
      icon: '🔍', file: '01-analista-requisitos.md', label: 'Requirements Analyst', color: C.blue,
      lines: ['# Agente: Analista de Requisitos', '## Identidad y Rol', 'Eres un Analista de Requisitos', 'Senior con 15+ años de experiencia', 'en proyectos de software...', '', '## Capacidades:', '- Análisis de requisitos', '- Generación User Stories', '- Detección de ambigüedades', '- Trazabilidad completa'],
    },
    {
      icon: '🎨', file: '08-experto-frontend.md', label: 'Frontend Expert', color: C.cyan,
      lines: ['# Agente: Experto Frontend', '## Stack:', '- Angular 18.2', '  Standalone Components', '- Angular Material 18', '- TailwindCSS 3.4', '- Signals (estado)', '', '## Módulos:', '- TEMPO Calendar', '- TOPS Script Editor', '- ADMIN Dashboard'],
    },
    {
      icon: '⚙️', file: '09-experto-backend.md', label: 'Backend Expert', color: C.green,
      lines: ['# Agente: Experto Backend', '## Stack:', '- Java 17', '- Spring Boot 3.3.0', '- Spring Data JPA', '- PostgreSQL 16', '', '## Arquitectura:', '- REST Controllers', '- Service Layer', '- Repository (JPA)'],
    },
  ];
  return (
    <AbsoluteFill style={{ background: C.white, flexDirection: 'column' }}>
      <div style={{ padding: '26px 80px 16px', opacity: fade(f, 0) }}><SectionBar>AI STRATEGY AND GOVERNANCE</SectionBar></div>
      <div style={{ padding: '0 80px 20px', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-36, 0])}px)` }}>
        <StepBadge n={1} />
        <div>
          <StepTitle>Agent Design</StepTitle>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMid, marginTop: 6 }}>
            <strong style={{ color: C.navy }}>AI Architect</strong> · Define specialized agents before touching any documentation
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 80px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 26 }}>
        {agents.map((a, i) => (
          <div key={i} style={{ opacity: fade(f, 14 + i * 10), transform: `translateY(${interpolate(spr(f, 14 + i * 10), [0, 1], [40, 0])}px)` }}>
            <div style={{ border: `2px solid ${a.color}`, borderRadius: 10, overflow: 'hidden', boxShadow: '0 4px 18px rgba(0,0,0,0.09)', height: '100%' }}>
              <div style={{ background: a.color, color: '#fff', padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 26 }}>{a.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14 }}>{a.label}</div>
                  <div style={{ fontFamily: 'Consolas, monospace', fontSize: 11, opacity: 0.85 }}>{a.file}</div>
                </div>
              </div>
              <Code lines={a.lines} height={210} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 80px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: fade(f, 38) }}>
        <div style={{ background: C.lightBlue, borderRadius: 8, padding: '11px 22px', border: `1px solid ${C.borderBlue}`, fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.navy }}>
          💡 Each agent knows the project context — no generic AI, specialized engineers
        </div>
        <NTTLogo />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 4: STEP 2 — CONTEXT ANALYSIS ───────────────────────────────────────
const Step2Scene: React.FC = () => {
  const f = useCurrentFrame();
  const folders = ['📁 AGENTES/', '📁 DOC_INICIAL/', '📁 DOC_GENERADA/', '📁 PROMPT_FRAMEWORK/', '📁 scripts/', '📁 teatro-real-backend/', '📁 teatro-real-frontend/'];
  return (
    <AbsoluteFill style={{ background: C.white, flexDirection: 'column' }}>
      <div style={{ padding: '26px 80px 16px', opacity: fade(f, 0) }}><SectionBar>AI STRATEGY AND GOVERNANCE</SectionBar></div>
      <div style={{ padding: '0 80px 18px', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-36, 0])}px)` }}>
        <StepBadge n={2} />
        <div>
          <StepTitle>Context Analysis</StepTitle>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMid, marginTop: 6 }}>
            <strong style={{ color: C.navy }}>AI Architect</strong> · Use agents to extract and structure all client knowledge
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 80px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
        {/* Column 1: Input */}
        <div style={{ opacity: fade(f, 10), transform: `translateY(${interpolate(spr(f, 10), [0, 1], [28, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: C.navy, marginBottom: 10 }}>📥 INPUT — DOC_INICIAL</div>
          <Code title="~/teatro-real/DOC_INICIAL/" lines={['📄 TR-Requisitos Generales v1.2.docx', '📊 TEMPO - Temporada 2025-2026.xlsx', '📊 CALENDARIO 2025.xlsx', '📝 Contexto TEATRO REAL Gestión', '    Interna del Teatro.docx', '📝 Guion Regiduria CARMEN.docx', '📋 Estado_Implementacion_TEMPO.md', '📋 TR_Matriz_Requerimientos.md']} height={175} />
          <div style={{ marginTop: 12, fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMid, fontStyle: 'italic' }}>
            Capture functional knowledge,<br />extract technical assets, map legacy data
          </div>
        </div>
        {/* Column 2: Process */}
        <div style={{ opacity: fade(f, 20), transform: `translateY(${interpolate(spr(f, 20), [0, 1], [28, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: C.navy, marginBottom: 10 }}>⚙️ PROCESS — Axet Plugin</div>
          <div style={{ background: C.lightBlue, borderRadius: 8, padding: '14px 16px', border: `2px solid ${C.navy}`, height: 175, overflow: 'hidden' }}>
            <div style={{ fontFamily: 'Consolas, monospace', fontSize: 13, color: C.navy, marginBottom: 8 }}>~/teatro-real/</div>
            {folders.map((l, i) => (
              <div key={i} style={{ fontFamily: 'Consolas, monospace', fontSize: 12, color: C.blue, lineHeight: 1.75, opacity: fade(f, 22 + i * 3) }}>{l}</div>
            ))}
          </div>
          <div style={{ marginTop: 10, background: C.navy, color: '#fff', textAlign: 'center', padding: '7px 0', borderRadius: 4, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, opacity: fade(f, 42) }}>
            aXet .plugin + CONTEXT
          </div>
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 5, opacity: fade(f, 36) }}>
            {[['🔍 Requirements Analyst', 'extracts business requirements'], ['⚙️ Backend Expert', 'details Java 17 + Spring Boot impl.'], ['🎨 Frontend Expert', 'details Angular 18 impl.']].map(([role, desc], i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: C.textMid }}>
                <strong style={{ color: C.navy }}>{role}</strong> → {desc}
              </div>
            ))}
          </div>
        </div>
        {/* Column 3: Output */}
        <div style={{ opacity: fade(f, 34), transform: `translateY(${interpolate(spr(f, 34), [0, 1], [28, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: C.green, marginBottom: 10 }}>📤 OUTPUT — DOC_GENERADA</div>
          <Code title="~/teatro-real/DOC_GENERADA/" lines={['→ PLAN_IMPLEMENTACION_COMPLETO.md', '→ GUIA_ESTILOS_TEATRO.md', '→ CONTEXTO_BACKEND.md', '→ CONTEXTO_FRONTEND.md']} height={175} />
          <div style={{ marginTop: 12, fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.green, fontStyle: 'italic', fontWeight: 600 }}>
            ✓ Context ready — agents have full<br />project knowledge
          </div>
        </div>
      </div>
      <div style={{ padding: '0 80px 20px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}><NTTLogo /></div>
    </AbsoluteFill>
  );
};

// ── SCENE 5: RAPID PROTOTYPE & PRD VALIDATION ─────────────────────────────────
const PrototypeScene: React.FC = () => {
  const f = useCurrentFrame();
  const steps = [
    { icon: '📋', label: 'PRD Available', detail: 'EspecificacionFuncional\n_TeatroReal.md ✓', sub: 'Functional requirements\ncaptured', color: C.navy },
    { icon: '⚡', label: 'Rapid Prototype', detail: 'React + Supabase', sub: 'Working prototype\nin days, not weeks', color: C.cyan },
    { icon: '🤝', label: 'Client Validation', detail: 'Teatro Real reviews', sub: 'Real feedback &\ncorrections identified', color: C.blue },
    { icon: '✅', label: 'PRD Updated', detail: 'v2 — assumptions\ncorrected', sub: 'Fix misunderstandings\nbefore production code', color: C.green },
  ];
  return (
    <AbsoluteFill style={{ background: C.offWhite, flexDirection: 'column' }}>
      <div style={{ padding: '26px 80px 18px', opacity: fade(f, 0) }}><SectionBar>FROM CONTEXT TO VALIDATION</SectionBar></div>
      <div style={{ padding: '0 80px 18px', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-30, 0])}px)` }}>
        <div style={{ background: C.cyan, color: '#fff', fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 16, padding: '6px 18px', borderRadius: 4, letterSpacing: '0.08em' }}>⭐ RAPID PROTOTYPE</div>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMid }}>
          <strong style={{ color: C.navy }}>AI Architect</strong> · Validate understanding with the client before writing production code
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 60px', display: 'flex', alignItems: 'center', gap: 0 }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ flex: 1, opacity: fade(f, 12 + i * 10), transform: `translateY(${interpolate(spr(f, 12 + i * 10), [0, 1], [30, 0])}px)` }}>
              <div style={{ background: C.white, borderRadius: 12, border: `2px solid ${s.color}`, padding: '20px 16px', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,36,93,0.09)' }}>
                <div style={{ fontSize: 38, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: s.color, marginBottom: 8 }}>{s.label}</div>
                <div style={{ fontFamily: 'Consolas, monospace', fontSize: 11, color: C.navy, background: C.lightBlue, padding: '6px 10px', borderRadius: 4, marginBottom: 10, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.detail}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.textMid, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.sub}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: 40, textAlign: 'center', opacity: fade(f, 18 + i * 10), flexShrink: 0 }}>
                <div style={{ fontSize: 28, color: C.navy, fontWeight: 900 }}>→</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={{ padding: '16px 80px 28px', opacity: fade(f, 42) }}>
        <div style={{ background: C.navy, color: '#fff', borderRadius: 8, padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 28 }}>💡</span>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16 }}>
            Technology-agnostic prototype — built for speed, not production. Real value: client validates before any production code is written.
          </div>
        </div>
      </div>
      <div style={{ padding: '0 80px 16px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}><NTTLogo /></div>
    </AbsoluteFill>
  );
};

// ── SCENE 6: STEP 3 — PROMPTING FRAMEWORK ────────────────────────────────────
const Step3Scene: React.FC = () => {
  const f = useCurrentFrame();
  const templates = [
    { file: 'PROMPT_FEATURE.md', desc: 'Full-stack feature (Backend + Frontend)', color: C.cyan },
    { file: 'PROMPT_BACKEND.md', desc: 'Spring Boot endpoint creation', color: C.green },
    { file: 'PROMPT_FRONTEND.md', desc: 'Angular component generation', color: C.blue },
    { file: 'PROMPT_BUGFIX.md', desc: 'Bug identification & fix', color: C.red },
  ];
  return (
    <AbsoluteFill style={{ background: C.white, flexDirection: 'column' }}>
      <div style={{ padding: '26px 80px 16px', opacity: fade(f, 0) }}><SectionBar>FRAMEWORK SET UP</SectionBar></div>
      <div style={{ padding: '0 80px 20px', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-36, 0])}px)` }}>
        <StepBadge n={3} />
        <div>
          <StepTitle>Prompting Framework</StepTitle>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMid, marginTop: 6 }}>
            <strong style={{ color: C.navy }}>AI Lead</strong> · Build templates that turn requirements into production-ready prompts
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 80px 20px', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 44 }}>
        <div style={{ opacity: fade(f, 12), transform: `translateX(${interpolate(spr(f, 12), [0, 1], [-28, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.navy, marginBottom: 14 }}>📁 PROMPT_FRAMEWORK/</div>
          {templates.map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '11px 14px', background: i % 2 === 0 ? C.lightBlue : C.white, borderLeft: `4px solid ${t.color}`, marginBottom: 8, borderRadius: '0 6px 6px 0', opacity: fade(f, 15 + i * 7) }}>
              <span style={{ fontFamily: 'Consolas, monospace', fontSize: 12, color: t.color, fontWeight: 600, flexShrink: 0 }}>{t.file}</span>
              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.textMid }}>→ {t.desc}</span>
            </div>
          ))}
          <div style={{ marginTop: 20, fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textMid, fontStyle: 'italic', borderLeft: `3px solid ${C.cyan}`, paddingLeft: 12, opacity: fade(f, 36) }}>
            Convert client requirements into<br /><strong style={{ color: C.navy }}>structured, production-ready prompts</strong>
          </div>
        </div>
        <div style={{ opacity: fade(f, 22), transform: `translateX(${interpolate(spr(f, 22), [0, 1], [28, 0])}px)` }}>
          <Code title="PROMPT_FEATURE.md — Teatro Real" lines={['## Contexto del Proyecto', '', 'Sistema de Gestión del Teatro Real', 'Backend: Java 17 + Spring Boot 3.3.0', 'Frontend: Angular 18.2 + TailwindCSS 3.4', '', '## Solicitud de Feature', 'Módulo: [ADMIN | TEMPO | TOPS]', 'Requisito: [RF-TEMPO-X | RF-TOPS-X]', '', '## Historia de Usuario', 'Como [rol] quiero [acción]', 'Para [beneficio]', '', '## Criterios de Aceptación', '- [ ] Criterio verificable 1', '- [ ] Criterio verificable 2', '', '## Restricciones Técnicas', '- Seguir arquitectura existente', '- No romper tests actuales']} height={318} />
        </div>
      </div>
      <div style={{ padding: '0 80px 20px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}><NTTLogo /></div>
    </AbsoluteFill>
  );
};

// ── SCENE 7: STEP 4 — DEVELOPMENT ────────────────────────────────────────────
const Step4Scene: React.FC = () => {
  const f = useCurrentFrame();
  const team = [
    { role: 'AI Lead', detail: 'Implementation plans & dev tracking', color: C.navy },
    { role: 'Front AI Dev', detail: 'Angular 18 · Components · UI', color: C.cyan },
    { role: 'Back AI Dev', detail: 'Spring Boot · REST APIs · JPA', color: C.green },
  ];
  const sprints = [
    { label: 'Sprint 0: Setup', pct: 100, color: C.green },
    { label: 'Sprint 1: Auth + Layout', pct: 100, color: C.green },
    { label: 'Sprint 2: TEMPO', pct: 100, color: C.green },
    { label: 'Sprint 3: TOPS', pct: 95, color: C.cyan },
    { label: 'Sprint 4: Integrations', pct: 35, color: C.orange },
    { label: 'Sprint 5: Deploy', pct: 30, color: C.orange },
  ];
  return (
    <AbsoluteFill style={{ background: C.white, flexDirection: 'column' }}>
      <div style={{ padding: '22px 80px 14px', opacity: fade(f, 0) }}><SectionBar>AI-SUPPORTED DEVELOPMENT STREAMS</SectionBar></div>
      <div style={{ padding: '0 80px 16px', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 5) }}>
        <StepBadge n={4} />
        <StepTitle>Development</StepTitle>
      </div>
      <div style={{ flex: 1, padding: '0 80px 18px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50 }}>
        <div style={{ opacity: fade(f, 10) }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.navy, marginBottom: 14 }}>👥 The Team</div>
          {team.map((m, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', background: i % 2 === 0 ? C.lightBlue : C.white, borderRadius: 8, marginBottom: 10, border: `1px solid ${C.borderBlue}`, opacity: fade(f, 13 + i * 8), transform: `translateX(${interpolate(fade(f, 13 + i * 8), [0, 1], [-18, 0])}px)` }}>
              <div style={{ width: 46, height: 46, borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, flexShrink: 0 }}>👤</div>
              <div>
                <span style={{ background: m.color, color: '#fff', fontSize: 12, fontWeight: 700, fontFamily: 'Arial, sans-serif', padding: '3px 10px', borderRadius: 3, marginRight: 8 }}>{m.role}</span>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMid, marginTop: 4 }}>{m.detail}</div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 14, background: C.lightBlue, borderRadius: 8, padding: '10px 16px', border: `1px solid ${C.borderBlue}`, fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.navy, opacity: fade(f, 38) }}>
            🛠️ Co-creating code with AI agents using <strong>Axet Plugin</strong>
          </div>
        </div>
        <div style={{ opacity: fade(f, 18) }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.navy, marginBottom: 14 }}>📊 Sprint Progress</div>
          {sprints.map((s, i) => {
            const pct = interpolate(fade(f, 22 + i * 5), [0, 1], [0, s.pct]);
            return (
              <div key={i} style={{ marginBottom: 11, opacity: fade(f, 20 + i * 5) }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Arial, sans-serif', fontSize: 12, marginBottom: 4, color: C.text }}>
                  <span>{s.label}</span>
                  <span style={{ fontWeight: 700, color: s.color }}>{Math.round(pct)}%</span>
                </div>
                <div style={{ height: 9, borderRadius: 5, background: C.lightBlue, border: `1px solid ${C.borderBlue}` }}>
                  <div style={{ height: '100%', borderRadius: 5, background: s.color, width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
          <div style={{ marginTop: 14, background: C.navy, color: '#fff', borderRadius: 8, padding: '13px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: fade(f, 52) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16 }}>Global Progress</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 34, color: C.cyan }}>~80%</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 80px 18px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}><NTTLogo /></div>
    </AbsoluteFill>
  );
};

// ── SCENE 8: STEP 5 — QUALITY ASSURANCE ──────────────────────────────────────
const Step5Scene: React.FC = () => {
  const f = useCurrentFrame();
  const steps = [
    { n: '1', icon: '📝', label: 'MR Created', detail: 'Front AI Dev / Back AI Dev\nopens the merge request', color: C.blue },
    { n: '2', icon: '👁️', label: 'Human Review', detail: 'MR Validator reviews code\n& integrates to development', color: C.navy },
    { n: '3', icon: '🧪', label: 'Test Pass', detail: 'Tests run on the\ndevelopment branch', color: C.cyan },
    { n: '4', icon: '✅', label: 'Ready to Deploy', detail: 'Validation passed —\ncleared for deployment', color: C.green },
  ];
  return (
    <AbsoluteFill style={{ background: C.white, flexDirection: 'column' }}>
      <div style={{ padding: '26px 80px 16px', opacity: fade(f, 0) }}><SectionBar>AI-SUPPORTED DEVELOPMENT STREAMS</SectionBar></div>
      <div style={{ padding: '0 80px 20px', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 5) }}>
        <StepBadge n={5} />
        <div>
          <StepTitle>Quality Assurance</StepTitle>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMid, marginTop: 6 }}>
            <strong style={{ color: C.navy }}>MR Validator + AI Architect</strong> · Human validation before every merge
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 60px', display: 'flex', alignItems: 'center', gap: 0 }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ flex: 1, opacity: fade(f, 14 + i * 10), transform: `translateY(${interpolate(spr(f, 14 + i * 10), [0, 1], [36, 0])}px)` }}>
              <div style={{ background: C.white, borderRadius: 12, border: `2px solid ${s.color}`, padding: '20px 18px', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,36,93,0.09)' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: s.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, fontFamily: 'Arial, sans-serif', margin: '0 auto 12px' }}>{s.n}</div>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: s.color, marginBottom: 10 }}>{s.label}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.textMid, whiteSpace: 'pre-line', lineHeight: 1.5 }}>{s.detail}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: 36, textAlign: 'center', opacity: fade(f, 20 + i * 10), flexShrink: 0 }}>
                <div style={{ fontSize: 26, color: C.navy, fontWeight: 900 }}>→</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={{ padding: '18px 80px 24px', opacity: fade(f, 46) }}>
        <div style={{ background: C.navy, color: '#fff', borderRadius: 8, padding: '13px 28px', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16 }}>
          🔒 No automatic merges — human validation before every integration
        </div>
      </div>
      <div style={{ padding: '0 80px 16px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}><NTTLogo /></div>
    </AbsoluteFill>
  );
};

// ── SCENE 9: STEP 6 — AI MODEL TUNING ────────────────────────────────────────
const Step6Scene: React.FC = () => {
  const f = useCurrentFrame();
  const issues = [
    { problem: 'Missing business context', fix: '→ Update EspecificacionFuncional.md' },
    { problem: 'Agent not following patterns', fix: '→ Update CONTEXTO_BACKEND.md' },
    { problem: 'Incomplete prompt template', fix: '→ Improve PROMPT_FEATURE.md' },
    { problem: 'Wrong agent behavior', fix: '→ Adjust system prompt in AGENTES/' },
  ];
  return (
    <AbsoluteFill style={{ background: C.white }}>
      <CyanSidebar />
      <div style={{ marginRight: 140, padding: '36px 80px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-30, 0])}px)` }}>
          <StepBadge n={6} />
          <div>
            <StepTitle>AI Model Tuning</StepTitle>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMid, marginTop: 6 }}>
              <strong style={{ color: C.navy }}>AI Lead</strong> · Iteratively improve the Harness across all phases
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
          <div style={{ opacity: fade(f, 12) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.navy, marginBottom: 14 }}>🔄 Feedback Loop</div>
            {issues.map((r, i) => (
              <div key={i} style={{ padding: '10px 13px', background: i % 2 === 0 ? C.lightBlue : C.white, borderRadius: 6, marginBottom: 10, border: `1px solid ${C.borderBlue}`, fontFamily: 'Arial, sans-serif', fontSize: 13, opacity: fade(f, 15 + i * 6) }}>
                <div style={{ color: C.red }}>⚠ {r.problem}</div>
                <div style={{ color: C.green, fontWeight: 700, marginTop: 4 }}>{r.fix}</div>
              </div>
            ))}
          </div>
          <div style={{ opacity: fade(f, 20) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.navy, marginBottom: 14 }}>📈 Continuous Enhancement</div>
            <Code lines={['// Enhance prompts', '// Improve agent behaviors', '// Refine dev patterns', '', 'Harness.update({', '  agentes: review(),', '  contexto: enrich(),', '  prompts: refine(),', '  patterns: optimize()', '});', '', '// Result:', '// Better code, fewer iterations', '// Higher standards adherence']} height={238} />
            <div style={{ marginTop: 12, fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMid, fontStyle: 'italic', borderLeft: `3px solid ${C.cyan}`, paddingLeft: 12, opacity: fade(f, 44) }}>
              The Harness gets smarter with every sprint
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 10: STEP 7 — FINAL DELIVERY ────────────────────────────────────────
const Step7Scene: React.FC = () => {
  const f = useCurrentFrame();
  const modules = [
    { name: 'TEMPO', desc: 'Calendar · Activities · Logistics · Digital Signage', status: '✅ 100%', color: C.green },
    { name: 'TOPS', desc: 'Technical Script Editor · TOPs · Pasadas', status: '✅ 95%', color: C.cyan },
    { name: 'ADMIN', desc: 'Users · Roles (4) · Departments · Permissions', status: '✅ 100%', color: C.blue },
  ];
  return (
    <AbsoluteFill style={{ background: C.white }}>
      <CyanSidebar />
      <div style={{ marginRight: 140, padding: '36px 80px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 22, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-30, 0])}px)` }}>
          <StepBadge n={7} />
          <div>
            <StepTitle>Final Delivery</StepTitle>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMid, marginTop: 6 }}>
              <strong style={{ color: C.navy }}>Outcome Validator + AI Architect</strong> · Final review of technical solution &amp; requirement coverage
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44 }}>
          <div style={{ opacity: fade(f, 10) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.navy, marginBottom: 14 }}>🔍 Validation Roles</div>
            {[{ role: 'Outcome Validator', detail: 'Manager · Business requirements coverage', icon: '👔' }, { role: 'AI Architect', detail: 'Technical solution & architecture review', icon: '👷' }].map((v, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: C.lightBlue, borderRadius: 8, marginBottom: 12, border: `2px solid ${C.navy}`, opacity: fade(f, 12 + i * 10) }}>
                <span style={{ fontSize: 32 }}>{v.icon}</span>
                <div>
                  <span style={{ background: C.navy, color: '#fff', fontSize: 12, fontWeight: 700, fontFamily: 'Arial, sans-serif', padding: '3px 10px', borderRadius: 3 }}>{v.role}</span>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: C.textMid, marginTop: 5 }}>{v.detail}</div>
                </div>
              </div>
            ))}
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMid, fontStyle: 'italic', borderLeft: `3px solid ${C.cyan}`, paddingLeft: 12, marginTop: 14, opacity: fade(f, 32) }}>
              "Final review of the outcome including<br />technical solution and requirement coverage."
            </div>
          </div>
          <div style={{ opacity: fade(f, 22) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: C.green, marginBottom: 14 }}>🚀 Delivered System</div>
            {modules.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', background: '#EFF9F1', borderRadius: 8, marginBottom: 10, border: '1px solid #90D4A0', opacity: fade(f, 25 + i * 7) }}>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 14, color: C.navy }}>{m.name}</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: C.textMid }}>{m.desc}</div>
                </div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 13, color: m.color }}>{m.status}</div>
              </div>
            ))}
            <div style={{ background: C.navy, color: '#fff', borderRadius: 8, padding: '13px 18px', opacity: fade(f, 46) }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, opacity: 0.75, marginBottom: 4 }}>🌐 MVP Live at</div>
              <div style={{ fontFamily: 'Consolas, monospace', fontSize: 14, color: C.cyan }}>teatro-real-app.vercel.app</div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 11: CLOSING ─────────────────────────────────────────────────────────
const ClosingScene: React.FC = () => {
  const f = useCurrentFrame();
  const metrics = [
    { icon: '⚡', value: '×2', label: 'Faster than traditional development' },
    { icon: '🧠', value: '0', label: 'Prior knowledge of target stack required' },
    { icon: '🚀', value: '1 week', label: 'Prototype delivered to client' },
    { icon: '📈', value: '~80%', label: 'Global completion at project handoff' },
  ];
  return (
    <AbsoluteFill style={{ background: C.navy, flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: '56px 80px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ opacity: fade(f, 5), transform: `translateY(${interpolate(spr(f, 5), [0, 1], [30, 0])}px)`, marginBottom: 44 }}>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 52, color: '#fff', lineHeight: 1.0, marginBottom: 8 }}>Results</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.6)' }}>Teatro Real · AI Native Methodology · NTT DATA EMEAL</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 20, marginBottom: 48 }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '22px 16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.14)', opacity: fade(f, 12 + i * 7), transform: `translateY(${interpolate(spr(f, 12 + i * 7), [0, 1], [28, 0])}px)` }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{m.icon}</div>
              <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 34, color: C.cyan, marginBottom: 8 }}>{m.value}</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>{m.label}</div>
            </div>
          ))}
        </div>
        <div style={{ borderLeft: `5px solid ${C.cyan}`, paddingLeft: 28, opacity: fade(f, 42), transform: `translateY(${interpolate(spr(f, 42), [0, 1], [20, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 28, color: '#fff', fontStyle: 'italic', marginBottom: 6 }}>
            "AI doesn't replace the team. It empowers it."
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.55)' }}>when used with methodology.</div>
        </div>
      </div>
      <div style={{ padding: '0 80px 40px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}>
        <NTTLogo white size={26} />
      </div>
    </AbsoluteFill>
  );
};

// ── MAIN ──────────────────────────────────────────────────────────────────────
// Timing (30fps):
// Scene 1:  0     → 150   (5s)   Title
// Scene 2:  150   → 420   (9s)   Challenge: Teatro Real
// Scene 3:  420   → 840   (14s)  Step 1: Agent Design
// Scene 4:  840   → 1350  (17s)  Step 2: Context Analysis
// Scene 5:  1350  → 1830  (16s)  Rapid Prototype & PRD Validation
// Scene 6:  1830  → 2250  (14s)  Step 3: Prompting Framework
// Scene 7:  2250  → 2820  (19s)  Step 4: Development
// Scene 8:  2820  → 3210  (13s)  Step 5: Quality Assurance
// Scene 9:  3210  → 3540  (11s)  Step 6: AI Model Tuning
// Scene 10: 3540  → 4020  (16s)  Step 7: Final Delivery
// Scene 11: 4020  → 4380  (12s)  Closing + Results
// TOTAL: 4380 frames = 146s

export default function Main() {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={150}><TitleScene /></Sequence>
      <Sequence from={150} durationInFrames={270}><ChallengeScene /></Sequence>
      <Sequence from={420} durationInFrames={420}><Step1Scene /></Sequence>
      <Sequence from={840} durationInFrames={510}><Step2Scene /></Sequence>
      <Sequence from={1350} durationInFrames={480}><PrototypeScene /></Sequence>
      <Sequence from={1830} durationInFrames={420}><Step3Scene /></Sequence>
      <Sequence from={2250} durationInFrames={570}><Step4Scene /></Sequence>
      <Sequence from={2820} durationInFrames={390}><Step5Scene /></Sequence>
      <Sequence from={3210} durationInFrames={330}><Step6Scene /></Sequence>
      <Sequence from={3540} durationInFrames={480}><Step7Scene /></Sequence>
      <Sequence from={4020} durationInFrames={360}><ClosingScene /></Sequence>
    </AbsoluteFill>
  );
}
