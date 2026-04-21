---
layout: page
---

<style>
/* Creative/Colorful Theme */
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #f59e0b;
  --teal: #14b8a6;
  --purple: #a855f7;
  --text-dark: #1e293b;
  --text-light: #64748b;
  --bg-light: #fafafa;
  --bg-card: #ffffff;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.12);
}

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #f0f9ff 100%);
  color: var(--text-dark);
  min-height: 100vh;
  line-height: 1.6;
}

/* Navigation */
.navigation-wrapper {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.site-name a {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.top-navigation li a {
  color: var(--text-light);
  font-weight: 600;
  transition: color 0.3s;
}

.top-navigation li a:hover {
  color: var(--primary);
}

.top-navigation-current a {
  color: var(--primary) !important;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 80px 20px 60px;
  position: relative;
}

/* Decorative blobs */
.hero-section::before,
.hero-section::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  z-index: -1;
}

.hero-section::before {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(236, 72, 153, 0.3));
  top: -100px;
  left: -100px;
}

.hero-section::after {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(20, 184, 166, 0.3));
  bottom: 0;
  right: -50px;
}

/* Avatar */
.avatar-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 30px;
}

.avatar-wrapper img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: var(--shadow);
}

.avatar-decoration {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent), var(--teal));
  background-size: 300% 300%;
  animation: gradient-move 5s ease infinite;
  z-index: -1;
}

@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Name styling */
.hero-name {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 900;
  margin: 0 0 10px;
  letter-spacing: -2px;
}

.hero-name .chinese {
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-light);
  letter-spacing: 0;
  margin-top: 5px;
}

.hero-tagline {
  font-size: 1.25rem;
  color: var(--text-light);
  max-width: 500px;
  margin: 0 auto 30px;
}

.hero-tagline strong {
  color: var(--primary);
}

/* Colorful pills */
.pill-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
}

.pill {
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  transition: transform 0.3s, box-shadow 0.3s;
}

.pill:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.pill-primary { background: linear-gradient(135deg, var(--primary), #818cf8); }
.pill-secondary { background: linear-gradient(135deg, var(--secondary), #f472b6); }
.pill-accent { background: linear-gradient(135deg, var(--accent), #fbbf24); }
.pill-teal { background: linear-gradient(135deg, var(--teal), #5eead4); }
.pill-purple { background: linear-gradient(135deg, var(--purple), #c084fc); }

/* Content cards */
.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px 60px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.card {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 30px;
  box-shadow: var(--shadow);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.card-primary::before { background: linear-gradient(90deg, var(--primary), var(--secondary)); }
.card-secondary::before { background: linear-gradient(90deg, var(--teal), var(--accent)); }
.card-purple::before { background: linear-gradient(90deg, var(--purple), var(--secondary)); }

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.card h2 {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 15px;
  color: var(--text-dark);
}

.card p {
  color: var(--text-light);
  margin: 0;
  line-height: 1.7;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.skill-tag {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 12px 15px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--primary);
  transition: all 0.3s;
}

.skill-tag:hover {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-color: transparent;
  transform: scale(1.05);
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--primary), var(--secondary), var(--accent), var(--teal));
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  padding-bottom: 25px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -26px;
  top: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  border: 3px solid var(--primary);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
}

.timeline-date {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 5px;
}

.timeline-content {
  color: var(--text-dark);
}

.timeline-content strong {
  color: var(--text-dark);
}

/* Contact section */
.contact-bar {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 30px;
  box-shadow: var(--shadow);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 50px;
  transition: all 0.3s;
}

.contact-item:hover {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
}

.contact-icon {
  font-size: 1.2rem;
}

/* Footer */
.footer-wrap {
  background: transparent;
  padding: 40px 20px;
}

.footer-wrap footer {
  text-align: center;
  color: var(--text-light);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 60px 20px 40px;
  }

  .avatar-wrapper {
    width: 150px;
    height: 150px;
  }

  .avatar-wrapper img {
    width: 150px;
    height: 150px;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-bar {
    flex-direction: column;
  }
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

<div class="hero-section">
  <div class="avatar-wrapper">
    <div class="avatar-decoration"></div>
    <img src="/images/qin.jpg" alt="Sorry Qin" loading="eager">
  </div>

  <h1 class="hero-name">
    Sorry Qin
    <span class="chinese">覃佐睿</span>
  </h1>

  <p class="hero-tagline">
    Postgraduate at <strong>HUST</strong> • AI & Computer Vision Researcher • Turning data into insights
  </p>

  <div class="pill-container">
    <span class="pill pill-primary">🧠 AI Research</span>
    <span class="pill pill-secondary">👁️ Computer Vision</span>
    <span class="pill pill-accent">⚡ Deep Learning</span>
    <span class="pill pill-teal">🔬 ML Systems</span>
  </div>
</div>

<div class="content-wrapper">
  <div class="card-grid">
    <div class="card card-primary fade-in">
      <div class="card-icon">📚</div>
      <h2>About Me</h2>
      <p>Graduate student at Huazhong University of Science and Technology, specializing in Artificial Intelligence and Computer Vision. Passionate about building intelligent systems that can perceive and understand visual data.</p>
    </div>

    <div class="card card-secondary fade-in">
      <div class="card-icon">🛠️</div>
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">PyTorch</span>
        <span class="skill-tag">TensorFlow</span>
        <span class="skill-tag">OpenCV</span>
        <span class="skill-tag">Deep Learning</span>
        <span class="skill-tag">C++</span>
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">Git</span>
      </div>
    </div>

    <div class="card card-purple fade-in">
      <div class="card-icon">🎯</div>
      <h2>Research Focus</h2>
      <p>Exploring the intersection of machine learning and visual understanding. Current work involves developing novel approaches for image recognition, object detection, and visual reasoning systems.</p>
    </div>
  </div>

  <div class="card fade-in" style="margin-bottom: 40px;">
    <h2 style="color: var(--primary);">📅 Timeline</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">Sep 2025</div>
        <div class="timeline-content"><strong>Assistant Algorithm Engineer</strong> — Imaging Algorithm Center, VIVO</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">Sep 2024</div>
        <div class="timeline-content"><strong>Started Graduate Studies</strong> — Huazhong University of Science and Technology</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">Jun 2024</div>
        <div class="timeline-content"><strong>Bachelor's Degree</strong> — Electronic Information Engineering</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2020 - 2024</div>
        <div class="timeline-content">Undergraduate studies at HUST, Communications Engineering → AI/ML focus</div>
      </div>
    </div>
  </div>

  <div class="contact-bar fade-in">
    <a href="mailto:qinzuorui@outlook.com" class="contact-item">
      <span class="contact-icon">📧</span>
      qinzuorui@outlook.com
    </a>
    <a href="https://github.com/SorryQin" class="contact-item" target="_blank">
      <span class="contact-icon">🐙</span>
      GitHub
    </a>
    <a href="https://instagram.com/sorryqin2" class="contact-item" target="_blank">
      <span class="contact-icon">📸</span>
      Instagram
    </a>
  </div>
</div>

<script>
// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
</script>
