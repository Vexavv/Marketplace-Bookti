import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './GoBack.module.scss';

const GoBack: FC = () => {
    const { t } = useTranslation('profile');
    const navigate = useNavigate();

    return (
        <nav className={styles.Navigation}>
            <button onClick={() => navigate(-1)}>
                <img src="bookshelf/arrow-back.svg" alt="Back" />
                <span>{t('nav')}</span>
            </button>
        </nav>
    );
};

export default GoBack;
