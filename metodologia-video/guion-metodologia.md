# Guión de Vídeo — Native AI Methodology
## De la herramienta al método: cómo construimos nuestro Harness
**NTT DATA EMEAL · Squad IA · 2025**

---

> **Formato**: 1920×1080 · 30fps · ~154 segundos (4620 frames)
> **Estilo**: Fondo blanco/navy, colores NTT Data (#00245D navy, #0097CF cyan, #E6007E magenta acento)
> **Público**: Ejecutivos y directores — lenguaje claro, visual, orientado a resultados
> **Idioma**: Bilingüe EN/ES (dos composiciones)
> **Tono**: Narrativo tipo "journey" — del problema a la solución
> **Tipografía**: Sans-serif moderna (Inter o similar), pesos Bold para títulos, Regular para cuerpo

---

## PALETA DE COLORES

| Nombre | Hex | Uso |
|--------|-----|-----|
| Navy | #00245D | Fondos oscuros, títulos principales, barras |
| Cyan | #0097CF | Acentos, badges, highlights, iconos activos |
| Blanco | #FFFFFF | Fondos claros, texto sobre navy |
| Gris fondo | #F5F8FC | Fondos de escenas alternas |
| Rojo alerta | #E74C3C | Problemas, "antes", errores |
| Verde éxito | #27AE60 | Checks, validaciones, "después" |
| Magenta NTT | #E6007E | Acento puntual (badges especiales) |
| Gris texto | #6B7B8D | Texto secundario, descripciones |

---

# ═══════════════════════════════════════════════════════
# ESCENA 1 — PORTADA
# ═══════════════════════════════════════════════════════

**Duración**: 5 segundos (frames 0–150)
**Fondo**: Blanco puro con dos franjas decorativas:
- Franja superior: barra navy de 6px en el borde top
- Franja inferior: degradado sutil navy→cyan, altura ~80px, en el borde bottom

---

### Layout (1920×1080)

```
┌────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ BARRA NAVY 6px ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│                                                            │
│              [LOGO NTT DATA]                               │
│              (navy + cyan, centrado)                        │
│                                                            │
│         ╔══════════════════════════════════╗                │
│         ║   Native AI Methodology          ║               │
│         ║   (60px, bold, navy)             ║               │
│         ╚══════════════════════════════════╝                │
│                                                            │
│         ┌──────────────────────────────────┐               │
│         │  De la herramienta al método     │               │
│         │  (28px, regular, gris texto)     │               │
│         └──────────────────────────────────┘               │
│                                                            │
│         ┌─────────────────────────────────────┐            │
│         │  ● Desarrollo Asistido por Agentes  │            │
│         │    de Codificación                   │           │
│         │  (badge cyan, pill shape, 20px)      │           │
│         └─────────────────────────────────────┘            │
│                                                            │
│  ░░░░░░░░░░░ DEGRADADO NAVY→CYAN ░░░░░░░░░░░░░░░░░░░░░░░ │
│  NTT DATA EMEAL · Squad IA · 2025  (14px, blanco)         │
└────────────────────────────────────────────────────────────┘
```

### Elementos visuales detallados

1. **Logo NTT DATA**: Versión horizontal, colores corporativos (texto "NTT" en navy, "DATA" con acento cyan). Tamaño ~300px ancho, centrado horizontalmente, posición Y ~180px desde top.

2. **Título principal**: "Native AI Methodology" en 60px, bold, color navy. Centrado. Interlineado ajustado. Posición Y ~350px.

3. **Subtítulo**: "De la herramienta al método" en 28px, regular, color gris (#6B7B8D). Centrado, justo debajo del título con 16px de separación.

4. **Badge cyan**: Rectángulo con bordes redondeados (border-radius: 24px), fondo cyan con opacidad 15%, borde cyan 2px. Texto "Desarrollo Asistido por Agentes de Codificación" en 20px, color cyan. Centrado, posición Y ~520px.

5. **Pie**: Texto en blanco 14px sobre la franja degradada inferior. Centrado.

### Animaciones detalladas

| Elemento | Inicio | Duración | Tipo | Detalles |
|----------|--------|----------|------|----------|
| Logo NTT DATA | frame 0 | 20 frames | Fade in | opacity 0→1, ease-out |
| Título principal | frame 15 | 25 frames | Spring desde abajo | translateY: 40→0, spring(stiffness:140, damping:14) |
| Subtítulo | frame 30 | 20 frames | Fade in | opacity 0→1 |
| Badge cyan | frame 45 | 25 frames | Spring con rebote | scale 0→1.05→1, spring(stiffness:180, damping:12) |
| Pie | frame 60 | 20 frames | Fade in | opacity 0→1 |
| Franjas decorativas | frame 0 | 15 frames | Slide in | width 0%→100%, ease-out |

### Efecto adicional
- Partículas sutiles de puntos cyan muy pequeños (2-3px) que flotan lentamente de abajo hacia arriba en el fondo, opacidad 10-20%. Crean sensación tech sin distraer.

---

# ═══════════════════════════════════════════════════════
# ESCENA 2 — EL PROBLEMA: IA SIN METODOLOGÍA
# ═══════════════════════════════════════════════════════

**Duración**: 15 segundos (frames 150–600)
**Fondo**: Gris claro (#F5F8FC)
**Transición entrada**: Cross-fade desde escena 1 (10 frames)

---

### Layout (1920×1080)

```
┌────────────────────────────────────────────────────────────┐
│  IA sin Metodología: El Punto de Partida                   │
│  (36px, bold, navy, alineado izquierda con padding 80px)   │
│  ─────────────── línea cyan 3px ───────────────            │
│                                                            │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐      │
│  │             │   │             │   │             │      │
│  │  BLOQUE 1   │   │  BLOQUE 2   │   │  BLOQUE 3   │      │
│  │  EXPECTATIVA │   │  REALIDAD   │   │ DIAGNÓSTICO │      │
│  │             │   │             │   │             │      │
│  │  (350px w)  │   │  (500px w)  │   │  (450px w)  │      │
│  │             │   │             │   │             │      │
│  └─────────────┘   └─────────────┘   └─────────────┘      │
│                                                            │
│  ┌────────────────────────────────────────────────────┐    │
│  │  BARRA INFERIOR: cita/conclusión                    │   │
│  └────────────────────────────────────────────────────┘    │
└────────────────────────────────────────────────────────────┘
```

### Bloque 1 — La Expectativa (izquierda, x: 80px)

**Contenedor**: Tarjeta blanca con sombra suave (box-shadow: 0 4px 20px rgba(0,0,0,0.08)), border-radius: 16px, padding: 32px. Ancho: 350px.

**Contenido**:
- Icono de cohete (rocket) en navy, 64px, centrado arriba
- Texto: "Más herramientas IA" en 22px bold navy
- Texto: "= Más productividad" en 22px bold cyan
- Icono de flecha hacia abajo (↓) en 40px, gris, centrado, con animación bounce sutil
- Subtexto: "Dotamos al equipo de agentes de codificación" en 16px, gris texto

### Bloque 2 — La Realidad (centro, x: 500px, ligeramente más ancho)

**Contenedor**: Tarjeta con borde izquierdo rojo 4px (#E74C3C), fondo blanco, sombra más pronunciada. Ancho: 500px.

**Contenido — Dos sub-tarjetas apiladas**:

Sub-tarjeta A (arriba):
- Icono persona con "?" en rojo, 40px
- Label: "PERFILES JUNIOR" en 14px, uppercase, letter-spacing: 2px, rojo
- Texto: "No supieron aprovechar la herramienta" en 20px, bold, navy
- Detalle: "Falta de criterio para evaluar el output de la IA" en 16px, gris

Sub-tarjeta B (abajo, separación 16px):
- Icono persona con briefcase en rojo, 40px
- Label: "PERFILES SENIOR" en 14px, uppercase, letter-spacing: 2px, rojo
- Texto: "Tampoco obtuvieron rendimiento" en 20px, bold, navy
- Detalle: "Prompts improvisados, sin contexto del proyecto" en 16px, gris

### Bloque 3 — El Diagnóstico (derecha, x: 1070px)

**Contenedor**: Tarjeta con borde completo cyan 3px, fondo blanco, glow sutil cyan (box-shadow: 0 0 30px rgba(0,151,207,0.15)). Ancho: 450px.

**Contenido**:
- Icono de lupa grande (64px) con destello, color cyan
- Texto: "El problema" en 18px, gris
- Texto: "NO era la herramienta" en 28px, bold, navy, con "NO" en rojo
- Separador: línea cyan 2px, ancho 60%
- Texto: "Era la ausencia de un" en 20px, gris
- Texto: "HARNESS" en 36px, bold, cyan, con efecto glow sutil
- Tooltip/info: "El framework que rodea al modelo de IA" en 14px, italic, gris

### Barra inferior — Conclusión

Franja navy de 60px de alto en la parte baja:
- Texto en blanco 18px: "No necesitamos más IA. Necesitamos construir nuestro Harness."
- Icono de flecha (→) pulsando al final

### Animaciones detalladas

**Fase 1 (frames 150–240, ~3s): Entrada de la expectativa**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Título escena | 150 | Fade in + slide left | translateX: -30→0, 20 frames |
| Línea cyan bajo título | 170 | Width animation | width: 0→100%, 15 frames |
| Bloque 1 completo | 180 | Spring desde arriba | translateY: -60→0, opacity 0→1 |
| Icono cohete | 200 | Bounce | scale 0→1.2→1, 15 frames |
| Flecha ↓ | 220 | Fade + bounce continuo | Aparece y luego loop sutil arriba-abajo 5px |

**Fase 2 (frames 240–380, ~4.5s): Entrada de la realidad**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Bloque 2 contenedor | 240 | Shake horizontal | translateX: vibración ±8px durante 12 frames, luego settle |
| Sub-tarjeta Junior | 260 | Slide desde izquierda | translateX: -40→0, 20 frames |
| Sub-tarjeta Senior | 290 | Slide desde izquierda | translateX: -40→0, 20 frames (escalonado) |
| Borde rojo | 310 | Color fill | opacity 0→1, left border se "pinta" de arriba a abajo |

**Fase 3 (frames 380–520, ~4.5s): El diagnóstico**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Bloque 3 contenedor | 380 | Spring desde derecha | translateX: 60→0, spring suave |
| Icono lupa | 400 | Scale + rotate | scale 0→1, rotate -15→0 |
| "NO era la herramienta" | 420 | Fade in | "NO" aparece 10 frames después en rojo con pulse |
| "HARNESS" | 450 | Spring + glow | scale 0.8→1, text-shadow cyan pulsa 2 veces |
| Borde cyan | 460 | Border draw | Se dibuja como un trazo continuo alrededor de la tarjeta |

**Fase 4 (frames 520–600, ~2.5s): Conclusión**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Barra navy inferior | 520 | Slide up | translateY: 60→0 |
| Texto conclusión | 540 | Typewriter | Aparece letra a letra, 2 frames por carácter |
| Flecha → | 570 | Pulse loop | opacity 0.5→1→0.5, loop |

---

# ═══════════════════════════════════════════════════════
# ESCENA 3 — ¿QUÉ ES UN HARNESS?
# ═══════════════════════════════════════════════════════

**Duración**: 15 segundos (frames 600–1050)
**Fondo**: Navy oscuro (#00245D) con patrón sutil de grid de puntos (opacity 5%)
**Transición entrada**: Wipe horizontal de izquierda a derecha (15 frames)

---

### Layout (1920×1080)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  "Coding Agents are the most active frontier               │
│   in Applied AI" — OpenAI, AIE/LEAD 2025                   │
│  (cita en italic, 20px, blanco 70% opacity)                │
│                                                            │
│      ┌──────────────────────────────────┐                  │
│      │   ╔══════════════════════╗       │    ┌──────────┐  │
│      │   ║  ┌──────────────┐   ║       │    │          │  │
│      │   ║  │  USER        │   ║       │    │ COMPARA- │  │
│      │   ║  │  INTERFACE   │   ║       │    │ TIVA     │  │
│      │   ║  │  (IDE/CLI)   │   ║       │    │          │  │
│      │   ║  └──────────────┘   ║       │    │ Sin vs   │  │
│      │   ║       MODEL         ║       │    │ Con      │  │
│      │   ║   (GPT/Claude/...)  ║       │    │ Harness  │  │
│      │   ╚══════════════════════╝       │    │          │  │
│      │          HARNESS                 │    │          │  │
│      │  Prompts·Context·Tools·Loop      │    └──────────┘  │
│      └──────────────────────────────────┘                  │
│                                                            │
│  ● System Prompts  ● Context Mgmt  ● Tools  ● Agentic Loop│
│  (4 badges en fila, cyan sobre navy)                       │
└────────────────────────────────────────────────────────────┘
```

### Diagrama central — Capas concéntricas (x: 200px, centrado Y)

**Estructura de 3 rectángulos redondeados anidados** (no círculos — rectángulos con border-radius: 24px para aspecto más moderno):

**Capa exterior — HARNESS** (la más grande, ~700×450px):
- Borde: cyan 3px, con dash animation (border se mueve como línea punteada activa)
- Fondo: rgba(0,151,207, 0.08)
- Label "HARNESS" en 28px bold cyan, posición top-left dentro del borde
- 4 textos en las esquinas interiores:
  - Top-left: "System Prompts"
  - Top-right: "Context Management"
  - Bottom-left: "Agentic Loop"
  - Bottom-right: "Tools"
- Cada texto en 14px, blanco 60%

**Capa media — MODEL** (~400×250px, centrada dentro del Harness):
- Borde: blanco 2px, sólido
- Fondo: rgba(255,255,255, 0.05)
- Label "MODEL" en 20px bold blanco
- Subtexto: "GPT · Claude · Gemini" en 14px, blanco 50%

**Capa interior — USER INTERFACE** (~200×120px, centrada dentro de Model):
- Borde: blanco 1px
- Fondo: rgba(255,255,255, 0.1)
- Label "UI" en 16px bold blanco
- Subtexto: "IDE Plugin · CLI" en 12px, blanco 50%

### Comparativa (derecha, x: 1100px)

**Tabla visual** con 2 columnas, fondo semi-transparente:

| | Sin Harness | Con Harness |
|---|---|---|
| Header | Fondo rojo 20% | Fondo cyan 20% |
| Icono | ✗ (rojo) | ✓ (verde) |
| Línea 1 | LLM genérico | Agente productivo |
| Línea 2 | Código para reescribir | Código contextualizado |
| Línea 3 | Cada dev por libre | Equipo alineado |
| Línea 4 | Calidad impredecible | Resultados consistentes |

Cada fila tiene 48px de alto, texto 16px blanco, padding 16px.

### Badge de conclusión (abajo, centrado)

Rectángulo cyan con border-radius: 8px, fondo cyan 100%:
- Texto: "El modelo es el mismo para todos. La ventaja competitiva está en el Harness." en 18px bold, blanco
- Icono de rayo (⚡) a la izquierda

### Animaciones detalladas

**Fase 1 (frames 600–680): Cita y contexto**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Cita OpenAI | 600 | Fade in desde arriba | translateY: -20→0, opacity 0→0.7 |
| Comillas decorativas | 610 | Scale in | Comillas grandes "" en cyan, scale 0→1 |

**Fase 2 (frames 680–850): Diagrama de capas (de dentro hacia fuera)**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Capa UI (interior) | 680 | Scale from center | scale 0→1, opacity 0→1, 20 frames |
| Label "UI" | 700 | Fade in | 10 frames |
| Capa MODEL (media) | 720 | Scale from center | scale 0.5→1, opacity 0→1, 25 frames |
| Texto "GPT·Claude·Gemini" | 745 | Fade in letra a letra | Cada modelo aparece escalonado |
| Capa HARNESS (exterior) | 770 | Scale from center | scale 0.3→1, opacity 0→1, 30 frames |
| Borde dash animado | 800 | Inicio loop | strokeDashoffset animado, loop continuo |
| 4 labels esquinas | 810 | Fade in escalonado | Cada uno 8 frames después del anterior |

**Fase 3 (frames 850–970): Comparativa**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Tabla contenedor | 850 | Slide from right | translateX: 100→0, 20 frames |
| Headers Sin/Con | 870 | Fade in | Simultáneo |
| Fila 1 | 890 | Slide in | translateX: 30→0 |
| Fila 2 | 905 | Slide in | translateX: 30→0 |
| Fila 3 | 920 | Slide in | translateX: 30→0 |
| Fila 4 | 935 | Slide in | translateX: 30→0 |
| Iconos ✗/✓ | 940 | Pop in | scale 0→1.2→1 |

**Fase 4 (frames 970–1050): Conclusión**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Badge cyan | 970 | Spring from bottom | translateY: 40→0, spring |
| Icono rayo | 990 | Flash | opacity 0→1 con brightness pulse |

---

# ═══════════════════════════════════════════════════════
# ESCENA 4 — NUESTRA ESTRATEGIA: 3 PILARES
# ═══════════════════════════════════════════════════════

**Duración**: 12 segundos (frames 1050–1410)
**Fondo**: Blanco
**Transición entrada**: Fade through white (15 frames)

---

### Layout (1920×1080)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│           Nuestra Estrategia: El Harness                   │
│           (32px, bold, navy)                                │
│           "No necesitamos más IA. Necesitamos método."     │
│           (18px, italic, gris)                             │
│                                                            │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐  │
│  │    ◉            │ │    📄           │ │    📋           │  │
│  │  PILAR 1       │ │  PILAR 2       │ │  PILAR 3       │  │
│  │               │ │               │ │               │  │
│  │  Agentes      │ │  Contexto     │ │  Framework    │  │
│  │  Especializ.  │ │  Sintetizado  │ │  de Prompts   │  │
│  │               │ │               │ │               │  │
│  │  Backend      │ │  Funcional:   │ │  Requisito    │  │
│  │  Frontend     │ │   QUÉ hace    │ │      ↓        │  │
│  │  Testing      │ │  Técnico:     │ │  Plantilla    │  │
│  │  Database     │ │   CÓMO está   │ │      ↓        │  │
│  │  Reviewer     │ │   construido  │ │  Prompt       │  │
│  │               │ │               │ │      ↓        │  │
│  │  (520px)      │ │  (520px)      │ │  Agente       │  │
│  └───────┬────────┘ └───────┬────────┘ └───────┬────────┘  │
│          │                  │                  │           │
│          └──────────────────┼──────────────────┘           │
│                 ═══════════════════                        │
│                 LÍNEA CONECTORA CYAN                        │
│                 "Juntos forman el Harness"                  │
└────────────────────────────────────────────────────────────┘
```

### Pilar 1 — Agentes Especializados (x: 60px)

**Tarjeta**: 520×520px, fondo blanco, borde top cyan 4px, sombra suave, border-radius: 16px.

**Contenido**:
- Icono: Robot con badge de especialista (80px), color navy
- Título: "Agentes Especializados" en 24px bold navy
- Subtítulo: "Roles virtuales con system prompts propios" en 14px gris
- Separador: línea gris 1px
- Lista de agentes con bullets cyan:
  - Backend Expert (Java, Spring)
  - Frontend Expert (Angular, UI)
  - Testing Expert (Tests)
  - Database Expert (SQL)
  - Code Reviewer (Calidad)
- Cada item: 16px, navy, con icono pequeño a la izquierda

### Pilar 2 — Contexto Sintetizado (x: 640px)

**Tarjeta**: 520×520px, misma estética, borde top navy 4px.

**Contenido**:
- Icono: Libro abierto con lupa (80px), color cyan
- Título: "Contexto Sintetizado" en 24px bold navy
- Subtítulo: "El modelo no puede con todo el proyecto" en 14px gris
- Separador
- Dos bloques:
  - **FUNCIONAL** (badge azul): "QUÉ hace la aplicación"
    - Funcionalidades, flujos, reglas, casos de uso
  - **TÉCNICO** (badge cyan): "CÓMO está construida"
    - Arquitectura, patrones, convenciones, modelo datos
- Flecha entre "500K líneas" → "Documentos concisos"

### Pilar 3 — Framework de Prompts (x: 1220px)

**Tarjeta**: 520×520px, misma estética, borde top magenta 4px (#E6007E).

**Contenido**:
- Icono: Plantilla/template con engranaje (80px), color magenta
- Título: "Framework de Prompts" en 24px bold navy
- Subtítulo: "De requisito a instrucción ejecutable" en 14px gris
- Separador
- Diagrama vertical de flujo:
  ```
  Requisito (Jira/Docs)
       ↓  (flecha cyan)
  + Plantilla + Contexto
       ↓  (flecha cyan)
  Prompt Estructurado
       ↓  (flecha cyan)
  Agente Ejecuta
  ```
- Cada paso en una mini-pill con fondo gris claro

### Línea conectora inferior

Línea horizontal cyan 3px que conecta la base de los 3 pilares, con un nodo central (círculo 12px cyan) y texto "Juntos forman el Harness" en 16px italic cyan debajo.

### Animaciones detalladas

**Fase 1 (frames 1050–1120): Título**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Título "Nuestra Estrategia" | 1050 | Fade in | 15 frames |
| Subtítulo italic | 1070 | Fade in | 15 frames, delay |

**Fase 2 (frames 1120–1320): Pilares en secuencia**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Pilar 1 tarjeta | 1120 | Spring from bottom | translateY: 80→0, 25 frames |
| Pilar 1 icono | 1145 | Bounce | scale 0→1.15→1 |
| Pilar 1 lista items | 1160 | Fade in escalonado | Cada item 8 frames después |
| Pilar 2 tarjeta | 1190 | Spring from bottom | translateY: 80→0, 25 frames |
| Pilar 2 icono | 1215 | Bounce | scale 0→1.15→1 |
| Pilar 2 bloques F/T | 1230 | Slide in | Funcional desde izq, Técnico desde der |
| Pilar 3 tarjeta | 1260 | Spring from bottom | translateY: 80→0, 25 frames |
| Pilar 3 icono | 1285 | Bounce | scale 0→1.15→1 |
| Pilar 3 flujo vertical | 1300 | Cascade down | Cada paso aparece de arriba a abajo |

**Fase 3 (frames 1320–1410): Conexión**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Línea conectora | 1320 | Draw left→right | strokeDasharray animation, 40 frames |
| Nodo central | 1360 | Pop | scale 0→1 |
| Texto "Juntos forman..." | 1370 | Fade in | 20 frames |

---

# ═══════════════════════════════════════════════════════
# ESCENA 5 — LAS 5 FASES DEL HARNESS
# ═══════════════════════════════════════════════════════

**Duración**: 12 segundos (frames 1410–1770)
**Fondo**: Gris claro (#F5F8FC)
**Transición entrada**: Slide desde derecha (15 frames)

---

### Layout (1920×1080)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│      Construyendo el Harness: 5 Fases                      │
│      (32px, bold, navy)                                    │
│                                                            │
│  ┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐        │
│  │  1  │──▶│  2  │──▶│  3  │──▶│  4  │──▶│  5  │        │
│  │     │   │     │   │     │   │     │   │     │        │
│  │ 🤖  │   │ 📚  │   │ 📋  │   │ ⚡  │   │ ✓  │        │
│  └──┬──┘   └──┬──┘   └──┬──┘   └──┬──┘   └──┬──┘        │
│     │         │         │         │         │            │
│  Definir   Extraer   Framework  Generar   Integrar       │
│  Agentes   Contexto  Prompts    + Refinar  + Validar     │
│                                                            │
│  ◄════════ RETROALIMENTACIÓN CONTINUA ════════════►        │
│  (flecha curva debajo del timeline, cyan, animada)         │
│                                                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │ IA como  │ │ Mejora   │ │Agnóstico │ │Portable  │     │
│  │asistente │ │ continua │ │al modelo │ │a otros   │     │
│  │          │ │          │ │          │ │proyectos │     │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘     │
│  (4 badges de principios, pills, fondo blanco)             │
└────────────────────────────────────────────────────────────┘
```

### Timeline — Detalle de cada nodo

Cada nodo es un **cuadrado redondeado de 140×140px** con:
- Número de fase en 36px bold blanco, posición top
- Icono central de 48px
- Borde: 3px del color asignado
- Fondo: color asignado al 10% de opacity
- Sombra: suave, color de la fase

| Fase | Color | Icono | Label debajo (18px bold) |
|------|-------|-------|--------------------------|
| 1 | #0097CF (cyan) | Robot | Definir Agentes |
| 2 | #2ECC71 (verde) | Libro abierto | Extraer Contexto |
| 3 | #E6007E (magenta) | Template | Framework Prompts |
| 4 | #F39C12 (naranja) | Rayo/código | Generar + Refinar |
| 5 | #00245D (navy) | Shield/check | Integrar + Validar |

**Flechas conectoras**: SVG path con punta de flecha, color gris (#CBD5E1), 2px, entre cada nodo. Total 4 flechas.

### Flecha de retroalimentación

**SVG curva** que va desde debajo del nodo 5 hasta debajo del nodo 1, pasando por debajo del timeline (arco). Color cyan, 2px, con flechas pequeñas a lo largo indicando dirección ←. Texto "Retroalimentación continua" centrado sobre el arco, 14px, cyan.

### 4 Principios (badges en fila inferior)

Pills horizontales de 220×60px, fondo blanco, borde gris 1px, border-radius: 30px:
1. "IA como asistente, no reemplazo" — icono: persona + robot
2. "Mejora continua" — icono: flechas circulares
3. "Agnóstico al modelo" — icono: intercambio
4. "Portable a otros proyectos" — icono: maleta

### Animaciones detalladas

**Fase 1 (frames 1410–1460): Título**
| Elemento | Frame | Tipo |
|----------|-------|------|
| Título | 1410 | Fade in, 15 frames |

**Fase 2 (frames 1460–1620): Timeline nodo a nodo**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Nodo 1 | 1460 | Spring pop | scale 0→1, 20 frames |
| Label "Definir Agentes" | 1480 | Fade in below | 10 frames |
| Flecha 1→2 | 1490 | Draw right | stroke animation, 10 frames |
| Nodo 2 | 1500 | Spring pop | scale 0→1 |
| Label "Extraer Contexto" | 1520 | Fade in | |
| Flecha 2→3 | 1530 | Draw right | |
| Nodo 3 | 1540 | Spring pop | |
| Label "Framework Prompts" | 1560 | Fade in | |
| Flecha 3→4 | 1570 | Draw right | |
| Nodo 4 | 1580 | Spring pop | |
| Label "Generar + Refinar" | 1600 | Fade in | |
| Flecha 4→5 | 1610 | Draw right | |
| Nodo 5 | 1620 | Spring pop | |

**Fase 3 (frames 1640–1700): Retroalimentación**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Arco SVG | 1640 | Draw right→left | strokeDasharray animado, 40 frames |
| Texto "Retroalimentación" | 1680 | Fade in | |
| Flechitas ← sobre arco | 1690 | Pulse loop | Pequeñas flechas que se mueven por el arco |

**Fase 4 (frames 1700–1770): Principios**
| Elemento | Frame | Tipo |
|----------|-------|------|
| Badge 1 | 1700 | Spring from bottom |
| Badge 2 | 1715 | Spring from bottom |
| Badge 3 | 1730 | Spring from bottom |
| Badge 4 | 1745 | Spring from bottom |

---

# ═══════════════════════════════════════════════════════
# ESCENA 6 — FASE 1: AGENTES ESPECIALIZADOS
# ═══════════════════════════════════════════════════════

**Duración**: 14 segundos (frames 1770–2190)
**Fondo**: Blanco
**Barra superior**: Navy 50px, texto "FASE 1 · DEFINICIÓN DE AGENTES" en 18px bold blanco, alineado izquierda con padding 40px. Badge cyan "1" circular a la izquierda.

---

### Layout (1920×1080)

```
┌═══════════════════════════════════════════════════════════╗
│ ● 1  FASE 1 · DEFINICIÓN DE AGENTES                      │
╚═══════════════════════════════════════════════════════════╝
│                                                            │
│  "En lugar de un agente genérico, creamos especialistas    │
│   que replican los roles del equipo real"                   │
│  (20px, italic, gris, centrado)                            │
│                                                            │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     ┌─────────────┐ │
│  │ Back │ │Front │ │Test  │ │ DB   │     │ ANATOMÍA DE │ │
│  │ end  │ │ end  │ │ ing  │ │Expert│     │ UN AGENTE   │ │
│  │Expert│ │Expert│ │Expert│ │      │     │             │ │
│  └──────┘ └──────┘ └──────┘ └──────┘     │ # Backend   │ │
│  ┌──────┐ ┌──────┐ ┌──────┐              │ ## Identidad│ │
│  │Anali │ │Arqui │ │Code  │              │ Senior dev..│ │
│  │ sta  │ │tecto │ │Review│              │ ## Contexto │ │
│  │Func. │ │Técn. │ │  er  │              │ [inyección] │ │
│  └──────┘ └──────┘ └──────┘              │ ## Reglas   │ │
│                                          │ Controller→ │ │
│  ┌─────────────────────────────────────┐ │ Service→Repo│ │
│  │ Genérico vs Especializado (tabla)   │ └─────────────┘ │
│  └─────────────────────────────────────┘                  │
└────────────────────────────────────────────────────────────┘
```

### Grid de agentes (izquierda, x: 60px)

**Fila 1 — Agentes de Desarrollo** (4 tarjetas, 200×160px cada una, gap: 20px):

Cada tarjeta:
- Fondo blanco, border-radius: 12px, sombra suave
- Borde izquierdo de color del agente (4px)
- Icono del rol (40px) arriba
- Nombre del agente (18px bold navy)
- Especialización (14px gris)

| Agente | Color borde | Icono | Especialización |
|--------|-------------|-------|-----------------|
| Backend Expert | #0097CF | Servidor/gear | Java, Spring, APIs REST |
| Frontend Expert | #2ECC71 | Monitor/pantalla | Angular, componentes, UI |
| Testing Expert | #F39C12 | Bug/test tube | Tests unitarios, integración |
| Database Expert | #9B59B6 | Cilindro BD | SQL, migraciones, optimización |

**Fila 2 — Agentes de Soporte** (3 tarjetas, 200×160px):

| Agente | Color borde | Icono | Especialización |
|--------|-------------|-------|-----------------|
| Analista Funcional IA | #E74C3C | Documento/lupa | Extracción funcional |
| Arquitecto Técnico IA | #00245D | Plano/blueprint | Extracción técnica |
| Code Reviewer IA | #E6007E | Shield/check | Estándares, calidad, seguridad |

### Anatomía de un agente (derecha, x: 1100px)

**Tarjeta expandida**: 700×480px, fondo navy (#00245D), border-radius: 16px, borde cyan 2px.

**Contenido tipo "editor de código"**:
- Barra superior con 3 dots (rojo/amarillo/verde) simulando ventana terminal
- Título: "backend-expert.md" en 14px mono, blanco 70%
- Contenido en fuente monospace (Fira Code o similar), 14px:

```markdown
# Backend Expert

## Identidad y Rol
Desarrollador backend senior con 15+
años de experiencia en Java/Spring...

## Contexto del Proyecto
[Inyección automática de doc. técnica]

## Reglas de Generación
- Patrón: Controller → Service → Repository
- Usar Lombok en todas las entidades
- Incluir Javadoc en métodos públicos
- Tests unitarios obligatorios
- Nomenclatura: camelCase
```

El texto aparece con efecto **syntax highlighting**:
- `#` headers en cyan
- `##` subheaders en blanco bold
- Texto entre `[]` en verde
- `-` bullets en amarillo
- Keywords técnicas en magenta

### Tabla comparativa (abajo-izquierda, y: 780px)

Tabla minimalista de 900×180px:

| Aspecto | Agente genérico | Agente especializado |
|---------|-----------------|----------------------|
| Contexto | Hay que explicarlo cada vez | Ya conoce el proyecto |
| Patrones | Genera código genérico | Sigue convenciones del equipo |
| Consistencia | Variable | Comportamiento predecible |
| Calidad | Requiere más revisión | Código más alineado |

- Columna "genérico": texto rojo 30%, icono ✗
- Columna "especializado": texto cyan, icono ✓

### Animaciones detalladas

**Fase 1 (frames 1770–1830): Header + cita**
| Elemento | Frame | Tipo |
|----------|-------|------|
| Barra navy | 1770 | Slide from top, 10 frames |
| Cita italic | 1790 | Fade in, 15 frames |

**Fase 2 (frames 1830–1950): Grid de agentes**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Backend Expert | 1830 | Spring pop | scale 0→1, borde izq se pinta de arriba a abajo |
| Frontend Expert | 1850 | Spring pop | escalonado 20 frames |
| Testing Expert | 1870 | Spring pop | |
| Database Expert | 1890 | Spring pop | |
| Analista Funcional | 1910 | Spring pop | |
| Arquitecto Técnico | 1925 | Spring pop | |
| Code Reviewer | 1940 | Spring pop | |

**Fase 3 (frames 1950–2100): Anatomía del agente**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Tarjeta navy | 1950 | Slide from right | translateX: 100→0, 20 frames |
| Barra de dots | 1970 | Fade in | |
| Nombre archivo | 1980 | Fade in | |
| Contenido markdown | 1990 | Typewriter | Línea a línea, 8 frames por línea |
| Syntax highlighting | Progresivo | Color transition | Cada keyword cambia a su color al aparecer |

**Fase 4 (frames 2100–2190): Tabla comparativa**
| Elemento | Frame | Tipo |
|----------|-------|------|
| Tabla contenedor | 2100 | Slide from bottom, 15 frames |
| Filas | 2120 | Fade in escalonado, 10 frames cada una |
| Iconos ✗/✓ | 2160 | Pop in | scale 0→1.2→1 |

---

# ═══════════════════════════════════════════════════════
# ESCENA 7 — FASE 2: EXTRACCIÓN DE CONOCIMIENTO
# ═══════════════════════════════════════════════════════

**Duración**: 14 segundos (frames 2190–2610)
**Fondo**: Gris claro (#F5F8FC)
**Barra superior**: Navy 50px, texto "FASE 2 · EXTRACCIÓN DE CONOCIMIENTO" con badge "2" verde.

---

### Layout (1920×1080)

```
┌═══════════════════════════════════════════════════════════╗
│ ● 2  FASE 2 · EXTRACCIÓN DE CONOCIMIENTO                 │
╚═══════════════════════════════════════════════════════════╝
│                                                            │
│  ┌───────────────────────────────────────┐                 │
│  │  500.000+ líneas     ~128K tokens     │   EL PROBLEMA  │
│  │  ████████████████    ████             │   No cabe todo │
│  │  (proyecto)          (context window) │                │
│  └──────────────────┬────────────────────┘                 │
│                     ▼                                      │
│              ╔═══════════╗                                 │
│              ║  EMBUDO   ║                                 │
│              ║ Sintetizar║                                 │
│              ╚═════╤═════╝                                 │
│           ┌────────┴────────┐                              │
│     ┌─────┴─────┐     ┌─────┴─────┐                       │
│     │ FUNCIONAL │     │  TÉCNICO  │                       │
│     │ QUÉ hace  │     │ CÓMO está │                       │
│     │           │     │construido │                       │
│     └─────┬─────┘     └─────┬─────┘                       │
│     ┌─────┴─────┐     ┌─────┴─────┐                       │
│     │context-   │     │context-   │                       │
│     │funcional  │     │tecnico    │                       │
│     │.md        │     │.md        │                       │
│     └───────────┘     └───────────┘                       │
└────────────────────────────────────────────────────────────┘
```

### Bloque superior — El Problema (centrado, y: 100px)

**Visualización de escala**: Dos barras horizontales comparativas:
- Barra "Proyecto": 800px de ancho, color navy, label "500.000+ líneas de código" (24px bold)
- Barra "Context Window": 130px de ancho (proporcional), color cyan, label "~128K tokens" (24px bold)
- Texto: "No podemos dar TODO el proyecto al agente" en 20px rojo, con icono ⚠️

### Embudo central (y: 350px)

**SVG de embudo**: Forma de trapecio invertido, degradado navy→cyan, con texto "SINTETIZAR" en blanco bold centrado. Ancho arriba: 400px, ancho abajo: 200px, alto: 120px. Partículas/puntos que entran por arriba y salen organizados por abajo (animación de flujo).

### Dos columnas de resultado (y: 520px)

**Columna FUNCIONAL** (x: 350px, ancho: 480px):
- Tarjeta con borde top azul 4px (#3498DB)
- Header: "FUNCIONAL" en badge azul + "QUÉ hace la aplicación" en 20px bold
- Lista con bullets:
  - Funcionalidades y flujos de usuario
  - Reglas de negocio
  - Casos de uso
  - Entidades principales
- Fuentes (gris pequeño): "Docs cliente, manuales, código existente, BD"
- Documento resultado: Icono archivo "contexto-funcional.md" con tag "2-5K palabras"

**Columna TÉCNICO** (x: 920px, ancho: 480px):
- Tarjeta con borde top cyan 4px
- Header: "TÉCNICO" en badge cyan + "CÓMO está construida" en 20px bold
- Lista:
  - Arquitectura y stack tecnológico
  - Patrones de diseño
  - Convenciones de código
  - Modelo de datos
- Fuentes: "Código fuente, configs, scripts BD, doc técnica"
- Documento resultado: Icono archivo "contexto-tecnico.md" con tag "2-5K palabras"

### Nota inferior

Badge amarillo con icono ⟲: "La documentación NO es estática. Se actualiza con cada iteración." en 16px bold.

### Animaciones detalladas

**Fase 1 (frames 2190–2340): El problema de escala**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Barra "Proyecto" | 2190 | Width grow | width 0→800px, 30 frames, ease-out |
| Label "500K+" | 2220 | Counter | Contador 0→500.000, 20 frames |
| Barra "Context" | 2250 | Width grow | width 0→130px, 20 frames |
| Label "128K" | 2270 | Counter | |
| Texto "No podemos..." | 2290 | Fade in + shake | Texto aparece con micro-shake de advertencia |
| Icono ⚠️ | 2310 | Pulse | Flash amarillo 2 veces |

**Fase 2 (frames 2340–2420): Embudo**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Forma embudo | 2340 | Scale from top | scaleY 0→1, 25 frames |
| Texto "SINTETIZAR" | 2365 | Fade in | |
| Partículas flujo | 2380 | Stream animation | Puntos entran arriba caóticos, salen abajo ordenados |

**Fase 3 (frames 2420–2560): Dos columnas**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Columna FUNCIONAL | 2420 | Slide from left | translateX: -60→0 |
| Columna TÉCNICO | 2440 | Slide from right | translateX: 60→0 |
| Listas bullets | 2470 | Fade in escalonado | 8 frames por item |
| Archivos .md | 2520 | Pop in | scale 0→1 con icono de archivo |

**Fase 4 (frames 2560–2610): Nota**
| Elemento | Frame | Tipo |
|----------|-------|------|
| Badge amarillo | 2560 | Spring from bottom |
| Icono ⟲ | 2580 | Rotation | rotate 0→360° |

---

# ═══════════════════════════════════════════════════════
# ESCENA 8 — FASE 3: FRAMEWORK, REPOSITORIO, TOOLS Y SKILLS
# ═══════════════════════════════════════════════════════

**Duración**: 18 segundos (frames 2610–3150)
**Fondo**: Blanco
**Barra superior**: Navy 50px, texto "FASE 3 · FRAMEWORK · TOOLS · SKILLS" con badge "3" magenta.

> **Nota**: Esta escena se amplía a 18s (era 14s) para dar espacio a Tools, Scripts, MCPs y Skills.
> Los frames de escenas posteriores se desplazan +120 frames.

---

### Layout (1920×1080) — Dividido en 3 partes temporales

La escena se estructura en **3 actos** que transicionan dentro de la misma escena:

**Acto A (frames 2610–2850, ~8s)**: Flujo de transformación + Repositorio
**Acto B (frames 2850–3000, ~5s)**: Tools, Scripts y MCPs
**Acto C (frames 3000–3150, ~5s)**: Skills + Badge cierre

---

### ACTO A — Flujo de transformación + Repositorio (frames 2610–2850)

```
┌═══════════════════════════════════════════════════════════╗
│ ● 3  FASE 3 · FRAMEWORK · TOOLS · SKILLS                  │
╚═══════════════════════════════════════════════════════════╝
│                                                            │
│  FLUJO DE TRANSFORMACIÓN (horizontal, compacto)            │
│  ┌─────────┐     ┌──────────┐     ┌───────────┐           │
│  │ ENTRADA │ ──▶ │FRAMEWORK │ ──▶ │  PROMPT   │           │
│  │Jira/Docs│     │+Contexto │     │  LISTO    │           │
│  │         │     │+Tools    │     │           │           │
│  └─────────┘     │+Skills   │     └───────────┘           │
│                  └──────────┘                              │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  REPOSITORIO HARNESS (Teams)                         │  │
│  │  📁 /agentes     📁 /contexto    📁 /plantillas      │  │
│  │  📁 /tools       📁 /scripts     📁 /skills          │  │
│  │  📁 /mcps        📁 /ejemplos                        │  │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘
```

#### Flujo de transformación (y: 80px, centrado)

**3 bloques conectados por flechas** (versión compacta, height: 140px):

**Bloque ENTRADA** (240×140px):
- Fondo: gris claro, borde gris 2px, border-radius: 12px
- Icono: Jira logo simplificado + documento, 40px
- Título: "ENTRADA" en 14px uppercase bold gris
- Items: "Requisitos", "Tickets Jira", "Docs cliente" en 13px

**Flecha 1**: SVG path con punta, color navy, 50px.

**Bloque FRAMEWORK** (300×140px):
- Fondo: magenta 5%, borde magenta 2px, border-radius: 12px
- Icono: Engranaje + plantilla, 40px, magenta
- Título: "FRAMEWORK" en 14px uppercase bold magenta
- Items: "+ Plantilla", "+ Contexto", "+ Tools/Skills", "+ Reglas" en 13px

**Flecha 2**: Igual.

**Bloque PROMPT LISTO** (240×140px):
- Fondo: cyan 10%, borde cyan 3px, border-radius: 12px, glow
- Icono: Documento con check, 40px, cyan
- Título: "PROMPT LISTO" en 14px uppercase bold cyan
- Items: "Estructurado", "Contextualizado", "Con herramientas" en 13px

#### Repositorio Harness completo (y: 280px, centrado, 1760×380px)

**Tarjeta** fondo blanco, borde navy 2px, border-radius: 16px, sombra suave.

**Header**: "Repositorio del Harness (Teams)" en 22px bold navy, con icono Teams.

**Contenido tipo explorador de archivos** (fuente mono, 15px), distribuido en **2 columnas**:

**Columna izquierda** (contenido clásico):
```
📁 /agentes
│  ├── backend-expert.md
│  ├── frontend-expert.md
│  ├── testing-expert.md
│  └── code-reviewer.md
📁 /contexto
│  ├── 📁 /funcional
│  │   ├── funcionalidades.md
│  │   └── reglas-negocio.md
│  └── 📁 /tecnico
│      ├── arquitectura.md
│      └── patrones-codigo.md
📁 /plantillas
│  ├── tpl-nuevo-endpoint.md
│  ├── tpl-nuevo-componente.md
│  └── tpl-crud-completo.md
```

**Columna derecha** (activos nuevos, destacados con borde cyan):
```
📁 /tools                    ← NUEVO
│  ├── jira-connector.py
│  ├── db-query-tool.py
│  └── oracle-forms-reader.py
📁 /scripts                  ← NUEVO
│  ├── docx-to-markdown.py
│  ├── pptx-extractor.py
│  ├── markdown-to-docx.py
│  └── binary-parser.py
📁 /mcps                     ← NUEVO
│  ├── jira-mcp-server/
│  ├── database-mcp-server/
│  └── docs-converter-mcp/
📁 /skills                   ← NUEVO
│  ├── skill-generate-crud.md
│  ├── skill-review-code.md
│  └── skill-create-tests.md
📁 /ejemplos
```

Las carpetas /tools, /scripts, /mcps y /skills tienen un badge "NUEVO" en cyan a la derecha.
Iconos: carpetas amarillo, .md azul claro, .py verde, carpetas MCP en magenta.

---

### ACTO B — Tools, Scripts y MCPs (frames 2850–3000)

> El repositorio hace un **zoom/slide** hacia arriba y entra un panel nuevo que detalla los 3 tipos de activos técnicos.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Activos del Harness: más allá de los prompts              │
│  (24px, bold, navy)                                        │
│                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   🔧 TOOLS   │  │  📜 SCRIPTS  │  │  🔌 MCPs     │     │
│  │              │  │              │  │              │     │
│  │ Funciones    │  │ Automatiza-  │  │ Model Context│     │
│  │ que los      │  │ ciones del   │  │ Protocol     │     │
│  │ agentes      │  │ equipo para  │  │ servers que  │     │
│  │ invocan      │  │ tareas       │  │ conectan     │     │
│  │ directamente │  │ repetitivas  │  │ agentes con  │     │
│  │              │  │              │  │ sistemas     │     │
│  │ • Consulta   │  │ • DOCX ↔ MD  │  │ • Jira MCP   │     │
│  │   Jira       │  │ • PPTX → MD  │  │ • Database   │     │
│  │ • Query BD   │  │ • Oracle     │  │   MCP        │     │
│  │ • Leer       │  │   Forms →    │  │ • Docs       │     │
│  │   binarios   │  │   texto      │  │   Converter  │     │
│  │ • Validar    │  │ • Conversión │  │   MCP        │     │
│  │   schemas    │  │   binarios   │  │              │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                            │
│  "El equipo no solo usa IA. Construye herramientas         │
│   para que la IA sea más útil."                            │
└────────────────────────────────────────────────────────────┘
```

#### 3 tarjetas de activos técnicos (distribuidas en fila, gap: 30px)

**Tarjeta TOOLS** (520×440px):
- Borde top: naranja (#F39C12) 4px
- Fondo: blanco, border-radius: 16px, sombra
- Icono: Llave inglesa/wrench (64px), naranja
- Título: "TOOLS" en 24px bold navy
- Subtítulo: "Funciones que los agentes invocan directamente" en 14px gris
- Separador
- Lista de ejemplos reales (16px, navy):
  - Consultar tickets de Jira
  - Ejecutar queries contra BD
  - Leer binarios de Oracle Forms
  - Validar schemas de datos
  - Analizar estructura de tablas
- Cada item con bullet naranja (●)

**Tarjeta SCRIPTS** (520×440px):
- Borde top: verde (#2ECC71) 4px
- Icono: Terminal/código (64px), verde
- Título: "SCRIPTS" en 24px bold navy
- Subtítulo: "Automatizaciones creadas por el equipo" en 14px gris
- Lista:
  - DOCX → Markdown (y viceversa)
  - PPTX → Markdown extractor
  - Oracle Forms → texto legible
  - Conversión de binarios legacy
  - Parseo de datos estructurados
- Cada item con bullet verde

**Tarjeta MCPs** (520×440px):
- Borde top: magenta (#E6007E) 4px
- Icono: Enchufe/plug con red (64px), magenta
- Título: "MCPs" en 24px bold navy
- Subtítulo label: "Model Context Protocol" en 12px uppercase, letter-spacing: 2px
- Subtítulo: "Servidores que conectan agentes con sistemas reales" en 14px gris
- Lista:
  - Jira MCP Server (leer/escribir tickets)
  - Database MCP (consultas en vivo)
  - Docs Converter MCP (transformar formatos)
- Cada item con bullet magenta
- Badge extra: "Estándar abierto de Anthropic" en 11px, pill gris

#### Frase clave (centrada, y: 940px)

Texto en 18px italic navy: "El equipo no solo usa IA. Construye herramientas para que la IA sea más útil."
Con icono de herramienta (🔧) a la izquierda y icono de rayo (⚡) a la derecha.

---

### ACTO C — Skills + Badge cierre (frames 3000–3150)

> Las 3 tarjetas hacen slide hacia arriba y entra un panel de Skills con el badge final.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Skills: Bloques de Conocimiento Reutilizables             │
│  (24px, bold, navy)                                        │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                      │  │
│  │  Una Skill es un bloque de instrucciones + contexto  │  │
│  │  + herramientas empaquetado para una tarea concreta. │  │
│  │  El developer lo activa y el agente ejecuta con      │  │
│  │  todo el conocimiento necesario precargado.          │  │
│  │                                                      │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │  /generate  │ │  /review    │ │  /create     │          │
│  │   -crud     │ │   -code     │ │   -tests     │          │
│  │             │ │             │ │             │          │
│  │ Agente +    │ │ Agente +    │ │ Agente +    │          │
│  │ Contexto +  │ │ Checklist + │ │ Patrones +  │          │
│  │ Plantilla + │ │ Estándares +│ │ Framework + │          │
│  │ Tools BD    │ │ Tool Lint   │ │ Tool Test   │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Flujo:  Tarea Jira → Activar Skill → Agente        │  │
│  │          ejecuta con contexto + tools → Código listo │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ★ "Todo esto YA EXISTE. No es un plan futuro."            │
└────────────────────────────────────────────────────────────┘
```

#### Definición de Skill (y: 120px, centrado)

**Tarjeta explicativa** 1600×120px, fondo cyan 5%, borde cyan 2px, border-radius: 12px:
- Texto: "Una Skill es un bloque de instrucciones + contexto + herramientas empaquetado para una tarea concreta. El developer lo activa y el agente ejecuta con todo el conocimiento necesario precargado." en 18px navy.
- Icono: Paquete/caja con rayo a la izquierda (48px), cyan.

#### 3 ejemplos de Skills (y: 320px)

3 tarjetas de 480×300px, fondo navy, borde cyan 1px, border-radius: 12px:

**Skill 1 — /generate-crud**
- Header tipo terminal: `$ /generate-crud` en 18px mono cyan, con cursor parpadeante
- Contenido (14px mono blanco 80%):
  ```
  Incluye:
  ├── Agente: Backend Expert
  ├── Contexto: técnico + funcional
  ├── Plantilla: tpl-crud-completo.md
  └── Tool: database-query (schema)
  ```
- Tag: "Full stack CRUD en minutos" en 12px, pill verde

**Skill 2 — /review-code**
- Header: `$ /review-code` en 18px mono verde
- Contenido:
  ```
  Incluye:
  ├── Agente: Code Reviewer
  ├── Checklist: estándares proyecto
  ├── Patrones: código de referencia
  └── Tool: linting + security scan
  ```
- Tag: "Review automático pre-MR" en 12px, pill naranja

**Skill 3 — /create-tests**
- Header: `$ /create-tests` en 18px mono magenta
- Contenido:
  ```
  Incluye:
  ├── Agente: Testing Expert
  ├── Patrones: tests existentes
  ├── Framework: JUnit + Mockito
  └── Tool: test-runner
  ```
- Tag: "Tests unitarios + integración" en 12px, pill cyan

#### Flujo simplificado (y: 700px)

Barra horizontal con 4 pasos conectados por flechas:
```
Tarea Jira  →  Activar Skill  →  Agente ejecuta con contexto + tools  →  Código listo
```
Cada paso en una pill (200×40px), flechas cyan entre ellas.

#### Badge inferior (centrado, y: 950px)

Rectángulo cyan, border-radius: 8px, padding: 16px 32px:
- Icono estrella (★) a la izquierda
- Texto: "Todo esto YA EXISTE. No es un plan futuro." en 20px bold blanco
- Efecto: glow/pulse suave

---

### Animaciones detalladas — Escena 8 completa

**ACTO A — Flujo + Repositorio (frames 2610–2850)**

| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Barra superior | 2610 | Slide from top | 10 frames |
| Bloque ENTRADA | 2620 | Fade in | 15 frames |
| Flecha 1 | 2645 | Draw right | strokeDasharray, 12 frames |
| Bloque FRAMEWORK | 2660 | Spring pop | scale 0.8→1 |
| Flecha 2 | 2685 | Draw right | |
| Bloque PROMPT LISTO | 2700 | Spring + glow | scale 0.8→1, box-shadow pulse |
| Tarjeta repositorio | 2730 | Slide from bottom | translateY: 60→0, 20 frames |
| Columna izq (clásico) | 2755 | Expand tree | Carpetas se abren escalonado |
| Columna der (nuevo) | 2780 | Expand tree + highlight | Carpetas se abren, badges "NUEVO" pulsan |
| Badges "NUEVO" | 2800 | Pop + glow | scale 0→1, glow cyan 2 pulsos |
| Transición a Acto B | 2830 | Slide up | Todo sube fuera de pantalla, 20 frames |

**ACTO B — Tools, Scripts, MCPs (frames 2850–3000)**

| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Título "Activos del Harness" | 2850 | Fade in | 12 frames |
| Tarjeta TOOLS | 2870 | Spring from bottom | translateY: 80→0 |
| Tarjeta TOOLS icono | 2890 | Bounce | scale 0→1.15→1 |
| Tarjeta TOOLS lista | 2900 | Fade in escalonado | 6 frames/item |
| Tarjeta SCRIPTS | 2910 | Spring from bottom | escalonado |
| Tarjeta SCRIPTS icono | 2925 | Bounce | |
| Tarjeta SCRIPTS lista | 2935 | Fade in escalonado | |
| Tarjeta MCPs | 2945 | Spring from bottom | |
| Tarjeta MCPs icono | 2960 | Bounce | |
| Tarjeta MCPs lista | 2970 | Fade in escalonado | |
| Frase "El equipo no solo..." | 2985 | Fade in | |
| Transición a Acto C | 2990 | Slide up | 10 frames |

**ACTO C — Skills + Badge (frames 3000–3150)**

| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Título "Skills" | 3000 | Fade in | 12 frames |
| Tarjeta explicativa | 3015 | Slide from top | translateY: -40→0 |
| Skill /generate-crud | 3035 | Spring pop | |
| Header terminal | 3045 | Typewriter | `$ /generate-crud` letra a letra |
| Contenido skill 1 | 3055 | Fade in tree | Árbol se expande |
| Skill /review-code | 3070 | Spring pop | escalonado |
| Header + contenido | 3080 | Typewriter + tree | |
| Skill /create-tests | 3100 | Spring pop | |
| Header + contenido | 3110 | Typewriter + tree | |
| Flujo simplificado | 3125 | Draw left→right | Pasos aparecen en cascada |
| Badge "YA EXISTE" | 3135 | Spring + pulse | Glow cyan 2 pulsos |

---

# ═══════════════════════════════════════════════════════
# ESCENA 9 — NUEVOS ROLES DEL EQUIPO
# ═══════════════════════════════════════════════════════

**Duración**: 15 segundos (frames 3150–3600)
**Fondo**: Navy (#00245D) con overlay pattern sutil
**Transición entrada**: Wipe vertical de arriba a abajo

---

### Layout (1920×1080)

```
┌════════════════════════════════════════════════════════════┐
│           Roles y Responsabilidades                        │
│           (32px, bold, blanco)                             │
│                                                            │
│  "La metodología redefine cómo trabaja el equipo"          │
│  (18px, italic, cyan)                                      │
│                                                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │ DEFINITION  │  │ EXECUTION   │  │ VALIDATION  │        │
│  │ PHASE       │─▶│ PHASE       │─▶│ PHASE       │        │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘        │
│         │                │                │               │
│  ┌──────┴──────┐  ┌──────┴──────┐  ┌──────┴──────┐        │
│  │             │  │             │  │             │        │
│  │ TECH LEAD  │  │  AI LEADS   │  │    MR       │        │
│  │    AI      │  │ (Front/Back)│  │ VALIDATORS  │        │
│  │             │  │             │  │             │        │
│  │             │  │  DEVELOPERS │  │             │        │
│  │             │  │             │  │             │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                            │
│  (abajo: frase "No reemplaza personas: transforma roles")  │
└════════════════════════════════════════════════════════════┘
```

### Barra de 3 fases (y: 180px)

3 rectángulos horizontales conectados por flechas:

| Fase | Ancho | Color fondo | Color texto |
|------|-------|-------------|-------------|
| DEFINITION PHASE | 480px | cyan 20% | blanco |
| EXECUTION PHASE | 480px | magenta 20% | blanco |
| VALIDATION PHASE | 480px | verde 20% (#27AE60 20%) | blanco |

Cada uno con border-radius: 8px, height: 50px, texto 18px bold centrado.
Flechas SVG (▶) entre cada fase, color blanco 50%.

### Bloque Tech Lead AI (x: 60px, y: 300px)

**Tarjeta** 540×500px, fondo rgba(255,255,255,0.08), borde izquierdo cyan 4px, border-radius: 12px.

**Contenido**:
- Icono: Persona con corona/estrella (64px), cyan
- Título: "Tech Lead AI / Architect" en 24px bold blanco
- Fase: Badge "DEFINITION" en 12px, fondo cyan
- Separador: línea blanca 10% opacity
- Responsabilidades (16px, blanco 80%):
  - Extrae y documenta reglas de negocio
  - Crea agentes y mantiene el repositorio
  - Define framework de prompting
  - Prepara entorno y contexto
  - Prototipo rápido + PRD
- Cada item con bullet cyan (●)

### Bloque AI Leads + Developers (x: 660px, y: 300px)

**Contenedor** 540×500px, dos sub-tarjetas apiladas:

**Sub-tarjeta AI Leads** (540×230px):
- Borde izquierdo magenta 4px
- Icono: 2 personas con engranaje, magenta
- Título: "AI Leads (Front / Back)" en 22px bold blanco
- Fase: Badge "EXECUTION" magenta
- Responsabilidades:
  - Planificación por funcionalidades/tecnología
  - Refinan prompts y agentes específicos
  - Definen componentes reutilizables (Tools)
  - Soporte directo al Dev Team

**Sub-tarjeta Developers** (540×230px):
- Borde izquierdo naranja 4px (#F39C12)
- Icono: Persona con código, naranja
- Título: "Developers" en 22px bold blanco
- Fase: Badge "EXECUTION" naranja
- Responsabilidades:
  - Ejecutan prompts predefinidos
  - Validan y testean código generado
  - Preparan features para integración

### Bloque MR Validators (x: 1260px, y: 300px)

**Tarjeta** 540×500px, borde izquierdo verde 4px.

- Icono: Shield con check, verde
- Título: "MR Validators" en 24px bold blanco
- Fase: Badge "VALIDATION" verde
- Responsabilidades:
  - Revisión funcional del resultado
  - Revisión técnica del código IA
  - Validación de estándares y patrones
  - Aprobación de Merge Requests
- Extra: Mini checklist visual con 4 checks animados

### Frase inferior (y: 900px, centrada)

Texto: "No reemplaza personas. Transforma cómo trabajan." en 22px bold blanco, con "Transforma" en cyan.

### Animaciones detalladas

**Fase 1 (frames 3150–3220): Header + fases**
| Elemento | Frame | Tipo |
|----------|-------|------|
| Título "Roles" | 3030 | Fade in, 15 frames |
| Subtítulo | 3050 | Fade in |
| DEFINITION pill | 3070 | Slide from left |
| Flecha | 3085 | Draw |
| EXECUTION pill | 3090 | Slide in |
| Flecha | 3105 | Draw |
| VALIDATION pill | 3110 | Slide from right |

**Fase 2 (frames 3240–3470): Bloques de roles**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Tech Lead tarjeta | 3120 | Spring from left | 25 frames |
| Tech Lead icono | 3145 | Bounce | scale 0→1.1→1 |
| Tech Lead items | 3160 | Fade in escalonado | 8 frames/item |
| AI Leads tarjeta | 3200 | Spring from bottom | |
| AI Leads items | 3230 | Fade in escalonado | |
| Developers tarjeta | 3260 | Spring from bottom | |
| Developers items | 3290 | Fade in escalonado | |
| MR Validators tarjeta | 3320 | Spring from right | |
| MR Validators items | 3350 | Fade in escalonado | |

**Fase 3 (frames 3470–3540): Conexiones visuales**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Líneas de flujo fase→rol | 3350 | Draw lines | Líneas punteadas verticales de cada fase a su bloque |
| Glow en badges de fase | 3380 | Pulse | Cada badge de fase pulsa 1 vez |

**Fase 4 (frames 3540–3600): Frase cierre**
| Elemento | Frame | Tipo |
|----------|-------|------|
| Frase | 3420 | Fade in |
| "Transforma" | 3440 | Color morph | Blanco → cyan con glow |

---

# ═══════════════════════════════════════════════════════
# ESCENA 10 — FASES 4 y 5: GENERACIÓN + VALIDACIÓN
# ═══════════════════════════════════════════════════════

**Duración**: 14 segundos (frames 3600–4020)
**Fondo**: Blanco
**Barra superior**: Navy 50px, texto "FASES 4-5 · GENERACIÓN Y VALIDACIÓN"

---

### Layout (1920×1080) — Dividido en dos mitades

```
┌═══════════════════════════════════════════════════════════╗
│ ● 4-5  FASES 4-5 · GENERACIÓN Y VALIDACIÓN               │
╚═══════════════════════════════════════════════════════════╝
│                                                            │
│  ┌──── FASE 4: GENERACIÓN ────┐ │ ┌── FASE 5: VALIDACIÓN ─┐│
│  │                            │ │ │                       ││
│  │     ┌──────┐               │ │ │  CHECKLIST            ││
│  │     │Cargar│               │ │ │  ☑ Estándares         ││
│  │     │prompt│               │ │ │  ☑ Calidad técnica    ││
│  │     └──┬───┘               │ │ │  ☑ Seguridad          ││
│  │        ▼                   │ │ │  ☑ Funcionalidad      ││
│  │     ┌──────┐               │ │ │                       ││
│  │     │Genera│               │ │ │  ROLES:               ││
│  │     │código│               │ │ │  Developer → Reviewer  ││
│  │     └──┬───┘               │ │ │  → Tech Lead → QA     ││
│  │        ▼                   │ │ │                       ││
│  │     ┌──────┐  ←── Iterar  │ │ │  MR Aprobado ✓        ││
│  │     │Revisar│              │ │ │       │               ││
│  │     │refinar│              │ │ │    MERGE              ││
│  │     └──────┘               │ │ │                       ││
│  │                            │ │ │                       ││
│  │  RETROALIMENTACIÓN:        │ │ │                       ││
│  │  → Fase 1, 2 ó 3          │ │ │                       ││
│  └────────────────────────────┘ │ └───────────────────────┘│
│                                                            │
│  ┌──────────── MÉTRICAS OBJETIVO ────────────────────┐     │
│  │ >70% aprovech. │ <3 iter. │ 60%+ MR OK │ 0 critic│    │
│  └───────────────────────────────────────────────────┘     │
└────────────────────────────────────────────────────────────┘
```

### Mitad izquierda — Fase 4: Generación (x: 40px, ancho: 880px)

**Header**: "FASE 4: GENERACIÓN Y REFINAMIENTO" en 22px bold navy, badge naranja "4".

**Ciclo de trabajo** (diagrama vertical tipo flowchart):

5 pasos en cajas redondeadas (180×50px cada una) conectados por flechas:

| Paso | Color | Icono | Texto |
|------|-------|-------|-------|
| 1 | Cyan bg 10% | Upload | Cargar prompt + agente |
| 2 | Navy bg 10% | Zap/rayo | Ejecutar generación |
| 3 | Naranja bg 10% | Eye | Revisar código generado |
| 4 | Rojo bg 10% | Wrench | Depurar y corregir |
| 5 | Verde bg 10% | Repeat | Iterar si necesario |

Flecha curva del paso 5 volviendo al paso 2 (loop de iteración), con label "Si no OK".
Flecha de salida del paso 3 hacia la derecha: "Si OK → Fase 5".

**Retroalimentación** (abajo del ciclo, y: 650px):
3 flechas hacia atrás con labels:
- "Falta contexto → Actualizar Fase 2" (flecha azul)
- "Patrón incorrecto → Actualizar Fase 3" (flecha magenta)
- "Agente mal config → Ajustar Fase 1" (flecha cyan)

**Frase clave**: "El developer no escribe: supervisa, guía y valida" en 18px bold navy, centrado bajo el ciclo.

### Mitad derecha — Fase 5: Validación (x: 960px, ancho: 880px)

**Header**: "FASE 5: INTEGRACIÓN Y VALIDACIÓN" en 22px bold navy, badge verde "5".

**Regla principal** (banner rojo 10% con borde rojo):
"TODO código generado por IA pasa por VALIDACIÓN HUMANA" en 16px bold, "VALIDACIÓN HUMANA" en rojo grande.

**Checklist visual** (4 items, cada uno 400×60px):

| Check | Categoría | Detalle | Icono |
|-------|-----------|---------|-------|
| ☑ | Estándares | Nomenclatura, estructura, sin código muerto | Regla/ruler |
| ☑ | Calidad técnica | Patrones proyecto, incluye tests | Diamante |
| ☑ | Seguridad | Sin secrets, validación inputs, SQL/XSS | Shield |
| ☑ | Funcionalidad | Criterios aceptación, edge cases | Target |

Cada check: checkbox animada (gris → verde con check), texto 16px.

**Flujo de MR** (mini diagrama):
```
Código refinado → Crear MR → Review → ✓ Merge / ✗ Volver Fase 4
```

### Barra de métricas (abajo, centrada, y: 940px)

4 KPIs en fila, cada uno en tarjeta de 380×80px:

| KPI | Valor | Color | Icono |
|-----|-------|-------|-------|
| Código aprovechable | >70% | Cyan | Gráfico barras |
| Iteraciones/tarea | <3 | Navy | Refresh |
| MRs OK a primera | 60%+ | Verde | Check doble |
| Issues críticos seguridad | 0 | Rojo→Verde | Shield |

### Animaciones detalladas

**Fase 1 (frames 3600–3680): Headers**
| Elemento | Frame | Tipo |
|----------|-------|------|
| Barra superior | 3480 | Slide from top |
| Header Fase 4 | 3500 | Fade in |
| Header Fase 5 | 3510 | Fade in |
| Línea divisoria central | 3520 | Draw top→bottom |

**Fase 2 (frames 3680–3840): Ciclo de generación (izquierda)**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Paso 1 "Cargar" | 3560 | Spring from left | |
| Flecha ↓ | 3580 | Draw | |
| Paso 2 "Generar" | 3590 | Spring | |
| Flecha ↓ | 3610 | Draw | |
| Paso 3 "Revisar" | 3620 | Spring | |
| Flecha ↓ | 3640 | Draw | |
| Paso 4 "Depurar" | 3650 | Spring | |
| Flecha ↓ | 3670 | Draw | |
| Paso 5 "Iterar" | 3680 | Spring | |
| Flecha loop (5→2) | 3700 | Draw curve | Arco se dibuja de abajo a arriba |
| Flechas retro | 3710 | Fade in escalonado | |

**Fase 3 (frames 3820–3960): Validación (derecha)**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Banner rojo | 3700 | Slide from right | |
| "VALIDACIÓN HUMANA" | 3720 | Scale + bold flash | |
| Check Estándares | 3740 | Checkbox animation | Box aparece, luego check se dibuja |
| Check Calidad | 3760 | Checkbox animation | |
| Check Seguridad | 3780 | Checkbox animation | |
| Check Funcionalidad | 3800 | Checkbox animation | |
| Flujo MR | 3820 | Draw left→right | |

**Fase 4 (frames 3960–4020): Métricas**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| KPI 1 ">70%" | 3840 | Counter animation | 0→70, bounce at end |
| KPI 2 "<3" | 3855 | Counter animation | |
| KPI 3 "60%+" | 3870 | Counter animation | |
| KPI 4 "0" | 3885 | Counter + color | Rojo→verde transition |

---

# ═══════════════════════════════════════════════════════
# ESCENA 11 — RESULTADOS Y MÉTRICAS
# ═══════════════════════════════════════════════════════

**Duración**: 12 segundos (frames 4020–4380)
**Fondo**: Gris claro (#F5F8FC)
**Transición entrada**: Cross-fade

---

### Layout (1920×1080)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│      Lo que no se mide, no se mejora                       │
│      (28px, bold, navy)                                    │
│                                                            │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐  │
│  │   20-40%  │ │   >70%    │ │   30-50%  │ │   >90%    │  │
│  │  ████░░░  │ │  ██████░  │ │  █████░░  │ │  ████████ │  │
│  │           │ │           │ │           │ │           │  │
│  │ Reducción │ │  Código   │ │ Reducción │ │Adherencia │  │
│  │ tiempo    │ │aprovecha- │ │   tiempo  │ │estándares │  │
│  │ desarroll │ │   ble     │ │ onboarding│ │           │  │
│  │           │ │           │ │           │ │           │  │
│  │ 6 meses  │ │  3 meses  │ │  6 meses  │ │  3 meses  │  │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘  │
│                                                            │
│  ┌────────────────────────────────────────────────────┐    │
│  │           ANTES              →          AHORA      │    │
│  │  Prompt improvisado          Prompt estructurado   │    │
│  │  Código genérico             Código contextualizado│    │
│  │  Reescribir todo             Refinar detalles      │    │
│  │  Cada dev por libre          Equipo alineado       │    │
│  └────────────────────────────────────────────────────┘    │
└────────────────────────────────────────────────────────────┘
```

### 4 KPIs grandes (y: 160px, distribuidos en fila)

Cada KPI es una **tarjeta de 400×340px**, fondo blanco, border-radius: 16px, sombra suave:

**KPI 1 — Reducción tiempo desarrollo**
- Número grande: "20-40%" en 56px bold cyan
- Barra de progreso: fondo gris, relleno cyan animado hasta 30% (representativo)
- Label: "Reducción tiempo de desarrollo" en 18px navy
- Plazo: Badge "6 meses" en 12px, pill gris

**KPI 2 — Código aprovechable**
- Número grande: ">70%" en 56px bold verde (#27AE60)
- Barra de progreso: relleno verde hasta 70%
- Label: "Código aprovechable generado por IA" en 18px navy
- Plazo: Badge "3 meses"

**KPI 3 — Reducción onboarding**
- Número grande: "30-50%" en 56px bold magenta
- Barra de progreso: relleno magenta hasta 40%
- Label: "Reducción tiempo onboarding" en 18px navy
- Plazo: Badge "6 meses"

**KPI 4 — Adherencia estándares**
- Número grande: ">90%" en 56px bold navy
- Barra de progreso: relleno navy hasta 90%
- Label: "Adherencia a estándares del proyecto" en 18px navy
- Plazo: Badge "3 meses"

### Tabla Antes vs Ahora (y: 600px, centrada)

**Tabla** 1600×340px, dos columnas, con header row:

| | ANTES (fondo rojo 5%) | AHORA (fondo cyan 5%) |
|---|---|---|
| Icono | ✗ rojo | ✓ cyan |
| Header | 20px bold "ANTES" rojo | 20px bold "AHORA" cyan |
| Fila 1 | Prompt improvisado | Prompt estructurado |
| Fila 2 | Código genérico | Código contextualizado |
| Fila 3 | Reescribir todo | Refinar detalles |
| Fila 4 | Cada developer por libre | Equipo alineado con metodología |

Flecha central grande (→) entre columnas, color navy, con efecto de transformación.

Cada fila "ANTES" tiene texto con efecto tachado sutil (text-decoration: line-through, opacity 60%), mientras que "AHORA" está en bold y con highlight.

### Animaciones detalladas

**Fase 1 (frames 4020–4070): Título**
| Elemento | Frame | Tipo |
|----------|-------|------|
| "Lo que no se mide..." | 3900 | Fade in, 15 frames |

**Fase 2 (frames 4070–4220): KPIs con counter**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| KPI 1 tarjeta | 3950 | Spring from bottom | |
| KPI 1 counter | 3970 | Animated count | 0% → 20-40%, 25 frames |
| KPI 1 barra | 3970 | Width grow | 0→30%, synchronized con counter |
| KPI 2 tarjeta | 3990 | Spring from bottom | |
| KPI 2 counter | 4010 | Animated count | 0% → >70% |
| KPI 2 barra | 4010 | Width grow | 0→70% |
| KPI 3 tarjeta | 4030 | Spring from bottom | |
| KPI 3 counter | 4050 | Animated count | |
| KPI 3 barra | 4050 | Width grow | |
| KPI 4 tarjeta | 4070 | Spring from bottom | |
| KPI 4 counter | 4090 | Animated count | |
| KPI 4 barra | 4090 | Width grow | 0→90% (la más llena, impactante) |

**Fase 3 (frames 4220–4380): Tabla Antes vs Ahora**
| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Columna ANTES | 4100 | Slide from left | translateX: -60→0 |
| Columna AHORA | 4120 | Slide from right | translateX: 60→0 |
| Flecha central | 4140 | Scale + pulse | |
| Filas ANTES | 4150 | Fade in + strikethrough | Texto aparece, luego se tacha progresivamente |
| Filas AHORA | 4170 | Fade in + highlight | Texto aparece con background highlight cyan 10% |
| Iconos ✗/✓ | 4200 | Pop in | |

---

# ═══════════════════════════════════════════════════════
# ESCENA 12 — CIERRE
# ═══════════════════════════════════════════════════════

**Duración**: 8 segundos (frames 4380–4620)
**Fondo**: Degradado diagonal navy (#00245D) → cyan (#0097CF), de esquina bottom-left a top-right
**Transición entrada**: Fade through navy (20 frames)

---

### Layout (1920×1080)

```
┌────────────────────────────────────────────────────────────┐
│                    ░░░░░░░░░░░░░░░░░░                      │
│                    ░░░░░░░░░░░░░░░░░░                      │
│                                                            │
│                   [LOGO NTT DATA]                          │
│                   (blanco, grande, 400px)                   │
│                                                            │
│          La IA no reemplaza al equipo.                      │
│          Lo potencia cuando se usa                          │
│                con metodología.                             │
│          (36px, bold, blanco)                               │
│                                                            │
│    ┌────────────┐  ┌────────────┐                          │
│    │ Contexto   │  │ Procesos   │                          │
│    │estructurado│  │ definidos  │                          │
│    │ (Harness)  │  │(Metodología│                          │
│    └────────────┘  └────────────┘                          │
│    ┌────────────┐  ┌────────────┐                          │
│    │Supervisión │  │  Mejora    │                          │
│    │  experta   │  │ continua   │                          │
│    │(Human-in-  │  │(Retroalim.)│                          │
│    │ the-loop)  │  │            │                          │
│    └────────────┘  └────────────┘                          │
│                                                            │
│    Native AI Methodology · NTT DATA EMEAL · 2025           │
│    (16px, blanco 70%)                                      │
└────────────────────────────────────────────────────────────┘
```

### Logo NTT DATA

Versión blanca del logo, ancho ~400px, centrado horizontalmente, posición Y ~200px. Con efecto de glow blanco sutil (box-shadow: 0 0 60px rgba(255,255,255,0.15)).

### Mensaje principal (centrado, y: 380px)

- Línea 1: "La IA no reemplaza al equipo." en 36px, blanco, regular
- Línea 2: "Lo potencia cuando se usa" en 36px, blanco, regular
- Línea 3: "con metodología." en 42px, blanco, **bold**, con underline animada cyan

### 4 Keywords (grid 2×2, centrado, y: 580px)

4 pills de 340×80px, fondo rgba(255,255,255,0.1), borde blanco 1px 30%, border-radius: 12px:

| Keyword | Subtexto | Posición |
|---------|----------|----------|
| Contexto estructurado | (Harness) | Top-left |
| Procesos definidos | (Metodología) | Top-right |
| Supervisión experta | (Human-in-the-loop) | Bottom-left |
| Mejora continua | (Retroalimentación) | Bottom-right |

Texto principal: 20px bold blanco. Subtexto: 14px, blanco 50%.

### Pie

"Native AI Methodology · NTT DATA EMEAL · 2025" en 16px, blanco 70%, centrado, y: 980px.

### Animaciones detalladas

| Elemento | Frame | Tipo | Detalles |
|----------|-------|------|----------|
| Fondo degradado | 4260 | Already visible | Transición suave desde escena anterior |
| Logo NTT DATA | 4280 | Spring from center | scale 0.5→1, opacity 0→1, 25 frames |
| Logo glow | 4305 | Pulse | box-shadow pulsa 1 vez, 15 frames |
| Línea 1 "La IA no..." | 4310 | Fade in from bottom | translateY: 20→0, 15 frames |
| Línea 2 "Lo potencia..." | 4330 | Fade in from bottom | translateY: 20→0, 15 frames |
| Línea 3 "con metodología." | 4350 | Fade in + underline | Texto aparece, luego underline se dibuja L→R |
| Keyword 1 | 4370 | Spring pop | scale 0→1 |
| Keyword 2 | 4380 | Spring pop | escalonado 10 frames |
| Keyword 3 | 4390 | Spring pop | |
| Keyword 4 | 4400 | Spring pop | |
| Pie | 4420 | Fade in | opacity 0→1, 15 frames |
| FADE OUT GLOBAL | 4460 | Fade out | Todo el contenido opacity 1→0, 40 frames |

### Efecto final
- Últimos 40 frames (4460–4500): fade out general a negro, suave y elegante.

---

# ═══════════════════════════════════════════════════════
# RESUMEN TÉCNICO
# ═══════════════════════════════════════════════════════

| Escena | Nombre | Duración | Frames | Frame inicio | Frame fin |
|--------|--------|----------|--------|-------------|-----------|
| 1 | Portada | 5s | 150 | 0 | 150 |
| 2 | El Problema: IA sin Metodología | 15s | 450 | 150 | 600 |
| 3 | ¿Qué es un Harness? | 15s | 450 | 600 | 1050 |
| 4 | 3 Pilares del Harness | 12s | 360 | 1050 | 1410 |
| 5 | 5 Fases del Harness | 12s | 360 | 1410 | 1770 |
| 6 | Fase 1: Agentes Especializados | 14s | 420 | 1770 | 2190 |
| 7 | Fase 2: Extracción Conocimiento | 14s | 420 | 2190 | 2610 |
| 8 | Fase 3: Framework, Tools y Skills | 18s | 540 | 2610 | 3150 |
| 9 | Nuevos Roles del Equipo | 15s | 450 | 3150 | 3600 |
| 10 | Fases 4-5: Generación + Validación | 14s | 420 | 3600 | 4020 |
| 11 | Resultados y Métricas | 12s | 360 | 4020 | 4380 |
| 12 | Cierre | 8s | 240 | 4380 | 4620 |
| **TOTAL** | | **154s** | **4620** | | |

---

# NOTAS DE PRODUCCIÓN

## Transiciones entre escenas
- Escena 1→2: Cross-fade (10 frames)
- Escena 2→3: Wipe horizontal izquierda→derecha (15 frames)
- Escena 3→4: Fade through white (15 frames)
- Escena 4→5: Slide desde derecha (15 frames)
- Escena 5→6: Cross-fade (10 frames)
- Escena 6→7: Slide vertical arriba (10 frames)
- Escena 7→8: Cross-fade (10 frames)
- Escena 8→9: Wipe vertical arriba→abajo (15 frames)
- Escena 9→10: Cross-fade (10 frames)
- Escena 10→11: Cross-fade (10 frames)
- Escena 11→12: Fade through navy (20 frames)

## Constantes de animación reutilizables
- **Spring estándar**: stiffness: 140, damping: 14, mass: 0.8
- **Spring suave**: stiffness: 100, damping: 18, mass: 1.0
- **Spring rebote**: stiffness: 200, damping: 10, mass: 0.6
- **Fade estándar**: 15 frames, ease-out
- **Counter animation**: 25 frames, ease-out con bounce final

## Fuentes sugeridas
- **Títulos**: Inter Bold / Semibold
- **Cuerpo**: Inter Regular
- **Código/mono**: Fira Code / JetBrains Mono
- **Tamaños base**: Título: 32-36px, Subtítulo: 20-24px, Body: 16-18px, Caption: 12-14px

## Iconografía
Usar iconos de línea (outline) consistentes, estilo Lucide Icons o Phosphor Icons. Color de icono debe coincidir con el color del bloque al que pertenece. Tamaño estándar: 40-64px para principales, 20-24px para inline.
