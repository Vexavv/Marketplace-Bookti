import React, { FC } from 'react';
import { Link, redirect, redirectDocument } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BookshelfInfo from '../../components/Bookshelf/BookshelfInfo/BookshelfInfo';
import BookshelfList from '../../components/Bookshelf/BookshelfList/BookshelfList';
import Container from '../../components/Container/Container';
import styles from './Bookshelf.module.scss';
import { useAppSelector } from '../../hook';

const Bookshelf: FC = () => {
    const { t } = useTranslation('bookshelf');
    const { user } = useAppSelector(state => state.auth);

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
