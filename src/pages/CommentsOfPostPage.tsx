import React, {useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {getCommentsOfPost} from "../services/api.service";
import {useParams} from "react-router-dom";
import CommentsOfPostComponent from "../components/CommentsOfPostComponent";

const CommentsOfPostPage = () => {
    let {id} = useParams();
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        if (id) {
            getCommentsOfPost(id).then(value => setComments(value));
        }
    }, [id]);

    return (
        <div className={"main"}>
            <h1>Comments of Post Page</h1>
            <CommentsOfPostComponent comments={comments}/>
        </div>
    );
};

export default CommentsOfPostPage;