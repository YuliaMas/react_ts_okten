import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import "./userComponent.css"
import {Link} from "react-router-dom";
interface IProps {
    user: IUser;
}
const UserComponent: FC<IProps>  = ({user}) => {
    return (
        <div className={"users-grid"}>
            <Link to={user.id.toString()} state={user}>
                <h2>Id: {user.id}  -   {user.username}</h2>
                <h3>email: {user.email}</h3>
            </Link>
        </div>
    );
};

export default UserComponent ;