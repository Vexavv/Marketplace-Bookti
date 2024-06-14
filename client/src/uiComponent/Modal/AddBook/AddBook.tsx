import { useAppSelector } from '../../../hook';
import AddBookForm from '../../../components/Bookshelf/AddBookForm/AddBookForm';
import AddBookSuccess from '../../../components/Bookshelf/AddBookSuccess/AddBookSuccess';
import styles from './AddBook.module.scss';

const AddBook = () => {
    const  statusAdded  = useAppSelector(state => state.addBook.statusAdded);

    return (
        <div className={styles.Wrapper}>
            {statusAdded === 'success' ? <AddBookSuccess /> : <AddBookForm />}
        </div>
    );
};

export default AddBook;
