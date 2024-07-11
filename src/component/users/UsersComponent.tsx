import React, {FC} from 'react';
import {IUsersProps} from "../../models/user.model";
import UserComponent from "../user/UserComponent";

const UsersComponent: FC<IUsersProps> = ({users}) => {
    return (
        <div>
            {
                users.map((user) => (
                    <UserComponent key={user.id} id={user.id} name={user.name} username={user.username}
                                   phone={user.phone} email={user.email}/>))
            }
        </div>
    );
};

export default UsersComponent;