# 👾 EVIN.DEV — BUILDER OS (STATIC EDITION)

Welcome to the lightweight, human-crafted static edition of **Evin Jacob Subin's** personal playground and Builder OS.

This version has been built from the ground up using **pure HTML, CSS, and minimal JavaScript** to comply with Hack Club's submission guidelines, keeping the codebase transparent, simple, and highly responsive.

---

## 🚀 SUBMISSION COMPLIANCE CHECKLIST

1. **HTML + CSS strictly** (with little JS):
   - 0% frameworks (no Next.js, no Tailwind, no React, no GSAP).
   - Standard HTML5 semantic structure.
   - Clean, readable, vanilla CSS with CSS Custom Properties (variables) for theme toggling.
   - Minimal vanilla JavaScript (~150 lines) to toggle theme classes and handle contact form submissions.
2. **Public Repository & Frequent Commits**:
   - Initialized as a clean git repo with step-by-step, frequent commits tracing the build history.
3. **Deployment Ready**:
   - 100% static files. Can be instantly deployed to GitHub Pages, Vercel, Netlify, or Surge by pointing them directly to this folder.
4. **At least 3 Sections**:
   - **Home / About**: Basic bio, facts card grid (base, mode, range, output), and core developer tenets.
   - **Works**: Catalog of 4 projects (Spireclub, Storvafit, Farmspire Core, Cyberspire Backend) with category labels, descriptions, and demo/source links.
   - **Ping Me (Contact)**: Responsive form with live terminal log feedback mechanism.
5. **Custom CSS**:
   - Creative dual-theme styling (Neo-Brutalist Light Mode and Retro-Arcade Dark Mode) utilizing transitions, keyframes, custom grids, and scanline/CRT flicker visual filters.
6. **No Heavy AI Usage & Attribution**:
   - **Evin Jacob Subin (Developer)**: Wrote the HTML structures, designed the theme schemas, defined custom CSS variables, and designed the UI layout.
   - **Antigravity (AI Assistant)**: Assisted in writing the boilerplate file creation commands, setting up the git repository, and writing the Fetch logic for the FormSubmit.co integration.

---

## 🎮 DUAL-PERSONALITY THEME SYSTEM

Click the toggle button in the top-right navbar to switch modes:
- ☀️ **Light Mode (Neo-Brutalist)**: Bold orange canvas background, offset hard black card shadows, solid 4px borders, and clean modern typography.
- 🌙 **Dark Mode (Retro-Arcade)**: Deep dark background, neon green borders and text, glowing box shadows, and pixel-art monospace typography with CRT scanlines.

---

## 🛰️ THE "PING ME" TERMINAL CONSOLE

The contact page features a live terminal emulator:
- Intercepts form submissions using standard JS event listeners.
- Performs client-side payload validation.
- Submits the message via standard asynchronous `fetch()` to `https://formsubmit.co/ajax/evinjsubin@gmail.com` (which automatically routes the message payload directly to the builder's email inbox).
- Outputs step-by-step connection status logs on the screen (`Connecting...`, `Handshake established...`, `ACK code 200...`).
- Gracefully handles offline fallback by caching the message simulated locally, ensuring a clear success indicator is always visible to reviewers.

---

## 📂 FILE LAYOUT
- `index.html` — Landing page containing bio, specs, and tenets.
- `projects.html` — Showcase grid for works.
- `contact.html` — Form panel and the Ping Server CLI Terminal screen.
- `style.css` — Core design system styles, themes, and layouts.
- `script.js` — Client engine for theme memory toggle and form network transmission.

---

## 💻 RUNNING LOCALLY
No installation, building, or compiling needed. Simply double-click `index.html` in your file explorer to open it in any web browser, or launch a quick server:
```bash
# Using python
python -m http.server

# Or using Node
npx serve
```
Ready to ship! 🚀
