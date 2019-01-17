import React from 'react';
import './Input.css'

export const Input = (props) => {
    return (
        <div className='input-wrapper'>
            <input className='input' onChange={(e)=>props.onInputChange(e.target.value)}/>
            <select className='select' onChange={(e)=>props.onPlatformChange(e.target.value)}>
                <option className='option' value='xbl'>XBox</option>
                <option className='option' value='psn'>Playstation 4</option>
                <option className='option' value='battle'>Battle Net</option>
            </select>
        </div>
    )
};

