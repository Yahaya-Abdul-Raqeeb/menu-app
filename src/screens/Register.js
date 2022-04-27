
import React from 'react'
import {Link} from "react-router-dom" 
  
function Register() {
  return (
    <form className="form">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>

        <div className="form-group m-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
        <div className="row">
          I Already have an Account
          <Link to="/" className="nav-link">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Register;