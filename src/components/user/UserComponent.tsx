import React, {FC} from 'react';
import {IUser} from "../../models/IUserl";
import {Link} from "react-router-dom";

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            {/*<li>{user.id}  {user.name}</li>*/}
            {<Link to={'/users/' + user.id}>{user.id} {user.name}</Link>}
        </div>
    );
};

export default UserComponent;