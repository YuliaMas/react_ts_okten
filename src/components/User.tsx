import React, {FC, ReactNode} from "react";
import {IUser} from "../models/IUser";

type UserModel<T> = T & {children?: ReactNode} & { clickHandler: (id: number) => void };
const User: FC<UserModel<IUser>> = ({id, firstName, lastName, gender, clickHandler}) => {

    return (
        <li>
            {id} : {firstName} - {lastName} --- {gender}
            <button onClick={()=> {clickHandler(id)}}>Posts</button>
        </li>
    )
}

export {User};