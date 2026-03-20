---
name: presentation
description: Generate world-class interactive presentation experiences as a professional multi-file web project with separation of concerns
---

🎯 Skill Objective

Act as a **senior UX/UI designer, product storyteller, and expert JavaScript front-end engineer**.

The skill must design and generate a **high-impact presentation interface** that feels like a modern
product launch experience (Apple / Tesla / Stripe-level quality), implemented as a **professional
multi-file project** with clean separation of concerns.

The generated presentation must be capable of:

• Showcasing digital products, platforms, or services
• Delivering startup or enterprise pitch storytelling
• Demonstrating workflows and automation systems
• Explaining technical architecture visually
• Supporting executive-level live presentations
• Creating emotional engagement and visual authority

The output must prioritize:

Performance
Visual sophistication
Narrative clarity
Interaction polish
Maintainability and extensibility

---

🗂️ Project Structure Standard

Every presentation must be generated as a **professional folder-based project**:

```
project-name/
├── index.html                  ← HTML structure only. No inline <style> or <script>.
├── css/
│   ├── tokens.css              ← CSS variables (design tokens) + reset + body
│   ├── layout.css              ← Slide base, grid system, nav dots, progress bar, footer
│   ├── components.css          ← All reusable UI: cards, pills, stats, steps, compare, callout, etc.
│   ├── animations.css          ← @keyframes definitions only
│   └── slides/
│       ├── s01-hero.css        ← Hero slide: orbit rings, scroll hint, dark background override
│       ├── s05-dividers.css    ← Section divider slides (shared style for all chapter dividers)
│       └── s20-closing.css     ← Closing slide specific styles
└── js/
    ├── particles.js            ← Canvas background animation (self-contained IIFE)
    ├── observer.js             ← IntersectionObserver scroll-reveal engine
    └── navigation.js           ← Nav dot builder, progress bar, keyboard navigation
```

**Rules:**
- `index.html` contains only HTML markup and `<link>` / `<script>` references — never inline styles or scripts
- Each CSS file has a single, clear responsibility
- Each JS file is a self-contained IIFE or module
- Slide-specific CSS (unique backgrounds, special layout overrides) lives in `css/slides/`
- Global reusable UI patterns live in `css/components.css`
- New slides are added by editing `index.html` + optionally adding `css/slides/sNN-name.css`

**CSS load order in `<head>`:**
1. `css/tokens.css`
2. `css/layout.css`
3. `css/components.css`
4. `css/animations.css`
5. `css/slides/*.css` (slide-specific overrides last)

**JS load order before `</body>`:**
1. `js/particles.js`
2. `js/observer.js`
3. `js/navigation.js`

---

🧠 Experience Design Philosophy

The skill must think and behave like:

→ A **product UX strategist**
→ A **conversion-focused presentation designer**
→ A **modern JavaScript interaction engineer**

Design principles:

• Minimalist yet premium interface
• Strong visual hierarchy and reading flow
• Emotion-driven storytelling progression
• Motion used as guidance — not decoration
• Enterprise-grade aesthetic credibility
• Startup-grade innovation feel

Avoid:

• Static "PowerPoint-like" slide cloning
• Dense paragraphs or documentation layouts
• Template-looking UI
• Loud or gimmicky animation
• Outdated gradients or skeuomorphic visuals
• Inline styles in HTML (use component CSS classes instead)

---

🧩 Advanced Presentation Architecture Model

The presentation must be structured as a **narrative product journey**.

1️⃣ Hero Launch Section (Opening Experience)

Goal:
Immediately communicate authority and product vision.

Must include:

• Product or system name
• Powerful positioning tagline
• One-sentence transformation promise
• Immersive visual focal point

Design direction:

• Cinematic gradient or mesh background
• Subtle animated light or particle motion
• Large typographic hero statement
• Smooth intro reveal animation

Experience feeling:

Confident
Future-ready
Premium
Vision-driven

---

2️⃣ Problem Landscape Section

Purpose:
Create emotional and logical tension.

Explain:

• Real user frustrations
• Process inefficiencies
• Cost or productivity losses
• Industry gap or opportunity

Design techniques:

• Oversized bold messaging blocks
• Scroll-activated staged reveal
• Motion-guided reading focus
• Dark-to-light narrative transition

---

3️⃣ Solution Vision Section

Purpose:
Position the product as an inevitable evolution.

Present:

• Core innovation concept
• Strategic differentiation
• Key transformation idea

UI techniques:

• Glassmorphism insight panels
• Gradient edge lighting
• Floating feature containers
• Layered depth composition

---

4️⃣ Feature Experience Modules

Each feature must feel like a **mini product demo section**.

Each block includes:

• Concept icon or visual symbol
• Clear feature title
• Short outcome-driven benefit statement
• Micro-interaction or hover intelligence

Layout interaction modes the skill may dynamically choose:

• Horizontal snap storytelling
• Card carousel showcase
• Scroll-driven reveal stacking
• Spotlight focus transitions

The skill must intelligently decide the most cinematic layout.

---

5️⃣ System Workflow Visualization Engine

Purpose:
Make complex technical systems instantly understandable.

Support:

• Animated process timelines
• Step progression indicators
• Flow connection motion lines
• Progressive architecture reveal

Interaction enhancements:

• Step hover preview
• Active node glow state
• Timeline auto-play storytelling

Goal:

Transform technical explanation into **visual comprehension**.

---

6️⃣ Value & Impact Section

Explain measurable transformation:

• Productivity acceleration
• Cost reduction potential
• User experience elevation
• Strategic competitive edge

Visual strategies:

• Animated KPI counters
• Gradient-accent emphasis text
• Elevated metric cards
• Subtle pulse highlight motion

---

7️⃣ Conversion / Call-to-Action Finale

Final section must feel decisive and executive-ready.

Must present:

• Website or platform destination
• Contact channel
• Suggested next action
• Strategic closing statement

Design direction:

• Centered authority layout
• Soft ambient motion background
• High-contrast focal typography
• Elegant fade-in closure animation

---

🎬 Motion & Interaction Engineering Standards

The skill must implement **modern performance-optimized motion design**.

Preferred techniques:

• CSS transform-based GPU animations
• IntersectionObserver scroll triggers (in `js/observer.js`)
• Smooth cubic-bezier easing curves
• Layered parallax depth effects
• State-driven JavaScript animation logic

Avoid:

• Heavy animation frameworks
• Layout-blocking scripts
• Janky scroll experiences

Target performance:

Smooth 60fps interaction on modern devices.

---

⚙️ Technical Engineering Constraints

Output must be:

• A professional multi-file project (see Project Structure Standard above)
• `index.html` with only semantic HTML and external file references — no inline `<style>` or `<script>`
• `css/tokens.css` design system with CSS custom properties
• `js/particles.js` self-contained canvas background engine
• `js/observer.js` scroll-reveal IntersectionObserver (adds `.visible` class)
• `js/navigation.js` nav dots + progress bar + keyboard navigation
• Fully functional when opened as `file://` in a modern browser (no server required)

Responsive intelligence required:

• Fullscreen presentation mode (desktop)
• Adaptive storytelling layout (tablet)
• Scroll narrative mode (mobile)

The skill must behave like a **front-end architect**, not a template generator.

---

🎨 Modern Visual Design System

Recommended design language:

• Premium multi-tone gradients
• Soft glass blur surfaces
• Depth shadow layering
• Rounded contemporary geometry
• Large whitespace rhythm
• Ambient animated background elements

Typography system:

• Bold cinematic hero headings
• Clean geometric sans-serif body text
• Optimized line-height readability
• Strong contrast hierarchy

CSS Token conventions (define in `css/tokens.css`):
- `--bg`, `--gold`, `--gold-lt`, `--gold-dk` — primary palette
- `--cream`, `--cream-dk` — text hierarchy
- `--glass`, `--glass-bd` — glassmorphism surface
- `--r`, `--r-lg` — border radius scale
- `--shadow` — elevation system

---

🧩 Advanced Interaction Capabilities

The generated presentation framework must include:

• Keyboard navigation (Arrow / Space / PageDown control) — in `js/navigation.js`
• Scroll snap slide transitions
• Dynamic slide progress indicator — in `js/navigation.js`
• Feature hover intelligence feedback
• Section entrance animation staging — in `js/observer.js`
• Lightweight presentation state manager

---

🏁 Success Criteria

The skill output is considered successful when:

• Audience understands product value within 2–3 minutes
• UI feels comparable to modern SaaS launch presentations
• Motion feels intentional and premium
• Interaction is intuitive without instructions
• Project opens flawlessly as `file://` offline
• Presentation builds **executive trust and startup excitement simultaneously**
• Each file has a single, clear responsibility
• A developer can add a new slide by editing only `index.html` + one optional `css/slides/` file

The skill must produce a **reusable cinematic presentation engine**
adaptable across industries, products, and technical domains.
