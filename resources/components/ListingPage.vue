<template>
	<div>
  <header-image :image-url="images[0]" @header-clicked="openModal">
  </header-image>
  <div class="container">    
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

let serverData = JSON.parse(window.vuebnb_server_data);
let model = populateAmenitiesAndPrices(serverData.listing);

import ImageCarousel from './ImageCarousel.vue';
import ModalWindow from './ModalWindow.vue';
import HeaderImage from './HeaderImage.vue';
import FeatureList from './FeatureList.vue';
import ExpandableText from './ExpandableText.vue'; 


// console.log(model);

export default {
  data() {
  	return Object.assign(model, {})
  },
  components: {
    HeaderImage,
    ImageCarousel,
    ModalWindow,
    FeatureList,
    ExpandableText
  },
  methods: {
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