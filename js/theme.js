/**
 * Theme Toggle — dark / light
 * Persists to localStorage, defaults to system preference on first visit.
 */
(function () {
  var STORAGE_KEY = 'theme';
  var html = document.documentElement;
  var systemMQ = window.matchMedia('(prefers-color-scheme: light)');

  function getSystem() {
    return systemMQ.matches ? 'light' : 'dark';
  }

  function apply(mode) {
    if (mode === 'light') {
      html.setAttribute('data-theme', 'light');
    } else {
      html.removeAttribute('data-theme');
    }
  }

  function toggle() {
    var current = html.hasAttribute('data-theme') ? 'light' : 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    apply(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // First visit — follow system
      apply(getSystem());
    } else {
      apply(saved);
    }
  }

  // React to system changes (only when user hasn't manually set a preference)
  systemMQ.addEventListener('change', function () {
    if (!localStorage.getItem(STORAGE_KEY)) {
      apply(getSystem());
    }
  });

  // Expose globally for onclick attribute fallback
  window.__toggleTheme = toggle;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
