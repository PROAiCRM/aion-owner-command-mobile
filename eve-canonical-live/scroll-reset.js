(() => {
  'use strict';

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  function resetPosition() {
    const viewport = document.getElementById('viewport');
    if (viewport) {
      viewport.scrollLeft = 0;
      viewport.scrollTop = 0;
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollLeft = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollLeft = 0;
    document.body.scrollTop = 0;
  }

  document.addEventListener('click', event => {
    if (!event.target.closest('[data-nav], .node button')) return;
    requestAnimationFrame(resetPosition);
    setTimeout(resetPosition, 230);
    setTimeout(resetPosition, 430);
  }, true);

  window.addEventListener('pageshow', resetPosition);
  window.addEventListener('orientationchange', () => setTimeout(resetPosition, 120));
  requestAnimationFrame(resetPosition);
})();
