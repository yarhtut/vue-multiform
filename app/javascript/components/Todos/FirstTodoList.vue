<template>
  <div class='columns'>
    <h2>{{ propsName }}: </h2>
    <ol >
      <li v-for='todo in propsTodos'>
        <label>
          <input type='checkbox'
          v-on:change='propsFunToggle(todo)'
          v-bind:checked='todo.done'>
          {{ todo.text }}
        </label>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ['propsTodos', 'propsFunToggle', 'propsName']
}
</script>




























<style scoped>
.columns { background: lightcoral; padding: 1rem; }
ol { list-style: none; }
h2 { color: #efefef; }
</style>
