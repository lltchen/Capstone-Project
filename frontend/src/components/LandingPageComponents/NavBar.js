import React from 'react';
import {Link} from "react-router-dom"

export function NavBar() {

  const handleLogout = () => {
    localStorage.clear()
  }

  const loggedIn = () => {
    return<div> <p><Link to ="/Campaigns">Campaigns</Link></p>
    <p><Link to ="/Dashboard">Dashboard</Link></p>
    <p onClick={e => handleLogout()}><Link to ="/">Logout</Link></p></div>
  }
  const notLoggedIn = () => {
    return <div><p><Link to ="/login">Login</Link></p>
    <p><Link to ="/signup">Signup</Link></p></div>
  }
console.log(localStorage.length);
  return (
    <div id="NavBar">
        <Link to="/"><img src={require("../../images/mini-logo.jpg") }alt="" height="40px" width="40px" style={{float:"left", paddingTop: "4px"}} /></Link>
        <div id="Login-Signup">
        {localStorage.length > 0 ? loggedIn() : notLoggedIn() }
        </div>
    </div>
  );
}
