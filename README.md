# S. M. Rafi Alam — Portfolio

A fast, animated personal portfolio built with **Vite + React + Tailwind CSS + Framer Motion**.

## ✨ Features

- Dark, modern "neon" aesthetic with animated gradient accents
- Sections: Hero, About + Education, Skills, Experience timeline, Projects (filterable), Certificates & Research, Blog, Contact
- Scroll-reveal animations (GPU-friendly: transform/opacity only), scroll-progress bar, animated nav highlight, typewriter role
- Respects `prefers-reduced-motion`
- Lazy-loaded project images, small bundle, no backend needed (contact form uses `mailto:`)

## 🚀 Getting started

```bash
npm install
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## 🛠 Editing content

All text/links live in one place: **`src/data/portfolio.js`**.
Update your profile, skills, experience, projects, achievements, and blog posts there — no component edits needed.

Images live in `public/assets/`. Replace `profile.png`, the `proj-*.png` project shots, and `Rafi_Alam_Resume.pdf` with your own.

## 📦 Deploy

The `dist/` folder is fully static — deploy it to **Vercel, Netlify, GitHub Pages,** or any static host.
