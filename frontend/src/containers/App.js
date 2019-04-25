import React from 'react';
import '../App.css';
import LandingPage from './LandingPage.js';
import { connect } from "react-redux"

function App(state) {
  console.log(state);
  
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

const mapStateToProps = (state,ownProps) => ({
  state
})
export default connect(mapStateToProps)(App);
