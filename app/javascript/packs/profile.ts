import Vue from 'vue'
import Form from '../app.vue'
import VueRouter from 'vue-router'

import Post from '../pages/Post.vue'
import Charts from '../pages/Charts.vue'
import Nav from '../router/Nav.vue'

Vue.use(VueRouter)

const Home = { template: `<div></div>` }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Form },
    { path: '/post/:id', component: Post }
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


