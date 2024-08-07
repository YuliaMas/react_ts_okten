import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postAction} from "../../redux/slices/postSlice";

const PostPage = () => {
    let {id} = useParams();
    let dispatch = useAppDispatch();
    let post = useAppSelector(state => state.postStore.post);

    useEffect(() => {
       if (id) dispatch(postAction.loadPost(+id));
    }, [id]);

    return (
        <div>
            <h2>Post - {post?.id}</h2>
            <ul>
                <li>UserId: {post?.userId}</li>
                <li>Title: {post?.title}</li>
                <li>Body: {post?.body}</li>
            </ul>
        </div>
    );
};

export default PostPage;