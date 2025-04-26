// ==============================|| DASHBOARD - GRAPHIQUE DES COMMANDES ANNUELLES TOTALES ||============================== //

const chartData = {
  type: 'line',
  height: 90,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#fff'],
    fill: {
      type: 'solid',
      opacity: 1
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        show: false
      }
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => 'Commande Totale'
        }
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      name: 'série1',
      data: [35, 44, 9, 54, 45, 66, 41, 69]
    }
  ]
};

export default chartData;
