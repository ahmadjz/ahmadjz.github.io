/**
 * Client motion machinery — CSS-first, zero-framework.
 * Every effect is gated by prefers-reduced-motion AND the in-page toggle
 * (data-motion="off"), and animates transform/opacity only.
 */

const prefersReduce = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const motionOff = () =>
  document.documentElement.dataset.motion === 'off' || prefersReduce();

/** Scroll-reveal with per-group stagger. Falls back to instantly visible. */
function initReveal(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!els.length) return;

  if (motionOff()) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    group
      .querySelectorAll<HTMLElement>('[data-reveal]')
      .forEach((el, i) => el.style.setProperty('--reveal-delay', `${i * 60}ms`));
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));
}

/** rAF count-up for [data-countup] numbers, fired once on scroll-in. */
function initCountUp(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-countup]'));
  if (!els.length) return;

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.countup || '0');
    if (motionOff()) {
      el.textContent = String(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      el.textContent = String(Math.round(easeOutCubic(p) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  els.forEach((el) => io.observe(el));
}

/** Magnetic pull on [data-magnetic], fine pointers only. */
function initMagnetic(): void {
  if (!window.matchMedia('(pointer: fine)').matches || motionOff()) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = 0.28;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
}

/** Floating header: condense on scroll, hide on scroll-down. */
function initHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  let last = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    if (y > last && y > 240) header.classList.add('is-hidden');
    else header.classList.remove('is-hidden');
    last = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/** Optional Lenis smooth scroll; lazy-loaded, gated by reduced-motion. */
function initSmoothScroll(): void {
  if (motionOff()) {
    wireAnchors(null);
    return;
  }
  import('lenis')
    .then(({ default: Lenis }) => {
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      const raf = (t: number) => {
        lenis.raf(t);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
      wireAnchors(lenis);
    })
    .catch(() => wireAnchors(null));
}

function wireAnchors(lenis: { scrollTo: (t: HTMLElement, o?: object) => void } | null): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector<HTMLElement>(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -76 });
      else target.scrollIntoView({ behavior: motionOff() ? 'auto' : 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}

/** In-page motion toggle. Persists to localStorage; head inline script applies early. */
function initMotionToggle(): void {
  const btn = document.querySelector<HTMLElement>('[data-motion-toggle]');
  if (!btn) return;
  const sync = () => {
    const off = document.documentElement.dataset.motion === 'off';
    btn.setAttribute('aria-pressed', String(off));
    btn.dataset.state = off ? 'off' : 'on';
  };
  sync();
  btn.addEventListener('click', () => {
    const off = document.documentElement.dataset.motion === 'off';
    if (off) {
      delete document.documentElement.dataset.motion;
      try {
        localStorage.setItem('motion', 'on');
      } catch {
        /* ignore */
      }
      initReveal();
      initMagnetic();
    } else {
      document.documentElement.dataset.motion = 'off';
      try {
        localStorage.setItem('motion', 'off');
      } catch {
        /* ignore */
      }
    }
    sync();
  });
}

export function init(): void {
  initReveal();
  initCountUp();
  initMagnetic();
  initHeader();
  initMotionToggle();
  initSmoothScroll();
}
