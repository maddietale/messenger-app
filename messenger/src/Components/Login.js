import React from 'react';
import Style from '../Styles/Login.module.css';
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
                        <button className='pure-button'>
                        <i class="fa fa-google fa-m" />
                            Sign In with Google
                        </button>
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