import React, {FC} from 'react';
import {IComment} from "../models/IComment";

interface IProps {
    comment?: IComment;
}
const CommentByIdComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <h2>ID: {comment?.id}. {comment?.name}</h2>
            <h3>POST ID : {comment?.postId}</h3>
            <h3>BODY: {comment?.body}</h3>
            <h3>EMAIL: {comment?.email}</h3>
        </div>
    );
};

export default CommentByIdComponent;