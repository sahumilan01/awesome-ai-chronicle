/**
 * AI Chronicle - Navigation
 * Handles scroll effects and mobile menu
 */

(function() {
  'use strict';

  let lastScrollY = 0;
  let ticking = false;
  const SCROLL_THRESHOLD = 50;
  const HIDE_THRESHOLD = 200;

  /**
   * Get the global nav element
   */
  function getNav() {
    return document.querySelector('.global-nav');
  }

  /**
   * Handle scroll events
   */
  function onScroll() {
    const nav = getNav();
    if (!nav) return;

    const currentScrollY = window.scrollY;

    // Add scrolled class when not at top
    if (currentScrollY > SCROLL_THRESHOLD) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Hide/show nav based on scroll direction (only after threshold)
    if (currentScrollY > HIDE_THRESHOLD) {
      if (currentScrollY > lastScrollY + 10) {
        // Scrolling down
        nav.classList.add('hidden');
      } else if (currentScrollY < lastScrollY - 10) {
        // Scrolling up
        nav.classList.remove('hidden');
      }
    } else {
      nav.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  /**
   * Throttled scroll handler using requestAnimationFrame
   */
  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }

  /**
   * Toggle mobile menu
   */
  function toggleMobileMenu() {
    const nav = getNav();
    if (!nav) return;

    nav.classList.toggle('menu-open');

    // Update ARIA attributes
    const menuBtn = nav.querySelector('.nav-menu-btn');
    const isOpen = nav.classList.contains('menu-open');

    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  /**
   * Close mobile menu when clicking outside
   */
  function handleClickOutside(e) {
    const nav = getNav();
    if (!nav || !nav.classList.contains('menu-open')) return;

    // Close if click is outside nav
    if (!nav.contains(e.target)) {
      toggleMobileMenu();
    }
  }

  /**
   * Close mobile menu when pressing Escape
   */
  function handleEscape(e) {
    if (e.key === 'Escape') {
      const nav = getNav();
      if (nav && nav.classList.contains('menu-open')) {
        toggleMobileMenu();
      }
    }
  }

  /**
   * Set active nav link based on current page
   */
  function setActiveLink() {
    const nav = getNav();
    if (!nav) return;

    const currentPath = window.location.pathname;
    const links = nav.querySelectorAll('.nav-link');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      // Check if this link matches current page
      const isActive =
        currentPath === href ||
        currentPath.endsWith(href) ||
        (href !== '/' && currentPath.includes(href.replace('.html', '')));

      link.classList.toggle('active', isActive);
    });
  }

  /**
   * Initialize navigation
   */
  function init() {
    const nav = getNav();
    if (!nav) return;

    // Set up scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Set up mobile menu toggle
    const menuBtn = nav.querySelector('.nav-menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close menu on outside click
    document.addEventListener('click', handleClickOutside);

    // Close menu on Escape
    document.addEventListener('keydown', handleEscape);

    // Close menu when clicking a link (mobile)
    const links = nav.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('menu-open')) {
          toggleMobileMenu();
        }
      });
    });

    // Set active link
    setActiveLink();

    // Initial scroll state
    onScroll();
  }

  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for manual control
  window.AIChronicle = window.AIChronicle || {};
  window.AIChronicle.nav = {
    toggleMenu: toggleMobileMenu,
    setActive: setActiveLink
  };
})();
