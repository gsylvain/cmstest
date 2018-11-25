import WOW from 'wow.js/dist/wow';
import $ from 'jquery/src/jquery';
import Siema from 'siema';
import Slider from 'nouislider';

import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

import Questions from './components/questions';

import '../stylesheets/site.scss';

window.addEventListener('load', function () {
  const monitoringQuestions = document.querySelector('#monitoringQuestions');
  const performanceQuestions = document.querySelector('#performanceQuestions');
  const pricing = document.querySelector('#pricingSlider');

  new Questions(monitoringQuestions);
  new Questions(performanceQuestions)

  new WOW().init();

  const quotes = new Siema({
    selector: '#customerQuotes',
    perPage: 1,
    loop: true
  });

  setInterval(() => quotes.next(), 2000);

  if (pricing) {
    Slider.create(pricing, {
      start: [59],
      range: {
        'Lite plan': [29],
        '$0k—$20k USD / month': [59],
        '$20k—$80k USD / month': [99],
        '$80k—$150k USD / month': [149],
        '$150k—$300k USD / month': [249],
        '$300k—$500k USD / month': [349],
        '$500k—$1M USD / month': [399],
        '$1M—$1.5M USD / month': [449],
        '$1.5M-$2M USD / month': [499],
        '$2M+ USD / month': [999]
      }
    });
  }
});