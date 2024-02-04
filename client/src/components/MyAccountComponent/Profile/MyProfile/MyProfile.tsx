import { FC } from 'react';
import { useAppSelector } from '../../../../hook';
import Links from './Links/Links';
import UserInfo from './UserInfo/UserInfo';
import styles from './MyProfile.module.scss';
import { useTranslation } from 'react-i18next';

const MyProfile: FC = () => {
    const { t } = useTranslation('profile');
    const { user } = useAppSelector(state => state.auth);

    return (
        <section className={styles.Wrapper}>
            <aside className={styles.WrapperUserInfo}>
                <UserInfo user={user} />
                <Links />
            </aside>
            <ul className={styles.WrapperList}>
                <li>{t('list.my-bookshelf')} 0</li>
                <li>{t('list.interested')} 0</li>
                <li>{t('list.reviews')} 0</li>
            </ul>
        </section>
    );
};

export default MyProfile;
