<template>
  <div class='row'>
    <div class='columns'>
      <h1>Chart with <em>Vue-Charts</em></h1>
      <line-chart> </line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.vue';

export default {
  components: {
    LineChart
  }
}
</script>
