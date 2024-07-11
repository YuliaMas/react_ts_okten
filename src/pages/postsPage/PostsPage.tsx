import React, {useEffect, useState} from 'react';
import "./PostsPage.css";
import IPost from "../../models/post.model";
import {getPosts} from "../../services/api.service";
import PostsComponent from "../../component/posts/PostsComponent";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts().then(value => {
            console.log(value.data);
            setPosts(value.data);
        })
    }, []);
    return (
        <div className={`${"homepage"} ${"posts-page"}`}>
            <h2>Posts Page</h2>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;