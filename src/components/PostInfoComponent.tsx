import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    post?: IPost
}
const PostInfoComponent : FC<IProps> = ({post}) => {
    return (
        <div>
            <h3>User id: {post?.userId} </h3>
            <h2>Post id: {post?.id}</h2>
            <hr/>
            <h3>Post title: {post?.title} </h3>
            <p>Post body: {post?.body}</p>
        </div>
    );
};

export default PostInfoComponent;