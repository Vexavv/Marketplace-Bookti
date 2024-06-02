import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hook';
import { useTranslation } from 'react-i18next';
import AddBookSuccess from '../../components/Bookshelf/AddBookSuccess/AddBookSuccess';
import AddBookForm from '../../components/Bookshelf/AddBookForm/AddBookForm';
import Container from '../../uiComponent/Container/Container';
import styles from './AddBook.module.scss';

const AddBook: FC = () => {
    const { statusAdded } = useAppSelector(state => state.addBook);
    const { t } = useTranslation('addBook');
    const navigate = useNavigate();

    return (
        <Container>
            <nav className={styles.Navigation}>
                <button
                    onClick={() => navigate(-1)}
                    className={styles.NavigationLink}
                >
                    <img src="/bookshelf/arrow-back.svg" alt="Go back" />
                    <p>{t('back')}</p>
                </button>
            </nav>
            {statusAdded === 'success' ? <AddBookSuccess /> : <AddBookForm />}
        </Container>
    );
};

export default AddBook;
