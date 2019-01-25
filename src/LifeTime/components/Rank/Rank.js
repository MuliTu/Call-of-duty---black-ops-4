import React from 'react'
import './Rank.css'
import {prestigeLevelMatch, ProgressBar, XpStatus} from "./functions/RankFunctions";
import PrestigeImage from "../../../StatelessComponents/PrestigeImage/PrestigeImage";
import {BlackoutLevelImage} from "../../../Blackout/BlackoutFunctions/BlackoutFunctions";

export const Rank = ({data, blackout = false}) => {
    const image = blackout ? <BlackoutLevelImage level={data.level}/> :
                             <PrestigeImage size={85} prestige={data.prestige}/>;
    const info = blackout ? <div/> :
                            <div>Prestige {prestigeLevelMatch(data.prestige)}</div>;
    return (
        <div className='rank'>
            <h3>Profile</h3>
            <div className='prestige'>
                {image}
                <div className='prestige-progress'>
                    {info}
                    Level {data.level}
                    <ProgressBar level={data.level} gained={data.gained} remainder={data.remainder}
                                 blackout={blackout}/>
                    <XpStatus level={data.level} gained={data.gained} remainder={data.remainder} blackout={blackout}/>
                </div>
            </div>
        </div>
    )
};