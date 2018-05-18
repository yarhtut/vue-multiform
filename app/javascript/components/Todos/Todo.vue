<template>
  <div class='row todos'>
    <div class='columns'>
      <h2>{{ name }}:</h2>
      <form>
        <input type='text' v-model='newTextTodo'>
        <button type='submit' @click.prevent='addTodo()'>Add new todo</button>
      </form>
      <hr>
      <div class='row'>
        <first-todo-list @updated='counter += $event' :propsName='name' :propsTodos='todos' :propsFunToggle='toggle'></first-todo-list>
        <second-todo-list @updated='counter += $event' :propsName='name' :propsTodos='todos' :propsFunToggle='toggle'></second-todo-list>
      </div>
      <hr>
      <div class='row'>
        <counter-result :propsCounter='counter'></counter-result>
      </div>
    </div>
  </div>
</template>
<script>

export const generateId = () => Math.floor(Math.random()*100000)

import FirstTodoList from './FirstTodoList';
import SecondTodoList from './SecondTodoList';
import CounterResult from './CounterResult';

export default {
  data() {
    return {
      newTextTodo: null,
      todos: [
        { id: 1, text: 'Learn JavaScript', done: false },
        { id: 2, text: 'Learn Vue', done: false },
        { id: 3, text: 'Play around in JSFiddle', done: true },
        { id: 4, text: 'Build something awesome', done: true }
      ],
      name: 'Todos',
      counter: 0
    }
  },

  components: {
    FirstTodoList,
    SecondTodoList,
    CounterResult
  },

  methods: {
    addTodo() {
      const todos = this.todos;

      const newTodo = {id: generateId(), text: this.newTextTodo, done: false }

      this.todos = [...todos, newTodo]

      this.newTextTodo = null;
    },

    toggle(todo) {
      todo.done = !todo.done
    }
  }
}
</script>






















<style scoped>
.todos { margin-top: 2rem; }
h2 { color: #efefef; }
.columns { background: #00aabb; padding: 1rem; }
</style>
