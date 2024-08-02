import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { useAppDispatch } from '../../../hook';
import {
    getUserAsync,
    loginGoogleAsync
} from '../../../store/slices/userSlices/authSlice';
import { BASE_URL } from '../../../constants/api';

const LoginGoogle = () => {
    const dispatch = useAppDispatch();
    const googleLogin = useGoogleLogin({
        onSuccess: async response => {
            // Exchange code for tokens
            try {
                const { access_token } = response;

                const url = `${BASE_URL}/authorize/login/oauth/google?accessToken=${access_token}`;

                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ access_token }),
                };

                const data = await axios(url, requestOptions);

                await dispatch(
                    loginGoogleAsync({
                        userId: data.data.userId,
                        accessToken: data.data.accessToken,
                        refreshToken: data.data.refreshToken
                    })
                );
                await dispatch(getUserAsync());
            } catch (error: any) {
                console.log(error);
            }
        },
    });

    return (
        <button type="button" onClick={() => googleLogin()}>
            <img src="/login/google.svg" alt="google" />
        </button>
    );
};

export default LoginGoogle;
