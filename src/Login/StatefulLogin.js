import React from 'react';
import {UserData, UserDataBar} from "../service/Http";
import './StatefulLogin.css'
import Link from "react-router-dom/es/Link";
import UserBar from "./components/UserBar/UserBar";
import {getTokenAsUsers} from "./functions/StatefullLoginFunctions";
import Login from "./components/Login/Login";


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

    recentlyVisitedEntity = (user, index) => (<div className='recently-visited' key={index}>
            <Link to={`/user/${user.username}/platform/${user.platform}/mode/multiplayer`} key={index}>
                <UserBar user={user}/>
            </Link>
        </div>
    );

    render() {
        const {valid, query, platform} = this.state;
        return (
            <div>
                <Login onChangeInput={(e) => this.inputChangeHandler(e)}
                       onChangePlatform={() => this.platformChangeHandler()}
                       isValid={valid}
                       query={query}
                       platform={platform}/>
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