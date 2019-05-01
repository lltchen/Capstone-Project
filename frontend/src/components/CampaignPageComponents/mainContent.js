import React from 'react';
import {connect} from "react-redux"

class MainContent extends React.Component {


  render(){
    console.log(this.props.selectedCampaign);
  return (
    <div id="MainContent">
      <div id="CampaignImageContainer">
        <img src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" height="200px" width="200px"/>
      </div>
      <div id="CampaignDescritpionContainer">
        <h1>Story</h1>
        <p>{this.props.selectedCampaign.description}</p>
      </div>
    </div>
  )};
}

const mapStateToProps = ({selectedCampaign}) => {return {selectedCampaign}}

export default connect(mapStateToProps)(MainContent)
