<template>
  <div>
    <ul class='nav' v-if='navbar'>
      <li><router-link to="/">Presentation</router-link></li>
      <li><router-link to="/event">EventBus</router-link></li>
      <li><router-link to="/form">Form</router-link></li>
      <li><router-link to="/pages/6I5HpBTapygIwiQUkUqmOs">Our Work</router-link></li>
      <li><router-link to="/pages/jO3As3MU0gUA4AwU4Eqs0">Digital resource guide</router-link></li>
      <li><router-link to="/pages/4SJrR8FgU0awQm0IMS6WyQ">Any Question Guide</router-link></li>
      <li><router-link to="/charts">Charts</router-link></li>
      <li><router-link to="/todos">Todos</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

  data() {
    return {
      navbar: false
    }
  }

}

</script>













