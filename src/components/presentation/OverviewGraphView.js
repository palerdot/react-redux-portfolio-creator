// component to draw portfolio overview graph
import React from 'react'

import moment from 'moment'
import { Line as LineChart } from 'react-chartjs'

class OverviewGraphView extends React.Component {

  constructor(props) {
    super(props)
    // set state; we are storing height and weight our graph container
    this.state = {
      width: 300,
      height: 250
    }
  }

  // get chart date
  // helper function to get dates from the history data
  _getChartPlotDates() {
    return [
      "2015-06-26T00:00:00.000Z",
      "2015-06-29T00:00:00.000Z",
      "2015-06-30T00:00:00.000Z",
      "2015-07-01T00:00:00.000Z",
      "2015-07-02T00:00:00.000Z"
    ]
  }

  // ref: https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/01-Line-Chart.md
  // helper function to get chartdata
  _getChartData() {
    return {
      // labels: ["January", "February", "March", "April", "May", "June", "July"],
      labels: this._getChartPlotDates().map((d) => {
        return moment(d).format("D/M/YYYY")
      }),
      datasets: [
        {
          label: "Portfolio Overview",
          // fillColor: "rgba(151,187,205,0.2)",
          fillColor: "rgba(29, 112, 202, 0.7)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          // data: [28, 48, 40, 19, 86]
          data: this.props.historical_net_worth_data(this._getChartPlotDates())
        }
      ]
    }
  }

  // ref: https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/01-Line-Chart.md
  // get chart options
  _getChartOptions() {
    return {
      ///Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : true,

      //String - Colour of the grid lines
      scaleGridLineColor : "rgba(0,0,0,.05)",

      //Number - Width of the grid lines
      scaleGridLineWidth : 1,

      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,

      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,

      //Boolean - Whether the line is curved between points
      bezierCurve : true,

      //Number - Tension of the bezier curve between points
      bezierCurveTension : 0.4,

      //Boolean - Whether to show a dot for each point
      pointDot : true,

      //Number - Radius of each point dot in pixels
      pointDotRadius : 4,

      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth : 1,

      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius : 20,

      //Boolean - Whether to show a stroke for datasets
      datasetStroke : true,

      //Number - Pixel width of dataset stroke
      datasetStrokeWidth : 2,

      //Boolean - Whether to fill the dataset with a colour
      datasetFill : true,
      // {% raw %}
      //String - A legend template
      // legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
      // {% endraw %}

      //Boolean - Whether to horizontally center the label and point dot inside the grid
      offsetGridLines : false
    }
  }

  render() {
    return (
      <div ref="graphContainer">
        <div style={{fontSize: '22px', color: '#1D70CA', textAlign: 'left', padding: '11px 29px'}}>Portfolio Overview</div>
        <LineChart data={this._getChartData()} options={this._getChartOptions()} width={this.state.width} height={this.state.height} />
      </div>
    )
  }
}

export default OverviewGraphView