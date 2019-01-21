import React from 'react';
import {UserDataBlackout} from "../service/Http";
import LifeTime from "../LifeTime/LifeTime";
import {Accuracy, boxInfoEntity, Image, Time} from "../InfoBox/functions/InfoBoxFunctions";
import './StatefulBlackou.css'

class StatefulBlackout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.match.params.id,
            platform: props.match.params.platform,
            lifeTime: {
                level: 0,
                levelXpRemainder: 0,
                levelXpGained: 0,
                timePlayedTotal: 0,
                accuracy: 0,
                hits: 0,
                headshots: 0,
                kills: 0,
                assists: 0,
                longestDistanceKill: 0,
            },
            travel: {
                distanceTraveledFoot: 0,
                distanceTraveledVehicleAir: 0,
                distanceTraveledWingsuit: 0,
                distanceTraveledVehicleLand: 0,
                distanceTraveledVehicleWater: 0,
                longestDistanceKill: 0,
            }
        }

    }

    InchToKm = (number) => {
        console.log('this is numver', number);
        if (number > 0) {
            const temp = (number * 0.0254) / 1000;
            const kilometer = temp.toString().split('.')[0];
            const meter = temp.toString().split('.')[1];
            console.log(meter, meter);
            return `${kilometer}Km ${meter.slice(0, 3) > 100 ? meter.slice(0, 3) : meter.slice(1, 3)}M`
        }
    };


    async componentDidMount() {
        const {data} = await UserDataBlackout(this.state.username, this.state.platform);
        console.log(data);
        this.setState({
            lifeTime: {
                level: data.mp.level,
                levelXpGained: data.mp.levelXpGained,
                levelXpRemainder: data.mp.levelXpRemainder,
                timePlayedTotal: data.mp.lifetime.all.timePlayedTotal,
                accuracy: data.mp.lifetime.all.accuracy,
                hits: data.mp.lifetime.all.hits,
                headshots: data.mp.lifetime.all.headshots,
            },
            travel: {
                distanceTraveledFoot: data.mp.lifetime.all.distanceTraveledFoot,
                distanceTraveledVehicleAir: data.mp.lifetime.all.distanceTraveledVehicleAir,
                distanceTraveledVehicleLand: data.mp.lifetime.all.distanceTraveledVehicleLand,
                distanceTraveledVehicleWater: data.mp.lifetime.all.distanceTraveledVehicleWater,
                longestDistanceKill: data.mp.lifetime.all.longestDistanceKill,
                distanceTraveledWingsuit: data.mp.lifetime.all.distanceTraveledWingsuit
            },
            modes: Object.keys(data.mp.lifetime.mode).map((mode, index) => ({label: mode, value: index}))
        });
    }


    render() {
        const {level, levelXpGained, levelXpRemainder, timePlayedTotal, accuracy, hits, headshots,} = this.state.lifeTime;
        const {
            distanceTraveledVehicleAir,
            distanceTraveledVehicleLand,
            distanceTraveledVehicleWater,
            distanceTraveledWingsuit,
            distanceTraveledFoot, longestDistanceKill
        } = this.state.travel;
        const boxesList = [
            {
                title: 'time played',
                icon: Image('time.png', 40),
                data: Time(timePlayedTotal),
            },
            {title: 'accuracy', icon: Image('accuracy.png', 40), data: Accuracy(accuracy)},
        ];
        const travelList = [
            {title: 'Foot', icon: Image('blackout/run.png', 40), data: this.InchToKm(distanceTraveledFoot)},
            {
                title: 'helicopter',
                icon: Image('blackout/helicopter.png', 40),
                data: this.InchToKm(distanceTraveledVehicleAir)
            },
            {title: 'water', icon: Image('blackout/boat.png', 40), data: this.InchToKm(distanceTraveledVehicleWater)},
            {title: 'swing suit', icon: Image('blackout/fly.png', 40), data: this.InchToKm(distanceTraveledWingsuit)},
            {
                title: 'land viacle',
                icon: Image('blackout/truck.png', 40),
                data: this.InchToKm(distanceTraveledVehicleLand)
            },
            {
                title: 'longest shot',
                icon: Image('blackout/longestDistanceKill.png', 40),
                data: this.InchToKm(longestDistanceKill)
            },
        ];
        return (
            <div style={{display:'flex'}}>
                <LifeTime level={level}
                levelXpGained={levelXpGained}
                levelXpRemainder={levelXpRemainder}
                timePlayedTotal={timePlayedTotal}
                accuracy={accuracy}
                headshots={headshots}
                hits={hits}
                blackout={true}/>
                <div>
                    Traveled By:
                    {travelList.map((cell, index) => {
                        return (<div key={index} className='travel-list' style={{display: 'flex'}}>
                            <div style={{margin: 'auto'}}>{cell.title}</div>
                            <div style={{width: '110px', margin: 'auto'}}>{cell.icon}</div>
                            <div style={{margin: 'auto'}}>{cell.data}</div>
                        </div>)
                    })}
                </div>
            </div>
        );
    }
}

export default StatefulBlackout;


/*
accuracy: 0.13330176393986032 /uniq
assists: 190 / multi
avgLifeTime: 243.55100463678517
basketsMade: 0
cargoSupplyOpened: 8
characterQuestsCompleted: 3
curWinStreak: 0
damagePerGame: 143.93661971830986
damagePerMinute: 19.456140629214197
deaths: 584
destroyEquipment: 4
downs: 458
downsEliminated: 12
downsEliminatedTeam: 28
downsRevived: 73
ekia: 378
ekiaPerGame: 0.532394366197183
ekiadRatio: 0.6472602739726028
frackingBlastDoorsOpened: 1
headshotDamage: 14278
headshotPercentage: 0.15079365079365079
headshots: 57
hits: 4504
hitsHeadshot: 572
itemsArmorUsed: 667
itemsBackpacksUsed: 434
itemsDropped: 0
itemsHealthUsed: 1679
itemsNPaintCansCollected: 0
itemsPaintCansCollected: 0
itemsPickedUp: 18935
kdratio: 647
killStreak: 6
kills: 378
killsAfterDamage: 151
killsAfterDamageUnarmed: 36
killsAfterRevive: 34
killsAvenged: 0
killsEarly: 103
killsEarlyPercentage: 0.2724867724867725
killsEliminated: 291
killsEnemyInVehicleAir: 1
killsEnemyInVehicleLand: 7
killsEnemyInVehicleWater: 0
killsEquipment: 14
killsLongshot: 0
killsLongshotSniper: 0
killsPerGame: 0.532394366197183
killsRevenge: 5
killsUnarmed: 8
killsUnderwater: 4
killsUnderwaterEnemy: 5
killsVehicleDriver: 1
killsVehiclePassenger: 2
killsWhileStunned: 1
killsWithoutDamage: 226
killsZombie: 29
killxp: 4060
longestDistanceKill: 3281
longestFiringRangeBullseye: 0
losses: -7
maxFiringRangeBullseye: 0
misses: 29517
mostDamageInAGame: 0
mostKillsInAGame: 0
placementxp: 4200
plevel: 0
rank: 31
rankxp: 11485
revives: 68
revivesPerGame: 0.09577464788732394
score: 0
shots: 0
squads2Eliminated: 40
squads3Eliminated: 3
squads4Eliminated: 0
squadsEliminatedUnassisted: 0
tanborFudgelyInteractions: 0
ties: 0
timePlayedAlive: 268960
timePlayedTotal: 315155
top5Avenger: 1
top5FirstInventory: 0
top5PlacementPlayer: 21
top5PlacementTeam: 50
top10PlacementPlayer: 37
top10PlacementTeam: 125
top10PlacementTeamNoCircleDamage: 78
top10PlacementTeamPerks: 1
top15PlacementTeam: 217
top25PlacementPlayer: 123
topPlacementsAll: 217
topPlacementsPlayer: 181
topPlacementsTeam: 392
totalDamage: 102195
totalGamesPlayed: 710
totalShots: 33788
vehicleDamage: 64735
vehicleDamageOccupied: 31400
vehicleEscapes: 7
vehicleLockExits: 0
vehicleScavengerAir: 0
vehicleScavengerLand: 0
vehicleScavengerWater: 0
vehicleUsedAll: 0
vehiclesDestroyed: 9
vehiclesDestroyedOccupied: 2
vehiclesDestroyedOccupiedUsingVehicle: 0
winPercentage: 0.009859154929577466
winStreak: 2
wins: 7
winsFirst: 1
winsLastAlive: 0
winsWithoutDown: 4
winsWithoutKills: 1
winxp: 800
wlratio: 7000


 */