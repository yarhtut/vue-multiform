import Vue from 'vue'
import Form from '../app.vue'
import VueRouter from 'vue-router'
import Post from '../pages/Post.vue'


import Nav from '../router/Nav.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/profiles', component: Form },
    { path: '/profiles/post/:id', component: Post }
  ]
})

const BaseVue = Vue.extend({ router })

document.addEventListener('DOMContentLoaded', () => {
  const app = new BaseVue({
    el: '#profile',
    render: h => h(Nav)
  })
})


