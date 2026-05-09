/**
 * Theme toggle — dark / light
 * :root = light (default), [data-theme="dark"] = dark
 */
(function () {
  var KEY = 'theme';
  var html = document.documentElement;

  function setTheme(mode) {
    if (mode === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  }

  function toggle() {
    var isDark = html.hasAttribute('data-theme');
    var next = isDark ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  }

  // Init: saved pref → system pref → light default
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === 'dark') {
      setTheme('dark');
    } else if (saved === 'light') {
      setTheme('light');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  } catch (e) {}

  // Bind button
  function bind() {
    var btn = document.getElementById('theme-toggle');
    if (btn) { btn.onclick = toggle; return true; }
    return false;
  }
  if (!bind()) {
    var n = 0, retry = setInterval(function () {
      if (bind() || ++n >= 10) clearInterval(retry);
    }, 100);
  }
})();
