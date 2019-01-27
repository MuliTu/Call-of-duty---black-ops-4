import React from 'react';
import {UserData} from "../service/Http";
import {Multiplayer} from "./components/Multiplayer/Multiplayer";
import LifeTime from "../LifeTime/LifeTime";
import './StatefulMultiplayer.css'
import Select from 'react-select';
import BarGraph from "../Bar/BarGraph";

class StatefulMultiplayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                username: props.match.params.id,
                platform: props.match.params.platform,
                prestige: 0,
                level: 0,
                levelXpRemainder: 0,
                levelXpGained: 0,
                timePlayedTotal: 0
            },
            lifeTime: {
                accuracy: 0,
                hits: 0,
                headshots: 0,
                kills: 0,
                assists: 0,
                suicides: 0,
            },
            modes: [],
            modeStatistics: [],
            width: (window.innerWidth >= 1000 ? 700 : 350),
            currentMode: ''
        }
    }

    resizeHandler = () => this.setState({width: (window.innerWidth >= 1000 ? 700 : 350)});

    async componentDidMount() {
        const {data} = await UserData(this.state.profile.username, this.state.profile.platform);
        const profile = await data.mp;
        const lifeTime = await data.mp.lifetime.all;
        this.setState({
            profile: {
                username: this.props.match.params.id,
                platform: this.props.match.params.platform,
                prestige: profile.prestige,
                level: profile.level,
                levelXpGained: profile.levelXpGained,
                levelXpRemainder: profile.levelXpRemainder,
            },
            lifeTime: {
                timePlayedTotal: lifeTime.timePlayedTotal,
                accuracy: lifeTime.accuracy,
                hits: lifeTime.hits,
                headshots: lifeTime.headshots,
                suicides: lifeTime.suicides
            },
            modes: Object.keys(data.mp.lifetime.mode).map((mode, index) => ({label: mode, value: index})),
        });
        window.addEventListener('resize', this.resizeHandler)
    }

    changeModeHandler = async (opt) => {
        if (opt.label) {
            const {data} = await UserData(this.state.profile.username, this.state.profile.platform);
            this.setState({
                modeStatistics: await data.mp.lifetime.mode[opt.label],
                currentMode: opt.label
            })
        }
    };

    render() {
        const {lifeTime} = this.state;
        const {profile, currentMode, modes, modeStatistics, width} = this.state;
        return (
            <div>
                <div className='multiplayer-wrapper'>
                    <div >
                        <div style={{width: '350px'}}>
                            <LifeTime profile={profile} data={lifeTime}/>
                        </div>
                    </div>
                    <div style={{ width: width}}>
                        <div style={{width: width, overflowX: 'scroll'}}>
                            <BarGraph {...this.props} multiplayerMode={currentMode} width={1000} height={300}/>

                        </div>
                        <div style={{width: width}}>
                            Mode:
                            <Select options={modes} placeholder={'Select mode'} onChange={this.changeModeHandler}
                                    isSearchable={false}/>
                            {
                                modeStatistics.length === 0 ?
                                    <div>Please Select Mode</div>
                                    :
                                    <Multiplayer data={modeStatistics}/>
                            }

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default StatefulMultiplayer;