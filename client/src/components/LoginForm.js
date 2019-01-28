import React, { Component } from 'react';
import axios from 'axios';
// import '../styles/login.css';
/* import '../styles/login.css'
 */
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
            <div class="wrapper">
                <div class="message">
                    <div class="full-form">
                        <form action="/users/authenticate" method='POST' target='/users/' className="login-form">
                            <h1>login.</h1>
                            <label htmlFor="email"><b>email</b></label>
                            <input type="text" placeholder="enter email" onChange={this.handleInputChange} name="email" required /><br />
                            <label htmlFor="psw"><b>password</b></label>
                            <input type="password" placeholder="enter password" onChange={this.handleInputChange} name="password" required /><br /><br />
                            <button type="submit" className="button" onClick={this.formPost}>login</button><br /><br /><br /><br />
                            <p className="new-user">
                                <a href="/signup">new user? click here to sign up.</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;