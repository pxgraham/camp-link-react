import React, { Component } from 'react';
import axios from 'axios';
// import '../styles/login.css';
import '../styles/login.css'

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
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
            url: 'http://localhost:3001/users/authenticate',
            data: JSON.stringify({
                "email": this.state.email, 
                "password": this.state.password, 
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
            //config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                                
                localStorage.setItem('token', response.data.token);
                window.location.replace("/directory")                            
            })
            .catch(function (response) {
                //handle error
                alert(`Login Failed, Please Try Again.`);
                console.log(response);
            });
    }
    render() {
        return (
            <form className="login-form">
                <h1>Log In:</h1>
                <label htmlFor="email"><b>Email/User</b></label>
                <input type="text" placeholder="Enter Email" onChange={this.handleInputChange} name="email" required />
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" onChange={this.handleInputChange} name="password" required /><br /><br />
                <button type="submit" className="btn" onClick={this.formPost}>Login</button>
                <p className="new-user">
                    <a href="/signup">New user? Click here to sign up.</a>
                </p>
            </form>
        );
    }
}

export default LoginForm;