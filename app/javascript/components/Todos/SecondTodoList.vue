<template>
  <div class='columns'>
    <h2>{{ propsName }}:</h2>
    <ol>
      <li v-for='todo in propsTodos'>
        <label>
          <input type='checkbox'
          v-on:change='propsFunToggle(todo)'
          v-bind:checked='todo.done'>
          {{ todo.text }}
        </label>
      </li>
    </ol>
    <button @click='increment'>Increment</button>
    <button @click='decrement'>Decrement</button>
  </div>
</template>

<script>
export default {
  props: ['propsTodos', 'propsFunToggle', 'propsName'],

  methods: {
    increment() {
      this.$store.state.counter ++;   
    },

    decrement() {
      this.$store.state.counter --;   
    }
  }
}
</script>




























<style scoped>

.columns { background: #aaaaaa; padding: 1rem; }

h2 { color: #efefef; }
ol { list-style: none; }
</style>
