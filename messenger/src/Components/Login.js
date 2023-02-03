import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';
import { motion } from 'framer-motion';
// Styles
import Style from '../Styles/Login.module.css'
// Images
import vector from '../Images/loginVector.png';

const LoginTest = () => {
    return (
        <>
            <div className={Style.container}>
                <img className={Style.loginVector} src={vector} alt="Programmer Lady" />
                <motion.div whileHover={{ scale: 1.1 }} className={Style.loginCard}>
                    <h1>Welcome to "Frame"</h1>
                    <span className={Style.about}>Frame is a messenger Application, <br /> developed by React for final project of my bachelor's degree in computer engineering. <br /> Sign In to Continue... </span>
                    <div className="pure-button" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                        <i className="fa fa-google fa-m" />
                        Sign In with Google
                    </div>
                    <span className={Style.developer}>made with ♥️ by <a href="https://github.com/torabiika">torabiika</a> </span>
                </motion.div>
            </div>
        </>
    );
};

export default LoginTest;