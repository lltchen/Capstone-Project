import React from 'react';
import {NavBar} from '../components/LandingPageComponents/NavBar.js';
import {HeroDiv} from '../components/LandingPageComponents/HeroDiv.js';

function LandingPage() {
  return (
    <div className="App" style={{backgroundColor:'green'}}>
      <NavBar/>
      <HeroDiv/>
    </div>
  );
}

export default LandingPage;
