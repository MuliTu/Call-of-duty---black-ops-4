import React from 'react';
import {Rank} from "../Multiplayer/components/Multiplayer/components/Rank/Rank";
import {Accuracy, boxInfoEntity, Image, Time} from "../InfoBox/functions/InfoBoxFunctions";
import './LifeTime.css'

const LifeTime = ({timePlayedTotal, prestige, level, levelXpRemainder, levelXpGained, accuracy, headshots, hits, suicides}) => {
    const boxesList = [
        {title: 'time played', icon: <i className="far fa-clock"/>, data: Time(timePlayedTotal)},
        {title: 'accuracy', icon: <i className="fas fa-bullseye"/>, data: Accuracy(accuracy)},
        {title: 'headshots', icon: Image('/images/headshot.png'), data: headshots},
        {title: 'hits', icon: Image('/images/hit.png'), data: hits},
        {title: 'suicides', icon: Image('/images/suicides.png'), data: suicides},
    ];

    return (
        <div>
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
