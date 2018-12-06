import noUiSlider from 'nouislider/distribute/nouislider';

export default class PricingSlider {
  constructor(element) {
    // Fail if element doesn't exist
    if (!element) {
      return false;
    }

    this.initLocalization('b9e14cb94ee69f0a').then((data) => {
      this.currency = data;

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

      this.updatePrice();
      this.initEvents();
    },
    (reason) => {
      console.log(reason);
    });
  }

  initSlider(element) {
    this.elements = {
      slider: element.querySelector('.js-slider'),
      values: element.querySelector('.js-values'),
      price: element.querySelector('.js-price'),
      currency: element.querySelector('.js-price-currency'),
      limitedInfo: element.querySelector('.js-limited-info'),
      contact: element.querySelector('.js-contact')
    }
  }

  initSettings() {
    this.prices = {
      0: 29,
      10: 59,
      20: 99,
      30: 149,
      40: 249,
      50: 349,
      60: 399,
      70: 449,
      80: 499,
      90: false
    };

    this.labels = {
      0: 'limited Lite plan',
      10: `under ${this.currency.prefix}20k ${this.currency.symbol} / month`,
      20: `${this.currency.prefix}20k—80k ${this.currency.symbol} / month`,
      30: `${this.currency.prefix}80k—150k ${this.currency.symbol} / month`,
      40: `${this.currency.prefix}150k—300k ${this.currency.symbol} / month`,
      50: `${this.currency.prefix}300k—500k ${this.currency.symbol} / month`,
      60: `${this.currency.prefix}500k—1M ${this.currency.symbol} / month`,
      70: `${this.currency.prefix}1M—1.5M ${this.currency.symbol} / month`,
      80: `${this.currency.prefix}1M—2M ${this.currency.symbol} / month`,
      90: `over ${this.currency.prefix}2M ${this.currency.symbol} / month`
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
    this.slider.on('set', () => this.updatePrice());
    this.slider.on('update', () => this.updateTooltip());
  }

  updatePrice() {
    const value = parseInt(this.slider.get());

    if (value === 0) {
      this.toggleLimited(true);
      this.toggleContact(false);
    } else {
      this.toggleLimited(false);
      this.toggleContact(false);
    }

    if (this.prices[value] === false) {
      this.toggleContact(true);
      this.toggleLimited(false);
    } else {
      const price = Math.round(this.prices[value] * this.currency.conversion);
      
      this.elements.currency.innerHTML = this.currency.prefix;
      this.elements.price.innerHTML = price;
    }

    this.updateTooltip();
  }

  updateTooltip() {
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

  apiCall(url, methodType) {
    let promise = new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      if ('withCredentials' in xhr) {
        xhr.open(methodType, url, true);
      } else {
        reject(new Error('CORS not supported'));
      }

      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.status);
          }
        }
      }
    });

    return promise;
  }

  initLocalization(id) {
    let promise = new Promise((resolve, reject) => {
      const apiUrl = `https://ssl.geoplugin.net/json.gp?k=${id}`;
      let currency = {
        prefix: '$',
        symbol: 'USD',
        conversion: 1
      };

      this.apiCall(apiUrl, 'GET').then(
        (data) => {
          currency.prefix = data.geoplugin_currencySymbol_UTF8 ? data.geoplugin_currencySymbol_UTF8 : '$';
          currency.symbol = data.geoplugin_currencyCode ? data.geoplugin_currencyCode : 'USD';
          currency.conversion = data.geoplugin_currencyConverter ? data.geoplugin_currencyConverter : 1;
          resolve(currency);
        },
        (reason) => { 
          reject(reason); 
        }
      );
    });

    return promise;
  }
}