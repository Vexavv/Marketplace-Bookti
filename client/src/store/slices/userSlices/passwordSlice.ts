import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from "../../../constants/api";
import {LoginForm} from "../../../types";



interface DataPassword {
    userId: string,
}
interface RenamePassword {
    userId: string,
    accessToken: string,
    refreshToken: string,
    statusCode?: number
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
            console.error('resetToken none');
            return;
        }
        const updatedValues = {
            ...values,
            resetToken: resetToken,
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
                if (action.payload){
                    state.dataPassword = action.payload;
                    state.status = 'succeeded';
                }else {
                    state.status = 'failed';
                }

            })
            .addCase(resetPasswordAsync.rejected, (state) => {})


            .addCase(renamePasswordAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(renamePasswordAsync.fulfilled, (state, action: PayloadAction<RenamePassword>) => {
                if (action.payload) {
                    state.dataNewPassword = action.payload;
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