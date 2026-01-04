/**
 * AI Chronicle - Theme Toggle
 * Handles light/dark mode with localStorage persistence
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'ai-chronicle-theme';
  const THEMES = ['light', 'dark'];

  /**
   * Get the user's preferred theme
   * Priority: localStorage > system preference > default (light)
   */
  function getPreferredTheme() {
    // Check localStorage first
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && THEMES.includes(stored)) {
      return stored;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // Default to light
    return 'light';
  }

  /**
   * Apply theme to document
   */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0b' : '#ffffff');
    }

    // Dispatch custom event for other scripts to listen to
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    return next;
  }

  /**
   * Initialize theme on page load
   * This runs immediately to prevent flash of wrong theme
   */
  function initTheme() {
    const theme = getPreferredTheme();
    setTheme(theme);
  }

  /**
   * Set up event listeners for theme toggle buttons
   */
  function setupToggleButtons() {
    // Support multiple toggle buttons on a page
    const toggleButtons = document.querySelectorAll('.theme-toggle, [data-theme-toggle]');

    toggleButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const newTheme = toggleTheme();

        // Animate the toggle (optional enhancement)
        button.classList.add('theme-toggling');
        setTimeout(() => {
          button.classList.remove('theme-toggling');
        }, 300);
      });
    });
  }

  /**
   * Listen for system theme changes
   */
  function watchSystemTheme() {
    if (!window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', (e) => {
      // Only auto-switch if user hasn't set a preference
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // Initialize theme immediately (before DOM ready) to prevent flash
  initTheme();

  // Set up interactions after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupToggleButtons();
      watchSystemTheme();
    });
  } else {
    setupToggleButtons();
    watchSystemTheme();
  }

  // Expose functions globally for manual control
  window.AIChronicle = window.AIChronicle || {};
  window.AIChronicle.theme = {
    get: () => document.documentElement.getAttribute('data-theme') || getPreferredTheme(),
    set: setTheme,
    toggle: toggleTheme
  };
})();
