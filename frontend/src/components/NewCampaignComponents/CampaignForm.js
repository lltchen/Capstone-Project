import React from 'react';
import {connect} from 'react-redux';
// import {createCampaignViaApi} from "../actions/actions.js"

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
  relationship:""
}

handleChange = (e) => {
  console.log(e.target);
  this.setState({
    [e.target.name]:e.target.value
  }, () => console.log(this.state.subject))
}
handleSubmit = (e) => {
e.preventDefault()
console.log(e);
}
   render(){
     console.log(this.state.subject);
  return (

        <form onSubmit={e => this.handleSubmit(e)}>
          <input name={this.state.subject} value={this.state.subject} onChange={e => this.handleChange(e)}/>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)}/>
          <input type="text" name="goal" value={this.state.goal} onChange={e => this.handleChange(e)}/>
          <input type="text" name="duration" value={this.state.duration} onChange={e => this.handleChange(e)}/>
          <input type="text" name="reason_for_arrest" value={this.state.reason_for_arrest} onChange={e => this.handleChange(e)}/>
          <input type="text" name="time_at_rikers" value={this.state.time_at_rikers} onChange={e => this.handleChange(e)}/>
          <input type="text" name="time_untill_hearing" value={this.state.time_untill_hearing} onChange={e => this.handleChange(e)}/>
          <input type="text" name="for_whom" value={this.state.for_whom} onChange={e => this.handleChange(e)}/>
          <input type="text" name="relationship" value={this.state.relationship} onChange={e => this.handleChange(e)}/>
          <input type="submit" value="Create Campaign"/>
        </form>

  )}
}
const mapStateToProps = (state) =>{
  return state
}
export default connect(mapStateToProps)(NewCampaignPage)
