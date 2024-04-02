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
            image_url?: string | null,
            publication_date?: string,
            genre?: string
        }>) => {
            const {type, props, text, title, author, language, image_url, publication_date, genre} = action.payload;
            state.isOpen = true;
            state.type = type;
            state.props = props;
            state.props = {...props, text, author, title, language, image_url, publication_date, genre};

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