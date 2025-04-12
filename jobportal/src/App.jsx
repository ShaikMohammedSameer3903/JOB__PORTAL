import { Component } from 'react';
import './App.css';
import { callAPI } from './api';

export default class App extends Component {
  constructor() {
    super();
    this.state = {}; // Optional: Add state if needed later
    this.userRegistration = this.userRegistration.bind(this);
    this.showSignin = this.showSignin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.closeSignin = this.closeSignin.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
  }

  showSignin() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("signin").style.display = "block";
    document.getElementById("signup").style.display = "none";
    document.getElementById("popupHeader").innerHTML = 'Login';
  }

  showSignup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "block";
    document.getElementById("popupHeader").innerHTML = 'Create New Account';
  }

  closeSignin(event) {
    if (event.target.id === "popup") {
      document.getElementById("popup").style.display = "none";
    }
  }

  // Handle API response for signup
  signupResponse(res) {
    console.log("Signup Response:", res);
    alert("Signup successful! Please log in.");
    document.getElementById("popup").style.display = "none";
  }

  // User registration method
  userRegistration() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const signuppassword = document.getElementById('signuppassword').value;
    const confirmpassword = document.getElementById('confirmpassword').value;

    // Basic validation
    if (signuppassword !== confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = JSON.stringify({
      fullname,
      email,
      role,
      password: signuppassword
    });

    callAPI("POST", "http://localhost:8088/users/signup", data, this.signupResponse);
  }

  // Forgot password method
  forgotPassword() {
    const userName = document.getElementById('userName'); 
    userName.style.border = ""; 

    if (!userName.value) {
      userName.style.border = "1px solid red";
      userName.focus();
      return;
    }

    const url = `http://localhost:8088/users/forgotpassword/${userName.value}`;
    callAPI("GET", url, "", this.forgotPasswordResponse);
  }

  // Handle forgotpassword response
  forgotPasswordResponse(res) {
    console.log("Forgot Password Response:", res);
    alert(res || "Password reset instructions sent!");
  }

  render() {
    return (
      <div id="container">
        <div id="popup" onClick={this.closeSignin}>
          <div id="popupWindow">
            <div id="popupHeader">Login</div>

            <div id="signin">
              <label className="usernameLabel">UserName*</label>
              <input type="text" id="userName" />
              <label className="passwordLabel">Password*</label>
              <input type="password" id="password" />
              <div className="forgotPassword">
               <label onClick={this.forgotPassword}> Forgot Password?</label>
              </div>
              <button className="signinButton">Sign In</button>
              <div className='div1' id='responseDiv'></div>
              <div className="div2">
                Don't have an account?
                <label onClick={this.showSignup}> SIGN UP NOW</label>
              </div>
            </div>

            <div id="signup">
              <label>Full Name*</label>
              <input type="text" id="fullname" />
              <label>Email*</label>
              <input type="text" id="email" />
              <label>Select Role*</label>
              <select id="role">
                <option value="">Select Role</option>
                <option value="1">Admin</option>
                <option value="2">Employer</option>
                <option value="3">Job Seeker</option>
              </select>
              <label>Password*</label>
              <input type="password" id="signuppassword" />
              <label>Confirm Password*</label>
              <input type="password" id="confirmpassword" />
              <button onClick={this.userRegistration}>Register</button>
              <div>
                Already have an account? <span onClick={this.showSignin}>SIGN IN</span>
              </div>
            </div>
          </div>
        </div>

        <div id="header">
          <img className="logo" src="/logo.png" alt="" />
          <div className="logoText"><span>Job</span> Portal</div>
          <img className="signinIcon" src="/user.png" alt="" onClick={this.showSignin} />
          <label className="signinText" onClick={this.showSignin}>Sign In</label>
        </div>
        <div id="content">
          <div className="text1">INDIA'S #1 JOB PLATFORM</div>
          <div className="text2">Your job search ends here</div>
          <div className="text3">Discover career opportunities</div>
          <div className="searchBar">
            <input type="text" className="searchText" placeholder='Search by "skill"' />
            <input type Prawserop="text" className="searchLocation" placeholder="Job Location" />
            <button className="searchButton">Search jobs</button>
          </div>
        </div>

        <div id="footer">
          <label className="copyrightText">Copyright @ 2024 All rights reserved</label>
          <img className="socialmediaIcon" src="/facebook.png" alt="" />
          <img className="socialmediaIcon" src="/twitter.png" alt="" />
          <img className="socialmediaIcon" src="/linkedin.png" alt="" />
        </div>
      </div>
    );
  }
}