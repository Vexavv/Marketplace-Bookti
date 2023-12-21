import React, {useState} from 'react';
import {useGoogleLogin, TokenResponse} from '@react-oauth/google';
import {useAppDispatch, useAppSelector} from "../../hook";
import {fetchUserData, logout, setUser,} from "../../store/slices/authSlice";


import { LoginSocialGoogle} from "reactjs-social-login";




const TestButtonGoogle = () => {
    const dispatch = useAppDispatch();
    //------------------Google------------------------------------------
    const user = useAppSelector(state => state.auth.data)
    // const userFacebook = useAppSelector(state => state.auth.dataFacebook)
    const loading = useAppSelector(state => state.auth.loading)
    const googleLogin = useGoogleLogin({
        onSuccess: (response: TokenResponse) => {
            dispatch(fetchUserData(response.access_token));
        },
    });


    const handleLogout = () => {
        dispatch(logout())
    };
    //------------------------------------FaceBok-------------------------------


    const renderContent = () => {

        if (user) {
            return <div><p>{user.name}</p>
                {/*<img src={user.picture} alt=""/>*/}
                <button onClick={handleLogout}>Logout</button>
            </div>;
        }


        return (

            <>
                {/*<button onClick={() => googleLogin()} disabled={googleLoading}>*/}
                {/*    Google*/}
                {/*</button>*/}
              <LoginSocialGoogle client_id={import.meta.env.VITE_REACT_APP_GOOGLE_ID}
                                                     onReject={(error) => {console.log(error)}}
                                                     onResolve={(response) => {console.log('GOOGLE',response)
                                                         // dispatch(setUser(response.data))
                                                         // dispatch(fetchUserData(response.access_token))
                                                     }}>
                    <button>Google</button>
                </LoginSocialGoogle>

            </>

        );
    };


    return(
        <>
            <div>{renderContent()}</div>

        </>

    );
};

export default TestButtonGoogle;

