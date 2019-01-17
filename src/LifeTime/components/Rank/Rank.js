import React from 'react'
import './Rank.css'
import Progress from 'react-progressbar';
import {prestigeLevelMatch} from "./functions/RankFunctions";
import PrestigeImage from "../../../StatelessComponents/PrestigeImage/PrestigeImage";

export const Rank = ({prestigeLevel, level ,reminder,gained}) => {


    return (
        <div className='rank'>
            <div>Rank</div>
            <div className='prestige'>
                    <PrestigeImage size={85} prestige={prestigeLevel}/>
                <div className='prestige-progress'>
                    Prestige {prestigeLevelMatch(prestigeLevel)}
                    <div className='level'>Level {level}</div>
                    <div style={{backgroundColor:'white'}}>
                        <Progress completed={Math.round((gained/(reminder + gained))*100)}/>
                    </div>
                    <div className='level'>{gained}/({reminder + gained})
                        <div className='reminder'>{reminder}xp to next level</div></div>


                </div>
            </div>
        </div>
    )
};