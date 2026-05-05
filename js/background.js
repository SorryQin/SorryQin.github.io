/**
 * Background Effects — Particle Constellation + Layered Parallax Shapes
 */
(function () {
  const isMobile = window.innerWidth < 768;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  /* ============================================================
     LAYERED PARALLAX GEOMETRIC SHAPES
     ============================================================ */
  const shapeDefs = [
    { size: 420, x: 82, y: 12, blur: 70, color: 'var(--primary)',       alpha: 0.07, speed: 0.012, radius: '50%' },
    { size: 340, x: 12, y: 72, blur: 55, color: 'var(--secondary)',     alpha: 0.06, speed: 0.020, radius: '42% 58% 58% 42%' },
    { size: 280, x: 78, y: 55, blur: 45, color: 'var(--accent)',        alpha: 0.05, speed: 0.028, radius: '55% 45% 35% 65%' },
    { size: 220, x: 18, y: 18, blur: 85, color: 'var(--primary)',       alpha: 0.05, speed: 0.010, radius: '60% 40% 55% 45%' },
    { size: 300, x: 55, y: 82, blur: 65, color: 'var(--secondary)',     alpha: 0.04, speed: 0.016, radius: '48% 52% 60% 40%' },
  ];

  const shapeContainer = document.createElement('div');
  shapeContainer.style.cssText =
    'position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;';
  document.body.prepend(shapeContainer);

  const shapeEls = shapeDefs.map((def) => {
    const el = document.createElement('div');
    el.style.cssText = [
      'position:absolute;',
      `width:${def.size}px;`,
      `height:${def.size}px;`,
      `left:${def.x}%;`,
      `top:${def.y}%;`,
      `background:${def.color};`,
      `opacity:${def.alpha};`,
      `border-radius:${def.radius};`,
      `filter:blur(${isMobile ? def.blur * 0.75 : def.blur}px);`,
      'transform:translate(-50%,-50%);',
      'will-change:transform;',
    ].join('');
    el.dataset.speed = def.speed;
    el.dataset.baseX = def.x;
    el.dataset.baseY = def.y;
    shapeContainer.appendChild(el);
    return el;
  });

  /* ============================================================
     PARTICLE CONSTELLATION NETWORK (Canvas)
     ============================================================ */
  const canvas = document.createElement('canvas');
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none;';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  const particleCount = isMobile ? 60 : 130;
  const connectionDist = isMobile ? 100 : 150;
  const mouseRadius = isMobile ? 150 : 200;
  const particles = [];
  const mouse = { x: -2000, y: -2000, tx: -2000, ty: -2000 };
  let burstQueue = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Mouse tracking with smoothing
  document.addEventListener('mousemove', function (e) {
    mouse.tx = e.clientX;
    mouse.ty = e.clientY;

    // Update parallax shapes
    const rx = (mouse.tx / width - 0.5) * 2;
    const ry = (mouse.ty / height - 0.5) * 2;
    for (const el of shapeEls) {
      const s = parseFloat(el.dataset.speed);
      const bx = parseFloat(el.dataset.baseX);
      const by = parseFloat(el.dataset.baseY);
      const ox = rx * s * 80;
      const oy = ry * s * 80;
      el.style.transform = `translate(calc(-50% + ${ox}px), calc(-50% + ${oy}px))`;
    }
  });

  document.addEventListener('click', function (e) {
    burstQueue.push({ x: e.clientX, y: e.clientY, life: 1 });
  });

  // Create initial particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4,
      baseR: Math.random() * 1.8 + 0.4,
    });
  }

  /* ============================================================
     BURST: ring wave + spreading particles on click
     ============================================================ */
  function spawnBurst(x, y) {
    const count = isMobile ? 6 : 10;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i + Math.random() * 0.3;
      const speed = 1.5 + Math.random() * 3;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 2.5,
        baseR: 0.3,
        decay: 0.015 + Math.random() * 0.025,
        burst: true,
      });
    }
  }

  /* ============================================================
     ANIMATION LOOP
     ============================================================ */
  const ringWaves = [];

  function draw(timestamp) {
    // Smooth mouse follow
    mouse.x += (mouse.tx - mouse.x) * 0.12;
    mouse.y += (mouse.ty - mouse.y) * 0.12;

    ctx.clearRect(0, 0, width, height);

    // --- Process burst queue ---
    for (const b of burstQueue) {
      spawnBurst(b.x, b.y);
      ringWaves.push({ x: b.x, y: b.y, radius: 0, opacity: 0.25 });
    }
    burstQueue = [];

    // --- Draw ring waves ---
    for (let i = ringWaves.length - 1; i >= 0; i--) {
      const w = ringWaves[i];
      w.radius += 3;
      w.opacity -= 0.008;
      if (w.opacity <= 0) {
        ringWaves.splice(i, 1);
        continue;
      }
      ctx.strokeStyle = `oklch(45% 0.15 275 / ${w.opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // --- Update & draw particles ---
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      // Burst decay
      if (p.burst) {
        p.r -= p.decay;
        p.vx *= 0.97;
        p.vy *= 0.97;
        if (p.r <= 0.15) {
          particles.splice(i, 1);
          continue;
        }
      }

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Mouse interaction — gentle push away
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouseRadius && dist > 0.1) {
        const force = (1 - dist / mouseRadius) * 1.8;
        p.x += (dx / dist) * force;
        p.y += (dy / dist) * force;
        p.r += (p.baseR * 2.5 - p.r) * 0.08;
      } else {
        p.r += (p.baseR - p.r) * 0.06;
      }

      // Wrap edges
      const margin = 60;
      if (p.x < -margin) p.x = width + margin;
      if (p.x > width + margin) p.x = -margin;
      if (p.y < -margin) p.y = height + margin;
      if (p.y > height + margin) p.y = -margin;

      // Gentle drift correction (avoid all clustering at edges)
      if (p.x < 0) p.vx += 0.02;
      if (p.x > width) p.vx -= 0.02;
      if (p.y < 0) p.vy += 0.02;
      if (p.y > height) p.vy -= 0.02;

      // Speed limit
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 2) {
        p.vx = (p.vx / speed) * 2;
        p.vy = (p.vy / speed) * 2;
      }

      // --- Draw connections ---
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx2 = p.x - p2.x;
        const dy2 = p.y - p2.y;
        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

        if (dist2 < connectionDist) {
          const alpha = (1 - dist2 / connectionDist) * 0.12;
          ctx.strokeStyle = `oklch(50% 0.16 275 / ${alpha})`;
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // --- Draw particle ---
      const glowDist = mouseRadius;
      const md = Math.sqrt((p.x - mouse.x) ** 2 + (p.y - mouse.y) ** 2);
      const glow = md < glowDist ? (1 - md / glowDist) * 0.5 : 0;
      const alpha = 0.2 + glow + Math.min(p.r / p.baseR * 0.3, 0.4);

      ctx.fillStyle = `oklch(70% 0.18 275 / ${Math.min(alpha, 0.7)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Limit total particles
    const maxParticles = particleCount + 80;
    if (particles.length > maxParticles) {
      particles.splice(maxParticles);
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();
