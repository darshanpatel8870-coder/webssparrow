# Premium Full-Stack Developer Portfolio

A modern, fast, SEO-friendly, and accessible portfolio website designed for senior full-stack developers. Built using Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## 🚀 Features

- **Responsive Design:** Mobile-first architecture tested across various common viewport sizes.
- **Theme Switching:** Premium dark default theme with a toggleable light mode (persisted in local storage).
- **Lightweight Animations:** Framer Motion transitions that automatically honor user-level system `prefers-reduced-motion` settings.
- **SEO Optimized:** Clean semantic HTML structures, descriptive page titles/metadata, and integrated schema scripts (Person & ProfessionalService schema).
- **Structured Data Layer:** All service categories, project lists, testimonials, FAQs, and articles are kept in easy-to-update static files under `src/data/`.
- **Secure Form Routing:** Contact form features honeypot validation for spam protection and client-side error check states.

---

## 🛠️ Setup Instructions

### 1. Prerequisites
Make sure you have Node.js (v18.x or later) and npm installed.

### 2. Installation
Navigate to the root directory and install dependencies:
\`\`\`bash
npm install
\`\`\`

### 3. Development Server
Run the local dev server:
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build Production Bundle
To build the application and compile static assets:
\`\`\`bash
npm run build
\`\`\`

### 5. Running Linter
Validate syntax and configuration consistency:
\`\`\`bash
npm run lint
\`\`\`

---

## ⚙️ Environment Variables
Copy `.env.example` to `.env.local` and customize settings:
\`\`\`bash
cp .env.example .env.local
\`\`\`

---

## ✏️ Customizing Content

All data is structured statically to decouple design layouts from content details. To customize details, update the corresponding files under `src/data/`:
1. **Services:** Edit [services.ts](file:///C:/Users/darsh/.gemini/antigravity-ide/scratch/developer-portfolio/src/data/services.ts)
2. **Skills:** Edit [skills.ts](file:///C:/Users/darsh/.gemini/antigravity-ide/scratch/developer-portfolio/src/data/skills.ts)
3. **Projects / Case Studies:** Edit [projects.ts](file:///C:/Users/darsh/.gemini/antigravity-ide/scratch/developer-portfolio/src/data/projects.ts)
4. **Professional Experience:** Edit [experience.ts](file:///C:/Users/darsh/.gemini/antigravity-ide/scratch/developer-portfolio/src/data/experience.ts)
5. **Testimonials:** Edit [testimonials.ts](file:///C:/Users/darsh/.gemini/antigravity-ide/scratch/developer-portfolio/src/data/testimonials.ts)
6. **FAQ Accordions:** Edit [faqs.ts](file:///C:/Users/darsh/.gemini/antigravity-ide/scratch/developer-portfolio/src/data/faqs.ts)
7. **Blog Articles:** Edit [blog.ts](file:///C:/Users/darsh/.gemini/antigravity-ide/scratch/developer-portfolio/src/data/blog.ts)

---

## ☁️ Deployment Instructions

### Vercel Deployment (Recommended)
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log in to [Vercel](https://vercel.com).
3. Click "Add New" -> "Project" and select your repository.
4. Keep the framework preset as "Next.js" and build settings as default.
5. (Optional) Define your environment variables (like `NEXT_PUBLIC_BASE_URL`).
6. Click **Deploy**. Vercel will automatically configure CDN caches, route rules, and compile static rendering pages.

### VPS Deployment (Ubuntu/Nginx)
1. Clone your project files to the VPS server.
2. Build the Next.js bundle: `npm run build`.
3. Configure **PM2** process supervisor to host the runner server:
   \`\`\`bash
   pm2 start npm --name "portfolio-app" -- start
   \`\`\`
4. Setup Nginx reverse-proxy blocks routing port `3000` to port `80` (SSL configured via Let's Encrypt).
