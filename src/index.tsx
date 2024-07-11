import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/usersPage/UsersPage";
import PostsPage from "./pages/postsPage/PostsPage";
import CommentsPage from "./pages/commentsPage/CommentsPage";
import CustomErrorLayout from "./layouts/customError/CustomErrorLayout";
import HomePage from "./pages/homePage/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/> ,
        errorElement: <CustomErrorLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
        ]}
])

root.render(
    <RouterProvider router={router} />
);
