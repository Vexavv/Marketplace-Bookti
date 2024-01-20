import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AddBookForm from '../../components/Bookshelf/AddBookForm/AddBookForm';
import Container from '../../uiComponent/Container/Container';
import styles from './AddBook.module.scss';

const AddBook: FC = () => {
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
            <AddBookForm />
        </Container>
    );
};

export default AddBook;
