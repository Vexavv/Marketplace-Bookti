import {FC, memo, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import BookItem from './BookItem/BookItem';
import styles from './MyBookshelf.module.scss';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../../../../hook';
import {closeModal, openModal} from '../../../../../store/slices/modalSlice';
import {backUpFavorite} from '../../../../../store/slices/favoriteSlice/favoriteSlice';
import {getUserAsync} from '../../../../../store/slices/userSlices/authSlice';
import {backUpDeleteBook} from "../../../../../store/slices/addBookSlice/addBookSlice";

const MyBookShelf: FC = memo(() => {
    const {t} = useTranslation(['profile', 'favorite','bookshelf']);

    const {user} = useAppSelector(state => state.auth);

    const userBooks = user?.books?.items;
    //------------------------------------------------------------- add to favorite---------------------------
    const dispatch = useAppDispatch();
    const updateFavorite = useAppSelector(state => state.favorite.updateData);
    const statusFavorite = useAppSelector(state => state.favorite.statusAdded);

    const handleOpenModal = () => {
        dispatch(
            openModal({
                type: 'informMessage',
                props: {key: 'value'},
                text: t('favorite:Modal.added'),
            })
        );
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    };
    useEffect(() => {
        if (statusFavorite === 'loaded') {
            handleOpenModal();
            dispatch(backUpFavorite());
        }
    }, [statusFavorite]);

    useEffect(() => {
        dispatch(getUserAsync());
    }, [updateFavorite]);

    //-------------------------------------------------------------
    // ---------------------------delete book----------------------
    const statusDeleteBook = useAppSelector(state => state.addBook.statusDelete)
    const updateDeleteBook = useAppSelector(state => state.addBook.deleteBook)
    const handleDeleteModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'},text: t('bookshelf:Modal')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }
    useEffect(() => {
        if(statusDeleteBook === 'success'){
            handleDeleteModal();
            dispatch(backUpDeleteBook())
        }
    }, [statusDeleteBook]);


    useEffect(() => {
        dispatch(getUserAsync())
    }, [updateDeleteBook]);
    //-------------------------------------------------------------
    return (
        <div
            className={cn(styles.Wrapper, {
                [styles.IsGrid]: !!userBooks?.length,
            })}
        >
            {userBooks?.length ? (
                userBooks.map(item => <BookItem key={item.id} {...item} />)
            ) : (
                <div className={styles.WrapperNotExist}>
                    {t('profile:bokkshelf.empty')}
                </div>
            )}
        </div>
    );
});

export default MyBookShelf;
