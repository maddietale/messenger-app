import React from 'react';
// Styles
import Style from '../Styles/Navigation.module.css'
// Images
import frameLogo1 from '../Images/Plot-logo-1.png';

const Navigation = ({logoutHandler}) => {
    return (
        <>
        <div className={Style.navbar}>
            <img src={frameLogo1} alt='Frame Logo'/>

            <div id={Style.logout} className='pure-button' onClick={logoutHandler}>
                Logout
            </div>
        </div>
        </>
    );
};

export default Navigation;