<template>
  <ol class='columns'>
    <li v-for='todo in propsTodos'>
      <label>
        <input type='checkbox'
        v-on:change='propsFunToggle(todo)'
        v-bind:checked='todo.done'>
        {{ todo.text }}
        {{ todo.done }}
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
.columns { background: lightcoral; padding: 1rem; }
ol { list-style: none; }
</style>
