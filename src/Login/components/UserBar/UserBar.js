import React from 'react';
import './UserBar.css'
import PrestigeImage from "../../../StatelessComponents/PrestigeImage/PrestigeImage";
import {PlatformImage} from "../../../StatelessComponents/platformLogo";

const UserBar = ({user}) => {
    return (
        <div className='bar'>
            <PrestigeImage size={82} prestige={user.prestige}/>
            <div className='info'>
                <div className='username'>{user.username}</div>
                <div className='blevel'>Level:{user.level}</div>
                <div><PlatformImage size={25} type={user.platform}/></div>
            </div>
        </div>
    );
};

export default UserBar;
