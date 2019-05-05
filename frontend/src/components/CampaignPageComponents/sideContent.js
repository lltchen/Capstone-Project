import React from 'react';
import {connect} from "react-redux"

class SideContent extends React.Component {


  render(){

  return (
    <div >
      <div id="CampaignDescritpionContainer">
        <ul>
          <li>Campaign</li>
          <li>Updates</li>
          <li>Comments</li>
        </ul>
      </div>
    </div>
  )};
}


const mapStateToProps = (state) => {return state}


export default connect(mapStateToProps)(SideContent)
