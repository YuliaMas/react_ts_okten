import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPost} from "../models/IPost";
import {useAppLocation} from "../hook/useAppLocation";
import {getPostsOfUser} from "../services/api.service";
import PostsOfUserComponent from "../components/PostsOfUserComponent";

const PostsOfUserPage = () => {
    let {id} = useParams();
    let location = useAppLocation();
    let state: IPost[] = location.state;

    console.log(state);
    console.log(id);

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if(id) {
            getPostsOfUser(id).then(value => setPosts(value));
        }
    }, [id]);

    return (
        <div className={"main"}>
            <h1>Posts of User Page</h1>
            {
                posts.map(post => (
                    <PostsOfUserComponent key={post.id} post={post}/>
                ))}
        </div>
    );
};

export default PostsOfUserPage;