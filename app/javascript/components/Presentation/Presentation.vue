<template>
  <div class='row slide-show'>
    <transition name="slide-fade" class='columns'>
      <div v-if="slide" class="frame columns" :key="slide.id">
        <h4 v-if='slide.presentation'>{{ slide.presentation }}</h4>
        <h1 v-if='slide.presentationTitle'>{{ slide.presentationTitle }}</h1>
        <h2 v-if='slide.title'>{{ slide.title }}</h2>
        <h3>{{ slide.by }}  <a :href='slide.linkUrl' target='_blank'> {{ slide.link }}</a></h3>
        <div class='list-column'>
          <ul v-if='slide.lists.length'>
            <li v-for="(list,index) in slide.lists" :key='index' :class="index">
              {{ list }}
            </li>
          </ul>
        </div>
        <img :src="slide.imageUrl" />
        <p v-show='slide.demo'>
          <a :href="slide.demo" target="_blank">Demo </a>
        </p>
        <vue-markdown>{{ slide.markdown }}</vue-markdown>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMarkdown from 'vue-markdown';

import { getSlide } from './api.js';
Vue.use(VueMarkdown)

export default {
  data () {
    return {
      loading: false,
      slide: null,
      error: null,
      step: 0,
      frame: false
    }
  },

  components: { VueMarkdown },

  watch: {
    '$route': 'fetchData'
  },
  mounted(){
    let self = this;
    self.fetchData();

    window.addEventListener('keyup', function(ev) {
      if (ev.key === 'ArrowRight') {
        self.step++;
        self.fetchData()
      }
      else if (ev.key === 'ArrowLeft') {
        self.step--
          self.fetchData()
      }
      else {
        console.log('key wroung')
      }
    });
  },
  methods: {
    fetchData () {
      this.error = this.slide = null
      this.loading = true

      getSlide(this.step, (err, slide) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.slide = slide;
          this.frame = true
        }
      })
    }
  }
};
</script>

<style>
h4 {
  font-size: 3.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 15%;
}
h1 {
  font-size: 8rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.15);
}
img { width: 100%; }
a { color: rgba( 71,183,132, 1) !important; }
h1 { color: rgba( 71,183,132, 1) }
h2 {
  font-size: 4.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 15%;
}
.list-column {
  display: flex;
  justify-content: center;
  text-align: left;
}
.columns {
  text-align: center;
}
ul { list-style: circle; }
.list-column ul li { padding: 1rem; margin-left: 3rem; font-size: 3rem;}

.slide-fade-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-leave-active {
  //transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
  transform: translateX(500px);
  opacity: 0;
}
</style>

