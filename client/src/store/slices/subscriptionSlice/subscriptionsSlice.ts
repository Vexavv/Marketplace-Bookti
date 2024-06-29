import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {User} from "../../../types";
import {getNewUsersAsync} from "./getNewUsersAsync";
import {postNewSubscriberAsync} from "./postNewSubscriber";
import {getSubscriberAsync} from "./getSubscriber";



export interface AuthData {
    accessToken: string;
}

interface UsersState {
    users: User[] | null;
    data:User | null;
    subscriber:User | null;
}

const initialState: UsersState = {
    users: null,
    data:null,
    subscriber:null

};

const subscriptionsSlice = createSlice({
    name: 'subscriptionsSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder

            //---------------------------------------------NewSubscriber---------------------

            // .addCase(getNewUsersAsync.pending, state => {
            // })
            .addCase(
                getNewUsersAsync.fulfilled,
                (state, action: PayloadAction<User[]>) => {
                    state.users = action.payload;
                }
            )
            // .addCase(getNewUsersAsync.rejected, state => {
            //     // state.error = action.error.message;
            // });
            //---------------------------------------------addedNewSubscriber---------------------

            .addCase(postNewSubscriberAsync.pending, state => {
            })
            .addCase(
                postNewSubscriberAsync.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.data = action.payload;
                    console.log('Data',state.data)
                }
            )
        .addCase(postNewSubscriberAsync.rejected, state => {
            // state.error = action.error.message;
        })
        //---------------------------------------------getSubscriber---------------------

    .addCase(getSubscriberAsync.pending, state => {
        })
            .addCase(
                getSubscriberAsync.fulfilled,
                (state, action) => {
                    state.subscriber = action.payload;
                    console.log('Subscriber',state.subscriber)
                }
            )
            .addCase(getSubscriberAsync.rejected, state => {
                // state.error = action.error.message;
            });
    },
});

export const {  } = subscriptionsSlice.actions;

export default subscriptionsSlice.reducer;

