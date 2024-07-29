import React from 'react';
import {useParams} from "react-router";
import {useAppDispatch} from "../../hook";
import Container from "../../uiComponent/Container/Container";
import Back from "../../uiComponent/Back/Back";
import {useTranslation} from "react-i18next";
import UserInfo from "../../components/MyAccountComponent/Profile/MyProfile/UserInfo/UserInfo";
import {useLocation} from 'react-router-dom';
import Links from "../../components/MyAccountComponent/Profile/MyProfile/UserInfo/Links/Links";
import styles from "./Account.module.scss";
import Tabs from "../../components/MyAccountComponent/Profile/Tabs/Tabs";

const Account = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {t} = useTranslation('profile');
    if (!id) {
        return <div>Loading...</div>; // Либо другая обработка, если id отсутствует
    }

    let {state} = useLocation();
    console.log(state)
    return (
        <Container>
            <Back text={t('back')}></Back>
            <aside className={styles.UserInfo}>
                <UserInfo user={state.user}></UserInfo>
                <Links user={state.user}/>
            </aside>
            <Tabs user={state.user}/>
        </Container>

    );
};

export default Account;