import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css'

function Navbar() {
  return (
    <div className="container-fluid bg-black">
      <nav className="navbar navbar-expand-lg navbar-light  container">
        <Link className="navbar-brand" to="/" style={{ fontWeight: 'bolder',color:"white" }}>
          Rahisisha
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav ms-auto">
            <div>
            <li className="nav-item">
              <Link className="nav-link " style={{color:"white", border:"2px solid #61dafb", backgroundColor:"#61dafb", borderRadius:"10px" }} to="/signup">
                Get Started
              </Link>
            </li>
            </div>
            <div>
            <li className="nav-item">
              <Link className="nav-link" style={{color:"white", border:"2px solid #61dafb", borderRadius:"10px", backgroundColor:"#61dafb", marginLeft:"5px" }} to="/login">
                Login
              </Link>
            </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
