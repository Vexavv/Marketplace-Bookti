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

        const formData = new FormData();

        const a = {
            title: body.title,
            author: body.author,
            genre: body.genre,
            publication_date: '2024-03-02',
            language: body.language,
            trade_format: body.exchange,
            user_id: '',
            description: body.textarea,
        };

        if (body.image) {
            formData.append('book_details', JSON.stringify(a));
            formData.append('image', body.image);
        }

        console.log(formData.values);

        try {
            const { data } = await axios.post<ISingleBook>(
                `${BASE_URL}/books`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(data);

            return data;
        } catch (error) {
            console.error('error adding a new book:', error);
            throw error;
        }
    }
);
