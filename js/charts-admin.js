// Using chart.js to represent Miles Statistics
const milesChartContainer = document.getElementById("miles-chart");

new Chart(milesChartContainer, {
  type: "bar",
  data: {
    labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    datasets: [
      {
        data: [140, 120, 157, 115, 140, 90, 125],
        backgroundColor: [
            "#2884FF",
            "#2884FF",
            "#2884FF",
            "#2884FF",
            "#2884FF",
            "#2884FF",
            "#2884FF",
        ],
        barThickness: 30,
        maxBarThickness: 50,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {}).format(
                context.parsed.y
              );
              label += "k";
            }
            return label;
          },
          labelPointStyle: function (context) {
            return {
              pointStyle: "circle",
              rotation: 0,
            };
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false,
        grid: {
          color: "transparent",
        },
      },
      x: {
        border: {
          color: "transparent",
        },
        grid: {
          color: "#eff",
          tickColor: "transparent",
        },
      },
    },
  },
});

// Using apexcharts.js to represent Car Statistics
const carChart = document.getElementById("car-chart");

let carChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    width: "100%",
    height: 200,
    offsetY: 18,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
  },
  series: [
    {
      name: "values",
      data: [3.13, 4.45, 5.33, 5.13, 4.5, 4.25, 4.75, 5.44],
    },
  ],
  colors: ["#FF764C"],
  xaxis: {
    labels: {
      show: true,
      floating: true,
    },
    axisBorder: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
    categories: [
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7",
      "T8",
    ],
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 0,
      stops: [0, 100],
      colorStops: [
        {
          offset: 0,
          opacity: 0.15,
          color: "#FF764C",
        },
        {
          offset: 100,
          opacity: 0,
          color: "#FF764C",
        },
      ],
    },
  },
  stroke: {
    width: 1,
    lineCap: "round",
  },
  grid: {
    borderColor: "rgba(0, 0, 0, 0)",
    padding: {
      top: -30,
      right: 0,
      bottom: -8,
      left: 12,
    },
  },
  markers: {
    strokeColors: "#FF764C",
  },
  yaxis: {
    show: false,
  },
};
let carChartContainer = new ApexCharts(carChart, carChartOptions);

carChartContainer.render();
