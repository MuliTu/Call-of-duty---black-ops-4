import React from 'react'
import './Rank.css'
import Progress from 'react-progressbar';

export const Rank = ({prestigeLevel, level ,reminder,gained}) => {
    const prestigeLevelMatch = prestigeLevel >= 10 ? prestigeLevel : `0${prestigeLevel}`;

    return (
        <div className='rank'>
            <div>Rank</div>
            <div className='prestige'>
                <img alt={'prestige-level'} src={`https://www.callofduty.com/cdn/app/icons/bo4/prestige/mp/ui_icon_mp_prestige_${prestigeLevelMatch}.png`}/>
                <div className='prestige-progress'>
                    Prestige {prestigeLevelMatch}
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