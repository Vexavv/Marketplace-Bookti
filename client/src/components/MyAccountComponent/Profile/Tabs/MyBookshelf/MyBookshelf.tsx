import {FC, memo, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router';
import { IResData } from '../../../../../store/slices/profileSlice/profileSliceTypes';
import BookItem from './BookItem/BookItem';
import styles from './MyBookshelf.module.scss';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from "../../../../../hook";
import {closeModal, openModal} from "../../../../../store/slices/modalSlice";
import {backUpFavorite} from "../../../../../store/slices/favoriteSlice/favoriteSlice";
import {getUserAsync} from "../../../../../store/slices/userSlices/authSlice";

const MyBookShelf: FC = memo(() => {
    const { t } = useTranslation(['profile','favorite']);
    const { content } = useLoaderData() as IResData;

    //-------------------------------------------------------------
    const dispatch = useAppDispatch()
    const updateFavorite = useAppSelector(state => state.favorite.updateData)
    const statusFavorite = useAppSelector(state => state.favorite.statusAdded)
    const handleOpenModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'},text: t('favorite:Modal.added')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }
    useEffect(() => {
        if(statusFavorite === 'loaded'){
            handleOpenModal();
            dispatch(backUpFavorite())

        }
    }, [statusFavorite]);

    useEffect(() => {
        dispatch(getUserAsync())
    }, [updateFavorite]);

    //-------------------------------------------------------------


    return (
        <div
            className={cn(styles.Wrapper, {
                [styles.IsGrid]: !!content.length,
            })}
        >
            {content.length ? (
                content.map(item => <BookItem key={item.id} {...item} />)
            ) : (
                <div className={styles.WrapperNotExist}>
                    {t('profile:bokkshelf.empty')}
                </div>
            )}
        </div>
    );
});

export default MyBookShelf;
