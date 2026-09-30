(() => {
  const root = document.documentElement;
  const storageKey = 'field-notes-theme';
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch (error) {}

  const initialTheme = savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  root.dataset.theme = initialTheme;

  const bindThemeControls = () => {
    const buttons = {
      light: document.getElementById('theme-light'),
      dark: document.getElementById('theme-dark')
    };

    if (!buttons.light || !buttons.dark) return;

    const setTheme = (theme, save = true) => {
      root.dataset.theme = theme;
      Object.entries(buttons).forEach(([name, button]) => {
        button.setAttribute('aria-pressed', String(name === theme));
      });

      if (save) {
        try {
          localStorage.setItem(storageKey, theme);
        } catch (error) {}
      }
    };

    buttons.light.addEventListener('click', () => setTheme('light'));
    buttons.dark.addEventListener('click', () => setTheme('dark'));
    setTheme(root.dataset.theme, false);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindThemeControls, { once: true });
  } else {
    bindThemeControls();
  }
})();
