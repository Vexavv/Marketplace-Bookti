import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {User} from "../../../types";
import {getNewUsersAsync} from "./getNewUsersAsync";
import {postNewSubscriberAsync} from "./postNewSubscriber";
import {getSubscriberAsync} from "./getSubscriber";
import {deleteSubscriberAsync} from "./deleteSubscriber";
import {tr} from "date-fns/locale";



export interface AuthData {
    accessToken: string;
    userId: number
}
export interface Subscribers {
    userId?:number
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
    statusDelete:string
    statusAdded:string
    deleteSubscriber: boolean
    addedSubscriber: boolean
}

const initialState: UsersState = {
    users: null,
    data:null,
    subscribers:null,
    statusDelete:'idle',
    statusAdded:'idle',
    deleteSubscriber:false,
    addedSubscriber:false

};

const subscriptionsSlice = createSlice({
    name: 'subscriptionsSlice',
    initialState,
    reducers: {
        backUpDeleteSubscriber:state => {
            state.deleteSubscriber = false;
            state.statusDelete = 'idle';
        },
        backUpAddedSubscriber:state =>{
            state.statusAdded = 'idle';
            state.addedSubscriber = false;
        }

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
                state.statusAdded = 'loading'
            })
            .addCase(
                postNewSubscriberAsync.fulfilled,
                (state, action: PayloadAction<User>) => {
                    if(action.payload) {
                        state.data = action.payload;
                        state.statusAdded = 'loaded'
                        state.addedSubscriber = true
                    }else{
                        state.statusAdded = 'failed';
                        console.log("FAILED")
                    }

                    console.log('Data',state.data)
                }
            )
        .addCase(postNewSubscriberAsync.rejected, state => {
            // state.error = action.error.message;
            state.statusAdded = 'failed'
        })
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

            .addCase(getSubscriberAsync.pending, state => {
                state.statusDelete = 'loading';
                })
            .addCase(
                deleteSubscriberAsync.fulfilled,
                (state, action: PayloadAction<Subscribers[]>) => {
                    if (action.payload) {
                        state.subscribers = action.payload;
                        state.statusDelete = 'loaded';
                        state.deleteSubscriber = true
                    }else{
                        state.statusDelete = 'failed';
                    }
                }
            )
        .addCase(getSubscriberAsync.rejected, state => {
            state.statusDelete = 'idle';
            // state.error = action.error.message;
        });
    }


});

export const {  backUpDeleteSubscriber,backUpAddedSubscriber } = subscriptionsSlice.actions;

export default subscriptionsSlice.reducer;

