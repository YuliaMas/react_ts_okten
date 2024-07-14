import React from 'react';
import {useParams} from "react-router-dom";
import {useAppLocation} from "../hook/useAppLocation";
import {IPost} from "../models/IPost";
import PostInfoComponent from "../components/PostInfoComponent";

const PostPage = () => {
    let {id} = useParams();
    let location = useAppLocation();
    let state: IPost =  location.state;

    console.log(location);
    console.log(id);
    console.log(state);

    return (
        <div className={"main"}>
            <h1>Post Page</h1>
            <PostInfoComponent  key={state.id} state={state}/>
        </div>
    );
};

export default PostPage;