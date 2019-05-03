import React from 'react';
import {connect} from 'react-redux';
import CampaignForm from "../components/NewCampaignComponents/CampaignForm.js"

const NewCampaignPage = (props) => {

  return (
      <div>
        <CampaignForm/>
      </div>
         )
}


const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps)(NewCampaignPage)
