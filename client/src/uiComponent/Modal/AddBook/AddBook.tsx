import { useAppSelector } from '../../../hook';
import AddBookForm from '../../../components/Bookshelf/AddBookForm/AddBookForm';
import AddBookSuccess from '../../../components/Bookshelf/AddBookSuccess/AddBookSuccess';
import styles from './AddBook.module.scss';

const AddBook = () => {
    const { status } = useAppSelector(state => state.addBook);

    return (
        <div className={styles.Wrapper}>
            {status === 'success' ? <AddBookSuccess /> : <AddBookForm />}
        </div>
    );
};

export default AddBook;
