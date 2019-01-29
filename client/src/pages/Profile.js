import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import ProfileHeader from '../components/ProfileHeader';
import axios from 'axios';


let token = localStorage.getItem('token');
class Profile extends Component {

    render() {

        return (
            <div>
            <Navbar/>
                <div class="profile-wrapper">
                    profile component goes here
                </div>
                <div class='some-page-wrapper'>
                    <div class='row'>
                        <div class='column'>
                            {/*<!-- REPLACE THIS WITH CONTACT DIV--> */}
{/*                             {user}
 */}                            {/*<!---->*/}
                        </div>

                        <div class='column'>
                            {/*<!-- REPLACE THIS WITH CODING DIV-->*/}
                            <div class="data-holder2">
                                <div class="coding-holder-header">
                                    coding.
                                </div>
                                <div class="attribute">
                                    <p>Github: (INSERT HERE) </p>
                                    <p>Portfolio: (INSERT HERE) </p>
                                    <p>Favorite Language: (INSERT HERE) </p>
                                    <p>Project Spotlight: (INSERT HERE) </p>
                                </div>
                            </div>
                            {/*<!---->*/}
                        </div>

                        <div class='column'>
                            {/*<!-- REPLACE THIS WITH EMPLOYMENT DIV-->*/}
                            <div class="data-holder3">
                                <div class="employment-holder-header">
                                    employment.
                                </div>
                                <div class="attribute">
                                    <p>Current Job: (INSERT HERE) </p>
                                    <p>Company Website: (INSERT HERE) </p>
                                    <p>Looking to Hire?: (INSERT HERE) </p>
                                    <p>Looking for Work?: (INSERT HERE) </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;

