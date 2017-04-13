import Vue from 'vue';
import greets from './components/greet.ts'

new Vue({
	 el: '#app',
	 data: function() {
		 return {
			  greet: "hello"
		 }
	 },
	 components: {
		  greets: greets
	 }
})