import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import BookItem from './BookItem/BookItem';
import Button from '../../../uiComponent/Button/Button';
import styles from './BookshelfList.module.scss';

interface IBookshelfListProps {
    books: any[];
}

const BookshelfList: FC<IBookshelfListProps> = ({ books }) => {
    const { t } = useTranslation('bookshelf');

    const splitTitle = (title: string) => {
        return title.split(/(?=[A-ZА-ЯЁ])/).join('\n');
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
                        <Button>{t('BookshelfListNotExist.Button')}</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookshelfList;
