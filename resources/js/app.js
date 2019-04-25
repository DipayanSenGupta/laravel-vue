import sample from './data';
import Vue from 'vue';
import "core-js/fn/object/assign";
var app = new Vue({
	el : '#app',
	data: Object.assign(sample,{
		headerImageStyle: {
			'background-image':'url(/images/header.jpg)'
		},
		contracted: true,
		modalOpen: false
	},
	methods:{
						escapeKeyListener(evt) {
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