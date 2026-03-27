import React from 'react';
import {Container} from 'react-bootstrap';
import '../../style.css';

const hero = (props) => {
    return (
            <Container>
                
                <h1>{props.heading_one} {props.user}</h1>
                <p>{props.lead}</p>
                {props.children}
            </Container>
       
    )
};

export default hero;