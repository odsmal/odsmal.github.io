import projects from './html/projects.html';
import portfolio from './html/portfolio.html';
import about from './html/about.html';
import weatherapp from './html/weatherapp.html';
import './styles.css';

class DisplayController {
  constructor() {
    this.content = document.getElementById('content');
    this.content.addEventListener('click', this.articleSelected);
    this.navLinks = document.querySelectorAll('#nav > div');
    this.navLinks.forEach((link) =>
      link.addEventListener('click', this.navLinkSelected)
    );
  }

  articleSelected = (e) => {
    const articleName = e.target.id || e.target.parentNode.id;
    main.showPage(articleName);
  };

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
    this.htmlPages = {
      projects,
      portfolio,
      about,
      weatherapp,
    };
    this.displayController = new DisplayController();
    this.showPage('projects');
  }

  showPage(name) {
    if (name in this.htmlPages) {
      const content = this.htmlPages[`${name}`];
      this.displayController.renderPage(content);
    }
  }
}

const main = new Main();
