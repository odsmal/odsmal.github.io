(() => {
  const button = document.getElementById('about-button');
  const panel = document.getElementById('about-panel');

  if (!button || !panel) return;

  const close = (returnFocus = false) => {
    button.setAttribute('aria-expanded', 'false');
    panel.classList.add('hidden');
    if (returnFocus) button.focus();
  };

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    panel.classList.toggle('hidden', isOpen);
  });

  document.addEventListener('click', event => {
    if (!panel.classList.contains('hidden') && !panel.contains(event.target) && !button.contains(event.target)) {
      close();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.classList.contains('hidden')) {
      close(true);
    }
  });
})();
