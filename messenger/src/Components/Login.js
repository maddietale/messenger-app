import React from 'react';
import Style from '../Styles/Login.module.css';
import gIcon from '../Images/google-icon.png'

const Login = () => {
    return (
        <>
            <h1 id={Style.title}>Welcome to My Messenger</h1>
            <div className={Style.loginBox}>
                <img src={gIcon} alt='Google Icon' />
                <button className='pure-button'>Sign In With Google
                </button>
            </div>
            <span id={Style.developer}>created with ♥️ by torabiika</span>
        </>
    );
};

export default Login;