import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hook";
import {
    fetchUserData,
    logout,
    setUser,
    User,
    UserFacebook,
    setLoading, fetchUserDataFaceBook
} from "../../store/slices/authSlice";
import {IResolveParams, LoginSocialFacebook} from "reactjs-social-login";


import picture from '/footer/facebook.svg'
import {Navigate} from "react-router-dom";


const TestButtonGoogle = () => {
    const dispatch = useAppDispatch();
    //------------------Google------------------------------------------
    const user = useAppSelector(state => state.auth.data)
    console.log('UserFace', user)
    const loading = useAppSelector(state => state.auth.loading)
    console.log('UserLoading', loading)

    const handleLogout = () => {
        dispatch(logout())
    };
    //------------------------------------FaceBok-------------------------------

    const renderContent = () => {

        if (user) {
            // const imageUrl = user?.picture?.data?.url;
            return <div><p>{user.name}</p>
                {/*{imageUrl ? (*/}
                {/*    <img*/}
                {/*        src={imageUrl}*/}
                {/*        alt="Facebook Profile"*/}
                {/*        onError={(e) => {*/}
                {/*            console.error('Error loading image:', e);*/}
                {/*            console.error('Image URL:', imageUrl);*/}
                {/*        }}*/}
                {/*    />*/}
                {/*) : (*/}
                {/*    <p>No profile picture available</p>*/}
                {/*)}*/}

                <p>{user.email}</p>

                <button onClick={handleLogout}>Logout</button>
            </div>;
        }

        return (

            <>
                {loading && <Navigate to="/account" replace/>}
                <LoginSocialFacebook appId={import.meta.env.VITE_REACT_APP_FACEBOOK_ID}  onResolve={(response:IResolveParams | undefined) => {
                    console.log('RESPONSE',response)
                    // dispatch(setUser(response?.data as User | UserFacebook | null));
                    // dispatch(setLoading(true))
                    dispatch(fetchUserDataFaceBook(response?.data?.accessToken))

                    // dispatch(fetchUserDataFaceBook(response.data.accessToken))
                }} onReject={(error) => {console.log(error)
                }}>
                    {/*<img src={picture} alt=""/>*/}
                </LoginSocialFacebook>
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

