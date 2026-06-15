
let lenisInstance = null;

(function initLenis() {
  if (typeof Lenis === 'undefined') return;
  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.8,
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
})();

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initSearch();
  initScrollAnimations();
  initDropdowns();
  initLocDropdown();
  initStickyHeader();
  initAnnouncementClose();
  initCurrencyDropdown();
  initMapPin();
});

function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  let lastScroll = 0;

  function onScroll(scrollY) {
    if (scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    if (scrollY > lastScroll && scrollY > 200) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastScroll = scrollY <= 0 ? 0 : scrollY;
  }

  if (lenisInstance) {
    lenisInstance.on('scroll', ({ scroll }) => onScroll(scroll));
  } else {
    window.addEventListener('scroll', () => onScroll(window.pageYOffset), { passive: true });
  }
}

function initHeader() {

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLang(btn.dataset.lang);
    });
  });

  document.querySelectorAll('.currency-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setCurrency(btn.dataset.currency);
    });
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay?.addEventListener('click', closeMenu);

  function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('active');
    overlay?.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('active');
    overlay?.classList.remove('show');
    document.body.style.overflow = '';
  }

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  menu.querySelectorAll('.mobile-submenu-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.mobile-menu-item');
      parent.classList.toggle('open');
    });
  });
}

function initSearch() {
  const searchToggle = document.getElementById('search-toggle');
  const searchBar = document.getElementById('search-bar');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');

  if (!searchToggle || !searchBar) return;

  searchToggle.addEventListener('click', () => {
    searchBar.classList.add('open');
    setTimeout(() => searchInput?.focus(), 100);
  });

  searchClose?.addEventListener('click', () => {
    searchBar.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchBar.classList.contains('open')) {
      searchBar.classList.remove('open');
    }
  });

  searchBar?.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = searchInput.value.trim();
    if (q) {
      window.location.href = `shop.html?search=${encodeURIComponent(q)}`;
    }
  });
}

function initDropdowns() {
  document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
    const dropdown = item.querySelector('.nav-dropdown');
    if (!dropdown) return;

    let timeout;

    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      dropdown.classList.add('open');
    });

    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.classList.remove('open');
      }, 150);
    });

    dropdown.addEventListener('mouseenter', () => clearTimeout(timeout));
    dropdown.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.classList.remove('open');
      }, 150);
    });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.06,
    rootMargin: '0px 0px -50px 0px',
  });

  const selectors = [
    '.animate-on-scroll',
    '.animate-from-left',
    '.animate-from-right',
    '.animate-scale-in',
  ];
  document.querySelectorAll(selectors.join(', ')).forEach(el => {
    observer.observe(el);
  });
}

function initAnnouncementClose() {
  const btn = document.getElementById('announcement-close');
  const bar = document.getElementById('announcement-bar');
  if (!btn || !bar) return;

  if (sessionStorage.getItem('announcement_closed')) {
    bar.style.display = 'none';
    return;
  }

  btn.addEventListener('click', () => {
    bar.style.display = 'none';
    sessionStorage.setItem('announcement_closed', '1');
  });
}

(function markActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentParams = new URLSearchParams(window.location.search);
  const currentCategory = currentParams.get('category');

  document.querySelectorAll('.nav-link[href]').forEach(link => {
    const hrefAttr = link.getAttribute('href');

    const linkUrl = new URL(hrefAttr, window.location.origin);
    const linkPath = linkUrl.pathname.split('/').pop() || 'index.html';
    const linkParams = new URLSearchParams(linkUrl.search);
    const linkCategory = linkParams.get('category');

    let isActive = false;
    if (linkPath === currentPath) {
      if (linkPath === 'shop.html') {
        if (linkCategory === 'professional') {
          isActive = (currentCategory === 'professional');
        } else {

          isActive = (currentCategory !== 'professional');
        }
      } else {
        isActive = true;
      }
    }

    link.classList.toggle('active', isActive);
  });
})();

function initLocDropdown() {
  const wrap = document.querySelector('.loc-dropdown-wrap');
  const toggle = document.getElementById('loc-toggle');
  if (!wrap || !toggle) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    wrap.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) {
      wrap.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      wrap.classList.remove('open');
    }
  });
}

function initCurrencyDropdown() {
  const wrap = document.getElementById('currency-wrap');
  const toggle = document.getElementById('currency-toggle');
  if (!wrap || !toggle) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    wrap.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) wrap.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') wrap.classList.remove('open');
  });

  document.querySelectorAll('.currency-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof setCurrency === 'function') setCurrency(btn.dataset.currency);
      refreshCurrencyToggle();
      setTimeout(() => wrap.classList.remove('open'), 180);
    });
  });

  document.querySelectorAll('.currency-option').forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof setCurrency === 'function') setCurrency(btn.dataset.currency);
      refreshCurrencyToggle();
    });
  });

  function refreshCurrencyToggle() {
    const currency = (typeof currentCurrency !== 'undefined') ? currentCurrency : 'CZK';
    const lbl = document.getElementById('currency-label');
    if (lbl) lbl.textContent = currency;
    document.querySelectorAll('.currency-opt').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.currency === currency);
    });
    document.querySelectorAll('.currency-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.currency === currency);
    });
  }

  setTimeout(refreshCurrencyToggle, 50);
}

function initMapPin() {
  const pinBrno = document.getElementById('pin-brno');
  const popupBrno = document.getElementById('popup-brno');
  if (!pinBrno || !popupBrno) return;

  pinBrno.addEventListener('click', (e) => {
    e.stopPropagation();
    popupBrno.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (popupBrno && !popupBrno.contains(e.target) && e.target !== pinBrno) {
      popupBrno.classList.remove('active');
    }
  });
}
