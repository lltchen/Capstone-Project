import React from 'react';
import {Link} from "react-router-dom"
export function HeroDiv() {
  return (
    <div id="HeroDiv">
        <div id="hero-text">
            <img src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" alt="" height="100px" width="100px"  />
            <h1>We are Ofunders</h1>
            <p>Currently 97,389 New Yorkers </p>
            <button><h1><Link to="/campaigns">Help Now!!!!!</Link></h1></button>
        </div>
    </div>
  );
}
