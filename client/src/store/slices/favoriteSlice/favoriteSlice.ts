import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../../constants/api';
import {AuthData} from "../userSlices/authSlice";

const initialState= {
    data: null,
    statusAdded: 'idle',
    statusDelete:'idle',
    updateData: false,
    deleteFavorite: false,

};
export const favoriteDataAsync = createAsyncThunk(
    'favorite/favoriteData',
    async (bookId:number, { getState }) =>{
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.accessToken;
            const id = authData.userId;
            const response = await axios.post(
                `${BASE_URL}/users/${id}/wishlist`,
                null,
                {
                    params: {
                        bookId: bookId
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
export const favoriteDeleteAsync = createAsyncThunk(
    'favorite/favoriteDelete',
    async (bookId:number, { getState }) =>{
        try {
            let authData: AuthData;
            // @ts-ignore
            authData = getState().auth.data as AuthData;
            const token = authData.accessToken;
            const id = authData.userId;


            const response = await axios.delete(
                `${BASE_URL}/users/${id}/wishlist`,
                {
                    params: {
                        bookId: bookId
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
            state.statusAdded = 'idle';
        },
        backUpDeleteFavorite:state => {
            state.deleteFavorite = false;
            state.statusDelete = 'idle';
        }
    },
    extraReducers: builder => {
        builder
            .addCase(favoriteDataAsync.pending, state => {
                state.statusAdded = 'loading';
            })
            .addCase(
                favoriteDataAsync.fulfilled,
                (state, action) => {
                    if (action.payload) {
                        state.data = action.payload;
                        state.statusAdded = 'loaded';
                        state.updateData = true;
                    } else {
                        state.statusAdded = 'failed';
                    }
                }
            )
            .addCase(favoriteDataAsync.rejected, state => {
                state.statusAdded = 'idle';
                // state.error = action.error.message;
            })
        //-------------------------------------------------------------------------------
            .addCase(favoriteDeleteAsync.pending, state => {
                state.statusDelete = 'loading';
            })
            .addCase(
                favoriteDeleteAsync.fulfilled,
                (state, action) => {
                    if (action.payload) {
                        state.data = action.payload;
                        state.statusDelete = 'loaded';
                        state.deleteFavorite = true;
                    } else {
                        state.statusDelete = 'failed';
                    }
                }
            )
            .addCase(favoriteDeleteAsync.rejected, state => {
                state.statusDelete = 'idle';
                // state.error = action.error.message;
            })

    },
})
export const{backUpFavorite,backUpDeleteFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer;