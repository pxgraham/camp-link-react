import React, { Component } from 'react';
import InfoCard from '../components/InfoCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
 
class Directory extends Component {
  render() {
    return (
        <div>
            <Navbar /> 
            <Filter />
            <InfoCard />
            <Footer />    
        </div>       
    );
  }
}

export default Directory;