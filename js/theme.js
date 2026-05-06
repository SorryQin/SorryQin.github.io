/**
 * Theme init — sets initial data-theme from localStorage or system preference.
 * The actual toggle is handled by an inline onclick attribute on the button,
 * so it works even if this script fails to load.
 */
(function () {
  var html = document.documentElement;
  var saved = localStorage.getItem('theme');
  if (!saved) {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      html.setAttribute('data-theme', 'light');
    }
  } else if (saved === 'light') {
    html.setAttribute('data-theme', 'light');
  }
  // If saved === 'dark' or no pref → leave as default dark (no attribute)
})();
