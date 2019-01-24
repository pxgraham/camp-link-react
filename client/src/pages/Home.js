import React, { Component } from 'react';
import Navbar from "../components/Navbar"

class Home extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <h1>Camplink</h1>
      </div>
    );
  }
}

export default Home;