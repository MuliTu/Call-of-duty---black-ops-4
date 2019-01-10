import React from 'react'
import './Multiplayer.css'
import InfoBox from "../../../InfoBox/InfoBox";
import {Accuracy, Time, Image} from "../../../InfoBox/functions/InfoBoxFunctions";

export const Multiplayer = ({data}) => {
    console.log('this is props',data);
    const boxesList = [
        {title: 'kills', icon: Image('/images/dead.png'), data: data.deaths},
        {title: 'assists', icon: Image('/images/assist.png'), data: data.assists},
        {title: 'wins', icon: Image('/images/win.png'), data: data.wins},
        {title: 'kill streak', icon: Image('/images/streak.png'), data: data.killStreak},
        {title: 'deaths', icon: Image('/images/death.png'), data: data.deaths},
        {title: 'losses', icon: Image('/images/lose.png'), data: data.losses},
        {title: 'time', icon: Image('/images/time.png'), data: Time(data.timePlayedTotal)},

    ];
    /*
defends: 0
kdratio: 635
objectiveScore: 0
offends: 0
score: 577335
ties: 0
totalDamage: 751545
winStreak: 16777215
wlratio: 639
     */

    const boxInfoEntity = (box, index) => (
        <InfoBox key={index} title={box.title} icon={box.icon}>{box.data}</InfoBox>
    );

    return (
        <div className='multiplayer'>
            {

                    <div className='boxes-list-wrapper'>
                        {
                            boxesList.map(boxInfoEntity)
                        }
                    </div>
            }

        </div>
    )
};

