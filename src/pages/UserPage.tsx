import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IUser} from "../models/IUser";
import {useAppLocation} from "../hook/useAppLocation";
import UserInfoComponent from "../components/UserInfoComponent";
import {getUserById} from "../services/api.service";

const UserPage= () => {
    let navigate = useNavigate();
    let {id} = useParams();
    console.log(id);
    let location = useAppLocation();
    let state: IUser =  location.state;
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        if(id) {
            getUserById(id).then(value => {
                console.log(value);
                setUser(value);
            })
        }
    }, [id]);
    console.log(location);
    console.log(id);
    console.log(state);

    return (
        <div className={"main"}>
            <h1>User Page</h1>
            <UserInfoComponent key={id} state={user}/>
            {/*<UserInfoComponent key={state.id} state={state}/>*/}
            <button onClick={() => navigate("posts" ,{state: {user}})}>  Posts UserId: {id}</button>
            {/*<button onClick={() => navigate("posts" ,{state: {state}})}>  Posts UserId: {state.id}</button>*/}
        </div>
    );
};

export default UserPage;