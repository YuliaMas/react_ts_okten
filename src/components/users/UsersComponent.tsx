import React, {FC} from 'react';
import {IUser} from "../../models/IUserl";
import UserComponent from "../user/UserComponent";

interface IProps {
    users: IUser[];
}
const UsersComponent:FC<IProps> = ({users}) => {
    return (
        <div>
            <ul>
                {
                    users.map(user => (
                        <UserComponent user={user} key={user.id}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersComponent;