import React from 'react';
import {connect} from "react-redux"
import {Link} from "react-router-dom"

class SideContent extends React.Component {


  render(){
  return (
    <div id="SideContent">
      <div className="Donations-styles">
        <h1>{this.props.selectedCampaign.subject}</h1>
        <p>GOAL: {this.props.selectedCampaign.goal}</p>
        <p>Raised: $1.00</p>
        <p>From: 2,000 Doners</p>
        <button><Link to="/donate">Donate Now</Link></button>
      </div>
      <div className="Donations-styles">
        <div>
        <img src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" height="200px" width="200px"/>
        </div>
      </div>

    </div>
  )};
}

const mapStateToProps = (state) => {return state}

export default connect(mapStateToProps)(SideContent)
