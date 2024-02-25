import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './profileSliceTypes';
import { getBooksAsync } from './profileSliceAsync';

const initialState: IInitialState = {
    status: '',
    data: null,
};

const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        setStatus: state => {
            state.status = '';
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getBooksAsync.pending, state => {
                state.status = 'loading';
            })
            .addCase(getBooksAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(getBooksAsync.rejected, state => {
                state.status = 'error';
            });
    },
});

export const { setStatus } = profileSlice.actions;

export default profileSlice.reducer;
