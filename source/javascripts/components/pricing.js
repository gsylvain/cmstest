import noUiSlider from 'nouislider/distribute/nouislider';

export default class PricingSlider {
  constructor(element) {
    // Fail if element doesn't exist
    if (!element) {
      return false;
    }

    this.initSlider(element);
    this.initSettings();

    this.slider = noUiSlider.create(this.elements.slider, {
      start: this.settings.start,
      step: this.settings.step,
      tooltips: true,
      connect: [true, false],
      range: {
        'min': this.settings.range.min,
        'max': this.settings.range.max,
      }
    });

    this.setPrice();
    this.initEvents();
  }

  initSlider(element) {
    this.elements = {
      slider: element.querySelector('.js-slider'),
      values: element.querySelector('.js-values'),
      price: element.querySelector('.js-price'),
      limitedInfo: element.querySelector('.js-limited-info'),
      contact: element.querySelector('.js-contact')
    }
  }

  initSettings() {
    this.prices = {
      0: 0,
      10: 30,
      20: 70,
      30: 120,
      40: 220,
      50: 320,
      60: 370,
      70: 420,
      80: 470,
      90: 999
    };

    this.labels = {
      0: 'limited Lite plan',
      10: 'under $20k USD / month',
      20: '$20k—$80k USD / month',
      30: '$80k—$150k USD / month',
      40: '$150k—$300k USD / month',
      50: '$300k—$500k USD / month',
      60: '$500k—$1M USD / month',
      70: '$1M—$1.5M USD / month',
      80: '$1M—$2M USD / month',
      90: 'over $2M USD / month'
    }


    const keys = Object.keys(this.prices);

    this.settings = {
      start: parseInt(keys[1]),
      step: parseInt(this.elements.slider.dataset.step) || 10,
      range: {
        min: parseInt(this.elements.slider.dataset.min) || parseInt(keys[0]),
        max: parseInt(this.elements.slider.dataset.max) || parseInt(keys[keys.length - 1])
      }
    };
  }

  initEvents() {
    this.slider.on('set', () => this.setPrice());
    this.slider.on('update', () => this.replaceTooltip());
  }

  setPrice() {
    const value = parseInt(this.slider.get());

    if (value === 0) {
      this.toggleLimited(true);
      this.toggleContact(false);
      this.elements.price.innerHTML = this.prices[value];
    } else if (value === 90) {
      this.toggleContact(true);
      this.toggleLimited(false);
    } else {
      this.toggleLimited(false);
      this.toggleContact(false);
      this.elements.price.innerHTML = this.prices[value] + 29;
    }

    this.replaceTooltip();
  }

  replaceTooltip() {
    const tooltip = this.elements.slider.querySelector('.noUi-tooltip');
    const value = parseInt(this.slider.get());

    tooltip.innerHTML = this.labels[value];
  }

  toggleLimited(show) {
    if (show) {
      this.elements.limitedInfo.style.visibility = 'visible';
    } else {
      this.elements.limitedInfo.style.visibility = 'hidden';
    }
  }

  toggleContact(show) {
    if (show) {
      this.elements.contact.style.display = 'block';
      this.elements.values.style.display = 'none';
    } else {
      this.elements.contact.style.display = 'none';
      this.elements.values.style.display = 'block';
    }
  }
}