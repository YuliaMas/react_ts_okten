import React, {FC} from 'react';
import {IComment} from "../models/IComment";
import CommentOfPostComponent from "./CommentOfPostComponent";

interface IProps {
    comments: IComment[];
}
const CommentsOfPostComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment => (
                    <CommentOfPostComponent  key={comment.id} comment={comment}/>
                ))
            }

        </div>
    );
};

export default CommentsOfPostComponent;