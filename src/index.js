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
    this.navLinks.forEach((link) => link.classList.remove('selected'));
    e.target.classList.add('selected');
    main.showPage(e.target.id);
  };

  renderPage(content) {
    this.content.innerHTML = content;
  }
}

class Main {
  constructor() {
    this.displayController = new DisplayController();
    this.showPage('projects');
  }

  showPage(name) {
    let content;
    if (name === 'projects') content = projects;
    if (name === 'portfolio') content = portfolio;
    if (name === 'about') content = about;
    this.displayController.renderPage(content);
  }
}

const main = new Main();
