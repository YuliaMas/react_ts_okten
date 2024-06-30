import React, {FC} from "react";
import {IPost} from "../models/IPost";

const Post: FC<IPost> = ({id, userId , title, body}) => {
    return (
        <div>
            <p>{userId}</p>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

export default Post;