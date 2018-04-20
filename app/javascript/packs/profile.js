/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#form',
    components: { App },
    data() {
      return {
        message: 'Vue muli-steps form',
        step:1,
        registration:{
          name: null,
          email: null,
          street: null,
          city: null,
          state: null,
          numtickets: 0,
          shirtsize: 'XL'
        }
      }
    },
    methods:{
      prev() {
        this.step--;
      },
      next() {
        this.step++;
        const { name, email } = this.registration;
        debugger
      },
      submit() {
        alert('Submit to blah and show blah and etc.');
      }
    }
  })
})

