import React from 'react'
import Footer from './Footer';
import './signup.css'
function Signup() {
  return (
    <>
    <div className="signup-section">
    
    <form className="signup-form">
      <h3 style={{color:'white'}}>Sign Up</h3>
      <div className="form-group">
        <label style={{color:'white'}} htmlFor="name">Username:</label>
        <input
          type="text"
          id="name"
          name="username"
          // value={formData.username}
          // onChange={handleChange}
        />
      </div>
  
      <div className="form-group">
        <label style={{color:'white'}} htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          // value={formData.password}
          // onChange={handleChange}
        />
      </div>
  
      <div className="form-group">
        <label style={{color:'white'}} htmlFor="password-confirm">Confirm password:</label>
        <input
          type="password"
          id="password-confirm"
          name="password-confirm"
          // value={formData.passwordConfirm}
          // onChange={handleChange}
        />
      </div>
  
      <div className="form-group">
        <label style={{color:'white'}} htmlFor="category">Category:</label>
        <select id="category" name="category">
          {/* <option value="admin">Admin</option> */}
          <option value="user">Job Seeker</option>
          <option value="employer">Employer</option>
          <option value="employer">Admin</option>
        </select>
      </div>
  
      <button type="submit">Sign up</button>
      <p style={{color:'white'}}>

        Already have an account?{" "}
        <a href="#">Log in</a>
      </p>
    </form>
  </div>
  <Footer/>
  </>
  )
}

export default Signup;