import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';

export interface User {
    name: string;
    email?: string;
    picture?: string;
    password?: string
}

export interface UserFacebook {
    name: string;
    email?: string;
    picture: {
        data: {
            url: string;
        };
    };
}

// export interface CreateUser {
//     name: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
// }

interface LoginCredentials {
    email: string;
    password: string;
}

interface UserState {
    loading?: boolean;
    data: User | UserFacebook | null;

}

const initialState: UserState = {
    data: null,
    loading: false,



};

export const loginAsync = createAsyncThunk(
    'auth/login',
    async (credentials: LoginCredentials) => {
        const response = await axios.post(
            'https://bookti-spring-backend.onrender.com/api/v1/authorize/login',
            credentials
        );
        return response.data;
    }
);
export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (token: string) => {
    const res: AxiosResponse<User> = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
});
export const fetchUserDataFaceBook = createAsyncThunk('auth/fetchUserDataFaceBook', async (token: string) => {
    try {
        const res: AxiosResponse<UserFacebook> = await axios.get('https://graph.facebook.com/v15.0/me', {
            params: {
                fields: 'name,email,picture',
                access_token: token,
            },
        });

        return res.data;
    } catch (error) {
        console.error(error);
        throw error; // Перебрасываем ошибку вверх для обработки внутри thunk
    }
});


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | UserFacebook | null>) => {
            state.data = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
            console.log('Action Payload:', action.payload);
        },
        logout: state => {
            state.data = null;
            state.loading = false;
        },
        // setUserFacebook: (state, action: PayloadAction<User | null>) => {
        //     state.dataFacebook = action.payload;
        //     state.loading = true;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<User>) => {
                state.data = action.payload;
            })
            .addCase(fetchUserData.rejected, (state) => {
                state.loading = false;
            })


            .addCase(fetchUserDataFaceBook.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserDataFaceBook.fulfilled, (state, action: PayloadAction<UserFacebook>) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchUserDataFaceBook.rejected, (state) => {
                state.loading = false;
            })

            //-------------------------------------------------------------------------------------------------
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginAsync.fulfilled, (state, action: PayloadAction<User>) => {
                state.data = action.payload;

            })
            .addCase(loginAsync.rejected, (state) => {
                state.loading = false;
                // state.error = action.error.message;
            });

        //------------------------------------------------------------------------------------------------------
    },
});

export const {setUser, logout, setLoading} = authSlice.actions;

export default authSlice.reducer;

