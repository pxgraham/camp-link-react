import React, { Component } from 'react';
import axios from 'axios';
//import '../styles/signup.css';

class SignUpForm extends Component {

    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
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
        axios({
                method: 'post',
                url: '/users/register',
                data: JSON.stringify({
                    "email": this.state.email, 
                    "password": this.state.password, 
                    "firstName": this.state.firstName, 
                    "lastName": this.state.lastName
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                //json: true            
            })
            .then(response => {
                //handle success
                alert(`Congrats you have signed up!`)
                window.location.replace("/login")
                console.log(response);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    }

    render() {
        return (
            <div>               
                <form className="container">
                    <h1>Sign Up:</h1>
    
                    <label for="first-name"><b>First Name</b></label>
                    <input type="text" placeholder="Enter First Name" onChange={this.handleInputChange} name="firstName" required />
    
                    <label for="last-name"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter Last Name" onChange={this.handleInputChange} name="lastName" required />
                
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" onChange={this.handleInputChange} name="email" required />
                
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" onChange={this.handleInputChange} name="password" required /><br /><br />
                
                    <button type="submit" onClick={this.formPost} class="btn">Sign Up!</button>
    
                    <p class="new-user">
                        <a href="/">Existing user? Click here to sign in.</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default SignUpForm;