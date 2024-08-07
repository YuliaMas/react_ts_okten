import {createAsyncThunk} from "@reduxjs/toolkit";
import {postService, userService} from "../../../services/api.service";
import {AxiosError} from "axios";
import exp from "node:constants";

export const loadPosts = createAsyncThunk(
    'postsSlice/loadPosts',
    async (_ , ThunkAPI) => {
        try {
            let posts = await postService.getAll();
            return ThunkAPI.fulfillWithValue(posts);
        } catch (e) {
            let error = e as AxiosError;
            return ThunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);

export const loadPost = createAsyncThunk(
    'postSlice/loadPost',
    async (id: number, ThunkAPI) => {
        try {
            let post = await postService.getById(id);
            return ThunkAPI.fulfillWithValue(post);
        } catch (e) {
            let error = e as AxiosError;
            return ThunkAPI.rejectWithValue(error?.response?.data);
        }
    }
)