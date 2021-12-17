import React from 'react'
import { UserContext } from './App' 

export default function Header(){
    const currentUser = React.useContext(UserContext);
    console.log(currentUser)
    return (
        <div>
            {currentUser.username ?
                <p>welcome {currentUser.username}</p>
            :
                <p>Please Login</p>
            }
        </div>
    )
}