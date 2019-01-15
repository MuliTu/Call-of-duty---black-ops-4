import React from 'react';
import './GlitchEffect.css'

const GlitchEffect = (props) => {
    return (
        <div style={{fontSize:props.size}} className='glitch' data-text={props.children}>
            {props.children}
        </div>
    );
};

export default GlitchEffect;
