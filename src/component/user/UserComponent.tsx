import React, {FC} from 'react';
import {IUser}from "../../models/user.model";
import "./UserComponent.css";

const UserComponent:FC<IUser> = ({id, email,username, name, phone}) => {
    return (
            <ul className={"dataUser"}>
                <h2>{id} . {username}</h2>
                <h3>{name} </h3>
                <p>{phone} <br/>
                    {email}</p>
            </ul>
    );
};

export default UserComponent;