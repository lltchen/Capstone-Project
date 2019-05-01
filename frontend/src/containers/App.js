import React from 'react';
import '../App.css';
import {Route} from "react-router-dom"
import LandingPage from './LandingPage.js';
import MainCampaignPage from './MainCampaignPage.js';
import DonationsPage from './DonationsPage.js';
import CampaignShowPage from './CampaignShowPage.js';
import Signup from '../components/LandingPageComponents/Signup.js';
import Login from '../components/LandingPageComponents/Login.js';
import DashBoard from '../components/DashBoardComponents/DashBoard.js';
import {NavBar} from '../components/LandingPageComponents/NavBar.js';
import { connect } from "react-redux"

function App(state) {

  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/campaigns" component={MainCampaignPage}/>
      <Route path="/campaign" component={CampaignShowPage}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={DashBoard}/>
      <Route path="/donate" component={DonationsPage}/>
    </div>
  );
}

const mapStateToProps = (state,ownProps) => ({
  state
})
export default connect(mapStateToProps)(App);
