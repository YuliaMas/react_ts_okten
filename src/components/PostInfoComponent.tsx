import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    post: IPost
}
const PostInfoComponent : FC<IProps> = ({post}) => {
    if(!post) {return <p>Error</p>}
    return (
        <div>
            {Boolean(post.userId) && <h3>User id: {post.userId} </h3>}
            {Boolean(post.id) && <h2>Post id: {post.id}</h2>}
            <hr/>
            {Boolean(post.title) && <h3>Post title: {post.title} </h3>}
            {Boolean(post.body) && <p>Post body: {post.body}</p>}
        </div>
    );
};

export default PostInfoComponent;