import React, {FC} from 'react';
import {IUser} from "../models/IUser";

interface IProps  {
    state: IUser,
}
const UserInfoComponent: FC<IProps> = ({state}) => {
    return (
        <div>
            <h2>Id: {state.id} {state.username}</h2>
            <h3>Name: {state.name}</h3>
            <h3>Phone: {state.phone}</h3>
            <h3>Email: {state.email}</h3>
            <h3>Website: {state.website}</h3>
            <h3>Company: {state.company?.name}</h3>
            <h3>City: {state.address?.city} {state.address?.zipcode}</h3>
            <h3>Street: {state.address?.street} {state.address?.suite}</h3>
        </div>
    );
};

export default UserInfoComponent;