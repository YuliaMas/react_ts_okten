import React, {Component} from "react";
import {StateType} from "../../models/IUser";
import {userService} from "../../services/users.api.service";
import UserComponent from "../user/UserComponent";
import {postService} from "../../services/posts.api.service";
import Posts from "../posts/Posts";
import "./usersComponent.css";

class UsersComponent extends Component<{}, StateType> {
    constructor(props:StateType) {
        super(props);
        this.state = {
            users: [],
            posts: []
        };
    }

    componentDidMount() {
       userService.getAll().then(value => this.setState({...this.state, users: value}));
    }

    handleClick = (id: number) => {
        console.log(id);
        postService && postService.getAll(id).then(value =>{
            this.setState({...this.state, posts: value});
            console.log(this.state)
        })
    }
    render() {
        console.log(this.state.users);
        console.log(this.state.posts);
        return (
            <div className={"usersComponent-container"}>
                <div className={"usersComponent"}>
                    {this.state.users.map(user =>
                        <UserComponent key={user.id} id={user.id} firstName={user.firstName} lastName={user.lastName}
                                       username={user.username} email={user.email}
                                       handleClick={() => this.handleClick(user.id)}/>
                    )}
                </div>
                <div className={"posts"}>
                    <h1>Posts</h1>
                    <ul>
                        {
                            this.state.posts.map(post =>
                                <Posts key={post.id} id={post.id} body={post.body} title={post.title}
                                       userId={post.userId}/>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default UsersComponent;

