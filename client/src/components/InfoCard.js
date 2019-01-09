import React from "react";
import {Row, Col, Card, CardTitle} from 'react-materialize';

const cardStyle = {
    width: '350px',
    height: '100px',
    padding: '2rem',
}
const subText = {
    fontSize: '16px',
    marginTop: '-10px'
}
function InfoCard() {
  return (
    <div>                 
        <Row>
            <Col>
                <div style={cardStyle}>
                    <Card header={<CardTitle reveal image={"images/people.png"} waves='light'/>}
                        title="Peyton Graham"
                        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>                
                        <span style={subText}>July 2018</span>
                        <span style={subText}> | React</span>
                        <p><a href="#">View Profile</a></p>
                    </Card> 
                </div> 
            </Col>
        </Row>        
    </div>
  );
}
export default InfoCard;