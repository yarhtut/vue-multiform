<template>
  <div class='row'>
    <div class='columns'>
      <h1>Chart with <em>Vue-Charts</em></h1>
      <line-chart> </line-chart>
    <ben-yar></ben-yar>
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.vue';
import BenYar from './BenYar.vue';

export default {
  components: {
    LineChart,
    BenYar
  }
}
</script>
