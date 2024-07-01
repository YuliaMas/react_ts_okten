import axios, {AxiosResponse} from "axios";
import {IPostResponse} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {'Content-Type': 'application/json'},
})

const getPosts = async (userId:number): Promise<AxiosResponse<IPostResponse>> => {
    return await axiosInstance.get("/posts/user/" + userId);
}

export {
    getPosts
}