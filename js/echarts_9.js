//echart_9  使用vue-echarts  不使用App.vue

import Vue from "vue";
import ECharts from "vue-echarts";
import "echarts"; //全部导入

var option = genData();

new Vue({
  el: "#app",
  render: (h) =>
    h(ECharts, {
      props: {
        options: option,
      },
    }),
});
console.log("echarts_9");

function genData() {
  let data = [];
  for (let i = 0; i <= 360; i++) {
    let t = (i / 180) * Math.PI;
    let r = Math.sin(2 * t) * Math.cos(2 * t);
    data.push([r, i]);
  }
  return {
    title: {
      text: "极坐标双数值轴",
    },
    legend: {
      data: ["line"],
    },
    polar: {
      center: ["50%", "54%"],
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    angleAxis: {
      type: "value",
      startAngle: 0,
    },
    radiusAxis: {
      min: 0,
    },
    series: [
      {
        coordinateSystem: "polar",
        name: "line",
        type: "line",
        showSymbol: false,
        data: data,
      },
    ],
    animationDuration: 2000,
  };
}