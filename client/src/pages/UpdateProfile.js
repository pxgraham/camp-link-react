import React, { Component } from 'react';
import UpdateForm from '../components/UpdateForm';
import Navbar from '../components/Navbar';

class UpdateProfile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UpdateForm />
      </div>
    );
  }
}

export default UpdateProfile;