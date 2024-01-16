import { FC } from 'react';
import styles from './BookshelfInfo.module.scss';
import { useTranslation } from 'react-i18next';

const BookshelfInfo: FC = () => {
    const { t } = useTranslation('bookshelf');

    return (
        <aside className={styles.Wrapper}>
            <ul>
                <li>
                    {t('CounterASide.ReadyToTrade')}
                    <span> 1</span>
                </li>
                <li>
                    {t('CounterASide.Free')}
                    <span> 0</span>
                </li>
                <li>
                    {t('CounterASide.OnModeration')}
                    <span> 0</span>
                </li>
                <li>
                    {t('CounterASide.Rejected')}
                    <span> 0</span>
                </li>
                <li>
                    {t('CounterASide.Reserved')}
                    <span> 0</span>
                </li>
                <li>
                    {t('CounterASide.Deactivated')}
                    <span> 0</span>
                </li>
            </ul>
        </aside>
    );
};

export default BookshelfInfo;
