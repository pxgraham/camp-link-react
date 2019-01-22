import React, { Component } from 'react';
import axios from 'axios';
import '../styles/login.css';

class LoginForm extends Component {

    state = {
        username: "",
        hash: "",
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
                url: 'http://localhost:3001/users/register',
                data: JSON.stringify({
                    "username": this.state.username, 
                    "hash": this.state.hash, 
                    "firstName": this.state.firstName, 
                    "lastName": this.state.lastName
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                json: true            
            })
            .then(function (response) {
                //handle success
                alert(`Congrats you have signed up!`)
                console.log(response);
            })
            .catch(function (response) {
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
                
                    <label for="email"><b>Email/User</b></label>
                    <input type="text" placeholder="Enter Email/User" onChange={this.handleInputChange} name="username" required />
                
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" onChange={this.handleInputChange} name="hash" required /><br /><br />
                
                    <button type="submit" onClick={this.formPost} class="btn">Sign Up!</button>
    
                    <p class="new-user">
                        <a href="/">Existing user? Click here to sign in.</a>
                    </p>
                </form>
            </div>
        );
    }
}

export default LoginForm;