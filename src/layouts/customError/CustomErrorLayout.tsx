import React from 'react';
import "./CustomErrorLayout.css"
import error from '../../images/404 Error Page not Found with people connecting a plug-bro.png';

const CustomErrorLayout = () => {
    return (
        <div className={"error"}>
            <img src={error} alt="Error"/>
            <h1>ERROR 404</h1>
        </div>
    );
};

export default CustomErrorLayout;