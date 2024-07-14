import React from 'react';
import {NavLink} from "react-router-dom";
import "./menuComponent.css";
const MenuComponent = () => {
    return (
        <div>
            <ul className={'menu'}>
                <li><NavLink to={''} className={({isActive, isPending}) =>
                      isPending ? 'pending' : isActive ? 'active' : 'pending'}
                >Home Page</NavLink></li>
                <li><NavLink to={'users'} className={({isActive, isPending}) =>
                      isPending ? 'pending' : isActive ? 'active' : 'pending'}
                >Users Page</NavLink></li>
                <li><NavLink to={'posts'} className={({isActive, isPending}) =>
                      isPending ? 'pending' : isActive ? 'active' : 'pending'}
                >Posts Page</NavLink></li>
                <li><NavLink to={'comments'} className={({isActive, isPending}) =>
                      isPending ? 'pending' : isActive ? 'active' : 'pending'}>Comments Page</NavLink></li>
            </ul>
        </div>
    );
};

export default MenuComponent;