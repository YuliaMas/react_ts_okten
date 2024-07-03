import axios, {AxiosResponse} from "axios";
import {IUserArray} from "../models/IUsers";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {'Content-Type':'application/json'},
})


const getUsers = async (): Promise<AxiosResponse<IUserArray>> => {
    return await axiosInstance.get('/users',  {
      params: {
                limit: 0,
             skip:0
      }
    })
}

export {getUsers};