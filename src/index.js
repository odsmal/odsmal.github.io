import latest from './html/latest.html';

import './styles.css';

class DisplayController {
  constructor() {
    this.content = document.getElementById('content');
    this.navLinks = document.querySelectorAll('#nav > div');
    this.navLinks.forEach((link) =>
      link.addEventListener('click', this.navLinkSelected)
    );
  }

  navLinkSelected = (e) => {
    this.navLinks.forEach((link) => link.classList.remove('selected'));
    e.target.classList.add('selected');
  };

  renderPage(html) {
    this.content.innerHTML = html;
  }
}

class Main {
  constructor() {
    this.displayController = new DisplayController();
    this.showContent(latest);
  }

  showContent() {
    this.displayController.renderPage(latest);
  }
}

const main = new Main();
