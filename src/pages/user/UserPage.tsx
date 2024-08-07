import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useParams} from "react-router-dom";
import {userAction} from "../../redux/slices/userSlice";

const UserPage = () => {
    let {id} = useParams();
    let dispatch = useAppDispatch();
    let user = useAppSelector(state => state.userStore.user);

    useEffect(() => {
        if (id) dispatch(userAction.loadUser(+id));
    }, [id]);

    return (
        <div>
            <h2>User - {user?.id}</h2>
            <ul>
            <li>id: {user?.id}</li>
                <li>name: {user?.name}</li>
                <li>email: {user?.email}</li>
            </ul>
        </div>
    );
};

export default UserPage;