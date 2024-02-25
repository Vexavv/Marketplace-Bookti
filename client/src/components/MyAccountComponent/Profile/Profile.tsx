import { FC } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import MyProfile from './MyProfile/MyProfile';
import Tabs from './Tabs/Tabs';
import styles from './Profile.module.scss';
import { BrowserRouter } from 'react-router-dom';

const Profile: FC = () => {
    const { t } = useTranslation('profile');
    const navigate = useNavigate();

    return (
        <section className={styles.Wrapper}>
            <nav className={styles.WrapperNavigation}>
                <button onClick={() => navigate(-1)}>
                    <img src="/bookshelf/arrow-back.svg" alt="Back" />
                    <span>{t('nav')}</span>
                </button>
            </nav>
            <MyProfile />

            <Tabs />
        </section>
    );
};

export default Profile;
