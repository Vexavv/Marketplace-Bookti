import { FC } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import MyProfile from './MyProfile/MyProfile';
import Tabs from './Tabs/Tabs';
import styles from './Profile.module.scss';
import Back from "../../../uiComponent/Back/Back";
import {useAppSelector} from "../../../hook";

const Profile: FC = () => {
    const { t } = useTranslation('profile');
    const { user } = useAppSelector(state => state.auth);
    return (
        <section className={styles.Wrapper}>
            <Back text={t('nav')}/>
            <MyProfile/>
            <Tabs user={user}/>
        </section>
    );
};

export default Profile;
