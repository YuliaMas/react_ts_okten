import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IFormType} from "../../interfaces/IForm";
import {postService} from "../../services/postService";
import {joiResolver} from "@hookform/resolvers/joi";
import postValidator from "../../validators/post.validator";

const AddPost : FC = () => {
    const {formState: {errors, isValid},register, handleSubmit, reset}
        = useForm<IFormType>({
        mode: 'all',
        resolver: joiResolver(postValidator),
    });

const save: SubmitHandler<IFormType> = async (post:IFormType) => {
   await postService.create(post);
   console.log(post);
    reset();
};
console.log(save);
return (
    <div>
        {errors.title && <p>Title error:{errors.title?.message}</p>}
        {errors.body && <p>Body error: {errors.body?.message}</p>}
        <form onSubmit={handleSubmit(save)}>
            <label>
                Title:
                <input type="text" placeholder={"title"} {...register("title")} />
            </label>
            {/*<br />*/}
            <label>
                Body:
                <input  type="text" placeholder={"body"} {...register("body")} ></input>
            </label>
            <br />
            <button type="submit" disabled={!isValid}>Add Post</button>
        </form>
    </div>
);
};

export default AddPost;
