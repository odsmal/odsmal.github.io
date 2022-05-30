import projects from './html/projects.html';
import portfolio from './html/portfolio.html';
import about from './html/about.html';
import weatherapp from './html/weatherapp.html';
import './styles.css';

class DisplayController {
  constructor() {
    this.content = document.getElementById('content');
    this.addGlobalEventListener(
      'click',
      '.btn-read-more',
      this.articleSelected
    );
    this.addGlobalEventListener('click', '#nav > div', this.navLinkSelected);
    this.oldHighlight = '';
  }

  addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
      if (e.target.matches(selector)) callback(e);
    });
  }

  articleSelected = (e) => {
    main.showPage(e.target.id);
  };

  navLinkSelected = (e) => {
    this.highlightSelected(e);
    main.showPage(e.target.id);
  };

  highlightSelected(e) {
    this.oldHighlight
      ? this.oldHighlight.classList.remove('highlight')
      : document.getElementById('projects').classList.remove('highlight');
    e.target.classList.add('highlight');
    this.oldHighlight = e.target;
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
