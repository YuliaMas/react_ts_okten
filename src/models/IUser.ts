import React from "react";
import {IPost} from "./IPost";

export interface IUser {
    firstName: string,
    lastName: string,
    id: number,
    username: string,
    email: string,
    children?: React.ReactNode,
    handleClick: (id: number)=>void
}

export interface StateType {
    users: IUser[],
    posts: IPost[]
}