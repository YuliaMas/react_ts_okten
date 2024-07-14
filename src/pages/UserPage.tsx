import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IUser} from "../models/IUser";
import {useAppLocation} from "../hook/useAppLocation";
import UserInfoComponent from "../components/UserInfoComponent";

const UserPage= () => {
    let navigate = useNavigate();
    let {id} = useParams();
    let location = useAppLocation();
    let state: IUser =  location.state;

    console.log(location);
    console.log(id);
    console.log(state);

    return (
        <div className={"main"}>
            <h1>User Page</h1>
            <UserInfoComponent key={state.id} state={state}/>
            <button onClick={() => navigate("posts" ,{state: {state}})}>  Posts UserId: {state.id}</button>
        </div>
    );
};

export default UserPage;