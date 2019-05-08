import React from 'react';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import PieChart from "./PieChart.js"
import LineChart from "./LineChart.js"
import BarChart from "./BarChart.js"

class DashBoard extends React.Component {


  render(){
    console.log(this.state);
  return (
    <div id="DashBoard">
      Hello  {this.props.currentUser.name}!!!!!!!!!!!!!!!!
      <br/>
      <img src={`http://localhost:3000/${this.props.currentUser.user_image}`}/>
      <div><Link to="/campaign/create"> Create New Campaign</Link></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )};
}

const mapStateToProps = (state) => {return state}

export default connect(mapStateToProps)(DashBoard)
