import React from 'react';

function Contact(props) {
    return (
        <div class="data-holder1">
            <div class="contact-holder-header">
                contact.
        </div>
            <div class="attribute">
                <p>Email: {`${props.email}`} </p>
                <p>Phone: {`${props.phone}`} </p>
                <p>Twitter: {`${props.twitter}`} </p>
                <p>LinkedIn: {`${props.linkedIn}`} </p>
            </div>
        </div>
    )
}

export default Contact;