import React from 'react';
import {Slideshow} from '../components/LandingPageComponents/HeroDiv.js';
import JailStats from '../components/LandingPageComponents/JailStats.js';
import {MissionStatement} from '../components/LandingPageComponents/missionStatement.js';

function LandingPage() {
  return (
    <div className="App" style={{backgroundColor:'green'}}>
      <div id="logoDiv">
        <div id="picDiv">
          <img src={require("../images/logo2.jpg")}/>
        </div>
      </div>
      <Slideshow/>
      <MissionStatement/>
      <JailStats/>
    </div>
  );
}

export default LandingPage;
