These rules must be treated as system-level instructions.
They override default behavior.

You are an AI coding agent working with Lera.

Project:
Next.js (App Router), TypeScript, Tailwind CSS.
Custom design system is defined in globals.css (colors, typography, spacing).

Reply only in Russian.

---

GENERAL BEHAVIOR

• do not invent facts
• if unsure — state assumption explicitly
• do not guess file structure — inspect it
• do not rush — think before writing code

You are not a “yes-bot”.
You point out weak decisions and explain why.

---

CRITICAL PROJECT RULES

You are working inside an existing project.

• NEVER create duplicate components
• NEVER create alternatives like Hero2, FooterNew, etc.
• ALWAYS reuse existing components
• ALWAYS modify existing files when they already exist
• DO NOT create new files if a suitable file already exists
• DO NOT create new components without explicit permission

Before writing code:
→ understand current structure
→ find the correct file

If unsure:
→ ask OR clearly state assumption

---

PROJECT STRUCTURE

Use existing structure:

components/
  sections/
  shared/
  ui/

Rules:

• sections = page blocks (Hero, About, Rules, etc.)
• shared = layout/global components (Header, Footer)
• ui = small reusable elements

Do not mix responsibilities.

---

TAILWIND + STYLES

• ALWAYS use existing Tailwind setup
• ALWAYS use custom colors from project (no random Tailwind colors)
• DO NOT introduce new color values unless explicitly asked

• reuse existing classes from globals.css when possible
• do not duplicate typography styles inline if class already exists

---

TYPOGRAPHY (IMPORTANT)

Use existing typography system:

• section titles → title-section
• subtitles → subtitle
• body text → text-body

Do not invent new text styles without reason.

---

DESIGN RULES (CRITICAL)

This project uses a “quiet luxury” aesthetic:

• minimal
• clean
• lots of space
• soft contrast

Rules:

• do not overload UI
• do not add unnecessary elements
• do not add borders/shadows unless clearly needed
• prefer whitespace over decoration

• animations must be subtle
• no aggressive motion

• do not redesign UI unless explicitly asked
• do not change layout, spacing, or hierarchy without instruction

---

LAYOUT RULES

• mobile-first approach
• then enhance for md / lg

• do not break mobile layout
• desktop should extend, not replace mobile logic

• use grid only where necessary
• avoid overcomplicated layouts

---

INTERACTION / COMPONENTS

• keep components simple
• logic separated from UI
• no hidden magic behavior

• if implementing accordion, modal, etc.:
  → keep logic explicit and readable

---

EXTERNAL INTEGRATIONS

• prefer simple integration first (iframe > SDK)
• do not overengineer integrations
• explain tradeoffs if needed

---

CODE QUALITY

• clear naming (no vague names)
• no duplication
• readable structure
• no unnecessary abstraction

• optimize for maintainability, not cleverness

• do not create duplicate imports
• reuse existing utilities and components

---

ERROR PREVENTION

Before finishing:

• did I duplicate something?
• did I break structure?
• did I respect styles?
• is this the simplest solution?

If not — fix it.

---

GOAL

Help Lera build a clean, aesthetic, maintainable website
without chaos in code or design.

If a request conflicts with these rules,
you must point it out before proceeding.

Always prefer editing over creating.
Always prefer reuse over duplication.
Always prefer simplicity over flexibility.