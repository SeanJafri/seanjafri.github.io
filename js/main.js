// Sean Jafri Portfolio — main.js
// Hero slide rotation, project modal with carousel, reveal-on-scroll, video pause-when-offscreen.

(function () {
  'use strict';

  // ============================================================
  // Hero background slideshow
  // ============================================================
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 10000);
  }

  // ============================================================
  // Reveal on scroll
  // ============================================================
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('reveal-ready');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('.project-card, .skill-col, .intro-grid')
      .forEach((el) => io.observe(el));
  }

  // ============================================================
  // PROJECT MODAL
  // ============================================================
  const modal       = document.getElementById('project-modal');
  const modalNum    = modal.querySelector('.modal-num');
  const modalTags   = modal.querySelector('.modal-tags');
  const modalTitle  = modal.querySelector('.modal-title');
  const modalSub    = modal.querySelector('.modal-sub');
  const modalStats  = modal.querySelector('.modal-stats');
  const modalProse  = modal.querySelector('.modal-prose');
  const modalSlide   = modal.querySelector('.modal-slide');
  const modalCaption = modal.querySelector('.modal-caption');
  const modalDots    = modal.querySelector('.modal-dots');
  const modalCounter = modal.querySelector('.modal-counter');
  const modalDialog  = modal.querySelector('.modal-dialog');
  const arrowPrev    = modal.querySelector('.modal-arrow-prev');
  const arrowNext    = modal.querySelector('.modal-arrow-next');

  let activeProject = null;
  let mediaIndex = 0;

  function renderMedia() {
    if (!activeProject) return;
    const item = activeProject.media[mediaIndex];

    // Clear previous content (pause any playing video first)
    const prevVideo = modalSlide.querySelector('video');
    if (prevVideo) prevVideo.pause();
    modalSlide.innerHTML = '';

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.caption || '';
      modalSlide.appendChild(img);
    } else if (item.type === 'video') {
      const video = document.createElement('video');
      video.controls = true;
      video.preload = 'metadata';
      video.playsInline = true;
      const source = document.createElement('source');
      source.src = item.src;
      source.type = 'video/mp4';
      video.appendChild(source);
      modalSlide.appendChild(video);
    }

    modalCaption.textContent = item.caption || '';
    modalCounter.textContent = `${mediaIndex + 1} / ${activeProject.media.length}`;

    // Update dots
    modalDots.querySelectorAll('.modal-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === mediaIndex);
    });

    // Hide arrows if only one media item
    const single = activeProject.media.length <= 1;
    arrowPrev.style.display = single ? 'none' : '';
    arrowNext.style.display = single ? 'none' : '';
    modalCounter.style.display = single ? 'none' : '';
  }

  function openModal(projectId) {
    activeProject = window.PROJECT_DATA[projectId];
    if (!activeProject) return;

    // Header
    modalNum.textContent = activeProject.number || '';
    modalTags.textContent = activeProject.tags || '';
    modalTitle.textContent = activeProject.title || '';
    modalSub.textContent = activeProject.sub || '';

    // Stats
    if (activeProject.stats && activeProject.stats.length) {
      modalStats.innerHTML = activeProject.stats.map(s => `
        <div class="stat">
          <div class="stat-num">${s.num}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join('');
      modalStats.hidden = false;
    } else {
      modalStats.hidden = true;
      modalStats.innerHTML = '';
    }

    // Prose
    modalProse.innerHTML = (activeProject.description || [])
      .map(p => `<p>${p}</p>`).join('');

    // Dots
    modalDots.innerHTML = activeProject.media.map((_, i) =>
      `<button class="modal-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
    ).join('');

    // Reset to first slide
    mediaIndex = 0;
    renderMedia();

    // Show modal
    modal.hidden = false;
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => modal.classList.add('is-open'));

    // Scroll modal-dialog to top in case last opened position was deep
    modalDialog.scrollTop = 0;
  }

  function closeModal() {
    modal.classList.remove('is-open');
    const v = modalSlide.querySelector('video');
    if (v) v.pause();
    setTimeout(() => {
      modal.hidden = true;
      modalSlide.innerHTML = '';
      activeProject = null;
    }, 220);
    document.body.classList.remove('modal-open');
  }

  function next() {
    if (!activeProject) return;
    mediaIndex = (mediaIndex + 1) % activeProject.media.length;
    renderMedia();
  }
  function prev() {
    if (!activeProject) return;
    mediaIndex = (mediaIndex - 1 + activeProject.media.length) % activeProject.media.length;
    renderMedia();
  }

  // Card click -> open
  document.querySelectorAll('.project-card[data-project]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.project));
  });

  // Close on backdrop, ×, or any [data-close]
  modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  // Arrows
  arrowPrev.addEventListener('click', prev);
  arrowNext.addEventListener('click', next);

  // Dots (delegated)
  modalDots.addEventListener('click', (e) => {
    const dot = e.target.closest('.modal-dot');
    if (!dot) return;
    mediaIndex = parseInt(dot.dataset.index, 10);
    renderMedia();
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowRight') next();
    else if (e.key === 'ArrowLeft') prev();
  });

})();
