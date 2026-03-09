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
    { icon: '🎨', label: 'Frontend Expert', color: C.cyan, delay: 110,
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
    { icon: '⚙️', label: 'Backend Expert', color: C.green, delay: 150,
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

// ── SCENE 4: STEP 2 — CONTEXT GENERATION ─────────────────────────────────────
const Step2Scene: React.FC = () => {
  const f = useCurrentFrame();

  const archScale = spr(f, 22);
  const archOpacity = fade(f, 22, 18);
  const arrowOpacity = fade(f, 72, 12);

  const phaseAgents = [
    { icon: '🔍', label: 'Requirements Analyst', color: C.blue, delay: 82 },
    { icon: '⚙️', label: 'Backend Expert', color: C.green, delay: 110 },
    { icon: '🎨', label: 'Frontend Expert', color: C.cyan, delay: 138 },
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
    { file: 'PLAN_IMPLEMENTACION_COMPLETO.md', label: 'Full implementation plan' },
    { file: 'GUIA_ESTILOS_TEATRO.md', label: 'UI & style guide' },
    { file: 'CONTEXTO_BACKEND.md', label: 'Backend context for agents' },
    { file: 'CONTEXTO_FRONTEND.md', label: 'Frontend context for agents' },
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
        <SectionBar>AI STRATEGY AND GOVERNANCE</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={2} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.cyan, fontWeight: 700, letterSpacing: '0.08em' }}>PHASE 2</div>
          <StepTitle>Context Generation</StepTitle>
        </div>
      </div>

      {/* AI Architect box — same style as Phase 1 */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid ${C.cyan}`, borderRadius: 14, padding: '18px 36px', boxShadow: `0 0 40px rgba(0,151,207,0.25)` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, boxShadow: `0 0 16px rgba(0,151,207,0.5)` }}>👤</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 22, color: C.white }}>AI Architect</div>
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)' }} />
            {['📂 Loads docs', '🤖 Runs agents', '📋 Generates context'].map((tag, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, fontWeight: 600, color: C.cyan, background: 'rgba(0,151,207,0.15)', border: `1px solid rgba(0,151,207,0.4)`, padding: '5px 14px', borderRadius: 20 }}>{tag}</div>
            ))}
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 880, opacity: fade(f, 40, 25), transform: `translateY(${interpolate(fade(f, 40, 25), [0, 1], [10, 0])}px)` }}>
            With the <strong style={{ color: C.cyan }}>agents from Phase 1</strong>, feeds them all client documentation.
            Each agent processes it from a different perspective — business, backend, frontend —
            producing a <strong style={{ color: C.cyan }}>structured context repository</strong> before any code is written.
          </div>
        </div>
      </div>

      {/* Connector: AI Architect ──⚡ aXet Plugin──▼ Agents */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, height: 16, background: C.cyan, flexShrink: 0 }} />
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
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>📥 INPUT — DOC_INICIAL</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: `1px solid ${C.borderCyan}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: `1px solid ${C.borderCyan}`, flexShrink: 0 }}>~/teatro-real/DOC_INICIAL/</div>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>🤖 Phase 1 Agents</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {phaseAgents.map((a, i) => (
              <div key={i} style={{ background: a.color, borderRadius: 10, padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 14, opacity: fade(f, a.delay, 18), transform: `translateY(${interpolate(sprSlow(f, a.delay), [0, 1], [40, 0])}px)` }}>
                <span style={{ fontSize: 24 }}>{a.icon}</span>
                <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.white }}>{a.label}</span>
                {f > a.delay + 28 && (
                  <span style={{ fontFamily: 'Consolas, monospace', fontSize: 12, color: 'rgba(255,255,255,0.9)', opacity: agentPulse, marginLeft: 'auto' }}>⟳ analyzing...</span>
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
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.green, marginBottom: 6 }}>📤 OUTPUT — DOC_GENERADA</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: `1px solid ${C.borderCyan}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: `1px solid ${C.borderCyan}`, flexShrink: 0 }}>~/teatro-real/DOC_GENERADA/</div>
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {outputFiles.map((o, i) => (
                <div key={i} style={{ opacity: fade(f, 155 + i * 5) }}>
                  <div style={{ fontFamily: 'Consolas, monospace', fontSize: 13, color: C.green, fontWeight: 600 }}>→ {o.file}</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 11.5, color: C.textDim, marginTop: 3 }}>{o.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, color: C.green, fontStyle: 'italic', fontWeight: 600 }}>✓ Context ready — agents have full project knowledge</div>
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
              <strong style={{ color: C.cyan }}>No production code yet — </strong>
              agents read, translate and structure knowledge. The project is fully understood before writing a single line of code.
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 5: RAPID PROTOTYPE ──────────────────────────────────────────────────
const PrototypeScene: React.FC = () => {
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
          ⭐ OPTIONAL PHASE
        </div>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: C.orange, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontFamily: 'Arial, sans-serif', flexShrink: 0, boxShadow: '0 4px 20px rgba(243,156,18,0.45)' }}>⭐</div>
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.orange, fontWeight: 700, letterSpacing: '0.08em' }}>OPTIONAL PHASE</div>
          <StepTitle>Rapid Prototype &amp; PRD Validation</StepTitle>
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
            With the extracted context, builds a <strong style={{ color: C.orange }}>rapid functional prototype</strong> in React + Supabase.
            The goal: <strong style={{ color: C.cyan }}>validate with the client</strong> that the understanding is correct
            before investing in real production development.
          </div>
        </div>
      </div>

      {/* Connector */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, height: 16, background: C.orange, flexShrink: 0 }} />
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
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>📋 INPUT — PRD &amp; Context</div>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>⚡ Build &amp; Validate</div>
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
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.green, marginBottom: 6 }}>✅ OUTPUT — PRD v2</div>
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
              <strong style={{ color: C.orange }}>Fix misunderstandings before writing production code — </strong>
              direct value of the AI Native methodology.
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 6: STEP 3 — PROMPTING FRAMEWORK ────────────────────────────────────
const Step3Scene: React.FC = () => {
  const f = useCurrentFrame();

  const archScale = spr(f, 22);
  const archOpacity = fade(f, 22, 18);
  const arrowOpacity = fade(f, 72, 12);

  const templates = [
    { file: 'PROMPT_FEATURE.md', desc: 'Full-stack feature (Backend + Frontend)', color: C.cyan, delay: 82 },
    { file: 'PROMPT_BACKEND.md', desc: 'Spring Boot endpoint creation', color: C.green, delay: 100 },
    { file: 'PROMPT_FRONTEND.md', desc: 'Angular component generation', color: C.blue, delay: 118 },
    { file: 'PROMPT_BUGFIX.md', desc: 'Bug identification & fix', color: C.red, delay: 136 },
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
        <SectionBar>FRAMEWORK SET UP</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={3} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.cyan, fontWeight: 700, letterSpacing: '0.08em' }}>PHASE 3</div>
          <StepTitle>Prompting Framework</StepTitle>
        </div>
      </div>

      {/* AI Architect box */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid ${C.cyan}`, borderRadius: 14, padding: '18px 36px', boxShadow: '0 0 40px rgba(0,151,207,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, boxShadow: '0 0 16px rgba(0,151,207,0.5)' }}>👤</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 22, color: C.white }}>AI Architect</div>
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)' }} />
            {['📋 Reads PRD v2', '⚙️ Structures prompts', '📁 Creates templates'].map((tag, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, fontWeight: 600, color: C.cyan, background: 'rgba(0,151,207,0.15)', border: '1px solid rgba(0,151,207,0.4)', padding: '5px 14px', borderRadius: 20 }}>{tag}</div>
            ))}
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 880, opacity: fade(f, 40, 25), transform: `translateY(${interpolate(fade(f, 40, 25), [0, 1], [10, 0])}px)` }}>
            With the validated context and the corrected PRD, builds <strong style={{ color: C.cyan }}>prompt templates</strong> that transform requirements
            into structured, executable instructions for Axet Plugin.
            Standardises the work of the <strong style={{ color: C.cyan }}>entire development team</strong>.
          </div>
        </div>
      </div>

      {/* Connector */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, height: 16, background: C.cyan, flexShrink: 0 }} />
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
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>📋 INPUT — PRD v2 &amp; Context</div>
          <div style={{ background: C.codeBg, borderRadius: 10, border: `1px solid ${C.borderCyan}`, overflow: 'hidden' }}>
            <div style={{ background: 'rgba(0,151,207,0.20)', color: C.cyan, fontSize: 11, fontFamily: 'Consolas, monospace', fontWeight: 600, padding: '6px 16px', borderBottom: `1px solid ${C.borderCyan}` }}>Validated &amp; corrected</div>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>⚙️ Templates Generated</div>
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
              <strong style={{ color: C.cyan }}>Standardise the input, improve the output — </strong>
              consistent prompts drive consistent, higher-quality code across the entire team.
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
    </AbsoluteFill>
  );
};

// ── SCENE 7: STEP 4 — DEVELOPMENT ────────────────────────────────────────────
const Step4Scene: React.FC = () => {
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
    { label: 'Sprint 0: Setup', pct: 100, color: C.green },
    { label: 'Sprint 1: Auth + Layout', pct: 100, color: C.green },
    { label: 'Sprint 2: TEMPO', pct: 100, color: C.green },
    { label: 'Sprint 3: TOPS', pct: 95, color: C.cyan },
    { label: 'Sprint 4: Integrations', pct: 35, color: C.orange },
    { label: 'Sprint 5: Deploy', pct: 30, color: C.orange },
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
        <SectionBar>AI-SUPPORTED DEVELOPMENT STREAMS</SectionBar>
      </div>

      {/* Phase label */}
      <div style={{ flexShrink: 0, padding: '14px 100px 0', display: 'flex', alignItems: 'center', gap: 20, opacity: fade(f, 8, 14) }}>
        <StepBadge n={4} />
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, color: C.cyan, fontWeight: 700, letterSpacing: '0.08em' }}>PHASE 4</div>
          <StepTitle>Development</StepTitle>
        </div>
      </div>

      {/* AI Lead box */}
      <div style={{ flexShrink: 0, padding: '12px 100px 0', display: 'flex', justifyContent: 'center', opacity: archOpacity, transform: `scale(${interpolate(archScale, [0, 1], [0.6, 1])})` }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: C.bgCard, border: `2px solid ${C.cyan}`, borderRadius: 14, padding: '18px 36px', boxShadow: '0 0 40px rgba(0,151,207,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cyan, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, boxShadow: '0 0 16px rgba(0,151,207,0.5)' }}>👤</div>
            <div style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 22, color: C.white }}>AI Lead</div>
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)' }} />
            {['📋 Plans sprints', '🎯 Registers in Jira', '👥 Distributes work'].map((tag, i) => (
              <div key={i} style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, fontWeight: 600, color: C.cyan, background: 'rgba(0,151,207,0.15)', border: '1px solid rgba(0,151,207,0.4)', padding: '5px 14px', borderRadius: 20 }}>{tag}</div>
            ))}
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: C.white, lineHeight: 1.7, textAlign: 'center', maxWidth: 880, opacity: fade(f, 40, 25), transform: `translateY(${interpolate(fade(f, 40, 25), [0, 1], [10, 0])}px)` }}>
            Plans the implementation, registers tasks in <strong style={{ color: C.cyan }}>Jira</strong> and distributes them across the team.
            Each developer launches prompts through <strong style={{ color: C.cyan }}>Axet Plugin + Codex</strong>,
            generating, reviewing and iterating code sprint by sprint.
          </div>
        </div>
      </div>

      {/* Connector */}
      {(() => {
        const connOpacity = fade(f, 62, 14);
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: connOpacity, minHeight: 0 }}>
            <div style={{ width: 2, height: 16, background: C.cyan, flexShrink: 0 }} />
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
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>🎯 Jira — Sprint Backlog</div>
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
                    {isActive && <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: C.cyan, fontWeight: 700, opacity: genPulse }}>● in progress</span>}
                    {isDone && <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, color: C.green, fontWeight: 700 }}>✓ done</span>}
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
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>👥 Dev Team in Action</div>
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
                    <span style={{ fontFamily: 'Consolas, monospace', fontSize: 11, color: C.green, opacity: genPulse }}>⟳ generating...</span>
                  )}
                  {allDone && (
                    <span style={{ fontFamily: 'Consolas, monospace', fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>✓ idle</span>
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
          <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 18, color: C.textMuted, marginBottom: 6 }}>📊 Sprint Progress</div>
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
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: 15, color: C.white }}>Global Progress</div>
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
              <strong style={{ color: C.cyan }}>AI doesn't replace developers — </strong>
              it amplifies them. Each prompt generates a full feature; each sprint delivers working software.
            </div>
          </div>
        </div>
        <Logo height={60} />
      </div>
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
