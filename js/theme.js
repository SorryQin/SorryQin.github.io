/**
 * Theme — dark / light toggle with localStorage persistence.
 * Defaults to system preference on first visit.
 */
(function () {
  var html = document.documentElement;
  var KEY = 'theme';

  function setTheme(mode) {
    if (mode === 'light') {
      html.setAttribute('data-theme', 'light');
    } else {
      html.removeAttribute('data-theme');
    }
  }

  function toggle() {
    var isLight = html.hasAttribute('data-theme');
    if (isLight) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    try { localStorage.setItem(KEY, isLight ? 'dark' : 'light'); } catch(e) {}
  }

  // Init: localStorage > system preference > dark default
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === 'light') setTheme('light');
    else if (saved === 'dark') setTheme('dark');
    else if (window.matchMedia('(prefers-color-scheme: light)').matches) setTheme('light');
  } catch(e) {}

  // Bind button — retry up to 3 times in case DOM is not ready
  function bind() {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.onclick = toggle;
      return true;
    }
    return false;
  }
  if (!bind()) {
    var attempts = 0;
    var retry = setInterval(function () {
      if (bind() || ++attempts >= 10) clearInterval(retry);
    }, 100);
  }
})();
