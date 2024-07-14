import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    post: IPost;
}
const PostsOfUserComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <h3>Id: {post.id}</h3>
            <h4>UserId: {post.userId}</h4>
            <h3>Name: {post.title}</h3>
            <h3>Body: {post.body}</h3>
            <hr/>
        </div>
    );
};

export default PostsOfUserComponent;