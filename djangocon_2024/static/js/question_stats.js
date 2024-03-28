const serverData1 = document.getElementById("question-data-1");
const canvas1 = document.getElementById("question-answers-1");

const serverData2 = document.getElementById("question-data-2");
const canvas2 = document.getElementById("question-answers-2");

const serverData3 = document.getElementById("question-data-3");
const canvas3 = document.getElementById("question-answers-3");

const data1 = JSON.parse(serverData1.dataset.states);
const data2 = JSON.parse(serverData2.dataset.states);
const data3 = JSON.parse(serverData3.dataset.states);

let url1 = serverData1.dataset.url;
let url2 = serverData2.dataset.url;
let url3 = serverData3.dataset.url;

function createOptions(data, url, canvas) {
  return {
    series: data.map(e => e.count),
    labels: data.map(e => e.answer || e.options__answer),
    chart: {
      width: 420,
      type: 'donut',
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const clickedData = data[config.dataPointIndex];
          if (clickedData.answer) {
            url = url + "answer=" + encodeURIComponent(clickedData.answer);
          } else {
            url = url + "answer__options=" + encodeURIComponent(clickedData.options);
          }
          window.location.href = url;
        },
        dataPointMouseEnter: () => {
          canvas.style.cursor = "pointer";
        },
        dataPointMouseLeave: () => {
          canvas.style.cursor = "inherit";
        },
      },
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      formatter: function(val, opts) {
        if (val.length > 15) val = val.slice(0, 15) + "…";
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
      position: "bottom",
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%' // Use 100% width for small screens
        },
        legend: {
          position: 'bottom',
          offsetY: -10, // Adjust the legend's position to avoid overlapping with the chart
          itemMargin: {
            horizontal: 1, // Reduce the horizontal margin between legend items
            vertical: 1 // Reduce the vertical margin between legend items
          }
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: false, // Disable data labels on small screens
              }
            }
          }
        },
      }
    }],
    // ... rest of your options here ...
    tooltip: {
      enabled: false
    }
  };
}

let options1 = createOptions(data1, url1, canvas1);
let options2 = createOptions(data2, url2, canvas2);
let options3 = createOptions(data3, url3, canvas3);

let chart1 = new ApexCharts(document.querySelector("#question-answers-1"), options1);
chart1.render();

let chart2 = new ApexCharts(document.querySelector("#question-answers-2"), options2);
chart2.render();

let chart3 = new ApexCharts(document.querySelector("#question-answers-3"), options3);
chart3.render();