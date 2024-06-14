import axios, {AxiosResponse} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IFormFilds } from '../../../components/Bookshelf/AddBookForm/AddBook.types';
import { BASE_URL } from '../../../constants/api';
import { ISingleBook } from './addBookSlice.types';

export const addBookAsync = createAsyncThunk(
    'addBookAsync',
    async (body: IFormFilds, { getState }) => {
        // @ts-ignore
        const { userId, accessToken } = getState().auth.data;
        const { image, ...withoutImage } = body;

        const response:AxiosResponse<ISingleBook> = await axios.post(
            `${BASE_URL}/books?userId=${userId}`,
            {
                image: new Blob([body.image as any]),
                bookPayload: new Blob([JSON.stringify(withoutImage)], {
                    type: 'application/json',
                }),
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        console.log('Response data:', response.data);
        console.log('Response:', response);
        return response.data;
    }
);
