---
layout: page
---

<!-- Neural Network Canvas Background -->
<canvas id="neuralCanvas"></canvas>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- Main Container - Wide Layout -->
<div class="main-container">
  
  <!-- Profile Section - Horizontal Layout -->
  <div class="profile-section">
    <!-- Left: Avatar + Character -->
    <div class="avatar-section">
      <div class="avatar-frame">
        <img src="images/qin.jpg" alt="Sorry Qin" class="avatar">
      </div>
      <div class="avatar-glow"></div>
      <div class="status-indicator">
        <span class="status-dot"></span>
        <span>ONLINE</span>
      </div>
      <!-- Cyberpunk Character Decoration -->
      <div class="cyber-character">
        <svg viewBox="0 0 200 300" class="character-svg">
          <!-- Body outline -->
          <defs>
            <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#00ffff"/>
              <stop offset="50%" style="stop-color:#8a2be2"/>
              <stop offset="100%" style="stop-color:#ff00ff"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <!-- Silhouette -->
          <path class="body-outline" d="M100,20 L100,20 C120,20 130,35 130,50 L130,55 C145,60 155,75 155,90 L155,95 C160,100 160,110 155,115 L145,120 L145,180 L155,185 L155,220 C155,235 145,250 130,250 L130,290 L100,290 L100,250 L70,250 C55,250 45,235 45,220 L45,185 L55,180 L55,120 L45,115 C40,110 40,100 45,95 L45,90 C45,75 55,60 70,55 L70,50 C70,35 80,20 100,20 Z" fill="rgba(138,43,226,0.1)" stroke="url(#neonGrad)" stroke-width="2" filter="url(#glow)"/>
          <!-- Visor/Face -->
          <rect x="70" y="35" width="60" height="20" rx="5" fill="rgba(0,255,255,0.3)" stroke="#00ffff" stroke-width="1" filter="url(#glow)"/>
          <line x1="75" y1="45" x2="125" y2="45" stroke="#00ffff" stroke-width="2" class="visor-line"/>
          <!-- Chest detail -->
          <circle cx="100" cy="90" r="8" fill="none" stroke="#8a2be2" stroke-width="2" filter="url(#glow)" class="chest-pulse"/>
          <line x1="100" y1="98" x2="100" y2="150" stroke="#8a2be2" stroke-width="1" opacity="0.5"/>
          <!-- Shoulder pads -->
          <path d="M45,75 L55,70 L55,95 L45,90 Z" fill="rgba(0,255,255,0.2)" stroke="#00ffff" stroke-width="1"/>
          <path d="M145,75 L155,70 L155,95 L145,90 Z" fill="rgba(0,255,255,0.2)" stroke="#00ffff" stroke-width="1"/>
        </svg>
      </div>
    </div>

    <!-- Center: Info -->
    <div class="info-section">
      <div class="name-block">
        <h1 class="name-main">SORRY QIN</h1>
        <p class="name-chinese">覃佐睿</p>
      </div>
      
      <div class="tags-row">
        <span class="tag">postgraduate</span>
        <span class="tag">HUST</span>
        <span class="tag">Computer Vision</span>
        <span class="tag">AI</span>
      </div>

      <p class="bio-text">
        A postgraduate student at Huazhong University of Science and Technology, passionate about <span class="highlight">Artificial Intelligence</span> and <span class="highlight">Computer Vision</span>. Currently working as Assistant Algorithm Engineer at VIVO.
      </p>

      <div class="contact-row">
        <a href="mailto:qinzuorui@outlook.com" class="cyber-link">
          <span class="link-icon">▶</span> qinzuorui@outlook.com
        </a>
        <a href="https://github.com/SorryQin" class="cyber-link" target="_blank">
          <span class="link-icon">▶</span> github.com/SorryQin
        </a>
      </div>

      <!-- Divider -->
      <div class="section-divider">
        <div class="divider-line"></div>
        <span class="divider-text">// RESEARCH INTERESTS</span>
        <div class="divider-line"></div>
      </div>

      <!-- Interests Row -->
      <div class="interests-row">
        <div class="interest-card">
          <div class="interest-icon">◈</div>
          <h3>AI Systems</h3>
          <p>Building intelligent systems for perception and interaction</p>
        </div>
        <div class="interest-card">
          <div class="interest-icon">◈</div>
          <h3>Machine Learning</h3>
          <p>Deep learning algorithms and neural architectures</p>
        </div>
        <div class="interest-card">
          <div class="interest-icon">◈</div>
          <h3>Computer Vision</h3>
          <p>Image recognition, detection, and visual understanding</p>
        </div>
      </div>
    </div>

    <!-- Right: Stats + Timeline -->
    <div class="stats-section">
      <div class="stat-card">
        <div class="stat-value">2024</div>
        <div class="stat-label">BACHELOR</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">HUST</div>
        <div class="stat-label">UNIVERSITY</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">CV</div>
        <div class="stat-label">RESEARCH</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">2025</div>
        <div class="stat-label">VIVO</div>
      </div>

      <!-- Divider -->
      <div class="section-divider">
        <div class="divider-line"></div>
        <span class="divider-text">// TIMELINE</span>
        <div class="divider-line"></div>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">SEP 2025</span>
            <p class="timeline-text">Assistant Algorithm Engineer @ VIVO</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">SEP 2024</span>
            <p class="timeline-text">Graduate Studies @ HUST</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">JUN 2024</span>
            <p class="timeline-text">Bachelor of Engineering Degree</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">SEP 2020</span>
            <p class="timeline-text">Undergraduate @ HUST</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Corner Decorations -->
  <div class="corner top-left"></div>
  <div class="corner top-right"></div>
  <div class="corner bottom-left"></div>
  <div class="corner bottom-right"></div>
  <div class="scan-line"></div>
</div>

<style>
/* ===== BASE ===== */
body {
  background-color: #0a0a12;
  color: #e0e0ff;
  font-family: 'Courier New', monospace;
  min-height: 100vh;
  overflow-x: hidden;
}

/* ===== NEURAL NETWORK CANVAS ===== */
#neuralCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  animation: neuralFadeIn 2s ease-out forwards;
}

@keyframes neuralFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Vignette overlay for better content readability */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(10, 10, 18, 0.6) 100%);
  pointer-events: none;
  z-index: 0;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  #neuralCanvas {
    animation: none;
    opacity: 0.7;
  }
}

/* ===== MAIN CONTAINER - WIDE LAYOUT ===== */
.main-container {
  position: relative;
  max-width: 1600px;
  margin: 2rem auto;
  padding: 0 2rem;
  min-height: calc(100vh - 200px);
  z-index: 1;
}

/* ===== PROFILE SECTION - 3 COLUMN LAYOUT ===== */
.profile-section {
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  gap: 2.5rem;
  background: linear-gradient(135deg, rgba(20, 20, 40, 0.9) 0%, rgba(30, 30, 60, 0.8) 100%);
  border: 1px solid rgba(138, 43, 226, 0.5);
  border-radius: 8px;
  padding: 2.5rem;
  position: relative;
  overflow: visible;
}

.profile-section::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, #8a2be2, transparent);
}

/* ===== LEFT COLUMN - AVATAR ===== */
.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.avatar-frame {
  width: 150px;
  height: 150px;
  padding: 3px;
  background: linear-gradient(135deg, #8a2be2, #00ffff);
  border-radius: 8px;
  position: relative;
}

.avatar-frame::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #8a2be2, #00ffff, #ff00ff, #8a2be2);
  border-radius: 10px;
  z-index: -1;
  animation: borderRotate 4s linear infinite;
  background-size: 300% 300%;
}

@keyframes borderRotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  filter: grayscale(20%);
}

.avatar-glow {
  position: absolute;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%);
  filter: blur(30px);
  z-index: -1;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  animation: blink 1s infinite;
  box-shadow: 0 0 10px #00ff00;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* ===== CYBERPUNK CHARACTER ===== */
.cyber-character {
  margin-top: 0.5rem;
  width: 150px;
  height: 220px;
  position: relative;
}

.character-svg {
  width: 100%;
  height: 100%;
}

.body-outline {
  animation: characterGlow 2s ease-in-out infinite alternate;
}

@keyframes characterGlow {
  0% { filter: url(#glow) drop-shadow(0 0 5px rgba(0,255,255,0.5)); }
  100% { filter: url(#glow) drop-shadow(0 0 20px rgba(138,43,226,0.8)); }
}

.visor-line {
  stroke-dasharray: 50;
  animation: visorScan 2s linear infinite;
}

@keyframes visorScan {
  0% { stroke-dashoffset: 50; }
  100% { stroke-dashoffset: 0; }
}

.chest-pulse {
  animation: chestPulse 1.5s ease-in-out infinite;
}

@keyframes chestPulse {
  0%, 100% { r: 8; opacity: 1; }
  50% { r: 10; opacity: 0.7; }
}

/* ===== CENTER COLUMN - INFO ===== */
.info-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  max-height: 100%;
  overflow-y: auto;
}

.name-block {
  margin: 0;
}

.name-main {
  font-size: 2rem;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(90deg, #00ffff, #8a2be2, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 3px;
  filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.5));
  animation: nameGlow 3s ease-in-out infinite alternate;
}

@keyframes nameGlow {
  0% { filter: drop-shadow(0 0 10px rgba(0,255,255,0.5)); }
  100% { filter: drop-shadow(0 0 25px rgba(138,43,226,0.7)); }
}

.name-chinese {
  font-size: 1.3rem;
  color: #8a2be2;
  margin: 0.3rem 0 0 0;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tag {
  padding: 0.4rem 1rem;
  background: rgba(138, 43, 226, 0.2);
  border: 1px solid rgba(138, 43, 226, 0.5);
  border-radius: 4px;
  font-size: 0.8rem;
  color: #b0b0ff;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(138, 43, 226, 0.4);
  box-shadow: 0 0 15px rgba(138, 43, 226, 0.5);
}

.bio-text {
  font-size: 1rem;
  color: #c0c0d0;
  line-height: 1.8;
  margin: 0;
}

.highlight {
  color: #00ffff;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
}

.contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.cyber-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #00ffff;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.cyber-link:hover {
  background: rgba(0, 255, 255, 0.15);
  border-color: #00ffff;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  text-shadow: 0 0 8px #00ffff;
  transform: translateY(-2px);
}

.link-icon {
  font-size: 0.7rem;
}

/* ===== INTERESTS ===== */
.interests-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
}

.interest-card {
  background: rgba(20, 20, 40, 0.8);
  border: 1px solid rgba(138, 43, 226, 0.3);
  border-radius: 6px;
  padding: 0.8rem 0.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;
}

.interest-card:hover {
  border-color: #8a2be2;
  box-shadow: 0 0 25px rgba(138, 43, 226, 0.4);
  transform: translateY(-5px);
}

.interest-icon {
  font-size: 1.5rem;
  color: #8a2be2;
  margin-bottom: 0.3rem;
  text-shadow: 0 0 15px rgba(138, 43, 226, 0.8);
}

.interest-card h3 {
  font-size: 0.85rem;
  color: #e0e0ff;
  margin: 0 0 0.2rem 0;
  text-shadow: none;
}

.interest-card p {
  font-size: 0.7rem;
  color: #9090a0;
  margin: 0;
  line-height: 1.3;
}

/* ===== RIGHT COLUMN - STATS + TIMELINE ===== */
.stats-section {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.stat-card {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(138, 43, 226, 0.5);
  padding: 0.8rem 1rem;
  text-align: center;
  position: relative;
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: #00ffff;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #8a2be2, #00ffff);
}

.stat-value {
  font-size: 1.4rem;
  font-weight: bold;
  color: #8a2be2;
  text-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
}

.stat-label {
  font-size: 0.7rem;
  color: #808090;
  letter-spacing: 2px;
  margin-top: 0.2rem;
}

/* ===== TIMELINE ===== */
.timeline {
  position: relative;
  padding-left: 1.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #8a2be2, #00ffff, #8a2be2);
}

.timeline-item {
  position: relative;
  padding: 0.6rem 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background: #0a0a12;
  border: 2px solid #8a2be2;
  border-radius: 50%;
  z-index: 1;
  transition: all 0.3s ease;
}

.timeline-item:hover::before {
  background: #8a2be2;
  box-shadow: 0 0 15px #8a2be2;
}

.timeline-content {
  background: rgba(20, 20, 40, 0.6);
  border: 1px solid rgba(138, 43, 226, 0.2);
  border-radius: 4px;
  padding: 0.6rem 0.8rem;
}

.timeline-date {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  background: linear-gradient(90deg, #8a2be2, #6a1b9a);
  color: #fff;
  font-size: 0.65rem;
  font-weight: bold;
  border-radius: 3px;
  margin-bottom: 0.3rem;
}

.timeline-text {
  font-size: 0.8rem;
  color: #c0c0d0;
  margin: 0;
  line-height: 1.4;
}

/* ===== SECTION DIVIDER ===== */
.section-divider {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0.5rem 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.5), transparent);
}

.divider-text {
  font-size: 0.75rem;
  color: #8a2be2;
  letter-spacing: 1px;
  white-space: nowrap;
}

/* ===== CORNER DECORATIONS ===== */
.corner {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid #8a2be2;
  pointer-events: none;
}

.corner.top-left {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.corner.top-right {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}

.corner.bottom-left {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}

.corner.bottom-right {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}

/* ===== SCAN LINE ===== */
.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #8a2be2, #00ffff, #8a2be2, transparent);
  animation: scanLine 4s linear infinite;
}

@keyframes scanLine {
  0% { top: 0; opacity: 1; }
  100% { top: 100%; opacity: 0.2; }
}

/* ===== HEADINGS ===== */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Courier New', monospace;
  font-weight: bold;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.3rem; }
h3 { font-size: 1rem; }

/* ===== LINKS ===== */
a {
  color: #00ffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: #ff00ff;
  text-shadow: 0 0 8px rgba(255, 0, 255, 0.8);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1400px) {
  .main-container {
    max-width: 95%;
  }
  
  .profile-section {
    grid-template-columns: 220px 1fr 280px;
    gap: 2rem;
    padding: 2rem;
  }
  
  .name-main {
    font-size: 1.8rem;
  }
  
  .bio-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 1100px) {
  .profile-section {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
  
  .avatar-section {
    grid-column: 1 / -1;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
  }
  
  .cyber-character {
    display: none;
  }
  
  .stats-section {
    grid-column: 1 / -1;
  }
  
  .interests-row {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .main-container {
    padding: 0 1rem;
    margin: 1rem auto;
  }
  
  .profile-section {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  .avatar-section {
    flex-direction: column;
  }
  
  .name-main {
    font-size: 1.6rem;
  }
  
  .interests-row {
    grid-template-columns: 1fr;
  }
  
  .avatar-frame {
    width: 140px;
    height: 140px;
  }
  
  .bio-text {
    font-size: 0.85rem;
  }
  
  .tag {
    font-size: 0.7rem;
    padding: 0.3rem 0.7rem;
  }
  
  .cyber-link {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>

<script src="assets/js/neural-network.js"></script>
