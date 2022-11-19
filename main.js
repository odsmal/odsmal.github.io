class DisplayController {
  constructor() {
    this.addGlobalEventListener('click', '.btn-read-more', this.linkSelected);
    this.addGlobalEventListener('click', '.navlink', this.navLinkSelected);
    this.main = document.querySelector('main');
    this.oldHighlight = document.getElementById('start');
  }

  addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
      if (e.target.matches(selector)) callback(e);
    });
  }

  linkSelected = (e) => {
    main.selectPage(e.target.id);
  };

  navLinkSelected = (e) => {
    this.highlightSelected(e);
    this.linkSelected(e);
  };

  highlightSelected(e) {
    this.oldHighlight.classList.remove('navlink-highlight');
    e.target.classList.add('navlink-highlight');
    this.oldHighlight = e.target;
  }

  showPage(content) {
    this.main.innerHTML = content;
  }
}

class Main {
  constructor() {
    this.displayController = new DisplayController();
    this.selectPage('start');
  }

  async selectPage(name) {
    try {
      const response = await fetch(`./pages/${name}.html`);
      const content = await response.text();
      this.displayController.showPage(content);
      this.scrollToTop();
    } catch (err) {
      console.log(`Fetch error:${err}`);
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}

const main = new Main();
