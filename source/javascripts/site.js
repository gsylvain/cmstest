import '../stylesheets/site.scss';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import WOW from 'wow.js/dist/wow';
import Vue from 'vue/dist/vue';

window.addEventListener('load', function () {
  new Vue({
    data: { 
      selected: 1
    },
    el: '#monitoringQuestions'
  });

  new Vue({
    data: { 
      selected: 1
    },
    el: '#performanceQuestions'
  });

  new WOW().init();
});