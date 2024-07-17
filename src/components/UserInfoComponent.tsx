import React, {FC} from 'react';
import {IUser} from "../models/IUser";

interface IProps  {
    state: IUser,
}
const UserInfoComponent: FC<IProps> = ({state}) => {
    if(!state) {
        return <p>Error</p>
    }
    return (
        <div>
            {Boolean(state.id) && <h2>Id: {state.id} {state.username}</h2>}
            {Boolean(state.name) && <h3>Name: {state.name}</h3>}
            {Boolean(state?.phone) && <h3>Phone: {state?.phone}</h3>}
            {Boolean(state.email) && <h3>Email: {state.email}</h3>}
            {Boolean(state.website) && <h3>Website: {state.website}</h3>}
            {Boolean(state.company?.name) && <h3>Company: {state.company?.name}</h3>}
            {Boolean(state.address?.zipcode && state.address?.city) && <h3>City: {state.address?.city} {state.address?.zipcode}</h3>}
            {Boolean(state.address?.street && state.address?.suite) && <h3>Street: {state.address?.street} {state.address?.suite}</h3>}
        </div>
    );
};

export default UserInfoComponent;