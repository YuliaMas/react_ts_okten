import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {IPost} from "../models/IPost";
import PostInfoComponent from "../components/PostInfoComponent";
import {getPostById} from "../services/api.service";

const PostPage = () => {
    let {id} = useParams();
        const [post, setPost] = useState<IPost>();
        useEffect(() => {
            if (id) {
                getPostById(id.toString()).then(value => setPost(value));
            }
        }, [id]);

    return (
        <div className={"main"}>
            <h1>Post Page</h1>
            <PostInfoComponent key={id} post={post}/>
            <Link to={"/posts/" + id + "/comments"} state={post} className={"post-link"}>
                Comments...
            </Link>
        </div>
    );
};

export default PostPage;