import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface ModalState {
    isOpen: boolean;
    type: string;
    props?: any;

}

const initialState: ModalState = {
    isOpen: false,
    type: '',
    props: {},

};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{
            type: string;
            props: any,
            text?: string,
            title?: string,
            author?: string,
            language?: string,
            imageUrl?: string | null,
            publicationYear?: string,
            genre?: string
        }>) => {
            const {type, props, text, title, author, language, imageUrl, publicationYear, genre} = action.payload;
            state.isOpen = true;
            state.type = type;
            state.props = props;
            state.props = {...props, text, author, title, language, imageUrl, publicationYear, genre};

        },
        closeModal: (state) => {
            state.isOpen = false;
            state.type = '';
            state.props = {};
        },
    },
});

export const {openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;