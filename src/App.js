import React from 'react';
import './App.css';
import StatefulLogin from "./Login/StatefulLogin";
import {BrowserRouter, Route} from "react-router-dom";
import StatefulMultiplayer from "./Multiplayer/StatefulMultiplayer";


class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' render={(props) => <StatefulLogin {...props}/>}/>
                    <Route path='/user/:id/platform/:platform/multiplayer' render={(props) => <StatefulMultiplayer {...props} />}/>
                    <Route path='/user/:id/platform/:platform/blackout' render={(props) => <div>Blackout</div>}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
