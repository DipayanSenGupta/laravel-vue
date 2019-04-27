import "core-js/features/object/assign";
import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';
import ImageCarousel from './components/ImageCarousel.vue';
import ModalWindow from './components/ModalWindow.vue';
// console.log(window.vuebnb_listing_model);

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);
// console.log(model);


var app = new Vue({
  el: '#app',
  data: Object.assign(model, {
    headerImageStyle: {
      'background-image': `url(${model.images[0]})`
    },
    contracted: true,
    modalOpen: false 
    // modalOpen: false
  }),
  components: {
    ImageCarousel,
    ModalWindow
  },
  methods: {
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
    }
  }
});