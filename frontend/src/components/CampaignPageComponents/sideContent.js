import React from 'react';
import {connect} from "react-redux"
import {Link} from "react-router-dom"

class SideContent extends React.Component {


  render(){
    const donationCards = () => {
      return this.props.selectedCampaign.my_donations.map(donation => {
        return(<div>
                <img src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" height="200px" width="200px"/>
                <h4>Donated: ${!!donation.donation_amount ? donation.donation_amount:"0.00"}</h4>
                <h4>From: {!!donation.users_name ? donation.users_name:"Anonymous"}</h4>
                <h4>Time/Date: {donation.created_at}</h4>
               </div>
             )

      })
    }
    const amountRaised = () => {
      const total = 0
    return this.props.selectedCampaign.my_donations.map(donation => {
      return total + donation.donation_amount
            })

    }
  return (
    <div id="SideContent">
      <div className="Donations-styles">
        <h1>{this.props.selectedCampaign.subject}</h1>
        <p>GOAL: {this.props.selectedCampaign.goal}</p>
        debugger
        <p>Raised: $1.00</p>
        <p>From: 2,000 Doners</p>
        <button><Link to="/donate">Donate Now</Link></button>
      </div>
      <div className="Donations-styles">
        {donationCards()}
      </div>

    </div>
  )};
}

const mapStateToProps = (state) => {return state}

export default connect(mapStateToProps)(SideContent)
