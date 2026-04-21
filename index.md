---
layout: page
---

<!-- Skip to main content link for accessibility -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Neural Network Canvas Background -->
<canvas id="neuralCanvas"></canvas>

<!-- Main Container - Wide Layout -->
<div class="main-container" id="main-content" role="main">
  
  <!-- Profile Section - Horizontal Layout -->
  <div class="profile-section">
    <!-- Left: Avatar + Character -->
    <div class="avatar-section">
      <div class="avatar-frame">
        <img src="images/qin.jpg" alt="Profile photo of Sorry Qin (Qin Zuorui)" class="avatar">
      </div>
      <div class="avatar-glow"></div>
      <div class="status-indicator">
        <span class="status-dot"></span>
        <span>ONLINE</span>
      </div>
      <!-- Cyberpunk Character Decoration -->
      <div class="cyber-character">
        <svg viewBox="0 0 200 300" class="character-svg">
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
          <path class="body-outline" d="M100,20 L100,20 C120,20 130,35 130,50 L130,55 C145,60 155,75 155,90 L155,95 C160,100 160,110 155,115 L145,120 L145,180 L155,185 L155,220 C155,235 145,250 130,250 L130,290 L100,290 L100,250 L70,250 C55,250 45,235 45,220 L45,185 L55,180 L55,120 L45,115 C40,110 40,100 45,95 L45,90 C45,75 55,60 70,55 L70,50 C70,35 80,20 100,20 Z" fill="rgba(138,43,226,0.1)" stroke="url(#neonGrad)" stroke-width="2" filter="url(#glow)"/>
          <rect x="70" y="35" width="60" height="20" rx="5" fill="rgba(0,255,255,0.3)" stroke="#00ffff" stroke-width="1" filter="url(#glow)"/>
          <line x1="75" y1="45" x2="125" y2="45" stroke="#00ffff" stroke-width="2" class="visor-line"/>
          <circle cx="100" cy="90" r="8" fill="none" stroke="#8a2be2" stroke-width="2" filter="url(#glow)" class="chest-pulse"/>
          <line x1="100" y1="98" x2="100" y2="150" stroke="#8a2be2" stroke-width="1" opacity="0.5"/>
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
        <a href="mailto:qinzuorui@outlook.com" class="cyber-link" aria-label="Send email to qinzuorui@outlook.com">
          <span class="link-icon" aria-hidden="true">▶</span> <span class="link-text">Email: qinzuorui@outlook.com</span>
        </a>
        <a href="https://github.com/SorryQin" class="cyber-link" target="_blank" rel="noopener noreferrer" aria-label="Visit Sorry Qin's GitHub profile (opens in new tab)">
          <span class="link-icon" aria-hidden="true">▶</span> <span class="link-text">GitHub: github.com/SorryQin</span>
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
