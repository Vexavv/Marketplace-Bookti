import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import {BASE_URL} from '../../../constants/api';

import {UpdateForm} from "../../../components/MySettingsComponents/UpdateData/UpdateData";

interface UpdateData {
    fullName: string,
    email: string,
    location: string,
    telegramId: string,
    displayEmail?:boolean,
    displayTelegram?:boolean
}

interface UpdateState {
    loading?: boolean;
    status?: null | string;
    updateData?: boolean;
    data: UpdateData | null;
}

const initialState: UpdateState = {
    data: null,
    status: 'idle',
    updateData: false,


};

export const updateDataAsync = createAsyncThunk(
    'update/updateData',
    async (credentials: UpdateForm, {getState}) => {
        try {
            // @ts-ignore
            const {userId, accessToken} = getState().auth.data;
            const {avatarUrl, ...withoutAvatar} = credentials;
            const response: AxiosResponse<UpdateData> = await axios.patch(
                `${BASE_URL}/users/${userId}`,
                {
                    ...(avatarUrl && {image: new Blob([credentials.avatarUrl as any])}),
                    user_update: new Blob([JSON.stringify(withoutAvatar)], {
                        type: 'application/json',
                    }),
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            return response.data;
        } catch (error) {
            console.error('Error during user updating:', error);
            throw error;
        }
    }
);


const updateSlice = createSlice({
    name: 'update',
    initialState,
    reducers: {
backUpdateData:state => {
    state.updateData = false;
    state.status = 'idle';
}
    },
    extraReducers: builder => {
        builder
            .addCase(updateDataAsync.pending, state => {
                state.status = 'loading';
            })
            .addCase(updateDataAsync.fulfilled, (state, action: PayloadAction<UpdateData>) => {
                if (action.payload) {
                    state.data = action.payload;
                    state.status = 'loaded';
                    state.updateData = true;
                } else {
                    state.status = 'failed';
                }


            })
            .addCase(updateDataAsync.rejected, state => {
                state.updateData = false;
                state.status = 'failed';
                // state.error = action.error.message;
            });


    },
});
export const{backUpdateData} = updateSlice.actions
export default updateSlice.reducer;