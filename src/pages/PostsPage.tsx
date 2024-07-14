import React, {useEffect, useState} from 'react';
import {IPost} from "../models/IPost";
import {getAllPosts} from "../services/api.service";
import PostsComponent from "../components/PostsComponent";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAllPosts().then(value => setPosts(value));
    }, []);
    return (
        <div className={"main"}>
            <h1>Posts Page</h1>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;