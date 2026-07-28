# 💼 Hanif Daffa Dzulfahmi - Premium Portfolio

> Pioneering Future Technical Innovations - IT Student & Network Enthusiast

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)

## ✨ Fitur Utama

### 🎨 **Design Premium**
- ✅ **Glassmorphism Effects** - Modern frosted glass aesthetic
- ✅ **3D Particle Background** - Interactive Three.js starfield animation
- ✅ **Smooth Animations** - Custom keyframe animations (float, pulse, spin)
- ✅ **Gradient Glow Borders** - Dynamic hover effects
- ✅ **Custom Cursor** - Animated cursor ring and dot
- ✅ **Dark Theme** - Professional dark mode design

### 🌐 **Multilingual Support**
- 🇬🇧 **English** - Professional international communication
- 🇮🇩 **Bahasa Indonesia** - Native language support
- 🇯🇵 **Japanese (日本語)** - International expansion ready

### 📱 **Fully Responsive**
- 📱 Mobile First Design
- 💻 Tablet Optimized
- 🖥️ Desktop Enhanced
- 🎯 Adaptive Grid Layouts

### 🚀 **Interactive Features**
- ⌨️ **Command Palette** - Quick navigation with `Ctrl+K`
- 🎯 **Scroll Progress Bar** - Visual scroll indicator
- 🎬 **Cinematic Intro** - Animated loading sequence
- 🔄 **Language Switcher** - Instant language toggle
- 🎭 **Project Modals** - Detailed project showcases
- 📊 **Animated Stats** - Count-up number animations
- 🎨 **3D Card Tilt** - Interactive ID card with parallax
- 🌀 **Galaxy Orbit System** - Rotating skill visualization

### 🎯 **Sections**
1. **Hero Section** - Dynamic introduction with ID card
2. **Bento Grid** - Skill competency cards
3. **Skill Galaxy** - Orbital skill visualization
4. **Personal Story** - About me narrative
5. **Tech Ecosystem** - Tools and technologies
6. **Project Showcase** - Filtered project gallery
7. **Language Proficiency** - Interactive language cards
8. **Learning Journey** - Timeline roadmap
9. **Statistics** - Achievement counters
10. **Contact** - Direct communication links

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No framework dependencies
- **Three.js** - 3D graphics rendering

### External Resources
- **Lucide Icons** - Modern icon system
- **Google Fonts** - Custom typography (Syne, DM Sans, Noto Sans JP)

## 📁 Project Structure

```
portofolio-main/
├── index.html          # Main HTML file dengan semua sections
├── style.css          # Complete styling dengan animations
├── main.js            # Core JavaScript logic
└── README.md          # This file
```

## 🚀 Quick Start

### 1. Clone atau Download
```bash
git clone https://github.com/kumabear-hdd/portfolio.git
# atau download ZIP
```

### 2. Buka di Browser
```bash
# Langsung buka index.html di browser
# Atau gunakan local server:
python -m http.server 8000
# Buka: http://localhost:8000
```

### 3. Customization
Edit file-file berikut untuk personalisasi:

#### **index.html** - Update informasi pribadi:
```html
<!-- Hero Section -->
<h1 class="hero-name">
  <span class="hero-name-gradient">NAMA ANDA</span><br>LENGKAP
</h1>

<!-- Contact Section -->
<a href="mailto:email@example.com">Email Anda</a>
```

#### **main.js** - Update translations:
```javascript
const translations = {
  en: {
    "hero-badge": "Your tagline here",
    // ... update semua teks
  },
  id: { /* Indonesian */ },
  jp: { /* Japanese */ }
};
```

#### **style.css** - Custom colors:
```css
:root {
  --primary: #3b6bff;    /* Warna utama */
  --secondary: #8b46ff;  /* Warna sekunder */
  --accent: #00d4c8;     /* Warna aksen */
  /* ... */
}
```

## ⚡ Performance Optimization

### Best Practices yang Diterapkan:
- ✅ **Lazy Loading** - Defer non-critical scripts
- ✅ **CSS Optimization** - Minimal selectors
- ✅ **Image Optimization** - SVG favicon, no heavy images
- ✅ **Smooth Scrolling** - Hardware-accelerated animations
- ✅ **Event Optimization** - Passive scroll listeners

### Loading Speed:
- 🚀 **First Contentful Paint** < 1.5s
- 🚀 **Time to Interactive** < 3.0s
- 🚀 **Cumulative Layout Shift** < 0.1

## 🎨 Color Palette

```css
/* Primary Colors */
--bg: #03050f           /* Deep Space Black */
--primary: #3b6bff      /* Electric Blue */
--secondary: #8b46ff    /* Violet Purple */
--accent: #00d4c8       /* Cyan Teal */

/* Text Colors */
--text: #e8edf8         /* Snow White */
--text-sec: #6b7fa3     /* Muted Blue */
--text-muted: #3a4a6b   /* Deep Muted */

/* Surface Colors */
--surface: #0d1425      /* Dark Surface */
--glass: rgba(13, 20, 37, 0.65) /* Glass Effect */
```

## 🎯 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| Opera   | ✅ Latest |

**Note:** Modern browsers with ES6+ support required for all features.

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
Default:      /* < 768px  - Mobile */
@media (min-width: 768px)  /* Tablet */
@media (max-width: 767px)  /* Mobile Overrides */
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` / `Cmd+K` | Open Command Palette |
| `ESC` | Close Modal/Palette |
| `Tab` | Navigate interactive elements |

## 🎓 Learning Resources

Proyek ini menggunakan teknik-teknik modern:
- [Glassmorphism UI](https://glassmorphism.com/)
- [Three.js Documentation](https://threejs.org/docs/)
- [CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 📄 License

© 2026 Hanif Daffa Dzulfahmi. All rights reserved.

**Personal Portfolio Project** - Free to use as reference, please give credit if you use significant portions.

## 📞 Contact

- 📧 Email: [hanifdaffa1207@gmail.com](mailto:hanifdaffa1207@gmail.com)
- 💼 LinkedIn: [Hanif Daffa Dzulfahmi](https://www.linkedin.com/in/hanif-daffa-dzulfahmi/)
- 🐙 GitHub: [@kumabear-hdd](https://github.com/kumabear-hdd)
- 💬 WhatsApp: [+62 815-8513-4544](https://wa.me/6281585134544)

---

<div align="center">

**Built with** ❤️ **using Vanilla JS, CSS3, and Three.js**

⭐ Star this repo if you find it helpful!

</div>
