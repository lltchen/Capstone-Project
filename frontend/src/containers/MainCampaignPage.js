import React from 'react';
import {connect} from 'react-redux';
import {getCampaignFromApi} from "../actions/actions.js"
import CampaignCards from "../components/MainCampaignComponents/CampaignCards.js"

class MainCampaignPage extends React.Component {
  state={

  }

  componentDidMount(){
    this.props.getCampaignFromApi()

  }
  render(){
    console.log(this.props);
  return (
    <div>
<CampaignCards />
    </div>
      );

    }
}

export default connect(null,{getCampaignFromApi})(MainCampaignPage)
