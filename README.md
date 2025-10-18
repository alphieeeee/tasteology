# Landing Page (Vite + Vanilla JS)

A simple landing page built with [Vite](https://vitejs.dev/) using vanilla JavaScript, HTML, and CSS.  
This project demonstrates a lightweight setup for creating fast, production-ready static websites without frameworks.

---

## 🧩 Tech Stack
- **Vite** – Lightning-fast development build tool
- **Vanilla JavaScript**
- **HTML5 / CSS3**

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/alphieeeee/tasteology.git
cd tasteology
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Your site will be available at http://localhost:5173

### 4. Build for production
```bash
npm run build
```


### Configure for GitHub Page
```
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/repo-name/', // 👈 repository name here
})
```
In your vite.config.js, add the base property like this:

### Follow commands to push to Github Page
```bash
npm run build
git add dist -f
git commit -m "Your Message" // 👈 commit message here
git subtree push --prefix dist origin gh-pages
```
This will add the dist folder as a subtree in your repository

https://[your-github-name].github.io/[repo-name]/ // 👈 gh page url
