import React, {FC} from 'react';
import {IComment} from "../models/IComment";
import {Link} from "react-router-dom";

interface IProps {
    comment: IComment;
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <h2>PostId: {comment.postId}</h2>
            <Link to={"/comments/" + comment.id} state={comment}><h2>Id: {comment.id} name: {comment.name}</h2></Link>
            <h3>Email: {comment.email}</h3>
            <h3>Body: {comment.body}</h3>
            <hr/>
        </div>
    );
};

export default CommentComponent;