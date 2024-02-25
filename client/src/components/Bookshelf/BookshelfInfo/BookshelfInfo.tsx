import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './BookshelfInfo.module.scss';

const BookshelfInfo: FC = () => {
    const { t } = useTranslation('bookshelf');

    return (
        <aside className={styles.Wrapper}>
            <ul>
                {t('CounterASide', { returnObjects: true }).map(item => (
                    <li key={item}>
                        <Link to={''}>
                            {item}
                            <span> 0</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default BookshelfInfo;
