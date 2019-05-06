import React from 'react';
import {connect} from "react-redux"

class UpdatesComponnent extends React.Component {


  render(){
  return (
    <div id="UpdatesComponent">
        this is update div
    </div>
  )};
}


const mapStateToProps = (state) => {return state}


export default connect(mapStateToProps)(UpdatesComponnent)
