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
const TitleScene: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 6, background: C.cyan, flexShrink: 0 }} />
      {/* Centered content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 140px' }}>
        <div style={{ opacity: fade(f, 5), transform: `translateY(${interpolate(spr(f, 5), [0, 1], [50, 0])}px)`, marginBottom: 28 }}>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 76, color: C.white, lineHeight: 1.05 }}>The New Context of</div>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 76, color: C.white, lineHeight: 1.05 }}>Software Development</div>
        </div>
        <div style={{ opacity: fade(f, 20), transform: `translateY(${interpolate(spr(f, 20), [0, 1], [24, 0])}px)`, marginBottom: 44 }}>
          <div style={{ background: C.cyan, color: C.white, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 32, padding: '10px 36px', display: 'inline-block', borderRadius: 4 }}>
            A real case: AI Native in Teatro Real
          </div>
        </div>
        <div style={{ opacity: fade(f, 28), maxWidth: 1000 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 24, color: C.textMuted, lineHeight: 1.65 }}>
            A new team configuration designed to <strong style={{ color: C.white }}>maximize the potential of AI in software development</strong>, redefining activities, roles and outputs to get faster and more accurate results.
          </div>
        </div>
        <div style={{ opacity: fade(f, 38), marginTop: 44 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 20, color: C.textDim }}>NTT DATA EMEAL · AI Native · 2025</div>
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
const ChallengeScene: React.FC = () => {
  const f = useCurrentFrame();
  const before = ['📄 Activity planning in Excel', '📝 Technical scripts in Word', '📧 Coordination by email', '🔄 Inconsistent data & duplicates', '⏱️ Hours lost in manual updates'];
  const after = ['🏛️ TEMPO: Activities & calendar', '🎭 TOPS: Technical production scripts', '👥 ADMIN: Users, roles, permissions', '⚡ Angular 18 + Spring Boot 3 + PostgreSQL', '🚀 MVP live in weeks, not months'];
  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Header */}
      <div style={{ background: C.bgCard, padding: '20px 100px', display: 'flex', alignItems: 'center', flexShrink: 0, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 34, color: C.white }}>Teatro Real de Madrid</div>
      </div>
      {/* Before / Arrow / After — vertically centered */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 80px', gap: 32 }}>
        {/* Context narrative — centered above columns */}
        <div style={{ opacity: fade(f, 3), textAlign: 'center', padding: '0 80px' }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 24, color: C.textMuted, lineHeight: 1.6 }}>
            Teatro Real needed to digitize all its operational processes: activity planning, technical production scripts and hall logistics.
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 24, color: C.white, fontWeight: 700, marginTop: 10 }}>
            Everything was in Excel, Word and email.
          </div>
        </div>
        {/* Columns row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        {/* Before */}
        <div style={{ flex: 1, opacity: fade(f, 8), transform: `translateX(${interpolate(fade(f, 8), [0, 1], [-50, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 22, color: C.red, marginBottom: 18, letterSpacing: '0.02em' }}>Before: Manual &amp; Fragmented</div>
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
            AI Native<br />Methodology
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
const Step1Scene: React.FC = () => {
  const f = useCurrentFrame();

  // Phase header: 0-20 | Architect: 25-50 | Arrows: 58 | Cards: 70·110·150 | Bottom: 180
  const archScale = spr(f, 25);
  const archOpacity = fade(f, 25, 18);
  const arrowsOpacity = fade(f, 58, 12);

  // Card delays: 70 · 110 · 150 — ~1.3s gap between each at 30fps
  const agents = [
    { icon: '🔍', label: 'Requirements Analyst', color: C.blue, delay: 70,
      file: '01-analista-requisitos.md',
      lines: [
        '# Role: Senior Analyst · 15+ yrs',
        '─────────────────────────────',
        '## Capabilities:',
        '· Extract RF (functional reqs)',
        '· Extract RNF (non-functional)',
        '· Generate User Stories',
        '  → Como / Quiero / Para format',
        '· Detect ambiguity &amp; gaps',
        '· MoSCoW prioritization',
        '· Dependency mapping',
        '· Full traceability source→req',
        '· Impact analysis per req',
        '· Identify implicit requirements',
        '· Detect contradictions in input',
        '─────────────────────────────',
        '## Output structure:',
        '· RF-001: title, actor, priority,',
        '  complexity, source, deps',
        '· RNF-001: category, metric,',
        '  validation criteria',
        '· HU-001: story + acceptance',
        '  criteria + story points',
        '· Business rules (RN-001)',
        '· Epics (EP-001) when needed',
        '· Risk &amp; ambiguity report',
        '· Prioritised question list',
        '─────────────────────────────',
        '## Input formats accepted:',
        '· Meeting transcripts',
        '· Client emails / briefings',
        '· Existing tech documents',
        '· Kickoff briefing notes',
        '─────────────────────────────',
        '## Principles:',
        '· Never assume — always ask',
        '· Quantify: no "fast" or "easy"',
        '· Separate facts from assumptions',
        '─────────────────────────────',
        '## Feeds →',
        '  Estimator · Test Eng · UX',
      ]},
    { icon: '🎨', label: 'Frontend Expert', color: C.cyan, delay: 110,
      file: '08-experto-frontend.md',
      lines: [
        '# Role: Senior FE Architect · 12 yrs',
        '─────────────────────────────',
        '## Stack — Teatro Real:',
        '· Angular 18.2 Standalone',
        '· Angular Material 18',
        '· TailwindCSS 3.4',
        '· Signals (reactive state)',
        '· TypeScript strict mode',
        '─────────────────────────────',
        '## Modules:',
        '· TEMPO: Activity calendar',
        '· TOPS: Technical script editor',
        '· ADMIN: Roles &amp; permissions',
        '─────────────────────────────',
        '## Capabilities:',
        '· Component-driven architecture',
        '· Container / Presentational split',
        '· Lazy loading + code splitting',
        '· State: local / server / global',
        '· REST &amp; GraphQL consumption',
        '· Optimistic UI updates',
        '· WCAG 2.1 AA accessibility',
        '─────────────────────────────',
        '## Principles:',
        '· Small focused components',
        '· Composition over inheritance',
        '· Performance by default',
        '· Type safety everywhere',
        '· Tests as documentation',
        '─────────────────────────────',
        '## Feeds ← Backend (APIs)',
        '         → Test Engineer',
      ]},
    { icon: '⚙️', label: 'Backend Expert', color: C.green, delay: 150,
      file: '09-experto-backend.md',
      lines: [
        '# Role: Senior BE Architect · 15+ yrs',
        '─────────────────────────────',
        '## Stack — Teatro Real:',
        '· Java 17',
        '· Spring Boot 3.3.0',
        '· Spring Data JPA',
        '· PostgreSQL 16',
        '· SpringDoc OpenAPI 2.2',
        '─────────────────────────────',
        '## Architecture:',
        '· Clean / Hexagonal arch',
        '· SOLID + DDD patterns',
        '· Domain → App → Infra layers',
        '· Entities + Value Objects',
        '· Domain Events (decoupled)',
        '─────────────────────────────',
        '## Capabilities:',
        '· REST API design (OpenAPI)',
        '· JWT + RBAC authorization',
        '· OWASP security hardening',
        '· Circuit Breaker / Retry',
        '· Async event-driven flows',
        '· Query optimisation + cache',
        '· Testcontainers integration',
        '─────────────────────────────',
        '## Principles:',
        '· Fail fast · Defense in depth',
        '· DRY but no premature abstraction',
        '· Logs &amp; traceability first',
        '· YAGNI — only what is needed',
        '─────────────────────────────',
        '## Feeds → Frontend · Test Eng',
      ]},
  ];

  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      {/* Top bar */}
      <div style={{ flexShrink: 0, padding: '28px 100px 0', opacity: fade(f, 3, 12) }}>
        <SectionBar>AI STRATEGY AND GOVERNANCE</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={1} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.cyan, fontWeight: 700, letterSpacing: '0.08em' }}>PHASE 1</div>
          <StepTitle>Agent Design</StepTitle>
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
            {['📄 Reads PRD', '🧠 Designs agents', '📁 Creates .md specs'].map((tag, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, fontWeight: 600, color: C.cyan, background: 'rgba(0,151,207,0.15)', border: `1px solid rgba(0,151,207,0.4)`, padding: '5px 14px', borderRadius: 20 }}>{tag}</div>
            ))}
          </div>
          {/* Bottom: description — fades in slowly after box appears, larger */}
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 860, opacity: fade(f, 42, 25), transform: `translateY(${interpolate(fade(f, 42, 25), [0, 1], [10, 0])}px)` }}>
            Before touching any document, defines the{' '}
            <strong style={{ color: C.cyan }}>specialized agents</strong>{' '}
            that will work on the project. Each agent replicates a real development team role
            with its own <strong style={{ color: C.cyan }}>system prompt</strong>.
          </div>
        </div>
      </div>

      {/* T-connector: vertical stem → horizontal bar → 3 drops */}
      <div style={{ flexShrink: 0, padding: '0 100px', position: 'relative', height: 64 }}>
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
          const barW = interpolate(barGrow, [0, 1], [0, 66]); // % of space between card centers
          return (
            <div style={{ position: 'absolute', top: 38, left: `${50 - barW / 2}%`, width: `${barW}%`, height: 2, background: C.cyan, opacity: arrowsOpacity * 0.8 }} />
          );
        })()}
        {/* 3 drop arrows at card positions */}
        {[16.7, 50, 83.3].map((pos, i) => (
          <div key={i} style={{ position: 'absolute', top: 38, left: `${pos}%`, transform: 'translateX(-50%)',
            opacity: interpolate(arrowsOpacity, [0.5 + i * 0.1, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
            display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 2, height: 10, background: C.cyan }} />
            <div style={{ fontSize: 10, color: C.cyan, lineHeight: 1 }}>▼</div>
          </div>
        ))}
      </div>

      {/* Agent cards — 500px height, all equal */}
      <div style={{ flexShrink: 0, padding: '0 100px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: '500px', gap: 22 }}>
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
                  <div key={li} style={{ fontFamily: 'Consolas, monospace', fontSize: 11, lineHeight: 1.42, color: l.startsWith('─') ? 'rgba(255,255,255,0.18)' : l.startsWith('·') || l.startsWith('  ') ? '#C8B9F9' : l.startsWith('#') ? C.cyan : 'rgba(255,255,255,0.85)' }}>{l}</div>
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
                  <strong style={{ color: C.cyan }}>Why agents first: </strong>
                  agents are the tools used to extract context later.
                  Without them defined, the extraction would be generic — not project-specific.
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

// ── SCENE 4: STEP 2 — CONTEXT ANALYSIS ───────────────────────────────────────
const Step2Scene: React.FC = () => {
  const f = useCurrentFrame();
  const folders = ['📁 AGENTES/', '📁 DOC_INICIAL/', '📁 DOC_GENERADA/', '📁 PROMPT_FRAMEWORK/', '📁 scripts/', '📁 teatro-real-backend/', '📁 teatro-real-frontend/'];
  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      <div style={{ flexShrink: 0, padding: '28px 100px 0' }}><SectionBar>AI STRATEGY AND GOVERNANCE</SectionBar></div>
      <div style={{ flexShrink: 0, padding: '20px 100px', display: 'flex', alignItems: 'center', gap: 24, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-40, 0])}px)` }}>
        <StepBadge n={2} />
        <div>
          <StepTitle>Context Analysis</StepTitle>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.textMuted, marginTop: 8 }}>
            <strong style={{ color: C.white }}>AI Architect</strong> · Use agents to extract and structure all client knowledge
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 100px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28, minHeight: 0 }}>
        {/* Col 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, opacity: fade(f, 10), transform: `translateY(${interpolate(spr(f, 10), [0, 1], [30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 17, color: C.textMuted }}>📥 INPUT — DOC_INICIAL</div>
          <CodeBlock flex={1} title="~/teatro-real/DOC_INICIAL/" lines={['📄 TR-Requisitos Generales v1.2.docx', '📊 TEMPO - Temporada 2025-2026.xlsx', '📊 CALENDARIO 2025.xlsx', '📝 Contexto TEATRO REAL Gestión', '    Interna del Teatro.docx', '📝 Guion Regiduria CARMEN.docx', '📋 Estado_Implementacion_TEMPO.md', '📋 TR_Matriz_Requerimientos.md']} />
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMuted, fontStyle: 'italic' }}>Capture functional knowledge,<br />extract technical assets</div>
        </div>
        {/* Col 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, opacity: fade(f, 20), transform: `translateY(${interpolate(spr(f, 20), [0, 1], [30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 17, color: C.textMuted }}>⚙️ PROCESS — Axet Plugin</div>
          <div style={{ flex: 1, background: C.bgCard, borderRadius: 10, padding: '18px 20px', border: `2px solid ${C.cyan}`, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontFamily: 'Consolas, monospace', fontSize: 16, color: C.cyan, marginBottom: 8, fontWeight: 700 }}>~/teatro-real/</div>
            {folders.map((l, i) => (
              <div key={i} style={{ fontFamily: 'Consolas, monospace', fontSize: 15, color: C.textMuted, lineHeight: 1.8, opacity: fade(f, 22 + i * 3) }}>{l}</div>
            ))}
          </div>
          <div style={{ background: C.cyan, color: C.white, textAlign: 'center', padding: '10px 0', borderRadius: 6, fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, opacity: fade(f, 44) }}>aXet .plugin + CONTEXT</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, opacity: fade(f, 36) }}>
            {[['🔍 Requirements Analyst', 'extracts business requirements'], ['⚙️ Backend Expert', 'details Java 17 + Spring Boot impl.'], ['🎨 Frontend Expert', 'details Angular 18 impl.']].map(([role, desc], i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: C.textMuted }}>
                <strong style={{ color: C.white }}>{role}</strong> → {desc}
              </div>
            ))}
          </div>
        </div>
        {/* Col 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, opacity: fade(f, 34), transform: `translateY(${interpolate(spr(f, 34), [0, 1], [30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 17, color: C.green }}>📤 OUTPUT — DOC_GENERADA</div>
          <div style={{ flex: 1, background: C.codeBg, borderRadius: 10, border: `1px solid ${C.borderCyan}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 13, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '7px 18px', borderBottom: `1px solid ${C.borderCyan}`, flexShrink: 0 }}>~/teatro-real/DOC_GENERADA/</div>
            <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
              {['→ PLAN_IMPLEMENTACION_COMPLETO.md', '→ GUIA_ESTILOS_TEATRO.md', '→ CONTEXTO_BACKEND.md', '→ CONTEXTO_FRONTEND.md'].map((l, i) => (
                <div key={i} style={{ fontFamily: 'Consolas, monospace', fontSize: 17, color: C.green, fontWeight: 600 }}>{l}</div>
              ))}
            </div>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.green, fontStyle: 'italic', fontWeight: 600 }}>
            ✓ Context ready — agents have full project knowledge
          </div>
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: '16px 100px 24px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}><Logo height={70} /></div>
    </AbsoluteFill>
  );
};

// ── SCENE 5: RAPID PROTOTYPE ──────────────────────────────────────────────────
const PrototypeScene: React.FC = () => {
  const f = useCurrentFrame();
  const steps = [
    { icon: '📋', label: 'PRD Available', detail: 'EspecificacionFuncional\n_TeatroReal.md ✓', sub: 'Functional requirements\ncaptured', color: C.blue },
    { icon: '⚡', label: 'Rapid Prototype', detail: 'React + Supabase', sub: 'Working prototype\nin days, not weeks', color: C.cyan },
    { icon: '🤝', label: 'Client Validation', detail: 'Teatro Real reviews', sub: 'Real feedback &\ncorrections identified', color: '#9B59B6' },
    { icon: '✅', label: 'PRD Updated', detail: 'v2 — assumptions\ncorrected', sub: 'Fix misunderstandings\nbefore production code', color: C.green },
  ];
  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      <div style={{ flexShrink: 0, padding: '28px 100px 0' }}><SectionBar>FROM CONTEXT TO VALIDATION</SectionBar></div>
      <div style={{ flexShrink: 0, padding: '20px 100px', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-30, 0])}px)` }}>
        <div style={{ background: C.cyan, color: C.white, fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 18, padding: '8px 22px', borderRadius: 4, letterSpacing: '0.06em' }}>⭐ RAPID PROTOTYPE</div>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.textMuted }}>
          <strong style={{ color: C.white }}>AI Architect</strong> · Validate understanding with the client before writing production code
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 80px', display: 'flex', alignItems: 'center', gap: 0 }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ flex: 1, opacity: fade(f, 12 + i * 10), transform: `translateY(${interpolate(spr(f, 12 + i * 10), [0, 1], [40, 0])}px)` }}>
              <div style={{ background: C.bgCard, borderRadius: 16, border: `2px solid ${s.color}`, padding: '32px 20px', textAlign: 'center', boxShadow: `0 6px 24px rgba(0,0,0,0.3)` }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: s.color, marginBottom: 14 }}>{s.label}</div>
                <div style={{ fontFamily: 'Consolas, monospace', fontSize: 13, color: C.cyan, background: C.codeBg, padding: '8px 12px', borderRadius: 6, marginBottom: 14, whiteSpace: 'pre-line', lineHeight: 1.5 }}>{s.detail}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMuted, whiteSpace: 'pre-line', lineHeight: 1.5 }}>{s.sub}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: 50, textAlign: 'center', opacity: fade(f, 18 + i * 10), flexShrink: 0 }}>
                <div style={{ fontSize: 36, color: C.cyan, fontWeight: 900 }}>→</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={{ flexShrink: 0, padding: '20px 100px 28px', opacity: fade(f, 44) }}>
        <div style={{ background: C.bgCard, borderRadius: 10, padding: '18px 36px', display: 'flex', alignItems: 'center', gap: 20, border: `1px solid ${C.borderCyan}` }}>
          <span style={{ fontSize: 32, flexShrink: 0 }}>💡</span>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 19, color: C.white }}>
            Technology-agnostic prototype — built for speed, not production. Client validates before any production code is written.
          </div>
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: '0 100px 20px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}><Logo height={70} /></div>
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
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      <div style={{ flexShrink: 0, padding: '28px 100px 0' }}><SectionBar>FRAMEWORK SET UP</SectionBar></div>
      <div style={{ flexShrink: 0, padding: '20px 100px', display: 'flex', alignItems: 'center', gap: 24, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-40, 0])}px)` }}>
        <StepBadge n={3} />
        <div>
          <StepTitle>Prompting Framework</StepTitle>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.textMuted, marginTop: 8 }}>
            <strong style={{ color: C.white }}>AI Lead</strong> · Build templates that turn requirements into production-ready prompts
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 100px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 50, minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', opacity: fade(f, 12), transform: `translateX(${interpolate(spr(f, 12), [0, 1], [-30, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 18 }}>📁 PROMPT_FRAMEWORK/</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            {templates.map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 18px', background: C.bgCard, borderLeft: `5px solid ${t.color}`, borderRadius: '0 8px 8px 0', opacity: fade(f, 15 + i * 7), border: `1px solid ${C.border}`, borderLeftWidth: 5, borderLeftColor: t.color }}>
                <span style={{ fontFamily: 'Consolas, monospace', fontSize: 14, color: t.color, fontWeight: 700, flexShrink: 0 }}>{t.file}</span>
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textMuted }}>→ {t.desc}</span>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.textMuted, fontStyle: 'italic', borderLeft: `4px solid ${C.cyan}`, paddingLeft: 16, opacity: fade(f, 36), marginTop: 'auto' }}>
            Convert client requirements into<br /><strong style={{ color: C.white }}>structured, production-ready prompts</strong>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', opacity: fade(f, 22), transform: `translateX(${interpolate(spr(f, 22), [0, 1], [30, 0])}px)` }}>
          <CodeBlock flex={1} title="PROMPT_FEATURE.md — Teatro Real" lines={['## Contexto del Proyecto', '', 'Sistema de Gestión del Teatro Real', 'Backend: Java 17 + Spring Boot 3.3.0', 'Frontend: Angular 18.2 + TailwindCSS 3.4', '', '## Solicitud de Feature', 'Módulo: [ADMIN | TEMPO | TOPS]', 'Requisito: [RF-TEMPO-X | RF-TOPS-X]', '', '## Historia de Usuario', 'Como [rol] quiero [acción]', 'Para [beneficio]', '', '## Criterios de Aceptación', '- [ ] Criterio verificable 1', '- [ ] Criterio verificable 2', '', '## Restricciones Técnicas', '- Seguir arquitectura existente', '- No romper tests actuales']} />
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: '16px 100px 24px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}><Logo height={70} /></div>
    </AbsoluteFill>
  );
};

// ── SCENE 7: STEP 4 — DEVELOPMENT ────────────────────────────────────────────
const Step4Scene: React.FC = () => {
  const f = useCurrentFrame();
  const team = [
    { role: 'AI Lead', detail: 'Implementation plans & dev tracking', color: C.cyan },
    { role: 'Front AI Dev', detail: 'Angular 18 · Components · UI', color: C.blue },
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
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      <div style={{ flexShrink: 0, padding: '28px 100px 0' }}><SectionBar>AI-SUPPORTED DEVELOPMENT STREAMS</SectionBar></div>
      <div style={{ flexShrink: 0, padding: '20px 100px', display: 'flex', alignItems: 'center', gap: 24, opacity: fade(f, 5) }}>
        <StepBadge n={4} />
        <StepTitle>Development</StepTitle>
      </div>
      <div style={{ flex: 1, padding: '0 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', opacity: fade(f, 10) }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.white, marginBottom: 18 }}>👥 The Team</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {team.map((m, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '18px 20px', background: C.bgCard, borderRadius: 10, border: `1px solid ${C.border}`, opacity: fade(f, 13 + i * 8), transform: `translateX(${interpolate(fade(f, 13 + i * 8), [0, 1], [-20, 0])}px)` }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 24, flexShrink: 0 }}>👤</div>
                <div>
                  <span style={{ background: m.color, color: '#fff', fontSize: 15, fontWeight: 700, fontFamily: 'Arial, sans-serif', padding: '4px 12px', borderRadius: 4 }}>{m.role}</span>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 16, color: C.textMuted, marginTop: 6 }}>{m.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: C.bgCard, borderRadius: 10, padding: '16px 20px', border: `1px solid ${C.borderCyan}`, fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.white, opacity: fade(f, 38), marginTop: 20 }}>
            🛠️ Co-creating code with AI agents using <strong style={{ color: C.cyan }}>Axet Plugin</strong>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', opacity: fade(f, 18) }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.white, marginBottom: 18 }}>📊 Sprint Progress</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
            {sprints.map((s, i) => {
              const pct = interpolate(fade(f, 22 + i * 5), [0, 1], [0, s.pct]);
              return (
                <div key={i} style={{ opacity: fade(f, 20 + i * 5) }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Arial, sans-serif', fontSize: 17, marginBottom: 6, color: C.textMuted }}>
                    <span>{s.label}</span>
                    <span style={{ fontWeight: 700, color: s.color }}>{Math.round(pct)}%</span>
                  </div>
                  <div style={{ height: 14, borderRadius: 7, background: C.bgCard, border: `1px solid ${C.border}` }}>
                    <div style={{ height: '100%', borderRadius: 7, background: s.color, width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 20, background: C.cyan, borderRadius: 10, padding: '18px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: fade(f, 52) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.white }}>Global Progress</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 44, color: C.white }}>~80%</div>
          </div>
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: '16px 100px 24px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}><Logo height={70} /></div>
    </AbsoluteFill>
  );
};

// ── SCENE 8: STEP 5 — QUALITY ASSURANCE ──────────────────────────────────────
const Step5Scene: React.FC = () => {
  const f = useCurrentFrame();
  const steps = [
    { n: '1', icon: '📝', label: 'MR Created', detail: 'Front AI Dev / Back AI Dev\nopens the merge request', color: C.blue },
    { n: '2', icon: '👁️', label: 'Human Review', detail: 'MR Validator reviews code\n& integrates to development', color: C.cyan },
    { n: '3', icon: '🧪', label: 'Test Pass', detail: 'Tests run on the\ndevelopment branch', color: '#9B59B6' },
    { n: '4', icon: '✅', label: 'Ready to Deploy', detail: 'Validation passed —\ncleared for deployment', color: C.green },
  ];
  return (
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      <div style={{ flexShrink: 0, padding: '28px 100px 0' }}><SectionBar>AI-SUPPORTED DEVELOPMENT STREAMS</SectionBar></div>
      <div style={{ flexShrink: 0, padding: '20px 100px', display: 'flex', alignItems: 'center', gap: 24, opacity: fade(f, 5) }}>
        <StepBadge n={5} />
        <div>
          <StepTitle>Quality Assurance</StepTitle>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.textMuted, marginTop: 8 }}>
            <strong style={{ color: C.white }}>MR Validator + AI Architect</strong> · Human validation before every merge
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 80px', display: 'flex', alignItems: 'center', gap: 0 }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ flex: 1, opacity: fade(f, 14 + i * 10), transform: `translateY(${interpolate(spr(f, 14 + i * 10), [0, 1], [40, 0])}px)` }}>
              <div style={{ background: C.bgCard, borderRadius: 16, border: `2px solid ${s.color}`, padding: '32px 20px', textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: s.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 24, fontFamily: 'Arial, sans-serif', margin: '0 auto 16px' }}>{s.n}</div>
                <div style={{ fontSize: 44, marginBottom: 14 }}>{s.icon}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: s.color, marginBottom: 14 }}>{s.label}</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 16, color: C.textMuted, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{s.detail}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: 44, textAlign: 'center', opacity: fade(f, 20 + i * 10), flexShrink: 0 }}>
                <div style={{ fontSize: 32, color: C.cyan, fontWeight: 900 }}>→</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={{ flexShrink: 0, padding: '20px 100px 28px', opacity: fade(f, 46) }}>
        <div style={{ background: C.bgCard, border: `1px solid ${C.borderCyan}`, borderRadius: 10, padding: '16px 36px', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.white }}>
          🔒 No automatic merges — human validation before every integration
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: '0 100px 20px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}><Logo height={70} /></div>
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
    <AbsoluteFill style={{ background: C.bg, display: 'flex' }}>
      <CyanSidebar />
      <div style={{ flex: 1, marginRight: 160, padding: '36px 100px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 28, flexShrink: 0, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-30, 0])}px)` }}>
          <StepBadge n={6} />
          <div>
            <StepTitle>AI Model Tuning</StepTitle>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.textMuted, marginTop: 8 }}>
              <strong style={{ color: C.white }}>AI Lead</strong> · Iteratively improve the Harness across all phases
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, minHeight: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', opacity: fade(f, 12) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.white, marginBottom: 18 }}>🔄 Feedback Loop</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
              {issues.map((r, i) => (
                <div key={i} style={{ flex: 1, padding: '16px 18px', background: C.bgCard, borderRadius: 8, border: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', opacity: fade(f, 15 + i * 6) }}>
                  <div style={{ fontSize: 16, color: C.red }}>⚠ {r.problem}</div>
                  <div style={{ fontSize: 16, color: C.green, fontWeight: 700, marginTop: 6 }}>{r.fix}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', opacity: fade(f, 20) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.white, marginBottom: 18 }}>📈 Continuous Enhancement</div>
            <CodeBlock flex={1} lines={['// Enhance prompts', '// Improve agent behaviors', '// Refine dev patterns', '', 'Harness.update({', '  agentes: review(),', '  contexto: enrich(),', '  prompts: refine(),', '  patterns: optimize()', '});', '', '// Result:', '// Better code, fewer iterations', '// Higher standards adherence']} />
            <div style={{ marginTop: 14, fontFamily: 'Arial, sans-serif', fontSize: 16, color: C.textMuted, fontStyle: 'italic', borderLeft: `4px solid ${C.cyan}`, paddingLeft: 14, opacity: fade(f, 44) }}>
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
    <AbsoluteFill style={{ background: C.bg, display: 'flex' }}>
      <CyanSidebar />
      <div style={{ flex: 1, marginRight: 160, padding: '36px 100px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32, flexShrink: 0, opacity: fade(f, 5), transform: `translateX(${interpolate(spr(f, 5), [0, 1], [-30, 0])}px)` }}>
          <StepBadge n={7} />
          <div>
            <StepTitle>Final Delivery</StepTitle>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.textMuted, marginTop: 8 }}>
              <strong style={{ color: C.white }}>Outcome Validator + AI Architect</strong> · Final review of technical solution &amp; requirement coverage
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, minHeight: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', opacity: fade(f, 10) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.white, marginBottom: 18 }}>🔍 Validation Roles</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[{ role: 'Outcome Validator', detail: 'Manager · Business requirements coverage', icon: '👔' }, { role: 'AI Architect', detail: 'Technical solution & architecture review', icon: '👷' }].map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '22px 22px', background: C.bgCard, borderRadius: 10, border: `2px solid ${C.cyan}`, opacity: fade(f, 12 + i * 10) }}>
                  <span style={{ fontSize: 40 }}>{v.icon}</span>
                  <div>
                    <span style={{ background: C.cyan, color: C.white, fontSize: 15, fontWeight: 700, fontFamily: 'Arial, sans-serif', padding: '4px 14px', borderRadius: 4 }}>{v.role}</span>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMuted, marginTop: 8 }}>{v.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.textMuted, fontStyle: 'italic', borderLeft: `4px solid ${C.cyan}`, paddingLeft: 16, marginTop: 28, opacity: fade(f, 32) }}>
              "Final review of the outcome including<br />technical solution and requirement coverage."
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', opacity: fade(f, 22) }}>
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 20, color: C.green, marginBottom: 18 }}>🚀 Delivered System</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
              {modules.map((m, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 22px', background: C.bgCard, borderRadius: 10, border: `1px solid ${m.color}44`, opacity: fade(f, 25 + i * 7) }}>
                  <div>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.white }}>{m.name}</div>
                    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.textMuted, marginTop: 4 }}>{m.desc}</div>
                  </div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 16, color: m.color }}>{m.status}</div>
                </div>
              ))}
            </div>
            <div style={{ background: C.bgCard, borderRadius: 10, padding: '18px 22px', opacity: fade(f, 46), marginTop: 16, border: `1px solid ${C.borderCyan}` }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.textMuted, marginBottom: 6 }}>🌐 MVP Live at</div>
              <div style={{ fontFamily: 'Consolas, monospace', fontSize: 18, color: C.cyan }}>teatro-real-app.vercel.app</div>
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
    <AbsoluteFill style={{ background: C.bg, flexDirection: 'column', display: 'flex' }}>
      <div style={{ flex: 1, padding: '60px 100px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ opacity: fade(f, 5), transform: `translateY(${interpolate(spr(f, 5), [0, 1], [30, 0])}px)`, marginBottom: 52 }}>
          <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 68, color: C.white, lineHeight: 1.0, marginBottom: 12 }}>Results</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 22, color: C.textMuted }}>Teatro Real · AI Native Methodology · NTT DATA EMEAL</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 24, marginBottom: 56 }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ background: C.bgCard, borderRadius: 16, padding: '36px 20px', textAlign: 'center', border: `1px solid ${C.border}`, opacity: fade(f, 12 + i * 7), transform: `translateY(${interpolate(spr(f, 12 + i * 7), [0, 1], [32, 0])}px)` }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>{m.icon}</div>
              <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 48, color: C.cyan, marginBottom: 12 }}>{m.value}</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, color: C.textMuted, lineHeight: 1.5 }}>{m.label}</div>
            </div>
          ))}
        </div>
        <div style={{ borderLeft: `6px solid ${C.cyan}`, paddingLeft: 36, opacity: fade(f, 44), transform: `translateY(${interpolate(spr(f, 44), [0, 1], [20, 0])}px)` }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 36, color: C.white, fontStyle: 'italic', marginBottom: 10 }}>
            "AI doesn't replace the team. It empowers it."
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 24, color: C.textMuted }}>when used with methodology.</div>
        </div>
      </div>
      <div style={{ flexShrink: 0, padding: '0 100px 48px', display: 'flex', justifyContent: 'flex-end', opacity: fade(f, 5) }}>
        <Logo height={70} />
      </div>
    </AbsoluteFill>
  );
};

// ── MAIN ──────────────────────────────────────────────────────────────────────
export default function Main() {
  return (
    <AbsoluteFill>
      <Sequence from={0}    durationInFrames={150}><TitleScene /></Sequence>
      <Sequence from={150}  durationInFrames={270}><ChallengeScene /></Sequence>
      <Sequence from={420}  durationInFrames={600}><Step1Scene /></Sequence>
      <Sequence from={1020} durationInFrames={510}><Step2Scene /></Sequence>
      <Sequence from={1530} durationInFrames={480}><PrototypeScene /></Sequence>
      <Sequence from={2010} durationInFrames={420}><Step3Scene /></Sequence>
      <Sequence from={2430} durationInFrames={570}><Step4Scene /></Sequence>
      <Sequence from={3000} durationInFrames={390}><Step5Scene /></Sequence>
      <Sequence from={3390} durationInFrames={330}><Step6Scene /></Sequence>
      <Sequence from={3720} durationInFrames={480}><Step7Scene /></Sequence>
      <Sequence from={4200} durationInFrames={360}><ClosingScene /></Sequence>
    </AbsoluteFill>
  );
}
