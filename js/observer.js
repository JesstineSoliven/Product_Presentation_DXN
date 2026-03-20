/* ─── INTERSECTION OBSERVER — Scroll Reveal ─── */
(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));

  /* Animate a number counter from 0 to target */
  function animateCounter(el, target, duration) {
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const start  = performance.now();
    el.style.opacity = '1';
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value    = Math.round(eased * target);
      el.textContent = prefix + value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* Animate market bars + counters sequentially */
  function animateMarketChart(slide) {
    const bars = Array.from(slide.querySelectorAll('.market-bar[data-h]'));
    const vals = Array.from(slide.querySelectorAll('.market-val[data-count]'));

    bars.forEach((bar, i) => {
      const delay       = 300 + i * 500; // 300ms, 800ms, 1300ms
      const targetH     = parseInt(bar.dataset.h, 10);
      const countEl     = vals[i];
      const countTarget = countEl ? parseInt(countEl.dataset.count, 10) : 0;
      const wrap        = bar.closest('.market-bar-wrap');

      setTimeout(() => {
        /* Rise up */
        if (wrap) {
          wrap.style.opacity   = '1';
          wrap.style.transform = 'translateY(0)';
        }
        /* Grow bar (slight extra delay so it starts after the rise begins) */
        setTimeout(() => {
          bar.style.height = targetH + 'px';
          if (countEl) animateCounter(countEl, countTarget, 800);
        }, 150);
      }, delay);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');

      const heroStats = entry.target.querySelector('.hero-stats');
      if (heroStats) {
        heroStats.style.opacity   = '1';
        heroStats.style.transform = 'translateY(0)';
      }

      const pillRow = entry.target.querySelector('.pill-row');
      if (pillRow) {
        pillRow.style.opacity   = '1';
        pillRow.style.transform = 'translateY(0)';
      }

      entry.target.querySelectorAll('.divider-title, .section-divider-slide p').forEach(el => {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      });

      entry.target.querySelectorAll('.closing-line, .closing-msg, .closing-cta').forEach(el => {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      });

      /* Market chart sequential bar animation */
      if (entry.target.id === 's2') {
        animateMarketChart(entry.target);
      }
    });
  }, { threshold: 0.2 });

  slides.forEach(slide => observer.observe(slide));
})();
