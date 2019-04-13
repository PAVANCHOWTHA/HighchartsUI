var UI=()=>{
  Highcharts.chart('container',{
  title: {
            text: 'Overall assessement Score '+this.khus +' %'
          },
    subtitle: {
            text: 'This chart shows how all candidates performed compared to Khushroo. The chart changes each time a new candidate completed an assessment. '
          },
    credits: {
        text: 'Median Score: Half the candidates scored above this value and half below',
        position: {
            align: 'center',
            y: -2 // position of credits
        },
        style: {
            fontSize: '10pt' 
        }
    },
    chart: {
    height: 300,
    type: 'areaspline',
    events: {
      render: function() {
        var chart = this,
          xAxis = chart.xAxis[0],
          point,
          svgElem,
          x1,
          y1,
          y2;

        if (chart.customSvgElements) {
          chart.customSvgElements.forEach(function(elem) {
            elem.destroy();
          });
        }

        chart.customSvgElements = [];

        chart.series.forEach(function(series) {
          if (series.options.type === 'scatter') {

            point = series.points[0];

            x1 = point.plotX + chart.plotLeft;
            y1 = point.plotY + chart.plotTop + point.graphic.radius;
            y2 = chart.plotTop + chart.plotHeight;

            svgElem = chart.renderer.path([
                'M', x1, y1, 'L', x1, y2, 'z'
              ])
              .attr({
                stroke: point.color,
                'stroke-width': 1
              })
              .add()
              .toFront();

            chart.customSvgElements.push(svgElem);
          }
        });
      }
    }
  },
  yAxis: {
    max: this.length/3,
    title: {
            text: 'No of Students'
        },
        alignTicks: true,
        tickInterval:5
  },
   xAxis: {
        title: {
            text: 'Scores in %'
        },
        alignTicks: true,
        tickInterval:10
        
    },
  plotOptions: {
    scatter: {
      showInLegend: false,
      marker: {
        symbol: "circle",
        radius: 5
      },
      dataLabels: {
        enabled: true,
        align: 'left',
        x: -10,
        y: -5,
        formatter: function() {
          var header = '<span style="color: ' + this.series.color + ';">' + this.series.name + '</span>',
            footer = '<span style="color: ' + this.series.color + ';">' + this.x + '%</span>';

          return header + '<br>' + footer;
        }
      }
    }
  },
  series: [{
    name: 'Scores',
    color:'#10B1BB',
    data:this.arr,
    
    marker: {
      enabled: false
    }
  }, {
    name: "Khushroo's score",
    type: 'scatter',
    color: '#2b4368',
    marker: {
        radius:8
      },
    data:[
    [this.khus,this.yeq1]
    ]
  },{
    name: 'Median score',
    type: 'scatter',
    color: '#8888',
    marker: {
        radius:8
      },
       
    data: [
      [this.median,this.yeq]]
  },
  
  
  ]
});
}  
