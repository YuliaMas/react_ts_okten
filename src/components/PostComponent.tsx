import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Link} from "react-router-dom";
interface IProps {
    post: IPost;
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <Link to={post.id.toString()} state={post}>
                <h2>User id: {post.userId} -- Post id: {post.id}</h2>
            </Link>
            <h2>Post title: {post.title}</h2>
            {/*<h3>Body: {post.body}</h3>*/}
            <Link to={post.id.toString() + "/comments"} state={post}>
                Comments...
            </Link>
            <hr/>
        </div>
    );
};

export default PostComponent;