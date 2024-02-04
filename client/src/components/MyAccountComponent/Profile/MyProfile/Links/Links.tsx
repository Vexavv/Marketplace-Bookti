import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Links.module.scss';

const Links: FC = () => {
    const { t } = useTranslation('profile');

    return (
        <div className={styles.Links}>
            <span>{t('user-info.date-register')} Січень 2024</span>
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
                    mariyabooks@gmail.com
                </li>
                <li>
                    <img src="/profile/map-pin.svg" alt="" />
                    м. Київ, Україна
                </li>
            </ul>
        </div>
    );
};

export default Links;
