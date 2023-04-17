import React from 'react'
import Footer from './Footer';


function Login() {
  return (
    <>
    <div style={{ color: "white", height: "100vh"}}>
  <div className="overlay">
    <div className="login-form-container border rounded p-3 " style={{width:"45vw",height:"60vh",backgroundColor:"black", marginLeft:"300px"}}>
      <div className="login-form-overlay">
        <div className="login-form-container">
          <div className="login-form-header">
            <h2>Log in</h2>
          </div>
  
          <div className="login-form-body">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" />
            </div>
  
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" />
            </div>
  
            <button className="btn btn-primary">Log in</button>
  
            <div className="signup-link-container mt-3">
              <p>Don't have an account?</p>
              <button className="btn btn-outline-primary">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
</>

  )
}

export default Login;