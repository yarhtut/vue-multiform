import Vue from 'vue';
import VueRouter from 'vue-router';

import Page from '../pages/page.vue';
import Form from '../pages/form.vue';
import Charts from '../pages/chartsPage.vue';
import Nav from '../router/Nav.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Form },
    { path: '/post/:id', component: Page },
    { path: '/charts', component: Charts }
  ]
})

const BaseVue = Vue.extend({ router })

document.addEventListener('DOMContentLoaded', () => {
  const app = new BaseVue({
    el: '#profile',
    render: h => h(Nav)
  })
})
