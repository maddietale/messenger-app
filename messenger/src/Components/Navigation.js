import React from 'react';
// Styles
import Style from '../Styles/Navigation.module.css'

const Navigation = ({logoutHandler}) => {
    return (
        <>
        <div className={Style.navbar}>
            <div id={Style.logout} className='pure-button' onClick={logoutHandler}>
                Logout
            </div>
        </div>
        </>
    );
};

export default Navigation;