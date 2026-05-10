/**
 * Preload + Preview Tooltip — hover nav links to preload and see page info.
 */
(function () {
  var pages = {
    '/':                { label: 'Home',         desc: 'About me, journey & contact' },
    '/awards.html':     { label: 'Awards',       desc: 'Publications, scholarships and honors' },
    '/activities.html': { label: 'Activities',   desc: 'Sports, volunteer, competitions & events' },
    '/hobbies.html':    { label: 'Hobbies',      desc: 'Basketball, fitness & my pet' },
    '/blogs.html':      { label: 'Blogs',        desc: 'Reflections on life and work' }
  };

  var preloaded = {};
  var hoverTimer = null;
  var tooltip = null;

  /* ---- Tooltip element ---- */
  function getTooltip() {
    if (tooltip) return tooltip;
    tooltip = document.createElement('div');
    tooltip.className = 'nav-preview';
    tooltip.style.cssText = [
      'position:fixed;',
      'z-index:2000;',
      'pointer-events:none;',
      'opacity:0;',
      'transform:translateY(6px);',
      'transition:opacity 0.2s ease,transform 0.25s var(--ease-out-expo);',
      'background:var(--bg-elevated);',
      'border:1px solid var(--border);',
      'border-radius:12px;',
      'padding:12px 16px;',
      'max-width:240px;',
      'box-shadow:0 12px 40px oklch(0% 0 0 / 0.5);',
      'font-family:"' + getComputedStyle(document.documentElement).getPropertyValue('--font-display').trim() + '",sans-serif;',
    ].join('');
    document.body.appendChild(tooltip);
    return tooltip;
  }

  function showTooltip(href, x, y) {
    var p = pages[href];
    if (!p) return;
    var t = getTooltip();
    t.innerHTML = [
      '<div style="font-size:0.75rem;font-family:var(--font-mono);color:var(--primary);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">' + p.label + '</div>',
      '<div style="font-size:0.875rem;color:var(--text-secondary);line-height:1.4;">' + p.desc + '</div>',
    ].join('');
    t.style.left = x + 'px';
    t.style.top = (y + 28) + 'px';
    t.style.opacity = '1';
    t.style.transform = 'translateY(0)';
  }

  function hideTooltip() {
    if (tooltip) {
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'translateY(6px)';
    }
  }

  /* ---- Preload ---- */
  function preload(href) {
    if (preloaded[href]) return;
    preloaded[href] = true;

    // Use link prefetch (browser native, most efficient)
    var link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    link.as = 'document';
    document.head.appendChild(link);
  }

  /* ---- Bind to nav links ---- */
  function bind() {
    var links = document.querySelectorAll('.nav-links a, .nav-mobile a');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute('href');
      if (!href || !pages[href]) continue;

      a.addEventListener('mouseenter', function (e) {
        var url = e.currentTarget.getAttribute('href');
        // Delayed preload — only if user lingers (avoids wasteful loads on swipe)
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(function () {
          preload(url);
        }, 80);

        showTooltip(url, e.clientX, e.clientY);
      });

      a.addEventListener('mousemove', function (e) {
        var url = e.currentTarget.getAttribute('href');
        showTooltip(url, e.clientX, e.clientY);
      });

      a.addEventListener('mouseleave', function () {
        clearTimeout(hoverTimer);
        hideTooltip();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
