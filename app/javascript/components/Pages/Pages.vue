<template>
  <div class='row'>
    <div class="columns pages">
      <div class="loading" v-if="page.loading">Loading...</div>
      <div v-if="page.error" class="error">
        {{ page.error }}
      </div>
      <transition name="fade">
      <div v-show="page.parts" class="content">
        <h1>ContentFul with <em>JS SDK</em></h1>
        <h2>{{ page.post.title }}</h2>
        <vue-markdown>{{ page.parts.body }}</vue-markdown>
      </div>
      </transition>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import VueMarkdown from 'vue-markdown'
import client from '../../plugins/contentful.js'

Vue.use(VueMarkdown)

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
    parts: null
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
    this.previousId = this.$route.params.id

    client.getEntry(this.$route.params.id)
    .then((entry) =>  {
      this.page.post = entry.fields


      const partId = entry.fields.parts[0].sys.id

      client.getEntry(partId)
      .then((part) => {
        this.page.parts = part.fields
      })

      this.page.loading = false
    })
    .catch((err) => console.log(err))
  }
}
</script>

