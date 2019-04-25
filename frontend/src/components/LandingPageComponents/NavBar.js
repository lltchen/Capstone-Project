import React from 'react';

export function NavBar() {
  return (
    <div id="NavBar" style={{backgroundColor:'yellow',height:"auto"}}>
        <img src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" alt="" height="40px" width="40px" style={{float:"left", paddingTop: "4px"}} />
        <div id="Login-Signup">
            <p>Login</p>
            <p>Signup</p>
        </div>
    </div>
  );
}
