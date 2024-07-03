import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../constants/api";
import {AuthData} from "./subscriptionsSlice";

export const deleteSubscriberAsync = createAsyncThunk(
    'subscribe/deleteSubscriberAsync',
    async (subscriptionId:number, { getState }) => {
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.accessToken;

            const response = await axios.delete(
                `${BASE_URL}/subscriptions/${subscriptionId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log('Delete', response.data);
            return response.data;

        } catch (error) {
            console.error('Error during user fetching:', error);
            throw error;
        }

    }
)