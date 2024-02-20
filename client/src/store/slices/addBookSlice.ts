import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IFormFilds } from '../../components/Bookshelf/AddBookForm/AddBook.types';

interface IInitialState {
    status: 'success' | 'loading' | 'error' | '';
    data: IFormFilds | null;
}

const initialState: IInitialState = {
    status: '',
    data: null,
};

export const addBookAsync = createAsyncThunk(
    'addBoocAsync',
    async (body: IFormFilds): Promise<IFormFilds | any> => {
        try {
            // const { data } = await axios.post('#', body);

            // return data;
            return body;
        } catch (error) {
            console.error('error adding a new book:', error);
            throw error;
        }
    }
);

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
