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
            `${BASE_URL}/books`,
            {
                image: new Blob([body.image as any]),
                bookProfile: new Blob(
                    [JSON.stringify({ ...withoutImage, user_id })],
                    {
                        type: 'application/json',
                    }
                ),
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
