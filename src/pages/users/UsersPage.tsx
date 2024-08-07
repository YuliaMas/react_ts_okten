import React, {useEffect} from 'react';
import {userAction} from "../../redux/slices/userSlice";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import UsersComponent from "../../components/users/UsersComponent";

const UsersPage = () => {
    let dispatch = useAppDispatch();

    let {users, isLoaded, error} = useAppSelector(state => state.userStore);

    useEffect(() => {
        dispatch(userAction.loadUsers()); //load users
    }, []);

    return (
        <div>
            <p>{isLoaded}</p>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;