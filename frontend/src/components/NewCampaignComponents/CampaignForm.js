import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {createCampaignViaApi} from "../../actions/actions.js"

class NewCampaignPage extends React.Component {

  state = {
    subject:"",
    description:"",
    goal:"",
    duration:"",
    reason_for_arrest:"",
    time_at_rikers:"",
    time_untill_hearing:"",
    for_whom:"",
    relationship:"",
    image:null
  }

  handleChange = (e) => {

  console.log(e.target);
  if (e.target.name === "image"){

    this.setState({
      image:e.target.files[0]
    }, () => console.log(this.state.image))
  }else {
    this.setState({
      [e.target.name]:e.target.value
    }, () => console.log(this.state.subject))
  }
}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createCampaignViaApi({...this.state, user_id: this.props.currentUser.id})
    this.props.history.push('/campaign')
  }

  render(){
    console.log(this.state.user_id);
  return (
        <form  id="CampaignForm" onSubmit={e => this.handleSubmit(e)}>
          <label>Subject:</label>
          <input type="text" name="subject"value={this.state.subject} onChange={e => this.handleChange(e)}/>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)}/>
          <label>Goal:</label>
          <input type="text" name="goal" value={this.state.goal} onChange={e => this.handleChange(e)}/>
          <label>Duration:</label>
          <input type="text" name="duration" value={this.state.duration} onChange={e => this.handleChange(e)}/>
          <label>Reason For Arrest:</label>
          <input type="text" name="reason_for_arrest" value={this.state.reason_for_arrest} onChange={e => this.handleChange(e)}/>
          <label>Time At Rikers:</label>
          <input type="text" name="time_at_rikers" value={this.state.time_at_rikers} onChange={e => this.handleChange(e)}/>
          <label>Time Untill Hearing:</label>
          <input type="text" name="time_untill_hearing" value={this.state.time_untill_hearing} onChange={e => this.handleChange(e)}/>
          <label>For Whom:</label>
          <input type="text" name="for_whom" value={this.state.for_whom} onChange={e => this.handleChange(e)}/>
          <label>Relationship:</label>
          <input type="text" name="relationship" value={this.state.relationship} onChange={e => this.handleChange(e)}/>
          <label>Upload a PIc:</label>
          <input type="file" name="image"  onChange={e => this.handleChange(e)}/>
          <input type="submit" value="Create Campaign"/>
        </form>
        )}
      }

  const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps,{createCampaignViaApi})(withRouter(NewCampaignPage))
