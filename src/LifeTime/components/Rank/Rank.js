import React from 'react'
import './Rank.css'
import Progress from 'react-progressbar';
import {prestigeLevelMatch} from "./functions/RankFunctions";
import PrestigeImage from "../../../StatelessComponents/PrestigeImage/PrestigeImage";
import {BlackoutLevelImage} from "../../../Blackout/BlackoutFunctions/BlackoutFunctions";

export const Rank = ({prestigeLevel, level, reminder, gained, blackout = false}) => {
    console.log('this is prestige leve', prestigeLevel, level, reminder, gained);

    return (
        <div className='rank'>
            <div>Rank</div>
            <div className='prestige'>
                {
                    blackout ? <BlackoutLevelImage level={level}/> :
                        <PrestigeImage size={85} prestige={prestigeLevel}/>
                }

                <div className='prestige-progress'>
                    {
                        blackout ?
                            <div/> :
                            <div>Prestige {prestigeLevelMatch(prestigeLevel)}</div>
                    }
                    <div className='level'>Level {level >= 81? `${level} (MAX)`:level}</div>
                    <div style={{backgroundColor: 'white'}}>
                        <Progress completed={blackout && level <81 ? Math.round((gained / (reminder + gained)) * 100):100}/>
                    </div>
                    <div className='level' hidden={blackout && level >= 81}>{gained}/({reminder + gained})
                        <div className='reminder'>{reminder} xp to next level</div></div>


                </div>
            </div>
        </div>
    )
};