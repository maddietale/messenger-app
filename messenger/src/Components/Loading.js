import React from 'react';
// Styles
import Style from '../Styles/Loading.module.css';

const Loading = () => {
    return (
        <>
            <div className={Style.container} >
                <span>Please Wait...</span>
            </div>
        </>
    );
};

export default Loading;