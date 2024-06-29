import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../constants/api";
import {AuthData} from "./subscriptionsSlice";

export const getNewUsersAsync = createAsyncThunk(
    'subscribe/getNewUsersAsync',
    async (_, { getState }) => {
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.accessToken;

            const response = await axios.get(
                `${BASE_URL}/users/new`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
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