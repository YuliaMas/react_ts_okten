import React from 'react';
import './ErrorLayout.css';
// @ts-ignore
import error from "../../images/img.png";

const ErrorLayout = () => {
    return (
        <div className={"main" + " " + "error"}>
            <img src={error} alt="Error"/>
            <h1>ERROR 404</h1>
        </div>
    );
};

export default ErrorLayout;