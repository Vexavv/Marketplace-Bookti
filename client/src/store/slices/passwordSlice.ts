import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from "../../constants/api";
import {LoginForm} from "../../types";



interface DataPassword {
    user_id: string,
}
interface RenamePassword {
    user_id: string,
    access_token: string,
    refresh_token: string,
    status_code?: number
}
interface PasswordState {
    resetToken: null | string;
    status?: null | string;
    dataPassword: DataPassword | null;
    dataNewPassword:RenamePassword |null

}
const initialState: PasswordState = {
    dataPassword: null,
    dataNewPassword: null,
    status:'idle',
    resetToken: null,

};

export const resetPasswordAsync = createAsyncThunk('password/resetPassword', async (values: LoginForm) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/authorize/login/resetPassword`,
            values
        );
        return response.data;

    } catch (e) {
        console.error('Error:', e);
    }


})
export const renamePasswordAsync = createAsyncThunk('password/renamePassword', async (values: LoginForm,{ getState }) => {
    try {
        const state = getState() as {
            resetPassword: {
                resetToken: string | null }
            };
        const resetToken = state.resetPassword.resetToken;
        if (!resetToken) {
            console.error('resetToken отсутствует');
            return;
        }
        const updatedValues = {
            ...values,
            reset_token: resetToken,
        };
        const response = await axios.post(
            `${BASE_URL}/authorize/login/resetPassword/savePassword`,
            updatedValues
        );
        return response.data;
    } catch (e) {
        console.error('Error:', e);
    }


})
const passwordSlice = createSlice({
    name:'password',
    initialState,
    reducers: {

        changeStatus: state =>{
            state.status = 'idle'
        },
        setResetToken: (state, action) => {
            state.resetToken = action.payload;
        },
    },
    extraReducers:(builder) =>{
        builder
            .addCase(resetPasswordAsync.pending, (state) => {})
            .addCase(resetPasswordAsync.fulfilled, (state, action: PayloadAction<DataPassword>) => {
                state.dataPassword = action.payload;
                console.log(action.payload)
            })
            .addCase(resetPasswordAsync.rejected, (state) => {})


            .addCase(renamePasswordAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(renamePasswordAsync.fulfilled, (state, action: PayloadAction<RenamePassword>) => {
                if (action.payload) {
                    state.dataNewPassword = action.payload;
                    console.log(action.payload);
                    state.status = 'succeeded';
                } else {
                    state.status = 'failed';
                }
            })
            .addCase(renamePasswordAsync.rejected, (state) => {

            })

    }
})
export const {setResetToken,changeStatus} = passwordSlice.actions;
export default passwordSlice.reducer;