import React, { Component } from 'react';
import '../styles/individual_css/pheader.css';

class ProfileHeader extends Component {

    render() {
        return (
            <div className="bang">
            <div classNameName="container">

                <div className="profile-picture-holder">
                    <img src="..\styles\images\campsite1.png" alt="404" />
                </div>

                <div classNameName="profile-info-holder">
                    <div className="name-holder">
                        Thisis Yourname<br />
                    </div>

                    <div className="cohort-holder">
                        COHORT GOES HERE <br />
                    </div>

                    <div className="email-holder">
                        EMAIL GOES HERE <br />
                    </div>

                </div>
            </div>
            </div>
        );
    }
}

export default ProfileHeader;