import React from 'react';
import {UserData} from "../service/Http";
import './StatefulLogin.css'
import Link from "react-router-dom/es/Link";
import {generatePath} from "react-router";
import {Redirect} from 'react-router';
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";


class StatefulLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            query: '',
            platform: 'xbl',
            valid: null,
            redirect: '',
            isToken: false

        }
    }

    async componentDidMount() {
        if (localStorage.getItem('token') !== null) {
            // const [username, platform] = [...localStorage.getItem('token')];
            const test = localStorage.getItem('token');
            // await this.updateUser(username, platform);
            // this.setState({
            //     isToken: true,
            //     redirect: generatePath('user/:id/platform/:platform/multiplayer', {
            //         id: this.state.query,
            //         platform: this.state.platform
            //     })
            // });
        }


    }

    updateUser = async (name, platform) => this.setState({
        user: await UserData(name, platform),
        query: name,
        platform: platform
    }, () => this.setState({valid: this.state.user.status === 'success'}, () => this.props.onLogin(this.state.query)));

    platformChangeHandler = (e) => this.setState({platform: e}, async () => {
        await this.updateUser(this.state.query, this.state.platform)
    });

    inputChangeHandler = (e) => this.setState({query: e}, async () => {
        await this.updateUser(this.state.query, this.state.platform)
    });

    saveToken = () => {
        localStorage.setItem('token',`${this.state.query},${this.state.platform}|`)
    };

    render() {
        const {valid, query} = this.state;
        const path = `/user/${this.state.query}/platform/${this.state.platform}/multiplayer`;
        return (
            <div className='login'>
                {
                    <div>
                        <Input onInputChange={this.inputChangeHandler}
                               onPlatformChange={this.platformChangeHandler}/>
                        {
                            valid != null ?
                                valid ?
                                    <div>Found <Link onClick={this.saveToken} to={path}><Button/></Link>
                                    </div>
                                    :
                                    <div>There is no user with the name {query}</div>
                                :
                                <div/>
                        }
                    </div>
                }


            </div>
        );
    }
}

export default StatefulLogin;