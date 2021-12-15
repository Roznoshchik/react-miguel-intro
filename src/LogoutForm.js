import React from 'react'
import { UserContext } from "./App";

export default function LogoutForm() {
    const currentUser = React.useContext(UserContext)

    const onSubmit = (ev) => {
        ev.preventDefault();
        currentUser.logoutUser()
    }
    
    return(
        <form onSubmit={onSubmit}>
            <input type="submit" value="logout"/>
        </form>
    )
}