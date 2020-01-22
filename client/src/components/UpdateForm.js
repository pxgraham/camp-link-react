import React, { Component } from 'react';
import Logo from '../components/Logo';
import axios from 'axios';
// import '../styles/login.css';

class UpdateForm extends Component {

    state = {
        email: "",
        phone: "",
        twitter: "",
        linkedIn: "",
        github: "",
        portfolio: "",
        language: "",
        project: "",
        currentJob: "",
        companySite: "",
        lookingForWork: "",
        lookingToHire: "",
        hobby: "",
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    formPost = event => {
        event.preventDefault();
        const token = localStorage.key('token');
        token ?
            axios({
                method: 'post',
                url: '/users/update',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    "email": this.state.email,
                    "phone": this.state.phone,
                    "twitter": this.state.twitter,
                    "linkedIn": this.state.linkedIn,
                    "github": this.state.github,
                    "portfolio": this.state.portfolio,
                    "language": this.state.language,
                    "project": this.state.project,
                    "currentJob": this.state.currentJob,
                    "companySite": this.state.companySite,
                    "lookingForWork": this.state.lookingForWork,
                    "lookingToHire": this.state.lookingToHire,
                    "hobby": this.state.hobby,
                }),
                json: true
            })
                .then(function (response) {
                    //handle success
                    alert(`Profile Updated!`)
                    window.location.replace("/profile/:id")
                    console.log(response);
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                })
                :window.location.replace("/profile/:id");
    }

    render() {
        return (
            <div>
                <div className="camplink-logo">
                    <Logo />
                </div>

                <div class="wrapper">
                    <div class="message1">
                        <div class="full-form">

                            <h1>update.</h1>

                            <label htmlFor="email"><b>email</b></label>
                            <input type="email" placeholder="Email Address" onChange={this.handleInputChange} name="email" required /><br /><br />

                            <label htmlFor="phone"><b>phone</b></label>
                            <input type="text" placeholder="(xxx-xxx-xxxx)" onChange={this.handleInputChange} name="phone" required /><br /><br />

                            <label htmlFor="twitter"><b>twitter</b></label>
                            <input type="url" placeholder="Twitter URL" onChange={this.handleInputChange} name="twitter" required /><br /><br />

                            <label htmlFor="linked-in"><b>linkedin</b></label>
                            <input type="url" placeholder="LinkedIn URL" onChange={this.handleInputChange} name="linked-in"
                                required /><br /><br />

                            <label htmlFor="github"><b>github</b></label>
                            <input type="url" placeholder="Github URL" onChange={this.handleInputChange} name="github" required /><br /><br />

                            <label htmlFor="portfolio"><b>portfolio</b></label>
                            <input type="url" placeholder="Portfolio URL" onChange={this.handleInputChange} name="portfolio"
                                required /><br /><br />

                            <label htmlFor="favorite-language"><b>favorite language</b></label>
                            <input type="text" placeholder="HTML, CSS, Javascript, etc." onChange={this.handleInputChange} name="favorite-language"
                                required /><br /><br />

                            <label htmlFor="project-spotlight"><b>project spotlight</b></label>
                            <input type="url" placeholder="A project you're proud of" onChange={this.handleInputChange} name="project-spotlight"
                                required /><br /><br />

                            <label htmlFor="current-job"><b>current job</b></label>
                            <input type="text" placeholder="Job Title" onChange={this.handleInputChange} name="current-job"
                                required /><br /><br />

                            <label htmlFor="company-website"><b>company website</b></label>
                            <input type="url" placeholder="Company Website URL" onChange={this.handleInputChange} name="company-website"
                                required /><br /><br />

                            <label htmlFor="looking-radio"><b>looking for work?</b></label>

                            <select name="looking-for-work">
                                <option value="looking-yes">yes</option>
                                <option value="looking-no">no</option>
                            </select><br /><br />

                            <label htmlFor="hiring-radio"><b>looking to hire?</b></label>

                            <select name="looking-to-hire">
                                <option value="looking-hire-yes">yes</option>
                                <option value="looking-hire-no">no</option>
                            </select><br /><br /><br />


                            <button class="button" type="submit" onClick={this.formPost}>update</button>


                        </div>
                    </div>
                </div>
            </div>
            
                        // <form>
                        //     <h1>Update Profile:</h1>

                        //     <label htmlFor="email"><b>Email</b></label>
                        //     <input type="email" placeholder="Email Address" onChange={this.handleInputChange} name="email"
                        //         required /><br /><br />

                        //     <label htmlFor="phone"><b>Phone</b></label>
                        //     <input type="text" placeholder="(xxx-xxx-xxxx)" onChange={this.handleInputChange} name="phone"
                        //         required /><br /><br />

                        //     <label htmlFor="twitter"><b>Twitter</b></label>
                        //     <input type="url" placeholder="Twitter URL" onChange={this.handleInputChange} name="twitter"
                        //         required /><br /><br />

                        //     <label htmlFor="linked-in"><b>LinkedIn</b></label>
                        //     <input type="url" placeholder="LinkedIn URL" onChange={this.handleInputChange} name="linkedIn"
                        //         required /><br /><br />

                        //     <label htmlFor="github"><b>Github</b></label>
                        //     <input type="url" placeholder="Github URL" onChange={this.handleInputChange} name="github" required /><br /><br />

                        //     <label htmlFor="portfolio"><b>Portfolio</b></label>
                        //     <input type="url" placeholder="Portfolio URL" onChange={this.handleInputChange} name="portfolio"
                        //         required /><br /><br />

                        //     <label htmlFor="favorite-language"><b>Favorite Language</b></label>
                        //     <input type="text" placeholder="HTML, CSS, Javascript, etc." onChange={this.handleInputChange} name="language"
                        //         required /><br /><br />

                        //     <label htmlFor="project-spotlight"><b>Project Spotlight</b></label>
                        //     <input type="url" placeholder="A project you're proud of" onChange={this.handleInputChange} name="project"
                        //         required /><br /><br />

                        //     <label htmlFor="current-job"><b>Current Job</b></label>
                        //     <input type="text" placeholder="Job Title" onChange={this.handleInputChange} name="currentJob"
                        //         required /><br /><br />

                        //     <label htmlFor="company-website"><b>Company Website</b></label>
                        //     <input type="url" placeholder="Company Website URL" onChange={this.handleInputChange} name="companySite"
                        //         required /><br /><br />

                        //     <label htmlFor="looking-radio"><b>Looking for Work?</b></label>

                        //     <select name="lookingForWork">
                        //         <option value="looking-yes">Yes</option>
                        //         <option value="looking-no">No</option>
                        //     </select><br /><br />

                        //     <label htmlFor="hiring-radio"><b>Looking to Hire?</b></label>

                        //     <select name="lookingToHire">
                        //         <option value="looking-yes">Yes</option>
                        //         <option value="looking-no">No</option>
                        //     </select><br /><br /><br />


                        //     <button class="button" type="submit" onClick={this.formPost}>Update</button>

                        // </form>


        );
    }
}

export default UpdateForm;




