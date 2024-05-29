import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData} from "../userSlices/authSlice";
import axios from "axios";
import {BASE_URL} from "../../../constants/api";

export const deleteBookAsync = createAsyncThunk(
    'deleteBookAsync',
    async (id: number, {getState}) => {
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.accessToken;
            const userId = authData.userId;
            const response = await axios.delete(
                `${BASE_URL}/books/${id}`,
                {
                    params: {
                        userId: userId
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data;

        } catch (error) {
            console.error('Error during user fetching:', error);
            throw error;
        }
    }
)