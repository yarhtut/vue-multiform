<template>
  <div class='columns'>
    <p>{{ doubleCounter }}</p>
    <p>Number: {{ stringCounter }}</p>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  //computed: {
  //  counter() {
  //    //return this.$store.state.counter;
  //    return this.$store.getters.doubleCounter;
  //  },
  //  clicks() {
  //    return this.$store.getters.stringCounter;
  //  }
  //}
  computed: {
    ...mapGetters([
      'doubleCounter',
      'stringCounter'
    ])
  }
}
</script>
