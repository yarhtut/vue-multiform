<template>
  <div class="post">
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <transition name="slide">
      <div v-if="parts.body" class="content" :key="post.slug">
        <h1>ContentFul with <em>JS SDK</em></h1>
        <h2>{{ post.title }}</h2>
        <vue-markdown>{{ parts.body }}</vue-markdown>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import {createClient} from 'contentful'
import VueMarkdown from 'vue-markdown'

Vue.use(VueMarkdown);

export default{
  data () {
    return {
      loading: false,
      post: null,
      error: null,
      parts: null
    }
  },
  components: {
    VueMarkdown
  },
  created() {
    this.fetchPage()
  },
  watch: {
    '$route': 'fetchPage'
  },
  methods: {
    fetchPage() {
      this.error = this.post = null
      this.loading = true

      const client = createClient({
        space: 'lwaqndzrnasi',
        accessToken: '95a34b52fe0658bde9433bdd78b0194b0a68f16b325328a5d9e6764895972d74'
      })

      client.getEntry(this.$route.params.id)
      .then((entry) =>  {
        this.post = entry.fields
        const partId = entry.fields.parts[0].sys.id

        client.getEntry(partId)
        .then((child) => {
          this.parts = child.fields
        })

        //this.routeId = this.$route.params.id
          this.loading = false
      })
      .catch((err) => console.log(err))
    }
  }
}
</script>

<style>
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
}
.error {
  color: red;
}
.content {
  transition: all .35s ease;
  position: absolute;
}
.slide-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
