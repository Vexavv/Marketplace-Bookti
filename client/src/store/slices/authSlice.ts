import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    name: string;
    email?: string;
    picture: string;
}

interface UserState {
    isAuthenticated: boolean;
    data: User | null;
}

const initialState: UserState = {
    isAuthenticated: false,
    data: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.data = action.payload;
            state.isAuthenticated = true;
        },
        logout: state => {
            state.data = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;