import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BookshelfInfo from '../../components/Bookshelf/BookshelfInfo/BookshelfInfo';
import BookshelfList from '../../components/Bookshelf/BookshelfList/BookshelfList';
import Container from '../../uiComponent/Container/Container';
import styles from './Bookshelf.module.scss';

const Bookshelf: FC = () => {
    const { t } = useTranslation('bookshelf');

    return (
        <Container>
            <nav className={styles.WrapperNavigation}>
                <Link to={'/'} className={styles.WrapperNavigationLink}>
                    <img src="/bookshelf/arrow-back.svg" alt="Go back" />
                    <p>{t('Nav')}</p>
                </Link>
            </nav>
            <section className={styles.WrapperSection}>
                <BookshelfInfo />
                <BookshelfList books={[]} />
            </section>
        </Container>
    );
};

export default Bookshelf;
