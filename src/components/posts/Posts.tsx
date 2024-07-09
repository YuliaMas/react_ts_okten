import React, {Component} from 'react';
import {IPost} from "../../models/IPost";

class Posts extends Component<IPost> {
    render() {
        return (
            <li>
                <h3>{this.props.userId}</h3>
                <h2>{this.props.title}</h2>
                <p><strong>{this.props.id} : </strong>{this.props.body}</p>
            </li>
        );
    }
}

export default Posts;