import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

// interface User {
//     name: string;
//     email?: string;
//     picture?: string;
// }
export interface User {
    name: string;
    email?: string;
    picture?: string;
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
interface UserState {
    loading?: boolean;
    data: User | UserFacebook | null;
}

const initialState: UserState = {
    data: null,
    loading: false,

};

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
            })
            .addCase(fetchUserDataFaceBook.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const {setUser,  logout,setLoading } = authSlice.actions;

export default authSlice.reducer;






// import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
// import axios, {AxiosResponse} from "axios";
//
// interface User {
//     map(): import("react").ReactNode | Iterable<import("react").ReactNode>;
//     name: string;
//     email?: string;
//     picture?: string;
//     // picture?: {
//     //     data: {
//     //         url: string;
//     //     };
//     // };
//
// }
//
// interface UserState {
//     loading?: boolean;
//     data: User | null;
//     // dataFacebook: User | null;
//
// }
//
// const initialState: UserState = {
//     data: null,
//     // dataFacebook:null,
//     loading: false,
//
// };
//
// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setUser: (state, action: PayloadAction<User | null>) => {
//             state.data = action.payload;
//             // state.loading = true;
//         },
        // setUserFacebook: (state, action: PayloadAction<User | null>) => {
        //     state.dataFacebook = action.payload;
        //     state.loading = true;
        // },
        // setLoadingGoogle: (state, action: PayloadAction<boolean>) => {
        //     state.loading = action.payload;
        //     console.log('Action Payload:', action.payload);
        // },
        // logout: state => {
        //     state.data = null;
        //     state.loading = false;
        // },
//     },
// });
// export const fetchUserData = (token: string) => async (dispatch: Dispatch) => {
//     try {
//         dispatch(setLoadingGoogle(true));
//
//         const res: AxiosResponse<User> = await axios.get(
//             'https://www.googleapis.com/oauth2/v3/userinfo',
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         dispatch(setUser(res.data));
//     } catch (e) {
//         console.error(e);
//     } finally {
//         dispatch(setLoadingGoogle(false));
//     }
// };
// export const fetchUserDataFaceBook = (token: string) => async (dispatch: Dispatch) => {
//     try {
//         dispatch(setLoadingGoogle(true));
//         const res: AxiosResponse<User> = await axios.get(
//             'https://graph.facebook.com/v15.0/me',
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         dispatch(setUser(res.data));
//     } catch (e) {
//         console.error(e);
//     } finally {
//         dispatch(setLoadingGoogle(false));
//     }
// };
//
// export const { setUser, logout, setLoadingGoogle } = authSlice.actions;
//
// export default authSlice.reducer;