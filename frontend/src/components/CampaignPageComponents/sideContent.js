import React from 'react';
import {connect} from "react-redux"

class SideContent extends React.Component {


  render(){
  return (
    <div id="SideContent">
      <div className="Donations-styles">
        <h1>This Campaign is almost compeleted</h1>
        <p>GOAL: $1,000,000.00</p>
        <p>Raised: $1.00</p>
        <p>From: 2,000 Doners</p>
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
