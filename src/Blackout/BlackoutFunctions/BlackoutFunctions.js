import React from "react";

export const BlackoutLevelImage = ({level}) => {
    const style = {
        backgroundImage:`url(https://www.callofduty.com/cdn/app/icons/bo4/ranks/wz/ui_icon_rank_wz_level${level}_large.png)`,
        width: `100px`,
        height: `100px`,
        backgroundSize:'100% 100%'
    };
    return (<div style={style}/>)
};