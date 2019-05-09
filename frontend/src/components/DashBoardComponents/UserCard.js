import React from 'react';
import {connect} from "react-redux"


class UserCard extends React.Component {


  render(){
  return (
    <div id="UserCard">
      <div id="UserCardPic">
        <img height="100%" width="100%" src={`http://localhost:3000/${this.props.currentUser.user_image}`}/>
      </div>
      <div id="UserCardInfo">
        <div>Name : {this.props.currentUser.name}</div>
        <div>Address : {this.props.currentUser.address}</div>
        <div>Role : {this.props.currentUser.role}</div>
      </div>
    </div>
  )};
}

const mapStateToProps = (state) => {return state}

export default connect(mapStateToProps)(UserCard)
