import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IUser} from "../models/IUser";
// import {useAppLocation} from "../hook/useAppLocation";
import UserInfoComponent from "../components/UserInfoComponent";
import {getUserById} from "../services/api.service";
// import ErrorLayout from "../layouts/error/ErrorLayout";

const UserPage= () => {
    let navigate = useNavigate();
    let {id} = useParams();
    // let location = useAppLocation();
    // let state: IUser =  location.state;
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        if(id) {
            getUserById(id).then(value => {
                setUser(value);
            })
        }
    }, [id]);

    return (
        <div className={"main"}>
            <h1>User Page</h1>
            {user && id && <UserInfoComponent key={id} state={user}/>}
            {user && id && <button onClick={() => navigate("posts" ,{state: {user}})}>  Posts UserId: {id}</button>}
            {/*<button onClick={() => navigate("posts" ,{state: {state}})}>  Posts UserId: {id}</button>*/}
            {/*{!user && <ErrorLayout/>}*/}
        </div>
    );
};
export default UserPage;