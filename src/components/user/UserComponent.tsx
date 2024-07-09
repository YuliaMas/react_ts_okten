import {Component} from "react";
import {IUser} from "../../models/IUser";
import  "./userComponent.css";

class UserComponent extends Component<IUser, {}> {
    render() {
        return (
            <div className={"userComponent"}>
                <div>
                    <h3>{this.props.id}</h3>
                    <h3>{this.props.firstName} {this.props.lastName}</h3>
                    <p><strong>username: </strong> {this.props.username}</p>
                    <p><strong>email: </strong>{this.props.email}</p>
                </div>
                <button onClick={()=>{this.props.handleClick(this.props.id)}}>Posts</button>
            </div>
        )
        }
    }


    export default UserComponent;
