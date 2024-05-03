import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../hook';
import { getRegistrationDate } from '../../../../../../utils/CreatingDateAccount';
import styles from './Links.module.scss';

const Links: FC = () => {
    const { t } = useTranslation('profile');
    const { user } = useAppSelector(state => state.auth);

    return (
        <div className={styles.Links}>
            <span>
                {t('user-info.date-register')}{' '}
                {getRegistrationDate(user?.creationDate!)}
            </span>
            <ul>
                <li
                    style={{
                        textDecoration: 'underline',
                        color: '#005BBB',
                    }}
                >
                    <img src="/profile/location.svg" alt="" />
                    Показати
                </li>
                <li>
                    <img src="/profile/mail.svg" alt="" />
                    {user?.email}
                </li>
                <li>
                    <img src="/profile/map-pin.svg" alt="" />
                    {user?.location}
                </li>
            </ul>
        </div>
    );
};

export default Links;
