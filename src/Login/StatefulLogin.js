import React from 'react';
import {UserData, UserDataBar} from "../service/Http";
import './StatefulLogin.css'
import Link from "react-router-dom/es/Link";
import {generatePath} from "react-router";
import {Redirect} from 'react-router';
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import {prestigeLevelMatch} from "../LifeTime/components/Rank/functions/RankFunctions";
import UserBar from "./components/UserBar/UserBar";
import {getTokenAsUsers, saveToken} from "./functions/StatefullLoginFunctions";


class StatefulLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            query: '',
            platform: 'xbl',
            valid: null,
            isToken: false,
            usersList: []
        }
    }

    async componentDidMount() {
        if (localStorage.getItem('token') !== null) {
            const allUsers = getTokenAsUsers();
            allUsers.map(async user => {
                const userList = await UserDataBar(user.username, user.platform);
                this.setState({
                    usersList: [...this.state.usersList, userList]
                })
            })
        }
    }

    updateUser = async (name, platform) => this.setState({
            user: await UserData(name, platform),
            query: name,
            platform: platform
        },
        () => this.setState({valid: this.state.user.status === 'success'}));

    platformChangeHandler = (e) => this.setState({platform: e}, async () => {
        await this.updateUser(this.state.query, this.state.platform)
    });

    inputChangeHandler = (e) => this.setState({query: e}, async () => {
        await this.updateUser(this.state.query, this.state.platform)
    });


    recentlyVisitedEntity = (user, index) => (
        <div className='recently-visited'>
            <Link to={`/user/${user.username}/platform/${user.platform}/multiplayer`} key={index}>
                <UserBar user={user}/>
            </Link>
        </div>
    );

    render() {
        const {valid, query,platform} = this.state;
        const path = `/user/${this.state.query}/platform/${this.state.platform}/multiplayer`;
        return (
            <div>
                {
                    <div className='login'>
                        <Input onInputChange={this.inputChangeHandler}
                               onPlatformChange={this.platformChangeHandler}/>
                        {
                            valid != null ?
                                valid ?
                                    <div>Found <Link onClick={()=>saveToken(query,platform)} to={path}><Button/></Link>
                                    </div>
                                    :
                                    <div>There is no user with the name {query}</div>
                                :
                                <div/>
                        }
                    </div>
                }
                <div>
                    {
                        this.state.usersList.map(this.recentlyVisitedEntity)
                    }
                </div>
            </div>
        );
    }
}

export default StatefulLogin;