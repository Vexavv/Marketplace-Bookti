import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import {BASE_URL} from "../../Constants/api";

interface LoginCredentials {
    email: string;
    password: string;
}

interface CreateAccountCredentials {
    email: string;
    password: string;
    full_name: string,
    confirm_password: string,
}

interface Data {
    user_id: string,
    access_token: string,
    refresh_token: string
}

interface User {
    email: "string",
    full_name: "string",
    avatar_url: "string"
}

interface AuthData {
    access_token: string;
    user_id: string;

}

interface UserState {
    loading?: boolean;
    data: Data | null;
    user: User | null;
}

const initialState: UserState = {
    data: null,
    user: null,
    loading: false,


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
    async (_, {getState}) => {
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.access_token;
            console.log('UserToken', token);
            const id = authData.user_id;
            console.log('UserID', id);

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
            state.user = null
        },
    },
    extraReducers: (builder) => {
        builder


            // .addCase(createAccountAsync.pending, (state) => {
            //
            // })
            .addCase(createAccountAsync.fulfilled, (state, action: PayloadAction<Data>) => {
                state.data = action.payload;
                console.log('Data:', action.payload);

            })
            // .addCase(createAccountAsync.rejected, (state) => {
            //
            //     // state.error = action.error.message;
            // })

            //-------------------------------------------------------------------------------------------------
            // .addCase(loginAsync.pending, (state) => {
            //
            // })
            .addCase(loginAsync.fulfilled, (state, action: PayloadAction<Data>) => {
                state.data = action.payload;
                console.log('Data:', action.payload);

            })
            // .addCase(loginAsync.rejected, (state) => {
            //
            //     // state.error = action.error.message;
            // })

            //------------------------------------------------------------------------------------------------------

            .addCase(getUserAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserAsync.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                console.log("UserState >>>>>>>>>>", state.user)

            })
            .addCase(getUserAsync.rejected, (state) => {
                state.loading = false;
                // state.error = action.error.message;
            });

    },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;


//
// import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
// import axios, {AxiosResponse} from 'axios';
//
// export interface User {
//     name: string;
//     email?: string;
//     picture?: string;
//     password?: string
// }
//
// export interface UserFacebook {
//     name: string;
//     email?: string;
//     picture: {
//         data: {
//             url: string;
//         };
//     };
// }
//
// // interface UserState {
// //     loading?: boolean;
// //     data: User | UserFacebook | null;
// //
// // }
//
// //---------------------------------------------------------------------------------------------------
// export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (token: string) => {
//     const res: AxiosResponse<User> = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     return res.data;
// });
// export const fetchUserDataFaceBook = createAsyncThunk('auth/fetchUserDataFaceBook', async (token: string) => {
//     try {
//         const res: AxiosResponse<UserFacebook> = await axios.get('https://graph.facebook.com/v15.0/me', {
//             params: {
//                 fields: 'name,email,picture',
//                 access_token: token,
//             },
//         });
//
//         return res.data;
//     } catch (error) {
//         console.error(error);
//         throw error; // Перебрасываем ошибку вверх для обработки внутри thunk
//     }
// });
//
// //---------------------------------------------------------------------------------------------------
//
//
//
//
// interface LoginCredentials {
//     email: string;
//     password: string;
// }
// interface CreateAccountCredentials {
//     email: string;
//     password: string;
//     full_name: string,
//     confirm_password: string,
// }
// interface Data {
//     user_id: string,
//     access_token: string,
//     refresh_token: string
// }
// interface UserState {
//     loading?: boolean;
//     data: Data | null;
//
// }
//
// const initialState: UserState = {
//     data: null,
//     loading: false,
//
//
//
// };
// export const createAccountAsync = createAsyncThunk(
//     'auth/createAccount',
//     async (credentials: CreateAccountCredentials) => {
//         const response = await axios.post(
//             'https://bookti-spring-backend.onrender.com/api/v1/authorize/signup',
//             credentials
//         );
//         return response.data;
//
//     }
// );
//
// export const loginAsync = createAsyncThunk(
//     'auth/login',
//     async (credentials: LoginCredentials) => {
//         const response = await axios.post(
//             'https://bookti-spring-backend.onrender.com/api/v1/authorize/login',
//             credentials
//         );
//         return response.data;
//
//     }
// );
//
//
//
//
//
//
//
//
//
// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         // setUser: (state, action: PayloadAction<User | UserFacebook | null>) => {
//         //     state.data = action.payload;
//         // },
//         // setLoading: (state, action: PayloadAction<boolean>) => {
//         //     state.loading = action.payload;
//         //     console.log('Action Payload:', action.payload);
//         // },
//         logout: state => {
//             state.data = null;
//             state.loading = false;
//         },
//         // setUserFacebook: (state, action: PayloadAction<User | null>) => {
//         //     state.dataFacebook = action.payload;
//         //     state.loading = true;
//         // },
//     },
//     extraReducers: (builder) => {
//         builder
//             // .addCase(fetchUserData.pending, (state) => {
//             //     state.loading = true;
//             // })
//             // .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<User>) => {
//             //     state.data = action.payload;
//             //     console.log(state.data)
//             // })
//             // .addCase(fetchUserData.rejected, (state) => {
//             //     state.loading = false;
//             // })
//             //
//             //
//             // .addCase(fetchUserDataFaceBook.pending, (state) => {
//             //     state.loading = true;
//             // })
//             // .addCase(fetchUserDataFaceBook.fulfilled, (state, action: PayloadAction<UserFacebook>) => {
//             //     state.data = action.payload;
//             //
//             // })
//             // .addCase(fetchUserDataFaceBook.rejected, (state) => {
//             //     state.loading = false;
//             // })
//
//
//             .addCase(createAccountAsync.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(createAccountAsync.fulfilled, (state, action: PayloadAction<Data>) => {
//                 state.data = action.payload;
//                 console.log('Data:', action.payload);
//
//             })
//             .addCase(createAccountAsync.rejected, (state) => {
//                 state.loading = false;
//                 // state.error = action.error.message;
//             })
//
//             //-------------------------------------------------------------------------------------------------
//             .addCase(loginAsync.pending, (state) => {
//                 // state.loading = true;
//             })
//             .addCase(loginAsync.fulfilled, (state, action: PayloadAction<Data>) => {
//                 state.data = action.payload;
//                 console.log('Data:', action.payload);
//
//             })
//             .addCase(loginAsync.rejected, (state) => {
//                 // state.loading = false;
//                 // state.error = action.error.message;
//             });
//
//         //------------------------------------------------------------------------------------------------------
//     },
// });
//
// export const { logout } = authSlice.actions;
//
// export default authSlice.reducer;
