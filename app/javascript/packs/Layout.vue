<template>
  <div id="profile">
    <app-nav></app-nav>
    <router-view class="view "></router-view>
  </div>
</template>

<script>

import AppNav from '../components/shared/AppNav.vue'

export default {
  components: {
    AppNav
  }
}
</script>
