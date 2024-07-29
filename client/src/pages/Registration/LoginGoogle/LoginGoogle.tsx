import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { useAppDispatch } from '../../../hook';
import {
    loginGoogleAsync
} from '../../../store/slices/userSlices/authSlice';

const LoginGoogle = () => {
    const dispatch = useAppDispatch();
    const googleLogin = useGoogleLogin({
        onSuccess: async response => {
            // Exchange code for tokens
            try {
                const { access_token } = response;

                const url = `https://bookti-spring-backend-kwku.onrender.com/api/v1/authorize/login/oauth/google?accessToken=${access_token}`;

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
                    })
                );
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
