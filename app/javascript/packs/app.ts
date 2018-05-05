import Vue from 'vue';
import VueRouter from 'vue-router';

import Page from '../pages/page.vue';
import Form from '../components/Form/Form.vue';
import Charts from '../pages/chartsPage.vue';

import Layout from '../pages/Layout.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Form },
    { path: '/pages/:id', component: Page },
    { path: '/charts', component: Charts }
  ]
})

const BaseVue = Vue.extend({ router })

document.addEventListener('DOMContentLoaded', () => {
  const app = new BaseVue({
    el: '#profile',
    render: h => h(Layout)
  })
})

