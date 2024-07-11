import React, {FC} from 'react';
import IPost from "../../models/post.model";

const PostComponent:FC<IPost> = ({id, userId, title, body}) => {
    return (
        <div>
            <h1>User Id: {userId}</h1>
            <h3>Id: {id}</h3>
            <h2>Title: {title}</h2>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostComponent;