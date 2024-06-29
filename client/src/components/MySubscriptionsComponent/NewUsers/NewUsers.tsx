import React, {useEffect} from 'react';
import styles from './NewUsers.module.scss'
import {useTranslation} from "react-i18next";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {Link} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hook";
import {getNewUsersAsync} from "../../../store/slices/subscriptionSlice/getNewUsersAsync";


const NewUsers = () => {


    const {t} = useTranslation('mySubscriptions')
    const {width} = useWindowSize();
    const dispatch = useAppDispatch();
    const newUsers = useAppSelector(state => state.subscriptions.users)
    console.log(newUsers)

    useEffect(() => {
        // Initial fetch
        dispatch(getNewUsersAsync());

        // Fetch every minute
        const interval = setInterval(() => {
            dispatch(getNewUsersAsync());
        }, 60000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [dispatch]);
    const reversedUsers = newUsers?.slice().reverse();
    return (
        <div className={styles.New}>
            {width && width >= 900 ? <div className={styles.NewTitle}>
                <h3>{t('NewUsers.users')}</h3>
                <Link to='#'>{t('NewUsers.more')}</Link>
            </div> : null}
            <ul className={styles.NewList}>
                {reversedUsers ? (reversedUsers.map(item => (
                    <li className={styles.NewListItem} key={item.id}>
                        <div className={styles.NewListItemAvatar}>
                            {item.avatarUrl ?
                                <img src={item.avatarUrl} alt="user-avatar"
                                     style={width && width <= 400 ? {width: '40px', height: '40px',borderRadius:'100px'} : {
                                         width: '50px',
                                         height: '50px',
                                         borderRadius:'100px'
                                     }}/>
                                : <img src="/header/user.svg" alt="user"
                                       style={width && width <= 400 ? {width: '30px', height: '30px'} : {
                                           width: '40px',
                                           height: '40px'
                                       }}/>
                            }
                        </div>
                        <div className={styles.NewListItemText}>
                            <p className={styles.NewListItemTextName}>{item.fullName}</p>
                            <p className={styles.NewListItemTextCity}>{item.location}</p>
                        </div>
                        <div className={styles.NewListItemArrow}><Link to={`/account/${item.id}`}><img src="/subscriptions/img.png" alt="arrow"/></Link></div>


                    </li>)
                )) : <p>Loading....</p>}
            </ul>

        </div>
    );
};

export default NewUsers;