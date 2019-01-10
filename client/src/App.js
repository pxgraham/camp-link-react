import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import InfoCard from './components/InfoCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Filter from './components/Filter';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar /> 
        <Filter />
        <InfoCard />
        <div><Login /></div>
        <Footer />    
      </div>    
    );
  }
}

export default App;