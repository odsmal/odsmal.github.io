import projects from './html/projects.html';
import portfolio from './html/portfolio.html';
import about from './html/about.html';
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
    this.highlightSelected(e);
    main.showPage(e.target.id);
  };

  highlightSelected(e) {
    this.navLinks.forEach((link) => link.classList.remove('highlight'));
    e.target.classList.add('highlight');
  }

  renderPage(content) {
    this.content.innerHTML = content;
  }
}

class Main {
  constructor() {
    this.html = { projects, portfolio, about };
    this.displayController = new DisplayController();
    this.showPage('projects');
  }

  showPage(name) {
    console.log(name);
    const content = this.html[`${name}`];
    this.displayController.renderPage(content);
  }
}

const main = new Main();
