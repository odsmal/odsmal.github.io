(() => {
  document.querySelectorAll('.slide-viewer').forEach(viewer => {
    const slides = [...viewer.querySelectorAll('.slide-card')];
    const previous = viewer.querySelector('[data-direction="previous"]');
    const next = viewer.querySelector('[data-direction="next"]');
    const count = viewer.querySelector('.slide-count');
    const enlarge = viewer.querySelector('.slide-enlarge');
    const thumbnails = viewer.querySelector('.slide-thumbnails');
    const pageLabel = viewer.classList.contains('slide-viewer--worksheet') ? 'Page' : 'Slide';
    if (!slides.length || !previous || !next || !count || !enlarge || !thumbnails) return;
    let current = 0;

    const choices = slides.map((slide, index) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      const thumbnail = document.createElement('img');
      const label = document.createElement('span');
      button.type = 'button';
      button.setAttribute('aria-label', `${pageLabel} ${index + 1}: ${slide.dataset.slideTitle}`);
      button.setAttribute('aria-controls', slide.id);
      thumbnail.src = slide.querySelector('img').getAttribute('src');
      thumbnail.alt = '';
      thumbnail.loading = 'lazy';
      label.textContent = String(index + 1).padStart(2, '0');
      button.append(thumbnail, label);
      item.append(button);
      thumbnails.append(item);
      button.addEventListener('click', () => show(index));
      return button;
    });

    function show(index) {
      if (index < 0 || index >= slides.length) return;
      current = index;
      slides.forEach((slide, position) => {
        slide.hidden = position !== current;
        if (position === current) slide.querySelector('img').loading = 'eager';
        if (position !== current) slide.querySelector('details').open = false;
        if (position === current) choices[position].setAttribute('aria-current', 'true');
        else choices[position].removeAttribute('aria-current');
      });
      previous.disabled = current === 0;
      next.disabled = current === slides.length - 1;
      count.textContent = `${pageLabel} ${current + 1} of ${slides.length}`;
      enlarge.href = slides[current].querySelector('img').getAttribute('src');
      enlarge.setAttribute('aria-label', `Open ${pageLabel.toLowerCase()} ${current + 1} at full size in a new tab`);
    }

    previous.addEventListener('click', () => show(current - 1));
    next.addEventListener('click', () => show(current + 1));
    viewer.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.target.closest('input, textarea, select')) return;
      const destination = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: slides.length - 1 }[event.key];
      if (destination === undefined) return;
      event.preventDefault();
      show(destination);
    });

    viewer.querySelectorAll('.slide-controls, .slide-thumbnails, .slide-hint').forEach(element => { element.hidden = false; });
    viewer.classList.add('is-ready');
    show(0);
  });
})();
