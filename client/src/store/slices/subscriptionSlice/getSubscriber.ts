import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../constants/api";
import {AuthData} from "./subscriptionsSlice";

export const getSubscriberAsync = createAsyncThunk(
    'subscribe/getSubscriberAsync',
    async (_, { getState }) => {
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.accessToken;
            const id = authData.userId;
            const response = await axios.get(
                `${BASE_URL}/subscriptions`,

                {
                    params: {
                        userId: id
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log('GET', response.data);
            return response.data;

        } catch (error) {
            console.error('Error during user fetching:', error);
            throw error;
        }

    }
)