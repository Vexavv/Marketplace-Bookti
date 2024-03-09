import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFormFilds } from '../../../components/Bookshelf/AddBookForm/AddBook.types';
import { BASE_URL } from '../../../constants/api';
import { ISingleBook } from './addBookSlice.types';

export const addBookAsync = createAsyncThunk(
    'addBoocAsync',
    async (body: IFormFilds, { getState }): Promise<IFormFilds | any> => {
        // console.log(getState().auth.data?.access_token);
        console.log(`${BASE_URL}/books`);

        try {
            const { data } = await axios.post<ISingleBook>(
                `${BASE_URL}/books`,
                { book_details: '', image: '' },
                {
                    headers: {
                        // Authorization: `Bearer ${
                        //     getState().auth.data?.access_token
                        // }`,
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
