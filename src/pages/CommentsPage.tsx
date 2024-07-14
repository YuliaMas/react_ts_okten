import React, {useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {getAllComments} from "../services/api.service";
import CommentsComponent from "../components/CommentsComponent";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getAllComments().then(value => setComments(value));
    }, []);
    return (
        <div  className={"main"}>
            <h1>Comments Page</h1>
            <CommentsComponent comments={comments} />
        </div>
    );
};

export default CommentsPage;