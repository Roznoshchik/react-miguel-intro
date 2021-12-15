import React from 'react'
import {UserContext } from './App';

export default function LoginForm(){

    const username = React.useRef();
    const userContext = React.useContext(UserContext);

    const onSubmit = (ev) => {
        ev.preventDefault();
        userContext.loginUser(username.current.value)
    };
    
    
    return (
       <form onSubmit={onSubmit}>
           <input type="text" ref={username}/>
           <input type="submit" value="Login" />
        </form>
    )
}