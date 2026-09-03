# IronVault Fitness — Gym Template 01

A production-ready, ultra-responsive fitness centre and gym website template engineered for Indian gym brands. Features dynamic white-label configuration, lead capture modal, WhatsApp direct enquiry integration, high-contrast dark aesthetic, performance metrics, and zero-configuration automated deployment to **GitHub Pages** via **GitHub Actions**.

---

## 1. Tech Stack Overview

- **Framework**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 6
- **Language**: TypeScript (strict mode with `tsc --noEmit` validation)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Routing**: React Router v7 (`react-router-dom`) with `HashRouter` for static host compatibility
- **Icons**: Lucide React (`lucide-react`)
- **Animations**: Motion (`motion/react`)
- **Package Manager**: npm (standard lockfile `package-lock.json`)

---

## 2. Local Development

### Prerequisites
- Node.js `20.x` or `22.x`
- npm `10.x` or later

### Getting Started

1. **Clone or navigate to the project directory**:
   ```bash
   cd gym-01
   ```

2. **Install dependencies**:
   ```bash
   npm ci
   ```
   *(Or `npm install` if initializing for the first time)*

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 3. Production Build & Validation

### Validate TypeScript & Code Quality
```bash
npm run lint
```
Runs `tsc --noEmit` across all modules to ensure zero type errors.

### Build Production Bundle
```bash
npm run build
```
Generates optimized, minified production assets in the `/dist` directory.

### Validate & Build in One Step
```bash
npm run validate
```
Executes type checking followed immediately by the production build.

### Preview Production Build Locally
```bash
npm run preview
```
Spins up a local HTTP server serving the production `/dist` bundle.

---

## 4. GitHub Pages Deployment via GitHub Actions

This repository includes a production-grade automated deployment workflow at `.github/workflows/deploy.yml`.

### Deployment Architecture
```
Local Code Push (main / master)
              ↓
GitHub Actions Runner (Ubuntu Latest)
              ↓
Node 22 Setup & Dependency Cache
              ↓
npm ci
              ↓
Validate TypeScript (npm run lint)
              ↓
Build Production Assets (npm run build)
              ↓
Upload Pages Artifact (actions/upload-pages-artifact@v3)
              ↓
Deploy to GitHub Pages (actions/deploy-pages@v4)
              ↓
Live Website (https://<username>.github.io/gym-01/)
```

### Initial GitHub Setup Steps

1. **Create Repository**:
   Create a repository on GitHub named `gym-01`.

2. **Push Code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of IronVault gym template"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/gym-01.git
   git push -u origin main
   ```

3. **Enable GitHub Pages via Actions**:
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - Do **NOT** choose "Deploy from a branch". The automated workflow handles deployment directly.

4. **Automatic Deployment**:
   Every push to `main` or `master` will trigger the deployment workflow automatically. You can also trigger it manually from **Actions** → **Deploy IronVault Fitness to GitHub Pages** → **Run workflow**.

5. **Live URL**:
   Your live website will be accessible at:
   ```
   https://<your-github-username>.github.io/gym-01/
   ```

---

## 5. Base Path & Subpath Configuration

By default, GitHub Pages project sites are served from a subpath (e.g. `/gym-01/`). The template handles this automatically:

- **Local Development**: Uses `/` root path.
- **GitHub Actions Build**: Automatically applies `/gym-01/` as the Vite base URL.
- **Configurable Override**: You can override the base path at any time by configuring the repository variable `VITE_BASE_PATH`:
  - Go to **Settings** → **Secrets and variables** → **Actions** → **Variables**.
  - Add variable `VITE_BASE_PATH` with your desired path (e.g. `/my-custom-path/` or `/` for custom root domains).

---

## 6. Routing & Direct URL Reliability

Static hosting environments like GitHub Pages do not natively support server-side URL rewrites for Single Page Applications (SPAs). This template solves this completely:

1. **Hash-Based Routing (`HashRouter`)**:
   Routes use standard URL hashes (e.g. `https://<username>.github.io/gym-01/#/why-us`, `/#/programs`, `/#/membership`, etc.). All direct links, browser reloads, and bookmarks load instantly without server roundtrips or 404 errors.

2. **Graceful SPA 404 Fallback (`public/404.html`)**:
   If an external user or bot accesses a direct path without a hash (e.g. `/gym-01/why-us`), GitHub Pages serves `public/404.html`, which immediately redirects the browser to the proper hash route (`/gym-01/#/why-us`).

### Verified Core Routes
- `#/` — Home (Cinematic Hero, Metric Strip, Training Goals, Facility Highlights, Plans, Lead CTA)
- `#/why-us` — Why Choose Us (Equipment, certified coaching, hygiene, community)
- `#/programs` — Training Programs (Strength, HIIT, Functional, Fat Loss, Personal Training)
- `#/membership` — Membership Tiers (Monthly, Quarterly, Annual, Black Card VIP)
- `#/trainers` — Certified Trainer Profiles & Specializations
- `#/gallery` — Facility & Training Photo Gallery
- `#/reviews` — Verified Member Reviews & Success Stories
- `#/faq` — Frequently Asked Questions & Membership Policies
- `#/contact` — Location Map, Operating Hours, Phone, WhatsApp, and Enquiry Form

---

## 7. Image Asset Architecture

All images are stored locally in `public/assets/images/gym/` and committed directly to Git:

| Key Asset Name | File Path | Resolution / Purpose |
| :--- | :--- | :--- |
| **hero** | `public/assets/images/gym/hero-gym.webp` | Cinematic hero background & social preview |
| **interior** | `public/assets/images/gym/gym-interior.webp` | Facility workout floor & strength zone |
| **strengthTraining**| `public/assets/images/gym/strength-training.webp` | Free weights & powerlifting racks |
| **maleTrainer** | `public/assets/images/gym/trainer-male.webp` | Head coach & training goals card 04 |
| **femaleTrainer** | `public/assets/images/gym/trainer-female.webp` | Functional coach & HIIT specialist |
| **functionalTraining**| `public/assets/images/gym/functional-training.webp` | Cardio & functional turf zone |
| **transformation**| `public/assets/images/gym/transformation.webp` | Fat loss, conditioning & member progress |

### Dynamic Asset Resolution
Image URLs are dynamically resolved using the `getAssetUrl()` helper in `src/config/gymConfig.ts`. This ensures that image paths seamlessly resolve to `/gym-01/assets/...` in production and `/assets/...` in local development without broken references.

---

## 8. White-Label Customization Guide

This template is 100% white-label ready. To rebrand it for a new gym client:

### Method A: Edit Configuration File
Open `src/config/gymConfig.ts` and modify the `defaultGymConfig` object:
- **Business details**: Gym name, tagline, address locality, city, phone, WhatsApp number, email.
- **Pricing & Plans**: Tier names, monthly/quarterly/annual pricing, feature lists, badges.
- **Coaches**: Trainer names, titles, certifications, biographies, specialties.
- **Operating Hours**: Weekday, Saturday, Sunday opening/closing schedules.

### Method B: Live In-App Customizer
1. Run the app in development mode (`npm run dev`).
2. Click the floating **Template Customizer** button on the right edge of the screen.
3. Edit business details, pricing tiers, and contact numbers in real time with immediate live preview.
4. Export the resulting configuration JSON directly to save your changes.

---

## 9. Custom Domain Setup (Optional)

When your client is ready to launch on their own custom domain (e.g. `www.ironvaultfitness.in`):

1. In GitHub Repository: Go to **Settings** → **Pages** → **Custom domain**, enter your domain name, and save.
2. In your DNS provider: Add a `CNAME` record pointing your subdomain (or `A` records for apex) to `<your-username>.github.io`.
3. Set the GitHub Repository Variable `VITE_BASE_PATH` to `/` (or set `base: '/'` in `vite.config.ts`).
4. Re-run the deployment workflow in GitHub Actions.

---

## 10. Security & Repository Hygiene

- **No Secrets in Source**: No API keys, database passwords, or auth tokens are committed.
- **Environment Variables**: Documented in `.env.example`. Actual local secrets remain in uncommitted `.env` files.
- **Clean Git Tracking**: Production outputs (`dist/`, `build/`), logs (`*.log`), and OS artifacts (`.DS_Store`, `Thumbs.db`) are ignored by `.gitignore`.
- **Minimal Permissions**: The GitHub Actions workflow requests only the minimum permissions required for Pages deployment (`contents: read`, `pages: write`, `id-token: write`).
