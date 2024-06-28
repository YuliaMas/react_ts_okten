import React, {FC, useEffect, useState} from "react";
import {User} from "./User";
import {IUser} from "../models/IUser";
const Users:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then((value)=> {
                console.log(value.users);
                setUsers(value.users);
            })
    }, []);
    console.log(users);
    users.map(user=>console.log(user));
    return(
        <ul>
            {
                users.map((user) => (
                        <User  key={user.id} id={user.id} firstName={user.firstName} lastName={user.lastName} gender={user.gender}/>
                ))
            }
        </ul>
    )
}
export {Users};