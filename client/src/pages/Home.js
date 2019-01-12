import React, { Component } from 'react';
import styles from '../styles/login.css';

class Home extends Component {
    render() {
        return(
            <div>
                <div className={styles.bgImg}>
                    <form action="/action_page.php" class="container">
                        <h1>Log In:</h1>
                        <label for="email"><b>Email/User</b></label>
                        <input type="text" placeholder="Enter Email/User" name="email" required />
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required /><br /><br />
                        <button type="submit" className="btn">Login</button>
                        <p className="new-user">
                            <a href="../signup/signup.html">New user? Click here to sign up.</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;