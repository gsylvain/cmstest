import WOW from 'wow.js/dist/wow';
import Siema from 'siema';

import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';

import './components/timeline.js';

import Questions from './components/questions';
import PricingSlider from './components/pricing';

import '../stylesheets/site.scss';

window.addEventListener('load', function () {
  const monitoringQuestions = document.querySelector('#monitoringQuestions');
  const performanceQuestions = document.querySelector('#performanceQuestions');
  const pricingSlider = document.querySelector('#pricingCalculator');
  const homeHero = document.querySelector('#hero');
  const lgMinWidth = 960;

  new WOW().init();

  new Questions(monitoringQuestions);
  new Questions(performanceQuestions);
  new PricingSlider(pricingSlider);

  const quotes = new Siema({
    selector: '#customerQuotes',
    perPage: 1,
    loop: true
  });

  setInterval(() => quotes.next(), 5000);

    // Fix for home hero illustration
  const resizeHero = () => {
    const illustration = homeHero.querySelector('.js-hero-illustration');
    const text = homeHero.querySelector('.js-hero-text');

    if (window.matchMedia(`(min-width: ${lgMinWidth}px)`).matches) {
      text.style.height = `${illustration.offsetHeight}px`;
    } else {
      text.style.height = 'auto';
    }
  }

  if (homeHero) {
    resizeHero();
    window.addEventListener('resize', () => { resizeHero(); }, false);
  }
}, false);