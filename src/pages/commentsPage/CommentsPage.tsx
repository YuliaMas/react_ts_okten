import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/comment.model";
import {getComments} from "../../services/api.service";
import CommentsComponent from "../../component/comments/CommentsComponent";
import "./CommentsPage.css";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments().then(value => {
            console.log(value.data);
            setComments(value.data);
        })
    }, []);
    return (
        <div className={`${"homepage"} ${"comments-page"}`}>
           <h1>Comments Page</h1>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;