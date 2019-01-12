import React from 'react';
import '../styles/login.css';

function LoginForm() {
    return (
        <form action="/action_page.php" className="login-form">
            <h1>Log In:</h1>
            <label htmlFor="email"><b>Email/User</b></label>
            <input type="text" placeholder="Enter Email/User" name="email" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required /><br /><br />
            <button type="submit" className="btn">Login</button>
            <p className="new-user">
                <a href="../signup/signup.html">New user? Click here to sign up.</a>
            </p>
        </form>
    );
}

export default LoginForm;