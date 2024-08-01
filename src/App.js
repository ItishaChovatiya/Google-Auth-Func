import React, { Component } from 'react';
import Login from './Components/Login';
import Regiter from './Components/Regiter';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './Firebase';

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pagechange: false, // Controls the page view (register/login)
      errMessage: "" // Stores error messages
    };
  }

  // Toggles between register and login page
  pageChangeHandler = (e) => {
    e.preventDefault();
    
    this.setState({
      pagechange: !this.state.pagechange
    });
  } 

  // Handles form submission for registration
  registerSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;

    if (password !== repassword) {
      this.setState({
        errMessage: "Password does not match."
      });
    } else {
      this.setState({
        errMessage: "Account created successfully.",
        pagechange: true
      });

      try {
        // Attempt to create a new user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
  }

  // Handles Google sign-in
  GoogleHandler = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  }

  render() {
    return (
      <div>
        {/* Conditional rendering based on pagechange state */}
        {
          this.state.pagechange === false ? 
          <Regiter 
            pagechange={this.pageChangeHandler} 
            submit={this.registerSubmitHandler}
            errMessage={this.state.errMessage} 
            google={this.GoogleHandler}
          /> :
          <Login 
            pagechange={this.pageChangeHandler}
          />
        }
      </div>
    );
  }
}

export default App;
