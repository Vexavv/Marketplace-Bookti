import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './BookshelfInfo.module.scss';

const BookshelfInfo: FC = () => {
    const { t } = useTranslation('bookshelf');

    return (
        <aside className={styles.Wrapper}>
            <ul>
                <li>
                    <Link to={''}>
                        {t('CounterASide.ReadyToTrade')}
                        <span> 0</span>
                    </Link>
                </li>
                <li>
                    <Link to={''}>
                        {t('CounterASide.Free')}
                        <span> 0</span>
                    </Link>
                </li>
                <li>
                    <Link to={''}>
                        {t('CounterASide.OnModeration')}
                        <span> 0</span>
                    </Link>
                </li>
                <li>
                    <Link to={''}>
                        {t('CounterASide.Rejected')}
                        <span> 0</span>
                    </Link>
                </li>
                <li>
                    <Link to={''}>
                        {t('CounterASide.Reserved')}
                        <span> 0</span>
                    </Link>
                </li>
                <li>
                    <Link to={''}>
                        {t('CounterASide.Deactivated')}
                        <span> 0</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default BookshelfInfo;
