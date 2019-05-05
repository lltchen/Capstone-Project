import React from 'react';
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {Link} from "react-router-dom"
class MainContent extends React.Component {


  render(){

    const donationCards = () => {
         if(!!this.props.selectedCampaign.my_donations){
        return this.props.selectedCampaign.my_donations.map(donation => {
          return(<div>
                  <img src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" height="200px" width="200px"/>
                  <h4>Donated: ${!!donation.donation_amount ? donation.donation_amount:"0.00"}</h4>
                  <h4>From: {!!donation.users_name ? donation.users_name:"Anonymous"}</h4>
                  <h4>Time/Date: {donation.created_at}</h4>
                 </div>
               )

        })}
      }

    const amountRaised = () => {
        let total = 0
        if(!!this.props.selectedCampaign.my_donations){
        this.props.selectedCampaign.my_donations.map(donation => {
        return total += donation.donation_amount
              })}
              return total
      }
console.log();
  return (
    <div>
      <div id="MainContent">
        <div id="CampaignImageContainer">
          <img src={`http://localhost:3000/${this.props.selectedCampaign.image}`} />
        </div>
      </div>
      <div id="SideContent">
        <div className="Donations-styles">
          <h2 id="currentAmount">$21,135</h2>
          <p>pledged of ${this.props.selectedCampaign.goal} goal</p>
          <h2>287 </h2>
          <p>backers</p>
          <h2>{amountRaised()}</h2>
          <p>hours to go</p>
          <Link to="/donate"><button>Donate Now</button></Link>
        </div>
      </div>
    </div>
  )};
}

const mapStateToProps = ({selectedCampaign}) => {return {selectedCampaign}}

export default connect(mapStateToProps)(withRouter(MainContent))
