(() => {
  const onReady = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  };

  onReady(() => {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');

    if (mobileMenuButton && mobileMenu && mobileMenuIcon) {
      mobileMenuButton.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', isOpen);
        mobileMenuButton.setAttribute('aria-expanded', String(!isOpen));
        mobileMenuIcon.textContent = isOpen ? 'menu' : 'close';
      });
    }
  });
})();
