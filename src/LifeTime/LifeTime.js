import React from 'react';
import {Rank} from "./components/Rank/Rank";
import {Accuracy, boxInfoEntity, Image, Time} from "../InfoBox/functions/InfoBoxFunctions";
import './LifeTime.css'

const LifeTime = ({profile, data, blackout = false}) => {
    const smallBoxStyle = {
        width: '80px',
        fontSize: '12px',
        margin: '5px',
        textAlign: 'center',
    };
    const boxesList = !blackout ? [
        {
            title: 'time played',
            icon: Image('time.png'),
            data: Time(data.timePlayedTotal),
            style: {...smallBoxStyle, width: '125px'}
        },
        {title: 'accuracy', icon: Image('accuracy.png'), data: Accuracy(data.accuracy), style: smallBoxStyle},
        {title: 'headshots', icon: Image('headshot.png'), data: data.headshots, style: smallBoxStyle},
        {title: 'hits', icon: Image('hit.png'), data: data.hits, style: smallBoxStyle},
        {title: 'suicides', icon: Image('suicides.png'), data: data.suicides, style: smallBoxStyle},
    ] :
        [{
        title: 'time played',
        icon: Image('time.png'),
        data: Time(data.timePlayedTotal),
        style: {...smallBoxStyle, width: '125px'}
    },
        {title: 'accuracy', icon: Image('accuracy.png'), data: Accuracy(data.accuracy), style: smallBoxStyle},

    ];
    const rankInfo = {
        prestige: profile.prestige,
        level: profile.level,
        remainder: profile.levelXpRemainder,
        gained: profile.levelXpGained
    };
    return (
        <div className='life-time-component'>
            {

            }
            <Rank data={rankInfo} blackout={blackout}/>
            <div className='life-time-statistics'>
                {
                    boxesList.map(boxInfoEntity)
                }
            </div>
        </div>
    );
};

export default LifeTime;

