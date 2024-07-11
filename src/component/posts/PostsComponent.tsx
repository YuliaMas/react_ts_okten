import React, {FC} from 'react';
import {IPostsProps} from "../../models/post.model";
import PostComponent from "../post/PostComponent";

const PostsComponent: FC<IPostsProps> = ({posts}) => {
    return (
        <div className={"posts"}>
            {
                posts.map(post => (
                    <PostComponent key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body}/>
                ))
            }
        </div>
    );
};

export default PostsComponent;