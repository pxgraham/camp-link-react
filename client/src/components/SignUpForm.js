import React from 'react';
import '../styles/login.css';

function LoginForm() {
    return (
        <div>
            <form action="/users/register" method='POST' className="container">
                <h1>Sign Up:</h1>

                <label for="first-name"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="firstName" required />

                <label for="last-name"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lastName" required />
            
                <label for="email"><b>Email/User</b></label>
                <input type="text" placeholder="Enter Email/User" name="username" required />
            
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required /><br /><br />
            
                <button type="submit" class="btn">Sign Up!</button>

                <p class="new-user">
                    <a href="/">Existing user? Click here to sign in.</a>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;