# 🚀 Welcome To My Orbit

A modern, interactive portfolio website featuring space-themed aesthetics, smooth animations, and immersive 3D elements. This project showcases web development skills with a focus on JavaScript, Three.js, and interactive visual effects.


## ✨ Features

- **Animated 3D Moon** - Interactive Three.js moon model with realistic textures and lighting
- **Particle System** - Dynamic particle animations using particles.js for visual depth
- **Typing Animation** - Smooth typewriter effect with cursor animation on hero section
- **Smooth Scrolling** - Scroll-snap enabled full-page sections with smooth transitions
- **Reveal Animations** - Elements animate in as you scroll through the page
- **Responsive Design** - Fully mobile-friendly with adaptive layouts
- **Space Theme** - Modern dark mode with elegant typography and space-inspired design
- **Social Integration** - Quick links to social media and email contact

## 🛠️ Tech Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with animations and responsive design
- **JavaScript (ES6+)** - Core interactivity and animations
- **Three.js** - 3D moon rendering and animation
- **Particles.js** - Particle system for background effects
- **Font Awesome 6.4.0** - Social media icons
- **Google Fonts** - Typography (Inter, DM Mono, EB Garamond)

## 📁 Project Structure

```
.
├── index.html              # Main HTML file
├── moon.js                 # Three.js moon configuration
├── index.js                # Main JavaScript functionality
└── ressource/
    ├── css/
    │   └── style.css       # Stylesheets
    └── img/
        ├── profile.png     # Profile picture
        ├── moon.png        # Moon graphic
        └── texture-moon.jpg # Moon 3D texture
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local server (for proper texture loading)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-orbit-portfolio.git
   cd my-orbit-portfolio
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📱 Sections

### 🏠 Home Section
- Animated typewriter hero text
- 3D rotating moon visualization
- Welcoming introduction message

### 👤 About Section
- Profile picture with grayscale filter
- Personal developer bio
- Focus areas and interests
- Career goals and current projects

### 📧 Contact Section
- Direct email link
- Social media buttons (GitHub, Instagram, LinkedIn, Discord)
- Call-to-action messaging

## 🎨 Customization

### Change Typewriter Text
Edit the `text` variable in `index.html`:
```javascript
const text = "Your Custom Text Here";
```

### Adjust Animation Speeds
Modify these constants in `index.html`:
```javascript
const typeSpeed = 90;        // Typing speed (ms)
const eraseSpeed = 50;       // Erasing speed (ms)
const pauseAfterType = 1500; // Pause after typing (ms)
const pauseAfterErase = 300; // Pause after erasing (ms)
```

### Customize Colors
Update CSS variables in `style.css`:
```css
:root {
  --bg-color: #121212;
  --text-color: #e0e0e0;
  --accent-color: #ffffff;
}
```

### Particle Configuration
Adjust particles.js settings in `index.js`:
```javascript
particles: {
  number: { value: 40 },     // Number of particles
  // ... more options
}
```

## 🌐 Live Demo

[View Live Portfolio](https://just-asf.github.io/new-portofolio/)

## 📚 Learning Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Particles.js](https://vincentgarreau.com/particles.js/)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)

## 🎯 Future Enhancements

- [ ] Add project showcase section with case studies
- [ ] Implement contact form with backend integration
- [ ] Add dark/light mode toggle
- [ ] Mobile menu navigation
- [ ] Blog section for technical articles
- [ ] Performance optimization and lazy loading
- [ ] Multi-language support

## 🔧 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ❌ Not Supported |

## 📊 Performance

- **Optimized 3D Rendering** - Efficient Three.js implementation
- **GPU Acceleration** - WebGL hardware rendering
- **Smooth 60 FPS** - Optimized animation loops
- **Responsive Particles** - Dynamic particle count based on density

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Muhammad Ashfa**

- 📧 Email: [muhammadashfa2006@gmail.com](mailto:muhammadashfa2006@gmail.com)
- 🐙 GitHub: [just-asf](https://github.com/just-asf/just-asf)
- 💼 LinkedIn: [Muhammad Ashfa](https://www.linkedin.com/in/muhammad-ashfa-2248772a5?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- 📱 Instagram: [@just.asf](https://www.instagram.com/just.asf?igsh=dWtrOHM3aDB6NDl1)

## 🙏 Acknowledgments

- Inspired by space and astronomy themes
- Built with modern web technologies
- Community feedback and suggestions
- Open source libraries and resources

---

<div align="center">

**[⬆ Back to Top](#-welcome-to-my-orbit)**

Made with ❤️ and ☕ by Muhammad Ashfa

</div>
