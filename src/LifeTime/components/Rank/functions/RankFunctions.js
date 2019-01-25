import Progress from "react-progressbar";
import React from "react";

export const prestigeLevelMatch = (prestigeLevel) => prestigeLevel >= 10 ? prestigeLevel : `0${prestigeLevel}`;

export const ProgressBar = ({level, gained, remainder, blackout}) =>
    (<div style={{backgroundColor: 'white'}}>
    <Progress
        completed={blackout && level < 81 ? Math.round((gained / (remainder + gained)) * 100) : 100}/>
</div>);

export const XpStatus = ({level, gained, remainder, blackout}) => (
    <div className='level'
         hidden={blackout && level >= 81}>{gained}/({remainder + gained})
        <div className='reminder'>{remainder} xp to next level</div>
    </div>
);