import React from 'react';
import {connect} from "react-redux"

class CommentsComponnent extends React.Component {


  render(){
  return (
    <div id="CommentsComponent">
        this is Comments div
    </div>
  )};
}


const mapStateToProps = (state) => {return state}


export default connect(mapStateToProps)(CommentsComponnent)
