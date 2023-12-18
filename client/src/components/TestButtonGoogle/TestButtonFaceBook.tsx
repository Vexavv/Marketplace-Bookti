import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hook";
import {fetchUserData, logout, setUser, fetchUserDataFaceBook, User, UserFacebook} from "../../store/slices/authSlice";
import {IResolveParams, LoginSocialFacebook} from "reactjs-social-login";


import picture from '/footer/facebook.svg'


const TestButtonGoogle = () => {
    const dispatch = useAppDispatch();
    //------------------Google------------------------------------------
    const user = useAppSelector(state => state.auth.data)
    console.log('UserFace', user)
    const loading = useAppSelector(state => state.auth.loading)


    const handleLogout = () => {
        dispatch(logout())
    };
    //------------------------------------FaceBok-------------------------------

    const renderContent = () => {

        if (user) {
            // const imageUrl = user?.picture?.data?.url;
            return <div><p>{user.name}</p>
                {/*{imageUrl ? (*/}
                {/*    <img src={imageUrl} alt="Facebook Profile" />*/}
                {/*) : (*/}
                {/*    <p>No profile picture available</p>*/}
                {/*)}*/}

                <p>{user.email}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>;
        }

        return (

            <>
                <LoginSocialFacebook appId={import.meta.env.VITE_REACT_APP_FACEBOOK_ID}  onResolve={(response:IResolveParams | undefined) => {
                    console.log('RESPONSE',response)
                    dispatch(setUser(response?.data as User | UserFacebook | null));
                    // dispatch(fetchUserDataFaceBook(response?.data.accessToken))

                    // dispatch(fetchUserDataFaceBook(response.data.accessToken))
                }} onReject={(error) => {console.log(error)
                }}>
                    <img src={picture} alt=""/>
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

