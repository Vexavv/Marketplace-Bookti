import React, { useState } from 'react';
import { useGoogleLogin, TokenResponse } from '@react-oauth/google';
import axios, { AxiosResponse } from 'axios';

interface UserData {
    name: string;
    picture: string;
    email?: string;
    // Другие поля, которые могут присутствовать в данных о пользователе
    // Например, email, id и т.д.
}

const TestButtonGoogle = () => {
    const [tokenResponse, setTokenResponse] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(false);

    const googleLogin = useGoogleLogin({
        onSuccess: async (response: TokenResponse) => {
            try {
                setLoading(true);
                const res: AxiosResponse<UserData> = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`,
                        },
                    }
                );
                setTokenResponse(res.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        },
    });
    console.log(tokenResponse)
    const renderContent = () => {
        if (loading) {
            return <p>Loading...</p>;
        }

        if (tokenResponse) {
            return <div><p>{tokenResponse.name}</p>
                <img src={tokenResponse.picture} alt=""/>
            </div>;
        }

        return (
            <button onClick={() => googleLogin()} disabled={loading}>
                Google
            </button>
        );
    };

    return <div>{renderContent()}</div>;
};

export default TestButtonGoogle;


// import React, { useEffect } from 'react';
// import { useGoogleLogin, TokenResponse } from '@react-oauth/google';
// import axios, { AxiosResponse } from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from './store'; // предполагается, что у вас есть файл store.ts с настройкой Redux
// import { Dispatch } from 'redux';
//
// interface UserData {
//     name: string;
//     picture: string;
// }
//
// interface AuthState {
//     data: UserData | null;
//     loading: boolean;
// }
//
// const initialState: AuthState = {
//     data: null,
//     loading: false,
// };
//
// // Создаем слайс
// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setData: (state, action: PayloadAction<UserData | null>) => {
//             state.data = action.payload;
//         },
//         setLoading: (state, action: PayloadAction<boolean>) => {
//             state.loading = action.payload;
//         },
//         logout: (state) => {
//             state.data = null;
//         },
//     },
// });
//
// // Экспортируем экшены
// export const { setData, setLoading, logout } = authSlice.actions;
//
// // Создаем селекторы
// export const selectUserData = (state: RootState) => state.auth.data;
// export const selectLoading = (state: RootState) => state.auth.loading;
//
// // Создаем thunk для асинхронных операций
// export const fetchUserData = (token: string) => async (dispatch: Dispatch) => {
//     try {
//         dispatch(setLoading(true));
//         const res: AxiosResponse<UserData> = await axios.get(
//             'https://www.googleapis.com/oauth2/v3/userinfo',
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         dispatch(setData(res.data));
//     } catch (e) {
//         console.error(e);
//     } finally {
//         dispatch(setLoading(false));
//     }
// };
//
// // Создаем компонент
// const TestButtonGoogle = () => {
//     const dispatch = useDispatch();
//     const tokenResponse = useSelector(selectUserData);
//     const loading = useSelector(selectLoading);
//
//     const googleLogin = useGoogleLogin({
//         onSuccess: (response: TokenResponse) => {
//             dispatch(fetchUserData(response.access_token));
//         },
//     });
//
//     const handleLogout = () => {
//         dispatch(logout());
//     };
//
//     const renderContent = () => {
//         if (loading) {
//             return <p>Loading...</p>;
//         }
//
//         if (tokenResponse) {
//             return (
//                 <div>
//                     <p>{tokenResponse.name}</p>
//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//             );
//         }
//
//         return (
//             <button onClick={() => googleLogin()} disabled={loading}>
//                 Google
//             </button>
//         );
//     };
//
//     return <div>{renderContent()}</div>;
// };
//
// export default TestButtonGoogle;
