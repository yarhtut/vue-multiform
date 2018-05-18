<template>
  <div class="component">
    <h3>First Child</h3>
    <p>My name is {{ myName }}</p>
    <p>I am {{ myAge }} year old.</p>
    <button @click="resetName">Local Reset Name</button>
    <button @click="resetFn()">Parent Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../../packs/app';

export default {
  props: {
    myName: {
      type: String
    },
    resetFn: Function,
    myAge: Number
  },
  methods: {
    resetName() {
      this.myName = 'Ben Reset my name in local component';
      //this.$emit('nameWasReset', this.myName);
    }
  },
  created() {
    eventBus.$on('ageWasEdited', (age) => {
      this.myAge = age;
    });
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
  padding: 1rem;
}
</style>
