import React from 'react';
import {prestigeLevelMatch} from "../../LifeTime/components/Rank/functions/RankFunctions";

const PrestigeImage = (props) => {
    return (
            <img style={{width:`${props.size}px`,height:`${props.size}px`}} alt={'prestige-level'} src={`https://www.callofduty.com/cdn/app/icons/bo4/prestige/mp/ui_icon_mp_prestige_${prestigeLevelMatch(props.prestige)}.png`}/>
    );
};

export default PrestigeImage;
