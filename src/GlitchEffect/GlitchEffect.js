import React from 'react';
import './GlitchEffect.css'

const GlitchEffect = (props) => {
    return (
        <div className='glitch' data-text={props.children}>
            {props.children}
        </div>
    );
};

export default GlitchEffect;
