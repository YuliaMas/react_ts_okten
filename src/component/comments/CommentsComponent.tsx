import React, {FC} from 'react';
import {ICommentsProps} from "../../models/comment.model";
import CommentComponent from "../comment/CommentComponent";

const CommentsComponent:FC<ICommentsProps> = ({comments}) => {
    return (
        <div className={"comments"}>
            {
                comments.map(comment => (
                     <CommentComponent key={comment.id} id={comment.id} postId={comment.postId} name={comment.name}
                                       email={comment.email} body={comment.body}/>
                    )
                )
            }
        </div>
    );
};

export default CommentsComponent;