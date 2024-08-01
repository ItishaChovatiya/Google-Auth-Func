import React, { Component } from 'react';

export class Regiter extends Component {
  constructor(props) {
    super(props);
    
    // Initialize props for the component
    this.props = props;
  }

  render() {
    return (
      <div className='container d-flex justify-content-center mt-5'>
        <div className='w-50'>
          {/* Header and introductory text for the registration page */}
          <h3 className='text-center'>Create Account</h3>
          <p className='text-center'>Get started with your account</p>

          {/* Button for Google sign-up, calls the google function from props */}
          <button className='btn btn-primary w-100' onClick={this.props.google}>Sign up with Google</button>

          {/* Button placeholder for Facebook sign-up (non-functional in this snippet) */}
          <button className='btn btn-primary w-100 mt-2'>Sign up with Facebook</button>

          {/* Separator between social sign-up options and the email/password form */}
          <p className='text-center'>or</p>

          {/* Registration form */}
          <form onSubmit={this.props.submit}>
            {/* Email input field */}
            <div className="form-group mb-3">
              <input type="email" name='email' className="form-control" placeholder="Enter email" />
            </div>

            {/* Password input field */}
            <div className="form-group mb-3">
              <input type="password" name='password' className="form-control" placeholder="Password" />
            </div>

            {/* Confirm password input field */}
            <div className="form-group mb-3">
              <input type="password" name='repassword' className="form-control" placeholder="Confirm Password" />
            </div>

            {/* Submit button for the registration form */}
            <button type="submit" className="btn btn-primary w-100">Create Account</button>
          </form>

          {/* Link to switch to login page */}
          <p className='text-center mt-4'>
            Already have an account? <a className='text-primary' href='/' onClick={this.props.pagechange}>Log in</a>
          </p>

          {/* Display any error message related to registration */}
          <p className='text-center'>{this.props.errMessage}</p>
        </div>
      </div>
    );
  }
}

export default Regiter;
