import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div style={{margin: "20px 0", marginTop:"0"}}>
    <nav className="navbar navbar-light bg-light" style={{backgroundColor: "black", height: "50px", margin: "10px 0"}}>
      <div className="container-fluid" style={{display: "flex", justifyContent: "space-between"}}>
        <Link className="navbar-brand" to="/"style={{color: "white", marginTop: "13px", fontWeight:"bold",marginLeft:"10px"}}>Rahisisha</Link>
        <div style={{marginTop:"13px", marginRight:"10px"}}>
          <Link className="navbar-brand" to="/signup" style={{marginRight: "10px", color: "white"}}>Get Started</Link>
          <Link className="navbar-brand" to="/login" style={{color: "white"}}>Login</Link>
        </div>
      </div>
    </nav>
  </div>
  
  
  )
}

export default Navbar;
