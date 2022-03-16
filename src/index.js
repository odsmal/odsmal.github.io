import './styles.css';

class DisplayController {
  constructor() {
    this.navLinks = document.querySelectorAll('#nav > div');
    this.navLinks.forEach((el) =>
      el.addEventListener('click', this.navLinkSelected)
    );
  }

  navLinkSelected = (e) => {
    this.navLinks.forEach((el) => el.classList.remove('selected'));
    e.target.classList.add('selected');
  };
}

new DisplayController();
