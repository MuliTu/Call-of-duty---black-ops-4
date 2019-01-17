import React from 'react'

export const PlatformImage = ({type, size}) => {
    const style = {
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(/images/platforms/${type}.png) `,
        backgroundSize:'100% 100%'
    };
    return (
        <div style={style}>
        </div>
    )
};