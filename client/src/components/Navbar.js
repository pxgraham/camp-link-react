import React from "react";
import '../styles/navbar.css';
const navStyle = {
    fontSize: '15px',
}

function signout() {
    localStorage.key('token') ? localStorage.removeItem('token') : console.log(localStorage.key('token'))
};

function Navbar() {
    return (
        <div className="topnav responsive" id="myTopnav">
            <a href="/" className="active">Home</a>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
            <a href="/directory">Directory</a>
            <a href="#profile">My Profile</a>
            <a href="#update">Update My Profile</a>
            <a href="/" onClick={signout}>Sign Out</a>
            {/*         <a href="javascript:void(0);" style={navStyle} class="icon" onclick="myFunction()">&#9776;</a>
 */}    </div>
    );
}

export default Navbar;