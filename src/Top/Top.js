import React from 'react';
import './Top.css'
import Link from "react-router-dom/es/Link";
import GlitchEffect from "../StatelessComponents/GlitchEffect/GlitchEffect";
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
        const {name} = this.state;
        return (
            <div>
                <GlitchEffect>{name.toUpperCase()}</GlitchEffect>
                <div style={{display:'flex', margin:'10px'}}>
                    <Link to={`blackout`} className='section'  >Blackout</Link>
                    <Link to={`multiplayer`} className='section' >Multiplayer</Link>
                </div>
            </div>
        );
    }
}


export default Top;
