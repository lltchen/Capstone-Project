import React from 'react';
import {connect} from 'react-redux';
import {createDonationThroughApi} from "../actions/actions.js"


class DonationsPage extends React.Component {
  state = {
    donation_amount:"",
    comments:"",
    anonymous:"",
    tip:"",
    campaign_id:this.props.selectedCampaign.id,
    user_id:this.props.currentUser.id
  }

  handleChange = (e) => {
    console.log(e.target.checked);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.createDonationThroughApi(this.state)
  }

  render(){
console.log(this.props);
  return (
        <div id="DonationsPage">
          <div id="DonationCard" className="display_inline">
            <form onSubmit={this.handleSubmit}>
              <label>Amount: </label>
              <input type="text" value={this.state.donation_amount} name="donation_amount" placeholder="$0.00" onChange={e => this.handleChange(e)}/>
              <hr/>
              <label>Tip: </label>
              <input type="text" placeholder="$0.00" name="tip"value={this.state.tip} onChange={e => this.handleChange(e)}/>
              <hr/>

              <label>Comments: </label>
              <input type="text" name="comments" value={this.state.comment}onChange={e => this.handleChange(e)} />
              <label>Anonymous:</label>
              <input type="radio" value={this.state.anonymous} name="anonymous"onChange={e => this.handleChange(e)}/><br/>

              <input type="submit"  value="Donate" />
            </form>
          </div>
          <div id="CampaignCard" className="display_inline">
            <img src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" height="200px" width="200px"/>
            <h1>{this.props.selectedCampaign.subject}</h1>
            <p>GOAL: {this.props.selectedCampaign.goal}</p>
            <p>Raised: $1.00</p>
            <p>From: 2,000 Doners</p>
          </div>
        </div>
         )
  }
}
const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps,{createDonationThroughApi})(DonationsPage)
