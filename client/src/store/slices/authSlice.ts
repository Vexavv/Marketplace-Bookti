import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import axios, {AxiosResponse} from "axios";

interface User {
    map(): import("react").ReactNode | Iterable<import("react").ReactNode>;
    name: string;
    email?: string;
    picture: string;
}

interface UserState {
    loadingGoogle?: boolean;
    loadingFacebook?: boolean;
    data: User | null;
}

const initialState: UserState = {
    data: null,
    loadingGoogle: false,
    loadingFacebook:false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.data = action.payload;
        },
        setLoadingGoogle:(state, action: PayloadAction<boolean>) =>{
            state.loadingGoogle = action.payload;
            state.loadingGoogle = true;
        },
        logout: state => {
            state.data = null;
            state.loadingGoogle = false;
        },
    },
});
export const fetchUserData = (token: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoadingGoogle(true));
        const res: AxiosResponse<User> = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        dispatch(setUser(res.data));
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(setLoadingGoogle(false));
    }
};

export const { setUser, logout, setLoadingGoogle } = authSlice.actions;

export default authSlice.reducer;