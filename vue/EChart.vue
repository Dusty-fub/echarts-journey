<template>
  <div
    class='echart'
    ref='echart'
  >
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  props: ["option"],
  mounted() {
    console.log(this.option);
    console.log(this.$refs.echart);
    var myChart = echarts.init(this.$refs.echart);
    myChart.setOption(this.option);
  },
};
</script>

<style>
.echart {
  width: 600px;
  height: 600px;
}
</style>