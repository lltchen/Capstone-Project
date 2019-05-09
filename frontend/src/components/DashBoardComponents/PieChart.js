import React from 'react';
import { connect } from "react-redux"
import {Pie} from 'react-chartjs-2';


class PieChart extends React.Component {
  render(){

    const data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Growth of Your Campaign',
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

  <Pie ref="chart" data={data} width={50} height={50} options={{ maintainAspectRatio: false }}/>

  )}
}


const mapStateToProps = ( state ) => {
  return state;
}

export default connect(mapStateToProps)(PieChart)
