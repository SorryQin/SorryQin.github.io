/**
 * Theme Toggle — dark / light / auto
 * Persists to localStorage, respects system preference in auto mode.
 */
(function () {
  const STORAGE_KEY = 'theme';
  const html = document.documentElement;
  const systemMQ = window.matchMedia('(prefers-color-scheme: light)');

  function getSystemTheme() {
    return systemMQ.matches ? 'light' : 'dark';
  }

  function applyTheme(mode) {
    if (mode === 'light') {
      html.setAttribute('data-theme', 'light');
    } else {
      html.removeAttribute('data-theme');
    }
  }

  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY); // 'light' | 'dark' | 'auto' | null
  }

  function saveTheme(mode) {
    localStorage.setItem(STORAGE_KEY, mode);
  }

  function toggleTheme() {
    const current = getSavedTheme() || 'auto';
    const system = getSystemTheme();

    let next;
    if (current === 'auto') {
      // Auto → opposite of current system
      next = system === 'dark' ? 'light' : 'dark';
    } else if (current === system) {
      // Manual matches system → go to opposite
      next = system === 'dark' ? 'light' : 'dark';
    } else {
      // Manual opposite of system → go to auto
      next = 'auto';
    }

    // Cycle: dark → light → auto → dark
    if (next === 'auto') {
      applyTheme(getSystemTheme());
      saveTheme('auto');
    } else {
      applyTheme(next);
      saveTheme(next);
    }
  }

  // Initialize
  function init() {
    const saved = getSavedTheme();
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
    } else {
      // Auto mode — follow system
      applyTheme(getSystemTheme());
    }
  }

  // Listen for system changes (only relevant in auto mode)
  systemMQ.addEventListener('change', function () {
    if (!getSavedTheme() || getSavedTheme() === 'auto') {
      applyTheme(getSystemTheme());
    }
  });

  // Bind toggle button
  document.addEventListener('DOMContentLoaded', function () {
    init();
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });

  // Also init immediately in case DOMContentLoaded already fired
  if (document.readyState !== 'loading') {
    init();
  }
})();
