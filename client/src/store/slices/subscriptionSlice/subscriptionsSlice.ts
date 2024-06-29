import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {User} from "../../../types";
import {getNewUsersAsync} from "./getNewUsersAsync";
import {postNewSubscriberAsync} from "./postNewSubscriber";
import {getSubscriberAsync} from "./getSubscriber";
import {deleteSubscriberAsync} from "./deleteSubscriber";



export interface AuthData {
    accessToken: string;
    userId: number
}
export interface Subscribers {
    avatarUrl: string
    fullName: string
    location: string
    status: string
    subscriptionId: number
}
interface UsersState {
    users: User[] | null;
    data:User | null;
    subscribers:Subscribers[] | null;
}

const initialState: UsersState = {
    users: null,
    data:null,
    subscribers:null

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

            // .addCase(postNewSubscriberAsync.pending, state => {
            // })
            .addCase(
                postNewSubscriberAsync.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.data = action.payload;
                    console.log('Data',state.data)
                }
            )
        // .addCase(postNewSubscriberAsync.rejected, state => {
        //     // state.error = action.error.message;
        // })
        //---------------------------------------------getSubscriber---------------------

    // .addCase(getSubscriberAsync.pending, state => {
    //     })
            .addCase(
                getSubscriberAsync.fulfilled,
                (state, action: PayloadAction<Subscribers[]>) => {
                    state.subscribers = action.payload;
                    console.log('Subscriber',state.subscribers)
                }
            )
            // .addCase(getSubscriberAsync.rejected, state => {
            //     // state.error = action.error.message;
            // });
            //---------------------------------------------deleteSubscriberAsync---------------------

            // .addCase(getSubscriberAsync.pending, state => {
            //     })
            .addCase(
                deleteSubscriberAsync.fulfilled,
                (state, action: PayloadAction<Subscribers[]>) => {
                    state.subscribers = action.payload;
                    console.log('DELETE',state.subscribers)
                }
            )
        // .addCase(getSubscriberAsync.rejected, state => {
        //     // state.error = action.error.message;
        // });
    }


});

export const {  } = subscriptionsSlice.actions;

export default subscriptionsSlice.reducer;

