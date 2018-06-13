import Vue from 'vue';
import VueRouter from 'vue-router';

import Pages from '../components/Pages/Pages.vue';
import Form from '../components/Form/Form.vue';
import Charts from '../components/Charts/Charts.vue';

import Presentation from '../components/Presentation/Presentation.vue';
import EventBus from '../components/EventBus/ParentComponent.vue';
import Todos from '../components/Todos/Todo.vue';

import Layout from './Layout.vue';
import { store } from '../store/store';
Vue.use(VueRouter)

// eventBus
export const eventBus = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('ageWasEdited', age);
        }
    }
});

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Presentation },
    { path: '/event', component: EventBus },
    { path: '/form', component: Form },
    { path: '/pages/:id', component: Pages },
    { path: '/charts', component: Charts },
    { path: '/todos', component: Todos }
  ]
})

const BaseVue = Vue.extend({ router })

document.addEventListener('DOMContentLoaded', () => {
  const app = new BaseVue({
    el: '#profile',
    store,
    render: h => h(Layout)
  })
})

