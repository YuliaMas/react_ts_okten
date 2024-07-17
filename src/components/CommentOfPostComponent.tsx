import React, {FC} from 'react';
import {IComment} from "../models/IComment";

interface IProps {
    comment : IComment;
}
const CommentOfPostComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <h2>Id: {comment.id} PostId: {comment.postId}</h2>
            <h3>Name: {comment.name}</h3>
            <h4>Body: {comment.body}</h4>
            <h4>Email: {comment.email}</h4>
            <hr/>
        </div>
    );
};

export default CommentOfPostComponent;