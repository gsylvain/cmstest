import WOW from 'wow.js/dist/wow';
import Siema from 'siema';

import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

import Questions from './components/questions';
import PricingSlider from './components/pricing';

import '../stylesheets/site.scss';

window.addEventListener('load', function () {
  const monitoringQuestions = document.querySelector('#monitoringQuestions');
  const performanceQuestions = document.querySelector('#performanceQuestions');
  const pricingSlider = document.querySelector('#pricingCalculator');

  new Questions(monitoringQuestions);
  new Questions(performanceQuestions);

  new WOW().init();

  new PricingSlider(pricingSlider);

  const quotes = new Siema({
    selector: '#customerQuotes',
    perPage: 1,
    loop: true
  });

  setInterval(() => quotes.next(), 2000);
});