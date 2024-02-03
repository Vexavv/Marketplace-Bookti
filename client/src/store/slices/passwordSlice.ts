import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import {BASE_URL} from "../../constants/api";
import {LoginForm} from "../../types";



interface DataPassword {
    user_id: string,
    "reset_token": string
}
interface PasswordState {
    loading?: boolean;
    status?: null | string;
    dataPassword: DataPassword | null;

}
const initialState: PasswordState = {
    dataPassword: null,


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
const passwordSlice = createSlice({
    name:'password',
    initialState,
    reducers: {
    },
    extraReducers:(builder) =>{
        builder
    .addCase(resetPasswordAsync.pending, (state) => {

        })
            .addCase(resetPasswordAsync.fulfilled, (state, action: PayloadAction<DataPassword>) => {
                state.dataPassword = action.payload;
            })
            .addCase(resetPasswordAsync.rejected, (state) => {
            })

    }
})
export default passwordSlice.reducer;