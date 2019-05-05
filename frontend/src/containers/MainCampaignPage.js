import React from 'react';
import {connect} from 'react-redux';
import {getAllCampaignsFromApi} from "../actions/actions.js"
import CampaignCards from "../components/MainCampaignComponents/CampaignCards.js"

class MainCampaignPage extends React.Component {


  componentDidMount(){
    this.props.getAllCampaignsFromApi()
  }

  render(){

  const campaignCardArry = () => {
      if (this.props.campaigns !== []) {
        return this.props.campaigns.map(campaign => {
          return <CampaignCards key={campaign.id} campaign={campaign}/>
        })
      }
     }

   return (
      <div>
        {campaignCardArry()}
      </div>
         )
      }
    }

  const mapStateToProps = (state) =>{
    return state
  }

export default connect(mapStateToProps,{getAllCampaignsFromApi})(MainCampaignPage)
