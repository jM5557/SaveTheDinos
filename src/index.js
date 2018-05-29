import Vue from 'vue';
import Main from './components/Main.vue';

window.onload = function () {
	new Vue({
		el: '#main',
		template: '<Main></Main>',
		
		render: (h) => { return h(Main) }
	});
}