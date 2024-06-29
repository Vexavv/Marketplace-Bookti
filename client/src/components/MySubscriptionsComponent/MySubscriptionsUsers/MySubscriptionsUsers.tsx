import React, {useEffect} from 'react';
import styles from './MySubscriptionsUsers.module.scss'
import {useAppDispatch, useAppSelector} from "../../../hook";
import {getSubscriberAsync} from "../../../store/slices/subscriptionSlice/getSubscriber";

import UserItem from "./UserItem/UserItem";

const MySubscriptionsUsers = () => {
    const dispatch = useAppDispatch();
    const mySubscriptionsUsers = useAppSelector(state => state.subscriptions.subscribers)

    useEffect(() => {
        dispatch(getSubscriberAsync())
    },[])


    return (
        <ul className={styles.MyUsers}>
            { mySubscriptionsUsers ? ( mySubscriptionsUsers.map((item, index) => (
                <UserItem key={index} {...item} />
            ))) : <p>Loading ... </p>}
        </ul>
    );
};

export default MySubscriptionsUsers;