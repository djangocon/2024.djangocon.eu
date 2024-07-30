const serverData = document.getElementById("question-data")
const canvas = document.getElementById("question-answers")
const data = JSON.parse(serverData.dataset.states)
let url = serverData.dataset.url
const options = {
  series: data.map(e => e.count),
  labels: data.map(e => e.answer || e.options__answer),
  chart: {
    width: 420,
    type: 'donut',
    events: {
      dataPointSelection: (event, chartContext, config) => {
        const clickedData = data[config.dataPointIndex]
        if (clickedData.answer) {
          url = url + "answer=" + encodeURIComponent(clickedData.answer)
        } else {
          url = url + "answer__options=" + encodeURIComponent(clickedData.options)
        }
        window.location.href = url
      },
      dataPointMouseEnter: () => {
        canvas.style.cursor = "pointer"
      },
      dataPointMouseLeave: () => {
        canvas.style.cursor = "inherit"
      },
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    formatter: function(val, opts) {
      if (val.length > 15) val = val.slice(0, 15) + "…"
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    },
    position: "bottom",
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }],
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            formatter: (val) => {
              if (val.length < 15) return val
              return val.slice(0, 15) + "…"
            }
          }
        }
      }
    }
  },
  tooltip: {
    enabled: false
  }
};

window.onload = function() {
  // List of ids for your data sources and chart containers
  const ids = ['question1', 'question2']; // replace with your actual ids

  ids.forEach(id => {
      const serverData = document.getElementById(`${id}-data`);
      const canvas = document.getElementById(`${id}-answers`);
      const data = JSON.parse(serverData.dataset.states);
      let url = serverData.dataset.url;
      const options = {
          // your chart options here
      };

      // Initialize the chart
      var chart = new ApexCharts(canvas, options);
      chart.render();
  });
};

let chart = new ApexCharts(document.querySelector("#question-answers"), options);
chart.render();



