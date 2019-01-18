import React from 'react';
import './App.css';
import StatefulLogin from "./Login/StatefulLogin";
import {BrowserRouter, Route} from "react-router-dom";
import StatefulMultiplayer from "./Multiplayer/StatefulMultiplayer";
import Top from "./Top/Top";


class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' render={(props) => <StatefulLogin {...props}/>}/>
                    <Route path='/user/:id/platform/:platform/mode/:mode/' render={(props) => <Top {...props}/>}/>
                    <Route path='/user/:id/platform/:platform/:mode/multiplayer' render={(props) => <StatefulMultiplayer {...props} />}/>
                    <Route path='/user/:id/platform/:platform/:mode/blackout' render={(props) => <div>Coming soon....</div>}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
