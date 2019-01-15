import React from 'react';
import './InfoBox.css'

const InfoBox = (props) => {
    return (
        <div className='box-info' key={props.index} style={props.style}>
            <div className='title'>{props.title.toString().toUpperCase()}</div>
            <div className='icon'>{props.icon}</div>
            <div className='data'>
                {props.children}
            </div>
        </div>
    );
};

export default InfoBox;
