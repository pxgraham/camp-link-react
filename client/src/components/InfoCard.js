import React from "react";
/* import "../styles/directory-card.css"
 */
const cardStyle = {
    width: '350px',
    height: '100px',
    padding: '2rem',
    marginBottom: '250px'
}
const subText = {
    fontSize: '16px',
    marginTop: '-10px'
}

function InfoCard(props) {
    console.log(props);
    return (
        <div class="directory-card">
            <div class="container">
                <div class="profile-picture-holder">
                    <img class="card-picture" src={props.picture}></img>
                </div>
                <div class="profile-info-holder">
                    <div class="name-holder">
                        <a href={`/profile/${props.id}`}>
                        {`${props.firstName} ${props.lastName}`}<br />
                        </a>
                    </div>
                    <div class="cohort-holder">
                        {`Year: ${props.year}`} <br />
                    </div>
                    <div class="email-holder">
                    {`Email: ${props.email}`} <br />
                    </div>


                </div>
            </div>
        </div>

    );
}
export default InfoCard;

{/* <Col>
    <div style={cardStyle}>
        <Card header={<CardTitle reveal image={"images/people.png"} waves='light' />}
            title={`${props.firstName} ${props.lastName}`}
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <span style={subText}>July 2018</span>
            <span style={subText}> | React</span>
            <p><a href="#">View Profile</a></p>
        </Card>
    </div>
</Col>      */}  