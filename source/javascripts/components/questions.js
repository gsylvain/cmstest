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
    for (let i = 0 ; i < this.navLinks.length; i++) {
      const link = this.navLinks[i];
      const linkId = parseInt(link.dataset.questionShow);

      link.addEventListener('click', () => {
        this.showAnswer(linkId);
      });
    }
  }

  showAnswer(id) {
    for (let i = 0; i < this.answers.length; i++) {
      const answer = this.answers[i];
      const elementId = parseInt(answer.dataset.answer);

      if (elementId !== id) {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    }
  
    for (let i = 0 ; i < this.navLinks.length; i++) {
      const link = this.navLinks[i];
      const elementId = parseInt(link.dataset.questionShow);

      if (elementId === id) {
        link.classList.add('questions__question--active');
      } else {
        link.classList.remove('questions__question--active')
      }
    }

    this.visible = id;
  }
}