import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";

// const baseUrl = 'https://dummyjson.com/users';
// const getUsers = (): Promise<IUser[]> => {
// return  fetch(baseUrl)
//      .then(response => response.json())

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {'Content-Type': 'application/json'},
})

const getUsers = async (): Promise<AxiosResponse<IUser>> => {
    return  await axiosInstance.get('/users',{
        params:{
            limit: 0
        }
    });
}

export {
    getUsers,
}