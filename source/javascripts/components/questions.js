export default class Questions {
  constructor(element, visibleItem = 0) {
    this.container = element;
    this.visible = visibleItem;

    if (!this.container) {
      return false;
    } else {
      this.initAnswers();
      this.initNavigation();
      this.initLinkHandlers();
      this.showAnswer(this.visible);
    }
  }

  initAnswers() {
    this.answers = this.container.querySelectorAll('.js-answer');
  }

  initNavigation() {
    const navigation = this.container.querySelector('.js-questions-navigation');
    this.navLinks = navigation.querySelectorAll('.js-question');
  }

  initLinkHandlers() {
    const links = Array.from(this.navLinks);

    links.map((link) => {
      const linkId = parseInt(link.dataset.questionShow);

      link.addEventListener('click', () => {
        this.showAnswer(linkId);
      });
    });
  }

  showAnswer(id) {
    const answers = Array.from(this.answers);
    const links = Array.from(this.navLinks);

    answers.forEach((answer) => {
      const elementId = parseInt(answer.dataset.answer);
      answer.style.display = (elementId !== id) ? 'none' : 'block';
    });

    links.forEach((link) => {
      const elementId = parseInt(link.dataset.questionShow);

      if (elementId === id) {
        link.classList.add('questions__question--active');
      } else {
        link.classList.remove('questions__question--active')
      }
    });

    this.visible = id;
  }
}