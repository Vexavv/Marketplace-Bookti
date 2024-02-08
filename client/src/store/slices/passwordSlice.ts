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
    enter?: boolean;
    status?: null | string;
    dataPassword: DataPassword | null;
    dataNewPassword:RenamePassword |null

}
const initialState: PasswordState = {
    dataPassword: null,
    dataNewPassword: null,
    status:'idle',
    enter:false
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
export const renamePasswordAsync = createAsyncThunk('password/renamePassword', async (values: LoginForm,{getState}) => {
    try {
        let resetPassword
        // @ts-ignore
        resetPassword = getState().resetPassword.dataPassword
        console.log(resetPassword)
        const updatedValues = {
            ...values,
            reset_token: resetPassword.reset_token,
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
        closeEnter: state => {
            state.enter = false;
        },
        changeStatus: state =>{
            state.status = 'idle'
        }
    },
    extraReducers:(builder) =>{
        builder
            .addCase(resetPasswordAsync.pending, (state) => {

                })
            .addCase(resetPasswordAsync.fulfilled, (state, action: PayloadAction<DataPassword>) => {
                state.dataPassword = action.payload;
                console.log(action.payload)
                // state.enter = true
            })
            .addCase(resetPasswordAsync.rejected, (state) => {
            })


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
export const {closeEnter,changeStatus} = passwordSlice.actions;
export default passwordSlice.reducer;