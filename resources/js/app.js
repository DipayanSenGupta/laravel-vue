import Vue from 'vue';
import ListingPage from '../components/ListingPage.vue';
import "core-js/features/object/assign";
var app = new Vue ({
  el: '#app',
  render: h => h(ListingPage) 
});