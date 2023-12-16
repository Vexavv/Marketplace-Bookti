import React from 'react';
import { useGoogleLogin, TokenResponse } from '@react-oauth/google';

import {useAppDispatch, useAppSelector} from "../../hook";
import {fetchUserData,logout} from "../../store/slices/authSlice";


const TestButtonGoogle = () => {
    const dispatch = useAppDispatch();
    const tokenResponse = useAppSelector(state => state.auth.data)
    const googleLoading = useAppSelector(state => state.auth.loadingGoogle)

    const googleLogin = useGoogleLogin({
        onSuccess:  (response: TokenResponse) => {
            dispatch(fetchUserData(response.access_token));
        },
    });

    const handleLogout = () => {
        dispatch(logout())
    };
    const renderContent = () => {
        if (googleLoading) {
            return <p>Loading...</p>;
        }

        if (tokenResponse) {
            return <div><p>{tokenResponse.name}</p>
                <img src={tokenResponse.picture} alt=""/>
                <button onClick={handleLogout}>Logout</button>
            </div>;
        }

        return (
            <button onClick={() => googleLogin()}  disabled={googleLoading}>
                Google
            </button>
        );
    };

    return <div>{renderContent()}</div>;
};

export default TestButtonGoogle;

