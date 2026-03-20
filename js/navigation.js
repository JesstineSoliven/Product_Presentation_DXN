/* ─── NAVIGATION — Nav Dots, Progress Bar, Keyboard ─── */
(function () {
  const slides      = Array.from(document.querySelectorAll('.slide'));
  const nav         = document.getElementById('nav');
  const progressBar = document.getElementById('progress-bar');

  /* Build nav dots */
  slides.forEach((slide, i) => {
    const btn = document.createElement('button');
    btn.className = 'nav-dot';
    btn.title = slide.dataset.label || ('Slide ' + (i + 1));
    btn.addEventListener('click', () => slide.scrollIntoView({ behavior: 'smooth' }));
    nav.appendChild(btn);
  });

  /* Progress bar + active dot */
  function updateNav() {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';

    let activeIndex = 0;
    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      if (rect.top <= window.innerHeight * .5) activeIndex = i;
    });
    document.querySelectorAll('.nav-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* Keyboard navigation */
  let currentSlide = 0;

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      currentSlide = Math.min(currentSlide + 1, slides.length - 1);
      slides[currentSlide].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      currentSlide = Math.max(currentSlide - 1, 0);
      slides[currentSlide].scrollIntoView({ behavior: 'smooth' });
    }
  });

  window.addEventListener('scroll', () => {
    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      if (Math.abs(rect.top) < window.innerHeight * .4) currentSlide = i;
    });
  }, { passive: true });

  /* ── Touch swipe navigation for mobile ── */
  let touchStartY    = 0;
  let touchStartTime = 0;

  document.addEventListener('touchstart', e => {
    touchStartY    = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  document.addEventListener('touchend', e => {
    const deltaY  = touchStartY - e.changedTouches[0].clientY;
    const elapsed = Date.now() - touchStartTime;
    if (Math.abs(deltaY) < 50 || elapsed > 400) return;
    if (deltaY > 0) {
      currentSlide = Math.min(currentSlide + 1, slides.length - 1);
    } else {
      currentSlide = Math.max(currentSlide - 1, 0);
    }
    slides[currentSlide].scrollIntoView({ behavior: 'smooth' });
  }, { passive: true });
})();
