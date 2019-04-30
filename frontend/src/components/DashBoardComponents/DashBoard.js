import React from 'react';
import {connect} from "react-redux"

class DashBoard extends React.Component {


  render(){
    console.log(this.props.currentUser.name);
    console.log(this.state);
  return (
    <div id="DashBoard">
      Hello  {this.props.currentUser.name}!!!!!!!!!!!!!!!!
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )};
}

const mapStateToProps = (state) => {return state}

export default connect(mapStateToProps)(DashBoard)
