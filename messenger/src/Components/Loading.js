import React from 'react';
// Styles
import Style from '../Styles/Loading.module.css';
// Images
import vector from '../Images/loadingVector.jpg';

const Loading = () => {
    return (
        <>
            <div className={Style.container} >
                <span>Please Wait...</span>
                <img src={vector} />
            </div>
        </>
    );
};

export default Loading;