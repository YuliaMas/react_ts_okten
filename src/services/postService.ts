import {IFormType} from "../interfaces/IForm";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {IRes} from "../types/resType";

const postService = {
    create: (data: IFormType): IRes<IFormType> => apiService.post(urls.posts.base,  JSON.stringify({
       title: data.title,
       body: data.body,
       userId: data.userId,
    }))
}
export {
    postService
}