import React, {FC} from "react";
import {IPost} from "../models/IPost";

const Post: FC<IPost> = ({id, title, body}) => {
    return (
        <div>
            {/*<h3>User: {userId}</h3>*/}
            <p>Post id: {id}</p>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Post;