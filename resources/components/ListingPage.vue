<template>
	<div>
  <header-image 
  v-if="images[0]"
  :image-url="images[0]" @header-clicked="openModal">
  </header-image>
  <div class="listing-container">    
    <div class="heading">
      <h1>{{	title	}}</h1>
      <p>{{ address }}</p>
    </div>
    <hr>
    <div class="about">
      <h3>About this listing</h3>
      <expandable-text>{{about}}</expandable-text>
    </div>
    <div class="lists">
      <hr>
      <feature-list title="Amenities" :items="amenities">
        <template slot-scope="amenity">
          <i class="fa fa-lg" :class="amenity.icon"></i>
          <span>{{  amenity.title }}</span>
        </template>
      </feature-list>  
        <hr>
       <feature-list title="Prices" :items="prices">
        <template slot-scope="price">
          {{ price.title }}  &nbsp; <strong>{{price.value}}</strong>          
        </template>
       </feature-list> 
    </div>
  </div>
  <modal-window ref="imagemodal">
    <image-carousel :images="images"></image-carousel>
  </modal-window>
</div>
</template>

<script type="text/javascript">
	

import { populateAmenitiesAndPrices } from '../js/helpers';
import "core-js/features/object/assign";
import routeMixin from '../js/routeMixin';
let serverData = JSON.parse(window.vuebnb_server_data);
let model = populateAmenitiesAndPrices(serverData.listing);

import ImageCarousel from './ImageCarousel.vue';
import ModalWindow from './ModalWindow.vue';
import HeaderImage from './HeaderImage.vue';
import FeatureList from './FeatureList.vue';
import ExpandableText from './ExpandableText.vue'; 

// console.log(model);

export default {
mixins: [ routeMixin ],
data() {
	return {
		title: null,
		about: null,
		address: null,
		amenities: [],
		prices: [],
		images: []
		}
	},
  components: {
    HeaderImage,
    ImageCarousel,
    ModalWindow,
    FeatureList,
    ExpandableText
  },
  methods: {
  	assignData({ listing }) {
  		console.log(this.$data$);
Object.assign(this.$data, populateAmenitiesAndPrices(listing));
},
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
    }
  }
}

</script>

<style type="text/css">
	.about {
		margin: 2em 0;
	}

	.about h3 {
		font-size: 22px;
	}
</style>