import React from 'react';
import { connect } from "react-redux"
import {Bar} from 'react-chartjs-2';


class LineChart extends React.Component {
  render(){

    const data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'green',
                    borderColor: 'yellow',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40]
            }
          ]
        };


  return (
    <div id="JailStatsDiv">
      <div id="jailStatsDivTitle"><u>BY THE STATS</u></div>
      <div id="lineChartDiv"><Bar ref="chart" data={data} width={50} height={100} options={{ maintainAspectRatio: false }}/></div>
    </div>
  )}
}


const mapStateToProps = ( state ) => {
  return state;
}

export default connect(mapStateToProps)(LineChart)
