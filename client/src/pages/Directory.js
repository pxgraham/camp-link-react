import React, { Component } from "react";
import {Card, CardTitle} from 'react-materialize';
import axios from 'axios';

const cardStyle = {
    width: '350px',
    height: '100px',
    padding: '2rem',
}
const subText = {
    fontSize: '16px',
}
let token = localStorage.getItem('token');
let userData = {};

class InfoCard extends Component {
  componentDidMount(){
    axios({
      method: 'get',
      url: 'http://localhost:3001/users',
      headers: {
          'Authorization': 'Bearer ' + token
      },
      json: true
      })
      .then(function (response) {
          userData = response.data;
          //response.data contains an array of objects of user data
          console.log(userData);
      })  
      .catch(function (response) {
          console.log(`it failed with error: ${response}`);
      })
  }
  render() {

    return (
      <div>        
                  <table>
                      <tr>
                          {/* <td>
                              <div style={cardStyle}>
                                  <Card header={<CardTitle reveal image={"images/people.png"} waves='light'/>}
                                      title="Peyton Graham"
                                      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>                
                                      <span style={subText}>July 2018</span>
                                      <span style={subText}> | React</span>
                                      <p><a href="#">View Profile</a></p>
                                  </Card>                         
                              </div>
                          </td> */}
                      </tr>
                  </table>                                  
      </div>
    );
  }
}
export default InfoCard;