<template>
  <div class="row">
    <div class="columns">
      <h1>The Parent Component</h1>
      <p>My name is {{ name }}</p>
      <p>I am {{ age }} year old.</p>
      <hr>
      <div class="row">
        <div class="columns">
          <first-child
            :myName="name"
            :myAge='age'
            :resetFn="resetName">
          </first-child>
        </div>
        <div class="columns">
          <second-child
            :myName="name"
            :myAge='age'
            @ageWasEdited="age = $event">
          </second-child>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FirstChild from './FirstChild.vue';
import SecondChild from './SecondChild.vue';

export default {
  data() {
    return {
      name: 'Yar',
      age: 35
    };
  },
  methods: {
    changeName() {
      this.name = 'Ben Parent Component Function';
    },
    resetName() {
      this.name = 'Andy call from child component';
    }
  },
  components: {
    FirstChild,
    SecondChild
  }
}
</script>

<style scoped>
  .columns { background: #774455; color: #eeeeee; padding: 1rem;}
</style>
