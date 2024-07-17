import axios from "axios";
import {baseUrl, urls} from "../urls/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

const  getAllUsers = async (): Promise<IUser[]> => {
        let axiosResponse = await axiosInstance.get<IUser[]>(urls.users.all);
        return axiosResponse.data;
};

const  getUserById = async (id:string): Promise<IUser> => {
        let axiosResponse = await axiosInstance.get<IUser>(urls.users.oneById(id));
        return axiosResponse.data;
};

const getPostsOfUser = async (id: string):Promise<IPost[]> => {
    let axiosResponse = await axiosInstance.get<IPost[]>(urls.users.userPosts(id));
    return axiosResponse.data;
}

const  getAllPosts = async (): Promise<IPost[]> => {
        let axiosResponse = await axiosInstance.get<IPost[]>(urls.posts.all);
        return axiosResponse.data;
};

const getPostById = async (id: string): Promise<IPost> => {
    let axiosResponse = await axiosInstance.get<IPost>(urls.posts.oneById(id));
    return axiosResponse.data;
};

const getCommentsOfPost = async (id: string):Promise<IComment[]> => {
    let axiosResponse = await axiosInstance.get<IComment[]>(urls.posts.postComments(id));
    return axiosResponse.data;
}

const getCommentById = async (id: string):Promise<IComment> => {
    let axiosResponse = await axiosInstance.get<IComment>(urls.comments.oneById(id));
    return axiosResponse.data;
}

const  getAllComments = async (): Promise<IComment[]> => {
        let axiosResponse = await axiosInstance.get<IComment[]>(urls.comments.all);
        return axiosResponse.data;
};
export {
    getAllPosts,
    getAllUsers,
    getAllComments,
    getPostsOfUser,
    getCommentsOfPost,
    getPostById,
    getUserById,
    getCommentById
}