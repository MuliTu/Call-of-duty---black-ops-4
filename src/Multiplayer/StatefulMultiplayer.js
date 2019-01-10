import React from 'react';
import {UserData} from "../service/Http";
import {Multiplayer} from "./components/Multiplayer/Multiplayer";
import LifeTime from "../LifeTime/LifeTime";
import './StatefulMultiplayer.css'
import {Figure} from "./components/Figure/Figure";
import Select from 'react-select';

class StatefulMultiplayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.match.params.id,
            platform: props.match.params.platform,
            lifeTime: {
                prestige: 0,
                level: 0,
                levelXpRemainder: 0,
                levelXpGained: 0,
                timePlayedTotal: 0,
                accuracy: 0,
                hits: 0,
                headshots: 0,
                kills: 0,
                assists: 0,
                suicides: 0,
            },
            modes: [],
            modeStatistics: [],
        }
    }

    async componentDidMount() {
        const {data} = await UserData(this.state.username, this.state.platform);
        console.log('this is data', data);
        this.setState({
            lifeTime: {
                prestige: data.mp.prestige,
                level: data.mp.level,
                levelXpGained: data.mp.levelXpGained,
                levelXpRemainder: data.mp.levelXpRemainder,
                timePlayedTotal: data.mp.lifetime.all.timePlayedTotal,
                accuracy: data.mp.lifetime.all.accuracy,
                hits: data.mp.lifetime.all.hits,
                headshots: data.mp.lifetime.all.headshots,
                suicides: data.mp.lifetime.all.suicides
            },
            modes: Object.keys(data.mp.lifetime.mode).map((md, index) => ({label: md, value: index}))
        })
    }

    changeModeHandler = async (opt) => {
        console.log(opt);
       if(opt.label !== ''){
        const {data} = await UserData(this.state.username, this.state.platform);
        this.setState({
            modeStatistics: await data.mp.lifetime.mode[opt.label]
        })}
    };

    render() {
        // console.log(this.state);
        const {
            prestige, level, levelXpGained,
            levelXpRemainder, timePlayedTotal, accuracy, hits,
            headshots, suicides
        } = this.state.lifeTime;
        const {username,modes,modeStatistics} = this.state;
        return (
            <div>
                <h2>{username}</h2>
                <div className='test'>
                    <div style={{flexBasis: '45%'}}>
                        <LifeTime level={level} levelXpGained={levelXpGained}
                                  levelXpRemainder={levelXpRemainder}
                                  prestige={prestige}
                                  timePlayedTotal={timePlayedTotal}
                                  accuracy={accuracy}
                                  headshots={headshots}
                                  hits={hits}
                                  suicides={suicides}/>
                    </div>
                    <div style={{flexBasis: '10%'}}>
                        <Figure/>
                    </div>
                    <div style={{flexBasis: '45%'}}>
                        Mode:<Select options={modes}
                                     placeholder={'Select mode'}
                                     onChange={this.changeModeHandler}/>
                        <Multiplayer data={modeStatistics}/>
                    </div>

                </div>

            </div>
        );
    }
}

export default StatefulMultiplayer;