import React from "react";

export interface StatePostType {
    posts: IPost[]
}

export interface IPost {
    body: string,
    title: string,
    id: number,
    userId: number,
    children?: React.ReactNode,
    // handleClick: (id: number)=>void
}