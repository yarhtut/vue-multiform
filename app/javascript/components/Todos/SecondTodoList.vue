<template>
  <ol class='columns'>
    <li v-for='todo in propsTodos'>
      <label>
        <input type='checkbox'
          v-on:change='propsFunToggle(todo)'
          v-bind:checked='todo.done'>
          {{ todo.text }}
      </label>
    </li>
  </ol>
</template>

<script>
export default {
  props: ['propsTodos', 'propsFunToggle']
}
</script>




























<style scoped>

.columns { background: #aaaaaa; padding: 1rem; }
  
ol { list-style: none; }
</style>
