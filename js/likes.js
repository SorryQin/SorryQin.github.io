/**
 * Like Button — fetches count from backend, handles optimistic like.
 *
 * Backend expects two endpoints:
 *   GET  /likes  → { count: number }
 *   POST /likes  → { count: number }
 *
 * Configure API_URL below to point to your deployed Worker.
 */
(function () {
  // Replace with your deployed Worker URL after setting up the backend:
  // https://likes.YOUR-SUBDOMAIN.workers.dev/likes
  var API_URL = 'https://withered-frog-4070.hust-sorryqin.workers.dev/likes';
  var LIKED_KEY = 'sorryqin_liked';
  var container = document.getElementById('like-btn');
  if (!container) return;

  var countEl = container.querySelector('.like-count');
  var btnEl = container.querySelector('.like-btn');

  /* ---- Init ---- */
  var liked = false;
  try { liked = localStorage.getItem(LIKED_KEY) === '1'; } catch (e) {}

  function setLiked(state) {
    liked = state;
    if (liked) {
      btnEl.classList.add('liked');
      btnEl.disabled = true;
      try { localStorage.setItem(LIKED_KEY, '1'); } catch (e) {}
    } else {
      btnEl.classList.remove('liked');
      btnEl.disabled = false;
    }
  }

  function updateCount(n) {
    var current = parseInt(countEl.textContent, 10) || 0;
    var target = n;
    // Quick count-up animation
    var step = target > current ? 1 : -1;
    var interval = setInterval(function () {
      current += step;
      countEl.textContent = current;
      if (current === target) clearInterval(interval);
    }, 40);
  }

  /* ---- Fetch current count ---- */
  function fetchCount() {
    var url = API_URL || '/data/likes.json';
    fetch(url, { method: 'GET' })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        countEl.textContent = data.count || 0;
      })
      .catch(function () {
        countEl.textContent = countEl.textContent || '…';
      });
  }

  /* ---- Like ---- */
  btnEl.addEventListener('click', function () {
    if (liked) return;
    if (!API_URL) {
      alert('Like backend not configured yet. Deploy the Cloudflare Worker and update API_URL in js/likes.js.');
      return;
    }

    // Optimistic update
    var prev = parseInt(countEl.textContent, 10) || 0;
    updateCount(prev + 1);
    setLiked(true);

    fetch(API_URL, { method: 'POST' })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        countEl.textContent = data.count;
      })
      .catch(function () {
        // Revert on error
        updateCount(prev);
        setLiked(false);
      });
  });

  // Init
  if (liked) setLiked(true);
  fetchCount();
})();
