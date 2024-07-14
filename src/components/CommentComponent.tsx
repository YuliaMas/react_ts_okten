import React, {FC} from 'react';
import {IComment} from "../models/IComment";

interface IProps {
    comment: IComment;
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <h2>PostId: {comment.postId}</h2>
            <h2>Id: {comment.id} name: {comment.name}</h2>
            <h3>Email: {comment.email}</h3>
            <h3>Body: {comment.body}</h3>
        </div>
    );
};

export default CommentComponent;