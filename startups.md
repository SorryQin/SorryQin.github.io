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

.content-section h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-dark);
  margin: 35px 0 15px;
}

.content-section h3:first-of-type {
  margin-top: 0;
}

.content-section p {
  color: var(--text-light);
  line-height: 1.8;
  margin: 0 0 20px;
}

.content-section ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
}

.content-section li {
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
  color: var(--text-light);
  line-height: 1.7;
}

.content-section li:last-child {
  border-bottom: none;
}

.content-section a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.content-section a:hover {
  color: var(--secondary);
  text-decoration: underline;
}

.content-section strong {
  color: var(--text-dark);
}

.content-section hr {
  border: none;
  height: 1px;
  background: #e2e8f0;
  margin: 35px 0;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 25px;
}

.image-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.team-list {
  background: #f8fafc;
  border-radius: 12px;
  padding: 25px;
  margin: 15px 0;
}

.team-list p {
  margin: 0;
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
  .image-grid { grid-template-columns: 1fr; }
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
  <h1 class="page-title">Startups</h1>
</header>

<main class="main">
  <div class="content-section">
    <h2>Motivation</h2>
    <p>As a youth from southern Fujian (Hokkien), entrepreneurial spirit runs in my family's and my own bones. From a young age, we were instilled with the belief that one must become their own "boss" and setup their own business. My aspiration is to become a serial entrepreneur.</p>
  </div>

  <div class="content-section">
    <h2>OpenIoT Team</h2>
    <p>During undergraduate, my two roommates and I co-founded a tech group called OpenIoT. With an entrepreneurial spirit in technology, we participated in numerous innovation and entrepreneurship competitions. As of 2024, the OpenIoT team has grown to include 28 official members and has accumulated a total of six national-level competition awards and over <strong>$20000 funding</strong>.</p>

    <h3>Team News</h3>
    <ul>
      <li><strong>Jan 2024:</strong> Our team won the Finalist Award (Top 3%) in China International College Students' Innovation Competition.</li>
      <li><strong>Sep 2023:</strong> Our work <a href="https://fzuiot.site/" target="_blank">DefenderIoT</a> has been reported by <a href="https://mp.weixin.qq.com/s/MF2NJQtEHsVwsm8Ym-l7Gg" target="_blank">Youth of FZU (in Chinese)</a>.</li>
      <li><strong>Aug 2023:</strong> Our team won the Best Technology Award (Top 1%) in National Youth Science Innovation Project Competition.</li>
      <li><strong>June 2023:</strong> Our team won a national undergraduate research training grant (about $3000).</li>
      <li><strong>May 2023:</strong> If you are interested in the IoT, robotics, or AIGC, welcome to <a href="https://fzuiot.site/english/" target="_blank">join us!</a></li>
    </ul>
  </div>

  <div class="content-section">
    <h2>Our Fundings</h2>
    <ul>
      <li><strong>Project:</strong> DefenderIoT — Leading the New Generation of Industrial Inspection<br><strong>Funding $2000</strong> (Grant No. 20230357)<br>China International College Students' Innovation Competition Award<br>Project Leader & Product Manager (2024)</li>
      <li><strong>Project:</strong> Industrial Inspection System based on Intelligent IoT and Bionic Quadruped Robot<br><strong>Funding $3000</strong> (Grant No. 202310386056)<br>China National Undergraduate Innovation and Entrepreneurship Training Program<br>Project Leader & Student Investigator (2023-2024)</li>
      <li><strong>Project:</strong> Community Monitoring System based on Smart IoT and Inspection Vehicle<br><strong>Funding $1000</strong> (Grant No. 2023080208)<br>National Youth Science Innovation Project Competition Award<br>Project Leader & Student Investigator (2023)</li>
    </ul>
  </div>

  <div class="content-section">
    <h2>Team Members</h2>
    <div class="team-list">
      <p><strong>Co-founders:</strong> Hanlin Cai, Jiaqi Hu, Zheng Li</p>
    </div>
    <div class="team-list">
      <p><strong>Members @2020:</strong> Linshi Li, Yuchen Fang, Shuying Liu, Xiang Fang, Jiankun Li, Xinguo Wang, Miaolan Zhou, Chaoyue Chen</p>
    </div>
    <div class="team-list">
      <p><strong>Members @2021:</strong> Wenzhuo Fan, Jiacheng Huang, Xun Sun, Yujie Jiang, Zhongheng Sun, Yuxuan Zheng, Hongming Chen</p>
    </div>
    <div class="team-list">
      <p><strong>Members @2022:</strong> Wenjing Chen, Roubing Yao, Yuxin Luo, Han Huang, Yang Lu, Jiali Su, Yanzhuo Gao, Yuzhuo Shi</p>
    </div>
    <div class="team-list">
      <p><strong>Members @2023:</strong> <a href="https://fzuiot.site/english/" target="_blank">Join us!</a></p>
    </div>
  </div>

  <div class="content-section">
    <h2>Some Group Photos</h2>
    <p>Our group website: <a href="https://fzuiot.site/" target="_blank">https://fzuiot.site/</a></p>
    <div class="image-grid">
      <img src="https://caihanlin.com/images/teams/teams1.jpg" alt="Team Photo 1">
      <img src="https://caihanlin.com/images/teams/teams2.jpg" alt="Team Photo 2">
      <img src="https://caihanlin.com/images/teams/teams.jpg" alt="Team Photo 3">
      <img src="https://caihanlin.com/images/teams/teams4.jpg" alt="Team Photo 4">
    </div>
  </div>
</main>

<footer class="footer">
  <p>© 2026 Sorry Qin · All Rights Reserved</p>
</footer>

</body>
</html>
