import { FC } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { openModal } from '../../../store/slices/modalSlice';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useAppDispatch, useAppSelector } from '../../../hook';
import BookItem from './BookItem/BookItem';
import Button from '../../../uiComponent/Button/Button';
import styles from './BookshelfList.module.scss';
import { setStatus } from '../../../store/slices/addBookSlice';

interface IBookshelfListProps {
    books: any[];
}

const BookshelfList: FC<IBookshelfListProps> = ({ books }) => {
    const { data } = useAppSelector(state => state.addBook);
    const { t } = useTranslation('bookshelf');
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const splitTitle = (title: string) => {
        return title.split(/(?=[A-ZА-ЯЁ])/).join('\n');
    };

    const handleOpenModal = () => {
        if (data) dispatch(setStatus());
        if (width && width <= 900) {
            navigate('/bookshelf/add-book');
        } else {
            dispatch(
                openModal({
                    type: 'addBook',
                    props: { key: '' },
                })
            );
        }
    };

    return (
        <div className={styles.Wrapper}>
            {books.length ? (
                <div className={styles.WrapperListBox}>
                    {books.map(item => (
                        <BookItem key={item} />
                    ))}
                    <div className={styles.WrapperListBoxBtnBox}>
                        <Button name="BookshelfAdd">
                            <img src="/bookshelf/plus.svg" alt="Plus" />
                            {t('BookshelfListNotExist.Button')}
                        </Button>
                    </div>
                </div>
            ) : (
                <div className={styles.WrapperNotExistBooksBlock}>
                    <img
                        src="/bookshelf/not-exist-books.png"
                        alt="Books does not exist"
                    />
                    <div className={styles.TitleBox}>
                        <h1>{splitTitle(t('BookshelfListNotExist.Title'))}</h1>
                    </div>
                    <div>
                        <Button onClick={handleOpenModal}>
                            {t('BookshelfListNotExist.Button')}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookshelfList;
