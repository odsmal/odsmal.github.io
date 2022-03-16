//npx webpack --watch
import './styles.css';

class DisplayController {
  constructor() {
    this.navLinks = document.querySelectorAll('#nav > div');
    this.navLinks.forEach((link) =>
      link.addEventListener('click', this.navLinkSelected)
    );
  }

  navLinkSelected = (e) => {
    this.navLinks.forEach((link) => link.classList.remove('selected'));
    e.target.classList.add('selected');
  };
}

class Main {
  constructor() {
    this.displayController = new DisplayController();
  }
}

new Main();
