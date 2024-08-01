import React, { Component } from 'react';

export class Login extends Component {
  render() {
    return (
      <div className='container d-flex justify-content-center mt-5'>
        <div className='w-50'>
          {/* Header for the login page */}
          <h3 className='text-center'>Login</h3>

          {/* Button for logging in with Facebook (non-functional in this snippet) */}
          <button className='btn btn-primary w-100 r-btng'>Login with Facebook</button>

          {/* Separator between social login options and the email/password login form */}
          <p className='text-center'>or</p>

          {/* Login form */}
          <form>
            {/* Email input field */}
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            {/* Password input field */}
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            {/* Submit button for the login form */}
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>

          {/* Link to switch to the registration page */}
          <p className='text-center mt-4'>
            Don't have an account? <a className='text-primary' href='/' onClick={this.props.pagechange}>Create one</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
