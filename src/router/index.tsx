import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/errors/ErrorPage";
import HomePage from "../pages/home/HomePage";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import UserPage from "../pages/user/UserPage";
import SortedUsersPage from "../pages/sorted/SortedUsersPage";
import PostPage from "../pages/post/PostPage";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/:id', element: <PostPage/>},
            {path: 'users/sort', element: <SortedUsersPage/>},
        ]
    }
]);