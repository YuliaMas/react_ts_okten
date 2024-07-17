import React, {useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {getCommentById} from "../services/api.service";
import {useParams} from "react-router-dom";
import CommentByIdComponent from "../components/CommentByIdComponent";

const CommentPage = () => {
    let {id} = useParams();
    const [comment, setComment] = useState<IComment>();
    useEffect(() => {
        if(id) {
            getCommentById(id).then(value => setComment(value));
        }
    }, [id]);
    return (
        <div className={"main"}>
            <h1>Comment Page</h1>
            {comment && <CommentByIdComponent comment={comment}/>}
        </div>
    );
};

export default CommentPage;