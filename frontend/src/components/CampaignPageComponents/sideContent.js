import React from 'react';
import {connect} from "react-redux"
import CampaignComponent from "./sideContentComponents/campaignComponent.js"
import CommentsComponent from "./sideContentComponents/commentsComponent.js"
import UpdatesComponent from "./sideContentComponents/updatesComponent.js"

class SideContent extends React.Component {
  state = {
    clicked:false,
    selectedCampaignTab:"Campaign"

  }

  handleClick = (e) => {
    this.setState({
      selectedCampaignTab:e.target.id,
      clicked:!this.state.clicked,

    })
  }

  render(){

    const content = () => {
      if (this.state.selectedCampaignTab === "Campaign"){
        return <CampaignComponent />
      }if (this.state.selectedCampaignTab === "Updates") {
        return <UpdatesComponent />
      }else {
        return <CommentsComponent />
      }
    }


  return (
    <div >
      <div id="CampaignDescritpionContainer">
        <ul>
          <li id="Campaign" style={!!this.state.clicked ? {borderBottom: "3px solid gray"}: null } onClick={e => this.handleClick(e)}>Campaign</li>
          <li id="Updates" onClick={e => this.handleClick(e)}>Updates</li>
          <li id="Comments" onClick={e => this.handleClick(e)}>Comments</li>
        </ul>
      </div>
      <div>
      {content()}
      </div>
    </div>
  )};
}


const mapStateToProps = (state) => {return state}


export default connect(mapStateToProps,)(SideContent)
