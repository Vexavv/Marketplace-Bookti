import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useWindowSize } from '../../../../../hooks/useWindowSize';
import { Rating } from 'react-simple-star-rating';
import styles from './UserInfo.module.scss';
import cn from 'classnames';
import { User } from '../../../../../types';

interface IUserInfoProps {
    user: User | null;
}

const UserInfo: FC<IUserInfoProps> = ({ user }) => {
    const { t } = useTranslation('profile');
    const { width } = useWindowSize();
    const [subscribe, setSubscribe] = useState<boolean>(false);

    return (
        <div className={styles.UserInfo}>
            <div
                className={cn(styles.UserInfoImageBox, {
                    [styles.IsOnline]: true,
                })}
            >
                {user?.avatar_url ? (
                    <img src={user.avatar_url} alt="Avatar" />
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
                <span>{user?.full_name}</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    <button onClick={() => setSubscribe(!subscribe)}>
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
                        onClick={() => setSubscribe(!subscribe)}
                    >
                        {t('user-info.btns.subscribe')}
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserInfo;
