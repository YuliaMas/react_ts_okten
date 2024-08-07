import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import PostComponent from "../post/PostComponent";

interface IProps {
    posts: IPost[]
}
const PostsComponent:FC <IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => (
                    // <li key={post.id}>{post.id}  {post.title}</li>
                        <PostComponent key={post.id} post={post}/>
    )
)
}
</div>
    );
};

export default PostsComponent;