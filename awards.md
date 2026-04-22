---
layout: null
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Awards - Sorry Qin</title>
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

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 100;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-logo {
  font-size: 1.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #818cf8, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 35px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s;
  padding: 8px 0;
  position: relative;
}

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

.nav-links a:hover {
  color: white;
}

.nav-links a:hover::after {
  width: 100%;
}

.page-header {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  padding: 120px 40px 60px;
  text-align: center;
  margin-top: 70px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin: 0;
}

.main {
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 40px;
}

.content-section {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 40px;
  box-shadow: var(--shadow);
  margin-bottom: 40px;
}

.content-section h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0 0 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e2e8f0;
}

.content-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.content-section li {
  padding: 15px 0;
  border-bottom: 1px solid #f1f5f9;
  color: var(--text-light);
  line-height: 1.7;
}

.content-section li:last-child {
  border-bottom: none;
}

.content-section li strong {
  color: var(--primary);
}

.footer {
  background: #0f172a;
  color: #94a3b8;
  padding: 40px;
  text-align: center;
  margin-top: 40px;
}

.footer p {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .nav { padding: 0 20px; }
  .nav-links { gap: 20px; }
  .page-header { padding: 100px 20px 50px; }
  .main { padding: 40px 20px; }
  .content-section { padding: 25px; }
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
</nav>

<header class="page-header">
  <h1 class="page-title">Awards</h1>
</header>

<main class="main">
  <div class="content-section">
    <h2>Scholarships</h2>
    <ul>
      <li><strong>Nov 2025</strong> — Three Good Student at the school level (￥2000)</li>
      <li><strong>Nov 2024</strong> — Third-Class Academic Scholarship (￥4000)</li>
      <li><strong>June 2023</strong> — Self-Strengthening Scholarship (￥800)</li>
      <li><strong>Oct 2022</strong> — Outstanding Student Leader Scholarship (￥600)</li>
      <li><strong>Oct 2021</strong> — Academic Improvement Scholarship (￥600)</li>
    </ul>
  </div>
</main>

<footer class="footer">
  <p>© 2026 Sorry Qin · All Rights Reserved</p>
</footer>

</body>
</html>
