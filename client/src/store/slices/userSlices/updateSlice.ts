import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import {BASE_URL} from '../../../constants/api';

import {UpdateForm} from "../../../components/MySettingsComponents/UpdateData/UpdateData";

interface UpdateData {
    full_name: string,
    email: string,
    location: string,
    telegram_id: string,
    display_email?:boolean,
    display_telegram?:boolean
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
            const {user_id, access_token} = getState().auth.data;
            const {avatar_url, ...withoutAvatar} = credentials;
            const response: AxiosResponse<UpdateData> = await axios.patch(
                `${BASE_URL}/users/${user_id}`,
                {
                    ...(avatar_url && {image: new Blob([credentials.avatar_url as any])}),
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