import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../../../constants/api';
import {User} from "../../../types";

import {UpdateForm} from "../../../components/MySettingsComponents/UpdateData/UpdateData";

interface UpdateData {
    full_name: string,
    email: string,
    location: string,
    telegram_id: string
}

interface UpdateState {
    loading?: boolean;
    status?: null | string;
    updateData?: boolean
    data: UpdateData | null;
}
const initialState:UpdateState = {
    data: null,
    status: 'idle',
    updateData: false

};

export const updateDataAsync = createAsyncThunk(
    'update/updateData',
    async (credentials:UpdateForm, { getState }) => {
        try {
            // @ts-ignore
            const { user_id, access_token } = getState().auth.data;
            const { avatar_url, ...withoutAvatar } = credentials;
            const response: AxiosResponse<UpdateData> = await axios.patch(
                `${BASE_URL}/users/${user_id}`,
                {
                    image: new Blob([credentials.avatar_url as any]),
                    user_update: new Blob([JSON.stringify(withoutAvatar)], {
                        type: 'application/json',
                    }),
                },
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                        'Content-Type': 'multipart/form-data',
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
// export const updateDataAsync = createAsyncThunk(
//     'update/updateData',
//     async (credentials: UpdateForm, { getState }) => {
//         try {
//             // @ts-ignore
//             const { user_id, access_token } = getState().auth.data;
//             const { avatar_url, ...withoutAvatar } = credentials;
//
//             // Проверяем, был ли предоставлен URL для аватара
//             if (avatar_url) {
//                 // Если URL для аватара предоставлен, обновляем и аватар, и другие данные пользователя
//                 const response: AxiosResponse<UpdateData> = await axios.patch(
//                     `${BASE_URL}/users/${user_id}`,
//                     {
//                         image: new Blob([avatar_url as any]),
//                         user_update: new Blob([JSON.stringify(withoutAvatar)], {
//                         type: 'application/json',
//                     }),
//                     },
//                     {
//                         headers: {
//                             Authorization: `Bearer ${access_token}`,
//                             'Content-Type': 'multipart/form-data',
//                         },
//                     }
//                 );
//
//                 return response.data;
//             } else {
//                 // Если URL для аватара не предоставлен, обновляем только другие данные пользователя
//                 const response: AxiosResponse<UpdateData> = await axios.patch(
//                     `${BASE_URL}/users/${user_id}`,
//                     {
//                         user_update: new Blob([JSON.stringify(withoutAvatar)], {
//                             type: 'application/json',
//                         }),
//                     },
//                     {
//                         headers: {
//                             Authorization: `Bearer ${access_token}`,
//                             'Content-Type': 'application/json',
//                         },
//                     }
//                 );
//
//                 return response.data;
//             }
//         } catch (error) {
//             console.error('Ошибка во время обновления данных пользователя:', error);
//             throw error;
//         }
//     }
// );


const updateSlice = createSlice({
    name: 'update',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(updateDataAsync.pending,state => {
                state.status = 'loading';
            })
            .addCase(updateDataAsync.fulfilled, (state, action:PayloadAction<UpdateData>) => {
                if (action.payload){
                    state.data = action.payload;
                    console.log('UpdateUser:', action.payload);
                    state.status = 'loaded';
                    state.updateData = true;
                }else {
                    state.status = 'failed';
                }


            })
            .addCase(updateDataAsync.rejected, state => {
                state.updateData = false;
                        // state.status = 'loaded';
                        // state.error = action.error.message;
                    });

        // builder
        //     .addCase(updateDataAsync.pending, state => {
        //         state.status = 'loading';
        //     })
        //     .addCase(
        //         updateDataAsync.fulfilled,
        //         (state, action: PayloadAction<User>) => {
        //             state.user = action.payload;
        //             console.log('UpdateUser:', action.payload);
        //             state.status = 'loaded';
        //         }
        //     )
        //     .addCase(updateDataAsync.rejected, state => {
        //         state.status = 'loaded';
        //         // state.error = action.error.message;
        //     });

    },
});
export default updateSlice.reducer;