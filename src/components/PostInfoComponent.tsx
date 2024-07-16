import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    state: IPost
}
const PostInfoComponent : FC<IProps> = ({state}) => {
    return (
        <div>
            <h3>User id: {state.userId} </h3>
            <h2>Post id: {state.id}</h2>
            <hr/>
            <h3>Post title: {state.title} </h3>
            <p>Post body: {state.body}</p>
        </div>
    );
};

export default PostInfoComponent;