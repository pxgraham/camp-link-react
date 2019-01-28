import React, { Component } from 'react';
//import Navbar from "../components/Navbar"
import Logo from '../components/Logo';
import '../styles/splash.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div class="camplink-logo">
          <Logo />
        </div>
        <div class="wrapper">
          <div class="message">
            <div class="full-form">
              <p>CampLink is a social media network aimed to keep Coding Boot Camp cohorts in touch, even after
                  the
                  boot camp has been completed. Show off your portfolio, contact your peers, and even look for
                        employment!</p>
              <a class="button" href='/login'>login</a>
              <a class="button" href='/signup'>signup</a>
              <a class="button" href='https://github.com/R-Delgado1203/camp-link-react'>github</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;