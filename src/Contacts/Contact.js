import React from 'react';

export default function Contact(props){
    return(
        <div className="contact">
            <div className="name"><strong>{props.firstName} {props.lastName}</strong></div>
            <div className="phone">{props.phone}</div>
            <div className="gender"><img src={props.gender} alt=""/></div>
        </div>
    )
}