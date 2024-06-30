import React, {FC, useEffect, useState} from "react";
import {User} from "./User";
import {IUser} from "../models/IUser";
import {getUsers} from "../services/user.api.service";
import Posts from "./posts/Posts";
import {IPost} from "../models/IPost";
import {getPosts} from "../services/post.api.service";

const Users :FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [userId, setUserId] = useState<number>(0);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
       getUsers().then(response => {
           // const {users} = response.data;
           // setUsers([...users]);
           setUsers(response.data.users);
            })
    }, []);

    useEffect(() => {
        if (userId !==0)
        getPosts(userId).then((response) => {
            // console.log(response.data.posts);
            const  {posts} = response.data;
            // console.log({posts});
            // console.log([...posts]);
            setPosts([...posts]);
        })
        .catch((err) => console.error(err));
    }, [userId]);

    const clickHandler= (id:number) => {
        setUserId(id);
    }

    return(
        <ul>
            {
                users.map(({id, firstName, lastName, gender}) => (
                        <User  key={id} id={id} firstName={firstName} lastName={lastName} gender={gender} clickHandler={clickHandler}/>
                ))
            }
            <p>{userId}</p>
            <div>
                <Posts key={userId} posts={posts}></Posts>
            </div>
        </ul>
    )
}
export {Users};