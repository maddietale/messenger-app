import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';
import { motion } from 'framer-motion';
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
                    <div id={Style.logoBox}>
                        <img src={frameLogo1} alt='Plot Logo' />
                    </div>
                    <div id={Style.loginBox}>
                        <h1>
                            Welcome to "Frame"
                        </h1>
                        <span>Frame is a messenger Application, based on React.</span>
                        <motion.div whileHover={{ scale: 1.1 }} className='pure-button' onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                            <i className="fa fa-google fa-m" />
                            Sign In with Google
                        </motion.div>
                    </div>
                    <span id={Style.footerBox}>made with ♥️ by <a href="https://github.com/torabiika"><b>torabiika</b></a></span>
                </div>

                <img src={wallpaper} className={Style.wallpaper} alt='Wallpaper' />
            </div>
        </>
    );
};

export default Login;