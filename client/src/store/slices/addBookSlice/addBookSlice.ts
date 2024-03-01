import { createSlice } from '@reduxjs/toolkit';
import { IFormFilds } from '../../../components/Bookshelf/AddBookForm/AddBook.types';
import { addBookAsync } from './addBookSliceAsync';

interface IInitialState {
    status: 'success' | 'loading' | 'error' | '';
    data: IFormFilds | null;
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
            .addCase(addBookAsync.fulfilled, (state, action) => {
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
