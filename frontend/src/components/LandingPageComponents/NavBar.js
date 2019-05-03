import React from 'react';
import {Link} from "react-router-dom"

export function NavBar() {

const  handleLogout = () => {
    localStorage.clear()
  }
  return (
    <div id="NavBar" style={{backgroundColor:'yellow',height:"auto"}}>
        <Link to="/"><img src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" alt="" height="40px" width="40px" style={{float:"left", paddingTop: "4px"}} /></Link>
        <div id="Login-Signup">
            <p><Link to ="/Campaigns">Campaigns</Link></p>
            <p onClick={e => handleLogout()}><Link to ="/">Logout</Link></p>
            <p><Link to ="/login">Login</Link></p>
            <p><Link to ="/signup">Signup</Link></p>
        </div>
    </div>
  );
}
