var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const DATES = ['10 Jan`22', '11 Jan`22', '12 Jan`22', '13 Jan`22', '14 Jan`22', '15 Jan`22', '16 Jan`22', '17 Jan`22', '18 Jan`22', '19 Jan`22', '20 Jan`22', '21 Jan`22', '22 Jan`22', '23 Jan`22', '24 Jan`22', '25 Jan`22', '26 Jan`22', '27 Jan`22', '28 Jan`22', '29 Jan`22', '30 Jan`22', '31 Jan`22', '1 Feb`22', '2 Feb`22', '3 Feb`22', '4 Feb`22', '5 Feb`22', '6 Feb`22', '7 Feb`22', '8 Feb`22', '9 Feb`22', '10 Feb`22'];
const DATES = ['27 Jan`22', '28 Jan`22', '29 Jan`22', '30 Jan`22', '31 Jan`22', '1 Feb`22', '2 Feb`22', '3 Feb`22', '4 Feb`22', '5 Feb`22', '6 Feb`22', '7 Feb`22', '8 Feb`22', '9 Feb`22', '10 Feb`22'];
var dataSet1 = [];
var dataSet2 = [];

DATES.forEach(function(item, index, arr){
  newNum = randomScalingFactor();
  newNum2 = randomScalingFactor();
  dataSet1.push(newNum);
  dataSet2.push(newNum2);
});

var saletrend_data = {
  chart: {
    height: 328,
    type: 'line',
    zoom: {
      enabled: false
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: [ '#FF366B', '#0FE0F7'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    },
  },
  series: [{
      name: "Online Sales",
      data: dataSet1
    },
    {
      name: "In Store Sales",
      data: dataSet2
    }
  ],
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
    }
  },
  grid: {
    show: true,
    padding: {
      bottom: 0
    }
  },
  labels: DATES,
  xaxis: {
    tooltip: {
      enabled: false
    },
    style: {
      color: '#fff'
    }
  },
  yaxis: {
    style: {
      color: '#fff'
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -20
  }
}

// radial chart
var served_options = {
  series: [
    randomScalingFactor(),
    randomScalingFactor()
  ],
  chart: {
    height: 300,
    type: 'radialBar',
    foreColor: '#fff'
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
                  return randomScalingFactor()
                }
        }
      }
    }
  },
  labels: ['Online', 'In Store'],
};

// review pie chart
var review_options = {
  series: [
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor()
  ],
  chart: {
    width: 400,
    height: 400,
    type: 'pie',
    foreColor: '#fff',
  },
  labels: ['Cookies', 'Pastry/Doughnuts', 'Pies and Cakes', 'Bakery Snacks', 'Cold Beverages'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 400
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

var sold_options = {
  series: [{
    name: "Reviews in thousands",
    data: [
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor()
    ]
  }],
  chart: {
    type: 'bar',
    height: 300,
    foreColor: '#fff'
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: [ '#FDD835'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    },
  },
  xaxis: {
    categories: ['Cookies', 'Pastry/Doughnuts', 'Pies and Cakes', 'Bakery Snacks', 'Cold Beverages'],
    title: {
        text: 'Sales Value (INR in thousands) ',
    }
  },
  yaxis: {
       
  }
};

var strokewidth = 40;
var strokeHeight = 5;
var yearlysales_options = {
  series: [
  {
    name: 'Actual',
    data: [
    {
      x: '2017',
      y: randomScalingFactor(),
      goals: [
      {
        name: 'Expected',
        value: randomScalingFactor(),
        strokeWidth: strokewidth,
        strokeHeight: strokeHeight,
        strokeColor: '#ff4560'
      }
      ]
    },
    {
      x: '2018',
      y: randomScalingFactor(),
      goals: [
      {
        name: 'Expected',
        value: randomScalingFactor(),
        strokeWidth: strokewidth,
        strokeHeight: strokeHeight,
        strokeColor: '#ff4560'
      }
      ]
    },
    {
      x: '2019',
      y: randomScalingFactor(),
      goals: [
      {
        name: 'Expected',
        value: randomScalingFactor(),
        strokeWidth: strokewidth,
        strokeHeight: strokeHeight,
        strokeColor: '#ff4560'
      }
      ]
    },
    {
      x: '2020',
      y: randomScalingFactor(),
      goals: [
      {
        name: 'Expected',
        value: randomScalingFactor(),
        strokeWidth: strokewidth,
        strokeHeight: strokeHeight,
        strokeColor: '#ff4560'
      }
      ]
    },
    {
      x: '2021',
      y: randomScalingFactor(),
      goals: [
      {
        name: 'Expected',
        value: randomScalingFactor(),
        strokeWidth: strokewidth,
        strokeHeight: strokeHeight,
        strokeColor: '#ff4560'
      }
      ]
    },
    {
      x: '2022',
      y: randomScalingFactor(),
      goals: [
      {
        name: 'Expected',
        value: randomScalingFactor(),
        strokeWidth: strokewidth,
        strokeHeight: strokeHeight,
        strokeColor: '#ff4560'
      }
      ]
    }
    ]
  }
  ],
  chart: {
    height: 300,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: false,
    }
  },
  foreColor: '#fff',
  colors: ['#4200D1'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
      opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
      .goals

      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#4200D1', '#ff4560']
    }
  },
  xaxis: {
    title: {
        text: 'Year of sales ',
    },
    style: {
      color: '#fff'
    }
  },
  yaxis: {
    title: {
        text: 'INR sales value in lakhs',
    },
    style: {
      color: '#fff'
    }   
  }
};