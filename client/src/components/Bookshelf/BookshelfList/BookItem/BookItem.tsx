import {FC} from 'react';
import Button from '../../../../uiComponent/Button/Button';
import styles from './BookItem.module.scss';
import {useTranslation} from 'react-i18next';
import {BookItemProps} from "./BookItem.props";
import {useAppDispatch} from "../../../../hook";
import {deleteBookAsync} from "../../../../store/slices/addBookSlice/deleteBookSliceAsync";

const BookItem: FC<BookItemProps> = ({id, title, imageUrl, author, language}) => {
    const {t} = useTranslation('bookshelf');
    const dispatch = useAppDispatch();
    const deleteBook = async () => {
        try {
            await dispatch(deleteBookAsync(id))
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className={styles.Wrapper}>
            <div className={styles.WrapperImgBox}>
                <img
                    src={imageUrl}
                    alt="Book"
                />
            </div>
            <div className={styles.WrapperInfoBox}>
                <div className={styles.WrapperInfoBoxHeading}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.WrapperInfoBoxBtnBox}>
                    <Button name="BookshelfEdit">
                        <img src="/bookshelf/edit.svg" alt="edit"/>
                        {t('BookItem.EditBnt')}
                    </Button>
                    <Button name="BookshelfEdit" onClick={deleteBook}>
                        <img src="/bookshelf/garbage.svg" alt="cart"/>
                        <p className={styles.WrapperInfoBoxBtnBoxDelete}>{t('BookItem.DeleteBtn')}</p>
                    </Button>
                </div>
            </div>
            <table className={styles.WrapperInfoBoxTable}>
                <tbody>
                <tr>
                    <th>
                        <p>{t('BookItem.Table.Author')}</p>
                    </th>
                    {/*<th>*/}
                    {/*    <p>{t('BookItem.Table.Genre')}</p>*/}
                    {/*</th>*/}
                    {/*<th>*/}
                    {/*    <p>{t('BookItem.Table.YearPublication')}</p>*/}
                    {/*</th>*/}
                    <th>
                        <p>{t('BookItem.Table.Language')}</p>
                    </th>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <th>
                        <p>{author}</p>
                    </th>
                    {/*<th>*/}
                    {/*    <p>{genre}</p>*/}
                    {/*</th>*/}
                    {/*<th>*/}
                    {/*    <p>1942 рік</p>*/}
                    {/*</th>*/}
                    <th>
                        <p>{language}</p>
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookItem;
