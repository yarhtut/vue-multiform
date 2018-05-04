
<script>
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: 'rgba(248,121,121,.6)',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        },

        {
          label: 'Gitlab Commits',
          backgroundColor: '#26648e',
          data: [10, 20, 21, 36, 30, 40, 39, 30, 49, 28, 21, 11]
        }
      ]
    })
  }
}

</script>
