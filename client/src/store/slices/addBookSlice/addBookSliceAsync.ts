import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFormFilds } from '../../../components/Bookshelf/AddBookForm/AddBook.types';
import { BASE_URL } from '../../../constants/api';
import { ISingleBook } from './addBookSlice.types';

export const addBookAsync = createAsyncThunk(
    'addBoocAsync',
    async (body: IFormFilds, { getState }): Promise<ISingleBook> => {
        // @ts-ignore
        const token = getState().auth.data.access_token;

        try {
            const { data } = await axios.post<ISingleBook>(
                `${BASE_URL}/books`,
                body,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            return data;
        } catch (error) {
            console.error('error adding a new book:', error);
            throw error;
        }
    }
);
