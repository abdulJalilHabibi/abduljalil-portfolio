/* =========================================================
   Alex Carter — Portfolio
   script.js
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Loader ---------- */
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) setTimeout(() => loader.classList.add('hide'), 500);
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ---------- Active link on scroll ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const setActive = () => {
    const y = window.scrollY + 140;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (y >= top && y < bottom) {
        navAnchors.forEach((a) =>
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`)
        );
      }
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });

  /* ---------- Scroll to top ---------- */
  const toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', () => {
      toTop.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    toTop.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  }

  /* ---------- Typing effect ---------- */
  const typedEl = document.getElementById('typed');
  if (typedEl) {
    const phrases = [
      'Frontend Developer',
      'React Enthusiast',
      'UI Engineer',
    ];
    let p = 0, c = 0, deleting = false;
    const tick = () => {
      const phrase = phrases[p];
      typedEl.textContent = phrase.slice(0, c);
      if (!deleting && c < phrase.length) {
        c++;
        setTimeout(tick, 90);
      } else if (deleting && c > 0) {
        c--;
        setTimeout(tick, 45);
      } else {
        if (!deleting) {
          deleting = true;
          setTimeout(tick, 1400);
        } else {
          deleting = false;
          p = (p + 1) % phrases.length;
          setTimeout(tick, 200);
        }
      }
    };
    tick();
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealIO.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealIO.observe(el));

  /* ---------- Skill bars ---------- */
  const bars = document.querySelectorAll('.bar-fill');
  const barIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const pct = e.target.dataset.skill || '0';
          e.target.style.width = pct + '%';
          barIO.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((b) => barIO.observe(b));

  /* ---------- Counters ---------- */
  const counters = document.querySelectorAll('[data-counter]');
  const animateCount = (el) => {
    const target = parseInt(el.dataset.counter, 10) || 0;
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(eased * target) + (target >= 60 ? '+' : '');
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target + (target >= 60 ? '+' : '');
    };
    requestAnimationFrame(step);
  };
  const counterIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCount(e.target);
          counterIO.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => counterIO.observe(c));

  /* ---------- Contact form ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !validEmail || !message) {
        status.textContent = 'Please fill in your name, a valid email, and a message.';
        status.className = 'form-status error';
        return;
      }

      status.textContent = 'Sending…';
      status.className = 'form-status';
      setTimeout(() => {
        status.textContent = `Thanks ${name}! Your message has been sent. I'll reply soon.`;
        status.className = 'form-status success';
        form.reset();
      }, 800);
    });
  }
})();
