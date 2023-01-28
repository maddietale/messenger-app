import React from 'react';
import Style from '../Styles/Login.module.css';
import googleIcon from '../Images/google-icon.png';
import wallpaper from '../Images/login-wallpaper.jpg';
import plotLogo1 from '../Images/Plot-logo-1.png';
import plotLogo2 from '../Images/Plot-logo-2.png';

const Login = () => {
    return (
        <>
            <div className={Style.container}>
                <div className={Style.loginBox}>
                    <div id={Style.logo}>
                        <img className={Style.icon} src={plotLogo1} alt='Plot Logo' />
                    </div>

                    <div id={Style.welcome}>
                        <h1>welcome to</h1>
                        <img className={Style.icon} src={plotLogo2} alt='Plot Logo' />
                        <h1>Sign In to Continue</h1>
                        <span>don't you already hava an account? <b>create one!</b></span>
                    </div>

                    <div id={Style.login}>
                        <form>
                            <label for='emailInput'>Email</label>
                            <br />
                            <input id='emailInput' type='email' placeholder='YourEmail@gmail.com' />
                            <br />
                            <label for='passInput'>Password</label>
                            <br />
                            <input id='passInput' type='password' />
                            <br />
                            <span> Forgot Password? </span>
                            <input id='subInput' type='submit' value='Sign In' />
                        </form>
                    </div>

                    <div id={Style.signup}>
                        <button>
                            <img className={Style.icon} src={googleIcon} />
                            Sign In with Google
                        </button>
                    </div>
                </div>

                <img src={wallpaper} className={Style.loginWallpaper}>
                </img>
            </div>
        </>
    );
};

export default Login;