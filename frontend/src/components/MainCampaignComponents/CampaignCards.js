import React from 'react';
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {postCampaignObj} from "../../actions/actions.js"

class CampaignCards extends React.Component {

  handleClick = (campaign) => {
    this.props.selectCampaign(this.props.campaign)
    this.props.history.push('/campaign')
  }

  render(){

  return (
    <div className="CampaignCards" onClick={this.handleClick}>
      <div className="CampaignCardsPic"><img src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" alt="Campaigns_Image" height="40px" width="40px"/>  </div>
      <div>
        <h2>{this.props.campaign.subject}</h2>
      </div>
      <div>
        <h3>{this.props.campaign.description}</h3>
      </div>
    </div>)}}

  const mapStateToProps = (state) => {
    return state
  }

  const mapDispatchToProps = (dispatch) => {
  return {
    selectCampaign: (campaign) => {dispatch({ type: 'SELECTED_CAMPAIGN', payload: campaign })}
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CampaignCards));
