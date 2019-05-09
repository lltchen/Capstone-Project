import React from 'react';
import {connect} from "react-redux"


class CampaignList extends React.Component {


  render(){
  return (
    <div id="CampaignListDiv">
      {this.props.campaign.subject}
    </div>
  )};
}

const mapStateToProps = (state) => {return state}

export default connect(mapStateToProps)(CampaignList)
