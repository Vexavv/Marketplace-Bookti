import React from 'react';
import styles from './UserItem.module.scss'
import Button from "../../../../uiComponent/Button/Button";
import {IUserItemProps} from "./UserItem.props";
import {useWindowSize} from "../../../../hooks/useWindowSize";
import {useAppDispatch} from "../../../../hook";
import {deleteSubscriberAsync} from "../../../../store/slices/subscriptionSlice/deleteSubscriber";
import {useTranslation} from "react-i18next";
const UserItem = ({subscriptionId, avatarUrl, fullName, location}:IUserItemProps) => {
    const {t} = useTranslation('mySubscriptions')
    const {width} = useWindowSize();
    const dispatch = useAppDispatch();

    const deleteSubscriber = async () => {
        try{
            await dispatch(deleteSubscriberAsync(subscriptionId));

        }catch(error){
            console.error(error)
        }
    }
    return (
        <li className={styles.Card}>
            <div className={styles.CardContent}>
                <div className={styles.CardContentAvatar}>
                    {avatarUrl ? <img src={avatarUrl} alt="user-avatar" style={width && width <= 400 ? {
                            width: '40px',
                            height: '40px'
                        } : width && width >= 900
                            ? {width: '70px', height: '70px'}
                            : {width: '50px', height: '50px'}}/>
                        : <img src="/header/user.svg" alt="user"
                               style={width && width <= 400 ? {width: '30px', height: '30px'} : {
                                   width: '40px',
                                   height: '40px'
                               }}/>
                    }
                </div>
                <div className={styles.CardContentText}>
                    <p className={styles.CardContentTextName}>{fullName}</p>
                    <p className={styles.CardContentTextCity}>{location}</p>
                </div>
                <div className={styles.CardContentButton}>
                    <Button name='SubscriptionUser'
                            onClick={deleteSubscriber}> {t('Button')}</Button>
                </div>
            </div>
        </li>
    );
};

export default UserItem;