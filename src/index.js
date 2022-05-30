import projects from './html/projects.html';
import portfolio from './html/portfolio.html';
import about from './html/about.html';
import weatherapp from './html/weatherapp.html';
import './styles.css';

class DisplayController {
  constructor() {
    this.addGlobalEventListener('click', '.btn-read-more', this.linkSelected);
    this.addGlobalEventListener('click', '#nav > div', this.navLinkSelected);
    this.content = document.getElementById('content');
    this.oldHighlight = document.getElementById('projects');
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
    this.oldHighlight.classList.remove('highlight');
    e.target.classList.add('highlight');
    this.oldHighlight = e.target;
  }

  showPage(content) {
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
    this.selectPage('projects');
  }

  selectPage(name) {
    if (name in this.htmlPages) {
      const content = this.htmlPages[`${name}`];
      this.displayController.showPage(content);
    }
  }
}

const main = new Main();
