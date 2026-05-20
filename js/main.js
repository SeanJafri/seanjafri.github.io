// Sean Jafri Portfolio — main.js
// Hero slide rotation, project modal with carousel, tooltips, profile lightbox, reveal-on-scroll.

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

    document.querySelectorAll('.project-card, .skill-col, .intro-grid, .process-block')
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

    modalDots.querySelectorAll('.modal-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === mediaIndex);
    });

    const single = activeProject.media.length <= 1;
    arrowPrev.style.display = single ? 'none' : '';
    arrowNext.style.display = single ? 'none' : '';
    modalCounter.style.display = single ? 'none' : '';
  }

  function openModal(projectId) {
    activeProject = window.PROJECT_DATA[projectId];
    if (!activeProject) return;

    modalNum.textContent = activeProject.number || '';
    modalTags.textContent = activeProject.tags || '';
    modalTitle.textContent = activeProject.title || '';
    modalSub.textContent = activeProject.sub || '';

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

    modalProse.innerHTML = (activeProject.description || [])
      .map(p => `<p>${p}</p>`).join('');

    modalDots.innerHTML = activeProject.media.map((_, i) =>
      `<button class="modal-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
    ).join('');

    mediaIndex = 0;
    renderMedia();

    modal.hidden = false;
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => modal.classList.add('is-open'));

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

  document.querySelectorAll('.project-card[data-project]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.project));
  });

  modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  arrowPrev.addEventListener('click', prev);
  arrowNext.addEventListener('click', next);

  modalDots.addEventListener('click', (e) => {
    const dot = e.target.closest('.modal-dot');
    if (!dot) return;
    mediaIndex = parseInt(dot.dataset.index, 10);
    renderMedia();
  });

  // ============================================================
  // PROFILE PHOTO LIGHTBOX
  // ============================================================
  const photoBox = document.getElementById('photo-lightbox');
  const navPhoto = document.getElementById('nav-photo');

  function openPhoto(e) {
    if (e) e.preventDefault();
    photoBox.hidden = false;
    requestAnimationFrame(() => photoBox.classList.add('is-open'));
    document.body.classList.add('modal-open');
  }
  function closePhoto() {
    photoBox.classList.remove('is-open');
    setTimeout(() => { photoBox.hidden = true; }, 220);
    document.body.classList.remove('modal-open');
  }

  if (navPhoto) {
    navPhoto.addEventListener('click', openPhoto);
    // Also intercept the parent .nav-brand link to prevent jump-to-top when clicking the photo
    navPhoto.parentElement.addEventListener('click', (e) => {
      if (e.target === navPhoto) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }
  photoBox.querySelectorAll('[data-photo-close]').forEach(el => {
    el.addEventListener('click', closePhoto);
  });

  // ============================================================
  // TOOLTIP / POPOVER SYSTEM
  // ============================================================
  const popover = document.getElementById('tooltip-popover');
  const popImgWrap = popover.querySelector('.popover-img-wrap');
  const popImg = popover.querySelector('.popover-img');
  const popTerm = popover.querySelector('.popover-term');
  const popExp = popover.querySelector('.popover-expansion');
  const popDef = popover.querySelector('.popover-def');

  let popoverPinned = false; // true after click; false during hover
  let popoverTimer = null;

  function showPopover(triggerEl, key) {
    const data = window.TOOLTIP_DATA && window.TOOLTIP_DATA[key];
    if (!data) return;

    popTerm.textContent = data.term || '';
    popExp.textContent = data.expansion || '';
    popDef.textContent = data.def || '';

    // Image: hidden by default. Show only after successful load.
    popImgWrap.hidden = true;
    if (data.img) {
      popImg.onerror = () => { popImgWrap.hidden = true; };
      popImg.onload = () => { popImgWrap.hidden = false; };
      popImg.src = data.img;
      popImg.alt = data.imgAlt || data.term || '';
    } else {
      popImg.src = '';
    }

    popover.hidden = false;
    requestAnimationFrame(() => {
      popover.classList.add('is-visible');
      positionPopover(triggerEl);
    });
  }

  function hidePopover() {
    popover.classList.remove('is-visible');
    popoverPinned = false;
    setTimeout(() => {
      if (!popover.classList.contains('is-visible')) {
        popover.hidden = true;
      }
    }, 180);
  }

  function positionPopover(triggerEl) {
    const r = triggerEl.getBoundingClientRect();
    const pop = popover.getBoundingClientRect();
    const pad = 12;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Default: below the term, horizontally centered
    let left = r.left + r.width / 2 - pop.width / 2;
    let top = r.bottom + 10;

    // Flip above if no room below
    if (top + pop.height > vh - pad) {
      top = r.top - pop.height - 10;
    }
    // Clamp horizontally to viewport
    left = Math.max(pad, Math.min(left, vw - pop.width - pad));
    // Clamp top in case very tall popover doesn't fit either way
    top = Math.max(pad, Math.min(top, vh - pop.height - pad));

    popover.style.left = left + 'px';
    popover.style.top = top + 'px';
  }

  // Wire up all .tip elements
  document.querySelectorAll('.tip[data-tip]').forEach(el => {
    el.setAttribute('tabindex', '0'); // keyboard-focusable
    el.setAttribute('role', 'button');
    el.setAttribute('aria-haspopup', 'true');

    el.addEventListener('mouseenter', () => {
      if (popoverPinned) return;
      clearTimeout(popoverTimer);
      popoverTimer = setTimeout(() => {
        showPopover(el, el.dataset.tip);
      }, 80);
    });

    el.addEventListener('mouseleave', () => {
      if (popoverPinned) return;
      clearTimeout(popoverTimer);
      popoverTimer = setTimeout(() => {
        hidePopover();
      }, 140);
    });

    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (popoverPinned && popover.dataset.activeKey === el.dataset.tip) {
        // Clicking the same active term — close it
        hidePopover();
        popover.dataset.activeKey = '';
      } else {
        popoverPinned = true;
        popover.dataset.activeKey = el.dataset.tip;
        showPopover(el, el.dataset.tip);
      }
    });

    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });

  // Keep popover open while hovering it (so user can click links/read)
  popover.addEventListener('mouseenter', () => {
    clearTimeout(popoverTimer);
  });
  popover.addEventListener('mouseleave', () => {
    if (popoverPinned) return;
    popoverTimer = setTimeout(hidePopover, 140);
  });

  // Close popover when clicking elsewhere
  document.addEventListener('click', (e) => {
    if (!popoverPinned) return;
    if (popover.contains(e.target)) return;
    if (e.target.closest('.tip[data-tip]')) return;
    hidePopover();
    popover.dataset.activeKey = '';
  });

  // Close popover button
  const popClose = popover.querySelector('[data-popover-close]');
  if (popClose) {
    popClose.addEventListener('click', () => {
      hidePopover();
      popover.dataset.activeKey = '';
    });
  }

  // ============================================================
  // Keyboard
  // ============================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!modal.hidden) { closeModal(); return; }
      if (!photoBox.hidden) { closePhoto(); return; }
      if (popoverPinned) { hidePopover(); popover.dataset.activeKey = ''; return; }
    }
    if (!modal.hidden) {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    }
  });

  // Reposition popover on scroll/resize while visible
  ['scroll', 'resize'].forEach(evt => {
    window.addEventListener(evt, () => {
      if (popover.hidden || !popover.classList.contains('is-visible')) return;
      const activeKey = popover.dataset.activeKey;
      if (!activeKey) return;
      const trig = document.querySelector(`.tip[data-tip="${activeKey}"]`);
      if (trig) positionPopover(trig);
    }, { passive: true });
  });

})();
