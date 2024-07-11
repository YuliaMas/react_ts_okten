import axios, {AxiosResponse} from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IUser} from "../models/user.model";
import IPost from "../models/post.model";
import {IComment} from "../models/comment.model";

const axiosInstance = axios.create({
    baseURL : baseUrl,
    headers: {"Content-Type" : "application/json"}
})

const getUsers = async (): Promise<AxiosResponse<IUser[]>> => {
    return  await axiosInstance.get(urls.users.base);
}

const getPosts = async ():Promise<AxiosResponse<IPost[]>> => {
    return await axiosInstance.get(urls.posts.base);
}

const getComments = async ():Promise<AxiosResponse<IComment[]>> => {
    return await axiosInstance.get(urls.comments.base);
}
export {getUsers, getPosts, getComments};
