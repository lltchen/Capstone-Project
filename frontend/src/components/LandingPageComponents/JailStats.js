import React from 'react';
import { connect } from "react-redux"
import { Line ,Bar ,Pie} from 'react-chartjs-2';


class JailStats extends React.Component {
  render(){
    const options = {
        title: {
              display: true,
              text: ['Crime Rates Over Time'],
              fontSize:25,
              fontFamily:"title",
              padding:30,
              },
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 10,
          }
        }
      }
    const options2 = {
        title: {
              display: true,
              text: ['Growth of the Bail Bonds Industry',"(Last 10 Years)"],
              fontSize:25,
              fontFamily:"title",
              padding:30,
              },
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
              scaleLabel:{display:true,labelString:"apples"},
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                }
            }]
        },
        legend: {
          position: 'bottom',
          labels: {
            padding:50,
            boxWidth: 10,
          }
        }
      }
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
              data: [65, 59, 80, 81, 56, 55, 40],backgroundColor: [
    '#FF6384',
    '#36A2EB'],hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB']
            },{
              label: 'Crime Rates OverTime',
              fill: true,
              data:[21,123,23,980,32,21,412]
            }
          ]
        };


  return (
    <div id="JailStatsDiv">
      <div id="jailStatsDivTitle"><h1>BY THE STATS</h1></div>
      <div id="lineChartDiv"><Line ref="chart" data={data} width={50} height={100} options={options}/></div>
      <div id="pieChartDiv"><Bar ref="chart" data={data} width={50} height={100} options={options2}/></div>
    </div>
  )}
}


const mapStateToProps = ( state ) => {
  return state;
}

export default connect(mapStateToProps)(JailStats)
