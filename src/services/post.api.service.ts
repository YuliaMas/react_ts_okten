import axios  from "axios";
// import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {'Content-Type': 'application/json'},
})

// const getPosts = (userId:number): Promise<AxiosResponse<IPost[]>> => {
const getPosts = async (userId:number) => {
    console.log(userId);
    // return axiosInstance.get("/users/" + userId + "/posts")
    return await axiosInstance.get("/posts/user/" + userId);
}

// const getPostsByUserId = (id:number): Promise<AxiosResponse<IPost[]>> => {
//     console.log(id);
//     return axiosInstance.get("/posts?/user/" + id)
//     // return axiosInstance.get("/posts/user/" + id)
// }

export {
    getPosts,
    // getPostsByUserId
}