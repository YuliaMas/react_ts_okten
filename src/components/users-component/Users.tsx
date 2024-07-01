import React, {FC, useEffect, useState} from "react";
import {User} from "../user-component/User";
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/user.api.service";
import Posts from "../posts-component/Posts";
import {IPost} from "../../models/IPost";
import {getPosts} from "../../services/post.api.service";
import './users-component.css';

const Users :FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [userId, setUserId] = useState<number>(0);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
       getUsers().then(response => setUsers(response.data.users))
    }, []);

    useEffect(() => {
        if (userId !==0)
        getPosts(userId).then((response) => {
            const  {posts} = response.data;
            setPosts([...posts]);
        })
        .catch((err) => console.error(err));
    }, [userId]);

    const clickHandler= (id:number) => {
        setUserId(id);
    }

    return(
        <div id="users">
            <ul>
                {
                    users.map(({id, firstName, lastName, gender}) => (
                        <User key={id} id={id} firstName={firstName} lastName={lastName} gender={gender}
                              clickHandler={clickHandler}/>
                    ))
                }
            </ul>
            <div id="posts">
                <h3>User: {userId}</h3>
                <Posts key={userId} posts={posts}></Posts>
            </div>
        </div>
    )
}
export {Users};