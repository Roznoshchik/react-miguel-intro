import React from 'react'
import { UserContext } from './App';

import LoginForm from './Loginform'
import LogoutForm from './LogoutForm'

export default function Navigation(){
    const userContext = React.useContext(UserContext);
    
    return (
        <div>
            { userContext.username ?
                <LogoutForm />
            :
                <LoginForm />
            }
        </div>
    );
}