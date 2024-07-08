import {Component} from "react";
import {IUser} from "../models/IUser";
// import {postService} from "../services/posts.api.service";

class UserComponent extends Component<IUser, {}> {
   // handleClick= ()=> {
   //     console.log(this.props.id);
   //     postService && postService.getAll(this.props.id).then(value => this.setState({posts:value}));
   //  // {posts: value}));
   //  console.log(this.state);
   //  }
    render() {
        // console.log(this.state);
        return (
            <div>
                <ul>
                    <li>{this.props.id}</li>
                    <li>{this.props.firstName}</li>
                    <li>{this.props.lastName}</li>
                    <li>{this.props.username}</li>
                    <li>{this.props.email}</li>
                </ul>
                <button onClick={()=>{this.props.handleClick(this.props.id)}}>Posts</button>
            </div>
        )
        }
    }


    export default UserComponent;
