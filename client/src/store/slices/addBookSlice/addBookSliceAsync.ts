import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFormFilds } from '../../../components/Bookshelf/AddBookForm/AddBook.types';
import { BASE_URL } from '../../../constants/api';
import { ISingleBook } from './addBookSlice.types';

export const addBookAsync = createAsyncThunk(
    'addBoocAsync',
    async (body: IFormFilds, { getState }) => {
        // @ts-ignore
        const { user_id, access_token } = getState().auth.data;
        const { image, ...withoutImage } = body;

        const { data } = await axios.postForm<ISingleBook>(
            `${BASE_URL}/books?user_id=${user_id}`,
            {
                image: new Blob([body.image as any]),
                book_profile: new Blob([JSON.stringify(withoutImage)], {
                    type: 'application/json',
                }),
            },
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        return data;
    }
);
