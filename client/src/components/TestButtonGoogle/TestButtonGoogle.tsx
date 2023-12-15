// import React from 'react';
// import { useGoogleLogin } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';
//
// const TestButtonGoogle = () => {
//     const googleLogin = useGoogleLogin({
//         onSuccess: tokenResponse => console.log(tokenResponse),
//
//     });
//
//     return (
//         <div>
//             <button onClick={() => {
//                 googleLogin()
//             }}>
//                 Google
//             </button>
//         </div>
//
//     );
// };
//
// export default TestButtonGoogle;

import React, { useState } from 'react';
import { useGoogleLogin, TokenResponse } from '@react-oauth/google';
// import jwt from 'jsonwebtoken';
const TestButtonGoogle = () => {
    // Стейт для хранения токена
    const [tokenResponse, setTokenResponse] = useState<TokenResponse | null>(null);

    const googleLogin = useGoogleLogin({
        onSuccess: (response: TokenResponse) => {
            console.log(response);

            // Сохраняем токен в стейт
            setTokenResponse(response);
            // const decodedToken = jwt.decode(response.access_token);
            // console.log(decodedToken)
        },
    });

    // Доступ к tokenResponse вне функции onSuccess
    console.log('Token outside onSuccess:', tokenResponse);

    return (
        <div>
            <button onClick={() => {
                googleLogin();
            }}>
                Google
            </button>
        </div>
    );
};

export default TestButtonGoogle;
