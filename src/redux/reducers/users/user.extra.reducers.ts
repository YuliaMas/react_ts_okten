import {createAsyncThunk} from "@reduxjs/toolkit";
import {userService} from "../../../services/api.service";
import {AxiosError} from "axios";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            let users = await userService.getAll();
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
});
export const loadUser = createAsyncThunk('userSlice/loadUser',
    async (id: number, thunkAPI) => {
        try {
            let user = await userService.getById(id);
            return thunkAPI.fulfillWithValue(user);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);

