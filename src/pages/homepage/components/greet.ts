import Vue from 'vue'
// import Vue = require('vue');
import Component from 'vue-class-component'

@Component({
	template: '<button @click="onClick">Click!!<p>{{message}}</p></button>',
	props: {
		propMessage: String
	}
})

export default class MyComponent extends Vue {
     message:string = 'Hello!';
		 helloMsg = 'Hello'

		 onClick (event:any): void {
			   console.log('event', event);
			   window.alert(this.message);
		 }

		 get computedMsg () {
		 	   return 'computed ' + this.message
		 } 
}
console.log(Vue); 
console.log(Component);
// export default class MyComponent extends Vue{
	  
// }