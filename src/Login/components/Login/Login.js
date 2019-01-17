import React from 'react';
import {Input} from "../Input/Input";
import Link from "react-router-dom/es/Link";
import {saveToken} from "../../functions/StatefullLoginFunctions";
import {Button} from "../Button/Button";

const Login = ({onChangeInput, onChangePlatform, isValid, query, platform}) => {
    const path = `/user/${query}/platform/${platform}/multiplayer`;

    return (
        <div className='login'>
            <Input onInputChange={(e) => onChangeInput(e)}
                   onPlatformChange={(e) => onChangePlatform(e)}/>
            {
                isValid != null ?
                    isValid ?
                        <div>Found {query}<Link onClick={() => saveToken(query, platform)} to={path}><Button/></Link>
                        </div>
                        :
                        <div>There is no user with the name {query}</div>
                    :
                    <div/>
            }
        </div>
    );
};

export default Login;
