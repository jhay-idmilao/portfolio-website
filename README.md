# John Javier Idmilao — Portfolio (React + Material You)

A single-page developer portfolio built with **React 18 + Vite**, styled in the
**Material You (Material 3)** design language with light/dark tonal themes,
state layers, ripples, and scroll animations.

**Website:**
https://jhay-idmilao.github.io/portfolio-website/

## Compatibility

This project is pinned to a toolchain that runs on **Node.js 12.2+ and npm 6+**:

| Package             | Version | Why                                   |
| ------------------- | ------- | ------------------------------------- |
| vite                | ^2.9.0  | last Vite line that supports Node 12  |
| @vitejs/plugin-react| 1.2.0   | last plugin-react with a Vite 2 peer  |
| react / react-dom   | ^18.2.0 | app still runs on React 18            |
| gh-pages            | ^3.2.3  | Node 12-compatible deploy helper      |

No source changes are needed to move to a newer toolchain later — if you ever
upgrade Node to 18+, just bump `vite` to ^6, `@vitejs/plugin-react` to ^4, and
`gh-pages` to ^6 in package.json and reinstall.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:3000 on Vite 2).

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deploy to GitHub Pages

The Vite config uses `base: './'` (relative paths), so the same build works whether
your site is served from `https://<user>.github.io/` or `https://<user>.github.io/<repo>/`
— no config edits needed.

**Easiest way (gh-pages package, already included):**

```bash
npm run deploy
```

This builds the app and pushes `dist/` to a `gh-pages` branch. Then, in your repo:
**Settings → Pages → Build and deployment → Source: Deploy from a branch →
Branch: `gh-pages` / `(root)` → Save.** Your site is live in ~1 minute.

**Updating the site:** make changes, then run `npm run deploy` again.

## The résumé button

`Download résumé` links to `John-Javier-Idmilao-Resume.pdf`, which lives in `public/`
and is copied to the site root on build. Replace that file (keep the same name) to
update your résumé, or change the filename in `src/data.js` (`profile.resume`).

## Editing content

All text lives in **`src/data.js`** — profile, metrics, experience, work, skills,
and contact details. Change it there and everything updates.

## Theme colors

Material 3 tokens are defined at the top of **`src/index.css`** under `:root`
(light) and `[data-theme='dark']` (dark). Swap the `--md-primary` / container
values to re-seed the palette.

## Structure

```
src/
├── main.jsx            # React entry
├── App.jsx             # composes the page
├── index.css           # Material 3 tokens + all component styles
├── data.js             # all portfolio content
├── hooks.js            # theme, ripple, in-view, count-up
└── components/
    ├── TopBar.jsx
    ├── Hero.jsx
    ├── Experience.jsx
    ├── Work.jsx
    ├── Skills.jsx
    ├── Contact.jsx
    └── Reveal.jsx
```
