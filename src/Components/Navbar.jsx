import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className="container-fluid bg-black">
      <nav className="navbar navbar-expand-lg navbar-light  container">
        <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold',color:"white" }}>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" style={{color:"white" }} to="/signup">
                Get Started
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color:"white" }} to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
