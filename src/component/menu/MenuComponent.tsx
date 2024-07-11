import React from "react";
import {Link} from "react-router-dom";
import "./MenuComponent.css";

const MenuComponent = () => {
    return (
        <div>
            <ul className={"menu"}>
                <li className={"homeLi"}><Link to={''}>home</Link></li>
                <li  className={"userLi"}><Link to={'users'}>users page</Link></li>
                <li  className={"postLi"}><Link to={'posts'}>posts page</Link></li>
                <li  className={"commentLi"}><Link to={'comments'}>comments page</Link></li>
            </ul>
        </div>
    );
}

export default MenuComponent;