import React from 'react';
import './App.css';
import StatfulLogin from "./Login/StatfulLogin";
import {BrowserRouter, Route} from "react-router-dom";
import StatefulMultiplayer from "./Multiplayer/StatefulMultiplayer";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' render={(props) => <StatfulLogin {...props}/>}/>
                    <Route path='/user/:id/platform/:platform' render={(props) => <StatefulMultiplayer {...props} />}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
