import React from 'react';
import './App.css';
import StatefulLogin from "./Login/StatefulLogin";
import {BrowserRouter, Route} from "react-router-dom";
import StatefulMultiplayer from "./Multiplayer/StatefulMultiplayer";
import Top from "./Top/Top";
import StatefulBlackout from "./Blackout/StatefulBlackout";


class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div >
                    <Route exact path='/' render={(props) => <StatefulLogin {...props}/>}/>
                    <Route path='/user/:id/platform/:platform/mode/:mode/' render={(props) => <Top {...props}/>}/>
                    <Route path='/user/:id/platform/:platform/:mode/multiplayer' render={(props) => <StatefulMultiplayer {...props} />}/>
                    <Route path='/user/:id/platform/:platform/:mode/blackout' render={(props) => <StatefulBlackout {...props}/>}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;


/*
assists: 76
basketsMade: 0 /uniq
cargoSupplyOpened: 3 /uniq
challengexp: 825
characterQuestsCompleted: 3
curWinStreak: 0
deaths: 229
destroyEquipment: 1
distanceTraveledFoot: 9420074
distanceTraveledVehicleAir: 520593
distanceTraveledVehicleAirMiles: 9
distanceTraveledVehicleLand: 599974
distanceTraveledVehicleLandMiles: 9
distanceTraveledVehicleWater: 154450
distanceTraveledVehicleWaterMiles: 3
distanceTraveledWingsuit: 13410019
distanceTraveledWingsuitMiles: 212
downs: 148
downsEliminated: 3
downsEliminatedTeam: 8
downsRevived: 20
ekia: 127
frackingBlastDoorsOpened: 1
headshotDamage: 5785
headshots: 17
hits: 1550
hitsHeadshot: 226
itemsArmorUsed: 266
itemsBackpacksUsed: 164
itemsDropped: 0
itemsHealthUsed: 660
itemsNPaintCansCollected: 0
itemsPaintCansCollected: 0
itemsPickedUp: 7334
kdratio: 550
killStreak: 5
kills: 126
killsAfterDamage: 51
killsAfterDamageUnarmed: 12
killsAfterRevive: 13
killsAvenged: 0
killsEarly: 39
killsEliminated: 97
killsEnemyInVehicleAir: 0
killsEnemyInVehicleLand: 1
killsEnemyInVehicleWater: 0
killsEquipment: 5
killsLongshot: 0
killsLongshotSniper: 0
killsRevenge: 2
killsUnarmed: 5
killsUnderwater: 1
killsUnderwaterEnemy: 2
killsVehicleDriver: 0
killsVehiclePassenger: 0
killsWhileStunned: 0
killsWithoutDamage: 75
killsZombie: 13
killxp: 1350
longestDistanceKill: 5039
longestFiringRangeBullseye: 0
losses: -2
maxFiringRangeBullseye: 0
misses: 10392
mostDamageInAGame: 672
mostKillsInAGame: 5
placementxp: 2000
plevel: 0
rank: 31
rankxp: 0
revives: 15
score: 0
shots: 0
squads2Eliminated: 13
squads3Eliminated: 0
squads4Eliminated: 0
squadsEliminatedUnassisted: 0
tanborFudgelyInteractions: 0
ties: 0
timePlayedAlive: 101103
timePlayedTotal: 117827
top5Avenger: 0
top5FirstInventory: 0
top5PlacementPlayer: 12
top5PlacementTeam: 16
top10PlacementPlayer: 17
top10PlacementTeam: 38
top10PlacementTeamNoCircleDamage: 22
top10PlacementTeamPerks: 0
top15PlacementTeam: 65
top25PlacementPlayer: 48
totalDamage: 41839
totalGamesPlayed: 290
totalShots: 11868
vehicleDamage: 27530
vehicleDamageOccupied: 14695
vehicleEscapes: 3
vehicleLockExits: 0
vehicleScavengerAir: 0
vehicleScavengerLand: 0
vehicleScavengerWater: 0
vehicleUsedAll: 0
vehiclesDestroyed: 4
vehiclesDestroyedOccupied: 1
vehiclesDestroyedOccupiedUsingVehicle: 0
winStreak: 1
wins: 2
winsFirst: 1
winsLastAlive: 0
winsWithoutDown: 0
winsWithoutKills: 1
winxp: 200
wlratio: 2000
 */