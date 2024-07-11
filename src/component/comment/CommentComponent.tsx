import React, {FC} from 'react';
import {IComment} from "../../models/comment.model";

const CommentComponent:FC<IComment> = ({postId, id, name, email, body}) => {
    return (
        <div>
            <h2>Id: {id} -- Post id: {postId} </h2>
            <h2>Name: {name}  email: {email}</h2>
            <p>Body: {body}</p>
        </div>
    );
};

export default CommentComponent;