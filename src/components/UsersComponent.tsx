import React, {Component} from "react";
import {StateType} from "../models/IUser";
import {userService} from "../services/users.api.service";
import UserComponent from "./UserComponent";
import {postService} from "../services/posts.api.service";

class UsersComponent extends Component<{}, StateType> {
    constructor(props:StateType) {
        super(props);
        this.state = {
            users: [],
            posts: []
        };
    }
    // state : StateType = {
    //     users : [],
    //     posts: [],
    // };
    // statePosts : StatePostsType = {
    //     posts : []
    // };

    componentDidMount() {
       userService.getAll().then(value => this.setState({...this.state, users: value}));
    }

    handleClick = (id: number) => {
        console.log(id);
        postService && postService.getAll(id).then(value =>{
            console.log(value);
            this.setState({...this.state, posts: value});
            console.log(this.state)
        })
    }
    render() {
        console.log(this.state.users);
        console.log(this.state.posts);
        return (
            <div>
                {this.state.users.map(user =>
                    <UserComponent key={user.id} id={user.id} firstName={user.firstName} lastName={user.lastName}
                                   username={user.username} email={user.email} handleClick={()=>this.handleClick(user.id)}/>
                )}
                <div>
                    <ul>
                        {
                            this.state.posts.map(post =>
                                <li key={post.id}> {post.id} {post.body}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default UsersComponent;

