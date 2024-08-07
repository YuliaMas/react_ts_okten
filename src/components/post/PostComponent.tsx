import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import {Link} from "react-router-dom";

interface IProps {
    post: IPost;
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            {/*<h5>UserId: {post.userId}</h5>*/}
            <Link to={'/posts/' + post.id}><h4>{post.id} {post.title}</h4></Link>
            {/*<p>{post.body}</p>*/}
        </div>
    );
};

export default PostComponent;