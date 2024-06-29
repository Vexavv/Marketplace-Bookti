import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../constants/api';
import {User} from "../../../types";



export interface AuthData {
    accessToken: string;
}

interface UsersState {
    users: User[] | null;
}

const initialState: UsersState = {
    users: null,

};



export const getNewUsersAsync = createAsyncThunk(
    'subscribe/getNewUsersAsync',
    async (_, { getState }) => {
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.accessToken;

            const response = await axios.get(
                `${BASE_URL}/users/new`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;

        } catch (error) {
            console.error('Error during user fetching:', error);
            throw error;
        }

    }
);

const subscriptionsSlice = createSlice({
    name: 'subscriptionsSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder

            //------------------------------------------------------------------------------------------------------

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
    },
});

export const {  } = subscriptionsSlice.actions;

export default subscriptionsSlice.reducer;

