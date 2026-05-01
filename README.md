# Vrushabh Desai — Portfolio Website

🔗 **Live Site:** [vrushabhdesai.github.io](https://vrushabhdesai.github.io/)

Personal portfolio website showcasing my work experience, projects, education, and skills in Software Engineering, Robotics, and Computer Vision.

## Site Structure

```
/
├── index.html          → Homepage (hero, stats, featured work)
├── about.html          → About (bio, education, skills, achievements)
├── experience.html     → Work experience + projects with category filters
├── contact.html        → Contact info, resume download, coursework
├── 404.html            → Custom 404 error page
├── assets/
│   ├── css/main.css    → Dark theme stylesheet
│   ├── js/main.js      → Vanilla JavaScript (navigation, animations, filters)
│   └── img/            → Images and icons
├── docs/               → PDF documents (resume, project reports)
└── README.md
```

## Technology

- **Pure static site** — HTML, CSS, JavaScript (no build step)
- **Dark theme** with robotics-inspired design accents
- **Google Fonts** (Inter, JetBrains Mono)
- **Bootstrap Icons** via CDN
- **Vanilla JavaScript** — no jQuery or framework dependencies
- **CSS Grid & Flexbox** for responsive layout
- **IntersectionObserver** for scroll animations
- **CSS Custom Properties** for theming

## Deployment

This site is deployed automatically via **GitHub Pages** from the `main` branch root.

No build step is required — simply push changes to `main` and they go live.

### Local Development

To preview locally, use any static file server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .

# VS Code Live Server extension
```

Then open `http://localhost:8000` in your browser.

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, key stats, featured work preview |
| **About** | Condensed biography, education timeline, technical skills, achievements |
| **Experience** | Work history cards + project portfolio with category filters |
| **Contact** | Contact details, resume download, social links, coursework |

## Design

- Dark navy background with electric cyan accents
- Circuit-grid background pattern
- Glow effects on interactive elements
- Responsive layout (mobile-first breakpoints)
- Reduced-motion support for accessibility
- Semantic HTML with ARIA labels

## Contact

- **Email:** vmdesai@wpi.edu
- **LinkedIn:** [linkedin.com/in/vrushabhdesai](https://www.linkedin.com/in/vrushabhdesai)
- **GitHub:** [github.com/vrushabhdesai](https://github.com/vrushabhdesai)

---

© Vrushabh Desai. All Rights Reserved.
