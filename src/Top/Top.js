import React from 'react';
import GlitchEffect from "../GlitchEffect/GlitchEffect";
import './Top.css'
import Link from "react-router-dom/es/Link";
class Top extends React.Component {
    constructor(props) {
        console.log('this is props from top',props);
        super(props);
        this.state={
            name:props.match.params.id,
            mode:props.match.params.mode,
            platform:props.match.params.platform,
        }
    }

    render() {
        const {name,platform} = this.state;
        const outPage = {
            backgroundColor: 'black',
            color:'#fc962a',
            shdowBox: '10px 10px 10px white',
        };
        const inPage = {
            backgroundColor: '#fc962a',
            color:'black',
        };
        return (
            <div>
                <GlitchEffect>{name.toUpperCase()}</GlitchEffect>
                <div style={{display:'flex', margin:'10px'}}>
                    <Link to={`blackout`} className='section' style={inPage}>Blackout</Link>
                    <Link to={`multiplayer`} className='section' style={inPage}>Multiplayer</Link>
                </div>
            </div>
        );
    }
}


export default Top;
