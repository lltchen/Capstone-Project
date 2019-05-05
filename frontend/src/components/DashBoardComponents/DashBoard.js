import React from 'react';
import {connect} from "react-redux"
import {Link} from "react-router-dom"

class DashBoard extends React.Component {


  render(){
    console.log(this.state);
  return (
    <div id="DashBoard">
      Hello  {this.props.currentUser.name}!!!!!!!!!!!!!!!!
      <br/>
      <img src={this.props.currentUser.image}/>
      <div><Link to="/campaign/create"> Create New Campaign</Link></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )};
}

const mapStateToProps = (state) => {return state}

export default connect(mapStateToProps)(DashBoard)
