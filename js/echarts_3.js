//动态数据 demo

var echarts = require("echarts");
const main = document.getElementById("main");
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(main, "dark");

let divLoadMore = document.createElement("div");
divLoadMore.innerHTML = `   
        <button
            class="loadMore"
            style="margin-top: 30px; width: 150px; height: 50px"
        >
          load more
        </button>`;

var parentNode = main.parentNode;
parentNode.insertBefore(divLoadMore, main.nextSibling);

const loadMoreBtn = document.querySelectorAll(".loadMore")[0];

// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
  title: {
    show: true,
    text: "ECharts 入门示例",
    right: 33,
  },
  tooltip: {
    show: true, //默认为true；鼠标悬浮item是否显示详细信息
  },
  legend: {
    data: ["销量"],
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      lineStyle: { color: "green" },

      name: "销量",
      type: "line", //pie（饼图系列）、line（折线图系列）、bar（柱状图系列）
      data: [
        {
          value: 5,
          itemStyle: {
            borderWidth: 15,
            borderColor: "#f1f1f1",
          },
        },
        20,
        36,
        10,
        10,
        20,
      ],
      itemStyle: {
        borderWidth: 15,
        borderColor: "#00d1d1",
      },
    },
  ],
});

loadMoreBtn.addEventListener("click", () => {
  const key = "羽绒服";
  const value = 18;
  myChart.setOption({
    xAxis: {
      data: [...["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"], key],
    },
    series: {
      data: [5, 20, 36, 10, 10, 20, value],
    },
  });
});
