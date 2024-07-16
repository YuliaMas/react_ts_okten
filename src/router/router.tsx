import {createBrowserRouter} from "react-router-dom";
import ErrorLayout from "../layouts/error/ErrorLayout";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import UserPage from "../pages/UserPage";
// import PostPage from "../pages/PostsOfUserPage";
import PostsOfUserPage from "../pages/PostsOfUserPage";
import CommentsOfPostPage from "../pages/CommentsOfPostPage";
import PostPage from "../pages/PostPage";


const routes = [{
    path: '/', element: <MainLayout/>,
    errorElement: <ErrorLayout/>,
    children: [
        {index: true, element: <HomePage/>},
        {path: '/users', element: <UsersPage/>},
        {path: '/users/:id', element: <UserPage/>},
        {path: '/posts', element: <PostsPage/>},
        {path: '/posts/:id', element: <PostPage/>},
        {path: '/users/:id/posts', element: <PostsOfUserPage/>},
        {path: '/comments', element: <CommentsPage/>},
        {path: '/posts/:id/comments', element: <CommentsOfPostPage/>},
    ]
}]

    export const router = createBrowserRouter(routes);