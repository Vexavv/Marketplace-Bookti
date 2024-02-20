import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IResData } from './profileSliceTypes';
import { BASE_URL } from '../../../constants/api';

export const getBooksAsync = createAsyncThunk(
    'getBooksAsync',
    async (): Promise<IResData> => {
        try {
            const { data } = await axios.get<IResData>(`${BASE_URL}/books`);

            return data;
        } catch (error) {
            console.error('error adding a new book:', error);
            throw error;
        }
    }
);
