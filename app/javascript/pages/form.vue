<template>
  <div class='content-body'>
  <form>
    <h1>{{profile.formMessage}}<em>{{profile.formem}}</em></h1>
    <div v-if="profile.steps === 1">
      <h2>Profile detail:</h2>

      <div>
        <legend for="first_name">Your First Name:</legend>
        <input id="first_name" name="first_name" v-model="profile.first_name">
      </div>

      <div>
        <legend for="last_name">Your Last Name:</legend>
        <input id="last_name" name="last_name" v-model="profile.last_name">
      </div>

      <div>
        <legend for="nick_name">Your Nick Name:</legend>
        <input id="nick_name" name="nick_name" v-model="profile.nick_name">
      </div>

      <div>
        <legend for="email">Your Email:</legend>
        <input id="email" name="email" type="email" v-model="profile.email">
      </div>

      <button @click.prevent="next()">Next</button>
    </div>

    <div v-else-if="profile.steps === 2">
      <h2>Address:</h2>
      <div>
        <legend for="street">Your Street:</legend>
        <input id="street" name="street" v-model="profile.street">
      </div>

      <div>
        <legend for="city">Your City:</legend>
        <input id="city" name="city" v-model="profile.city">
      </div>

      <div>
        <legend for="state">Your State:</legend>
        <input id="state" name="state" v-model="profile.state">
      </div>

      <button @click.prevent="prev()">Previous</button>
      <button @click.prevent="stepsTwo()">Next</button>

    </div>

    <div v-else-if="profile.steps === 3">
      <h2>Step Three</h2>
      <div>
        <legend for="partner_name">Your Street:</legend>
        <input id="partner_name" name="partner_name" v-model="profile.partner_name">
      </div>

      <div>
        <legend for="partner_relation">Your City:</legend>
        <input id="partner_relation" name="partner_relation" v-model="profile.partner_relation">
      </div>

      <div>
        <legend for="income">Your State:</legend>
        <input id="income" name="income" v-model="profile.income">
      </div>
      <button @click.prevent="prev()">Previous</button>
      <button @click.prevent="submit()">Save</button>
    </div>
  </form>
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Form extends Vue {
  // initial data
  profile: Object  = { 
  // `Object` is typescript thing for our data type
  // we can declare as  profile: Array || profile: String ...
    formMessage: 'Vue class component',
    formem: 'with Typescript',
    steps: 1,
    first_name: null,
    last_name: null,
    nick_name: null,
    email: null,
    street: null,
    suburb: null,
    city: null,
    income: 0,
    partner_name: null,
    partner_relation: null,
  }

  prev() {
    //this.profile.steps--;
  }

  next() {
    //this.profile.steps++;
  }

  stepsTwo() {
    //this.profile.steps++;
  }
  submit() {

  }

  // computed
  computed() {

  }

  // 
  watch() {

  }

}
</script>













