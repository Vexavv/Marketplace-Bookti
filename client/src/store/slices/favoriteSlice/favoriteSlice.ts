import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../../constants/api';
import {AuthData} from "../userSlices/authSlice";

const initialState= {
    data: null,
    status: 'idle',
    updateData: false,

};
export const favoriteDataAsync = createAsyncThunk(
    'favorite/favoriteData',
    async (bookId:string, { getState }) =>{
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.access_token;
            const id = authData.user_id;


            const response = await axios.post(
                `${BASE_URL}/users/${id}/wishlist`,
                null,
                {
                    params: {
                        book_id: bookId // Передаем bookId как параметр
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

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers:{
        backUpFavorite:state => {
            state.updateData = false;
            state.status = 'idle';
        }
    },
    extraReducers: builder => {
        builder
            .addCase(favoriteDataAsync.pending, state => {
                state.status = 'loading';
            })
            .addCase(
                favoriteDataAsync.fulfilled,
                (state, action) => {
                    if (action.payload) {
                        state.data = action.payload;
                        state.status = 'loaded';
                        state.updateData = true;
                        console.log( state.updateData)
                    } else {
                        state.status = 'failed';
                    }
                }
            )
            .addCase(favoriteDataAsync.rejected, state => {
                state.status = 'loaded';
                // state.error = action.error.message;
            })

    },
})
export const{backUpFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer;