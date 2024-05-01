import React, {useEffect} from 'react';
import styles from './Favorite.module.scss'
import {useAppDispatch, useAppSelector} from "../../hook";
import {useTranslation} from "react-i18next";
import Container from "../../uiComponent/Container/Container";
import Back from "../../uiComponent/Back/Back";
import BookItem from "../../components/Bookshelf/BookshelfList/BookItem/BookItem";
import FavoriteItem from "../../components/FavoriteCompanents/FavoriteItem/FavoriteItem";
import {getUserAsync, logout} from "../../store/slices/userSlices/authSlice";
import {closeModal, openModal} from "../../store/slices/modalSlice";
import {backUpDeleteFavorite, backUpFavorite} from "../../store/slices/favoriteSlice/favoriteSlice";

const Favorite = () => {
const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user)
    const statusDelete = useAppSelector(state=>state.favorite.statusDelete)
    const favBooks = user?.wishlist?.items
    const {t} = useTranslation('favorite');

//-------------------------------------------------------------------------------------------------------

    const handleOpenModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'},text: t('Modal.delete')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }
    useEffect(() => {
        if(statusDelete === 'loaded'){
            handleOpenModal();
            dispatch(backUpDeleteFavorite())
        }
    }, [statusDelete]);


    const updateDeleteFavorite = useAppSelector(state => state.favorite.deleteFavorite)
    useEffect(() => {
        dispatch(getUserAsync())
    }, [updateDeleteFavorite]);

//-------------------------------------------------------------------------------------------------------

    return (
        <Container>
            <Back text="Обране"/>
            <div className={styles.Favorite}>
                {favBooks && favBooks.length > 0 ? (favBooks.map(
                    (item, index) => (<FavoriteItem key={index} {...item} />)
                )) : <p>Favorite Пока ничего нет</p>}
            </div>


        </Container>
    );
};

export default Favorite;