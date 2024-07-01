import React,  {FC , ReactNode} from "react";
import {IPost} from "../../models/IPost";
import Post from "../post-component/Post";

type IProps = {posts: IPost[] } & {children?: ReactNode};
const Posts: FC<IProps> = ({posts}) => {
    // console.log(posts);
    return (
        <>
            {
                posts.map((post) => (
                    <Post key={post.id} id={post.id} title={post.title} userId={post.userId} body={post.body}  />
                ))
            }

        </>
    );
}

export default Posts;