import React from 'react';
import './Input.css'

export const Input = (props) => {
    const platformChangeHandler = (e) => props.onPlatformChange(e.target.value);

    const inputChangeHandler = (e) => props.onInputChange(e.target.value);
    return (
        <div className='input-wrapper'>
            <input className='input' onChange={inputChangeHandler}/>
            <select className='select' onChange={platformChangeHandler}>
                <option className='option' value='xbl'>XBox</option>
                <option className='option' value='psn'>Playstation 4</option>
                <option className='option' value='battle'>Battle Net</option>
            </select>
        </div>
    )
};

