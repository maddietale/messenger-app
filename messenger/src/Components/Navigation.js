import React, { useContext } from 'react';
// Styles
import Style from '../Styles/Navigation.module.css'
// Contexts
import { AuthContext } from '../Contexts/AuthContextProvider';

const Navigation = ({logoutHandler}) => {

    const user = useContext(AuthContext);
    return (
        <>
        <div className={Style.navbar}>
            <div id={Style.logout} className='pure-button' onClick={logoutHandler}>
                Logout
            </div>
            <div className={Style.user}>
            <span>{user.displayName}</span>
            <img src={user.photoURL} alt='Avatar'/>
            </div>
        </div>
        </>
    );
};

export default Navigation;