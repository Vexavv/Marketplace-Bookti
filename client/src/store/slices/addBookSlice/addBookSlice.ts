import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { addBookAsync } from './addBookSliceAsync';
import { ISingleBook } from './addBookSlice.types';
import {deleteBookAsync} from "./deleteBookSliceAsync";

interface IInitialState {
    statusAdded: 'success' | 'loading' | 'error' | '';
    statusDelete:'success' | 'loading' | 'error' | '';
    data: ISingleBook | null;
    deleteBook:boolean;
    updateData:boolean
}

const initialState: IInitialState = {
    statusAdded: '',
    statusDelete:'',
    data: null,
    deleteBook:false,
    updateData: false,
};

const addBookSlice = createSlice({
    name: 'addBoocSlice',
    initialState,
    reducers: {
        setStatus: state => {
            state. statusAdded = '';
            state.updateData = false;
        },
        backUpDeleteBook: state =>{
            state.deleteBook = false;
            state.statusDelete = '';
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addBookAsync.pending, state => {
                state. statusAdded = 'loading';
            })
            .addCase(addBookAsync.fulfilled, (state, action:PayloadAction<ISingleBook>) => {
                // if(action.payload){
                    state.data = action.payload;
                    state. statusAdded = 'success';
                //     state.updateData = true;
                // }else{
                //     state.statusAdded = 'error';
                // }

            })
            .addCase(addBookAsync.rejected, state => {
                state. statusAdded = 'error';
            })
        //----------------------DELETE-----------------------------------------------
    .addCase(deleteBookAsync.pending, state => {
            state.statusDelete = 'loading';
        })
            .addCase(deleteBookAsync.fulfilled, (state, action:PayloadAction<ISingleBook>) => {
                if(action.payload){
                    state.data = action.payload;
                    state.statusDelete = 'success';
                    state.deleteBook = true

                }else{
                    state.statusDelete = 'error';
                }


            })
            .addCase(deleteBookAsync.rejected, state => {
                state.statusDelete = 'error';
            });
    },
});

export const { setStatus,backUpDeleteBook } = addBookSlice.actions;

export default addBookSlice.reducer;
