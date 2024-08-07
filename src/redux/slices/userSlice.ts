import {createSlice, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUserl";
import {loadUser, loadUsers} from "../reducers/users/user.extra.reducers";

type UserSliceType = {
    users: IUser[],
    isLoaded: boolean,
    error: string,
    user: IUser  | null
}

const userInitialState: UserSliceType = {
    users: [],
    isLoaded: false,
    error: '',
    user: null
}
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitialState,
    reducers: {
        // fillUser: (state, action) => {
        //     state.user = action.payload;
        // },
        // refillUsers: (state, action) => {
        //     state.users = action.payload;
        // }
    },
    extraReducers: builder=>
        builder
            .addCase(
                loadUsers.fulfilled,
                (state, action) => {
                state.users = action.payload;
                state.isLoaded = true;
            })
            .addCase(
                loadUser.fulfilled,
                (state, action) => {
                state.user = action.payload;
            })
            .addMatcher(
                isRejected(loadUsers, loadUser),
                (state, action) => {
                console.log(action.payload);
                state.error = action.payload as string;
            })
});
export const  userAction = {
     ...userSlice.actions,
     loadUsers,
     loadUser
 }