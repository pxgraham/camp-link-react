import React, { Component } from 'react';
import SignUpForm from "../components/SignUpForm"
import Navbar from '../components/Navbar';

class SignUp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;