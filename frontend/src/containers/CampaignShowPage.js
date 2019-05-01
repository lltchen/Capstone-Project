import React from 'react';
import {connect} from 'react-redux';
import MainContent from '../components/CampaignPageComponents/mainContent.js';
import SideContent from '../components/CampaignPageComponents/sideContent.js';

class CampaignShowPage extends React.Component {

  render(){
   return (
            <div className="greenBackground">
              <MainContent/>
              <SideContent/>
            </div>
         );
    }
}

export default connect()(CampaignShowPage)
