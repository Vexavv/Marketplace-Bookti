import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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
        openModal: (state, action: PayloadAction<{ type: string; props: any }>) => {
            const { type, props } = action.payload;
            state.isOpen = true;
            state.type = type;
            state.props = props;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.type = '';
            state.props = {};
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;