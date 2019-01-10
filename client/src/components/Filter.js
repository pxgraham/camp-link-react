import React from "react";
import {Autocomplete, Row, Input} from 'react-materialize';

const filterStyle = {
    position: 'absolute',
    right: '0px',
    marginTop: '10px',
}
function Filter() {
  return (
    <div>             
        <Row>             
            <Autocomplete
                title='Search People'
                data={
                    {
                        'Peyton Graham': 'images/people.png',
                        'Microsoft': null,
                        'Google': 'http://placehold.it/250x250'
                    }
                }
            />  
            <div style={filterStyle}>   
                <div>&nbsp;&nbsp;Filter By</div>
                <Input name='group1' type='checkbox' value='red' label='First Name' />
                <Input name='group1' type='checkbox' value='yellow' label='Last Name' />
                <Input name='group1' type='checkbox' value='green' label='Year'  />
                <Input name='group1' type='checkbox' value='brown' label='Top Language' />
            </div>
        </Row>   
        <hr />          
    </div>
  );
}
export default Filter;