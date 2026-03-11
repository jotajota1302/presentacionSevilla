# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Remotion-based animated video project for NTT DATA EMEAL. Generates a bilingual (EN/ES) marketing video showcasing the "AI Native Methodology" through the Teatro Real (Madrid) case study. ~150 seconds, 1920×1080, 30fps.

## Commands

All commands run from `teatro-real-project/`:

```bash
cd teatro-real-project && npm run preview   # Launch interactive preview in browser
cd teatro-real-project && npm run render    # Render to ../native-ai-video.mp4
```

No test suite or linter is configured.

## Architecture

**Single-composition video** with two language variants (NativeAI-EN, NativeAI-ES) registered in `Root.tsx`. All scene logic lives in `Main.tsx` (~2100 lines).

### Main.tsx structure

- **Constants**: `C` object holds NTT brand colors (navy #00245D, cyan #0097CF, etc.)
- **Animation helpers**: `spr()` wraps Remotion spring (stiffness: 140, damping: 14, mass: 0.8), `fade()` wraps interpolate for opacity
- **Shared components**: NTTLogo, StepBadge, SectionBar, StepTitle, Code, CyanSidebar
- **Scene components**: TitleScene, ChallengeScene, Phase1–Phase7Scenes, ClosingScene (11 total)
- **Bilingual text**: `Lang` type (`'en' | 'es'`) passed as prop; text objects contain both translations
- **Timing**: Frame-based with `Sequence` components; delays computed from cumulative durations

### Key files

| File | Purpose |
|------|---------|
| `teatro-real-project/src/Root.tsx` | Composition definitions (4680 frames, 30fps, 1080p) |
| `teatro-real-project/src/Main.tsx` | All scenes, components, animations |
| `teatro-real-project/remotion.config.ts` | JPEG frame format, overwrite enabled |
| `guion-video-nativeai.md` | Full storyboard/script with per-scene timing and narration |
| `video-nativeai.tsx` | Earlier draft/alternative implementation (dark theme) |

### Adding/modifying scenes

1. Scene components receive `lang: Lang` prop for bilingual text
2. All animations use frame counting — use `useCurrentFrame()` and the `spr()`/`fade()` helpers
3. Scenes are sequenced in `Main.tsx` via `<Sequence>` with frame offsets
4. Update total duration in `Root.tsx` (currently 4680 frames) if scene lengths change
5. Refer to `guion-video-nativeai.md` for intended narration and visual direction
