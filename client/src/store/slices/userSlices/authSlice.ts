import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../../../constants/api';
import {User} from "../../../types";

interface LoginCredentials {
    email: string;
    password: string;
}

interface CreateAccountCredentials {
    email: string;
    password: string;
    location:string;
    full_name: string;
    confirm_password: string;
}

interface Data {
    user_id: string;
    access_token: string;
    refresh_token: string;
}

// export interface User {
//     email: string;
//     full_name: string;
//     avatar_url: string;
//     city:string;
// }

export interface AuthData {
    access_token: string;
    user_id: string;
}

interface UserState {
    loading?: boolean;
    status?: null | string;
    data: Data | null;
    user: User | null;
}

const initialState: UserState = {
    data: null,
    user: null,
    loading: false,
    status: null,
};
export const createAccountAsync = createAsyncThunk(
    'auth/createAccount',
    async (credentials: CreateAccountCredentials) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/authorize/signup`,
                credentials
            );
            return response.data;
        } catch (e) {
            console.error('Error during user fetching:', e);
            throw e;
        }
    }
);

export const loginAsync = createAsyncThunk(
    'auth/login',
    async (credentials: LoginCredentials) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/authorize/login`,
                credentials
            );
            return response.data;
        } catch (e) {
            console.error('Error during user fetching:', e);
            throw e;
        }
    }
);
export const getUserAsync = createAsyncThunk(
    'auth/getUser',
    async (_, { getState }) => {
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.access_token;
            const id = authData.user_id;

            const response: AxiosResponse<User> = await axios.get(
                `${BASE_URL}/users/${id}`,
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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.data = null;
            state.loading = false;
            state.user = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(createAccountAsync.pending, state => {
                state.status = 'loading';
            })
            .addCase(
                createAccountAsync.fulfilled,
                (state, action: PayloadAction<Data>) => {
                    state.data = action.payload;
                    console.log('Data:', action.payload);
                    state.status = 'loaded';
                }
            )
            .addCase(createAccountAsync.rejected, state => {
                state.status = 'loaded';
                // state.error = action.error.message;
            })

            //-------------------------------------------------------------------------------------------------
            .addCase(loginAsync.pending, state => {
                state.status = 'loading';
            })
            .addCase(
                loginAsync.fulfilled,
                (state, action: PayloadAction<Data>) => {
                    state.data = action.payload;
                    console.log('Data:', action.payload);
                    state.status = 'loaded';
                }
            )
            .addCase(loginAsync.rejected, state => {
                state.status = 'loaded';
                // state.error = action.error.message;
            })

            //------------------------------------------------------------------------------------------------------

            .addCase(getUserAsync.pending, state => {
                state.loading = true;
            })
            .addCase(
                getUserAsync.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.user = action.payload;
                    console.log('UserState >>>>>>>>>>', state.user);
                }
            )
            .addCase(getUserAsync.rejected, state => {
                state.loading = false;
                // state.error = action.error.message;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

