import React, {useEffect} from 'react';
import styles from './MySubscriptionsUsers.module.scss'
import {useAppDispatch, useAppSelector} from "../../../hook";
import {getSubscriberAsync} from "../../../store/slices/subscriptionSlice/getSubscriber";
import UserItem from "./UserItem/UserItem";
import {useTranslation} from "react-i18next";
import {closeModal, openModal} from "../../../store/slices/modalSlice";
import {backUpDeleteSubscriber} from "../../../store/slices/subscriptionSlice/subscriptionsSlice";

const MySubscriptionsUsers = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation('mySubscriptions')
    const {subscribers, deleteSubscriber, statusDelete} = useAppSelector(state => state.subscriptions)
    
    console.log(subscribers)
    const handleOpenModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'}, text: t('Modal.delete')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }
    useEffect(() => {
        if (statusDelete === 'loaded') {
            handleOpenModal();
            dispatch(backUpDeleteSubscriber())
        }
    }, [statusDelete]);
    useEffect(() => {
        dispatch(getSubscriberAsync())
    }, [deleteSubscriber])


    return (
        <ul className={styles.MyUsers}>
            {subscribers && subscribers.length > 0 ? (subscribers.map((item, index) => (
                <UserItem key={index} {...item} />
            ))) : <p>Ви ще не додали жодного користувача </p>}
        </ul>
    );
};

export default MySubscriptionsUsers;