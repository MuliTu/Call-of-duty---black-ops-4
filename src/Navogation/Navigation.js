import React from 'react';
import './Navigation.css'
import {Link} from "react-router-dom";
class Navigation extends React.Component {
    constructor(props) {
        console.log('this is props',props);
        super(props);

    }


    render() {
        return (
            <div>
                <Link to={'/mulitiplayer'} className='lable-item' >Multiplayer</Link>
                <Link to={`${this.props.pathname}/blackout`} className='lable-item' >Blackout</Link>
            </div>
        );
    }
}

export default Navigation;