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

// start rocket clicking thing

'use strict';

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  // these dont change
  var navrocketElem = document.getElementById('nav-rocket'),
      navrocketBgSize = parseInt(window.getComputedStyle(navrocketElem)
        .getPropertyValue('background-size'), 10);

  navrocketElem.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(navrocketElem, navrocketDOMRect);

    // these change depending on window size
    var navrocketDOMRect = navrocketElem.getBoundingClientRect(),
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight;

    var rocket = getrocket(navrocketDOMRect, navrocketBgSize);
    document.body.appendChild(rocket);
    
    // force a repaint so transition is applied correctly
    window.getComputedStyle(rocket).display;
    rocket.classList.add('expanding-rocket-expand');
    rocket.style.top = (windowHeight * (.75 - Math.random())) + "px";
    rocket.style.left = (windowWidth * (.75 - Math.random()) * .75) + "px";
  });

  document.body.addEventListener('transitionend', function(e) {
    var el = e.target;
    if(el.classList.contains('expanding-rocket-expand')) {
      document.body.removeChild(el);
    }
  });
});

function getrocket(DOMRect, bgSize) {
  var rocket = document.createElement('div');
  rocket.classList.add('expanding-rocket-initial');

  rocket.style.top = (DOMRect.top + DOMRect.height/2 - bgSize/2) + "px";
  rocket.style.left = (DOMRect.left + DOMRect.width/2 - bgSize/2) + "px";
  rocket.style.height = bgSize + "px";
  rocket.style.width = bgSize + "px";

  return rocket;
}