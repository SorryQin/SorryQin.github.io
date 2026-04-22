---
layout: null
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Startups - Sorry Qin</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="icon" href="/images/fav.ico">
</head>
<body>

<style>
:root {
  --primary: #4f46e5;
  --secondary: #ec4899;
  --text-dark: #1e293b;
  --text-light: #64748b;
  --bg-light: #f8fafc;
  --bg-card: #ffffff;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --nav-height: 70px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg-light);
  color: var(--text-dark);
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 1000;
  height: var(--nav-height);
  padding: 0 clamp(16px, 4vw, 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-logo {
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #818cf8, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: clamp(16px, 3vw, 35px);
  list-style: none;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  transition: all 0.3s;
  padding: 8px 0;
  position: relative;
  white-space: nowrap;
}

.nav-links a:hover { color: white; }

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #818cf8, #c084fc);
  transition: width 0.3s;
}

.nav-links a:hover::after { width: 100%; }

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 1001;
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background: white;
  transition: all 0.3s;
  border-radius: 2px;
}

.nav-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.nav-toggle.active span:nth-child(2) { opacity: 0; }
.nav-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

.nav-mobile {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.98);
  z-index: 999;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.nav-mobile.active {
  opacity: 1;
  pointer-events: auto;
}

.nav-mobile a {
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 12px 24px;
  transition: color 0.3s;
}

.nav-mobile a:hover { color: #818cf8; }

.page-header {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  padding: calc(var(--nav-height) + clamp(40px, 8vw, 80px)) clamp(16px, 4vw, 40px) clamp(30px, 5vw, 60px);
  text-align: center;
}

.page-title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin: 0;
}

.main {
  flex: 1;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: clamp(24px, 5vw, 60px) clamp(16px, 4vw, 40px);
}

.content-section {
  background: var(--bg-card);
  border-radius: clamp(12px, 2vw, 20px);
  padding: clamp(20px, 4vw, 40px);
  box-shadow: var(--shadow);
  margin-bottom: clamp(20px, 4vw, 40px);
}

.content-section h2 {
  font-size: clamp(1.25rem, 3vw, 1.8rem);
  font-weight: 700;
  color: var(--text-dark);
  margin: 0 0 clamp(16px, 3vw, 25px);
  padding-bottom: clamp(10px, 2vw, 15px);
  border-bottom: 2px solid #e2e8f0;
}

.content-section p {
  color: var(--text-light);
  line-height: 1.8;
  margin: 0 0 clamp(16px, 3vw, 20px);
  font-size: clamp(0.9rem, 1.8vw, 1rem);
}

.placeholder {
  background: #f1f5f9;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  color: var(--text-light);
}

.footer {
  background: #0f172a;
  color: #94a3b8;
  padding: clamp(24px, 4vw, 40px);
  text-align: center;
  margin-top: auto;
}

.footer p {
  margin: 0;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
}

@media (max-width: 1024px) {
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
  .nav-mobile { display: flex; }
}

@media (max-width: 480px) {
  .page-header { padding-top: calc(var(--nav-height) + 30px); }
  .content-section { padding: 20px; }
}
</style>

<nav class="nav">
  <a href="/" class="nav-logo">SQ</a>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/#about">About</a></li>
    <li><a href="/publications/">Publications</a></li>
    <li><a href="/awards/">Awards</a></li>
    <li><a href="/hobbies/">Hobbies</a></li>
    <li><a href="/blogs/">Blogs</a></li>
  </ul>
  <button class="nav-toggle" aria-label="Toggle menu">
    <span></span>
    <span></span>
    <span></span>
  </button>
</nav>

<div class="nav-mobile">
  <a href="/">Home</a>
  <a href="/#about">About</a>
  <a href="/publications/">Publications</a>
  <a href="/awards/">Awards</a>
  <a href="/hobbies/">Hobbies</a>
  <a href="/blogs/">Blogs</a>
</div>

<header class="page-header">
  <h1 class="page-title">Startups</h1>
</header>

<main class="main">
  <div class="content-section">
    <h2>Motivation</h2>
    <p>As a youth from southern Fujian (Hokkien), entrepreneurial spirit runs in my family's and my own bones. From a young age, we were instilled with the belief that one must become their own "boss" and setup their own business. My aspiration is to become a serial entrepreneur.</p>
  </div>

  <div class="content-section">
    <h2>Coming Soon</h2>
    <div class="placeholder">
      <p>Startup projects and details coming soon...</p>
    </div>
  </div>
</main>

<footer class="footer">
  <p>© 2026 Sorry Qin · All Rights Reserved</p>
</footer>

<script>
document.querySelector('.nav-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-mobile').classList.toggle('active');
  document.body.style.overflow = document.querySelector('.nav-mobile').classList.contains('active') ? 'hidden' : '';
});

document.querySelectorAll('.nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-toggle').classList.remove('active');
    document.querySelector('.nav-mobile').classList.remove('active');
    document.body.style.overflow = '';
  });
});
</script>

</body>
</html>
