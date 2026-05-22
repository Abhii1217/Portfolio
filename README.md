<div align="center">

# 🖥️ Abhishek Anand — Portfolio

**Full-stack developer turning ideas into clean, production-ready systems.**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-EF0070?style=for-the-badge&logo=framer&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Portfolio-e10600?style=for-the-badge&logo=vercel&logoColor=white)](https://abhii1217.vercel.app/)

</div>

---

## 📌 Overview

A fast, minimal personal portfolio built with React and Vite. Features fluid animations via Framer Motion, a custom dark theme, interactive project cards with 3D flip mechanics, and a skills grid powered by Devicon CDN. Sections include About, Education, Skills, Projects, Certifications, and a contact CTA.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| Animated Loader | 3-second branded intro before the portfolio fades in |
| Magnetic Hero Text | Cursor-reactive spring-physics text effect on the name |
| 3D Flip Project Cards | Click to reveal problem, solution, and tech tags on each project |
| Sticky Navbar w/ Dropdown | Smooth scroll links + contact dropdown with LinkedIn, GitHub, LeetCode |
| Skills Grid | Icon grid auto-loaded from Devicon CDN |
| Availability Indicator | Animated green pulse badge showing open-to-work status |
| Responsive Layout | Mobile-first, `max-w-3xl` centered layout |

---

## 🛠️ Tech Stack

**Frontend**

| Library | Version | Purpose |
|---|---|---|
| React | 18.2 | UI framework |
| Vite | 5.0 | Build tool & dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11.0 | Animations & spring physics |
| PostCSS + Autoprefixer | 8.x / 10.x | CSS processing |

**Fonts & Assets**

| Resource | Purpose |
|---|---|
| DM Sans (Google Fonts) | Body & UI text |
| JetBrains Mono (Google Fonts) | Monospace labels & code |
| Devicon CDN | Skill & certification icons |

---

## 🏗️ Architecture

```
Browser
  │
  ├── index.html  (Vite entry point)
  │
  └── React App (SPA)
        │
        ├── Loader          ← 3s branded splash
        ├── Navbar          ← sticky, scroll-linked, contact dropdown
        └── main (max-w-3xl)
              ├── Hero      ← magnetic text, avatar, resume link
              ├── About     ← bio paragraph
              ├── Education ← institution + CGPA
              ├── Skills    ← icon grid (Devicon CDN)
              ├── Projects  ← flip-card grid (data/projects.js)
              ├── Certifications ← cert cards (data/certifications.js)
              └── Support   ← CTA + footer

Data Layer: static JS files in src/data/
Assets:     /public/*.png|jpg  (images served at root path)
```

No backend — fully static, client-side SPA.

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── profile.jpg          # Hero avatar
│   ├── SWAPD.png            # Project thumbnail
│   ├── F1.png               # Project thumbnail
│   ├── NSC.png              # Project thumbnail
│   ├── RFID.png             # Project thumbnail
│   └── KIIT.png             # Education logo
├── src/
│   ├── components/
│   │   ├── Hero.jsx         # Magnetic text + availability badge
│   │   ├── Navbar.jsx       # Sticky nav + contact dropdown
│   │   ├── Projects.jsx     # 3D flip-card project grid
│   │   ├── Skills.jsx       # Icon grid
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── About.jsx
│   │   ├── Support.jsx      # Contact CTA + footer
│   │   ├── Loader.jsx       # Intro splash
│   │   └── ui/
│   │       ├── Button.jsx   # Reusable button (red / ghost / primary variants)
│   │       ├── Section.jsx  # Consistent section wrapper
│   │       └── SectionLabel.jsx
│   ├── data/
│   │   ├── projects.js      # All project metadata
│   │   ├── skills.js        # Skills list with Devicon URLs
│   │   ├── certifications.js
│   │   └── education.js
│   ├── App.jsx              # Root with loader state
│   ├── main.jsx             # React DOM entry
│   └── index.css            # Tailwind directives + custom scrollbar + flip-card CSS
├── tailwind.config.js       # Custom colors (surface, card, border, accent, muted, dim)
├── vite.config.js
├── postcss.config.js
├── index.html
└── package.json
```

---

## ⚙️ Installation

**Prerequisites**

| Requirement | Version |
|---|---|
| Node.js | ≥ 18.x |
| npm | ≥ 9.x |

**Steps**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhii1217/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

---

## 🌍 Environment Variables

This project is a fully static frontend — no environment variables are required. All data is sourced from `src/data/` and public CDNs.

---

## 💻 Local Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

| URL | Purpose |
|---|---|
| `http://localhost:5173` | Development server |
| `http://localhost:4173` | Production preview |

---

## 🚀 Usage

1. Open `http://localhost:5173` — the branded loader runs for ~3 seconds.
2. The portfolio fades in; scroll through Hero → About → Education → Skills → Projects → Certifications.
3. Click any **project card** to flip it and view the problem statement, solution, and tech stack.
4. Use the **Contact** button in the navbar to access LinkedIn, GitHub, or LeetCode.
5. Click **Resume** in the Hero section to open the Google Drive resume link.

---

## 📜 Scripts

| Location | Command | Description |
|---|---|---|
| `package.json` | `npm run dev` | Start Vite dev server |
| `package.json` | `npm run build` | Production build to `dist/` |
| `package.json` | `npm run preview` | Serve the production build locally |

---

## 🤝 Contributing

Feedback and suggestions welcome. Fork the repo, make your changes, and open a PR.

```bash
# Fork → clone your fork
git clone https://github.com/YOUR_USERNAME/Portfolio.git
cd Portfolio

# Create a feature branch
git checkout -b feat/your-feature

# Commit with conventional commits
git commit -m "feat: add contact form integration"

# Push and open a PR
git push origin feat/your-feature

```

## 📄 License

This project is open source. See the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**Abhishek Anand**

[![GitHub](https://img.shields.io/badge/GitHub-Abhii1217-181717?style=for-the-badge&logo=github)](https://github.com/Abhii1217)
