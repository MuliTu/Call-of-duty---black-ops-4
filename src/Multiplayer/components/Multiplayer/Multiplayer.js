import React from 'react'
import './Multiplayer.css'
import {Time, Image, Ratio, boxInfoEntity} from "../../../InfoBox/functions/InfoBoxFunctions";



export const Multiplayer = ({data}) => {
    const boxesList = data !== undefined ? [
            {title: 'kills', icon: Image('/dead.png'), data: data.deaths},
            {title: 'assists', icon: Image('/assist.png'), data: data.assists},
            {title: 'wins', icon: Image('/win.png'), data: data.wins},
            {title: 'kill streak', icon: Image('/streak.png'), data: data.killStreak},
            {title: 'deaths', icon: Image('/death.png'), data: data.deaths},
            {title: 'losses', icon: Image('/lose.png'), data: data.losses},
            {title: 'time', icon: Image('/time.png'), data: Time(data.timePlayedTotal),style:{width:'125px'}},
            {title: 'K/D ratio', data: Ratio(data.kills,data.deaths),style:{width: '150px'}},
            {title: 'W/L ratio', data: Ratio(data.wins,data.losses),style:{width: '150px'}},
        ] :
        [];
    return (
        <div className='multiplayer'>
            {
                data !== undefined ?
                    <div className='boxes-list-wrapper'>
                        {
                            boxesList.map(boxInfoEntity)
                        }
                    </div>
                    :
                    <div>Please select mode</div>
            }
        </div>
    )
};

