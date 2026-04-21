---
layout: home
---

<style>
/* Hero Image Theme */
:root {
  --primary: #4f46e5;
  --secondary: #ec4899;
  --accent: #f59e0b;
  --teal: #0891b2;
  --text-dark: #1e293b;
  --text-light: #64748b;
  --bg-light: #f8fafc;
  --bg-card: #ffffff;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

* { box-sizing: border-box; }

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg-light);
  color: var(--text-dark);
  margin: 0;
  line-height: 1.6;
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 100;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.nav-logo {
  font-size: 1.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.nav-links a:hover { color: var(--primary); }
.nav-links a.active { color: var(--primary); }

/* Hero Section */
.hero {
  position: relative;
  height: 85vh;
  min-height: 600px;
  max-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 70px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/qin.jpg') 60% center / cover no-repeat;
}

.hero-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(79, 70, 229, 0.75) 0%,
    rgba(236, 72, 153, 0.7) 50%,
    rgba(245, 158, 11, 0.65) 100%
  );
}

.hero-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%);
}

.hero-content {
  position: absolute;
  z-index: 2;
  text-align: left;
  color: white;
  padding: 40px;
  max-width: 800px;
  bottom: 80px;
  left: 40px;
}

.hero-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2), 0 20px 50px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  margin: 0 0 10px;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-title .sub {
  display: block;
  font-size: 0.45em;
  font-weight: 500;
  opacity: 0.9;
  margin-top: 5px;
  letter-spacing: 0.05em;
}

.hero-tagline {
  font-size: 1.25rem;
  margin: 0 0 30px;
  opacity: 0.95;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.hero-cta {
  display: inline-flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: white;
  color: var(--primary);
}

.btn-primary:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: white;
}

/* Scroll indicator */
.scroll-hint {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 0.85rem;
  opacity: 0.8;
  animation: bounce 2s infinite;
}

.scroll-hint::after {
  content: '↓';
  display: block;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 5px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

/* Main Content */
.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;
}

/* Section styles */
.section {
  margin-bottom: 80px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0 0 15px;
}

.section-subtitle {
  color: var(--text-light);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Card Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.card {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 35px;
  box-shadow: var(--shadow);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.card-icon.primary { background: linear-gradient(135deg, #e0e7ff, #c7d2fe); }
.card-icon.pink { background: linear-gradient(135deg, #fce7f3, #fbcfe8); }
.card-icon.amber { background: linear-gradient(135deg, #fef3c7, #fde68a); }
.card-icon.teal { background: linear-gradient(135deg, #cffafe, #a5f3fc); }

.card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--text-dark);
}

.card p {
  color: var(--text-light);
  margin: 0;
  line-height: 1.7;
}

/* Skills */
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 15px;
}

.skill-tag {
  background: #f1f5f9;
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-dark);
  transition: all 0.3s;
}

.skill-tag:hover {
  background: var(--primary);
  color: white;
}

/* Timeline */
.timeline-card {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 40px;
  box-shadow: var(--shadow);
}

.timeline {
  position: relative;
  padding-left: 35px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 5px;
  bottom: 5px;
  width: 3px;
  background: linear-gradient(180deg, var(--primary), var(--secondary), var(--accent));
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  padding-bottom: 30px;
}

.timeline-item:last-child { padding-bottom: 0; }

.timeline-item::before {
  content: '';
  position: absolute;
  left: -31px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  border: 3px solid var(--primary);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
}

.timeline-date {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 5px;
}

.timeline-content {
  color: var(--text-dark);
  font-weight: 500;
}

.timeline-content span {
  display: block;
  color: var(--text-light);
  font-weight: 400;
  font-size: 0.95rem;
  margin-top: 3px;
}

/* Contact */
.contact-section {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
  color: white;
}

.contact-section h2 {
  font-size: 2rem;
  margin: 0 0 15px;
}

.contact-section p {
  opacity: 0.9;
  margin: 0 0 30px;
  font-size: 1.1rem;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.contact-link {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}

.contact-link:hover {
  background: white;
  color: var(--primary);
  transform: translateY(-2px);
}

/* Footer */
.footer {
  background: #0f172a;
  color: #94a3b8;
  padding: 50px 40px;
  text-align: center;
}

.footer p { margin: 0; font-size: 0.9rem; }
.footer a { color: white; }

/* Responsive */
@media (max-width: 768px) {
  .nav { padding: 0 20px; }
  .nav-links { display: none; }

  .hero { height: 70vh; min-height: 500px; }
  .hero-avatar { width: 120px; height: 120px; }

  .main { padding: 60px 20px; }
  .section { margin-bottom: 60px; }

  .card-grid { grid-template-columns: 1fr; }
  .contact-section { padding: 40px 25px; }
}
</style>

<!-- Navigation -->
<nav class="nav">
  <a href="/" class="nav-logo">SQ</a>
  <ul class="nav-links">
    <li><a href="#about" class="active">About</a></li>
    <li><a href="#timeline">Timeline</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- Hero Section -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <h1 class="hero-title">
      Sorry Qin
      <span class="sub">覃佐睿</span>
    </h1>
    <p class="hero-tagline">Graduate Student at HUST • AI & Computer Vision Researcher</p>
    <div class="hero-cta">
      <a href="#about" class="btn btn-primary">Learn More</a>
      <a href="#contact" class="btn btn-secondary">Get in Touch</a>
    </div>
  </div>
  <div class="scroll-hint">Scroll to explore</div>
</section>

<!-- Main Content -->
<main class="main">

  <!-- About Section -->
  <section id="about" class="section">
    <div class="section-header">
      <h2 class="section-title">About Me</h2>
      <p class="section-subtitle">Passionate about building intelligent systems that understand visual data</p>
    </div>
    <div class="card-grid">
      <div class="card">
        <div class="card-icon primary">🎓</div>
        <h3>Education</h3>
        <p>Graduate student at Huazhong University of Science and Technology, specializing in AI and Computer Vision with a focus on practical applications.</p>
      </div>
      <div class="card">
        <div class="card-icon pink">🔬</div>
        <h3>Research Focus</h3>
        <p>Exploring the intersection of machine learning and visual understanding. Current work involves image recognition, object detection, and visual reasoning.</p>
      </div>
      <div class="card">
        <div class="card-icon amber">💼</div>
        <h3>Experience</h3>
        <p>Currently working as Assistant Algorithm Engineer at VIVO Imaging Algorithm Center, applying research to real-world computer vision challenges.</p>
      </div>
    </div>
  </section>


  <!-- Timeline Section -->
  <section id="timeline" class="section">
    <div class="section-header">
      <h2 class="section-title">Journey</h2>
      <p class="section-subtitle">Key milestones in my academic and professional path</p>
    </div>
    <div class="timeline-card">
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">Sep 2025 - Present</div>
          <div class="timeline-content">
            Assistant Algorithm Engineer
            <span>Imaging Algorithm Center, VIVO</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">Sep 2024 - Present</div>
          <div class="timeline-content">
            Started Graduate Studies
            <span>Huazhong University of Science and Technology</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">Jun 2024</div>
          <div class="timeline-content">
            Bachelor's Degree
            <span>Electronic Information Engineering</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2020 - 2024</div>
          <div class="timeline-content">
            Undergraduate Studies
            <span>HUST, Communications Engineering → AI/ML focus</span>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">Sep 2020</div>
          <div class="timeline-content">
            Journey Begins
            <span>Started at Huazhong University of Science and Technology</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section">
    <div class="contact-section">
      <h2>Let's Connect</h2>
      <p>Interested in collaboration or just want to say hello? Feel free to reach out!</p>
      <div class="contact-links">
        <a href="mailto:qinzuorui@outlook.com" class="contact-link">
          📧 Email
        </a>
        <a href="https://github.com/SorryQin" class="contact-link" target="_blank">
          🐙 GitHub
        </a>
        <a href="https://instagram.com/sorryqin2" class="contact-link" target="_blank">
          📸 Instagram
        </a>
      </div>
    </div>
  </section>

</main>

<script>
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
</script>
