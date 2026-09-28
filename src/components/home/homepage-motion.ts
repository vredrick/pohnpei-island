// Shared motion preference and navigation behavior for the home and guide pages.
const home = document.querySelector<HTMLElement>('.island-home, .island-guide');
if (home) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const nav = document.querySelector<HTMLElement>('#island-nav');
  const motionButton = home.querySelector<HTMLButtonElement>('.motion-toggle');
  const menu = home.querySelector<HTMLDetailsElement>('.home-menu');
  const menuSummary = menu?.querySelector('summary');
  const layers = Array.from(home.querySelectorAll<HTMLElement>('[data-parallax]'));
  let userPaused = false;
  try { userPaused = sessionStorage.getItem('pohnpei-motion-paused') === 'true'; } catch { /* Private browsing can restrict storage. */ }
  let paused = reducedMotion.matches || userPaused;
  let frame = 0;

  function renderScroll() {
    frame = 0;
    nav?.classList.toggle('scrolled', window.scrollY > 70);
    if (paused) return;
    const viewport = window.innerHeight;
    for (const layer of layers) {
      const parent = layer.parentElement;
      if (!parent) continue;
      const rect = parent.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > viewport) continue;
      const speed = Number(layer.dataset.parallax) || 0;
      const offset = parent.classList.contains('arrival') ? -rect.top * speed : (viewport / 2 - rect.top - rect.height / 2) * speed;
      layer.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    }
  }

  function queueScroll() {
    if (!frame) frame = requestAnimationFrame(renderScroll);
  }

  function updateMotion() {
    paused = reducedMotion.matches || userPaused;
    home!.classList.toggle('motion-paused', paused);
    if (motionButton) {
      motionButton.hidden = reducedMotion.matches;
      motionButton.setAttribute('aria-pressed', String(paused));
      const label = paused ? 'Resume animations' : 'Pause animations';
      motionButton.setAttribute('aria-label', label);
      motionButton.title = label;
      const icon = motionButton.querySelector('svg path');
      if (icon) icon.setAttribute('d', paused ? 'm8 4 12 8-12 8Z' : 'M8 5v14M16 5v14');
    }
    if (paused) layers.forEach(layer => layer.style.removeProperty('transform'));
    queueScroll();
  }

  // Reveal only after successful observer setup; the no-JS page stays fully readable.
  if ('IntersectionObserver' in window) {
    if (home.classList.contains('island-guide')) {
      home.querySelectorAll('main .tg-title, main .guide-hero-content, main .guide-hero-aside, main .guide-hero-media').forEach(el => el.setAttribute('data-enter', ''));
    }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('entered');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
    home.querySelectorAll('[data-enter]').forEach(el => observer.observe(el));
    home.classList.add('motion-ready');
    const patternObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('tattoo-visible', entry.isIntersecting));
    });
    home.querySelectorAll('.island-tattoo').forEach(el => patternObserver.observe(el));
  }

  motionButton?.addEventListener('click', () => {
    userPaused = !userPaused;
    try { sessionStorage.setItem('pohnpei-motion-paused', String(userPaused)); } catch { /* Preference still works for this page. */ }
    updateMotion();
  });
  reducedMotion.addEventListener('change', updateMotion);
  window.addEventListener('scroll', queueScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && menu) menu.open = false;
    queueScroll();
  }, { passive: true });

  menu?.addEventListener('toggle', () => menuSummary?.setAttribute('aria-label', menu.open ? 'Close navigation' : 'Open navigation'));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.open = false;
    // Move focus out of the now-closed details when navigating within this page.
    const href = link.getAttribute('href');
    if (href?.startsWith('#')) {
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
      }
    }
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.open) {
      menu.open = false;
      menuSummary?.focus();
    }
  });
  document.addEventListener('click', event => {
    if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
  });
  updateMotion();
}
