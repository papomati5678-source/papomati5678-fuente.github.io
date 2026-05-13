const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const sectionButtons = document.querySelectorAll('[data-section-toggle]');
const sectionPanels = document.querySelectorAll('.section-panel');

sectionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.sectionToggle;

    sectionButtons.forEach((btn) => {
      const active = btn.dataset.sectionToggle === target;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    sectionPanels.forEach((panel) => {
      panel.classList.toggle('hidden', panel.id !== target);
    });
  });
});