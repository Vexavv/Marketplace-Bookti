import {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {useWindowSize} from '../../../../../hooks/useWindowSize';
import {Rating} from 'react-simple-star-rating';
import styles from './UserInfo.module.scss';
import cn from 'classnames';
import {User} from '../../../../../types';
import {useAppDispatch, useAppSelector} from "../../../../../hook";
import {postNewSubscriberAsync} from "../../../../../store/slices/subscriptionSlice/postNewSubscriber";

interface IUserInfoProps {
    user: User | null;
}

const UserInfo: FC<IUserInfoProps> = ({user}) => {
    const {t} = useTranslation('profile');
    const {width} = useWindowSize();
    const dispatch = useAppDispatch();
    const subscribers = useAppSelector(state => state.subscriptions.subscribers)
    console.log('ADD SUB', subscribers)
    const [subscribe, setSubscribe] = useState<boolean>(false);

    useEffect(() => {
        const checkSubscribe = subscribers?.some(item => item.userId === user?.id)
        setSubscribe(!!checkSubscribe)
    }, [subscribers, user?.id]);

    //------------------------subscribe--------------------------------
    const addToSubscribe = async () => {
        if (typeof user?.id !== 'number') {
            console.error('ID is undefined or not a number');
            return;
        }

        try {
            await dispatch(postNewSubscriberAsync(user?.id));
            setSubscribe(true);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className={styles.UserInfo}>
            <div
                className={cn(styles.UserInfoImageBox, {
                    [styles.IsOnline]: true,
                })}
            >
                {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt="Avatar" className={styles.UserInfoImageBoxAvatar}/>
                ) : (
                    <img
                        src="/header/user.svg"
                        alt="Avatar"
                        width={45}
                        height={45}
                    />
                )}
            </div>
            <div className={styles.UserInfoNameBox}>
                <span>{user?.fullName}</span>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Rating
                        initialValue={2}
                        readonly
                        size={width && width <= 900 ? 17 : 24}
                    />
                    <span>(0)</span>
                </div>
            </div>
            <div className={styles.UserInfoBoxBtns}>
                {subscribe ? (
                    <button>
                        <img
                            width={20}
                            height={20}
                            src="/profile/check-mark.svg"
                            alt=""
                        />
                        {t('user-info.btns.signed')}
                    </button>
                ) : (
                    <button
                        className={styles.Subscribe}
                        onClick={addToSubscribe}
                    >
                        {t('user-info.btns.subscribe')}
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserInfo;
