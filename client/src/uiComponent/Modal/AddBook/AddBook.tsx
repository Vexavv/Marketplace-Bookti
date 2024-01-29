import { useAppSelector } from '../../../hook';
import AddBookForm from '../../../components/Bookshelf/AddBookForm/AddBookForm';
import AddBookSuccess from '../../../components/Bookshelf/AddBookSuccess/AddBookSuccess';

const AddBook = () => {
    const { status } = useAppSelector(state => state.addBook);

    return status === 'success' ? <AddBookSuccess /> : <AddBookForm />;
};

export default AddBook;
