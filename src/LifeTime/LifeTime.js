import React from 'react';
import {Rank} from "./components/Rank/Rank";
import {Accuracy, boxInfoEntity, Image, Time} from "../InfoBox/functions/InfoBoxFunctions";
import './LifeTime.css'

const LifeTime = ({timePlayedTotal, prestige, level, levelXpRemainder, levelXpGained, accuracy, headshots, hits, suicides}) => {
    const smallBoxStyle = {
        highet: '120px',
        width: '80px',
        fontSize: '12px',
        margin: '5px',
        textAlign: 'center',
    };
    const boxesList = [
        {
            title: 'time played',
            icon: Image('time.png'),
            data: Time(timePlayedTotal),
            style: {...smallBoxStyle, width: '125px'}
        },
        {title: 'accuracy', icon: Image('accuracy.png'), data: Accuracy(accuracy), style: smallBoxStyle},
        {title: 'headshots', icon: Image('headshot.png'), data: headshots, style: smallBoxStyle},
        {title: 'hits', icon: Image('hit.png'), data: hits, style: smallBoxStyle},
        {title: 'suicides', icon: Image('suicides.png'), data: suicides, style: smallBoxStyle},
    ];

    return (
        <div className='life-time-component'>
            <Rank prestigeLevel={prestige} level={level}
                  reminder={levelXpRemainder}
                  gained={levelXpGained}/>

            <div className='life-time-statistics'>
                {boxesList.map(boxInfoEntity)}
            </div>

        </div>
    );
};

export default LifeTime;
