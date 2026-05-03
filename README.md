# Portfolio Site — Nikhil Holagunda

Single-page React + Vite portfolio that links to every other project's GitHub repo and live demo.

## Live demo
- Vercel: `https://nikhil-portfolio.vercel.app` (after deploy)
- GitHub Pages: `https://<your-username>.github.io/portfolio-site/`

## Tech stack
- **Frontend:** React 18, Vite, vanilla CSS (custom design system)
- **Hosting:** Vercel (primary) + GitHub Pages (fallback static)

## Requirements analysis

### Goal
Provide a single, recruiter-friendly URL that summarizes who I am and links to four working full-stack projects with code + live demos.

### Functional requirements
1. Hero section with name, role, and short pitch.
2. About section with skills grouped by category (frontend, backend, database, devops).
3. Projects grid with title, description, tech tags, GitHub link, and live demo link.
4. Contact section with email + GitHub + LinkedIn.
5. Light/dark theme toggle persisted in localStorage.
6. Mobile responsive down to 360px width.
7. Lighthouse score > 90 on Performance, Accessibility, Best Practices, SEO.

### Non-functional requirements
- Initial load under 2s on 4G.
- Fully static — no backend.
- WCAG AA contrast ratios.
- Keyboard navigable.

## User stories

| ID | As a... | I want... | So that... | Acceptance criteria |
|----|---------|-----------|------------|---------------------|
| US-1 | recruiter | to see Nikhil's name and role within 1s of opening the page | I can decide if it's a fit | Hero is above the fold; LCP < 1.5s |
| US-2 | recruiter | to scan a list of projects with one-line descriptions and tech tags | I can pick which to dive into | Project cards show title, blurb, tags |
| US-3 | recruiter | to open the GitHub repo or live demo of any project in one click | I can verify the work | Each card has two clear external links |
| US-4 | hiring manager | to find Nikhil's email/LinkedIn easily | I can reach out | Contact links visible in nav and footer |
| US-5 | visitor on mobile | the site to be readable and usable on my phone | I'm not blocked by layout | Responsive at 360px+ |
| US-6 | visitor at night | a dark theme | I don't get blinded | Toggle works, choice is remembered |

## Interactive features
- Dark/light theme toggle persisted across reloads.
- Animated reveal on scroll for project cards.
- Smooth-scroll nav links.
- Hover states on project cards with subtle lift.

## Project structure

```
portfolio-site/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   └── data/projects.js
├── index.html
├── package.json
└── vite.config.js
```

## Local dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel              # follow prompts
vercel --prod
```

Or push to GitHub and import the repo in the Vercel dashboard — it auto-detects Vite.

## Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
# in package.json add:  "homepage": "https://<your-username>.github.io/portfolio-site",
#                       "predeploy": "npm run build", "deploy": "gh-pages -d dist"
npm run deploy
```
