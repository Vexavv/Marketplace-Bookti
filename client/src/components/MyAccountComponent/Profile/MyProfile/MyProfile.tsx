import { FC } from 'react';
import { useAppSelector } from '../../../../hook';
import Links from './UserInfo/Links/Links';
import UserInfo from './UserInfo/UserInfo';
import styles from './MyProfile.module.scss';

const MyProfile: FC = () => {
    const { user } = useAppSelector(state => state.auth);

    return (
        <aside className={styles.UserInfo}>
            <UserInfo user={user} />
            <Links user={user} />
        </aside>
    );
};

export default MyProfile;
