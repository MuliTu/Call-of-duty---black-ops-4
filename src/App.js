import React from 'react';
import './App.css';
import StatefulLogin from "./Login/StatefulLogin";
import {BrowserRouter, Route} from "react-router-dom";
import StatefulMultiplayer from "./Multiplayer/StatefulMultiplayer";
import GlitchEffect from "./GlitchEffect/GlitchEffect";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name:''
        }
    }
    userIsLogin = (name) =>this.setState({name});

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' render={(props) => <StatefulLogin {...props} onLogin={this.userIsLogin}/>}/>
                    <GlitchEffect>{this.state.name}</GlitchEffect>
                    <Route path='/user/:id/platform/:platform/multiplayer' render={(props) => <StatefulMultiplayer {...props} />}/>
                    <Route path='/user/:id/platform/:platform/blackout' render={(props) => <div>Blackout</div>}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
