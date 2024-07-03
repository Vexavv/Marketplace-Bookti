import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../constants/api";
import {AuthData} from "./subscriptionsSlice";

export const postNewSubscriberAsync = createAsyncThunk(
    'subscribe/postNewSubscriberAsync',
    async (subscriberId:string | number, { getState }) => {
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.accessToken;

            const response = await axios.post(
                `${BASE_URL}/subscriptions`,
                {},
                {
                    params: {
                        subscriberId: subscriberId
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log('POST', response.data);
            return response.data;

        } catch (error) {
            console.error('Error during user fetching:', error);
            throw error;
        }

    }
)