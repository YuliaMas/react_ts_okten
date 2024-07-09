import axios from "axios";
import {StateType} from "../models/IUser";
import {baseUrl, urls} from "../constance/urls";

let axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"},
})

const userService = {
    getAll: async () => {
        let [axiosResponse] = await Promise.all([axiosInstance.get<StateType>(urls.userUrls.all)])
        return  axiosResponse.data.users;
    }
}

export {
    userService
}

