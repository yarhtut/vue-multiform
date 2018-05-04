<template>
  <div class="post">
    <div class="loading" v-if="page.loading">Loading...</div>
    <div v-if="page.error" class="error">
      {{ page.error }}
    </div>
    <transition name="slide">
    <div v-if="page.parts" class="content" :key="page.post.slug">
      <h1>ContentFul with <em>JS SDK</em></h1>
      <h2>{{ page.post.title }}</h2>
      <vue-markdown>{{ page.parts.body }}</vue-markdown>
    </div>
    </transition>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import {createClient} from 'contentful'
import VueMarkdown from 'vue-markdown'

Vue.use(VueMarkdown)

const client = createClient({
  space: 'lwaqndzrnasi',
  accessToken: '95a34b52fe0658bde9433bdd78b0194b0a68f16b325328a5d9e6764895972d74'
})

@Component({
  components: {
    VueMarkdown
  }
})
export default class Page extends Vue {

  page = {
    loading: false,
    post: null,
    error: null,
    parts: null,
  }

  created() {
    this.fetchPage()
  }

  watch() {
    '$route': 'fetchPage'
  }

  fetchPage() {
    this.page.error = this.page.post = null
    this.page.loading = true

    client.getEntry(this.$route.params.id)
    .then((entry) =>  {
      this.page.post = entry.fields

      const partId = entry.fields.parts[0].sys.id

      client.getEntry(partId)
      .then((child) => {
        this.page.parts = child.fields
      })
      this.page.loading = false
    })
    .catch((err) => console.log(err))
  }

}
</script>

