import React from "react";
import InfoBox from "../InfoBox";

export const Time = (data) => {

    const minuts = Math.floor(data / 60);
    const hours = Math.floor(minuts / 60);
    const days = Math.floor(hours / 24);
    return (data !== undefined?`${days}D ${hours - (days * 24)}H ${minuts - (hours * 60)}M`:'')
};

export const Accuracy = (data) => {
    return (`${data > 0 && data !== null ? (data * 100).toString().slice(0, 5) : 0}%`)
};

export const Image = (path) => {
    const style = {
        backgroundImage: `url(${path})`,
        backgroundSize: 'contain',
        height: '110px',
        backgroundPosition: 'center',
        fill: 'orange',
        backgroundRepeat: 'no-repeat'
    };
    return (<div style={style}/>)
};

export const boxInfoEntity = (box, index) => (
    <InfoBox key={index} title={box.title} icon={box.icon}>{box.data}</InfoBox>
);