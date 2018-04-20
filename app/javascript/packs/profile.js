import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#form',
    components: { App },
    data() {
      return {
        message: 'Learning how Rails and Vue.js working together by building multi-steps form',
        profile:{
          steps: 1,
          first_name: null,
          last_name: null,
          first_name: null,
          email: null,
          street: null,
          suburb: null,
          city: null,
          income: 0,
          partner_name: null,
          partner_relation: null,
        }
      }
    },
    methods:{
      prev() {
        this.profile.steps--;
      },
      next() {
        const token = document.querySelector(`meta[name='csrf-token']`).getAttribute('content');

        fetch(`/profiles` , {
          body: JSON.stringify({ profile: this.profile }),
          method: 'POST',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-type': 'application/json',
            'X-CSRF-TOKEN': token
          },
          credentials: 'same-origin'
        })
        .then(() => {
          this.profile.steps++;
        })
      },
      stepsTwo() {
        const token = document.querySelector(`meta[name='csrf-token']`).getAttribute('content');

        //fetch(`/profiles` , {
        //  body: JSON.stringify({ profile: this.profile }),
        //  method: 'POST',
        //  headers: {
        //    'X-Requested-With': 'XMLHttpRequest',
        //    'Content-type': 'application/json',
        //    'X-CSRF-TOKEN': token
        //  },
        //  credentials: 'same-origin'
        //})
        //.then(() => {
        //})
          this.profile.steps++;
      },
      submit() {
        alert('Your Profile has been send.');
      }
    }
  })
})

