import React from 'react';
import firebase from 'firebase/compat/app';

// Imports
import { auth } from '../firebase';

// Styles
import Style from '../Styles/Login.module.css';

// Images
import wallpaper from '../Images/login-wallpaper.jpeg';
import frameLogo1 from '../Images/Plot-logo-1.png';

const Login = () => {
    return (
        <>
            <div className={Style.container}>

                <div className={Style.box}>
                    <div id={Style.logo}>
                        <img src={frameLogo1} alt='Plot Logo' />
                    </div>
                    <div id={Style.login}>
                        <h1>
                            Welcome to "Frame"
                        </h1>
                        <div className='pure-button' onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                            <i className="fa fa-google fa-m" />
                            Sign In with Google
                        </div>
                    </div>
                    <span>made with ♥️ by torabiika</span>
                </div>

                <img src={wallpaper} className={Style.wallpaper} alt='Wallpaper'>
                </img>

            </div>
        </>
    );
};

export default Login;