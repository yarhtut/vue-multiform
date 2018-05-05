import Vue from 'vue';
import VueRouter from 'vue-router';

import Pages from '../components/Pages/Pages.vue';
import Form from '../components/Form/Form.vue';
import Charts from '../components/Charts/Charts.vue';

import Layout from './Layout.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Form },
    { path: '/pages/:id', component: Pages },
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

