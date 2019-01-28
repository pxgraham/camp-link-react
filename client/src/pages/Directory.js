import React, { Component } from "react";
import { Row, Card, CardTitle } from 'react-materialize';
import axios from 'axios';
import InfoCard from '../components/InfoCard';
import Navbar from '../components/Navbar';
/* import "../styles/directory.css"
import "../styles/directorygrid.css"
 */
let token = localStorage.getItem('token');
class Directory extends Component {
    state = {

    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:3001/users',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            json: true
        })
            .then(response => {
                const userData = response.data;
                this.setState({
                    userData
                });
                //response.data contains an array of objects of user data
            })
            .catch(response => {
                window.location.replace("/login")  
                console.log(`it failed with error: ${response}`);
            })
    }

    render() {
        let users = this.state.userData;
        users ? users = users.map((item) => {
            return (
                <div>
                    <InfoCard firstName={item.firstName} lastName={item.lastName} year={item.year} email={item.email} id={item._id} />
                </div>
            )
        }) : (console.log('nope'));

        return (
            <div>
                <Navbar />
                <Row>
                        {users}
                </Row>
            </div>
        );
    }
}
export default Directory;