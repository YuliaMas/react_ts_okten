import React, {FC} from "react";
import {IUser} from "../models/IUser";

const User: FC<IUser> = ({id, firstName, lastName, gender}) => {
    return (
        <li>
            {id} : {firstName} - {lastName} --- {gender}
        </li>
    )
}

export {User};