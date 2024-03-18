import React from 'react';
import styles from './MySubscriptionsUsers.module.scss'
import {User} from "../../../types";
import Button from "../../../uiComponent/Button/Button";
import {useTranslation} from "react-i18next";
import {useWindowSize} from "../../../hooks/useWindowSize";

const mySubscriptionsUsers: User[] = [
    {id: 1, avatar_url: "", full_name: "Вася Семенов", location: "Kyiv", email: ""},
    {id: 2, avatar_url: "/test/photoUser.png", full_name: "Олена Коваль", location: "Kyiv", email: ""}
]
const MySubscriptionsUsers = () => {
    const {t} = useTranslation('mySubscriptions')
    const {width} = useWindowSize();
    return (
        <ul className={styles.MyUsers}>
            {mySubscriptionsUsers.map(item => (
                <li className={styles.MyUsersItem} key={item.id}>
                    <div className={styles.MyUsersItemContent}>
                        <div className={styles.MyUsersItemContentAvatar}>
                            {item.avatar_url ? <img src={item.avatar_url} alt="user-avatar" style={width && width <= 400 ?{ width: '40px', height: '40px' } : width && width >= 900
                                    ? { width: '70px', height: '70px' }
                                    : { width: '50px', height: '50px' }}/>
                                : <img src="/header/user.svg" alt="user" style={width && width <= 400 ?{ width: '30px', height: '30px' }:{ width: '40px', height: '40px' }}/>
                            }
                        </div>
                        <div className={styles.MyUsersItemContentText}>
                            <p className={styles.MyUsersItemContentTextName}>{item.full_name}</p>
                            <p className={styles.MyUsersItemContentTextCity}>{item.location}</p>
                        </div>
                        <div className={styles.MyUsersItemContentButton}>
                            <Button name='SubscriptionUser'> <img style={{marginRight:'5px'}} src="/subscriptions/Vector.png" alt="Vector"/> {t('Button')}</Button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MySubscriptionsUsers;