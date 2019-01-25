import React from 'react';
import {UserDataBlackout} from "../service/Http";
import LifeTime from "../LifeTime/LifeTime";
import {Accuracy, Image, Time} from "../InfoBox/functions/InfoBoxFunctions";
import './StatefulBlackou.css'

class StatefulBlackout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                username: props.match.params.id,
                platform: props.match.params.platform,
                level: 0,
                levelXpRemainder: 0,
                levelXpGained: 0,
                timePlayedTotal: 0,
            },
            lifeTime: {
                accuracy: 0,
                hits: 0,
                headshots: 0,
                kills: 0,
                assists: 0,
                longestDistanceKill: 0,
                killStreak: 0,
            },
            travel: {
                byFoot: 0,
                byAirVehicle: 0,
                byLandVehicle: 0,
                byWaterVehicle: 0,
                byWingsuit: 0,
                longestDistanceKill: 0,
            }
        }

    }

    InchToKm = (number) => {
        if (number > 0) {
            const temp = (number * 0.0254) / 1000;
            const kilometer = temp.toString().split('.')[0];
            const meter = temp.toString().split('.')[1];
            console.log(meter, meter);
            return `${kilometer}Km ${meter.slice(0, 3) > 100 ? meter.slice(0, 3) : meter.slice(1, 3)}M`
        }
    };


    async componentDidMount() {
        const {data} = await UserDataBlackout(this.state.profile.username, this.state.profile.platform);
        const profile = await data.mp;
        const lifeTimeData = await data.mp.lifetime.all;
        console.log(data);
        this.setState({
            profile: {
                level: profile.level,
                levelXpGained: profile.levelXpGained,
                levelXpRemainder: profile.levelXpRemainder,
            },
            lifeTime: {
                timePlayedTotal: lifeTimeData.timePlayedTotal,
                accuracy: lifeTimeData.accuracy,
                hits: lifeTimeData.hits,
                headshots: lifeTimeData.headshots,
                assists: lifeTimeData.assists,
                killStreak: lifeTimeData.killStreak
            },
            travel: {
                byFoot: lifeTimeData['distanceTraveledFoot'],
                byAirVehicle: lifeTimeData['distanceTraveledVehicleAir'],
                byLandVehicle: lifeTimeData['distanceTraveledVehicleLand'],
                byWaterVehicle: lifeTimeData['distanceTraveledVehicleWater'],
                longestDistanceKill: lifeTimeData['longestDistanceKill'],
                byWingsuit: lifeTimeData['distanceTraveledWingsuit']
            },

        });
    }

    travelRowInfo = (section, index) =>
        (<div key={index} className='travel-list-item'>
            <div className='travel-list-title'>{section.title}</div>
            <div className='travel-list-icon'>{section.icon}</div>
            <div className='travel-list-data'>{section.data}</div>
        </div>);


    render() {
        const {lifeTime} = this.state;
        const {travel} = this.state;
        const {profile}=this.state;
        const travelList = [
            {
                title: 'Foot',
                icon: Image('blackout/run.png', 40),
                data: this.InchToKm(travel.byFoot)
            },
            {
                title: 'helicopter',
                icon: Image('blackout/helicopter.png', 40),
                data: this.InchToKm(travel.byAirVehicle)
            },
            {
                title: 'water',
                icon: Image('blackout/boat.png', 40),
                data: this.InchToKm(travel.byWaterVehicle)
            },
            {
                title: 'swing suit',
                icon: Image('blackout/fly.png', 40),
                data: this.InchToKm(travel.byWingsuit)
            },
            {
                title: 'land Vehicle',
                icon: Image('blackout/truck.png', 40),
                data: this.InchToKm(travel.byLandVehicle)
            },
            // {
            //     title: 'longest shot',
            //     icon: Image('blackout/longestDistanceKill.png', 40),
            //     data: this.InchToKm(longestDistanceKill)
            // },
        ];
        return (
            <div className='blackout'>
                <LifeTime profile={profile} data={lifeTime} blackout={true}/>
                {Image('blackout/solo.png')}
                <Image path={'blackout/duo.png'}/>
                <Image path={'blackout/squad.png'}/>

                <div>
                    Traveled By:
                    {travelList.map(this.travelRowInfo)}
                </div>
            </div>
        );
    }
}

export default StatefulBlackout;


