import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IFormType} from "../../interfaces/IForm";
import {postService} from "../../services/postService";
import {joiResolver} from "@hookform/resolvers/joi";
import postValidator from "../../validators/post.validator";

const AddPost : FC = () => {
    const {formState: {errors, isValid},register,
        handleSubmit, reset}
        = useForm<IFormType>({
        mode: 'all',
        resolver: joiResolver(postValidator),
    });

const save: SubmitHandler<IFormType> = async (post) => {
   await postService.create(post);
   console.log(post);
    reset();
};

return (
    <div>
        {errors.title && <p>Title error:{errors.title?.message}</p>}
        {errors.body && <p>Body error: {errors.body?.message}</p>}
        {errors.userId && <p>UserId error: {errors.userId?.message}</p>}
        <form onSubmit={handleSubmit(save)}>
            <label htmlFor="title"> Title:
                <input id="title" type="text" placeholder={"title"} {...register("title")} />
            </label>
            <label htmlFor="body"> Body:
                <input id="body" type="text" placeholder={"body"} {...register("body")} />
            </label>
            <label htmlFor="userId"> UserId:
                <input id="userId" type="number" placeholder={"userId"} {...register("userId")} />
            </label>
            <br/>
            <button type="submit" disabled={!isValid}>Add Post</button>
        </form>
    </div>
);
};

export default AddPost;
