/* ============================================================
   Vrushabh Desai Portfolio - Main JavaScript
   Vanilla JS - No dependencies
   Content data lives in assets/js/data.js
   ============================================================ */

(function () {
  'use strict';

  /* ---- Scroll-animation observer (reusable after dynamic renders) ---- */
  const animObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  function initAnimations() {
    document.querySelectorAll('[data-animate]:not(.visible)').forEach(el => {
      animObserver.observe(el);
    });
  }

  initAnimations();

  /* ---- Header scroll effect ---- */
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile navigation toggle ---- */
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu   = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    const closeNav = () => {
      navMenu.classList.remove('open');
      const icon = navToggle.querySelector('i');
      if (icon) icon.className = 'bi bi-list';
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      if (icon) icon.className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
    });

    navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) closeNav();
    });
  }

  /* ---- Typed text effect ---- */
  const typedEl = document.querySelector('.typed-text');
  if (typedEl) {
    // Use data.js items if available, otherwise fall back to data-items attribute
    const items = (typeof PORTFOLIO !== 'undefined' && PORTFOLIO.typedItems)
      ? PORTFOLIO.typedItems
      : (typedEl.dataset.items ? typedEl.dataset.items.split(',') : []);

    let idx = 0, pos = 0, deleting = false;

    function type() {
      const word = items[idx] || '';
      typedEl.textContent = deleting
        ? word.substring(0, pos - 1)
        : word.substring(0, pos + 1);
      deleting ? pos-- : pos++;

      let delay = deleting ? 40 : 80;
      if (!deleting && pos === word.length)        { delay = 2000; deleting = true; }
      else if (deleting && pos === 0)              { deleting = false; idx = (idx + 1) % items.length; delay = 400; }
      setTimeout(type, delay);
    }

    if (items.length) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        typedEl.textContent = items[0];
      } else {
        type();
      }
    }
  }

  /* ---- Project filter (works for both static and dynamically rendered cards) ---- */
  function setupProjectFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    if (!btns.length) return;

    function applyFilter(filter) {
      document.querySelectorAll('.project-card').forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
        if (show) {
          card.classList.remove('visible');
          setTimeout(() => card.classList.add('visible'), 50);
        }
      });
    }

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilter(btn.dataset.filter);
      });
    });
  }

  setupProjectFilter();

  /* ---- Active nav highlight ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- Back to top ---- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTop.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ==============================================================
     DATA-DRIVEN RENDERERS
     These run on experience.html where #work-timeline and
     #projects-grid containers exist.  Content comes from data.js.
     ============================================================== */

  const ICON_MAP = {
    video:  'play-circle-fill',
    report: 'file-earmark-pdf-fill',
    github: 'github',
    link:   'link-45deg',
  };

  /* ---- Render work experience timeline ---- */
  function renderExpLinks(links) {
    if (!links.length) return '';
    const hasGroups = links.some(l => l.group);
    if (!hasGroups) {
      return `<div class="exp-links">${links.map(l =>
        `<a href="${l.url}" target="_blank" class="link-badge ${l.type}">
          <i class="bi bi-${ICON_MAP[l.type] || 'link-45deg'}"></i> ${l.label}
        </a>`).join('')}</div>`;
    }
    // Group links by their group label
    const grouped = {};
    const ungrouped = [];
    links.forEach(l => {
      if (l.group) { (grouped[l.group] = grouped[l.group] || []).push(l); }
      else { ungrouped.push(l); }
    });
    let html = '<div class="exp-links exp-links-grouped">';
    Object.entries(grouped).forEach(([name, grpLinks]) => {
      html += `<div class="exp-link-group">
        <span class="exp-link-group-label">${name}</span>
        <div class="exp-link-group-items">${grpLinks.map(l =>
          `<a href="${l.url}" target="_blank" class="link-badge ${l.type}">
            <i class="bi bi-${ICON_MAP[l.type] || 'link-45deg'}"></i> ${l.label}
          </a>`).join('')}
        </div>
      </div>`;
    });
    if (ungrouped.length) {
      html += `<div class="exp-link-group"><div class="exp-link-group-items">${ungrouped.map(l =>
        `<a href="${l.url}" target="_blank" class="link-badge ${l.type}">
          <i class="bi bi-${ICON_MAP[l.type] || 'link-45deg'}"></i> ${l.label}
        </a>`).join('')}</div></div>`;
    }
    html += '</div>';
    return html;
  }

  function renderExperience() {
    const container = document.getElementById('work-timeline');
    if (!container || typeof PORTFOLIO === 'undefined') return;

    container.innerHTML = PORTFOLIO.experience.map((job, i) => {
      const companyHtml = job.companyUrl
        ? `<a href="${job.companyUrl}" target="_blank">${job.company}, ${job.location}</a>`
        : `${job.company}, ${job.location}`;

      const bulletsHtml = job.bullets.map(b => `<li>${b}</li>`).join('');

      const linksHtml = renderExpLinks(job.links);

      const skillsHtml = job.skills.map(s => `<span>${s}</span>`).join('');
      const delay = ((i % 4) + 1) * 100;

      return `
        <div class="timeline-item exp-timeline-item" data-animate data-delay="${delay}">
          <div class="timeline-meta">
            <span class="year-badge">${job.periodBadge}</span>
            <span class="degree-badge">${job.type}</span>
          </div>
          <div class="exp-card${job.featured ? ' featured' : ''}">
            <div class="card-top">
              <div class="company-icon"><i class="bi bi-${job.icon}"></i></div>
            </div>
            <h3>${job.title}</h3>
            <p class="company-name">${companyHtml}</p>
            <div class="description"><ul>${bulletsHtml}</ul></div>
            ${linksHtml}
            <div class="skills-tags">${skillsHtml}</div>
          </div>
        </div>`;
    }).join('');

    initAnimations();
  }

  /* ---- Render projects grid ---- */
  function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container || typeof PORTFOLIO === 'undefined') return;

    // Determine initial active filter (first active btn, defaults to 'robotics')
    const activeBtn = document.querySelector('.filter-btn.active');
    const defaultFilter = activeBtn ? activeBtn.dataset.filter : 'robotics';

    container.innerHTML = PORTFOLIO.projects.map((proj, i) => {
      const linksHtml = proj.links.length
        ? proj.links.map(l =>
            `<a href="${l.url}" target="_blank" class="project-link-icon ${l.type}" data-label="${l.label}" aria-label="${l.label}">
              <i class="bi bi-${ICON_MAP[l.type] || 'link-45deg'}"></i>
            </a>`).join('')
        : '';

      const techHtml = proj.tech.map(t => `<span>${t}</span>`).join('');
      const hidden   = defaultFilter !== 'all' && proj.category !== defaultFilter;
      const delay    = ((i % 3) + 1) * 100;

      return `
        <div class="project-card" data-category="${proj.category}"
             data-animate data-delay="${delay}"${hidden ? ' style="display:none"' : ''}>
          <div class="project-thumb">
            <span class="placeholder-icon"><i class="bi bi-image"></i></span>
          </div>
          <h4>${proj.title}</h4>
          <span class="project-date-badge">${proj.date}</span>
          <p class="project-desc">${proj.desc}</p>
          <div class="project-bottom">
            <div class="project-tech">${techHtml}</div>
            ${linksHtml ? `<div class="project-links">${linksHtml}</div>` : ''}
          </div>
        </div>`;
    }).join('');

    initAnimations();
    setupProjectFilter(); // re-bind filter buttons after render
  }

  /* ---- Render certifications (about.html) ---- */
  function renderCertifications() {
    const container = document.getElementById('certifications-list');
    if (!container || typeof PORTFOLIO === 'undefined') return;

    container.innerHTML = PORTFOLIO.certifications.map(cert => {
      const inner = `<i class="bi bi-${cert.icon}"></i> ${cert.name} <span class="cert-issuer">(${cert.issuer})</span>`;
      return cert.url
        ? `<a href="${cert.url}" target="_blank" class="course-item cert-link">${inner}</a>`
        : `<div class="course-item">${inner}</div>`;
    }).join('');
  }

  /* ---- Run renderers if containers are present ---- */
  if (document.getElementById('work-timeline'))       renderExperience();
  if (document.getElementById('projects-grid'))       renderProjects();
  if (document.getElementById('certifications-list')) renderCertifications();

})();
