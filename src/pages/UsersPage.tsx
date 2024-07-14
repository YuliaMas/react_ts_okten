import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {getAllUsers} from "../services/api.service";
import UsersComponent from "../components/UsersComponent";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAllUsers().then(value => setUsers(value));
    }, []);
    return (
        <div  className={"main"}>
            <h1>Users Page</h1>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;