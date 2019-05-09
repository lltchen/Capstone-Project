import React from 'react';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import PieChart from "./PieChart.js"
import LineChart from "./LineChart.js"
import BarChart from "./BarChart.js"
import UserCard from "./UserCard.js"
import CampaignList from "./CampaignList.js"
import CountUp from 'react-countup';


class DashBoard extends React.Component {
  // <div id="DashBoardUser" className="inline-block"><Link to="/campaign/create"> Create New Campaign</Link></div>

  render(){
    const campaignCards = ()=>{
      if (!!this.props.currentUser.my_campaigns) {
      return  this.props.currentUser.my_campaigns.map(campaign =>{
          return <CampaignList campaign={campaign}/>
        })

      }
    }

  return (
    <div id="DashBoard">
      <div id="DashBoardContainer">
        <div id="DashBoardTitle">
        <h1><u>My DashBoard</u></h1>
        </div>
        <div id="DashBoardUser" className="inline-block">
          <UserCard/>
        </div>
        <div id="DashBoardInfo" >
          <div id="statsDiv">
            <div className="stats">
              <p><CountUp start={0} end={!!this.props.currentUser.my_campaigns ? this.props.currentUser.my_campaigns.length:0} duration={10} /></p>
              <p># of Active Campaigns</p>
            </div>
            <div className="stats">
            <p><CountUp start={0} end={!!this.props.currentUser.num_of_donations ? this.props.currentUser.num_of_donations:0} duration={10}/></p>
              <p>Total Amount Donated</p>
            </div>
            <div className="stats">
              <p><CountUp start={0} end={!!this.props.currentUser.my_donations ? this.props.currentUser.my_donations.length:0} duration={10}/></p>
              <p>Lives Saved/Helped</p>
            </div>
          </div>
          <div id="chartDiv">
            <div className="ChartDiv">
              <LineChart/>
            </div>
            <div className="ChartDiv">
              <BarChart/>
            </div>
          </div>
          <div id="campaignCardsdiv"></div>
        </div>
       </div>
      </div>
  )};
}

const mapStateToProps = (state) => {return state}

export default connect(mapStateToProps)(DashBoard)
