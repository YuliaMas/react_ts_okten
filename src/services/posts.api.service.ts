import axios from "axios";
import {baseUrl, urls} from "../constance/urls";
import {StatePostType} from "../models/IPost";

let axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {'Context-Type' : 'application/json'}
})

const postService = {
   getAll: async (id:number) => {
       let [axiosResponse] =  await Promise.all([axiosInstance.get<StatePostType>(urls.userUrls.userPosts(id))]);
       console.log(axiosResponse.data.posts);
       return axiosResponse.data.posts;
   }
}

export {postService};