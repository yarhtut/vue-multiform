<template>
  <div class='content-body'>
    <div id="app">
      <ul>
        <li><router-link to="/profiles">Form</router-link></li>
        <li><router-link to="/profiles/post/6I5HpBTapygIwiQUkUqmOs">Our Work</router-link></li>
        <li><router-link to="/profiles/post/jO3As3MU0gUA4AwU4Eqs0">Digital resource guide</router-link></li>
        <li><router-link to="/profiles/post/4SJrR8FgU0awQm0IMS6WyQ">Any Question Guide</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Nav extends Vue {

</script>













