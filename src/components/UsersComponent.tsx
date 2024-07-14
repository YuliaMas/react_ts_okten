import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import UserComponent from "./user/UserComponent";

interface IProps {
    users: IUser[];
}
const UsersComponent: FC <IProps> = ({users}) => {
    return (
        <div>
            {
                users.map(user => (
                    <UserComponent user={user} key={user.id}/>
                ))
            }
        </div>
    );
};

export default UsersComponent;