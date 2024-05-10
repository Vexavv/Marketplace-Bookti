import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { addBookAsync } from './addBookSliceAsync';
import { ISingleBook } from './addBookSlice.types';

interface IInitialState {
    status: 'success' | 'loading' | 'error' | '';
    data: ISingleBook | null;
}

const initialState: IInitialState = {
    status: '',
    data: null,
};

const addBookSlice = createSlice({
    name: 'addBoocSlice',
    initialState,
    reducers: {
        setStatus: state => {
            state.status = '';
        },
    },
    extraReducers: builder => {
        builder
            .addCase(addBookAsync.pending, state => {
                state.status = 'loading';
            })
            .addCase(addBookAsync.fulfilled, (state, action:PayloadAction<ISingleBook>) => {
                state.data = action.payload;
                state.status = 'success';
            })
            .addCase(addBookAsync.rejected, state => {
                state.status = 'error';
            });
    },
});

export const { setStatus } = addBookSlice.actions;

export default addBookSlice.reducer;
