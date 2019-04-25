import sample from './data';
import Vue from 'vue';
var app = new Vue({
	el : '#app',
	data: {
		title: sample.title,
		address: sample.address,
		about: sample.about,
		prices: sample.prices,
		amenities: sample.amenities,
		headerImageStyle: {
			'background-image':'url(sample/header.jpg)'
		},
		contracted: true,
		modalOpen: false
	},
	methods:{
						escapeKeyListener:function(evt) {
							if(evt.keycode === 27 && app.modalOpen) {
								app.modalOpen = false;
							}
						}
	},
	watch: {
		modalOpen:function(){
			var className = 'modal-open';
			if(this.modalOpen){
				document.body.classList.add(className);
			}
			else{
				document.body.classList.remove(className);
			}
		}
	},
	created: function() {
		document.addEventListener('keyup',this.escapeKeyListener);
	},
	destroyed: function () {
document.removeEventListener('keyup', this.escapeKeyListener);
}
});