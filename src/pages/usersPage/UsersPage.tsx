import React, {useEffect, useState} from 'react';
import UsersComponent from "../../component/users/UsersComponent";
import {IUser} from "../../models/user.model";
import {getUsers} from "../../services/api.service";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers().then(value => {
                console.log(value.data);
                setUsers(value.data);
            }
        );
    },[]);

    return (
        <div className={"homepage"}>
              <h1>Users Page</h1>
              <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;