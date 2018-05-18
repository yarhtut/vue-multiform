<template>
  <div class='row slide-show'>
    <transition name="slide">
      <div v-if="slide" class="content" :key="slide.id">
        <h1>Presentation</h1>
        <h2>{{ slide.id }}</h2>
        <h2>{{ slide.title }}</h2>
        <ul v-if='slide.lists.length'>
          <li v-for="(list,index) in slide.lists">
            {{ list }}
          </li> 
        </ul>
        <img :src="slide.imageUrl" />
      </div>
      <progress value="" max="slide.length"></progress>
    </transition>
  </div>
</template>

<script>
import { getSlide } from './api.js';

export default {
  data () {
    return {
      loading: false,
      slide: null,
      error: null,
      step: 0
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  mounted(){
    let self = this;
    self.fetchData();

    window.addEventListener('keyup', function(ev) {
      if (ev.key === 'ArrowRight') {
        self.step++
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
          this.slide = slide
        }
      })
    }
  }
}
</script>

