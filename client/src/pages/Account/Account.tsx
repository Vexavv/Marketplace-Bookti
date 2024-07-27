import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useAppDispatch} from "../../hook";
import {postNewSubscriberAsync} from "../../store/slices/subscriptionSlice/postNewSubscriber";
import {getSubscriberAsync} from "../../store/slices/subscriptionSlice/getSubscriber";
import Container from "../../uiComponent/Container/Container";
import Back from "../../uiComponent/Back/Back";
import {useTranslation} from "react-i18next";
import UserInfo from "../../components/MyAccountComponent/Profile/MyProfile/UserInfo/UserInfo";
import { useLocation } from 'react-router-dom';

const Account = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    if (!id) {
        return <div>Loading...</div>; // Либо другая обработка, если id отсутствует
    }
    // const location = useLocation();
    // const { user } = location.state || {};
    let { state } = useLocation();
    console.log(state)
    return (
        <Container>
            <Back text={t('back')}></Back>
            <UserInfo user={state.user}></UserInfo>

            <div>
                user {id}

                <button onClick={() => dispatch(postNewSubscriberAsync(id))}>Subscribe</button>

            </div>

        </Container>

    );
};

export default Account;