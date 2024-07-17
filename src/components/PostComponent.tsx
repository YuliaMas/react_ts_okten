import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Link} from "react-router-dom";
interface IProps {
    post: IPost;
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            {/*<h2>User id: {post.userId}</h2>*/}
            <Link to={post.id.toString()} state={post}>
                <h2>  Post id : {post.id}. {post.title} </h2>
            </Link>

            <Link to={post.id.toString() + "/comments"} state={post}>
                    Comments...
            </Link>
            <hr/>
        </div>
    );
};

export default PostComponent;