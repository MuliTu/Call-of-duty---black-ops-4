import React from "react";
import InfoBox from "../InfoBox";
import ReactSpeedometer from "react-d3-speedometer";

export const Time = (data) => {
    const minuts = Math.floor(data / 60);
    const hours = Math.floor(minuts / 60);
    const days = Math.floor(hours / 24);
    return (data !== undefined ? `${days}D ${hours - (days * 24)}H ${minuts - (hours * 60)}M` : '')
};

export const Accuracy = (data) => {
    return (`${data > 0 && data !== null ? (data * 100).toString().slice(0, 5) : 0}%`)
};

export const Image = (path,size=110) => {
    const style = {
        backgroundImage: `url(/images/${path})`,
        backgroundSize: 'contain',
        height: `${size}px`,
        backgroundPosition: 'center',
        fill: 'orange',
        backgroundRepeat: 'no-repeat'
    };
    return (<div style={style}/>)
};

export const boxInfoEntity = (box, index) => (
    <InfoBox key={index} title={box.title} icon={box.icon} style={box.style}>{box.data}</InfoBox>
);

export const Ratio = (divider, divided) => (<ReactSpeedometer
            maxValue={1.000}
            minValue={0.000}
            value={ (divided === 0 || divider === 0 ||divided === undefined || divider === undefined ? 0 :divider/divided)}
            valueFormat=".3"
            startColor='#604000'
            endColor='orange'
            textColor='orange'
            height={100}
            width={150}
            segments={4}
        />
);